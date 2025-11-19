import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Conductance() {
  const [resistance, setResistance] = useState("");
  const [conductance, setConductance] = useState("");
  const [result, setResult] = useState<{ value: number; unit: string; type: string } | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("resistance");

  const calculateFromResistance = () => {
    setError("");
    setResult(null);

    const rVal = parseFloat(resistance);

    if (isNaN(rVal)) {
      setError("Please enter a valid number for resistance.");
      return;
    }

    if (rVal <= 0) {
      setError("Resistance must be greater than zero.");
      return;
    }

    const gVal = 1 / rVal;
    setResult({ value: gVal, unit: "S (Siemens)", type: "Conductance" });
  };

  const calculateFromConductance = () => {
    setError("");
    setResult(null);

    const gVal = parseFloat(conductance);

    if (isNaN(gVal)) {
      setError("Please enter a valid number for conductance.");
      return;
    }

    if (gVal <= 0) {
      setError("Conductance must be greater than zero.");
      return;
    }

    const rVal = 1 / gVal;
    setResult({ value: rVal, unit: "Ω (Ohms)", type: "Resistance" });
  };

  const reset = () => {
    setResistance("");
    setConductance("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Conductance Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Conductance Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Convert between resistance and conductance. G = 1/R, R = 1/G
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose what to calculate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="resistance" data-testid="tab-resistance">From Resistance</TabsTrigger>
                  <TabsTrigger value="conductance" data-testid="tab-conductance">From Conductance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="resistance" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="resistance">Resistance (R)</Label>
                    <div className="relative">
                      <Input
                        id="resistance"
                        type="number"
                        step="any"
                        placeholder="Enter resistance"
                        value={resistance}
                        onChange={(e) => setResistance(e.target.value)}
                        className="pr-12"
                        data-testid="input-resistance"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>

                  <Button onClick={calculateFromResistance} className="w-full" data-testid="button-calculate-conductance">
                    Calculate Conductance
                  </Button>
                </TabsContent>

                <TabsContent value="conductance" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="conductance">Conductance (G)</Label>
                    <div className="relative">
                      <Input
                        id="conductance"
                        type="number"
                        step="any"
                        placeholder="Enter conductance"
                        value={conductance}
                        onChange={(e) => setConductance(e.target.value)}
                        className="pr-12"
                        data-testid="input-conductance"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        S
                      </span>
                    </div>
                  </div>

                  <Button onClick={calculateFromConductance} className="w-full" data-testid="button-calculate-resistance">
                    Calculate Resistance
                  </Button>
                </TabsContent>
              </Tabs>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription data-testid="text-error">{error}</AlertDescription>
                </Alert>
              )}

              <Button onClick={reset} variant="outline" className="w-full" data-testid="button-reset">
                Reset
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Converted value</CardDescription>
            </CardHeader>
            <CardContent>
              {result !== null ? (
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">{result.type}</div>
                    <div className="text-3xl font-bold font-mono" data-testid="text-result-value">
                      {result.value.toExponential(4)} {result.unit}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Formula Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      {activeTab === "resistance" ? "G = 1 / R" : "R = 1 / G"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Enter a value and click Calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("conductance") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("conductance")!}
            calculatorId="conductance"
          />
        )}
      </main>
    </div>
  );
}
