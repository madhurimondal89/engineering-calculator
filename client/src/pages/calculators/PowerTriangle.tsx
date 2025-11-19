import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calculator, Triangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const pqSchema = z.object({
  p: z.coerce.number().positive("Real power must be positive"),
  q: z.coerce.number().positive("Reactive power must be positive"),
  s: z.coerce.number().optional(),
});

const psSchema = z.object({
  p: z.coerce.number().positive("Real power must be positive"),
  s: z.coerce.number().positive("Apparent power must be positive"),
  q: z.coerce.number().optional(),
}).refine((data) => data.p <= data.s, {
  message: "Real power must be less than or equal to apparent power",
  path: ["p"],
});

const qsSchema = z.object({
  q: z.coerce.number().positive("Reactive power must be positive"),
  s: z.coerce.number().positive("Apparent power must be positive"),
  p: z.coerce.number().optional(),
}).refine((data) => data.q <= data.s, {
  message: "Reactive power must be less than or equal to apparent power",
  path: ["q"],
});

type PQFormValues = z.infer<typeof pqSchema>;
type PSFormValues = z.infer<typeof psSchema>;
type QSFormValues = z.infer<typeof qsSchema>;

export default function PowerTriangle() {
  const [method, setMethod] = useState<"pq" | "ps" | "qs">("pq");
  const [result, setResult] = useState<{
    realPower: number;
    reactivePower: number;
    apparentPower: number;
    powerFactor: number;
    phaseAngle: number;
  } | null>(null);

  const pqForm = useForm<PQFormValues>({
    resolver: zodResolver(pqSchema),
    defaultValues: { p: 0, q: 0 },
  });

  const psForm = useForm<PSFormValues>({
    resolver: zodResolver(psSchema),
    defaultValues: { p: 0, s: 0 },
  });

  const qsForm = useForm<QSFormValues>({
    resolver: zodResolver(qsSchema),
    defaultValues: { q: 0, s: 0 },
  });

  const onSubmitPQ = (values: PQFormValues) => {
    const { p: P, q: Q } = values;

    const S = Math.sqrt(P * P + Q * Q);
    const pf = P / S;
    const angle = Math.atan(Q / P) * (180 / Math.PI);

    setResult({
      realPower: P,
      reactivePower: Q,
      apparentPower: S,
      powerFactor: pf,
      phaseAngle: angle,
    });
  };

  const onSubmitPS = (values: PSFormValues) => {
    const { p: P, s: S } = values;

    const Q = Math.sqrt(S * S - P * P);
    const pf = P / S;
    const angle = Math.acos(pf) * (180 / Math.PI);

    setResult({
      realPower: P,
      reactivePower: Q,
      apparentPower: S,
      powerFactor: pf,
      phaseAngle: angle,
    });
  };

  const onSubmitQS = (values: QSFormValues) => {
    const { q: Q, s: S } = values;

    const P = Math.sqrt(S * S - Q * Q);
    const pf = P / S;
    const angle = Math.asin(Q / S) * (180 / Math.PI);

    setResult({
      realPower: P,
      reactivePower: Q,
      apparentPower: S,
      powerFactor: pf,
      phaseAngle: angle,
    });
  };


  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/#power-system" className="hover:text-foreground">Power System</a>
          <span>/</span>
          <span className="text-foreground">Power Triangle Calculator</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
            <Triangle className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            Power Triangle Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Visualize and calculate relationships between real, reactive, and apparent power
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Power Triangle Calculation
            </CardTitle>
            <CardDescription>
              Calculate power triangle from any two values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={method} onValueChange={(v) => setMethod(v as typeof method)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pq" data-testid="tab-pq">From P & Q</TabsTrigger>
                <TabsTrigger value="ps" data-testid="tab-ps">From P & S</TabsTrigger>
                <TabsTrigger value="qs" data-testid="tab-qs">From Q & S</TabsTrigger>
              </TabsList>

              <TabsContent value="pq" className="space-y-4">
                <Form {...pqForm}>
                  <form onSubmit={pqForm.handleSubmit(onSubmitPQ)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={pqForm.control}
                        name="p"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Real Power (kW)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 80"
                                data-testid="input-p"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={pqForm.control}
                        name="q"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reactive Power (kVAR)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 60"
                                data-testid="input-q"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      data-testid="button-calculate"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate from P & Q
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="ps" className="space-y-4">
                <Form {...psForm}>
                  <form onSubmit={psForm.handleSubmit(onSubmitPS)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={psForm.control}
                        name="p"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Real Power (kW)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 80"
                                data-testid="input-p"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={psForm.control}
                        name="s"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apparent Power (kVA)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 100"
                                data-testid="input-s"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      data-testid="button-calculate"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate from P & S
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="qs" className="space-y-4">
                <Form {...qsForm}>
                  <form onSubmit={qsForm.handleSubmit(onSubmitQS)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={qsForm.control}
                        name="q"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reactive Power (kVAR)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 60"
                                data-testid="input-q"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={qsForm.control}
                        name="s"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apparent Power (kVA)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="e.g., 100"
                                data-testid="input-s"
                                step="any"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      data-testid="button-calculate"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate from Q & S
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>

            {result && (
              <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Triangle className="h-5 w-5 text-primary" />
                  Power Triangle Results
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Real Power (P)</p>
                    <p className="text-2xl font-mono font-bold text-primary" data-testid="result-p">
                      {result.realPower.toFixed(2)} kW
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Reactive Power (Q)</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-q">
                      {result.reactivePower.toFixed(2)} kVAR
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Apparent Power (S)</p>
                    <p className="text-2xl font-mono font-bold text-foreground" data-testid="result-s">
                      {result.apparentPower.toFixed(2)} kVA
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Power Factor (cos φ)</p>
                    <p className="text-xl font-mono font-bold text-foreground" data-testid="result-pf">
                      {result.powerFactor.toFixed(4)}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Phase Angle (φ)</p>
                    <p className="text-xl font-mono font-bold text-foreground" data-testid="result-angle">
                      {result.phaseAngle.toFixed(2)}°
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium text-foreground mb-2">Power Triangle Relationships:</p>
                  <code className="text-xs font-mono text-muted-foreground block space-y-1">
                    <span className="block">S² = P² + Q²</span>
                    <span className="block">Power Factor = P / S = cos φ</span>
                    <span className="block">tan φ = Q / P</span>
                  </code>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        "<CalculatorAccordion content={getCalculatorAccordion("power-triangle")} />
      </div>
    </div>
  );
}
