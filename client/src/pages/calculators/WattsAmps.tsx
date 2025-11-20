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
  conversionMode: z.enum(["watts-to-amps", "amps-to-watts"]),
  watts: z.coerce.number().positive("Watts must be positive").optional(),
  amps: z.coerce.number().positive("Amps must be positive").optional(),
  voltage: z.coerce.number().positive("Voltage must be positive"),
  powerFactor: z.coerce.number().min(0).max(1).default(1),
  systemType: z.enum(["dc", "ac-single", "ac-three"]),
}).refine((data) => {
  if (data.conversionMode === "watts-to-amps") {
    return data.watts !== undefined && data.watts > 0;
  } else {
    return data.amps !== undefined && data.amps > 0;
  }
}, {
  message: "Please enter either watts or amps based on conversion mode",
  path: ["watts"],
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  watts?: number;
  amps?: number;
  apparentPower: number;
  voltage: number;
}

export default function WattsAmps() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      conversionMode: "watts-to-amps",
      watts: 1000,
      voltage: 230,
      powerFactor: 1,
      systemType: "ac-single",
    },
  });

  const conversionMode = form.watch("conversionMode");
  const systemType = form.watch("systemType");

  function onSubmit(values: FormValues) {
    const { conversionMode, watts, amps, voltage, powerFactor, systemType } = values;
    
    let calculatedAmps: number | undefined;
    let calculatedWatts: number | undefined;
    let apparentPower: number;
    
    if (conversionMode === "watts-to-amps" && watts) {
      // Calculate amps from watts
      if (systemType === "dc") {
        // DC: I = P / V
        calculatedAmps = watts / voltage;
        apparentPower = watts;
      } else if (systemType === "ac-single") {
        // AC Single Phase: I = P / (V × PF)
        calculatedAmps = watts / (voltage * powerFactor);
        apparentPower = voltage * calculatedAmps;
      } else {
        // AC Three Phase: I = P / (√3 × V × PF)
        calculatedAmps = watts / (Math.sqrt(3) * voltage * powerFactor);
        apparentPower = Math.sqrt(3) * voltage * calculatedAmps;
      }
      
      setResult({
        amps: parseFloat(calculatedAmps.toFixed(4)),
        apparentPower: parseFloat(apparentPower.toFixed(2)),
        voltage: voltage,
      });
    } else if (conversionMode === "amps-to-watts" && amps) {
      // Calculate watts from amps
      if (systemType === "dc") {
        // DC: P = V × I
        calculatedWatts = voltage * amps;
        apparentPower = calculatedWatts;
      } else if (systemType === "ac-single") {
        // AC Single Phase: P = V × I × PF
        calculatedWatts = voltage * amps * powerFactor;
        apparentPower = voltage * amps;
      } else {
        // AC Three Phase: P = √3 × V × I × PF
        calculatedWatts = Math.sqrt(3) * voltage * amps * powerFactor;
        apparentPower = Math.sqrt(3) * voltage * amps;
      }
      
      setResult({
        watts: parseFloat(calculatedWatts.toFixed(2)),
        apparentPower: parseFloat(apparentPower.toFixed(2)),
        voltage: voltage,
      });
    }
  }

  const accordions = getCalculatorAccordion("watts-amps");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="Watts to Amps / Amps to Watts Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            Watts to Amps / Amps to Watts Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Bidirectional converter between watts and amps using voltage
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
                            <SelectItem value="watts-to-amps">Watts → Amps</SelectItem>
                            <SelectItem value="amps-to-watts">Amps → Watts</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {conversionMode === "watts-to-amps" && (
                    <FormField
                      control={form.control}
                      name="watts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power (Watts)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="1000"
                              data-testid="input-watts"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {conversionMode === "amps-to-watts" && (
                    <FormField
                      control={form.control}
                      name="amps"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current (Amps)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="4.35"
                              data-testid="input-amps"
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
                    name="voltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="230"
                            data-testid="input-voltage"
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
                    name="systemType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-systemType">
                              <SelectValue placeholder="Select system type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dc">DC</SelectItem>
                            <SelectItem value="ac-single">AC Single Phase</SelectItem>
                            <SelectItem value="ac-three">AC Three Phase</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {systemType !== "dc" && (
                    <FormField
                      control={form.control}
                      name="powerFactor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Power Factor (0-1)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="1"
                              data-testid="input-powerFactor"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value === "" ? "" : parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

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
              <CardDescription>Calculated current or power value</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  {result.amps !== undefined && (
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Current</div>
                      <div className="text-3xl font-mono font-bold text-primary" data-testid="result-amps">
                        {result.amps.toLocaleString()} A
                      </div>
                    </div>
                  )}

                  {result.watts !== undefined && (
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Power</div>
                      <div className="text-3xl font-mono font-bold text-primary" data-testid="result-watts">
                        {result.watts.toLocaleString()} W
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Apparent Power:</span>
                      <span className="font-mono font-semibold" data-testid="result-apparentPower">
                        {result.apparentPower.toLocaleString()} VA
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Voltage:</span>
                      <span className="font-mono font-semibold" data-testid="result-voltage">
                        {result.voltage.toLocaleString()} V
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>DC: P = V × I</div>
                      <div>AC 1φ: P = V × I × PF</div>
                      <div>AC 3φ: P = √3 × V × I × PF</div>
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
