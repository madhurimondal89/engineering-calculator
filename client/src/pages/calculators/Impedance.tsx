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

interface ImpedanceResults {
  magnitude: number;
  phaseAngle: number;
  phaseAngleDeg: number;
}

export default function Impedance() {
  const [resistance, setResistance] = useState("");
  const [reactance, setReactance] = useState("");
  const [results, setResults] = useState<ImpedanceResults | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const r = parseFloat(resistance);
    const x = parseFloat(reactance);

    if (isNaN(r) || isNaN(x)) {
      setError("Please enter valid numbers for both resistance and reactance.");
      return;
    }

    if (r < 0) {
      setError("Resistance cannot be negative.");
      return;
    }

    const magnitude = Math.sqrt(r * r + x * x);
    const phaseAngle = Math.atan2(x, r);
    const phaseAngleDeg = (phaseAngle * 180) / Math.PI;

    setResults({
      magnitude,
      phaseAngle,
      phaseAngleDeg
    });
  };

  const reset = () => {
    setResistance("");
    setReactance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Impedance Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Impedance Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate complex impedance from resistance and reactance. Z = R + jX, |Z| = √(R² + X²), θ = tan⁻¹(X/R)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter resistance and reactance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div className="space-y-2">
                <Label htmlFor="reactance">Reactance (X)</Label>
                <div className="relative">
                  <Input
                    id="reactance"
                    type="number"
                    step="any"
                    placeholder="Enter reactance (positive for inductive, negative for capacitive)"
                    value={reactance}
                    onChange={(e) => setReactance(e.target.value)}
                    className="pr-12"
                    data-testid="input-reactance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Ω
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Positive for inductive, negative for capacitive
                </p>
              </div>

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
              <CardDescription>Impedance characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              {results !== null ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Impedance Magnitude |Z|</div>
                      <div className="text-3xl font-bold font-mono" data-testid="text-result-magnitude">
                        {results.magnitude.toFixed(4)} Ω
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">Phase Angle</div>
                        <div className="text-xl font-bold font-mono" data-testid="text-result-phase-rad">
                          {results.phaseAngle.toFixed(4)} rad
                        </div>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">Phase Angle</div>
                        <div className="text-xl font-bold font-mono" data-testid="text-result-phase-deg">
                          {results.phaseAngleDeg.toFixed(2)}°
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Impedance in Rectangular Form:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      Z = {resistance} {parseFloat(reactance) >= 0 ? '+' : ''} j{reactance} Ω
                    </div>

                    <h3 className="font-semibold mt-4">Impedance in Polar Form:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      Z = {results.magnitude.toFixed(4)} ∠ {results.phaseAngleDeg.toFixed(2)}° Ω
                    </div>

                    <h3 className="font-semibold mt-4">Formulas Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      |Z| = √(R² + X²)
                    </div>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      θ = tan⁻¹(X/R)
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

        {getCalculatorAccordion("impedance") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("impedance")!}
            calculatorId="impedance"
          />
        )}
      </main>
    </div>
  );
}
