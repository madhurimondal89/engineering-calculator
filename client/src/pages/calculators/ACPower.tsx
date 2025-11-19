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
  realPower?: number;
  reactivePower?: number;
  apparentPower?: number;
  powerFactor?: number;
}

export default function ACPower() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [phaseAngle, setPhaseAngle] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const angle = parseFloat(phaseAngle);

    if (isNaN(V) || isNaN(I) || isNaN(angle)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (V <= 0 || I <= 0) {
      setError("Voltage and current must be positive values.");
      return;
    }

    if (angle < -90 || angle > 90) {
      setError("Phase angle must be between -90° and 90°.");
      return;
    }

    // Convert angle to radians
    const angleRad = (angle * Math.PI) / 180;

    // Calculate AC power components
    const apparentPower = V * I;
    const realPower = V * I * Math.cos(angleRad);
    const reactivePower = V * I * Math.sin(angleRad);
    const powerFactor = Math.cos(angleRad);

    setResults({
      realPower,
      reactivePower,
      apparentPower,
      powerFactor,
    });
  };

  const reset = () => {
    setVoltage("");
    setCurrent("");
    setPhaseAngle("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="AC Power Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">AC Power Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate real power (P), reactive power (Q), apparent power (S), and power factor in AC circuits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter voltage, current, and phase angle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="voltage">RMS Voltage (V)</Label>
                <div className="relative">
                  <Input
                    id="voltage"
                    type="number"
                    step="any"
                    placeholder="Enter voltage"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                    className="pr-12"
                    data-testid="input-voltage"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    V
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="current">RMS Current (A)</Label>
                <div className="relative">
                  <Input
                    id="current"
                    type="number"
                    step="any"
                    placeholder="Enter current"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    className="pr-12"
                    data-testid="input-current"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    A
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phaseAngle">Phase Angle (θ)</Label>
                <div className="relative">
                  <Input
                    id="phaseAngle"
                    type="number"
                    step="any"
                    placeholder="Enter phase angle"
                    value={phaseAngle}
                    onChange={(e) => setPhaseAngle(e.target.value)}
                    className="pr-12"
                    data-testid="input-phase-angle"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    °
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Range: -90° to +90° (positive for inductive, negative for capacitive)</p>
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
              <CardDescription>Calculated power values</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Real Power (P)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-real-power">
                      {results.realPower!.toFixed(3)} W
                    </div>
                    <p className="text-xs text-muted-foreground">Active power consumed (P = VI cos θ)</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Reactive Power (Q)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-reactive-power">
                      {results.reactivePower!.toFixed(3)} VAR
                    </div>
                    <p className="text-xs text-muted-foreground">Power stored in reactive elements (Q = VI sin θ)</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Apparent Power (S)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-apparent-power">
                      {results.apparentPower!.toFixed(3)} VA
                    </div>
                    <p className="text-xs text-muted-foreground">Total power (S = VI)</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Power Factor (PF)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-power-factor">
                      {results.powerFactor!.toFixed(4)} ({(results.powerFactor! * 100).toFixed(2)}%)
                    </div>
                    <p className="text-xs text-muted-foreground">PF = P/S = cos θ</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Power Triangle:</p>
                    <p className="text-sm text-muted-foreground">
                      S² = P² + Q² → {results.apparentPower!.toFixed(2)}² = {results.realPower!.toFixed(2)}² + {results.reactivePower!.toFixed(2)}²
                    </p>
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

        {getCalculatorAccordion("ac-power") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("ac-power")!}
            calculatorId="ac-power"
          />
        )}
      </main>
    </div>
  );
}
