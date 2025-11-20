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
  inputType: z.string().default("frequency"),
  value: z.coerce.number().positive("Value must be positive"),
  unit: z.string().default("MHz"),
});

type FormValues = z.infer<typeof formSchema>;

export default function WavelengthFrequency() {
  const [result, setResult] = useState<{
    frequency: number;
    frequencyUnit: string;
    wavelength: number;
    wavelengthUnit: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputType: "frequency",
      unit: "MHz",
    },
  });

  const inputType = form.watch("inputType");

  function onSubmit(values: FormValues) {
    const speedOfLight = 299_792_458; // m/s
    
    if (values.inputType === "frequency") {
      let frequencyHz = values.value;
      
      // Convert to Hz
      if (values.unit === "kHz") frequencyHz *= 1000;
      else if (values.unit === "MHz") frequencyHz *= 1_000_000;
      else if (values.unit === "GHz") frequencyHz *= 1_000_000_000;
      
      // Calculate wavelength
      const wavelengthMeters = speedOfLight / frequencyHz;
      
      // Choose appropriate wavelength unit
      let wavelength: number;
      let wavelengthUnit: string;
      
      if (wavelengthMeters < 0.01) {
        wavelength = wavelengthMeters * 1000; // mm
        wavelengthUnit = "mm";
      } else if (wavelengthMeters < 1) {
        wavelength = wavelengthMeters * 100; // cm
        wavelengthUnit = "cm";
      } else if (wavelengthMeters < 1000) {
        wavelength = wavelengthMeters; // m
        wavelengthUnit = "m";
      } else {
        wavelength = wavelengthMeters / 1000; // km
        wavelengthUnit = "km";
      }
      
      setResult({
        frequency: values.value,
        frequencyUnit: values.unit,
        wavelength: parseFloat(wavelength.toFixed(4)),
        wavelengthUnit,
      });
    } else {
      // Input is wavelength
      let wavelengthMeters = values.value;
      
      // Convert to meters
      if (values.unit === "mm") wavelengthMeters /= 1000;
      else if (values.unit === "cm") wavelengthMeters /= 100;
      else if (values.unit === "km") wavelengthMeters *= 1000;
      
      // Calculate frequency
      const frequencyHz = speedOfLight / wavelengthMeters;
      
      // Choose appropriate frequency unit
      let frequency: number;
      let frequencyUnit: string;
      
      if (frequencyHz < 1_000_000) {
        frequency = frequencyHz / 1000; // kHz
        frequencyUnit = "kHz";
      } else if (frequencyHz < 1_000_000_000) {
        frequency = frequencyHz / 1_000_000; // MHz
        frequencyUnit = "MHz";
      } else {
        frequency = frequencyHz / 1_000_000_000; // GHz
        frequencyUnit = "GHz";
      }
      
      setResult({
        frequency: parseFloat(frequency.toFixed(4)),
        frequencyUnit,
        wavelength: values.value,
        wavelengthUnit: values.unit,
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "RF", href: "/category/rf" },
            { label: "Wavelength ↔ Frequency" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Wavelength to Frequency Converter
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Convert between wavelength and frequency using λ = c/f
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter frequency or wavelength</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inputType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Convert From</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-input-type">
                              <SelectValue placeholder="Select input type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="frequency">Frequency → Wavelength</SelectItem>
                            <SelectItem value="wavelength">Wavelength → Frequency</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{inputType === "frequency" ? "Frequency" : "Wavelength"}</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.0001"
                            placeholder={inputType === "frequency" ? "433" : "0.693"}
                            data-testid="input-value"
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
                    name="unit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {inputType === "frequency" ? (
                              <>
                                <SelectItem value="kHz">kHz</SelectItem>
                                <SelectItem value="MHz">MHz</SelectItem>
                                <SelectItem value="GHz">GHz</SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value="mm">mm</SelectItem>
                                <SelectItem value="cm">cm</SelectItem>
                                <SelectItem value="m">m</SelectItem>
                                <SelectItem value="km">km</SelectItem>
                              </>
                            )}
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

          <div className="space-y-6">
            {result ? (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>Conversion results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Frequency</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-frequency">
                      {result.frequency} {result.frequencyUnit}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Wavelength</div>
                    <div className="text-2xl font-bold font-mono" data-testid="result-wavelength">
                      {result.wavelength} {result.wavelengthUnit}
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    Formula: λ = c/f (where c = 299,792,458 m/s)
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter a value to convert
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Common Bands</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">FM Radio:</span>
                  <span className="font-mono">88-108 MHz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WiFi 2.4GHz:</span>
                  <span className="font-mono">12.5 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WiFi 5GHz:</span>
                  <span className="font-mono">6 cm</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("wavelength-frequency") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("wavelength-frequency")!}
              calculatorId="wavelength-frequency"
            />
          )}
        </div>
      </div>
    </div>
  );
}
