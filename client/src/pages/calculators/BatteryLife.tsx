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

const batteryLifeSchema = z.object({
  batteryCapacity: z.coerce.number().positive("Battery capacity must be positive"),
  capacityUnit: z.enum(["Ah", "mAh"]).default("Ah"),
  loadCurrent: z.coerce.number().positive("Load current must be positive"),
  currentUnit: z.enum(["A", "mA"]).default("A"),
  dischargeRate: z.coerce.number().min(0).max(1).default(0.8),
});

type BatteryLifeFormData = z.infer<typeof batteryLifeSchema>;

interface Results {
  runtimeHours: number;
  runtimeMinutes: number;
  runtimeDays: number;
  usableCapacity: number;
  capacityUnit: string;
}

export default function BatteryLife() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<BatteryLifeFormData>({
    resolver: zodResolver(batteryLifeSchema),
    defaultValues: {
      batteryCapacity: undefined,
      capacityUnit: "Ah",
      loadCurrent: undefined,
      currentUnit: "A",
      dischargeRate: 0.8,
    },
  });

  const onSubmit = (data: BatteryLifeFormData) => {
    // Convert to Ah and A
    const capacityAh = data.capacityUnit === "mAh" ? data.batteryCapacity / 1000 : data.batteryCapacity;
    const loadA = data.currentUnit === "mA" ? data.loadCurrent / 1000 : data.loadCurrent;

    // Calculate usable capacity
    const usableCapacity = capacityAh * data.dischargeRate;

    // Calculate runtime in hours
    const runtimeHours = usableCapacity / loadA;
    const runtimeMinutes = runtimeHours * 60;
    const runtimeDays = runtimeHours / 24;

    setResults({
      runtimeHours,
      runtimeMinutes,
      runtimeDays,
      usableCapacity,
      capacityUnit: data.capacityUnit,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Battery Life" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Battery Life Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate battery runtime based on capacity, load current, and discharge rate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter battery and load specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="batteryCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Battery Capacity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="100"
                              {...field}
                              data-testid="input-battery-capacity"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="capacityUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-capacity-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Ah">Ah (Amp-hours)</SelectItem>
                              <SelectItem value="mAh">mAh (Milliamp-hours)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="loadCurrent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Load Current</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="5"
                              {...field}
                              data-testid="input-load-current"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-current-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="A">A (Amperes)</SelectItem>
                              <SelectItem value="mA">mA (Milliamperes)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="dischargeRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discharge Rate (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.8"
                            {...field}
                            data-testid="input-discharge-rate"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.8 (80% usable capacity)
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Battery Life
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Battery runtime estimation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Runtime (Hours):</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-runtime-hours">
                      {results.runtimeHours.toFixed(2)} h
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-runtime-hours-description">
                    Estimated operating time
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Runtime (Minutes):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-runtime-minutes">
                      {results.runtimeMinutes.toFixed(0)} min
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Runtime (Days):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-runtime-days">
                      {results.runtimeDays.toFixed(2)} days
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Usable Capacity:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-usable-capacity">
                      {results.usableCapacity.toFixed(2)} {results.capacityUnit}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Usable Capacity = Capacity × Discharge Rate<br />
                    Runtime (h) = Usable Capacity ÷ Load Current
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('battery-life')!} calculatorId="battery-life" />
      </div>
    </div>
  );
}
