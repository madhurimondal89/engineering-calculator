import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

const motorFullLoadCurrentSchema = z.object({
  power: z.coerce.number().positive("Power must be positive"),
  powerUnit: z.enum(["HP", "kW"]),
  voltage: z.coerce.number().positive("Voltage must be positive"),
  motorType: z.enum(["single", "three"]),
  powerFactor: z.coerce.number().min(0.1).max(1, "Power factor must be between 0.1 and 1"),
  efficiency: z.coerce.number().min(0.1).max(1, "Efficiency must be between 0.1 and 1"),
});

type MotorFullLoadCurrentForm = z.infer<typeof motorFullLoadCurrentSchema>;

interface Results {
  flc: number;
  apparentPower: number;
  inputPower: number;
}

export default function MotorFullLoadCurrent() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorFullLoadCurrentForm>({
    resolver: zodResolver(motorFullLoadCurrentSchema),
    defaultValues: {
      power: undefined,
      powerUnit: "HP",
      voltage: undefined,
      motorType: "three",
      powerFactor: 0.85,
      efficiency: 0.90,
    },
  });

  const motorType = form.watch("motorType");

  const onSubmit = (data: MotorFullLoadCurrentForm) => {
    // Convert HP to kW if needed
    let powerKW = data.power;
    if (data.powerUnit === "HP") {
      powerKW = data.power * 0.746;
    }

    // Input power = Output power / Efficiency
    const inputPower = powerKW / data.efficiency;

    // Calculate Full Load Current
    let flc: number;
    let apparentPower: number;

    if (data.motorType === "single") {
      // Single-phase: I = (P * 1000) / (V * PF * eff)
      flc = (powerKW * 1000) / (data.voltage * data.powerFactor * data.efficiency);
      apparentPower = data.voltage * flc / 1000; // kVA
    } else {
      // Three-phase: I = (P * 1000) / (√3 * V * PF * eff)
      flc = (powerKW * 1000) / (Math.sqrt(3) * data.voltage * data.powerFactor * data.efficiency);
      apparentPower = Math.sqrt(3) * data.voltage * flc / 1000; // kVA
    }

    setResults({
      flc,
      apparentPower,
      inputPower,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Full Load Current"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Full Load Current Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate full load current (FLC) for single-phase and three-phase motors
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Motor Parameters</CardTitle>
              <CardDescription>Enter motor specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="power"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Motor Power</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="e.g., 10"
                              data-testid="input-power"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="powerUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-power-unit">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="HP">Horsepower (HP)</SelectItem>
                              <SelectItem value="kW">Kilowatts (kW)</SelectItem>
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
                      name="voltage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Voltage (V)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="e.g., 415"
                              data-testid="input-voltage"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="motorType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Motor Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-motor-type">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="single">Single Phase</SelectItem>
                              <SelectItem value="three">Three Phase</SelectItem>
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
                      name="powerFactor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power Factor (0.1-1)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g., 0.85"
                              data-testid="input-power-factor"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="efficiency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Efficiency (0.1-1)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g., 0.90"
                              data-testid="input-efficiency"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Full Load Current
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Motor current and power analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Full Load Current</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-flc">
                      {results.flc.toFixed(2)} A
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Input Power</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-input-power">
                      {results.inputPower.toFixed(2)} kW
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Apparent Power</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-apparent-power">
                      {results.apparentPower.toFixed(2)} kVA
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  {motorType === "single" ? (
                    <>
                      <div className="font-mono text-sm">
                        FLC = (P × 1000) / (V × PF × η)
                      </div>
                      <div className="font-mono text-sm">
                        S = V × I / 1000
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-mono text-sm">
                        FLC = (P × 1000) / (√3 × V × PF × η)
                      </div>
                      <div className="font-mono text-sm">
                        S = √3 × V × I / 1000
                      </div>
                    </>
                  )}
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: P = Output Power (kW), V = Voltage (V), PF = Power Factor, η = Efficiency, FLC = Full Load Current (A), S = Apparent Power (kVA)
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-full-load-current")} />
        </div>
      </div>
    </div>
  );
}
