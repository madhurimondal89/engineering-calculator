import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getCalculatorAccordion } from '@/data/calculatorAccordions';
import { CalculatorAccordion } from "@/components/CalculatorAccordion";

const batterySeriesParallelSchema = z.object({
  singleVoltage: z.coerce.number().positive("Voltage must be positive"),
  singleCapacity: z.coerce.number().positive("Capacity must be positive"),
  seriesCount: z.coerce.number().int().positive("Series count must be a positive integer").default(1),
  parallelCount: z.coerce.number().int().positive("Parallel count must be a positive integer").default(1),
  configuration: z.enum(["series", "parallel", "series-parallel"]).default("series-parallel"),
});

type BatterySeriesParallelFormData = z.infer<typeof batterySeriesParallelSchema>;

interface Results {
  totalVoltage: number;
  totalCapacity: number;
  totalEnergy: number;
  totalBatteries: number;
  configuration: string;
}

export default function BatterySeriesParallel() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<BatterySeriesParallelFormData>({
    resolver: zodResolver(batterySeriesParallelSchema),
    defaultValues: {
      singleVoltage: undefined,
      singleCapacity: undefined,
      seriesCount: 1,
      parallelCount: 1,
      configuration: "series-parallel",
    },
  });

  const watchConfiguration = form.watch("configuration");

  const onSubmit = (data: BatterySeriesParallelFormData) => {
    let totalVoltage: number;
    let totalCapacity: number;
    let totalBatteries: number;

    if (data.configuration === "series") {
      totalVoltage = data.singleVoltage * data.seriesCount;
      totalCapacity = data.singleCapacity;
      totalBatteries = data.seriesCount;
    } else if (data.configuration === "parallel") {
      totalVoltage = data.singleVoltage;
      totalCapacity = data.singleCapacity * data.parallelCount;
      totalBatteries = data.parallelCount;
    } else {
      // series-parallel
      totalVoltage = data.singleVoltage * data.seriesCount;
      totalCapacity = data.singleCapacity * data.parallelCount;
      totalBatteries = data.seriesCount * data.parallelCount;
    }

    const totalEnergy = totalVoltage * totalCapacity;

    setResults({
      totalVoltage,
      totalCapacity,
      totalEnergy,
      totalBatteries,
      configuration: data.configuration,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Battery Series Parallel" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Battery Series Parallel Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate voltage and capacity for series, parallel, and series-parallel battery configurations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter single battery specs and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="singleVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Single Battery Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="12"
                            {...field}
                            data-testid="input-single-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="singleCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Single Battery Capacity (Ah)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="100"
                            {...field}
                            data-testid="input-single-capacity"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="configuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Configuration Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-configuration">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="series">Series Only</SelectItem>
                            <SelectItem value="parallel">Parallel Only</SelectItem>
                            <SelectItem value="series-parallel">Series-Parallel</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {(watchConfiguration === "series" || watchConfiguration === "series-parallel") && (
                    <FormField
                      control={form.control}
                      name="seriesCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number in Series</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="1"
                              placeholder="4"
                              {...field}
                              data-testid="input-series-count"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {(watchConfiguration === "parallel" || watchConfiguration === "series-parallel") && (
                    <FormField
                      control={form.control}
                      name="parallelCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number in Parallel</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="1"
                              placeholder="2"
                              {...field}
                              data-testid="input-parallel-count"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Configuration
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Battery bank specifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Voltage:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-total-voltage">
                      {results.totalVoltage.toFixed(1)} V
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-voltage-description">
                    Battery bank voltage
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Capacity:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-capacity">
                      {results.totalCapacity.toFixed(1)} Ah
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-capacity-description">
                    Battery bank capacity
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Energy:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-energy">
                      {results.totalEnergy.toFixed(1)} Wh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-energy-description">
                    {(results.totalEnergy / 1000).toFixed(2)} kWh
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Batteries:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-batteries">
                      {results.totalBatteries}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Series: V_total = V × N_series, Capacity same<br />
                    Parallel: V same, Capacity_total = C × N_parallel<br />
                    Series-Parallel: Both effects combined
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('battery-series-parallel')!} calculatorId="battery-series-parallel" />
      </div>
    </div>
  );
}
