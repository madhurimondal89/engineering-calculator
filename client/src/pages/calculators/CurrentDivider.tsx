import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function CurrentDivider() {
  const [itotal, setItotal] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [i1, setI1] = useState<number | null>(null);
  const [i2, setI2] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setI1(null);
    setI2(null);

    const itotalVal = parseFloat(itotal);
    const r1Val = parseFloat(r1);
    const r2Val = parseFloat(r2);

    if (isNaN(itotalVal) || isNaN(r1Val) || isNaN(r2Val)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (itotalVal === 0) {
      setError("Total current cannot be zero.");
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

    const i1Val = itotalVal * (r2Val / totalR);
    const i2Val = itotalVal * (r1Val / totalR);
    
    setI1(i1Val);
    setI2(i2Val);
  };

  const reset = () => {
    setItotal("");
    setR1("");
    setR2("");
    setI1(null);
    setI2(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Current Divider Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Current Divider Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate current distribution in parallel branches. I1 = Itotal × R2/(R1+R2), I2 = Itotal × R1/(R1+R2)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter total current and resistances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="itotal">Total Current (Itotal)</Label>
                <div className="relative">
                  <Input
                    id="itotal"
                    type="number"
                    step="any"
                    placeholder="Enter total current"
                    value={itotal}
                    onChange={(e) => setItotal(e.target.value)}
                    className="pr-12"
                    data-testid="input-itotal"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    A
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
              <CardDescription>Current through each branch</CardDescription>
            </CardHeader>
            <CardContent>
              {i1 !== null && i2 !== null ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Current I1</div>
                      <div className="text-2xl font-bold font-mono" data-testid="text-result-i1">
                        {i1.toFixed(4)} A
                      </div>
                    </div>
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Current I2</div>
                      <div className="text-2xl font-bold font-mono" data-testid="text-result-i2">
                        {i2.toFixed(4)} A
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Formulas Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      I1 = I<sub>total</sub> × R2 / (R1 + R2)
                    </div>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      I2 = I<sub>total</sub> × R1 / (R1 + R2)
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
