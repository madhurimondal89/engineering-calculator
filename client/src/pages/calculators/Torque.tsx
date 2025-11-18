import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Torque() {
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");
  const [torque, setTorque] = useState<number | null>(null);

  const calculate = () => {
    const f = parseFloat(force);
    const d = parseFloat(distance);
    if (!isNaN(f) && !isNaN(d)) {
      setTorque(f * d);
    }
  };

  const reset = () => {
    setForce("");
    setDistance("");
    setTorque(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Mechanical" calculatorName="Torque Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Torque Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate torque from force and distance (τ = F × d).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter force and distance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="force">Force (F)</Label>
                <div className="relative">
                  <Input
                    id="force"
                    type="number"
                    placeholder="Enter force"
                    value={force}
                    onChange={(e) => setForce(e.target.value)}
                    className="pr-12"
                    data-testid="input-force"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">N</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance">Distance (d)</Label>
                <div className="relative">
                  <Input
                    id="distance"
                    type="number"
                    placeholder="Enter distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="pr-12"
                    data-testid="input-distance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m</span>
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
              <CardDescription>Calculated torque</CardDescription>
            </CardHeader>
            <CardContent>
              {torque !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Torque</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-torque">{torque.toFixed(2)} N⋅m</p>
                  </div>
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">τ = F × d</p>
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
