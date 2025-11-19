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
  phaseAngle?: number;
  powerFactor?: number;
  circuitType?: string;
  explanation?: string;
}

export default function PhaseAngle() {
  const [resistance, setResistance] = useState("");
  const [reactance, setReactance] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const R = parseFloat(resistance);
    const X = parseFloat(reactance);

    if (isNaN(R) || isNaN(X)) {
      setError("Please enter valid numbers for both fields.");
      return;
    }

    if (R < 0) {
      setError("Resistance cannot be negative.");
      return;
    }

    // Calculate phase angle: θ = arctan(X/R)
    const phaseAngleRad = Math.atan2(X, R);
    const phaseAngle = phaseAngleRad * (180 / Math.PI);

    // Calculate power factor: PF = cos(θ)
    const powerFactor = Math.cos(phaseAngleRad);

    // Determine circuit type
    let circuitType = "";
    let explanation = "";
    
    if (Math.abs(X) < 0.01) {
      circuitType = "Purely Resistive";
      explanation = "Voltage and current are in phase (θ ≈ 0°)";
    } else if (X > 0) {
      circuitType = "Inductive";
      explanation = "Current lags voltage (positive phase angle)";
    } else {
      circuitType = "Capacitive";
      explanation = "Current leads voltage (negative phase angle)";
    }

    setResults({
      phaseAngle,
      powerFactor: Math.abs(powerFactor),
      circuitType,
      explanation,
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
        <Breadcrumb category="AC Circuits" calculatorName="Phase Angle Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Phase Angle Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate phase angle between voltage and current in AC circuits using θ = arctan(X/R).
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
                <Label htmlFor="reactance">Total Reactance (X)</Label>
                <div className="relative">
                  <Input
                    id="reactance"
                    type="number"
                    step="any"
                    placeholder="Enter reactance"
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
                  Positive for inductive (XL), negative for capacitive (XC)
                </p>
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
              <CardDescription>Phase relationship analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Phase Angle (θ)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-phase-angle">
                      {results.phaseAngle!.toFixed(2)}°
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Power Factor (PF)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-power-factor">
                      {results.powerFactor!.toFixed(4)} ({(results.powerFactor! * 100).toFixed(2)}%)
                    </div>
                    <p className="text-xs text-muted-foreground">PF = cos θ</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Circuit Type</Label>
                    <div className="p-3 bg-muted rounded-md text-base" data-testid="result-circuit-type">
                      {results.circuitType}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Explanation</Label>
                    <div className="p-3 bg-muted rounded-md text-sm" data-testid="result-explanation">
                      {results.explanation}
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Key Relationships:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• θ = arctan(X/R)</p>
                      <p>• PF = cos θ = R/Z</p>
                      <p>• Z = √(R² + X²)</p>
                      <p className="text-xs mt-2">
                        {results.phaseAngle! > 0 && "Inductive: XL > XC, current lags voltage"}
                        {results.phaseAngle! < 0 && "Capacitive: XC > XL, current leads voltage"}
                        {Math.abs(results.phaseAngle!) < 0.1 && "Resistive: X ≈ 0, in phase"}
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

        {getCalculatorAccordion("phase-angle") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("phase-angle")!}
            calculatorId="phase-angle"
          />
        )}
      </main>
    </div>
  );
}
