import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Velocity() {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [unit, setUnit] = useState<"m/s" | "km/h" | "mph">("m/s");
  const [velocity, setVelocity] = useState<number | null>(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);
    
    if (!isNaN(d) && !isNaN(t) && t > 0) {
      setVelocity(d / t);
    }
  };

  const reset = () => {
    setDistance("");
    setTime("");
    setUnit("m/s");
    setVelocity(null);
  };

  const getDistanceUnit = () => {
    switch (unit) {
      case "km/h": return "km";
      case "mph": return "miles";
      default: return "m";
    }
  };

  const getTimeUnit = () => {
    switch (unit) {
      case "m/s": return "s";
      default: return "h";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="General Science" calculatorName="Velocity Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Velocity Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate velocity from distance and time (v = d / t).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter distance and time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="unit">Velocity Unit</Label>
                <Select value={unit} onValueChange={(val: "m/s" | "km/h" | "mph") => setUnit(val)}>
                  <SelectTrigger id="unit" data-testid="select-unit">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m/s">Meters per second (m/s)</SelectItem>
                    <SelectItem value="km/h">Kilometers per hour (km/h)</SelectItem>
                    <SelectItem value="mph">Miles per hour (mph)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance">Distance</Label>
                <div className="relative">
                  <Input
                    id="distance"
                    type="number"
                    placeholder="Enter distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="pr-16"
                    data-testid="input-distance"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    {getDistanceUnit()}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
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
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    {getTimeUnit()}
                  </span>
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
              <CardDescription>Calculated velocity</CardDescription>
            </CardHeader>
            <CardContent>
              {velocity !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Velocity</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-velocity">
                      {velocity.toFixed(2)} {unit}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">v = d / t</p>
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

        {getCalculatorAccordion("velocity-calculator") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("velocity-calculator")!}
            calculatorId="velocity-calculator"
          />
        )}
      </main>
    </div>
  );
}
