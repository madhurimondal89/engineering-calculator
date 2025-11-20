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
  traceWidth: z.coerce.number().positive("Trace width must be positive"),
  dielectricHeight: z.coerce.number().positive("Dielectric height must be positive"),
  copperThickness: z.coerce.number().positive("Copper thickness must be positive").default(1.4),
  dielectricConstant: z.coerce.number().positive("Dielectric constant must be positive").default(4.5),
});

type FormValues = z.infer<typeof formSchema>;

export default function MicrostripImpedance() {
  const [result, setResult] = useState<{
    impedance: number;
    effectiveDielectric: number;
    wavelength: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      traceWidth: undefined,
      dielectricHeight: undefined,
      copperThickness: 1.4,
      dielectricConstant: 4.5,
    },
  });

  function onSubmit(values: FormValues) {
    const { traceWidth, dielectricHeight, copperThickness, dielectricConstant } = values;
    
    // Adjust trace width for thickness (effective width)
    const wEffective = traceWidth + (1.25 * copperThickness / Math.PI) * 
                      (1 + Math.log(2 * dielectricHeight / copperThickness));
    
    // Calculate width-to-height ratio
    const ratio = wEffective / dielectricHeight;
    
    // Calculate effective dielectric constant
    const effectiveDielectric = (dielectricConstant + 1) / 2 + 
                               (dielectricConstant - 1) / 2 * 
                               Math.pow(1 + 12 / ratio, -0.5);
    
    // Calculate characteristic impedance (Hammerstad-Jensen formula)
    let impedance: number;
    if (ratio < 1) {
      impedance = (60 / Math.sqrt(effectiveDielectric)) * 
                  Math.log(8 / ratio + ratio / 4);
    } else {
      impedance = (120 * Math.PI) / (Math.sqrt(effectiveDielectric) * 
                  (ratio + 1.393 + 0.667 * Math.log(ratio + 1.444)));
    }
    
    // Calculate wavelength at 1 GHz for reference
    const frequency = 1e9; // 1 GHz
    const c = 299792458; // speed of light
    const wavelength = (c / frequency) / Math.sqrt(effectiveDielectric) * 1000; // mm

    setResult({
      impedance: parseFloat(impedance.toFixed(2)),
      effectiveDielectric: parseFloat(effectiveDielectric.toFixed(3)),
      wavelength: parseFloat(wavelength.toFixed(2)),
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
            { label: "Microstrip Impedance" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Microstrip Impedance Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate characteristic impedance of microstrip transmission lines
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Microstrip Parameters</CardTitle>
              <CardDescription>Enter trace and substrate specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    name="dielectricHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dielectric Height (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="4"
                            data-testid="input-dielectric-height"
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
                    name="copperThickness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Copper Thickness (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="1.4"
                            data-testid="input-copper-thickness"
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
                    name="dielectricConstant"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dielectric Constant (εr)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="4.5"
                            data-testid="input-dielectric-constant"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Impedance
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Calculated impedance</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Characteristic Impedance</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-impedance">
                        {result.impedance} Ω
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Effective εr</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-effective-er">
                          {result.effectiveDielectric}
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">λ @ 1GHz</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-wavelength">
                          {result.wavelength} mm
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter parameters and calculate
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">FR-4:</span>
                    <span className="font-mono">εr = 4.2-4.5</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Rogers 4003C:</span>
                    <span className="font-mono">εr = 3.38</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">PTFE (Teflon):</span>
                    <span className="font-mono">εr = 2.1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <CalculatorAccordion calcId="microstrip-impedance" />
        </div>
      </div>
    </div>
  );
}
