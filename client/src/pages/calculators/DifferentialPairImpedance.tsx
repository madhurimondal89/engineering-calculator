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
  traceSpacing: z.coerce.number().positive("Trace spacing must be positive"),
  dielectricHeight: z.coerce.number().positive("Dielectric height must be positive"),
  dielectricConstant: z.coerce.number().positive("Dielectric constant must be positive").default(4.5),
});

type FormValues = z.infer<typeof formSchema>;

export default function DifferentialPairImpedance() {
  const [result, setResult] = useState<{
    differentialImpedance: number;
    singleEndedImpedance: number;
    commonModeImpedance: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      traceWidth: undefined,
      traceSpacing: undefined,
      dielectricHeight: undefined,
      dielectricConstant: 4.5,
    },
  });

  function onSubmit(values: FormValues) {
    const { traceWidth, traceSpacing, dielectricHeight, dielectricConstant } = values;
    
    // Calculate single-ended impedance (Z0) first
    const ratio = traceWidth / dielectricHeight;
    
    // Effective dielectric constant
    const effectiveDielectric = (dielectricConstant + 1) / 2 + 
                               (dielectricConstant - 1) / 2 * 
                               Math.pow(1 + 12 / ratio, -0.5);
    
    // Single-ended impedance
    let singleEndedImpedance: number;
    if (ratio < 1) {
      singleEndedImpedance = (60 / Math.sqrt(effectiveDielectric)) * 
                            Math.log(8 / ratio + ratio / 4);
    } else {
      singleEndedImpedance = (120 * Math.PI) / (Math.sqrt(effectiveDielectric) * 
                            (ratio + 1.393 + 0.667 * Math.log(ratio + 1.444)));
    }
    
    // Calculate coupling factor
    const spacingRatio = traceSpacing / dielectricHeight;
    const couplingFactor = Math.exp(-0.48 * spacingRatio);
    
    // Differential impedance: Zdiff = 2 × Z0 × (1 - k)
    const differentialImpedance = 2 * singleEndedImpedance * (1 - couplingFactor);
    
    // Common mode impedance: Zcommon = Z0 / 2 × (1 + k)
    const commonModeImpedance = (singleEndedImpedance / 2) * (1 + couplingFactor);

    setResult({
      differentialImpedance: parseFloat(differentialImpedance.toFixed(2)),
      singleEndedImpedance: parseFloat(singleEndedImpedance.toFixed(2)),
      commonModeImpedance: parseFloat(commonModeImpedance.toFixed(2)),
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
            { label: "Differential Pair Impedance" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Differential Pair Impedance Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate differential impedance for high-speed signal pairs (USB, HDMI, Ethernet)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Differential Pair Parameters</CardTitle>
              <CardDescription>Enter trace pair specifications</CardDescription>
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
                            placeholder="5"
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
                    name="traceSpacing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trace Spacing (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="5"
                            data-testid="input-trace-spacing"
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
                <CardDescription>Calculated impedances</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Differential Impedance</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-differential-impedance">
                        {result.differentialImpedance} Ω
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Single-Ended Z₀</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-single-ended">
                          {result.singleEndedImpedance} Ω
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Common Mode</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-common-mode">
                          {result.commonModeImpedance} Ω
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
                <CardTitle>Common Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">USB 2.0:</span>
                    <span className="font-mono">90 Ω ± 10%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">HDMI:</span>
                    <span className="font-mono">100 Ω ± 10%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Ethernet:</span>
                    <span className="font-mono">100 Ω ± 5%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">LVDS:</span>
                    <span className="font-mono">100 Ω</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <CalculatorAccordion calcId="differential-pair-impedance" />
        </div>
      </div>
    </div>
  );
}
