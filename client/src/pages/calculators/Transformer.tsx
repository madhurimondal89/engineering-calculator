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
  secondaryVoltage?: number;
  secondaryCurrent?: number;
  turnsRatio?: number;
  transformerType?: string;
  powerTransferred?: number;
}

export default function Transformer() {
  const [primaryVoltage, setPrimaryVoltage] = useState("");
  const [primaryCurrent, setPrimaryCurrent] = useState("");
  const [primaryTurns, setPrimaryTurns] = useState("");
  const [secondaryTurns, setSecondaryTurns] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const Vp = parseFloat(primaryVoltage);
    const Ip = parseFloat(primaryCurrent);
    const Np = parseFloat(primaryTurns);
    const Ns = parseFloat(secondaryTurns);

    if (isNaN(Vp) || isNaN(Ip) || isNaN(Np) || isNaN(Ns)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (Vp <= 0 || Ip <= 0 || Np <= 0 || Ns <= 0) {
      setError("All values must be positive.");
      return;
    }

    // Calculate turns ratio: n = Ns / Np
    const n = Ns / Np;

    // Calculate secondary voltage: Vs = Vp × (Ns / Np)
    const Vs = Vp * n;

    // Calculate secondary current (assuming ideal transformer): Is = Ip × (Np / Ns)
    const Is = Ip / n;

    // Calculate power transferred (ideal transformer)
    const P = Vp * Ip;

    // Determine transformer type
    let transformerType = "";
    if (n > 1) {
      transformerType = `Step-Up Transformer (${n.toFixed(2)}:1)`;
    } else if (n < 1) {
      transformerType = `Step-Down Transformer (1:${(1/n).toFixed(2)})`;
    } else {
      transformerType = "Isolation Transformer (1:1)";
    }

    setResults({
      secondaryVoltage: Vs,
      secondaryCurrent: Is,
      turnsRatio: n,
      transformerType,
      powerTransferred: P,
    });
  };

  const reset = () => {
    setPrimaryVoltage("");
    setPrimaryCurrent("");
    setPrimaryTurns("");
    setSecondaryTurns("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Transformer Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Transformer Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate secondary voltage and current in ideal transformers using the turns ratio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter primary parameters and turns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/50 rounded-md space-y-4">
                <Label className="text-sm font-medium">Primary Side</Label>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="primaryVoltage" className="text-xs">Primary Voltage (Vp)</Label>
                    <div className="relative">
                      <Input
                        id="primaryVoltage"
                        type="number"
                        step="any"
                        placeholder="Enter primary voltage"
                        value={primaryVoltage}
                        onChange={(e) => setPrimaryVoltage(e.target.value)}
                        className="pr-12"
                        data-testid="input-primary-voltage"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        V
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryCurrent" className="text-xs">Primary Current (Ip)</Label>
                    <div className="relative">
                      <Input
                        id="primaryCurrent"
                        type="number"
                        step="any"
                        placeholder="Enter primary current"
                        value={primaryCurrent}
                        onChange={(e) => setPrimaryCurrent(e.target.value)}
                        className="pr-12"
                        data-testid="input-primary-current"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        A
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryTurns" className="text-xs">Primary Turns (Np)</Label>
                    <div className="relative">
                      <Input
                        id="primaryTurns"
                        type="number"
                        step="1"
                        placeholder="Enter primary turns"
                        value={primaryTurns}
                        onChange={(e) => setPrimaryTurns(e.target.value)}
                        className="pr-20"
                        data-testid="input-primary-turns"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        turns
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-md space-y-4">
                <Label className="text-sm font-medium">Secondary Side</Label>
                <div className="space-y-2">
                  <Label htmlFor="secondaryTurns" className="text-xs">Secondary Turns (Ns)</Label>
                  <div className="relative">
                    <Input
                      id="secondaryTurns"
                      type="number"
                      step="1"
                      placeholder="Enter secondary turns"
                      value={secondaryTurns}
                      onChange={(e) => setSecondaryTurns(e.target.value)}
                      className="pr-20"
                      data-testid="input-secondary-turns"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      turns
                    </span>
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
              <CardDescription>Secondary parameters</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Secondary Voltage (Vs)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-secondary-voltage">
                      {results.secondaryVoltage!.toFixed(2)} V
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Secondary Current (Is)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-secondary-current">
                      {results.secondaryCurrent!.toFixed(4)} A
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Turns Ratio (n = Ns/Np)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-turns-ratio">
                      {results.turnsRatio!.toFixed(4)}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Transformer Type</Label>
                    <div className="p-3 bg-muted rounded-md text-base" data-testid="result-transformer-type">
                      {results.transformerType}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Power Transferred</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-power">
                      {results.powerTransferred! >= 1000
                        ? `${(results.powerTransferred! / 1000).toFixed(3)} kW`
                        : `${results.powerTransferred!.toFixed(3)} W`}
                    </div>
                    <p className="text-xs text-muted-foreground">P = Vp × Ip (ideal transformer)</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Key Relationships:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Vs / Vp = Ns / Np = n</p>
                      <p>• Is / Ip = Np / Ns = 1/n</p>
                      <p>• Vp × Ip = Vs × Is (ideal)</p>
                      <p className="text-xs mt-2">
                        Voltage is transformed by turns ratio, current inversely
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

        {getCalculatorAccordion("transformer") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("transformer")!}
            calculatorId="transformer"
          />
        )}
      </main>
    </div>
  );
}
