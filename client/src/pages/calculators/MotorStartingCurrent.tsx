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
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const motorStartingCurrentSchema = z.object({
  power: z.coerce.number().positive("Power must be positive"),
  powerUnit: z.enum(["HP", "kW"]),
  voltage: z.coerce.number().positive("Voltage must be positive"),
  motorType: z.enum(["single", "three"]),
  startingMethod: z.enum(["DOL", "star-delta", "soft-start", "LRA"]),
  lra: z.coerce.number().positive("LRA must be positive").optional(),
  powerFactor: z.coerce.number().min(0.1).max(1, "Power factor must be between 0.1 and 1").default(0.85),
  efficiency: z.coerce.number().min(0.1).max(1, "Efficiency must be between 0.1 and 1").default(0.90),
}).refine((data) => {
  if (data.startingMethod === "LRA" && !data.lra) {
    return false;
  }
  return true;
}, {
  message: "LRA value required when using LRA method",
  path: ["lra"],
});

type MotorStartingCurrentForm = z.infer<typeof motorStartingCurrentSchema>;

interface Results {
  flc: number;
  startingCurrent: number;
  ratio: number;
  method: string;
}

export default function MotorStartingCurrent() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorStartingCurrentForm>({
    resolver: zodResolver(motorStartingCurrentSchema),
    defaultValues: {
      power: undefined,
      powerUnit: "HP",
      voltage: undefined,
      motorType: "three",
      startingMethod: "DOL",
      lra: undefined,
      powerFactor: 0.85,
      efficiency: 0.90,
    },
  });

  const startingMethod = form.watch("startingMethod");
  const motorType = form.watch("motorType");

  const onSubmit = (data: MotorStartingCurrentForm) => {
    // Convert HP to kW if needed
    let powerKW = data.power;
    if (data.powerUnit === "HP") {
      powerKW = data.power * 0.746;
    }

    const pf = data.powerFactor || 0.85;
    const eff = data.efficiency || 0.90;

    // Calculate Full Load Current
    let flc: number;
    if (data.motorType === "single") {
      // Single-phase: I = (P * 1000) / (V * PF * eff)
      flc = (powerKW * 1000) / (data.voltage * pf * eff);
    } else {
      // Three-phase: I = (P * 1000) / (√3 * V * PF * eff)
      flc = (powerKW * 1000) / (Math.sqrt(3) * data.voltage * pf * eff);
    }

    // Calculate Starting Current based on method
    let startingCurrent: number;
    let methodName: string;

    switch (data.startingMethod) {
      case "DOL":
        startingCurrent = flc * 6; // DOL: 5-7 times FLC (using 6 as average)
        methodName = "Direct On Line (DOL)";
        break;
      case "star-delta":
        startingCurrent = flc * 2; // Star-Delta: 2-2.5 times FLC (using 2)
        methodName = "Star-Delta Starter";
        break;
      case "soft-start":
        startingCurrent = flc * 3.5; // Soft starter: 3-4 times FLC
        methodName = "Soft Starter";
        break;
      case "LRA":
        startingCurrent = data.lra!;
        methodName = "Using LRA Value";
        break;
      default:
        startingCurrent = flc * 6;
        methodName = "Direct On Line (DOL)";
    }

    const ratio = startingCurrent / flc;

    setResults({
      flc,
      startingCurrent,
      ratio,
      method: methodName,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Starting Current"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Starting Current Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate inrush/starting current for AC motors based on starting method and motor specifications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Motor Parameters</CardTitle>
              <CardDescription>Enter motor specifications and starting method</CardDescription>
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

                  <FormField
                    control={form.control}
                    name="startingMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Starting Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-starting-method">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="DOL">Direct On Line (DOL) - ~6× FLC</SelectItem>
                            <SelectItem value="star-delta">Star-Delta Starter - ~2× FLC</SelectItem>
                            <SelectItem value="soft-start">Soft Starter - ~3.5× FLC</SelectItem>
                            <SelectItem value="LRA">Use LRA Value</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {startingMethod === "LRA" && (
                    <FormField
                      control={form.control}
                      name="lra"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Locked Rotor Amps (LRA)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              placeholder="e.g., 120"
                              data-testid="input-lra"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

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
                    Calculate Starting Current
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Starting current analysis for {results.method}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Starting Method: <strong>{results.method}</strong>
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Full Load Current</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-flc">
                      {results.flc.toFixed(2)} A
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Starting Current</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-starting-current">
                      {results.startingCurrent.toFixed(2)} A
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Ratio (Ist / FLC)</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-ratio">
                      {results.ratio.toFixed(2)}×
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  {motorType === "single" ? (
                    <div className="font-mono text-sm">
                      FLC = (P × 1000) / (V × PF × η)
                    </div>
                  ) : (
                    <div className="font-mono text-sm">
                      FLC = (P × 1000) / (√3 × V × PF × η)
                    </div>
                  )}
                  <div className="font-mono text-sm">
                    {startingMethod === "LRA" ? "Ist = LRA" : `Ist = FLC × ${(results.ratio).toFixed(1)}`}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: P = Power (kW), V = Voltage (V), PF = Power Factor, η = Efficiency, FLC = Full Load Current, Ist = Starting Current
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-starting-current")} />
        </div>
      </div>
    </div>
  );
}
