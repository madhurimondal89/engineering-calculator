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
  length: z.coerce.number().positive("Length must be positive"),
  width: z.coerce.number().positive("Width must be positive"),
  quantity: z.coerce.number().int().positive("Quantity must be positive").default(10),
  layers: z.coerce.number().int().positive("Layers must be positive").default(2),
  thickness: z.enum(["0.6", "0.8", "1.0", "1.2", "1.6", "2.0"]).default("1.6"),
  surfaceFinish: z.enum(["hasl", "enig", "immersion_silver", "osp"]).default("hasl"),
});

type FormValues = z.infer<typeof formSchema>;

export default function PCBCostEstimator() {
  const [result, setResult] = useState<{
    setupCost: number;
    unitCost: number;
    totalCost: number;
    costPerBoard: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: undefined,
      width: undefined,
      quantity: 10,
      layers: 2,
      thickness: "1.6",
      surfaceFinish: "hasl",
    },
  });

  function onSubmit(values: FormValues) {
    const { length, width, quantity, layers, thickness, surfaceFinish } = values;
    
    // Calculate board area in square mm
    const area = length * width;
    
    // Base cost per square mm (simplified model)
    let baseCostPerSqMm = 0.05; // USD per sq mm for 2-layer
    
    // Layer multiplier
    const layerMultiplier = {
      2: 1.0,
      4: 1.8,
      6: 2.5,
      8: 3.2,
    }[layers] || 1.0;
    
    // Thickness adjustment (slight premium for non-standard)
    const thicknessAdj = parseFloat(thickness) === 1.6 ? 1.0 : 1.1;
    
    // Surface finish cost multiplier
    const finishMultiplier = {
      hasl: 1.0,
      enig: 1.4,
      immersion_silver: 1.3,
      osp: 1.1,
    }[surfaceFinish] || 1.0;
    
    // Calculate unit cost
    const unitCost = area * baseCostPerSqMm * layerMultiplier * thicknessAdj * finishMultiplier;
    
    // Setup cost (one-time, decreases with quantity)
    const setupCost = Math.max(50, 100 - (quantity * 2));
    
    // Volume discount
    let volumeDiscount = 1.0;
    if (quantity >= 100) volumeDiscount = 0.7;
    else if (quantity >= 50) volumeDiscount = 0.8;
    else if (quantity >= 20) volumeDiscount = 0.9;
    
    // Total cost calculation
    const totalCost = setupCost + (unitCost * quantity * volumeDiscount);
    const costPerBoard = totalCost / quantity;

    setResult({
      setupCost: parseFloat(setupCost.toFixed(2)),
      unitCost: parseFloat(unitCost.toFixed(2)),
      totalCost: parseFloat(totalCost.toFixed(2)),
      costPerBoard: parseFloat(costPerBoard.toFixed(2)),
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
            { label: "PCB Cost Estimator" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            PCB Cost Estimator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Estimate PCB manufacturing cost based on specifications (approximate)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>PCB Specifications</CardTitle>
              <CardDescription>Enter board details for cost estimation</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="length"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Length (mm)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="100"
                              data-testid="input-length"
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
                      name="width"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Width (mm)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="80"
                              data-testid="input-width"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity (pcs)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="10"
                            data-testid="input-quantity"
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
                    name="layers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Layers</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="2"
                            min="2"
                            max="8"
                            placeholder="2"
                            data-testid="input-layers"
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
                        <FormLabel>Board Thickness (mm)</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          data-testid="select-thickness"
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select thickness" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0.6">0.6 mm</SelectItem>
                            <SelectItem value="0.8">0.8 mm</SelectItem>
                            <SelectItem value="1.0">1.0 mm</SelectItem>
                            <SelectItem value="1.2">1.2 mm</SelectItem>
                            <SelectItem value="1.6">1.6 mm (Standard)</SelectItem>
                            <SelectItem value="2.0">2.0 mm</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="surfaceFinish"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Surface Finish</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          data-testid="select-surface-finish"
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select finish" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hasl">HASL (Cheapest)</SelectItem>
                            <SelectItem value="osp">OSP</SelectItem>
                            <SelectItem value="immersion_silver">Immersion Silver</SelectItem>
                            <SelectItem value="enig">ENIG (Premium)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Estimate Cost
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Estimate</CardTitle>
                <CardDescription>Approximate manufacturing cost</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Cost Per Board</div>
                      <div className="text-2xl font-mono font-bold text-primary" data-testid="result-cost-per-board">
                        ${result.costPerBoard}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Setup Cost</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-setup-cost">
                          ${result.setupCost}
                        </div>
                      </div>

                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Total Cost</div>
                        <div className="text-lg font-mono font-semibold" data-testid="result-total-cost">
                          ${result.totalCost}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Unit Manufacturing Cost</div>
                      <div className="text-sm font-mono" data-testid="result-unit-cost">
                        ${result.unitCost} per board
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p><strong>Note:</strong> This is an approximate estimate</p>
                      <p>Actual costs vary by manufacturer, quantity, and specifications</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8" data-testid="no-result">
                    Enter specifications and calculate
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Higher cost:</strong> More layers, premium finishes, small quantities</p>
                  <p><strong className="text-foreground">Lower cost:</strong> 2-layer, HASL finish, higher quantities (100+)</p>
                  <p><strong className="text-foreground">Bulk discount:</strong> 50+ pcs: 10% off, 100+ pcs: 30% off</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("pcb-cost-estimator") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("pcb-cost-estimator")!}
              calculatorId="pcb-cost-estimator"
            />
          )}
        </div>
      </div>
    </div>
  );
}
