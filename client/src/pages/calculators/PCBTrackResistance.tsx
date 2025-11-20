import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";

const formSchema = z.object({
  traceLength: z.coerce.number().positive("Trace length must be positive"),
  traceWidth: z.coerce.number().positive("Trace width must be positive"),
  thickness: z.coerce.number().positive("Thickness must be positive").default(1),
  resistivity: z.coerce.number().positive("Resistivity must be positive").default(1.68e-8),
});

type FormValues = z.infer<typeof formSchema>;

export default function PCBTrackResistance() {
  const [result, setResult] = useState<{
    resistance: number;
    voltageDrop: number;
    powerLoss: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      traceLength: undefined,
      traceWidth: undefined,
      thickness: 1,
      resistivity: 1.68e-8,
    },
  });

  function onSubmit(values: FormValues) {
    const { traceLength, traceWidth, thickness, resistivity } = values;
    
    // Convert units: length (mm), width (mils), thickness (oz)
    const lengthM = traceLength / 1000; // mm to meters
    const widthM = (traceWidth * 0.0254) / 1000; // mils to meters
    const thicknessM = (thickness * 1.37 * 0.0254) / 1000; // oz to meters (1 oz = 1.37 mils)
    
    // Calculate cross-sectional area
    const area = widthM * thicknessM; // m²
    
    // Calculate resistance: R = ρ × L / A
    const resistance = (resistivity * lengthM) / area; // Ω
    
    // For 1A current
    const current = 1;
    const voltageDrop = current * resistance; // V
    const powerLoss = current * current * resistance; // W

    setResult({
      resistance: parseFloat((resistance * 1000).toFixed(4)), // mΩ
      voltageDrop: parseFloat((voltageDrop * 1000).toFixed(4)), // mV
      powerLoss: parseFloat((powerLoss * 1000).toFixed(4)), // mW
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "PCB", href: "/category/pcb" },
            { label: "PCB Track Resistance" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            PCB Track Resistance Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate resistance of PCB traces based on dimensions and material
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Track Dimensions</CardTitle>
              <CardDescription>Enter trace specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="traceLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trace Length (mm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="100"
                            data-testid="input-trace-length"
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
                    name="traceWidth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trace Width (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="10"
                            data-testid="input-trace-width"
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
                    name="thickness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Copper Thickness (oz)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.5"
                            placeholder="1"
                            data-testid="input-thickness"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Resistance
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Calculated track resistance</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Track Resistance</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-resistance">
                        {result.resistance} mΩ
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Voltage Drop @ 1A</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-voltage-drop">
                          {result.voltageDrop} mV
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Power Loss @ 1A</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-power-loss">
                          {result.powerLoss} mW
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p><strong>Formula:</strong> R = ρ × L / A</p>
                      <p><strong>Copper Resistivity:</strong> 1.68 × 10⁻⁸ Ω·m</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter track dimensions and calculate
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Minimize resistance:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Use wider traces</li>
                    <li>Increase copper thickness</li>
                    <li>Shorten trace length</li>
                    <li>Use multiple parallel traces</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <CalculatorAccordion calcId="pcb-track-resistance" />
        </div>
      </div>
    </div>
  );
}
