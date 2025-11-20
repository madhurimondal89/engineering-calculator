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
  inputType: z.string().default("dbm"),
  value: z.coerce.number(),
});

type FormValues = z.infer<typeof formSchema>;

export default function DbmWatts() {
  const [result, setResult] = useState<{
    dbm: number;
    watts: number;
    milliwatts: number;
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputType: "dbm",
    },
  });

  const inputType = form.watch("inputType");

  function onSubmit(values: FormValues) {
    let dbm: number;
    let watts: number;
    
    if (values.inputType === "dbm") {
      dbm = values.value;
      // Convert dBm to watts: P(W) = 10^((P(dBm) - 30) / 10)
      watts = Math.pow(10, (dbm - 30) / 10);
    } else {
      watts = values.value;
      // Convert watts to dBm: P(dBm) = 10 * log10(P(W)) + 30
      dbm = 10 * Math.log10(watts) + 30;
    }
    
    const milliwatts = watts * 1000;

    setResult({
      dbm: parseFloat(dbm.toFixed(2)),
      watts: parseFloat(watts.toExponential(4)),
      milliwatts: parseFloat(milliwatts.toFixed(6)),
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
            { label: "dBm to Watts" }
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="calc-title">
            dBm to Watts Converter
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="calc-description">
            Convert between dBm and watts for RF power measurements
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Input Power</CardTitle>
              <CardDescription>Enter power value to convert</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="inputType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Convert From</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-input-type">
                              <SelectValue placeholder="Select input type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dbm">dBm → Watts</SelectItem>
                            <SelectItem value="watts">Watts → dBm</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{inputType === "dbm" ? "Power (dBm)" : "Power (Watts)"}</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder={inputType === "dbm" ? "30" : "1"}
                            data-testid="input-value"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-calculate">
                    Convert Power
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
                  <CardDescription>Power conversion results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Power (dBm)</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="result-dbm">
                      {result.dbm} dBm
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Watts</div>
                      <div className="text-lg font-mono" data-testid="result-watts">
                        {result.watts} W
                      </div>
                    </div>

                    <div className="p-3 bg-muted/50 rounded">
                      <div className="text-sm text-muted-foreground">Milliwatts</div>
                      <div className="text-lg font-mono" data-testid="result-milliwatts">
                        {result.milliwatts} mW
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    Formula: P(dBm) = 10 × log₁₀(P(W)) + 30
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    Enter a power value to convert
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Common Power Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">0 dBm:</span>
                  <span className="font-mono">1 mW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">10 dBm:</span>
                  <span className="font-mono">10 mW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">20 dBm:</span>
                  <span className="font-mono">100 mW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">30 dBm:</span>
                  <span className="font-mono">1 W</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          {getCalculatorAccordion("dbm-watts") && (
            <CalculatorAccordion
              content={getCalculatorAccordion("dbm-watts")!}
              calculatorId="dbm-watts"
            />
          )}
        </div>
      </div>
    </div>
  );
}
