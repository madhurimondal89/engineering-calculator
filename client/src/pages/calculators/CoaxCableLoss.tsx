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
  cableLength: z.coerce.number().positive("Cable length must be positive"),
  lengthUnit: z.string().default("m"),
  cableType: z.string().default("rg58"),
});

type FormValues = z.infer<typeof formSchema>;

// Cable loss specifications (dB per 100m at 1 GHz)
const cableLoss: Record<string, { loss100MHz: number; loss1GHz: number; name: string }> = {
  rg58: { loss100MHz: 4.9, loss1GHz: 16.4, name: "RG-58 (50Ω)" },
  rg8: { loss100MHz: 2.6, loss1GHz: 8.2, name: "RG-8 (50Ω)" },
  rg213: { loss100MHz: 2.5, loss1GHz: 8.4, name: "RG-213 (50Ω)" },
  lmr400: { loss100MHz: 1.5, loss1GHz: 6.7, name: "LMR-400 (50Ω)" },
  lmr600: { loss100MHz: 1.0, loss1GHz: 4.4, name: "LMR-600 (50Ω)" },
};

export default function CoaxCableLoss() {
  const [result, setResult] = useState<{
    totalLoss: number;
    powerLossPercent: number;
    outputPower: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frequency: undefined,
      frequencyUnit: "MHz",
      cableLength: undefined,
      lengthUnit: "m",
      cableType: "rg58",
    },
  });

  function onSubmit(values: FormValues) {
    let frequencyMHz = values.frequency;
    
    // Convert to MHz
    if (values.frequencyUnit === "kHz") frequencyMHz /= 1000;
    else if (values.frequencyUnit === "GHz") frequencyMHz *= 1000;
    
    let lengthMeters = values.cableLength;
    
    // Convert to meters
    if (values.lengthUnit === "ft") lengthMeters *= 0.3048;
    else if (values.lengthUnit === "km") lengthMeters *= 1000;
    
    // Get cable specifications
    const cable = cableLoss[values.cableType];
    
    // Interpolate loss at given frequency (loss increases with √frequency approximately)
    const lossAt100 = cable.loss100MHz;
    const lossAt1000 = cable.loss1GHz;
    
    // Use log-log interpolation for better accuracy
    const lossPerMeter = frequencyMHz <= 100 
      ? (lossAt100 / 100) * (frequencyMHz / 100)
      : (lossAt100 / 100) * Math.pow(frequencyMHz / 100, 0.5);
    
    // Total loss in dB
    const totalLoss = lossPerMeter * lengthMeters;
    
    // Power loss percentage: P_out/P_in = 10^(-loss/10)
    const powerRatio = Math.pow(10, -totalLoss / 10);
    const powerLossPercent = (1 - powerRatio) * 100;
    
    // If input power is 100W, output power would be:
    const outputPower = 100 * powerRatio;

    setResult({
      totalLoss: parseFloat(totalLoss.toFixed(2)),
      powerLossPercent: parseFloat(powerLossPercent.toFixed(2)),
      outputPower: parseFloat(outputPower.toFixed(2)),
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
            { label: "Coax Cable Loss" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Coax Cable Loss Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate signal attenuation in coaxial cables
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cable Parameters</CardTitle>
              <CardDescription>Enter frequency and cable specifications</CardDescription>
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
                    name="cableLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cable Length</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="10"
                            data-testid="input-cable-length"
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
                    name="lengthUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Length Unit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-length-unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="m">Meters</SelectItem>
                            <SelectItem value="ft">Feet</SelectItem>
                            <SelectItem value="km">Kilometers</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cableType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cable Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-cable-type">
                              <SelectValue placeholder="Select cable" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(cableLoss).map(([key, cable]) => (
                              <SelectItem key={key} value={key}>
                                {cable.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Cable Loss
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
                  <CardDescription>Signal attenuation analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Total Loss</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-total-loss">
                      {result.totalLoss} dB
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Power Loss</div>
                      <div className="text-lg font-mono" data-testid="result-power-loss">
                        {result.powerLossPercent}%
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Output (100W in)</div>
                      <div className="text-lg font-mono" data-testid="result-output-power">
                        {result.outputPower} W
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter cable parameters and calculate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Cable Comparison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RG-58:</span>
                  <span className="font-mono">Thin, flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RG-213:</span>
                  <span className="font-mono">Standard, low loss</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LMR-400:</span>
                  <span className="font-mono">Very low loss</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LMR-600:</span>
                  <span className="font-mono">Ultra low loss</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("coax-cable-loss") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("coax-cable-loss")!}
              calculatorId="coax-cable-loss"
            />
          )}
        </div>
      </div>
    </div>
  );
}
