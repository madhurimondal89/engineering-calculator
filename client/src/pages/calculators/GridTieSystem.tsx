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
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  monthlyConsumption: z.coerce.number().positive({ message: "Monthly consumption must be positive" }),
  consumptionUnit: z.enum(["kWh", "Wh"]).default("kWh"),
  peakSunHours: z.coerce.number().positive({ message: "Peak sun hours must be positive" }),
  panelWattage: z.coerce.number().positive({ message: "Panel wattage must be positive" }),
  systemEfficiency: z.coerce.number().min(0).max(1).default(0.78),
  gridVoltage: z.enum(["120", "208", "240", "277", "480"]).default("240"),
  offsetPercentage: z.coerce.number().min(0).max(150).default(100),
  netMeteringRate: z.coerce.number().positive().default(0.12),
});

type FormData = z.infer<typeof formSchema>;

interface Results {
  dailyEnergyNeeded: number;
  numberOfPanels: number;
  totalArrayWattage: number;
  inverterSize: number;
  annualProduction: number;
  annualSavings: number;
  excessEnergy: number;
  netMeteringCredit: number;
}

export default function GridTieSystem() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyConsumption: 0,
      consumptionUnit: "kWh",
      peakSunHours: 0,
      panelWattage: 0,
      systemEfficiency: 0.78,
      gridVoltage: "240",
      offsetPercentage: 100,
      netMeteringRate: 0.12,
    },
  });

  function onSubmit(data: FormData) {
    // Convert monthly consumption to daily Wh
    let monthlyConsumptionWh = data.monthlyConsumption;
    if (data.consumptionUnit === "kWh") {
      monthlyConsumptionWh = data.monthlyConsumption * 1000;
    }
    const dailyEnergyNeeded = (monthlyConsumptionWh * 12) / 365; // Average daily

    // Adjust for offset percentage
    const targetDailyEnergy = (dailyEnergyNeeded * data.offsetPercentage) / 100;

    // Adjust for system efficiency
    const requiredDailyProduction = targetDailyEnergy / data.systemEfficiency;

    // Daily energy per panel (Wh)
    const dailyEnergyPerPanel = data.panelWattage * data.peakSunHours;

    // Number of panels needed
    const numberOfPanels = Math.ceil(requiredDailyProduction / dailyEnergyPerPanel);

    // Total array wattage (DC)
    const totalArrayWattage = numberOfPanels * data.panelWattage;

    // Inverter sizing (typically 1.1-1.25x DC rating for grid-tie)
    // Using 1.15 as middle ground
    const inverterSize = totalArrayWattage / 1.15;

    // Annual production (accounting for system efficiency)
    const annualProduction = (totalArrayWattage * data.peakSunHours * 365 * data.systemEfficiency) / 1000; // kWh

    // Annual consumption
    const annualConsumption = (monthlyConsumptionWh * 12) / 1000; // kWh

    // Annual savings
    const annualSavings = Math.min(annualProduction, annualConsumption) * data.netMeteringRate;

    // Excess energy (if producing more than consuming)
    const excessEnergy = Math.max(0, annualProduction - annualConsumption);

    // Net metering credit (some utilities give lower rate for excess)
    const netMeteringCredit = excessEnergy * (data.netMeteringRate * 0.75); // Typically 75% of retail rate

    setResults({
      dailyEnergyNeeded,
      numberOfPanels,
      totalArrayWattage,
      inverterSize,
      annualProduction,
      annualSavings,
      excessEnergy,
      netMeteringCredit,
    });
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Renewable Energy" calculatorName="Grid Tie System" />
        
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Grid Tie System Calculator</h1>
          <p className="text-muted-foreground">
            Design grid-tied solar systems with net metering calculations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter consumption and system specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="monthlyConsumption"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Energy Consumption</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="1"
                              placeholder="900"
                              {...field}
                              data-testid="input-monthly-consumption"
                            />
                          </FormControl>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground">
                            Check your utility bill
                          </p>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consumptionUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Energy Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-consumption-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kWh">kWh</SelectItem>
                              <SelectItem value="Wh">Wh</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="offsetPercentage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Energy Offset Target (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="100"
                            {...field}
                            data-testid="input-offset-percentage"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          100% = offset all consumption, 120% = produce 20% extra
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="peakSunHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peak Sun Hours</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="5"
                            {...field}
                            data-testid="input-peak-sun-hours"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Average daily peak sun hours at your location
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="panelWattage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Panel Wattage (W)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="400"
                            {...field}
                            data-testid="input-panel-wattage"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 300-450W per panel
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
                            placeholder="0.78"
                            {...field}
                            data-testid="input-system-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Grid-tie systems: 0.75-0.82 typical
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gridVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grid Voltage (V)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-grid-voltage">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="120">120V (Single-phase)</SelectItem>
                            <SelectItem value="208">208V (Three-phase)</SelectItem>
                            <SelectItem value="240">240V (Split-phase)</SelectItem>
                            <SelectItem value="277">277V (Commercial)</SelectItem>
                            <SelectItem value="480">480V (Commercial)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="netMeteringRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Net Metering Rate ($/kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.12"
                            {...field}
                            data-testid="input-net-metering-rate"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Your utility's net metering credit rate
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Grid Tie System
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Grid-tied solar system design and savings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Number of Panels:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-number-panels">
                      {results.numberOfPanels}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Array Wattage (DC):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-array-wattage">
                      {(results.totalArrayWattage / 1000).toFixed(2)} kW
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Recommended Inverter Size:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-inverter-size">
                      {(results.inverterSize / 1000).toFixed(2)} kW
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    AC output rating
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Production:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-annual-production">
                      {results.annualProduction.toFixed(0)} kWh
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Daily Energy (Average):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-daily-energy">
                      {(results.dailyEnergyNeeded / 1000).toFixed(2)} kWh
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Savings:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-annual-savings">
                      ${results.annualSavings.toFixed(0)}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Excess Energy:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-excess-energy">
                      {results.excessEnergy.toFixed(0)} kWh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Sold back to grid annually
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Net Metering Credit:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-net-metering-credit">
                      ${results.netMeteringCredit.toFixed(0)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Annual credit for excess production
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Panels = (Daily Energy × Offset% ÷ Efficiency) ÷ (Panel W × Peak Hours)<br />
                    Inverter = Array Wattage ÷ 1.15<br />
                    Annual = Array W × Peak Hours × 365 × Efficiency
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('grid-tie-system')!} calculatorId="grid-tie-system" />
      </div>
    </div>
  );
}
