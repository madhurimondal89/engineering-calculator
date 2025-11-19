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

const motorTorqueSchema = z.object({
  power: z.coerce.number().positive("Power must be positive"),
  powerUnit: z.enum(["HP", "kW"]),
  speed: z.coerce.number().positive("Speed must be positive"),
});

type MotorTorqueForm = z.infer<typeof motorTorqueSchema>;

interface Results {
  torqueNm: number;
  torqueLbFt: number;
  angularVelocity: number;
}

export default function MotorTorque() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorTorqueForm>({
    resolver: zodResolver(motorTorqueSchema),
    defaultValues: {
      power: undefined,
      powerUnit: "HP",
      speed: undefined,
    },
  });

  const onSubmit = (data: MotorTorqueForm) => {
    // Convert HP to kW if needed
    let powerKW = data.power;
    if (data.powerUnit === "HP") {
      powerKW = data.power * 0.746;
    }

    // Angular velocity in rad/s: ω = (2π × N) / 60
    const angularVelocity = (2 * Math.PI * data.speed) / 60;

    // Torque in Nm: T = P / ω = (P × 1000) / ω
    const torqueNm = (powerKW * 1000) / angularVelocity;

    // Alternative formula: T = (9550 × P) / N (where P is in kW, N is in RPM)
    // const torqueNm = (9550 * powerKW) / data.speed;

    // Convert to lb-ft
    const torqueLbFt = torqueNm * 0.7376;

    setResults({
      torqueNm,
      torqueLbFt,
      angularVelocity,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Torque"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Torque Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate motor torque from power and speed (τ = P / ω)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Motor Parameters</CardTitle>
              <CardDescription>Enter power and speed values</CardDescription>
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

                  <FormField
                    control={form.control}
                    name="speed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Speed (RPM)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="e.g., 1450"
                            data-testid="input-speed"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Torque
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Motor torque analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Torque (Metric)</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-torque-nm">
                      {results.torqueNm.toFixed(2)} N⋅m
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Torque (Imperial)</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-torque-lbft">
                      {results.torqueLbFt.toFixed(2)} lb⋅ft
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Angular Velocity</div>
                  <div className="text-2xl font-bold font-mono" data-testid="text-angular-velocity">
                    {results.angularVelocity.toFixed(2)} rad/s
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  <div className="font-mono text-sm">
                    ω = (2π × N) / 60
                  </div>
                  <div className="font-mono text-sm">
                    T = P / ω = (P × 1000) / ω
                  </div>
                  <div className="font-mono text-sm">
                    Alternatively: T = (9550 × P) / N
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: T = Torque (N⋅m), P = Power (kW), ω = Angular Velocity (rad/s), N = Speed (RPM)
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-torque")} />
        </div>
      </div>
    </div>
  );
}
