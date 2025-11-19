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

const motorSpeedSchema = z.object({
  frequency: z.coerce.number().positive("Frequency must be positive"),
  poles: z.coerce.number().int().positive("Number of poles must be a positive integer").multipleOf(2, "Number of poles must be even"),
  slip: z.coerce.number().min(0).max(100, "Slip must be between 0 and 100%"),
});

type MotorSpeedForm = z.infer<typeof motorSpeedSchema>;

interface Results {
  synchronousSpeed: number;
  actualSpeed: number;
  slipRPM: number;
  slipPercent: number;
}

export default function MotorSpeed() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorSpeedForm>({
    resolver: zodResolver(motorSpeedSchema),
    defaultValues: {
      frequency: 50,
      poles: 4,
      slip: 5,
    },
  });

  const onSubmit = (data: MotorSpeedForm) => {
    // Synchronous speed: Ns = (120 × f) / P
    const synchronousSpeed = (120 * data.frequency) / data.poles;
    
    // Actual speed: N = Ns × (1 - s/100)
    const actualSpeed = synchronousSpeed * (1 - data.slip / 100);
    
    // Slip in RPM
    const slipRPM = synchronousSpeed - actualSpeed;
    
    setResults({
      synchronousSpeed,
      actualSpeed,
      slipRPM,
      slipPercent: data.slip,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor Speed"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor Speed Calculator
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Calculate synchronous speed, actual speed, and slip for AC induction motors
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
                      name="frequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Frequency (Hz)</FormLabel>
                          <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
                            <FormControl>
                              <SelectTrigger data-testid="select-frequency">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="50">50 Hz</SelectItem>
                              <SelectItem value="60">60 Hz</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="poles"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Poles</FormLabel>
                          <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value?.toString()}>
                            <FormControl>
                              <SelectTrigger data-testid="select-poles">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="2">2 Poles</SelectItem>
                              <SelectItem value="4">4 Poles</SelectItem>
                              <SelectItem value="6">6 Poles</SelectItem>
                              <SelectItem value="8">8 Poles</SelectItem>
                              <SelectItem value="10">10 Poles</SelectItem>
                              <SelectItem value="12">12 Poles</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="slip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slip (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="e.g., 5"
                            data-testid="input-slip"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Speed
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Motor speed analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Synchronous Speed</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-synchronous-speed">
                      {results.synchronousSpeed.toFixed(0)} RPM
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Actual Speed (Rotor)</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-actual-speed">
                      {results.actualSpeed.toFixed(0)} RPM
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Slip (RPM)</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-slip-rpm">
                      {results.slipRPM.toFixed(0)} RPM
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Slip (%)</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-slip-percent">
                      {results.slipPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Formula Used</h4>
                  <div className="font-mono text-sm">
                    Ns = (120 × f) / P
                  </div>
                  <div className="font-mono text-sm">
                    N = Ns × (1 - s/100)
                  </div>
                  <div className="font-mono text-sm">
                    Slip (RPM) = Ns - N
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Where: Ns = Synchronous Speed (RPM), N = Actual Speed (RPM), f = Frequency (Hz), P = Number of Poles, s = Slip (%)
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-speed")} />
        </div>
      </div>
    </div>
  );
}
