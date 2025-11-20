import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

const formSchema = z.object({
  systemCost: z.coerce.number().positive({ message: "System cost must be positive" }),
  annualEnergyProduction: z.coerce.number().positive({ message: "Annual energy must be positive" }),
  electricityRate: z.coerce.number().positive({ message: "Electricity rate must be positive" }),
  annualRateIncrease: z.coerce.number().min(0).default(3),
  maintenanceCost: z.coerce.number().min(0).default(0),
  incentivesRebates: z.coerce.number().min(0).default(0),
  taxCredit: z.coerce.number().min(0).max(100).default(0),
  systemLifespan: z.coerce.number().positive().default(25),
});

type FormData = z.infer<typeof formSchema>;

interface Results {
  netSystemCost: number;
  annualSavings: number;
  simplePaybackPeriod: number;
  lifetimeSavings: number;
  roi: number;
  totalEnergyProduced: number;
  averageAnnualReturn: number;
}

export default function RenewablePayback() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      systemCost: 0,
      annualEnergyProduction: 0,
      electricityRate: 0,
      annualRateIncrease: 3,
      maintenanceCost: 0,
      incentivesRebates: 0,
      taxCredit: 0,
      systemLifespan: 25,
    },
  });

  function onSubmit(data: FormData) {
    // Net system cost after incentives and tax credits
    const taxCreditAmount = (data.systemCost * data.taxCredit) / 100;
    const netSystemCost = data.systemCost - data.incentivesRebates - taxCreditAmount;

    // First year savings
    const firstYearSavings = (data.annualEnergyProduction * data.electricityRate) - data.maintenanceCost;

    // Simple payback period (without considering rate increases)
    const simplePaybackPeriod = netSystemCost / firstYearSavings;

    // Calculate lifetime savings with rate increases
    let lifetimeSavings = 0;
    let totalEnergyProduced = 0;
    let currentRate = data.electricityRate;
    const annualDegradation = 0.005; // 0.5% per year panel degradation

    for (let year = 1; year <= data.systemLifespan; year++) {
      const degradationFactor = Math.pow(1 - annualDegradation, year - 1);
      const yearlyEnergy = data.annualEnergyProduction * degradationFactor;
      const yearlySavings = (yearlyEnergy * currentRate) - data.maintenanceCost;
      
      lifetimeSavings += yearlySavings;
      totalEnergyProduced += yearlyEnergy;
      
      // Increase rate for next year
      currentRate *= (1 + data.annualRateIncrease / 100);
    }

    // Subtract system cost
    lifetimeSavings -= netSystemCost;

    // ROI percentage
    const roi = (lifetimeSavings / netSystemCost) * 100;

    // Average annual return
    const averageAnnualReturn = lifetimeSavings / data.systemLifespan;

    setResults({
      netSystemCost,
      annualSavings: firstYearSavings,
      simplePaybackPeriod,
      lifetimeSavings,
      roi,
      totalEnergyProduced,
      averageAnnualReturn,
    });
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumb category="Renewable Energy" calculatorName="Renewable Energy Payback" />
        
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Renewable Energy Payback Calculator</h1>
          <p className="text-muted-foreground">
            Calculate ROI and payback period for renewable energy investments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Input Parameters</CardTitle>
              <CardDescription>Enter system costs and energy production details</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="systemCost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total System Cost ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="100"
                            placeholder="20000"
                            {...field}
                            data-testid="input-system-cost"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Total cost before incentives
                        </p>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="incentivesRebates"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Incentives & Rebates ($)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="100"
                              placeholder="2000"
                              {...field}
                              data-testid="input-incentives"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="taxCredit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tax Credit (%)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="1"
                              placeholder="30"
                              {...field}
                              data-testid="input-tax-credit"
                            />
                          </FormControl>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground">
                            Federal ITC is 30% in US (2023)
                          </p>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="annualEnergyProduction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Energy Production (kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="100"
                            placeholder="10000"
                            {...field}
                            data-testid="input-annual-energy"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="electricityRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Electricity Rate ($/kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.12"
                            {...field}
                            data-testid="input-electricity-rate"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Current electricity rate from utility
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="annualRateIncrease"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Rate Increase (%)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            placeholder="3"
                            {...field}
                            data-testid="input-rate-increase"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Historical average: 2-4%
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="maintenanceCost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Maintenance Cost ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="10"
                            placeholder="100"
                            {...field}
                            data-testid="input-maintenance-cost"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Typical: $50-$200/year for solar
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="systemLifespan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Lifespan (years)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="1"
                            placeholder="25"
                            {...field}
                            data-testid="input-system-lifespan"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground">
                          Solar panels typically last 25-30 years
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Calculate Payback & ROI
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Financial analysis of your renewable energy investment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Net System Cost:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-net-cost">
                      ${results.netSystemCost.toFixed(0)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    After incentives and tax credits
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Simple Payback Period:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-payback-period">
                      {results.simplePaybackPeriod.toFixed(1)} years
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Time to recover investment
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Annual Savings (Year 1):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-annual-savings">
                      ${results.annualSavings.toFixed(0)}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lifetime Savings:</span>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-lifetime-savings">
                      ${results.lifetimeSavings.toFixed(0)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Total savings over {form.getValues("systemLifespan")} years
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Return on Investment (ROI):</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-roi">
                      {results.roi.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Annual Return:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-annual-return">
                      ${results.averageAnnualReturn.toFixed(0)}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Energy Produced:</span>
                    <div className="text-2xl font-bold font-mono" data-testid="text-total-energy">
                      {(results.totalEnergyProduced / 1000).toFixed(1)} MWh
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Over system lifetime
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Formula Used:</h4>
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    Net Cost = System Cost - Incentives - (Cost × Tax Credit%)<br />
                    Payback = Net Cost ÷ Annual Savings<br />
                    ROI = (Lifetime Savings ÷ Net Cost) × 100
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <CalculatorAccordion content={getCalculatorAccordion('renewable-payback')!} calculatorId="renewable-payback" />
      </div>
    </div>
  );
}
