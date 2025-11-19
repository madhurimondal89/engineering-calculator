import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, Triangle } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  realPower: z.coerce.number().positive("Real power must be positive"),
  reactivePower: z.coerce.number().positive("Reactive power must be positive"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ApparentPower() {
  const [result, setResult] = useState<{
    apparentPower: number;
    powerFactor: number;
    phaseAngle: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      realPower: 0,
      reactivePower: 0,
    },
  });

  const onSubmit = (values: FormValues) => {
    const { realPower: P, reactivePower: Q } = values;

    const S = Math.sqrt(P * P + Q * Q);
    const pf = P / S;
    const angle = Math.atan(Q / P) * (180 / Math.PI);

    setResult({
      apparentPower: S,
      powerFactor: pf,
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
          <span className="text-foreground">Apparent Power Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Triangle className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            Apparent Power Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate apparent power (S) from real power (P) and reactive power (Q)
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate Apparent Power
            </CardTitle>
            <CardDescription>
              Enter real power and reactive power to calculate apparent power
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
                            placeholder="e.g., 80"
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
                    name="reactivePower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reactive Power (kVAR)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 60"
                            data-testid="input-reactive-power"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
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
                  Calculate Apparent Power
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Triangle className="h-5 w-5 text-primary" />
                  Results
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Apparent Power (S)</p>
                    <p className="text-3xl font-mono font-bold text-primary" data-testid="result-apparent-power">
                      {result.apparentPower.toFixed(2)} kVA
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Power Factor (cos φ)</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-power-factor">
                      {result.powerFactor.toFixed(4)}
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
                    S = √(P² + Q²)
                  </code>
                  <code className="text-sm font-mono text-muted-foreground block">
                    Power Factor = P / S
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    This is based on the power triangle relationship
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        "<CalculatorAccordion content={getCalculatorAccordion("apparent-power")} />
      </div>
    </div>
  );
}
