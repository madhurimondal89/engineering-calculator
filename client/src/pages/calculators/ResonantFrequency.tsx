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
  resonantFrequency?: number;
  angularFrequency?: number;
  period?: number;
  wavelength?: number;
}

export default function ResonantFrequency() {
  const [inductance, setInductance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const L = parseFloat(inductance) / 1000; // Convert mH to H
    const C = parseFloat(capacitance) / 1000000; // Convert µF to F

    if (isNaN(L) || isNaN(C)) {
      setError("Please enter valid numbers for both fields.");
      return;
    }

    if (L <= 0 || C <= 0) {
      setError("Inductance and capacitance must be positive values.");
      return;
    }

    // Calculate resonant frequency: fr = 1 / (2π√LC)
    const fr = 1 / (2 * Math.PI * Math.sqrt(L * C));
    
    // Calculate angular frequency: ω = 2πf
    const omega = 2 * Math.PI * fr;
    
    // Calculate period: T = 1 / f
    const period = 1 / fr;
    
    // Calculate wavelength (assuming speed of light for EM waves)
    const c = 299792458; // Speed of light in m/s
    const wavelength = c / fr;

    setResults({
      resonantFrequency: fr,
      angularFrequency: omega,
      period,
      wavelength,
    });
  };

  const reset = () => {
    setInductance("");
    setCapacitance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Resonant Frequency Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Resonant Frequency Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate resonant frequency of LC circuits using fr = 1/(2π√LC).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter inductance and capacitance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
              <CardDescription>Resonance parameters</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Resonant Frequency (fr)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-frequency">
                      {results.resonantFrequency! >= 1000000
                        ? `${(results.resonantFrequency! / 1000000).toFixed(3)} MHz`
                        : results.resonantFrequency! >= 1000
                        ? `${(results.resonantFrequency! / 1000).toFixed(3)} kHz`
                        : `${results.resonantFrequency!.toFixed(3)} Hz`}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Angular Frequency (ω)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-angular-frequency">
                      {results.angularFrequency!.toExponential(4)} rad/s
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Period (T)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-period">
                      {results.period! >= 1
                        ? `${results.period!.toFixed(6)} s`
                        : results.period! >= 0.001
                        ? `${(results.period! * 1000).toFixed(6)} ms`
                        : `${(results.period! * 1000000).toFixed(6)} µs`}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Wavelength (λ)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-wavelength">
                      {results.wavelength! >= 1000
                        ? `${(results.wavelength! / 1000).toFixed(3)} km`
                        : `${results.wavelength!.toFixed(3)} m`}
                    </div>
                    <p className="text-xs text-muted-foreground">For electromagnetic waves at this frequency</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formula:</p>
                    <p className="text-sm text-muted-foreground">
                      fr = 1 / (2π√LC)
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      At resonance, XL = XC and impedance is minimum in series LC circuits
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

        {getCalculatorAccordion("resonant-frequency") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("resonant-frequency")!}
            calculatorId="resonant-frequency"
          />
        )}
      </main>
    </div>
  );
}
