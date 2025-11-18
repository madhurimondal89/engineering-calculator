import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function VoltageDivider() {
  const [vin, setVin] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [vout, setVout] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setVout(null);

    const vinVal = parseFloat(vin);
    const r1Val = parseFloat(r1);
    const r2Val = parseFloat(r2);

    if (isNaN(vinVal) || isNaN(r1Val) || isNaN(r2Val)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (vinVal === 0) {
      setError("Input voltage cannot be zero.");
      return;
    }

    if (r1Val <= 0 || r2Val <= 0) {
      setError("Resistances must be greater than zero.");
      return;
    }

    const totalR = r1Val + r2Val;
    if (totalR === 0) {
      setError("Total resistance cannot be zero.");
      return;
    }

    const voutVal = vinVal * (r2Val / totalR);
    setVout(voutVal);
  };

  const reset = () => {
    setVin("");
    setR1("");
    setR2("");
    setVout(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Voltage Divider Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Voltage Divider Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate output voltage in a voltage divider circuit using the formula: V<sub>out</sub> = V<sub>in</sub> × R2/(R1+R2)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter input voltage and resistances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="vin">Input Voltage (Vin)</Label>
                <div className="relative">
                  <Input
                    id="vin"
                    type="number"
                    step="any"
                    placeholder="Enter input voltage"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    className="pr-12"
                    data-testid="input-vin"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    V
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="r1">Resistance R1</Label>
                <div className="relative">
                  <Input
                    id="r1"
                    type="number"
                    step="any"
                    placeholder="Enter R1"
                    value={r1}
                    onChange={(e) => setR1(e.target.value)}
                    className="pr-12"
                    data-testid="input-r1"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Ω
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="r2">Resistance R2</Label>
                <div className="relative">
                  <Input
                    id="r2"
                    type="number"
                    step="any"
                    placeholder="Enter R2"
                    value={r2}
                    onChange={(e) => setR2(e.target.value)}
                    className="pr-12"
                    data-testid="input-r2"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Ω
                  </span>
                </div>
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
              <CardDescription>Output voltage</CardDescription>
            </CardHeader>
            <CardContent>
              {vout !== null ? (
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Output Voltage (Vout)</div>
                    <div className="text-3xl font-bold font-mono" data-testid="text-result-vout">
                      {vout.toFixed(4)} V
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Formula Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      V<sub>out</sub> = V<sub>in</sub> × R2 / (R1 + R2)
                    </div>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      V<sub>out</sub> = {vin} × {r2} / ({r1} + {r2}) = {vout.toFixed(4)} V
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
      </main>
    </div>
  );
}
