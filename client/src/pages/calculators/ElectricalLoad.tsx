import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, Plug, Plus, X } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  voltage: z.coerce.number().positive("Voltage must be positive"),
  powerFactor: z.coerce.number().min(0.01, "Must be at least 0.01").max(1, "Must be at most 1.0"),
  loads: z.array(z.object({
    name: z.string().min(1, "Name is required"),
    power: z.coerce.number().nonnegative("Power must be non-negative"),
    quantity: z.coerce.number().int().min(1, "Quantity must be at least 1"),
    hours: z.coerce.number().min(0, "Hours must be non-negative").max(24, "Hours cannot exceed 24")
  }))
});

type FormValues = z.infer<typeof formSchema>;

export default function ElectricalLoad() {
  const [result, setResult] = useState<{
    totalPower: number;
    totalCurrent: number;
    totalEnergy: number;
    apparentPower: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voltage: 230,
      powerFactor: 0.9,
      loads: [{ name: "Light", power: 60, quantity: 10, hours: 5 }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "loads"
  });

  const addLoad = () => {
    append({ name: "", power: 0, quantity: 1, hours: 0 });
  };

  const onSubmit = (values: FormValues) => {
    const { voltage: V, powerFactor: pf, loads } = values;

    let totalP = 0;
    let totalE = 0;

    loads.forEach((load) => {
      const loadPower = load.power * load.quantity;
      totalP += loadPower;
      totalE += loadPower * load.hours;
    });

    const totalPkW = totalP / 1000;
    const S = totalPkW / pf;
    const I = (S * 1000) / V;

    setResult({
      totalPower: totalPkW,
      totalCurrent: I,
      totalEnergy: totalE / 1000,
      apparentPower: S,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/#power-system" className="hover:text-foreground">Power System</a>
          <span>/</span>
          <span className="text-foreground">Electrical Load Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Plug className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            Electrical Load Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate total electrical load, current, and power requirements for installations
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Add Electrical Loads
            </CardTitle>
            <CardDescription>
              Enter each load's power, quantity, and usage hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-12 sm:col-span-3">
                    <FormField
                      control={form.control}
                      name={`loads.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Load Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="e.g., Light"
                              data-testid={`input-name-${index}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <FormField
                      control={form.control}
                      name={`loads.${index}.power`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power (W)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="60"
                              data-testid={`input-power-${index}`}
                              step="any"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <FormField
                      control={form.control}
                      name={`loads.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Qty</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="1"
                              data-testid={`input-quantity-${index}`}
                              min="1"
                              step="any"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <FormField
                      control={form.control}
                      name={`loads.${index}.hours`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hours/day</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="5"
                              data-testid={`input-hours-${index}`}
                              step="any"
                              max="24"
                              value={field.value ?? ""}
                              onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-2 flex items-end gap-2">
                    <p className="text-sm font-mono text-muted-foreground flex-1">
                      {(form.watch(`loads.${index}.power`) * form.watch(`loads.${index}.quantity`)).toFixed(0)}W
                    </p>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}
                      data-testid={`button-remove-${index}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={addLoad} variant="outline" className="w-full" data-testid="button-add-load">
              <Plus className="mr-2 h-4 w-4" />
              Add Load
            </Button>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                  <FormField
                    control={form.control}
                    name="voltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="230"
                            data-testid="input-voltage"
                            step="any"
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
                    name="powerFactor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Factor</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0.9"
                            data-testid="input-power-factor"
                            min="0.01"
                            max="1"
                            step="any"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
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
                  Calculate Total Load
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Plug className="h-5 w-5 text-primary" />
                  Load Summary
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Real Power</p>
                    <p className="text-2xl font-mono font-bold text-primary" data-testid="result-power">
                      {result.totalPower.toFixed(2)} kW
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Apparent Power</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-apparent-power">
                      {result.apparentPower.toFixed(2)} kVA
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Current</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-current">
                      {result.totalCurrent.toFixed(2)} A
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Daily Energy Consumption</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-energy">
                      {result.totalEnergy.toFixed(2)} kWh/day
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <CalculatorAccordion items={getCalculatorAccordion("electrical-load")} />
      </div>
    </div>
  );
}
