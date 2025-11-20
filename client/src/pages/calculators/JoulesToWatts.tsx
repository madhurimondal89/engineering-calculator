import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";

const formSchema = z.object({
  conversionMode: z.enum(["joules-to-watts", "watts-to-joules"]),
  energy: z.coerce.number().positive("Energy must be positive").optional(),
  power: z.coerce.number().positive("Power must be positive").optional(),
  time: z.coerce.number().positive("Time must be positive"),
  timeUnit: z.enum(["s", "min", "h"]),
}).refine((data) => {
  if (data.conversionMode === "joules-to-watts") {
    return data.energy !== undefined && data.energy > 0;
  } else {
    return data.power !== undefined && data.power > 0;
  }
}, {
  message: "Please enter either energy or power based on conversion mode",
  path: ["energy"],
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  power?: number;
  energy?: number;
  timeInSeconds: number;
}

export default function JoulesToWatts() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      conversionMode: "joules-to-watts",
      energy: 1000,
      time: 1,
      timeUnit: "h",
    },
  });

  const conversionMode = form.watch("conversionMode");

  function onSubmit(values: FormValues) {
    const { conversionMode, energy, power, time, timeUnit } = values;
    
    // Convert time to seconds
    const timeFactors: Record<string, number> = {
      "s": 1,
      "min": 60,
      "h": 3600,
    };
    const timeInSeconds = time * timeFactors[timeUnit];
    
    if (conversionMode === "joules-to-watts" && energy) {
      // P = E / t (Watts = Joules / seconds)
      const calculatedPower = energy / timeInSeconds;
      
      setResult({
        power: parseFloat(calculatedPower.toFixed(6)),
        timeInSeconds: parseFloat(timeInSeconds.toFixed(2)),
      });
    } else if (conversionMode === "watts-to-joules" && power) {
      // E = P × t (Joules = Watts × seconds)
      const calculatedEnergy = power * timeInSeconds;
      
      setResult({
        energy: parseFloat(calculatedEnergy.toFixed(6)),
        timeInSeconds: parseFloat(timeInSeconds.toFixed(2)),
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="Joules to Watts Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            Joules to Watts Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Convert between energy (Joules) and power (Watts) over time
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Select conversion mode and enter values</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="conversionMode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Conversion Mode</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-conversionMode">
                              <SelectValue placeholder="Select conversion mode" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="joules-to-watts">Joules → Watts</SelectItem>
                            <SelectItem value="watts-to-joules">Watts → Joules</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {conversionMode === "joules-to-watts" && (
                    <FormField
                      control={form.control}
                      name="energy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Energy (Joules)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.000001"
                              placeholder="1000"
                              data-testid="input-energy"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {conversionMode === "watts-to-joules" && (
                    <FormField
                      control={form.control}
                      name="power"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power (Watts)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.000001"
                              placeholder="100"
                              data-testid="input-power"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Duration</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="1"
                            data-testid="input-time"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-timeUnit">
                              <SelectValue placeholder="Select time unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="s">Seconds (s)</SelectItem>
                            <SelectItem value="min">Minutes (min)</SelectItem>
                            <SelectItem value="h">Hours (h)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Convert
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conversion Result</CardTitle>
              <CardDescription>Calculated energy or power value</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  {result.power !== undefined && (
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Power Output</div>
                      <div className="text-3xl font-mono font-bold text-primary" data-testid="result-power">
                        {result.power.toLocaleString()} W
                      </div>
                    </div>
                  )}

                  {result.energy !== undefined && (
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Energy Output</div>
                      <div className="text-3xl font-mono font-bold text-primary" data-testid="result-energy">
                        {result.energy.toLocaleString()} J
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Time (seconds):</span>
                      <span className="font-mono font-semibold" data-testid="result-timeInSeconds">
                        {result.timeInSeconds.toLocaleString()} s
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>Power: P = E / t (Watts = Joules / seconds)</div>
                      <div>Energy: E = P × t (Joules = Watts × seconds)</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground" data-testid="result-empty">
                  Enter values and click Convert to see results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion('joules-to-watts') && (
          <CalculatorAccordion content={getCalculatorAccordion('joules-to-watts')!} calculatorId="joules-to-watts" />
        )}
      </div>
    </div>
  );
}
