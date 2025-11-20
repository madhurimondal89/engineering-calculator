import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  power: z.coerce.number().positive("Power must be positive"),
  copperArea: z.coerce.number().positive("Copper area must be positive"),
  copperThickness: z.coerce.number().positive("Copper thickness must be positive").default(1),
  ambientTemp: z.coerce.number().default(25),
});

type FormValues = z.infer<typeof formSchema>;

export default function PCBThermal() {
  const [result, setResult] = useState<{
    tempRise: number;
    finalTemp: number;
    thermalResistance: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      power: undefined,
      copperArea: undefined,
      copperThickness: 1,
      ambientTemp: 25,
    },
  });

  function onSubmit(values: FormValues) {
    const { power, copperArea, copperThickness, ambientTemp } = values;
    
    // Thermal resistance calculation
    // For PCB copper: Rth ≈ k / (thickness × area)
    // where k is thermal conductivity factor
    
    // Copper thermal conductivity: 385 W/(m·K)
    // Simplified formula for PCB: Rth (°C/W) ≈ 450 / (thickness_oz × area_in²)
    const copperAreaInch = copperArea / 645.16; // mm² to in²
    
    // Thermal resistance (°C/W)
    const thermalResistance = 450 / (copperThickness * copperAreaInch);
    
    // Temperature rise: ΔT = P × Rth
    const tempRise = power * thermalResistance;
    
    // Final temperature
    const finalTemp = ambientTemp + tempRise;

    setResult({
      tempRise: parseFloat(tempRise.toFixed(2)),
      finalTemp: parseFloat(finalTemp.toFixed(2)),
      thermalResistance: parseFloat(thermalResistance.toFixed(2)),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "PCB", href: "/category/pcb" },
            { label: "PCB Thermal" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            PCB Thermal Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate temperature rise and thermal resistance in PCB copper
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Thermal Parameters</CardTitle>
              <CardDescription>Enter power and copper specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="power"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Dissipation (W)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="2"
                            data-testid="input-power"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="copperArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Copper Area (mm²)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="1000"
                            data-testid="input-copper-area"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="copperThickness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Copper Thickness (oz)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.5"
                            placeholder="1"
                            data-testid="input-copper-thickness"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ambientTemp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ambient Temperature (°C)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="25"
                            data-testid="input-ambient-temp"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Temperature
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Calculated temperatures</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Temperature Rise</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-temp-rise">
                        {result.tempRise} °C
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Final Temperature</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-final-temp">
                          {result.finalTemp} °C
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Thermal Resistance</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-thermal-resistance">
                          {result.thermalResistance} °C/W
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <div className="text-sm font-medium mb-1">Temperature Assessment</div>
                      <div className="text-sm text-muted-foreground">
                        {result.finalTemp < 70 ? "✓ Safe operating temperature" :
                         result.finalTemp < 85 ? "⚠ Moderate - consider heat sinking" :
                         "⚠ High - heat sinking required"}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter thermal parameters and calculate
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Temperature Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">FR-4 Glass Transition:</span>
                    <span className="font-mono">130-140°C</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Max Operating (Consumer):</span>
                    <span className="font-mono">85°C</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Max Operating (Industrial):</span>
                    <span className="font-mono">105°C</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("pcb-thermal") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("pcb-thermal")!}
              calculatorId="pcb-thermal"
            />
          )}
        </div>
      </div>
    </div>
  );
}
