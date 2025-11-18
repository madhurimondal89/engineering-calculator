import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Acceleration() {
  const [initialVelocity, setInitialVelocity] = useState("");
  const [finalVelocity, setFinalVelocity] = useState("");
  const [time, setTime] = useState("");
  const [acceleration, setAcceleration] = useState<number | null>(null);

  const calculate = () => {
    const vi = parseFloat(initialVelocity);
    const vf = parseFloat(finalVelocity);
    const t = parseFloat(time);
    
    if (!isNaN(vi) && !isNaN(vf) && !isNaN(t) && t > 0) {
      setAcceleration((vf - vi) / t);
    }
  };

  const reset = () => {
    setInitialVelocity("");
    setFinalVelocity("");
    setTime("");
    setAcceleration(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="General Science" calculatorName="Acceleration Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Acceleration Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate acceleration from velocity change and time (a = Δv / t).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter velocities and time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="initialVelocity">Initial Velocity (v₀)</Label>
                <div className="relative">
                  <Input
                    id="initialVelocity"
                    type="number"
                    placeholder="Enter initial velocity"
                    value={initialVelocity}
                    onChange={(e) => setInitialVelocity(e.target.value)}
                    className="pr-16"
                    data-testid="input-initial-velocity"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m/s</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="finalVelocity">Final Velocity (v)</Label>
                <div className="relative">
                  <Input
                    id="finalVelocity"
                    type="number"
                    placeholder="Enter final velocity"
                    value={finalVelocity}
                    onChange={(e) => setFinalVelocity(e.target.value)}
                    className="pr-16"
                    data-testid="input-final-velocity"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">m/s</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time (t)</Label>
                <div className="relative">
                  <Input
                    id="time"
                    type="number"
                    placeholder="Enter time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="pr-12"
                    data-testid="input-time"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">s</span>
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
              <CardDescription>Calculated acceleration</CardDescription>
            </CardHeader>
            <CardContent>
              {acceleration !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Acceleration</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-acceleration">
                      {acceleration.toFixed(2)} m/s²
                    </p>
                  </div>
                  {acceleration > 0 && (
                    <p className="text-sm text-muted-foreground">Positive acceleration (speeding up)</p>
                  )}
                  {acceleration < 0 && (
                    <p className="text-sm text-muted-foreground">Negative acceleration (slowing down)</p>
                  )}
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">a = (v - v₀) / t</p>
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
