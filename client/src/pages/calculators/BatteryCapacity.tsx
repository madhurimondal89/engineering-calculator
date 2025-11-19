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

const batteryCapacitySchema = z.object({
  capacityValue: z.coerce.number().positive("Capacity must be positive"),
  capacityUnit: z.enum(["Ah", "Wh"]).default("Ah"),
  voltage: z.coerce.number().positive("Voltage must be positive"),
});

type BatteryCapacityFormData = z.infer<typeof batteryCapacitySchema>;

interface Results {
  capacityAh: number;
  capacityWh: number;
  capacityKWh: number;
  voltage: number;
}

export default function BatteryCapacity() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<BatteryCapacityFormData>({
    resolver: zodResolver(batteryCapacitySchema),
    defaultValues: {
      capacityValue: undefined,
      capacityUnit: "Ah",
      voltage: undefined,
    },
  });

  const onSubmit = (data: BatteryCapacityFormData) => {
    let capacityAh: number;
    let capacityWh: number;

    if (data.capacityUnit === "Ah") {
      capacityAh = data.capacityValue;
      capacityWh = capacityAh * data.voltage;
    } else {
      capacityWh = data.capacityValue;
      capacityAh = capacityWh / data.voltage;
    }

    const capacityKWh = capacityWh / 1000;

    setResults({
      capacityAh,
      capacityWh,
      capacityKWh,
      voltage: data.voltage,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Battery & Energy" calculatorName="Battery Capacity" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Battery Capacity Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Convert between amp-hours (Ah) and watt-hours (Wh) and calculate battery energy storage capacity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter battery capacity and voltage</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="capacityValue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Capacity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="100"
                              {...field}
                              data-testid="input-capacity-value"
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
                              <SelectItem value="Wh">Wh (Watt-hours)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="voltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Battery Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="12"
                            {...field}
                            data-testid="input-voltage"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Battery Capacity
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Battery capacity in different units</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Capacity (Ah):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-capacity-ah">
                      {results.capacityAh.toFixed(2)} Ah
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-capacity-ah-description">
                    Amp-hour rating at {results.voltage}V
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Energy (Wh):</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-energy-wh">
                      {results.capacityWh.toFixed(2)} Wh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-energy-wh-description">
                    Watt-hour energy storage
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Energy (kWh):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-energy-kwh">
                      {results.capacityKWh.toFixed(3)} kWh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-energy-kwh-description">
                    Kilowatt-hour energy storage
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Wh = Ah × V<br />
                    Ah = Wh ÷ V<br />
                    kWh = Wh ÷ 1000
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('battery-capacity')!} calculatorId="battery-capacity" />
      </div>
    </div>
  );
}
