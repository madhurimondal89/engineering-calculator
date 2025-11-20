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
  frequency: z.coerce.number().positive("Frequency must be positive"),
  frequencyUnit: z.string().default("MHz"),
  antennaType: z.string().default("dipole"),
  velocityFactor: z.coerce.number().positive("Velocity factor must be positive").min(0.5).max(1).default(0.95),
});

type FormValues = z.infer<typeof formSchema>;

export default function AntennaLength() {
  const [result, setResult] = useState<{
    lengthMeters: number;
    lengthFeet: number;
    wavelength: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frequency: undefined,
      frequencyUnit: "MHz",
      antennaType: "dipole",
      velocityFactor: 0.95,
    },
  });

  function onSubmit(values: FormValues) {
    let frequencyHz = values.frequency;
    
    // Convert to Hz
    if (values.frequencyUnit === "kHz") {
      frequencyHz *= 1000;
    } else if (values.frequencyUnit === "MHz") {
      frequencyHz *= 1_000_000;
    } else if (values.frequencyUnit === "GHz") {
      frequencyHz *= 1_000_000_000;
    }
    
    // Speed of light in m/s
    const speedOfLight = 299_792_458;
    
    // Calculate wavelength
    const wavelength = (speedOfLight / frequencyHz) * values.velocityFactor;
    
    // Calculate antenna length based on type
    let lengthMeters: number;
    if (values.antennaType === "dipole") {
      // Full-wave dipole is λ/2
      lengthMeters = wavelength / 2;
    } else if (values.antennaType === "monopole") {
      // Quarter-wave monopole is λ/4
      lengthMeters = wavelength / 4;
    } else {
      // Full wavelength
      lengthMeters = wavelength;
    }
    
    const lengthFeet = lengthMeters * 3.28084;

    setResult({
      lengthMeters: parseFloat(lengthMeters.toFixed(4)),
      lengthFeet: parseFloat(lengthFeet.toFixed(4)),
      wavelength: parseFloat(wavelength.toFixed(4)),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "RF", href: "/category/rf" },
            { label: "Antenna Length" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Antenna Length Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate dipole and monopole antenna length from frequency
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter frequency and antenna specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="433"
                            data-testid="input-frequency"
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
                    name="frequencyUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-frequency-unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kHz">kHz</SelectItem>
                            <SelectItem value="MHz">MHz</SelectItem>
                            <SelectItem value="GHz">GHz</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="antennaType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Antenna Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-antenna-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dipole">Dipole (λ/2)</SelectItem>
                            <SelectItem value="monopole">Monopole (λ/4)</SelectItem>
                            <SelectItem value="fullwave">Full Wave (λ)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="velocityFactor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Velocity Factor (0.5-1.0)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.95"
                            data-testid="input-velocity-factor"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Antenna Length
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
                  <CardDescription>Calculated antenna dimensions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Antenna Length</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-length-meters">
                      {result.lengthMeters} m
                    </div>
                    <div className="text-lg font-mono mt-1" data-testid="result-length-feet">
                      {result.lengthFeet} ft
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Wavelength</div>
                      <div className="text-lg font-mono" data-testid="result-wavelength">
                        {result.wavelength} m
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter frequency and calculate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Common Antenna Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dipole (λ/2):</span>
                  <span className="font-mono">Most common</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monopole (λ/4):</span>
                  <span className="font-mono">Ground plane</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Full Wave (λ):</span>
                  <span className="font-mono">High gain</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("antenna-length") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("antenna-length")!}
              calculatorId="antenna-length"
            />
          )}
        </div>
      </div>
    </div>
  );
}
