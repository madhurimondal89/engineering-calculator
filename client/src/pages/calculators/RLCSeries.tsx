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
  inductiveReactance?: number;
  capacitiveReactance?: number;
  totalReactance?: number;
  impedance?: number;
  current?: number;
  voltageR?: number;
  voltageL?: number;
  voltageC?: number;
  phaseAngle?: number;
  resonance?: boolean;
}

export default function RLCSeries() {
  const [voltage, setVoltage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [resistance, setResistance] = useState("");
  const [inductance, setInductance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const V = parseFloat(voltage);
    const f = parseFloat(frequency);
    const R = parseFloat(resistance);
    const L = parseFloat(inductance) / 1000; // Convert mH to H
    const C = parseFloat(capacitance) / 1000000; // Convert µF to F

    if (isNaN(V) || isNaN(f) || isNaN(R) || isNaN(L) || isNaN(C)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (V <= 0 || f <= 0 || R < 0 || L < 0 || C <= 0) {
      setError("All values must be positive (resistance can be zero).");
      return;
    }

    // Calculate reactances
    const XL = 2 * Math.PI * f * L;
    const XC = 1 / (2 * Math.PI * f * C);
    const X = XL - XC;

    // Calculate impedance
    const Z = Math.sqrt(R * R + X * X);

    // Calculate current
    const I = V / Z;

    // Calculate voltage drops
    const VR = I * R;
    const VL = I * XL;
    const VC = I * XC;

    // Calculate phase angle
    const phaseAngle = Math.atan2(X, R) * (180 / Math.PI);

    // Check if at resonance
    const resonance = Math.abs(XL - XC) < 0.01;

    setResults({
      inductiveReactance: XL,
      capacitiveReactance: XC,
      totalReactance: X,
      impedance: Z,
      current: I,
      voltageR: VR,
      voltageL: VL,
      voltageC: VC,
      phaseAngle,
      resonance,
    });
  };

  const reset = () => {
    setVoltage("");
    setFrequency("");
    setResistance("");
    setInductance("");
    setCapacitance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="RLC Series Circuit Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">RLC Series Circuit Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate impedance, current, and voltage drops in series RLC circuits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter circuit parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="voltage">Source Voltage (V)</Label>
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
                <Label htmlFor="frequency">Frequency (f)</Label>
                <div className="relative">
                  <Input
                    id="frequency"
                    type="number"
                    step="any"
                    placeholder="Enter frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="pr-12"
                    data-testid="input-frequency"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Hz
                  </span>
                </div>
              </div>

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
                <Label htmlFor="inductance">Inductance (L)</Label>
                <div className="relative">
                  <Input
                    id="inductance"
                    type="number"
                    step="any"
                    placeholder="Enter inductance"
                    value={inductance}
                    onChange={(e) => setInductance(e.target.value)}
                    className="pr-12"
                    data-testid="input-inductance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    mH
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacitance">Capacitance (C)</Label>
                <div className="relative">
                  <Input
                    id="capacitance"
                    type="number"
                    step="any"
                    placeholder="Enter capacitance"
                    value={capacitance}
                    onChange={(e) => setCapacitance(e.target.value)}
                    className="pr-12"
                    data-testid="input-capacitance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    µF
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
              <CardDescription>Circuit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">XL (Inductive)</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-xl">
                        {results.inductiveReactance!.toFixed(2)} Ω
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">XC (Capacitive)</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-xc">
                        {results.capacitiveReactance!.toFixed(2)} Ω
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label>Total Reactance (X = XL - XC)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-reactance">
                      {results.totalReactance!.toFixed(2)} Ω
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Impedance (Z)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-impedance">
                      {results.impedance!.toFixed(2)} Ω
                    </div>
                    <p className="text-xs text-muted-foreground">Z = √(R² + X²)</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Current (I)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-current">
                      {results.current!.toFixed(4)} A
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <Label className="text-xs">VR</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-xs" data-testid="result-vr">
                        {results.voltageR!.toFixed(2)} V
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">VL</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-xs" data-testid="result-vl">
                        {results.voltageL!.toFixed(2)} V
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">VC</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-xs" data-testid="result-vc">
                        {results.voltageC!.toFixed(2)} V
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Phase Angle (θ)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-phase-angle">
                      {results.phaseAngle!.toFixed(2)}°
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {results.phaseAngle! > 0 ? "Inductive (current lags voltage)" : 
                       results.phaseAngle! < 0 ? "Capacitive (current leads voltage)" : "Resistive"}
                    </p>
                  </div>

                  {results.resonance && (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Circuit is at resonance! XL ≈ XC, impedance is minimum (Z = R)
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Enter values and click Calculate to see results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("rlc-series") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("rlc-series")!}
            calculatorId="rlc-series"
          />
        )}
      </main>
    </div>
  );
}
