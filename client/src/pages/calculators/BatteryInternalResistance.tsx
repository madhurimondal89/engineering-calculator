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

const batteryInternalResistanceSchema = z.object({
  openCircuitVoltage: z.coerce.number().positive("Open circuit voltage must be positive"),
  loadVoltage: z.coerce.number().positive("Load voltage must be positive"),
  loadCurrent: z.coerce.number().positive("Load current must be positive"),
}).refine((data) => data.openCircuitVoltage > data.loadVoltage, {
  message: "Open circuit voltage must be greater than load voltage",
  path: ["loadVoltage"],
});

type BatteryInternalResistanceFormData = z.infer<typeof batteryInternalResistanceSchema>;

interface Results {
  internalResistance: number;
  voltageDrop: number;
  powerLoss: number;
  efficiency: number;
}

export default function BatteryInternalResistance() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<BatteryInternalResistanceFormData>({
    resolver: zodResolver(batteryInternalResistanceSchema),
    defaultValues: {
      openCircuitVoltage: undefined,
      loadVoltage: undefined,
      loadCurrent: undefined,
    },
  });

  const onSubmit = (data: BatteryInternalResistanceFormData) => {
    const voltageDrop = data.openCircuitVoltage - data.loadVoltage;
    const internalResistance = voltageDrop / data.loadCurrent;
    const powerLoss = voltageDrop * data.loadCurrent;
    const efficiency = (data.loadVoltage / data.openCircuitVoltage) * 100;

    setResults({
      internalResistance,
      voltageDrop,
      powerLoss,
      efficiency,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Battery Internal Resistance" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Battery Internal Resistance Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate battery internal resistance from voltage drop under load.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Measure open circuit and loaded voltage</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="openCircuitVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Open Circuit Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="12.6"
                            {...field}
                            data-testid="input-open-circuit-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Battery voltage with no load
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="loadVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Load Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="11.8"
                            {...field}
                            data-testid="input-load-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Battery voltage under load
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="loadCurrent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Load Current (A)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="10"
                            {...field}
                            data-testid="input-load-current"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Current drawn from battery
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Internal Resistance
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Battery internal resistance analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Internal Resistance:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-internal-resistance">
                      {results.internalResistance.toFixed(4)} Ω
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-resistance-description">
                    {(results.internalResistance * 1000).toFixed(2)} mΩ
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Voltage Drop:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-voltage-drop">
                      {results.voltageDrop.toFixed(2)} V
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Power Loss:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-power-loss">
                      {results.powerLoss.toFixed(2)} W
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-power-loss-description">
                    Heat dissipated in battery
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Efficiency:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-efficiency">
                      {results.efficiency.toFixed(2)} %
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    R_internal = (V_oc - V_load) ÷ I_load<br />
                    Power Loss = V_drop × I_load
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> Lower internal resistance indicates better battery health and performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('battery-internal-resistance')!} calculatorId="battery-internal-resistance" />
      </div>
    </div>
  );
}
