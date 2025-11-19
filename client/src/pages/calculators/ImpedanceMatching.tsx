import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

interface Results {
  matchingImpedance?: number;
  reflectionCoefficient?: number;
  vswr?: number;
  powerTransferEfficiency?: number;
  returnLoss?: number;
}

export default function ImpedanceMatching() {
  const [sourceImpedance, setSourceImpedance] = useState("");
  const [loadImpedance, setLoadImpedance] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const Zs = parseFloat(sourceImpedance);
    const Zl = parseFloat(loadImpedance);

    if (isNaN(Zs) || isNaN(Zl)) {
      setError("Please enter valid numbers for both impedances.");
      return;
    }

    if (Zs <= 0 || Zl <= 0) {
      setError("Impedances must be positive values.");
      return;
    }

    // For maximum power transfer, load impedance should equal conjugate of source impedance
    // For resistive loads: Zl = Zs (perfect match)
    const Zmatch = Math.sqrt(Zs * Zl); // Geometric mean for impedance matching

    // Calculate reflection coefficient: Γ = (Zl - Zs) / (Zl + Zs)
    const gamma = Math.abs((Zl - Zs) / (Zl + Zs));

    // Calculate VSWR (Voltage Standing Wave Ratio): VSWR = (1 + |Γ|) / (1 - |Γ|)
    const vswr = (1 + gamma) / (1 - gamma);

    // Calculate power transfer efficiency: η = 4ZsZl / (Zs + Zl)²
    const efficiency = (4 * Zs * Zl) / Math.pow(Zs + Zl, 2);

    // Calculate return loss in dB: RL = -20 log(|Γ|)
    const returnLoss = -20 * Math.log10(gamma);

    setResults({
      matchingImpedance: Zmatch,
      reflectionCoefficient: gamma,
      vswr,
      powerTransferEfficiency: efficiency * 100,
      returnLoss,
    });
  };

  const reset = () => {
    setSourceImpedance("");
    setLoadImpedance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Impedance Matching Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Impedance Matching Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate matching impedance, reflection coefficient, VSWR, and power transfer efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter source and load impedances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sourceImpedance">Source Impedance (Zs)</Label>
                <div className="relative">
                  <Input
                    id="sourceImpedance"
                    type="number"
                    step="any"
                    placeholder="Enter source impedance"
                    value={sourceImpedance}
                    onChange={(e) => setSourceImpedance(e.target.value)}
                    className="pr-12"
                    data-testid="input-source-impedance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Ω
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loadImpedance">Load Impedance (Zl)</Label>
                <div className="relative">
                  <Input
                    id="loadImpedance"
                    type="number"
                    step="any"
                    placeholder="Enter load impedance"
                    value={loadImpedance}
                    onChange={(e) => setLoadImpedance(e.target.value)}
                    className="pr-12"
                    data-testid="input-load-impedance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Ω
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate
                </Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">
                  Reset
                </Button>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Matching analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Matching Impedance (Zmatch)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-matching-impedance">
                      {results.matchingImpedance!.toFixed(2)} Ω
                    </div>
                    <p className="text-xs text-muted-foreground">Geometric mean: √(Zs × Zl)</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Reflection Coefficient (|Γ|)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-reflection-coefficient">
                      {results.reflectionCoefficient!.toFixed(4)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {results.reflectionCoefficient! < 0.05 && "Excellent match (< 5%)"}
                      {results.reflectionCoefficient! >= 0.05 && results.reflectionCoefficient! < 0.1 && "Good match (5-10%)"}
                      {results.reflectionCoefficient! >= 0.1 && results.reflectionCoefficient! < 0.2 && "Fair match (10-20%)"}
                      {results.reflectionCoefficient! >= 0.2 && "Poor match (> 20%)"}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>VSWR (Voltage Standing Wave Ratio)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-vswr">
                      {results.vswr!.toFixed(2)}:1
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {results.vswr! < 1.5 && "Excellent (< 1.5:1)"}
                      {results.vswr! >= 1.5 && results.vswr! < 2 && "Good (1.5-2:1)"}
                      {results.vswr! >= 2 && results.vswr! < 3 && "Acceptable (2-3:1)"}
                      {results.vswr! >= 3 && "Needs improvement (> 3:1)"}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Power Transfer Efficiency</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-efficiency">
                      {results.powerTransferEfficiency!.toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Return Loss</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-return-loss">
                      {results.returnLoss!.toFixed(2)} dB
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {results.returnLoss! > 20 && "Excellent (> 20 dB)"}
                      {results.returnLoss! > 10 && results.returnLoss! <= 20 && "Good (10-20 dB)"}
                      {results.returnLoss! <= 10 && "Poor (< 10 dB)"}
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Key Formulas:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Γ = (Zl - Zs) / (Zl + Zs)</p>
                      <p>• VSWR = (1 + |Γ|) / (1 - |Γ|)</p>
                      <p>• η = 4ZsZl / (Zs + Zl)²</p>
                      <p className="text-xs mt-2">
                        Perfect match when Zl = Zs (Γ = 0, VSWR = 1:1)
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Enter values and click Calculate to see results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("impedance-matching") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("impedance-matching")!}
            calculatorId="impedance-matching"
          />
        )}
      </main>
    </div>
  );
}
