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
  qFactor?: number;
  bandwidth?: number;
  lowerCutoff?: number;
  upperCutoff?: number;
  selectivity?: string;
}

export default function QFactor() {
  const [resonantFreq, setResonantFreq] = useState("");
  const [bandwidth, setBandwidth] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const fr = parseFloat(resonantFreq);
    const BW = parseFloat(bandwidth);

    if (isNaN(fr) || isNaN(BW)) {
      setError("Please enter valid numbers for both fields.");
      return;
    }

    if (fr <= 0 || BW <= 0) {
      setError("Frequency and bandwidth must be positive values.");
      return;
    }

    if (BW >= fr) {
      setError("Bandwidth cannot exceed resonant frequency.");
      return;
    }

    // Calculate Q-factor: Q = fr / BW
    const Q = fr / BW;
    
    // Calculate cutoff frequencies
    const fL = fr - (BW / 2); // Lower cutoff frequency
    const fH = fr + (BW / 2); // Upper cutoff frequency

    // Determine selectivity classification
    let selectivity = "";
    if (Q >= 100) selectivity = "Very High Selectivity (Narrow Band)";
    else if (Q >= 20) selectivity = "High Selectivity";
    else if (Q >= 10) selectivity = "Moderate Selectivity";
    else if (Q >= 5) selectivity = "Low Selectivity";
    else selectivity = "Very Low Selectivity (Wide Band)";

    setResults({
      qFactor: Q,
      bandwidth: BW,
      lowerCutoff: fL,
      upperCutoff: fH,
      selectivity,
    });
  };

  const reset = () => {
    setResonantFreq("");
    setBandwidth("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Quality Factor Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Quality Factor (Q) Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate Q-factor for resonant circuits and bandwidth using Q = fr / BW.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter resonant frequency and bandwidth</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resonantFreq">Resonant Frequency (fr)</Label>
                <div className="relative">
                  <Input
                    id="resonantFreq"
                    type="number"
                    step="any"
                    placeholder="Enter resonant frequency"
                    value={resonantFreq}
                    onChange={(e) => setResonantFreq(e.target.value)}
                    className="pr-12"
                    data-testid="input-frequency"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Hz
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bandwidth">Bandwidth (BW)</Label>
                <div className="relative">
                  <Input
                    id="bandwidth"
                    type="number"
                    step="any"
                    placeholder="Enter bandwidth"
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                    className="pr-12"
                    data-testid="input-bandwidth"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    Hz
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">BW = fH - fL (upper - lower cutoff frequencies)</p>
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
              <CardDescription>Quality factor and selectivity</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Quality Factor (Q)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-q-factor">
                      {results.qFactor!.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Bandwidth (BW)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-bandwidth">
                      {results.bandwidth! >= 1000000
                        ? `${(results.bandwidth! / 1000000).toFixed(3)} MHz`
                        : results.bandwidth! >= 1000
                        ? `${(results.bandwidth! / 1000).toFixed(3)} kHz`
                        : `${results.bandwidth!.toFixed(3)} Hz`}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Cutoff Frequencies</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs">Lower (fL)</Label>
                        <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-lower-cutoff">
                          {results.lowerCutoff! >= 1000000
                            ? `${(results.lowerCutoff! / 1000000).toFixed(3)} MHz`
                            : results.lowerCutoff! >= 1000
                            ? `${(results.lowerCutoff! / 1000).toFixed(3)} kHz`
                            : `${results.lowerCutoff!.toFixed(3)} Hz`}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Upper (fH)</Label>
                        <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-upper-cutoff">
                          {results.upperCutoff! >= 1000000
                            ? `${(results.upperCutoff! / 1000000).toFixed(3)} MHz`
                            : results.upperCutoff! >= 1000
                            ? `${(results.upperCutoff! / 1000).toFixed(3)} kHz`
                            : `${results.upperCutoff!.toFixed(3)} Hz`}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Selectivity</Label>
                    <div className="p-3 bg-muted rounded-md text-base" data-testid="result-selectivity">
                      {results.selectivity}
                    </div>
                    <p className="text-xs text-muted-foreground">Higher Q = sharper tuning, narrower bandwidth</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formula:</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Q = fr / BW = fr / (fH - fL)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Also: Q = (ωL)/R = 1/(ωCR) for series RLC circuits
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

        {getCalculatorAccordion("q-factor") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("q-factor")!}
            calculatorId="q-factor"
          />
        )}
      </main>
    </div>
  );
}
