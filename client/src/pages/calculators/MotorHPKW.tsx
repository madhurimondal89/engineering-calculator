import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

const motorHPKWSchema = z.object({
  value: z.coerce.number().positive("Value must be positive"),
  conversionType: z.enum(["HP-to-kW", "kW-to-HP"]),
});

type MotorHPKWForm = z.infer<typeof motorHPKWSchema>;

interface Results {
  input: number;
  output: number;
  inputUnit: string;
  outputUnit: string;
}

export default function MotorHPKW() {
  const [results, setResults] = useState<Results | null>(null);

  const form = useForm<MotorHPKWForm>({
    resolver: zodResolver(motorHPKWSchema),
    defaultValues: {
      value: undefined,
      conversionType: "HP-to-kW",
    },
  });

  const conversionType = form.watch("conversionType");

  const onSubmit = (data: MotorHPKWForm) => {
    let output: number;
    let inputUnit: string;
    let outputUnit: string;

    if (data.conversionType === "HP-to-kW") {
      // 1 HP = 0.746 kW
      output = data.value * 0.746;
      inputUnit = "HP";
      outputUnit = "kW";
    } else {
      // 1 kW = 1.341 HP
      output = data.value * 1.341;
      inputUnit = "kW";
      outputUnit = "HP";
    }

    setResults({
      input: data.value,
      output,
      inputUnit,
      outputUnit,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          category="Motor"
          calculatorName="Motor HP to kW"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Motor HP to kW Converter
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-description">
            Convert between horsepower (HP) and kilowatts (kW) for motors
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Parameters</CardTitle>
              <CardDescription>Enter power value and select conversion direction</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="conversionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Conversion Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-conversion-type">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="HP-to-kW">HP → kW</SelectItem>
                            <SelectItem value="kW-to-HP">kW → HP</SelectItem>
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
                        <FormLabel>
                          {conversionType === "HP-to-kW" ? "Power (HP)" : "Power (kW)"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder={conversionType === "HP-to-kW" ? "e.g., 10" : "e.g., 7.46"}
                            data-testid="input-value"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" data-testid="button-convert">
                    Convert
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Power conversion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Input Power</div>
                    <div className="text-2xl font-bold font-mono" data-testid="text-input">
                      {results.input.toFixed(3)} {results.inputUnit}
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="text-sm text-muted-foreground mb-1">Output Power</div>
                    <div className="text-2xl font-bold font-mono text-primary" data-testid="text-output">
                      {results.output.toFixed(3)} {results.outputUnit}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-semibold">Conversion Formula</h4>
                  {results.inputUnit === "HP" ? (
                    <div className="font-mono text-sm">
                      1 HP = 0.746 kW
                    </div>
                  ) : (
                    <div className="font-mono text-sm">
                      1 kW = 1.341 HP
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-2">
                    Standard mechanical horsepower (HP) to kilowatt (kW) conversion
                  </div>
                </div>

                <div className="p-4 border-l-4 border-l-primary bg-primary/5 rounded">
                  <div className="text-sm font-semibold mb-2">Quick Reference</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1 HP</div>
                    <div>= 0.746 kW</div>
                    <div>5 HP</div>
                    <div>= 3.73 kW</div>
                    <div>10 HP</div>
                    <div>= 7.46 kW</div>
                    <div>50 HP</div>
                    <div>= 37.3 kW</div>
                    <div>100 HP</div>
                    <div>= 74.6 kW</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <CalculatorAccordion content={getCalculatorAccordion("motor-hp-kw")} />
        </div>
      </div>
    </div>
  );
}
