import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from '@/data/calculatorAccordions';

const solarPanelOutputSchema = z.object({
  panelPower: z.coerce.number().positive("Panel power must be positive"),
  peakSunHours: z.coerce.number().positive("Peak sun hours must be positive").default(5),
  systemEfficiency: z.coerce.number().min(0).max(1).default(0.75),
  numberOfPanels: z.coerce.number().int().positive("Number of panels must be positive").default(1),
});

type SolarPanelOutputFormData = z.infer<typeof solarPanelOutputSchema>;

interface Results {
  dailyOutput: number;
  monthlyOutput: number;
  yearlyOutput: number;
  totalCapacity: number;
}

export default function SolarPanelOutput() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<SolarPanelOutputFormData>({
    resolver: zodResolver(solarPanelOutputSchema),
    defaultValues: {
      panelPower: undefined,
      peakSunHours: 5,
      systemEfficiency: 0.75,
      numberOfPanels: 1,
    },
  });

  const onSubmit = (data: SolarPanelOutputFormData) => {
    const totalCapacity = data.panelPower * data.numberOfPanels;
    const dailyOutput = totalCapacity * data.peakSunHours * data.systemEfficiency;
    const monthlyOutput = dailyOutput * 30;
    const yearlyOutput = dailyOutput * 365;

    setResults({
      dailyOutput,
      monthlyOutput,
      yearlyOutput,
      totalCapacity,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Solar Panel Output" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Solar Panel Output Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate solar panel power output based on panel specs, sun hours, and system efficiency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter solar panel specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="panelPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Panel Power Rating (W)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="300"
                            {...field}
                            data-testid="input-panel-power"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberOfPanels"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Panels</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="1"
                            {...field}
                            data-testid="input-number-of-panels"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="peakSunHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peak Sun Hours per Day</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="5"
                            {...field}
                            data-testid="input-peak-sun-hours"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 4-6 hours depending on location
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="systemEfficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Efficiency (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.75"
                            {...field}
                            data-testid="input-system-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.75 (75% accounting for losses)
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Solar Output
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Solar energy production estimates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Capacity:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-capacity">
                      {results.totalCapacity.toFixed(0)} W
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-capacity-description">
                    {(results.totalCapacity / 1000).toFixed(2)} kW total system
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Daily Output:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-daily-output">
                      {results.dailyOutput.toFixed(2)} Wh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-daily-description">
                    {(results.dailyOutput / 1000).toFixed(2)} kWh per day
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Monthly Output:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-monthly-output">
                      {(results.monthlyOutput / 1000).toFixed(2)} kWh
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Yearly Output:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-yearly-output">
                      {(results.yearlyOutput / 1000).toFixed(2)} kWh
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Daily Output = Panel Power × Panels × Peak Hours × Efficiency
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('solar-panel-output')!} calculatorId="solar-panel-output" />
      </div>
    </div>
  );
}
