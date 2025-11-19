import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Concrete() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [unit, setUnit] = useState<"m" | "ft">("m");
  const [volume, setVolume] = useState<number | null>(null);
  const [volumeCubicYards, setVolumeCubicYards] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setVolume(null);
    setVolumeCubicYards(null);

    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    
    if (isNaN(l) || isNaN(w) || isNaN(d)) {
      setError("Please enter valid numbers for all dimensions.");
      return;
    }

    if (l <= 0 || w <= 0 || d <= 0) {
      setError("All dimensions must be greater than zero.");
      return;
    }

    const vol = l * w * d;
    setVolume(vol);

    // Convert to cubic yards
    if (unit === "m") {
      // 1 cubic meter = 1.30795 cubic yards
      setVolumeCubicYards(vol * 1.30795);
    } else {
      // 1 cubic foot = 0.037037 cubic yards
      setVolumeCubicYards(vol * 0.037037);
    }
  };

  const reset = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setUnit("m");
    setVolume(null);
    setVolumeCubicYards(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Civil" calculatorName="Concrete Volume Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Concrete Volume Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate concrete volume needed for slabs, foundations, and other rectangular structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Dimensions</CardTitle>
              <CardDescription>Enter slab dimensions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="unit">Unit of Measurement</Label>
                <Select value={unit} onValueChange={(val: "m" | "ft") => setUnit(val)}>
                  <SelectTrigger id="unit" data-testid="select-unit">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">Meters (m)</SelectItem>
                    <SelectItem value="ft">Feet (ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="length">Length</Label>
                <div className="relative">
                  <Input
                    id="length"
                    type="number"
                    step="any"
                    placeholder="Enter length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="pr-12"
                    data-testid="input-length"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{unit}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="width">Width</Label>
                <div className="relative">
                  <Input
                    id="width"
                    type="number"
                    step="any"
                    placeholder="Enter width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="pr-12"
                    data-testid="input-width"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{unit}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="depth">Depth/Thickness</Label>
                <div className="relative">
                  <Input
                    id="depth"
                    type="number"
                    step="any"
                    placeholder="Enter depth"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="pr-12"
                    data-testid="input-depth"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{unit}</span>
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
              <CardDescription>Concrete volume required</CardDescription>
            </CardHeader>
            <CardContent>
              {volume !== null ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Volume</p>
                    <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-volume">
                      {volume.toFixed(2)} {unit}³
                    </p>
                  </div>
                  {volumeCubicYards !== null && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Cubic Yards</p>
                      <p className="text-xl font-bold font-mono" data-testid="result-cubic-yards">
                        {volumeCubicYards.toFixed(2)} yd³
                      </p>
                    </div>
                  )}
                  <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Formula used:</p>
                    <p className="font-mono">Volume = Length × Width × Depth</p>
                    <p className="text-xs mt-2">
                      {unit === "m" ? "1 m³ = 1.30795 yd³" : "1 ft³ = 0.037037 yd³"}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Enter dimensions and click Calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("concrete-volume") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("concrete-volume")!}
            calculatorId="concrete-volume"
          />
        )}
      </main>
    </div>
  );
}
