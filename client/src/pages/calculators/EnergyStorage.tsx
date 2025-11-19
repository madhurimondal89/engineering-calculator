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

const energyStorageSchema = z.object({
  dailyEnergyConsumption: z.coerce.number().positive("Daily energy must be positive"),
  daysOfAutonomy: z.coerce.number().positive("Days of autonomy must be positive").default(2),
  systemVoltage: z.coerce.number().positive("System voltage must be positive"),
  batteryCapacity: z.coerce.number().positive("Battery capacity must be positive"),
  depthOfDischarge: z.coerce.number().min(0).max(1).default(0.5),
  batteryEfficiency: z.coerce.number().min(0).max(1).default(0.85),
});

type EnergyStorageFormData = z.infer<typeof energyStorageSchema>;

interface Results {
  requiredCapacity: number;
  requiredEnergy: number;
  numberOfBatteries: number;
  batteryCapacityNeeded: number;
}

export default function EnergyStorage() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<EnergyStorageFormData>({
    resolver: zodResolver(energyStorageSchema),
    defaultValues: {
      dailyEnergyConsumption: undefined,
      daysOfAutonomy: 2,
      systemVoltage: undefined,
      batteryCapacity: undefined,
      depthOfDischarge: 0.5,
      batteryEfficiency: 0.85,
    },
  });

  const onSubmit = (data: EnergyStorageFormData) => {
    // Convert kWh to Wh for calculation
    const totalEnergyNeeded = data.dailyEnergyConsumption * data.daysOfAutonomy * 1000;
    const requiredEnergy = totalEnergyNeeded / data.batteryEfficiency;
    const requiredCapacity = requiredEnergy / data.systemVoltage;
    const batteryCapacityNeeded = requiredCapacity / data.depthOfDischarge;

    // Calculate number of batteries based on user-specified battery capacity
    const numberOfBatteries = Math.ceil(batteryCapacityNeeded / data.batteryCapacity);

    setResults({
      requiredCapacity,
      requiredEnergy,
      numberOfBatteries,
      batteryCapacityNeeded,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Energy Storage" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Energy Storage Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Size energy storage systems for off-grid or backup power applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter energy requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="dailyEnergyConsumption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Daily Energy Consumption (kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="10"
                            {...field}
                            data-testid="input-daily-energy"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="daysOfAutonomy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Days of Autonomy</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="2"
                            {...field}
                            data-testid="input-days-autonomy"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Days without charging/grid power
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="systemVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="48"
                            {...field}
                            data-testid="input-system-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 12V, 24V, or 48V
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="batteryCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Single Battery Capacity (Ah)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="200"
                            {...field}
                            data-testid="input-battery-capacity"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Capacity of each battery at system voltage
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="depthOfDischarge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Depth of Discharge (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.5"
                            {...field}
                            data-testid="input-depth-discharge"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          0.5 = 50% for lead-acid, 0.8 = 80% for lithium
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="batteryEfficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Battery Efficiency (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.85"
                            {...field}
                            data-testid="input-battery-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Storage Requirements
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Energy storage system sizing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Required Capacity:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-required-capacity">
                      {results.requiredCapacity.toFixed(1)} Ah
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-capacity-description">
                    Minimum battery capacity needed
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Battery Capacity (with DoD):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-battery-capacity">
                      {results.batteryCapacityNeeded.toFixed(1)} Ah
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Required Energy:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-required-energy">
                      {(results.requiredEnergy / 1000).toFixed(2)} kWh
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Estimated Batteries:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-number-batteries">
                      {results.numberOfBatteries}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-batteries-description">
                    Based on specified battery capacity
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Required Energy = Daily × Days ÷ Efficiency<br />
                    Required Capacity = Energy ÷ Voltage ÷ DoD
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('energy-storage')!} calculatorId="energy-storage" />
      </div>
    </div>
  );
}
