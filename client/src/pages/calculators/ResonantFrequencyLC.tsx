import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  inductance: z.coerce.number().positive("Inductance must be positive"),
  inductanceUnit: z.string().default("uH"),
  capacitance: z.coerce.number().positive("Capacitance must be positive"),
  capacitanceUnit: z.string().default("pF"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResonantFrequencyLC() {
  const [result, setResult] = useState<{
    frequency: number;
    frequencyUnit: string;
    wavelength: number;
    angularFrequency: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inductance: undefined,
      inductanceUnit: "uH",
      capacitance: undefined,
      capacitanceUnit: "pF",
    },
  });

  function onSubmit(values: FormValues) {
    // Convert inductance to Henries
    let inductanceH = values.inductance;
    if (values.inductanceUnit === "nH") inductanceH /= 1_000_000_000;
    else if (values.inductanceUnit === "uH") inductanceH /= 1_000_000;
    else if (values.inductanceUnit === "mH") inductanceH /= 1000;
    
    // Convert capacitance to Farads
    let capacitanceF = values.capacitance;
    if (values.capacitanceUnit === "pF") capacitanceF /= 1_000_000_000_000;
    else if (values.capacitanceUnit === "nF") capacitanceF /= 1_000_000_000;
    else if (values.capacitanceUnit === "uF") capacitanceF /= 1_000_000;
    
    // Calculate resonant frequency: f = 1 / (2π × √(L × C))
    const frequencyHz = 1 / (2 * Math.PI * Math.sqrt(inductanceH * capacitanceF));
    
    // Choose appropriate frequency unit
    let frequency: number;
    let frequencyUnit: string;
    
    if (frequencyHz < 1000) {
      frequency = frequencyHz;
      frequencyUnit = "Hz";
    } else if (frequencyHz < 1_000_000) {
      frequency = frequencyHz / 1000;
      frequencyUnit = "kHz";
    } else if (frequencyHz < 1_000_000_000) {
      frequency = frequencyHz / 1_000_000;
      frequencyUnit = "MHz";
    } else {
      frequency = frequencyHz / 1_000_000_000;
      frequencyUnit = "GHz";
    }
    
    // Calculate wavelength
    const speedOfLight = 299_792_458; // m/s
    const wavelength = speedOfLight / frequencyHz;
    
    // Calculate angular frequency (rad/s)
    const angularFrequency = 2 * Math.PI * frequencyHz;

    setResult({
      frequency: parseFloat(frequency.toFixed(4)),
      frequencyUnit,
      wavelength: parseFloat(wavelength.toFixed(4)),
      angularFrequency: parseFloat(angularFrequency.toFixed(2)),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="RF" calculatorName="LC Resonant Frequency Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            LC Resonant Frequency Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate resonant frequency of LC circuits
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>LC Circuit Parameters</CardTitle>
              <CardDescription>Enter inductance and capacitance</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inductance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inductance</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.001"
                            placeholder="10"
                            data-testid="input-inductance"
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
                    name="inductanceUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inductance Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-inductance-unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="nH">nH (nanohenries)</SelectItem>
                            <SelectItem value="uH">μH (microhenries)</SelectItem>
                            <SelectItem value="mH">mH (millihenries)</SelectItem>
                            <SelectItem value="H">H (henries)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="capacitance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Capacitance</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.001"
                            placeholder="100"
                            data-testid="input-capacitance"
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
                    name="capacitanceUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Capacitance Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-capacitance-unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pF">pF (picofarads)</SelectItem>
                            <SelectItem value="nF">nF (nanofarads)</SelectItem>
                            <SelectItem value="uF">μF (microfarads)</SelectItem>
                            <SelectItem value="F">F (farads)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Resonant Frequency
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result ? (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>Resonant frequency calculations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Resonant Frequency</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-frequency">
                      {result.frequency} {result.frequencyUnit}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Wavelength</div>
                      <div className="text-lg font-mono" data-testid="result-wavelength">
                        {result.wavelength} m
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Angular Frequency</div>
                      <div className="text-lg font-mono" data-testid="result-angular-frequency">
                        {result.angularFrequency} rad/s
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    Formula: f = 1 / (2π√(LC))
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter L and C values to calculate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Common Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Radio Tuning:</span>
                  <span className="font-mono">LC Oscillators</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Filters:</span>
                  <span className="font-mono">Band-pass/stop</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Matching:</span>
                  <span className="font-mono">Impedance networks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("resonant-frequency-lc") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("resonant-frequency-lc")!}
              calculatorId="resonant-frequency-lc"
            />
          )}
        </div>
      </div>
    </div>
  );
}
