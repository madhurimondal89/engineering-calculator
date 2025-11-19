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
  current1?: number;
  current2?: number;
  z1Magnitude?: number;
  z2Magnitude?: number;
  currentDivisionRatio?: number;
}

export default function ACCurrentDivider() {
  const [totalCurrent, setTotalCurrent] = useState("");
  const [r1, setR1] = useState("");
  const [x1, setX1] = useState("");
  const [r2, setR2] = useState("");
  const [x2, setX2] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const Itotal = parseFloat(totalCurrent);
    const R1 = parseFloat(r1);
    const X1 = parseFloat(x1);
    const R2 = parseFloat(r2);
    const X2 = parseFloat(x2);

    if (isNaN(Itotal) || isNaN(R1) || isNaN(X1) || isNaN(R2) || isNaN(X2)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (Itotal <= 0 || R1 < 0 || R2 < 0) {
      setError("Current and resistances must be positive values.");
      return;
    }

    // Calculate impedance magnitudes
    const Z1 = Math.sqrt(R1 * R1 + X1 * X1);
    const Z2 = Math.sqrt(R2 * R2 + X2 * X2);

    if (Z1 === 0 || Z2 === 0) {
      setError("Impedances cannot be zero.");
      return;
    }

    // For parallel impedances, current divides inversely with impedance
    // I1 = Itotal × (Z2 / (Z1 + Z2))
    // I2 = Itotal × (Z1 / (Z1 + Z2))
    
    const I1 = Itotal * (Z2 / (Z1 + Z2));
    const I2 = Itotal * (Z1 / (Z1 + Z2));

    // Calculate current division ratio
    const ratio = I1 / Itotal;

    setResults({
      current1: I1,
      current2: I2,
      z1Magnitude: Z1,
      z2Magnitude: Z2,
      currentDivisionRatio: ratio,
    });
  };

  const reset = () => {
    setTotalCurrent("");
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
        <Breadcrumb category="AC Circuits" calculatorName="AC Current Divider Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">AC Current Divider Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate branch currents in parallel AC circuits with complex impedances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter total current and impedance components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="totalCurrent">Total Current (Itotal)</Label>
                <div className="relative">
                  <Input
                    id="totalCurrent"
                    type="number"
                    step="any"
                    placeholder="Enter total current"
                    value={totalCurrent}
                    onChange={(e) => setTotalCurrent(e.target.value)}
                    className="pr-12"
                    data-testid="input-current"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    A
                  </span>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-md space-y-4">
                <Label className="text-sm font-medium">Impedance Z1 (Branch 1)</Label>
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
                <Label className="text-sm font-medium">Impedance Z2 (Branch 2)</Label>
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
              <CardDescription>Branch currents and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Current through Z1 (I1)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-current-1">
                      {results.current1!.toFixed(4)} A
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Current through Z2 (I2)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-current-2">
                      {results.current2!.toFixed(4)} A
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
                    <Label>Current Division Ratio (I1/Itotal)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-ratio">
                      {results.currentDivisionRatio!.toFixed(4)} ({(results.currentDivisionRatio! * 100).toFixed(2)}%)
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formulas:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>I1 = Itotal × (|Z2| / (|Z1| + |Z2|))</p>
                      <p>I2 = Itotal × (|Z1| / (|Z1| + |Z2|))</p>
                      <p className="text-xs mt-2">
                        Current divides inversely with impedance in parallel circuits
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

        {getCalculatorAccordion("ac-current-divider") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("ac-current-divider")!}
            calculatorId="ac-current-divider"
          />
        )}
      </main>
    </div>
  );
}
