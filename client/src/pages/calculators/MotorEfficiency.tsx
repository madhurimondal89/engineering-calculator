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

const motorEfficiencySchema = z.object({
  outputPower: z.coerce.number().positive("Output power must be positive"),
  inputPower: z.coerce.number().positive("Input power must be positive"),
}).refine((data) => data.inputPower >= data.outputPower, {
  message: "Input power must be greater than or equal to output power",
  path: ["inputPower"],
});

type MotorEfficiencyForm = z.infer<typeof motorEfficiencySchema>;

interface Results {
  efficiency: number;
  efficiencyPercent: number;
  losses: number;
  lossesPercent: number;
}

export default function MotorEfficiency() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorEfficiencyForm>({
    resolver: zodResolver(motorEfficiencySchema),
    defaultValues: {
      outputPower: undefined,
      inputPower: undefined,
    },
  });

  const onSubmit = (data: MotorEfficiencyForm) => {
    const efficiency = data.outputPower / data.inputPower;
    const efficiencyPercent = efficiency * 100;
    const losses = data.inputPower - data.outputPower;
    const lossesPercent = (losses / data.inputPower) * 100;

    setResults({
      efficiency,
      efficiencyPercent,
      losses,
      lossesPercent,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Efficiency"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Efficiency Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate motor efficiency from input power and output power
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Power Parameters</CardTitle>
              <CardDescription>Enter input and output power values</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="outputPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Output Power (kW)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="e.g., 7.46"
                            data-testid="input-output-power"
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
                    name="inputPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Input Power (kW)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="e.g., 8.5"
                            data-testid="input-input-power"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Efficiency
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Motor efficiency analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Efficiency</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-efficiency-percent">
                      {results.efficiencyPercent.toFixed(2)}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1" data-testid="text-efficiency-decimal">
                      η = {results.efficiency.toFixed(4)}
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Power Losses</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-losses">
                      {results.losses.toFixed(3)} kW
                    </div>
                    <div className="text-xs text-muted-foreground mt-1" data-testid="text-losses-percent">
                      {results.lossesPercent.toFixed(2)}% of input
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  <div className="font-mono text-sm">
                    η = P_out / P_in
                  </div>
                  <div className="font-mono text-sm">
                    Losses = P_in - P_out
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: η = Efficiency, P_out = Output Power (kW), P_in = Input Power (kW)
                  </div>
                </div>

                <div className="p-4 border-l-4 border-l-primary bg-primary/5 rounded">
                  <div className="text-sm font-semibold mb-1">Efficiency Rating</div>
                  <div className="text-sm">
                    {results.efficiencyPercent >= 95 ? "⭐ Premium Efficiency (IE3/IE4)" :
                     results.efficiencyPercent >= 90 ? "✓ High Efficiency (IE2)" :
                     results.efficiencyPercent >= 85 ? "Standard Efficiency (IE1)" :
                     "⚠ Low Efficiency"}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-efficiency")} />
        </div>
      </div>
    </div>
  );
}
