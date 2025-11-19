import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

const motorPowerFactorSchema = z.object({
  realPower: z.coerce.number().positive("Real power must be positive"),
  apparentPower: z.coerce.number().positive("Apparent power must be positive"),
}).refine((data) => data.apparentPower >= data.realPower, {
  message: "Apparent power must be greater than or equal to real power",
  path: ["apparentPower"],
});

type MotorPowerFactorForm = z.infer<typeof motorPowerFactorSchema>;

interface Results {
  powerFactor: number;
  powerFactorPercent: number;
  reactivePower: number;
  phaseAngle: number;
}

export default function MotorPowerFactor() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorPowerFactorForm>({
    resolver: zodResolver(motorPowerFactorSchema),
    defaultValues: {
      realPower: undefined,
      apparentPower: undefined,
    },
  });

  const onSubmit = (data: MotorPowerFactorForm) => {
    const powerFactor = data.realPower / data.apparentPower;
    const powerFactorPercent = powerFactor * 100;
    const reactivePower = Math.sqrt(Math.pow(data.apparentPower, 2) - Math.pow(data.realPower, 2));
    const phaseAngle = Math.acos(powerFactor) * (180 / Math.PI);

    setResults({
      powerFactor,
      powerFactorPercent,
      reactivePower,
      phaseAngle,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Power Factor"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Power Factor Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate power factor for AC motors from real and apparent power
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Power Parameters</CardTitle>
              <CardDescription>Enter real and apparent power values</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="realPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Real Power (kW)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="e.g., 8.5"
                            data-testid="input-real-power"
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
                    name="apparentPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apparent Power (kVA)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="e.g., 10"
                            data-testid="input-apparent-power"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Power Factor
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Motor power factor analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Power Factor</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-power-factor">
                      {results.powerFactor.toFixed(4)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1" data-testid="text-power-factor-percent">
                      {results.powerFactorPercent.toFixed(2)}%
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Phase Angle</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-phase-angle">
                      {results.phaseAngle.toFixed(2)}°
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Reactive Power</div>
                  <div className="text-2xl font-bold font-mono" data-testid="text-reactive-power">
                    {results.reactivePower.toFixed(2)} kVAR
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  <div className="font-mono text-sm">
                    PF = P / S
                  </div>
                  <div className="font-mono text-sm">
                    Q = √(S² - P²)
                  </div>
                  <div className="font-mono text-sm">
                    θ = arccos(PF)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: PF = Power Factor, P = Real Power (kW), S = Apparent Power (kVA), Q = Reactive Power (kVAR), θ = Phase Angle (degrees)
                  </div>
                </div>

                <div className="p-4 border-l-4 border-l-primary bg-primary/5 rounded">
                  <div className="text-sm font-semibold mb-1">Power Factor Rating</div>
                  <div className="text-sm">
                    {results.powerFactor >= 0.95 ? "⭐ Excellent (PF ≥ 0.95)" :
                     results.powerFactor >= 0.85 ? "✓ Good (PF ≥ 0.85)" :
                     results.powerFactor >= 0.75 ? "Fair (PF ≥ 0.75)" :
                     "⚠ Poor - Consider power factor correction"}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-power-factor")} />
        </div>
      </div>
    </div>
  );
}
