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

const batteryChargeTimeSchema = z.object({
  batteryCapacity: z.coerce.number().positive("Battery capacity must be positive"),
  capacityUnit: z.enum(["Ah", "mAh"]).default("Ah"),
  chargerCurrent: z.coerce.number().positive("Charger current must be positive"),
  currentUnit: z.enum(["A", "mA"]).default("A"),
  chargerEfficiency: z.coerce.number().min(0).max(1).default(0.85),
  currentChargeLevel: z.coerce.number().min(0).max(100).default(0),
});

type BatteryChargeTimeFormData = z.infer<typeof batteryChargeTimeSchema>;

interface Results {
  chargeTimeHours: number;
  chargeTimeMinutes: number;
  capacityToCharge: number;
  energyRequired: number;
}

export default function BatteryChargeTime() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<BatteryChargeTimeFormData>({
    resolver: zodResolver(batteryChargeTimeSchema),
    defaultValues: {
      batteryCapacity: undefined,
      capacityUnit: "Ah",
      chargerCurrent: undefined,
      currentUnit: "A",
      chargerEfficiency: 0.85,
      currentChargeLevel: 0,
    },
  });

  const onSubmit = (data: BatteryChargeTimeFormData) => {
    // Convert to Ah and A
    const capacityAh = data.capacityUnit === "mAh" ? data.batteryCapacity / 1000 : data.batteryCapacity;
    const chargerA = data.currentUnit === "mA" ? data.chargerCurrent / 1000 : data.chargerCurrent;

    // Calculate capacity to charge
    const capacityToCharge = capacityAh * (1 - data.currentChargeLevel / 100);

    // Calculate charge time (charger current is output rating)
    const chargeTimeHours = capacityToCharge / chargerA;
    const chargeTimeMinutes = chargeTimeHours * 60;

    // Calculate energy required (accounting for charger efficiency losses)
    const energyRequired = capacityToCharge / data.chargerEfficiency;

    setResults({
      chargeTimeHours,
      chargeTimeMinutes,
      capacityToCharge,
      energyRequired,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Battery Charge Time" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Battery Charge Time Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Estimate charging time based on battery capacity, charger current, and efficiency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter battery and charger specifications</CardDescription>
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
                      name="chargerCurrent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Charger Current</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="10"
                              {...field}
                              data-testid="input-charger-current"
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
                    name="chargerEfficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Charger Efficiency (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.85"
                            {...field}
                            data-testid="input-charger-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.85 (85% efficient)
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentChargeLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Charge Level (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="0"
                            {...field}
                            data-testid="input-current-charge-level"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          0 = Empty, 100 = Full
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Charge Time
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Battery charging time estimation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Charge Time (Hours):</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-charge-time-hours">
                      {results.chargeTimeHours.toFixed(2)} h
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-charge-time-description">
                    Estimated time to full charge
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Charge Time (Minutes):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-charge-time-minutes">
                      {results.chargeTimeMinutes.toFixed(0)} min
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Capacity to Charge:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-capacity-to-charge">
                      {results.capacityToCharge.toFixed(2)} Ah
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Capacity to Charge = Total Capacity × (1 - Current Level)<br />
                    Time (h) = (Capacity ÷ Charger Current) ÷ Efficiency
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> Actual charge time may vary based on battery chemistry, temperature, and charge controller behavior.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('battery-charge-time')!} calculatorId="battery-charge-time" />
      </div>
    </div>
  );
}
