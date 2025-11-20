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
  dailyEnergyConsumption: z.coerce.number().positive({ message: "Daily consumption must be positive" }),
  energyUnit: z.enum(["kWh", "Wh"]).default("kWh"),
  peakSunHours: z.coerce.number().positive({ message: "Peak sun hours must be positive" }),
  panelWattage: z.coerce.number().positive({ message: "Panel wattage must be positive" }),
  systemEfficiency: z.coerce.number().min(0).max(1).default(0.80),
  daysOfAutonomy: z.coerce.number().positive().default(2),
  batteryVoltage: z.coerce.number().positive().default(48),
  depthOfDischarge: z.coerce.number().min(0).max(1).default(0.50),
});

type FormData = z.infer<typeof formSchema>;

interface Results {
  dailyEnergyNeeded: number;
  adjustedDailyEnergy: number;
  numberOfPanels: number;
  totalArrayWattage: number;
  batteryCapacity: number;
  totalSystemCost: number;
  roofArea: number;
}

export default function SolarArraySizing() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dailyEnergyConsumption: 0,
      energyUnit: "kWh",
      peakSunHours: 0,
      panelWattage: 0,
      systemEfficiency: 0.80,
      daysOfAutonomy: 2,
      batteryVoltage: 48,
      depthOfDischarge: 0.50,
    },
  });

  function onSubmit(data: FormData) {
    // Convert energy to Wh
    let dailyEnergyWh = data.dailyEnergyConsumption;
    if (data.energyUnit === "kWh") {
      dailyEnergyWh = data.dailyEnergyConsumption * 1000;
    }

    // Adjust for system efficiency
    const adjustedDailyEnergy = dailyEnergyWh / data.systemEfficiency;

    // Calculate daily energy each panel produces
    const dailyEnergyPerPanel = data.panelWattage * data.peakSunHours;

    // Number of panels needed
    const numberOfPanels = Math.ceil(adjustedDailyEnergy / dailyEnergyPerPanel);

    // Total array wattage
    const totalArrayWattage = numberOfPanels * data.panelWattage;

    // Battery capacity for off-grid (Ah)
    const totalEnergyNeeded = (dailyEnergyWh * data.daysOfAutonomy) / data.systemEfficiency;
    const batteryCapacity = (totalEnergyNeeded / data.batteryVoltage) / data.depthOfDischarge;

    // Estimated cost (rough estimate: $2.50/W for panels + $300/kWh for batteries)
    const panelCost = (totalArrayWattage / 1000) * 2500; // $2.50/W
    const batteryEnergy = (data.batteryVoltage * batteryCapacity) / 1000; // kWh
    const batteryCost = batteryEnergy * 300; // $300/kWh
    const totalSystemCost = panelCost + batteryCost;

    // Estimated roof area (assume 1.7 m² per panel)
    const roofArea = numberOfPanels * 1.7;

    setResults({
      dailyEnergyNeeded: dailyEnergyWh,
      adjustedDailyEnergy,
      numberOfPanels,
      totalArrayWattage,
      batteryCapacity,
      totalSystemCost,
      roofArea,
    });
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Renewable Energy" calculatorName="Solar Array Sizing" />
        
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Solar Array Sizing Calculator</h1>
          <p className="text-muted-foreground">
            Calculate the number of solar panels needed for your energy requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter your energy needs and system specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dailyEnergyConsumption"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Daily Energy Consumption</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="30"
                              {...field}
                              data-testid="input-daily-consumption"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="energyUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Energy Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-energy-unit">
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
                          Average daily peak sun hours at your location (3-6 typical)
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
                            placeholder="0.80"
                            {...field}
                            data-testid="input-system-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Accounts for inverter, wiring, and temperature losses (0.75-0.85 typical)
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="daysOfAutonomy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Days of Autonomy (Battery Backup)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="2"
                            {...field}
                            data-testid="input-days-autonomy"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Days without sun/grid (off-grid systems)
                        </p>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="batteryVoltage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Battery Bank Voltage (V)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="1"
                              placeholder="48"
                              {...field}
                              data-testid="input-battery-voltage"
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
                      name="depthOfDischarge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Depth of Discharge (0-1)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="0.50"
                              {...field}
                              data-testid="input-depth-discharge"
                            />
                          </FormControl>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground">
                            0.5 for lead-acid, 0.8 for lithium
                          </p>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Solar Array Size
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Solar array sizing recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Number of Panels:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-number-panels">
                      {results.numberOfPanels}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Panels needed to meet daily consumption
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Array Wattage:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-wattage">
                      {(results.totalArrayWattage / 1000).toFixed(2)} kW
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Daily Energy (Adjusted):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-adjusted-energy">
                      {(results.adjustedDailyEnergy / 1000).toFixed(2)} kWh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Accounting for system losses
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Battery Capacity:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-battery-capacity">
                      {results.batteryCapacity.toFixed(1)} Ah
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    For {form.getValues("daysOfAutonomy")} days of autonomy
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Estimated Roof Area:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-roof-area">
                      {results.roofArea.toFixed(1)} m²
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Approximate space required
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Estimated System Cost:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-system-cost">
                      ${results.totalSystemCost.toFixed(0)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Rough estimate (panels + batteries)
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Panels = Daily Energy ÷ (Panel Wattage × Peak Hours × Efficiency)<br />
                    Battery = (Energy × Days) ÷ (Voltage × DoD × Efficiency)
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('solar-array-sizing')!} calculatorId="solar-array-sizing" />
      </div>
    </div>
  );
}
