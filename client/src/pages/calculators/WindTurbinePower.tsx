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
  windSpeed: z.coerce.number().positive({ message: "Wind speed must be positive" }),
  windSpeedUnit: z.enum(["m/s", "km/h", "mph"]).default("m/s"),
  bladeDiameter: z.coerce.number().positive({ message: "Blade diameter must be positive" }),
  diameterUnit: z.enum(["m", "ft"]).default("m"),
  airDensity: z.coerce.number().positive().default(1.225),
  powerCoefficient: z.coerce.number().min(0).max(1).default(0.40),
  generatorEfficiency: z.coerce.number().min(0).max(1).default(0.90),
});

type FormData = z.infer<typeof formSchema>;

interface Results {
  sweptArea: number;
  theoreticalPower: number;
  actualPower: number;
  powerDensity: number;
  annualEnergy: number;
  capacityFactor: number;
}

export default function WindTurbinePower() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      windSpeed: 0,
      windSpeedUnit: "m/s",
      bladeDiameter: 0,
      diameterUnit: "m",
      airDensity: 1.225,
      powerCoefficient: 0.40,
      generatorEfficiency: 0.90,
    },
  });

  function onSubmit(data: FormData) {
    // Convert wind speed to m/s
    let windSpeedMs = data.windSpeed;
    if (data.windSpeedUnit === "km/h") {
      windSpeedMs = data.windSpeed / 3.6;
    } else if (data.windSpeedUnit === "mph") {
      windSpeedMs = data.windSpeed * 0.44704;
    }

    // Convert diameter to meters
    let diameterM = data.bladeDiameter;
    if (data.diameterUnit === "ft") {
      diameterM = data.bladeDiameter * 0.3048;
    }

    // Calculate swept area (A = π × r²)
    const radius = diameterM / 2;
    const sweptArea = Math.PI * radius * radius;

    // Theoretical power (without Cp and efficiency): P = 0.5 × ρ × A × V³
    const theoreticalPower = 0.5 * data.airDensity * sweptArea * Math.pow(windSpeedMs, 3);

    // Actual power output: P = 0.5 × ρ × A × V³ × Cp × ηg
    const actualPower = theoreticalPower * data.powerCoefficient * data.generatorEfficiency;

    // Power density (W/m²)
    const powerDensity = actualPower / sweptArea;

    // Assume turbine operates at this wind speed for capacity factor calculation
    // Typical capacity factor is 25-35% for onshore wind
    const hoursPerYear = 8760;
    const annualEnergy = (actualPower / 1000) * hoursPerYear; // kWh
    const ratedPower = actualPower; // Using actual power at this wind speed
    const capacityFactor = ratedPower > 0 ? (annualEnergy / (ratedPower / 1000 * hoursPerYear)) * 100 : 0;

    setResults({
      sweptArea,
      theoreticalPower,
      actualPower,
      powerDensity,
      annualEnergy,
      capacityFactor,
    });
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Renewable Energy" calculatorName="Wind Turbine Power" />
        
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Wind Turbine Power Calculator</h1>
          <p className="text-muted-foreground">
            Calculate wind turbine power output based on wind speed and turbine specifications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter turbine specifications and wind conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="windSpeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wind Speed</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="12"
                              {...field}
                              data-testid="input-wind-speed"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="windSpeedUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wind Speed Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-wind-speed-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="m/s">m/s</SelectItem>
                              <SelectItem value="km/h">km/h</SelectItem>
                              <SelectItem value="mph">mph</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="bladeDiameter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blade Diameter (Rotor Diameter)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="80"
                              {...field}
                              data-testid="input-blade-diameter"
                            />
                          </FormControl>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground">
                            Total diameter of rotor blades
                          </p>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="diameterUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diameter Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-diameter-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="m">meters (m)</SelectItem>
                              <SelectItem value="ft">feet (ft)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="airDensity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Air Density (kg/m³)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.001"
                            placeholder="1.225"
                            {...field}
                            data-testid="input-air-density"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          1.225 kg/m³ at sea level, 15°C
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="powerCoefficient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Coefficient (Cp)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.40"
                            {...field}
                            data-testid="input-power-coefficient"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.35-0.45, Betz limit: 0.593
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="generatorEfficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Generator Efficiency</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.90"
                            {...field}
                            data-testid="input-generator-efficiency"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: 0.85-0.95
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Power Output
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Wind turbine power generation analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Swept Area:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-swept-area">
                      {results.sweptArea.toFixed(2)} m²
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1" data-testid="text-swept-area-description">
                    Area covered by rotating blades
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Theoretical Power (Wind):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-theoretical-power">
                      {(results.theoreticalPower / 1000).toFixed(2)} kW
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Available power in wind (before conversion)
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Actual Power Output:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-actual-power">
                      {(results.actualPower / 1000).toFixed(2)} kW
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Electrical power generated
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Power Density:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-power-density">
                      {results.powerDensity.toFixed(2)} W/m²
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Energy (at this speed):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-annual-energy">
                      {results.annualEnergy.toFixed(0)} kWh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    If wind speed remains constant
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    P = 0.5 × ρ × A × V³ × Cp × ηg<br />
                    A = π × (D/2)²
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('wind-turbine-power')!} calculatorId="wind-turbine-power" />
      </div>
    </div>
  );
}
