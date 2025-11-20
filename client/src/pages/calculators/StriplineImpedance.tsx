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
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  traceWidth: z.coerce.number().positive("Trace width must be positive"),
  dielectricHeight: z.coerce.number().positive("Dielectric height must be positive"),
  copperThickness: z.coerce.number().positive("Copper thickness must be positive").default(1.4),
  dielectricConstant: z.coerce.number().positive("Dielectric constant must be positive").default(4.5),
});

type FormValues = z.infer<typeof formSchema>;

export default function StriplineImpedance() {
  const [result, setResult] = useState<{
    impedance: number;
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
    
    // Adjust for copper thickness
    const wEffective = traceWidth - (1.25 * copperThickness / Math.PI) * 
                      (1 + Math.log(2 * dielectricHeight / copperThickness));
    const bEffective = dielectricHeight - copperThickness;
    
    // Calculate width-to-height ratio
    const ratio = wEffective / bEffective;
    
    // Calculate characteristic impedance (stripline formula)
    let impedance: number;
    if (ratio < 0.35) {
      impedance = (60 / Math.sqrt(dielectricConstant)) * 
                  Math.log(4 / (Math.PI * ratio));
    } else {
      impedance = (94.15 / Math.sqrt(dielectricConstant)) / 
                  (ratio + 2.42 - 0.44 * ratio + Math.pow(1 - ratio, 6));
    }
    
    // Calculate wavelength at 1 GHz
    const frequency = 1e9;
    const c = 299792458;
    const wavelength = (c / frequency) / Math.sqrt(dielectricConstant) * 1000; // mm

    setResult({
      impedance: parseFloat(impedance.toFixed(2)),
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
            { label: "Stripline Impedance" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Stripline Impedance Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate impedance of stripline transmission lines (embedded traces)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Stripline Parameters</CardTitle>
              <CardDescription>Enter trace and dielectric specifications</CardDescription>
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
                            placeholder="8"
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
                <CardDescription>Calculated stripline impedance</CardDescription>
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

                    <div className="p-3 bg-muted rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Wavelength @ 1GHz</div>
                      <div className="text-lg font-mono font-semibold" data-testid="result-wavelength">
                        {result.wavelength} mm
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
                <CardTitle>Stripline vs Microstrip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Stripline:</strong> Trace embedded between two ground planes</p>
                  <p><strong className="text-foreground">Advantages:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Better EMI shielding</li>
                    <li>No radiation losses</li>
                    <li>Consistent impedance</li>
                  </ul>
                  <p><strong className="text-foreground">Use for:</strong> High-speed signals, RF, controlled impedance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("stripline-impedance") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("stripline-impedance")!}
              calculatorId="stripline-impedance"
            />
          )}
        </div>
      </div>
    </div>
  );
}
