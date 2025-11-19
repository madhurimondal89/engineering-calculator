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
  outputVoltage?: number;
  z1Magnitude?: number;
  z2Magnitude?: number;
  totalImpedance?: number;
  current?: number;
  voltageDivisionRatio?: number;
}

export default function ACVoltageDivider() {
  const [inputVoltage, setInputVoltage] = useState("");
  const [r1, setR1] = useState("");
  const [x1, setX1] = useState("");
  const [r2, setR2] = useState("");
  const [x2, setX2] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const Vin = parseFloat(inputVoltage);
    const R1 = parseFloat(r1);
    const X1 = parseFloat(x1);
    const R2 = parseFloat(r2);
    const X2 = parseFloat(x2);

    if (isNaN(Vin) || isNaN(R1) || isNaN(X1) || isNaN(R2) || isNaN(X2)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (Vin <= 0 || R1 < 0 || R2 < 0) {
      setError("Voltage and resistances must be positive values.");
      return;
    }

    // Calculate impedance magnitudes
    const Z1 = Math.sqrt(R1 * R1 + X1 * X1);
    const Z2 = Math.sqrt(R2 * R2 + X2 * X2);

    // Calculate total impedance (series connection)
    const Rtotal = R1 + R2;
    const Xtotal = X1 + X2;
    const Ztotal = Math.sqrt(Rtotal * Rtotal + Xtotal * Xtotal);

    if (Ztotal === 0) {
      setError("Total impedance cannot be zero.");
      return;
    }

    // Calculate current
    const I = Vin / Ztotal;

    // Calculate output voltage (across Z2)
    const Vout = I * Z2;

    // Calculate voltage division ratio
    const ratio = Vout / Vin;

    setResults({
      outputVoltage: Vout,
      z1Magnitude: Z1,
      z2Magnitude: Z2,
      totalImpedance: Ztotal,
      current: I,
      voltageDivisionRatio: ratio,
    });
  };

  const reset = () => {
    setInputVoltage("");
    setR1("");
    setX1("");
    setR2("");
    setX2("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="AC Voltage Divider Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">AC Voltage Divider Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate output voltage in AC voltage divider circuits with complex impedances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter input voltage and impedance components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inputVoltage">Input Voltage (Vin)</Label>
                <div className="relative">
                  <Input
                    id="inputVoltage"
                    type="number"
                    step="any"
                    placeholder="Enter input voltage"
                    value={inputVoltage}
                    onChange={(e) => setInputVoltage(e.target.value)}
                    className="pr-12"
                    data-testid="input-voltage"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    V
                  </span>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-md space-y-4">
                <Label className="text-sm font-medium">Impedance Z1 (Series)</Label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="r1" className="text-xs">Resistance (R1)</Label>
                    <div className="relative">
                      <Input
                        id="r1"
                        type="number"
                        step="any"
                        placeholder="R1"
                        value={r1}
                        onChange={(e) => setR1(e.target.value)}
                        className="pr-8"
                        data-testid="input-r1"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="x1" className="text-xs">Reactance (X1)</Label>
                    <div className="relative">
                      <Input
                        id="x1"
                        type="number"
                        step="any"
                        placeholder="X1"
                        value={x1}
                        onChange={(e) => setX1(e.target.value)}
                        className="pr-8"
                        data-testid="input-x1"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-md space-y-4">
                <Label className="text-sm font-medium">Impedance Z2 (Output)</Label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="r2" className="text-xs">Resistance (R2)</Label>
                    <div className="relative">
                      <Input
                        id="r2"
                        type="number"
                        step="any"
                        placeholder="R2"
                        value={r2}
                        onChange={(e) => setR2(e.target.value)}
                        className="pr-8"
                        data-testid="input-r2"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="x2" className="text-xs">Reactance (X2)</Label>
                    <div className="relative">
                      <Input
                        id="x2"
                        type="number"
                        step="any"
                        placeholder="X2"
                        value={x2}
                        onChange={(e) => setX2(e.target.value)}
                        className="pr-8"
                        data-testid="input-x2"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>
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
              <CardDescription>Output voltage and circuit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Output Voltage (Vout)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-output-voltage">
                      {results.outputVoltage!.toFixed(3)} V
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">|Z1|</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-z1">
                        {results.z1Magnitude!.toFixed(2)} Ω
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">|Z2|</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-z2">
                        {results.z2Magnitude!.toFixed(2)} Ω
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Total Impedance (Ztotal)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-total-impedance">
                      {results.totalImpedance!.toFixed(2)} Ω
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Circuit Current (I)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-current">
                      {results.current!.toFixed(4)} A
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Voltage Division Ratio</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-ratio">
                      {results.voltageDivisionRatio!.toFixed(4)} ({(results.voltageDivisionRatio! * 100).toFixed(2)}%)
                    </div>
                    <p className="text-xs text-muted-foreground">Vout / Vin</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formula:</p>
                    <p className="text-sm text-muted-foreground">
                      Vout = Vin × (|Z2| / |Z1 + Z2|)
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

        {getCalculatorAccordion("ac-voltage-divider") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("ac-voltage-divider")!}
            calculatorId="ac-voltage-divider"
          />
        )}
      </main>
    </div>
  );
}
