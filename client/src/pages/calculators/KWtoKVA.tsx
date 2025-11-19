import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, ArrowLeft } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  kw: z.coerce.number().positive("Real power must be positive"),
  powerFactor: z.coerce.number().min(0.01, "Must be at least 0.01").max(1, "Must be at most 1.0"),
});

type FormValues = z.infer<typeof formSchema>;

export default function KWtoKVA() {
  const [result, setResult] = useState<{
    kva: number;
    kvar: number;
    phaseAngle: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kw: 0,
      powerFactor: 0,
    },
  });

  const onSubmit = (values: FormValues) => {
    const { kw: P, powerFactor: pf } = values;

    const S = P / pf;
    const angle = Math.acos(pf) * (180 / Math.PI);
    const Q = P * Math.tan(Math.acos(pf));

    setResult({
      kva: S,
      kvar: Q,
      phaseAngle: angle,
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
          <span className="text-foreground">kW to kVA Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <ArrowLeft className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            kW to kVA Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Convert real power (kW) to apparent power (kVA) using power factor
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Convert kW to kVA
            </CardTitle>
            <CardDescription>
              Enter real power and power factor to calculate apparent power
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="kw"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Real Power (kW)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 85"
                            data-testid="input-kw"
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
                    name="powerFactor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Factor (cos φ)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 0.85"
                            data-testid="input-power-factor"
                            min="0.01"
                            max="1"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">Range: 0.01 to 1.0 (typical: 0.7-0.95)</p>
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
                  Convert to kVA
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5 text-primary" />
                  Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Apparent Power (S)</p>
                    <p className="text-3xl font-mono font-bold text-primary" data-testid="result-kva">
                      {result.kva.toFixed(2)} kVA
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Reactive Power (Q)</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-kvar">
                      {result.kvar.toFixed(2)} kVAR
                    </p>
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm text-muted-foreground">Phase Angle (φ)</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-phase-angle">
                      {result.phaseAngle.toFixed(2)}°
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-md space-y-2">
                  <p className="text-sm font-medium text-foreground">Formula Used:</p>
                  <code className="text-sm font-mono text-muted-foreground block">
                    S (kVA) = P (kW) / cos φ
                  </code>
                  <code className="text-sm font-mono text-muted-foreground block">
                    Q (kVAR) = P (kW) × tan φ
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Where cos φ is the power factor and φ is the phase angle
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <CalculatorAccordion items={getCalculatorAccordion("kw-to-kva")} />
      </div>
    </div>
  );
}
