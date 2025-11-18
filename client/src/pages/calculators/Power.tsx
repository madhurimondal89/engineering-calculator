import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface Results {
  power?: number;
  voltage?: number;
  current?: number;
  resistance?: number;
}

export default function Power() {
  const [power, setPower] = useState("");
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const p = power ? parseFloat(power) : null;
    const v = voltage ? parseFloat(voltage) : null;
    const i = current ? parseFloat(current) : null;
    const r = resistance ? parseFloat(resistance) : null;

    const providedValues = [p, v, i, r].filter(val => val !== null && !isNaN(val as number));
    
    if (providedValues.length < 2) {
      setError("Please enter at least two values to calculate the others.");
      return;
    }

    const newResults: Results = {};

    // P = V × I, P = V²/R, P = I²R
    if (v !== null && i !== null && !isNaN(v) && !isNaN(i)) {
      if (i === 0 && v === 0) {
        setError("Both voltage and current cannot be zero.");
        return;
      }
      newResults.power = v * i;
      newResults.voltage = v;
      newResults.current = i;
      newResults.resistance = i !== 0 ? v / i : 0;
    } else if (v !== null && r !== null && !isNaN(v) && !isNaN(r)) {
      if (r === 0) {
        setError("Resistance cannot be zero.");
        return;
      }
      if (r < 0) {
        setError("Resistance must be positive.");
        return;
      }
      newResults.power = (v * v) / r;
      newResults.voltage = v;
      newResults.resistance = r;
      newResults.current = v / r;
    } else if (i !== null && r !== null && !isNaN(i) && !isNaN(r)) {
      if (r < 0) {
        setError("Resistance must be positive.");
        return;
      }
      newResults.power = i * i * r;
      newResults.current = i;
      newResults.resistance = r;
      newResults.voltage = i * r;
    } else if (p !== null && v !== null && !isNaN(p) && !isNaN(v)) {
      if (v === 0) {
        setError("Voltage cannot be zero when power is specified.");
        return;
      }
      if (p === 0) {
        setError("Power cannot be zero for meaningful calculations.");
        return;
      }
      if (p < 0 || (p > 0 && v < 0)) {
        setError("Invalid combination: ensure power and voltage have compatible signs.");
        return;
      }
      newResults.power = p;
      newResults.voltage = v;
      newResults.current = p / v;
      newResults.resistance = (v * v) / p;
    } else if (p !== null && i !== null && !isNaN(p) && !isNaN(i)) {
      if (i === 0) {
        setError("Current cannot be zero when power is specified.");
        return;
      }
      if (p === 0) {
        setError("Power cannot be zero for meaningful calculations.");
        return;
      }
      if (p < 0) {
        setError("Power must be positive.");
        return;
      }
      newResults.power = p;
      newResults.current = i;
      newResults.voltage = p / i;
      newResults.resistance = p / (i * i);
    } else if (p !== null && r !== null && !isNaN(p) && !isNaN(r)) {
      if (r === 0) {
        setError("Resistance cannot be zero.");
        return;
      }
      if (p < 0 || r < 0) {
        setError("Power and resistance must be positive.");
        return;
      }
      newResults.power = p;
      newResults.resistance = r;
      newResults.current = Math.sqrt(p / r);
      newResults.voltage = Math.sqrt(p * r);
    } else {
      setError("Invalid combination of inputs. Please provide valid values.");
      return;
    }

    // Final validation: check for invalid results
    const hasInvalidResult = Object.values(newResults).some(val => 
      val === undefined || isNaN(val as number) || !isFinite(val as number)
    );
    
    if (hasInvalidResult) {
      setError("Calculation resulted in invalid values. Please check your inputs.");
      return;
    }

    setResults(newResults);
  };

  const reset = () => {
    setPower("");
    setVoltage("");
    setCurrent("");
    setResistance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Power Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Electrical Power Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate electrical power, voltage, current, or resistance. Enter any two values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter any two values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="power">Power (P)</Label>
                <div className="relative">
                  <Input
                    id="power"
                    type="number"
                    step="any"
                    placeholder="Enter power"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                    className="pr-12"
                    data-testid="input-power"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">W</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voltage">Voltage (V)</Label>
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
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">V</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="current">Current (I)</Label>
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
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">A</span>
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
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ω</span>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex gap-3 pt-4">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">Calculate</Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">Reset</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Calculated values</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  {results.power !== undefined && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Power</p>
                      <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-power">{results.power.toFixed(2)} W</p>
                    </div>
                  )}
                  {results.voltage !== undefined && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Voltage</p>
                      <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-voltage">{results.voltage.toFixed(2)} V</p>
                    </div>
                  )}
                  {results.current !== undefined && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Current</p>
                      <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-current">{results.current.toFixed(2)} A</p>
                    </div>
                  )}
                  {results.resistance !== undefined && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Resistance</p>
                      <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-resistance">{results.resistance.toFixed(2)} Ω</p>
                    </div>
                  )}
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formulas used:</p>
                    <p className="font-mono">P = V × I</p>
                    <p className="font-mono">P = V² / R</p>
                    <p className="font-mono">P = I² × R</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Enter any two values and click Calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
