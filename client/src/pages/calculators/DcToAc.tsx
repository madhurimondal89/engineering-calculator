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
  dcVoltage: z.coerce.number().positive("DC voltage must be positive"),
  dcCurrent: z.coerce.number().positive("DC current must be positive"),
  waveformType: z.enum(["pure-sine", "modified-sine", "square"]),
  efficiency: z.coerce.number().min(0).max(100).default(90),
});

type FormValues = z.infer<typeof formSchema>;

interface ConversionResult {
  acVoltage: number;
  acPower: number;
  dcPower: number;
  powerLoss: number;
  peakVoltage: number;
}

export default function DcToAc() {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dcVoltage: 12,
      dcCurrent: 10,
      waveformType: "pure-sine",
      efficiency: 90,
    },
  });

  function onSubmit(values: FormValues) {
    const { dcVoltage, dcCurrent, waveformType, efficiency } = values;
    
    // Calculate DC input power
    const dcPower = dcVoltage * dcCurrent;
    
    // Calculate AC output power (considering efficiency)
    const acPower = dcPower * (efficiency / 100);
    
    // Waveform efficiency factors
    const waveformFactors: Record<string, number> = {
      "pure-sine": 1.0,
      "modified-sine": 0.95,
      "square": 0.90,
    };
    
    const waveformFactor = waveformFactors[waveformType];
    const effectiveAcPower = acPower * waveformFactor;
    
    // Calculate AC RMS voltage (assuming constant power and typical current draw)
    // For estimation, assume AC current ≈ DC current / √2
    const acCurrent = dcCurrent / Math.sqrt(2);
    const acVoltage = effectiveAcPower / acCurrent;
    
    // Peak voltage (Vpeak = Vrms × √2)
    const peakVoltage = acVoltage * Math.sqrt(2);
    
    // Power loss
    const powerLoss = dcPower - acPower;

    setResult({
      acVoltage: parseFloat(acVoltage.toFixed(2)),
      acPower: parseFloat(effectiveAcPower.toFixed(2)),
      dcPower: parseFloat(dcPower.toFixed(2)),
      powerLoss: parseFloat(powerLoss.toFixed(2)),
      peakVoltage: parseFloat(peakVoltage.toFixed(2)),
    });
  }

  const accordions = getCalculatorAccordion("dc-to-ac");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Converter Tools" calculatorName="DC to AC Inverter Calculator" />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-calculator-title">
            DC to AC Inverter Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-description">
            Calculate AC output from DC input with inverter efficiency and waveform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter DC input and inverter specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="dcVoltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DC Input Voltage (V)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="12"
                            data-testid="input-dcVoltage"
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
                    name="dcCurrent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DC Input Current (A)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="10"
                            data-testid="input-dcCurrent"
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
                    name="waveformType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Waveform Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-waveformType">
                              <SelectValue placeholder="Select waveform type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pure-sine">Pure Sine Wave</SelectItem>
                            <SelectItem value="modified-sine">Modified Sine Wave</SelectItem>
                            <SelectItem value="square">Square Wave</SelectItem>
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
                        <FormLabel>Inverter Efficiency (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="90"
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
              <CardTitle>AC Output Results</CardTitle>
              <CardDescription>Calculated AC voltage and power</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">AC Output Voltage (RMS)</div>
                    <div className="text-3xl font-mono font-bold text-primary" data-testid="result-acVoltage">
                      {result.acVoltage.toLocaleString()} V
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">AC Output Power:</span>
                      <span className="font-mono font-semibold" data-testid="result-acPower">
                        {result.acPower.toLocaleString()} W
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">DC Input Power:</span>
                      <span className="font-mono font-semibold" data-testid="result-dcPower">
                        {result.dcPower.toLocaleString()} W
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Peak Voltage:</span>
                      <span className="font-mono font-semibold" data-testid="result-peakVoltage">
                        {result.peakVoltage.toLocaleString()} V
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Power Loss:</span>
                      <span className="font-mono font-semibold" data-testid="result-powerLoss">
                        {result.powerLoss.toLocaleString()} W
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Formulas</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>DC Power: Pdc = Vdc × Idc</div>
                      <div>AC Power: Pac = Pdc × (η/100)</div>
                      <div>Peak: Vpeak = Vrms × √2</div>
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
