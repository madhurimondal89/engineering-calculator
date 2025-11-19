import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Beam() {
  const [load, setLoad] = useState("");
  const [length, setLength] = useState("");
  const [youngModulus, setYoungModulus] = useState("");
  const [momentOfInertia, setMomentOfInertia] = useState("");
  const [deflection, setDeflection] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(load);
    const l = parseFloat(length);
    const e = parseFloat(youngModulus);
    const i = parseFloat(momentOfInertia);
    
    if (!isNaN(w) && !isNaN(l) && !isNaN(e) && !isNaN(i) && e > 0 && i > 0) {
      // Maximum deflection for simply supported beam with uniform load: δ = (5wL⁴)/(384EI)
      const delta = (5 * w * Math.pow(l, 4)) / (384 * e * i);
      setDeflection(delta);
    }
  };

  const reset = () => {
    setLoad("");
    setLength("");
    setYoungModulus("");
    setMomentOfInertia("");
    setDeflection(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Civil" calculatorName="Beam Deflection Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Beam Deflection Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate maximum deflection for a simply supported beam under uniform distributed load.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter beam properties</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="load">Uniform Load (w)</Label>
                <div className="relative">
                  <Input
                    id="load"
                    type="number"
                    placeholder="Enter load per unit length"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                    className="pr-16"
                    data-testid="input-load"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">N/m</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="length">Beam Length (L)</Label>
                <div className="relative">
                  <Input
                    id="length"
                    type="number"
                    placeholder="Enter beam length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="pr-12"
                    data-testid="input-length"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="youngModulus">Young's Modulus (E)</Label>
                <div className="relative">
                  <Input
                    id="youngModulus"
                    type="number"
                    placeholder="Enter Young's modulus"
                    value={youngModulus}
                    onChange={(e) => setYoungModulus(e.target.value)}
                    className="pr-16"
                    data-testid="input-young-modulus"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">GPa</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="momentOfInertia">Moment of Inertia (I)</Label>
                <div className="relative">
                  <Input
                    id="momentOfInertia"
                    type="number"
                    placeholder="Enter moment of inertia"
                    value={momentOfInertia}
                    onChange={(e) => setMomentOfInertia(e.target.value)}
                    className="pr-12"
                    data-testid="input-moment"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m⁴</span>
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
              <CardDescription>Maximum deflection</CardDescription>
            </CardHeader>
            <CardContent>
              {deflection !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Maximum Deflection</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-deflection">
                      {deflection < 0.001 ? deflection.toExponential(4) : deflection.toFixed(6)} m
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">δ = (5wL⁴)/(384EI)</p>
                    <p className="text-xs mt-2">For simply supported beam with uniform distributed load</p>
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

        {getCalculatorAccordion("beam-calculator") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("beam-calculator")!}
            calculatorId="beam-calculator"
          />
        )}
      </main>
    </div>
  );
}
