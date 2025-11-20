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
  inputType: z.string().default("reflection"),
  forwardPower: z.coerce.number().positive("Forward power must be positive").optional(),
  reflectedPower: z.coerce.number().min(0, "Reflected power cannot be negative").optional(),
  returnLoss: z.coerce.number().positive("Return loss must be positive").optional(),
  reflectionCoefficient: z.coerce.number().min(0).max(1, "Reflection coefficient must be 0-1").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function VSWRCalculator() {
  const [result, setResult] = useState<{
    vswr: number;
    returnLoss: number;
    reflectionCoefficient: number;
    mismatchLoss: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputType: "reflection",
      forwardPower: undefined,
      reflectedPower: undefined,
      returnLoss: undefined,
      reflectionCoefficient: undefined,
    },
  });

  const inputType = form.watch("inputType");

  function onSubmit(values: FormValues) {
    let gamma: number; // Reflection coefficient
    
    if (values.inputType === "reflection" && values.forwardPower && values.reflectedPower !== undefined) {
      // Calculate from forward and reflected power
      gamma = Math.sqrt(values.reflectedPower / values.forwardPower);
    } else if (values.inputType === "returnloss" && values.returnLoss) {
      // Calculate from return loss: RL(dB) = -20 × log10(Γ)
      gamma = Math.pow(10, -values.returnLoss / 20);
    } else if (values.inputType === "gamma" && values.reflectionCoefficient !== undefined) {
      // Direct reflection coefficient
      gamma = values.reflectionCoefficient;
    } else {
      return; // Invalid input
    }
    
    // Calculate VSWR: VSWR = (1 + Γ) / (1 - Γ)
    const vswr = (1 + gamma) / (1 - gamma);
    
    // Calculate return loss: RL(dB) = -20 × log10(Γ)
    const returnLoss = -20 * Math.log10(gamma);
    
    // Calculate mismatch loss: ML(dB) = -10 × log10(1 - Γ²)
    const mismatchLoss = -10 * Math.log10(1 - Math.pow(gamma, 2));

    setResult({
      vswr: parseFloat(vswr.toFixed(3)),
      returnLoss: parseFloat(returnLoss.toFixed(2)),
      reflectionCoefficient: parseFloat(gamma.toFixed(4)),
      mismatchLoss: parseFloat(mismatchLoss.toFixed(3)),
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
            { label: "VSWR Calculator" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            VSWR Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate Voltage Standing Wave Ratio and impedance mismatch
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Choose input method</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inputType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Calculation Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-input-type">
                              <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="reflection">Forward/Reflected Power</SelectItem>
                            <SelectItem value="returnloss">Return Loss</SelectItem>
                            <SelectItem value="gamma">Reflection Coefficient</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {inputType === "reflection" && (
                    <>
                      <FormField
                        control={form.control}
                        name="forwardPower"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Forward Power (W)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                step="0.01"
                                placeholder="100"
                                data-testid="input-forward-power"
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
                        name="reflectedPower"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reflected Power (W)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                step="0.01"
                                placeholder="5"
                                data-testid="input-reflected-power"
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {inputType === "returnloss" && (
                    <FormField
                      control={form.control}
                      name="returnLoss"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Return Loss (dB)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="20"
                              data-testid="input-return-loss"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {inputType === "gamma" && (
                    <FormField
                      control={form.control}
                      name="reflectionCoefficient"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reflection Coefficient (Γ)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="0.1"
                              data-testid="input-reflection-coefficient"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate VSWR
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
                  <CardDescription>Impedance mismatch analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">VSWR</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-vswr">
                      {result.vswr}:1
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Return Loss</div>
                      <div className="text-lg font-mono" data-testid="result-return-loss">
                        {result.returnLoss} dB
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Mismatch Loss</div>
                      <div className="text-lg font-mono" data-testid="result-mismatch-loss">
                        {result.mismatchLoss} dB
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/50 rounded">
                    <div className="text-sm text-muted-foreground">Reflection Coefficient (Γ)</div>
                    <div className="text-lg font-mono" data-testid="result-gamma">
                      {result.reflectionCoefficient}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter parameters and calculate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>VSWR Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VSWR 1:1:</span>
                  <span className="font-mono">Perfect match</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VSWR &lt; 1.5:1:</span>
                  <span className="font-mono">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VSWR &lt; 2:1:</span>
                  <span className="font-mono">Acceptable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VSWR &gt; 3:1:</span>
                  <span className="font-mono">Poor</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("vswr") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("vswr")!}
              calculatorId="vswr"
            />
          )}
        </div>
      </div>
    </div>
  );
}
