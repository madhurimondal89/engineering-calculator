import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, Zap } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  realPower: z.coerce.number().positive("Real power must be positive"),
  currentPF: z.coerce.number().min(0.01, "Must be at least 0.01").max(1, "Must be at most 1.0"),
  targetPF: z.coerce.number().min(0.01, "Must be at least 0.01").max(1, "Must be at most 1.0"),
  voltage: z.coerce.number().positive("Voltage must be positive"),
  frequency: z.coerce.number().positive("Frequency must be positive"),
}).refine((data) => data.targetPF > data.currentPF, {
  message: "Target power factor must be higher than current power factor",
  path: ["targetPF"],
});

type FormValues = z.infer<typeof formSchema>;

export default function PowerFactorCorrection() {
  const [result, setResult] = useState<{
    capacitance: number;
    kVAR: number;
    currentReactivePower: number;
    targetReactivePower: number;
    reactivePowerReduction: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      realPower: 0,
      currentPF: 0,
      targetPF: 0,
      voltage: 0,
      frequency: 60,
    },
  });

  const onSubmit = (values: FormValues) => {
    const { realPower: P, currentPF: pfCurrent, targetPF: pfTarget, voltage: V, frequency: f } = values;

    const angleCurrent = Math.acos(pfCurrent);
    const angleTarget = Math.acos(pfTarget);

    const QCurrent = P * Math.tan(angleCurrent);
    const QTarget = P * Math.tan(angleTarget);
    const Qc = QCurrent - QTarget;

    const C = (Qc * 1000) / (2 * Math.PI * f * V * V);

    setResult({
      capacitance: C * 1e6,
      kVAR: Qc,
      currentReactivePower: QCurrent,
      targetReactivePower: QTarget,
      reactivePowerReduction: Qc,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/#power-system" className="hover:text-foreground">Power System</a>
          <span>/</span>
          <span className="text-foreground">Power Factor Correction Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Zap className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            Power Factor Correction Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate capacitor size required to improve power factor and reduce reactive power
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate Capacitor Size
            </CardTitle>
            <CardDescription>
              Enter real power, current and target power factors, voltage, and frequency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="realPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Real Power (kW)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 100"
                            data-testid="input-real-power"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentPF"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Power Factor</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 0.7"
                            data-testid="input-current-pf"
                            min="0.01"
                            max="1"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">Range: 0.01 to 1.0</p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="targetPF"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Power Factor</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 0.95"
                            data-testid="input-target-pf"
                            min="0.01"
                            max="1"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">Range: 0.01 to 1.0 (must be higher than current PF)</p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="voltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Line Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 480"
                            data-testid="input-voltage"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency (Hz)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 60"
                            data-testid="input-frequency"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">Common: 60 Hz (North America), 50 Hz (Europe)</p>
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  data-testid="button-calculate"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Capacitor Size
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Required Capacitance</p>
                    <p className="text-2xl font-mono font-bold text-primary" data-testid="result-capacitance">
                      {result.capacitance.toFixed(2)} µF
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Capacitor kVAR Rating</p>
                    <p className="text-2xl font-mono font-bold text-primary" data-testid="result-kvar">
                      {result.kVAR.toFixed(2)} kVAR
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Current Reactive Power</p>
                    <p className="text-xl font-mono font-bold text-foreground" data-testid="result-current-q">
                      {result.currentReactivePower.toFixed(2)} kVAR
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Target Reactive Power</p>
                    <p className="text-xl font-mono font-bold text-foreground" data-testid="result-target-q">
                      {result.targetReactivePower.toFixed(2)} kVAR
                    </p>
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm text-muted-foreground">Reactive Power Reduction</p>
                    <p className="text-xl font-mono font-bold text-green-600 dark:text-green-400" data-testid="result-reduction">
                      {result.reactivePowerReduction.toFixed(2)} kVAR
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium text-foreground mb-2">Formula Used:</p>
                  <code className="text-xs font-mono text-muted-foreground block">
                    Q<sub>current</sub> = P × tan(cos⁻¹(PF<sub>current</sub>))
                    <br />
                    Q<sub>target</sub> = P × tan(cos⁻¹(PF<sub>target</sub>))
                    <br />
                    Q<sub>c</sub> = Q<sub>current</sub> - Q<sub>target</sub>
                    <br />
                    C = Q<sub>c</sub> / (2πfV²)
                  </code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        "<CalculatorAccordion content={getCalculatorAccordion("power-factor-correction")} />
      </div>
    </div>
  );
}
