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
  acVoltage: z.coerce.number().positive("AC voltage must be positive"),
  rectifierType: z.enum(["half-wave", "full-wave-center", "full-wave-bridge"]),
  efficiency: z.coerce.number().min(0).max(100).default(95),
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  dcVoltage: number;
  peakVoltage: number;
  rippleVoltage: number;
  ripplePercent: number;
  outputPower: number;
}

export default function AcToDc() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acVoltage: 230,
      rectifierType: "full-wave-bridge",
      efficiency: 95,
    },
  });

  function onSubmit(values: FormValues) {
    const { acVoltage, rectifierType, efficiency } = values;
    
    // Peak voltage (Vpeak = Vrms × √2)
    const peakVoltage = acVoltage * Math.sqrt(2);
    
    let dcVoltage: number;
    let ripplePercent: number;
    
    // Calculate DC voltage based on rectifier type
    switch (rectifierType) {
      case "half-wave":
        // Vdc = Vpeak / π (theoretical)
        dcVoltage = peakVoltage / Math.PI;
        ripplePercent = 121; // ~121% ripple
        break;
      case "full-wave-center":
        // Vdc = 2 × Vpeak / π (center-tapped transformer)
        dcVoltage = (2 * peakVoltage) / Math.PI;
        ripplePercent = 48; // ~48% ripple
        break;
      case "full-wave-bridge":
        // Vdc = 2 × Vpeak / π (bridge rectifier)
        dcVoltage = (2 * peakVoltage) / Math.PI;
        ripplePercent = 48; // ~48% ripple
        break;
      default:
        dcVoltage = 0;
        ripplePercent = 0;
    }
    
    // Apply efficiency
    const actualDcVoltage = dcVoltage * (efficiency / 100);
    
    // Calculate ripple voltage
    const rippleVoltage = actualDcVoltage * (ripplePercent / 100);
    
    // Estimate output power (assuming 1A load for reference)
    const outputPower = actualDcVoltage * 1;

    setResult({
      dcVoltage: parseFloat(actualDcVoltage.toFixed(2)),
      peakVoltage: parseFloat(peakVoltage.toFixed(2)),
      rippleVoltage: parseFloat(rippleVoltage.toFixed(2)),
      ripplePercent: parseFloat(ripplePercent.toFixed(1)),
      outputPower: parseFloat(outputPower.toFixed(2)),
    });
  }

  const accordions = getCalculatorAccordion("ac-to-dc");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="AC to DC Conversion Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            AC to DC Conversion Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Calculate DC output voltage from AC input with rectifier efficiency
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter AC voltage and rectifier type</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="acVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>AC Voltage (RMS)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="230"
                            data-testid="input-acVoltage"
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
                    name="rectifierType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rectifier Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-rectifierType">
                              <SelectValue placeholder="Select rectifier type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="half-wave">Half-Wave Rectifier</SelectItem>
                            <SelectItem value="full-wave-center">Full-Wave (Center-Tap)</SelectItem>
                            <SelectItem value="full-wave-bridge">Full-Wave Bridge</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="efficiency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rectifier Efficiency (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="95"
                            data-testid="input-efficiency"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DC Output Results</CardTitle>
              <CardDescription>Calculated DC voltage and characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">DC Output Voltage</div>
                    <div className="text-3xl font-mono font-bold text-primary" data-testid="result-dcVoltage">
                      {result.dcVoltage.toLocaleString()} V
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Peak Voltage:</span>
                      <span className="font-mono font-semibold" data-testid="result-peakVoltage">
                        {result.peakVoltage.toLocaleString()} V
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Ripple Voltage:</span>
                      <span className="font-mono font-semibold" data-testid="result-rippleVoltage">
                        {result.rippleVoltage.toLocaleString()} V
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Ripple %:</span>
                      <span className="font-mono font-semibold" data-testid="result-ripplePercent">
                        {result.ripplePercent}%
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Output Power (1A load):</span>
                      <span className="font-mono font-semibold" data-testid="result-outputPower">
                        {result.outputPower.toLocaleString()} W
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>Peak: Vpeak = Vrms × √2</div>
                      <div>DC (Full-Wave): Vdc = (2 × Vpeak) / π</div>
                      <div>DC (Half-Wave): Vdc = Vpeak / π</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground" data-testid="result-empty">
                  Enter values and click Calculate to see results
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
