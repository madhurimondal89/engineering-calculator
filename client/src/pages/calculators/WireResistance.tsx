import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// Resistivity at 20°C (ohm-meters)
const resistivity = {
  copper: 1.68e-8,
  aluminum: 2.82e-8,
  silver: 1.59e-8,
  gold: 2.44e-8,
};

export default function WireResistance() {
  const [material, setMaterial] = useState<string>("copper");
  const [length, setLength] = useState("");
  const [diameter, setDiameter] = useState("");
  const [lengthUnit, setLengthUnit] = useState<string>("m");
  const [diameterUnit, setDiameterUnit] = useState<string>("mm");
  const [result, setResult] = useState<{
    resistance: number;
    area: number;
    material: string;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const L = parseFloat(length);
    const d = parseFloat(diameter);

    if (isNaN(L) || isNaN(d)) {
      setError("Please enter valid numbers for length and diameter.");
      return;
    }

    if (L <= 0 || d <= 0) {
      setError("All values must be greater than zero.");
      return;
    }

    // Convert to meters
    let lengthMeters = L;
    if (lengthUnit === "ft") lengthMeters = L * 0.3048;
    else if (lengthUnit === "cm") lengthMeters = L / 100;
    else if (lengthUnit === "mm") lengthMeters = L / 1000;

    // Convert to meters for diameter
    let diameterMeters = d;
    if (diameterUnit === "mm") diameterMeters = d / 1000;
    else if (diameterUnit === "cm") diameterMeters = d / 100;
    else if (diameterUnit === "in") diameterMeters = d * 0.0254;

    // Calculate cross-sectional area: A = π × (d/2)²
    const area = Math.PI * Math.pow(diameterMeters / 2, 2);

    // Calculate resistance: R = ρ × L / A
    const rho = resistivity[material as keyof typeof resistivity];
    const resistance = (rho * lengthMeters) / area;

    setResult({
      resistance,
      area: area * 1e6, // Convert to mm²
      material,
    });
  };

  const reset = () => {
    setMaterial("copper");
    setLength("");
    setDiameter("");
    setLengthUnit("m");
    setDiameterUnit("mm");
    setResult(null);
    setError("");
  };

  const accordionContent = getCalculatorAccordion("wire-resistance");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Wire & Cable" calculatorName="Wire Resistance Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Wire Resistance Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate wire resistance based on material, length, and cross-sectional area (R = ρ × L / A)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter wire specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="material">Wire Material</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger id="material" data-testid="select-material">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="copper">Copper (ρ = 1.68×10⁻⁸ Ω·m)</SelectItem>
                      <SelectItem value="aluminum">Aluminum (ρ = 2.82×10⁻⁸ Ω·m)</SelectItem>
                      <SelectItem value="silver">Silver (ρ = 1.59×10⁻⁸ Ω·m)</SelectItem>
                      <SelectItem value="gold">Gold (ρ = 2.44×10⁻⁸ Ω·m)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="length">Wire Length</Label>
                  <div className="flex gap-2">
                    <Input
                      id="length"
                      type="number"
                      step="any"
                      placeholder="e.g., 100"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="flex-1"
                      data-testid="input-length"
                    />
                    <Select value={lengthUnit} onValueChange={setLengthUnit}>
                      <SelectTrigger className="w-24" data-testid="select-length-unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m">m</SelectItem>
                        <SelectItem value="ft">ft</SelectItem>
                        <SelectItem value="cm">cm</SelectItem>
                        <SelectItem value="mm">mm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diameter">Wire Diameter</Label>
                  <div className="flex gap-2">
                    <Input
                      id="diameter"
                      type="number"
                      step="any"
                      placeholder="e.g., 2.5"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      className="flex-1"
                      data-testid="input-diameter"
                    />
                    <Select value={diameterUnit} onValueChange={setDiameterUnit}>
                      <SelectTrigger className="w-24" data-testid="select-diameter-unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm">mm</SelectItem>
                        <SelectItem value="cm">cm</SelectItem>
                        <SelectItem value="in">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate Resistance
                </Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">
                  Reset
                </Button>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription data-testid="text-error">{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Wire resistance calculation</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4" data-testid="container-results">
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Resistance:</span>
                      <span className="text-3xl font-mono font-bold text-primary" data-testid="text-result-resistance">
                        {result.resistance < 1 
                          ? `${(result.resistance * 1000).toFixed(3)} mΩ`
                          : `${result.resistance.toFixed(6)} Ω`
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Material:</span>
                      <span className="text-lg font-mono capitalize" data-testid="text-result-material">
                        {result.material}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Cross-Section:</span>
                      <span className="text-lg font-mono" data-testid="text-result-area">
                        {result.area.toFixed(3)} mm²
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold">Formula Used:</p>
                    <p>R = ρ × L / A</p>
                    <p>where ρ = resistivity, L = length, A = cross-sectional area</p>
                    <p className="mt-2">• Calculated at 20°C (68°F)</p>
                    <p>• Resistance increases with temperature</p>
                    <p>• Copper temp coefficient: +0.393% per °C</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground" data-testid="text-no-results">
                  Enter wire specifications and click Calculate to see resistance.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {accordionContent && (
          <div className="mt-8">
            <CalculatorAccordion calculatorId="wire-resistance" content={accordionContent} />
          </div>
        )}
      </main>
    </div>
  );
}
