import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Force() {
  const [mass, setMass] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [force, setForce] = useState<number | null>(null);

  const calculate = () => {
    const m = parseFloat(mass);
    const a = parseFloat(acceleration);
    if (!isNaN(m) && !isNaN(a)) {
      setForce(m * a);
    }
  };

  const reset = () => {
    setMass("");
    setAcceleration("");
    setForce(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Mechanical" calculatorName="Force Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Force Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate force using Newton's second law of motion (F = m × a).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter mass and acceleration</CardDescription>
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
                <Label htmlFor="acceleration">Acceleration (a)</Label>
                <div className="relative">
                  <Input
                    id="acceleration"
                    type="number"
                    placeholder="Enter acceleration"
                    value={acceleration}
                    onChange={(e) => setAcceleration(e.target.value)}
                    className="pr-16"
                    data-testid="input-acceleration"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m/s²</span>
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
              <CardDescription>Calculated force</CardDescription>
            </CardHeader>
            <CardContent>
              {force !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Force</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-force">{force.toFixed(2)} N</p>
                  </div>
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">F = m × a</p>
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
