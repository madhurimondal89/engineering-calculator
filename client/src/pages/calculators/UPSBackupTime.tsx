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

const upsBackupTimeSchema = z.object({
  batteryVoltage: z.coerce.number().positive("Battery voltage must be positive"),
  batteryCapacity: z.coerce.number().positive("Battery capacity must be positive"),
  loadPower: z.coerce.number().positive("Load power must be positive"),
  inverterEfficiency: z.coerce.number().min(0).max(1).default(0.85),
  depthOfDischarge: z.coerce.number().min(0).max(1).default(0.8),
});

type UPSBackupTimeFormData = z.infer<typeof upsBackupTimeSchema>;

interface Results {
  backupTimeHours: number;
  backupTimeMinutes: number;
  totalEnergy: number;
  usableEnergy: number;
  actualLoad: number;
}

export default function UPSBackupTime() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<UPSBackupTimeFormData>({
    resolver: zodResolver(upsBackupTimeSchema),
    defaultValues: {
      batteryVoltage: undefined,
      batteryCapacity: undefined,
      loadPower: undefined,
      inverterEfficiency: 0.85,
      depthOfDischarge: 0.8,
    },
  });

  const onSubmit = (data: UPSBackupTimeFormData) => {
    const totalEnergy = data.batteryVoltage * data.batteryCapacity;
    const usableEnergy = totalEnergy * data.depthOfDischarge;
    
    // Available AC energy after inverter conversion
    const backupTimeHours = (usableEnergy * data.inverterEfficiency) / data.loadPower;
    const backupTimeMinutes = backupTimeHours * 60;
    
    // DC power drawn from battery
    const actualLoad = data.loadPower / data.inverterEfficiency;

    setResults({
      backupTimeHours,
      backupTimeMinutes,
      totalEnergy,
      usableEnergy,
      actualLoad,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="UPS Backup Time" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            UPS Backup Time Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate UPS runtime based on battery capacity and connected load power.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter UPS battery and load specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="batteryVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Battery Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="12"
                            {...field}
                            data-testid="input-battery-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="batteryCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Battery Capacity (Ah)</FormLabel>
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
                    name="loadPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Load Power (W)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="500"
                            {...field}
                            data-testid="input-load-power"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="inverterEfficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inverter Efficiency (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.85"
                            {...field}
                            data-testid="input-inverter-efficiency"
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
                    name="depthOfDischarge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Depth of Discharge (0-1)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.8"
                            {...field}
                            data-testid="input-depth-of-discharge"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.8 (80% discharge for lead-acid)
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Backup Time
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>UPS backup runtime estimation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Backup Time (Hours):</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-backup-time-hours">
                      {results.backupTimeHours.toFixed(2)} h
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-backup-time-description">
                    Estimated runtime at full load
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Backup Time (Minutes):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-backup-time-minutes">
                      {results.backupTimeMinutes.toFixed(0)} min
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Energy:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-energy">
                      {results.totalEnergy.toFixed(0)} Wh
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Usable Energy:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-usable-energy">
                      {results.usableEnergy.toFixed(0)} Wh
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Total Energy = Voltage × Capacity<br />
                    Usable Energy = Total × Depth of Discharge<br />
                    Time (h) = Usable Energy ÷ (Load ÷ Efficiency)
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('ups-backup-time')!} calculatorId="ups-backup-time" />
      </div>
    </div>
  );
}
