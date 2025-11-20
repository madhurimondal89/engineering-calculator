import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  txPower: z.coerce.number(),
  txGain: z.coerce.number().default(0),
  rxGain: z.coerce.number().default(0),
  frequency: z.coerce.number().positive("Frequency must be positive"),
  distance: z.coerce.number().positive("Distance must be positive"),
  rxSensitivity: z.coerce.number(),
  cableLoss: z.coerce.number().min(0).default(0),
});

type FormValues = z.infer<typeof formSchema>;

export default function LinkBudget() {
  const [result, setResult] = useState<{
    pathLoss: number;
    receivedPower: number;
    fadeMargin: number;
    linkStatus: string;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      txPower: undefined,
      txGain: 0,
      rxGain: 0,
      frequency: undefined,
      distance: undefined,
      rxSensitivity: undefined,
      cableLoss: 0,
    },
  });

  function onSubmit(values: FormValues) {
    // Calculate free space path loss (FSPL)
    // FSPL(dB) = 20×log10(d) + 20×log10(f) + 20×log10(4π/c)
    // Simplified: FSPL(dB) = 20×log10(d_km) + 20×log10(f_MHz) + 32.45
    const distanceKm = values.distance / 1000;
    const frequencyMHz = values.frequency;
    
    const pathLoss = 20 * Math.log10(distanceKm) + 20 * Math.log10(frequencyMHz) + 32.45;
    
    // Calculate received power
    // P_rx(dBm) = P_tx(dBm) + G_tx(dBi) + G_rx(dBi) - PathLoss(dB) - CableLoss(dB)
    const receivedPower = values.txPower + values.txGain + values.rxGain - pathLoss - values.cableLoss;
    
    // Calculate fade margin
    // Fade margin = Received power - Receiver sensitivity
    const fadeMargin = receivedPower - values.rxSensitivity;
    
    // Determine link status
    let linkStatus: string;
    if (fadeMargin > 20) {
      linkStatus = "Excellent";
    } else if (fadeMargin > 10) {
      linkStatus = "Good";
    } else if (fadeMargin > 0) {
      linkStatus = "Marginal";
    } else {
      linkStatus = "Failed";
    }

    setResult({
      pathLoss: parseFloat(pathLoss.toFixed(2)),
      receivedPower: parseFloat(receivedPower.toFixed(2)),
      fadeMargin: parseFloat(fadeMargin.toFixed(2)),
      linkStatus,
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
            { label: "Link Budget" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            Link Budget Calculator
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Calculate wireless link budget and fade margin
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Link Parameters</CardTitle>
              <CardDescription>Enter transmitter and receiver specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="txPower"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TX Power (dBm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="20"
                            data-testid="input-tx-power"
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
                    name="txGain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TX Antenna Gain (dBi)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="0"
                            data-testid="input-tx-gain"
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
                    name="rxGain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>RX Antenna Gain (dBi)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="0"
                            data-testid="input-rx-gain"
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
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency (MHz)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="2400"
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
                    name="distance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Distance (meters)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="1000"
                            data-testid="input-distance"
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
                    name="rxSensitivity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>RX Sensitivity (dBm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="-90"
                            data-testid="input-rx-sensitivity"
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
                    name="cableLoss"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cable Loss (dB)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="0"
                            data-testid="input-cable-loss"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Link Budget
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
                  <CardDescription>Link budget analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Link Status</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-link-status">
                      {result.linkStatus}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Path Loss</div>
                      <div className="text-lg font-mono" data-testid="result-path-loss">
                        {result.pathLoss} dB
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Received Power</div>
                      <div className="text-lg font-mono" data-testid="result-received-power">
                        {result.receivedPower} dBm
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/50 rounded">
                    <div className="text-sm text-muted-foreground">Fade Margin</div>
                    <div className="text-lg font-mono" data-testid="result-fade-margin">
                      {result.fadeMargin} dB
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    FSPL = 20×log₁₀(d) + 20×log₁₀(f) + 32.45
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter link parameters and calculate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Fade Margin Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">&gt; 20 dB:</span>
                  <span className="font-mono">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">10-20 dB:</span>
                  <span className="font-mono">Good</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">0-10 dB:</span>
                  <span className="font-mono">Marginal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">&lt; 0 dB:</span>
                  <span className="font-mono">Failed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("link-budget") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("link-budget")!}
              calculatorId="link-budget"
            />
          )}
        </div>
      </div>
    </div>
  );
}
