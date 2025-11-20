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
  holeDiameter: z.coerce.number().positive("Hole diameter must be positive"),
  thickness: z.coerce.number().positive("Thickness must be positive").default(62),
  tempRise: z.coerce.number().positive("Temperature rise must be positive").default(10),
  platingThickness: z.coerce.number().positive("Plating thickness must be positive").default(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function PCBViaCurrent() {
  const [result, setResult] = useState<{
    maxCurrent: number;
    resistance: number;
    powerDissipation: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      holeDiameter: undefined,
      thickness: 62,
      tempRise: 10,
      platingThickness: 1,
    },
  });

  function onSubmit(values: FormValues) {
    const { holeDiameter, thickness, tempRise, platingThickness } = values;
    
    // Calculate via barrel cross-sectional area (annular area)
    // All dimensions in mils
    const outerDiameter = holeDiameter + (2 * platingThickness);
    const innerDiameter = holeDiameter;
    
    // Annular area in sq mils
    const barrelArea = (Math.PI / 4) * (Math.pow(outerDiameter, 2) - Math.pow(innerDiameter, 2));
    
    // IPC-2221: I = k × ΔT^0.44 × A^0.725
    // Use external layer constant (vias behave like external conductors)
    const k = 0.048; // for external layers
    const maxCurrent = k * Math.pow(tempRise, 0.44) * Math.pow(barrelArea, 0.725);
    
    // Calculate resistance
    // ρ (copper) = 1.68e-8 Ω·m = 0.00066 Ω·mils²/inch
    // Keep thickness in mils for this resistivity constant
    const resistance = (0.00066 * thickness) / barrelArea * 1000; // convert Ω to mΩ
    
    // Power dissipation
    const powerDissipation = Math.pow(maxCurrent, 2) * resistance; // mW

    setResult({
      maxCurrent: parseFloat(maxCurrent.toFixed(3)),
      resistance: parseFloat(resistance.toFixed(4)),
      powerDissipation: parseFloat(powerDissipation.toFixed(3)),
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
            { label: "PCB Via Current" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            PCB Via Current Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate current carrying capacity of PCB vias
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Via Parameters</CardTitle>
              <CardDescription>Enter via specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="holeDiameter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hole Diameter (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="10"
                            data-testid="input-hole-diameter"
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
                    name="platingThickness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plating Thickness (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="1"
                            data-testid="input-plating-thickness"
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
                        <FormLabel>Board Thickness (mils)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="62"
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

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Via Current
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Via current capacity</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Maximum Current</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-max-current">
                        {result.maxCurrent} A
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Resistance</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-resistance">
                          {result.resistance} mΩ
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Power Loss</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-power">
                          {result.powerDissipation} mW
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter via parameters and calculate
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Via Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Standard Via:</span>
                    <span className="font-mono">10-12 mils</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Micro Via:</span>
                    <span className="font-mono">4-6 mils</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Power Via:</span>
                    <span className="font-mono">20-30 mils</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("pcb-via-current") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("pcb-via-current")!}
              calculatorId="pcb-via-current"
            />
          )}
        </div>
      </div>
    </div>
  );
}
