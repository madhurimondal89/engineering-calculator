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
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  current: z.coerce.number().positive("Current must be positive"),
  tempRise: z.coerce.number().positive("Temperature rise must be positive").default(10),
  thickness: z.coerce.number().positive("Thickness must be positive").default(1),
  layer: z.enum(["external", "internal"]).default("external"),
});

type FormValues = z.infer<typeof formSchema>;

export default function PCBTraceWidth() {
  const [result, setResult] = useState<{
    traceWidth: number;
    traceWidthMm: number;
    area: number;
    areaMm: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      current: undefined,
      tempRise: 10,
      thickness: 1,
      layer: "external",
    },
  });

  function onSubmit(values: FormValues) {
    const { current, tempRise, thickness, layer } = values;
    
    // IPC-2221 formula: A = (I / (k × ΔT^b))^(1/c)
    // where A is cross-sectional area in sq mils
    // k, b, c are constants depending on internal/external layer
    const k = layer === "internal" ? 0.024 : 0.048;
    const b = layer === "internal" ? 0.44 : 0.44;
    const c = layer === "internal" ? 0.725 : 0.725;
    
    // Calculate required cross-sectional area (sq mils)
    const area = Math.pow(current / (k * Math.pow(tempRise, b)), 1 / c);
    
    // Calculate trace width from area and thickness
    // Thickness in oz: 1 oz = 1.37 mils
    const thicknessMils = thickness * 1.37;
    const traceWidth = area / thicknessMils; // mils
    
    // Convert to mm
    const traceWidthMm = traceWidth * 0.0254; // 1 mil = 0.0254 mm
    const areaMm = area * 0.00064516; // 1 sq mil = 0.00064516 sq mm

    setResult({
      traceWidth: parseFloat(traceWidth.toFixed(4)),
      traceWidthMm: parseFloat(traceWidthMm.toFixed(4)),
      area: parseFloat(area.toFixed(2)),
      areaMm: parseFloat(areaMm.toFixed(4)),
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
            { label: "PCB Trace Width" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            PCB Trace Width Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate minimum trace width for PCB based on current and temperature rise (IPC-2221)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter current and PCB specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="current"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current (A)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="1.5"
                            data-testid="input-current"
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
                    name="tempRise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Temperature Rise (°C)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="10"
                            data-testid="input-temp-rise"
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

                  <FormField
                    control={form.control}
                    name="layer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Layer Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          data-testid="select-layer"
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select layer type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="external">External Layer</SelectItem>
                            <SelectItem value="internal">Internal Layer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Trace Width
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Minimum trace width required</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Trace Width</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-trace-width">
                        {result.traceWidth} mils
                      </div>
                      <div className="text-lg font-mono text-muted-foreground" data-testid="result-trace-width-mm">
                        {result.traceWidthMm} mm
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Cross-Sectional Area</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-area">
                          {result.area} sq mils
                        </div>
                        <div className="text-sm font-mono text-muted-foreground" data-testid="result-area-mm">
                          {result.areaMm} mm²
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Layer Type</div>
                        <div className="text-lg font-semibold capitalize" data-testid="result-layer">
                          {form.getValues("layer")}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>Formula:</strong> IPC-2221 Standard</p>
                      <p><strong>Copper Thickness:</strong> {form.getValues("thickness")} oz ({(form.getValues("thickness") * 1.37).toFixed(2)} mils)</p>
                      <p><strong>Temp Rise:</strong> {form.getValues("tempRise")}°C above ambient</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter parameters and calculate to see results
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Standard Copper Thickness:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>1 oz = 1.37 mils = 34.8 μm</li>
                      <li>2 oz = 2.74 mils = 69.6 μm</li>
                      <li>0.5 oz = 0.685 mils = 17.4 μm</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Typical Temperature Rise:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>10°C - Standard for most applications</li>
                      <li>20°C - Higher current density</li>
                      <li>5°C - Conservative for sensitive circuits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("pcb-trace-width") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("pcb-trace-width")!}
              calculatorId="pcb-trace-width"
            />
          )}
        </div>
      </div>
    </div>
  );
}
