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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const formSchema = z.object({
  inputValue: z.coerce.number().positive("Input value must be positive"),
  inputUnit: z.enum(["Hz", "kHz", "MHz", "GHz"]),
  outputUnit: z.enum(["Hz", "kHz", "MHz", "GHz"]),
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  outputValue: number;
  period: number;
  angularFrequency: number;
  wavelength: number;
}

export default function FrequencyConverter() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputValue: 50,
      inputUnit: "Hz",
      outputUnit: "MHz",
    },
  });

  function onSubmit(values: FormValues) {
    // Conversion factors to Hz (base unit)
    const toHz: Record<string, number> = {
      "Hz": 1,
      "kHz": 1000,
      "MHz": 1000000,
      "GHz": 1000000000,
    };

    // Convert input to Hz
    const valueInHz = values.inputValue * toHz[values.inputUnit];
    
    // Convert from Hz to output unit
    const outputValue = valueInHz / toHz[values.outputUnit];
    
    // Calculate period (T = 1/f) in seconds
    const period = 1 / valueInHz;
    
    // Calculate angular frequency (ω = 2πf) in rad/s
    const angularFrequency = 2 * Math.PI * valueInHz;
    
    // Calculate wavelength (λ = c/f) in meters (speed of light = 299,792,458 m/s)
    const speedOfLight = 299792458;
    const wavelength = speedOfLight / valueInHz;

    setResult({
      outputValue: parseFloat(outputValue.toFixed(6)),
      period: parseFloat(period.toExponential(6)),
      angularFrequency: parseFloat(angularFrequency.toExponential(6)),
      wavelength: parseFloat(wavelength.toFixed(6)),
    });
  }

  const accordions = getCalculatorAccordion("frequency-converter");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="Frequency Converter" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            Frequency Converter
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Convert between Hz, kHz, MHz, and GHz frequencies
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter frequency value and select units</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inputValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Input Value</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.000001"
                            placeholder="50"
                            data-testid="input-inputValue"
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
                    name="inputUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Input Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-inputUnit">
                              <SelectValue placeholder="Select input unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Hz">Hertz (Hz)</SelectItem>
                            <SelectItem value="kHz">Kilohertz (kHz)</SelectItem>
                            <SelectItem value="MHz">Megahertz (MHz)</SelectItem>
                            <SelectItem value="GHz">Gigahertz (GHz)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="outputUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Output Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-outputUnit">
                              <SelectValue placeholder="Select output unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Hz">Hertz (Hz)</SelectItem>
                            <SelectItem value="kHz">Kilohertz (kHz)</SelectItem>
                            <SelectItem value="MHz">Megahertz (MHz)</SelectItem>
                            <SelectItem value="GHz">Gigahertz (GHz)</SelectItem>
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
              <CardDescription>Converted frequency and related values</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Converted Value</div>
                    <div className="text-3xl font-mono font-bold text-primary" data-testid="result-outputValue">
                      {result.outputValue.toLocaleString()} {form.getValues("outputUnit")}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Period:</span>
                      <span className="font-mono font-semibold" data-testid="result-period">
                        {result.period} s
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Angular Frequency:</span>
                      <span className="font-mono font-semibold" data-testid="result-angularFrequency">
                        {result.angularFrequency} rad/s
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Wavelength (in vacuum):</span>
                      <span className="font-mono font-semibold" data-testid="result-wavelength">
                        {result.wavelength.toLocaleString()} m
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>Period: T = 1/f</div>
                      <div>Angular Frequency: ω = 2πf</div>
                      <div>Wavelength: λ = c/f</div>
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

        {accordions.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Learn More</h2>
            <Accordion type="single" collapsible className="w-full">
              {accordions.map((accordion, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {accordion.question}
                  </AccordionTrigger>
                  <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: accordion.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}
