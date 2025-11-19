import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Plus, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function SeriesParallelResistance() {
  const [resistors, setResistors] = useState<string[]>(["", ""]);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"series" | "parallel">("series");

  const addResistor = () => {
    setResistors([...resistors, ""]);
  };

  const removeResistor = (index: number) => {
    if (resistors.length > 2) {
      setResistors(resistors.filter((_, i) => i !== index));
    }
  };

  const updateResistor = (index: number, value: string) => {
    const newResistors = [...resistors];
    newResistors[index] = value;
    setResistors(newResistors);
  };

  const calculate = () => {
    setError("");
    setResult(null);

    const values = resistors.map(r => parseFloat(r)).filter(v => !isNaN(v));

    if (values.length < 2) {
      setError("Please enter at least two resistor values.");
      return;
    }

    if (values.some(v => v <= 0)) {
      setError("All resistance values must be greater than zero.");
      return;
    }

    let totalR: number;

    if (mode === "series") {
      totalR = values.reduce((sum, r) => sum + r, 0);
    } else {
      const reciprocalSum = values.reduce((sum, r) => sum + (1 / r), 0);
      if (reciprocalSum === 0) {
        setError("Invalid calculation result.");
        return;
      }
      totalR = 1 / reciprocalSum;
    }

    setResult(totalR);
  };

  const reset = () => {
    setResistors(["", ""]);
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Series & Parallel Resistance Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Series & Parallel Resistance Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate total resistance for multiple resistors in series (R = R1 + R2 + ...) or parallel (1/R = 1/R1 + 1/R2 + ...)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Add resistor values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={mode} onValueChange={(v) => setMode(v as "series" | "parallel")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="series" data-testid="tab-series">Series</TabsTrigger>
                  <TabsTrigger value="parallel" data-testid="tab-parallel">Parallel</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {resistors.map((r, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`resistor-${index}`}>Resistor {index + 1}</Label>
                      <div className="relative">
                        <Input
                          id={`resistor-${index}`}
                          type="number"
                          step="any"
                          placeholder={`Enter R${index + 1}`}
                          value={r}
                          onChange={(e) => updateResistor(index, e.target.value)}
                          className="pr-12"
                          data-testid={`input-resistor-${index}`}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                          Ω
                        </span>
                      </div>
                    </div>
                    {resistors.length > 2 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeResistor(index)}
                        className="mt-7"
                        data-testid={`button-remove-${index}`}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button onClick={addResistor} variant="outline" className="w-full" data-testid="button-add-resistor">
                <Plus className="h-4 w-4 mr-2" />
                Add Resistor
              </Button>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription data-testid="text-error">{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate
                </Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Total resistance</CardDescription>
            </CardHeader>
            <CardContent>
              {result !== null ? (
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Total Resistance</div>
                    <div className="text-3xl font-bold font-mono" data-testid="text-result-total">
                      {result.toFixed(4)} Ω
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Formula Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      {mode === "series" 
                        ? "R_total = R1 + R2 + R3 + ..." 
                        : "1/R_total = 1/R1 + 1/R2 + 1/R3 + ..."}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Enter values and click Calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("series-parallel-resistance") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("series-parallel-resistance")!}
            calculatorId="series-parallel-resistance"
          />
        )}
      </main>
    </div>
  );
}
