import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Density() {
  const [mass, setMass] = useState("");
  const [volume, setVolume] = useState("");
  const [density, setDensity] = useState<number | null>(null);

  const calculate = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);
    
    if (!isNaN(m) && !isNaN(v) && v > 0) {
      setDensity(m / v);
    }
  };

  const reset = () => {
    setMass("");
    setVolume("");
    setDensity(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="General Science" calculatorName="Density Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Density Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate density from mass and volume (ρ = m / V).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter mass and volume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mass">Mass (m)</Label>
                <div className="relative">
                  <Input
                    id="mass"
                    type="number"
                    placeholder="Enter mass"
                    value={mass}
                    onChange={(e) => setMass(e.target.value)}
                    className="pr-12"
                    data-testid="input-mass"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">kg</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volume">Volume (V)</Label>
                <div className="relative">
                  <Input
                    id="volume"
                    type="number"
                    placeholder="Enter volume"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="pr-12"
                    data-testid="input-volume"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m³</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">Calculate</Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">Reset</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Calculated density</CardDescription>
            </CardHeader>
            <CardContent>
              {density !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Density</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-density">
                      {density.toFixed(2)} kg/m³
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">ρ = m / V</p>
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

        {getCalculatorAccordion("density-calculator") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("density-calculator")!}
            calculatorId="density-calculator"
          />
        )}
      </main>
    </div>
  );
}
