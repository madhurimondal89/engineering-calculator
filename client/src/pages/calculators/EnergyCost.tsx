import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  power: z.coerce.number().positive("Power must be positive"),
  powerUnit: z.enum(["W", "kW"]),
  hours: z.coerce.number().positive("Hours must be positive"),
  timeUnit: z.enum(["day", "week", "month", "year"]),
  rate: z.coerce.number().positive("Rate must be positive"),
});

type FormValues = z.infer<typeof formSchema>;

export default function EnergyCost() {
  const [result, setResult] = useState<{
    energyDaily: number;
    energyMonthly: number;
    energyYearly: number;
    costDaily: number;
    costMonthly: number;
    costYearly: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      power: 0,
      powerUnit: "kW",
      hours: 0,
      timeUnit: "day",
      rate: 0,
    },
  });

  const onSubmit = (values: FormValues) => {
    const { power: P, powerUnit, hours: h, timeUnit, rate: r } = values;

    let powerKW = P;
    if (powerUnit === "W") powerKW = P / 1000;

    let hoursPerDay = h;
    if (timeUnit === "week") hoursPerDay = h / 7;
    else if (timeUnit === "month") hoursPerDay = h / 30;
    else if (timeUnit === "year") hoursPerDay = h / 365;

    const energyDaily = powerKW * hoursPerDay;
    const energyMonthly = energyDaily * 30;
    const energyYearly = energyDaily * 365;

    const costDaily = energyDaily * r;
    const costMonthly = energyMonthly * r;
    const costYearly = energyYearly * r;

    setResult({
      energyDaily,
      energyMonthly,
      energyYearly,
      costDaily,
      costMonthly,
      costYearly,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/#power-system" className="hover:text-foreground">Power System</a>
          <span>/</span>
          <span className="text-foreground">Energy Cost Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            Energy Cost Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate electricity cost based on power consumption, usage time, and rate
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate Energy Cost
            </CardTitle>
            <CardDescription>
              Enter power consumption, usage hours, and electricity rate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="power"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Consumption</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 1.5"
                              data-testid="input-power"
                              step="any"
                              className="flex-1"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormField
                            control={form.control}
                            name="powerUnit"
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-24" data-testid="select-power-unit">
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="W">W</SelectItem>
                                  <SelectItem value="kW">kW</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Usage Time</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 8"
                              data-testid="input-hours"
                              step="any"
                              className="flex-1"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormField
                            control={form.control}
                            name="timeUnit"
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-32" data-testid="select-time-unit">
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="day">hours/day</SelectItem>
                                  <SelectItem value="week">hours/week</SelectItem>
                                  <SelectItem value="month">hours/month</SelectItem>
                                  <SelectItem value="year">hours/year</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rate"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Electricity Rate ($/kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 0.12"
                            data-testid="input-rate"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">Average US residential rate: $0.10-0.15/kWh</p>
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  data-testid="button-calculate"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Cost
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Energy & Cost Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Daily Energy</p>
                      <p className="text-xl font-mono font-bold text-foreground" data-testid="result-energy-daily">
                        {result.energyDaily.toFixed(3)} kWh
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Monthly Energy</p>
                      <p className="text-xl font-mono font-bold text-foreground" data-testid="result-energy-monthly">
                        {result.energyMonthly.toFixed(2)} kWh
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Yearly Energy</p>
                      <p className="text-xl font-mono font-bold text-foreground" data-testid="result-energy-yearly">
                        {result.energyYearly.toFixed(2)} kWh
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Daily Cost</p>
                        <p className="text-2xl font-mono font-bold text-primary" data-testid="result-cost-daily">
                          ${result.costDaily.toFixed(2)}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Monthly Cost</p>
                        <p className="text-2xl font-mono font-bold text-green-600 dark:text-green-400" data-testid="result-cost-monthly">
                          ${result.costMonthly.toFixed(2)}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Yearly Cost</p>
                        <p className="text-2xl font-mono font-bold text-orange-600 dark:text-orange-400" data-testid="result-cost-yearly">
                          ${result.costYearly.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium text-foreground mb-2">Formula Used:</p>
                  <code className="text-xs font-mono text-muted-foreground block">
                    Energy (kWh) = Power (kW) × Time (hours)
                    <br />
                    Cost ($) = Energy (kWh) × Rate ($/kWh)
                  </code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        "<CalculatorAccordion content={getCalculatorAccordion("energy-cost")} />
      </div>
    </div>
  );
}
