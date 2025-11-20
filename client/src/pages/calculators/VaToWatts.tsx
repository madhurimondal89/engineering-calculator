import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";

const formSchema = z.object({
  apparentPower: z.coerce.number().positive("Apparent power must be positive"),
  powerFactor: z.coerce.number().min(0).max(1, "Power factor must be between 0 and 1"),
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  realPower: number;
  reactivePower: number;
  powerFactorPercent: number;
  phaseAngle: number;
}

export default function VaToWatts() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apparentPower: 1000,
      powerFactor: 0.8,
    },
  });

  function onSubmit(values: FormValues) {
    const { apparentPower, powerFactor } = values;
    
    // Real Power (Watts) = Apparent Power (VA) × Power Factor
    const realPower = apparentPower * powerFactor;
    
    // Reactive Power (VAR) = √(S² - P²) where S = apparent power, P = real power
    // Alternatively: Q = S × sin(θ) where θ = arccos(PF)
    const reactivePower = apparentPower * Math.sqrt(1 - Math.pow(powerFactor, 2));
    
    // Power factor as percentage
    const powerFactorPercent = powerFactor * 100;
    
    // Phase angle (θ = arccos(PF)) in degrees
    const phaseAngle = Math.acos(powerFactor) * (180 / Math.PI);

    setResult({
      realPower: parseFloat(realPower.toFixed(2)),
      reactivePower: parseFloat(reactivePower.toFixed(2)),
      powerFactorPercent: parseFloat(powerFactorPercent.toFixed(2)),
      phaseAngle: parseFloat(phaseAngle.toFixed(2)),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="VA to Watts Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            VA to Watts Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Convert apparent power (VA) to real power (Watts) using power factor
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter apparent power and power factor</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="apparentPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apparent Power (VA)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="1000"
                            data-testid="input-apparentPower"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
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
                        <FormLabel>Power Factor (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.8"
                            data-testid="input-powerFactor"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Power Analysis</CardTitle>
              <CardDescription>Real and reactive power breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Real Power (Active)</div>
                    <div className="text-3xl font-mono font-bold text-primary" data-testid="result-realPower">
                      {result.realPower.toLocaleString()} W
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Reactive Power:</span>
                      <span className="font-mono font-semibold" data-testid="result-reactivePower">
                        {result.reactivePower.toLocaleString()} VAR
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Power Factor:</span>
                      <span className="font-mono font-semibold" data-testid="result-powerFactorPercent">
                        {result.powerFactorPercent}%
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Phase Angle:</span>
                      <span className="font-mono font-semibold" data-testid="result-phaseAngle">
                        {result.phaseAngle.toLocaleString()}°
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>Real Power: P = S × PF (Watts)</div>
                      <div>Reactive Power: Q = S × sin(θ) (VAR)</div>
                      <div>Phase Angle: θ = arccos(PF)</div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
                    <div className="text-sm font-semibold mb-2">Power Triangle</div>
                    <div className="text-xs space-y-1">
                      <div>• Apparent Power (S): {form.getValues("apparentPower")} VA</div>
                      <div>• Real Power (P): {result.realPower} W</div>
                      <div>• Reactive Power (Q): {result.reactivePower} VAR</div>
                      <div className="mt-2 font-mono">S² = P² + Q²</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground" data-testid="result-empty">
                  Enter values and click Calculate to see results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion('va-to-watts') && (
          <CalculatorAccordion content={getCalculatorAccordion('va-to-watts')!} calculatorId="va-to-watts" />
        )}
      </div>
    </div>
  );
}
