import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// NEC Table 1: Conduit internal area (in²)
const conduitArea: { [key: string]: { [key: string]: number } } = {
  "1/2": { EMT: 0.304, PVC: 0.285, Rigid: 0.314 },
  "3/4": { EMT: 0.533, PVC: 0.508, Rigid: 0.549 },
  "1": { EMT: 0.864, PVC: 0.832, Rigid: 0.887 },
  "1-1/4": { EMT: 1.496, PVC: 1.453, Rigid: 1.610 },
  "1-1/2": { EMT: 2.036, PVC: 1.986, Rigid: 2.071 },
  "2": { EMT: 3.356, PVC: 3.269, Rigid: 3.408 },
  "2-1/2": { EMT: 5.858, PVC: 5.793, Rigid: 4.866 },
  "3": { EMT: 8.846, PVC: 8.688, Rigid: 7.499 },
  "4": { EMT: 14.753, PVC: 14.314, Rigid: 12.882 },
};

// Wire cross-sectional area with insulation (in²)
const wireArea: { [key: number]: number } = {
  14: 0.0097,
  12: 0.0133,
  10: 0.0211,
  8: 0.0366,
  6: 0.0507,
  4: 0.0824,
  3: 0.0973,
  2: 0.1158,
  1: 0.1562,
  0: 0.1855,
  "-1": 0.2223,
  "-2": 0.2642,
  "-3": 0.3117,
  "-4": 0.3718,
};

export default function ConduitFill() {
  const [conduitSize, setConduitSize] = useState<string>("1/2");
  const [conduitType, setConduitType] = useState<string>("EMT");
  const [wireGauge, setWireGauge] = useState<string>("12");
  const [result, setResult] = useState<{
    maxWires: number;
    conduitArea: number;
    wireArea: number;
    fillPercent: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const conduitData = conduitArea[conduitSize];
    if (!conduitData) {
      setError("Conduit size not found.");
      return;
    }

    const condArea = conduitData[conduitType];
    if (!condArea) {
      setError("Conduit type not found.");
      return;
    }

    const awgNum = parseInt(wireGauge);
    const wireAreaVal = wireArea[awgNum];
    if (!wireAreaVal) {
      setError("Wire gauge not found.");
      return;
    }

    // NEC Article 344.22: Maximum fill is 40% for 3+ wires
    const maxFillPercent = 0.40;
    const maxFillArea = condArea * maxFillPercent;
    
    // Calculate maximum number of wires
    const maxWires = Math.floor(maxFillArea / wireAreaVal);
    const actualFillPercent = (maxWires * wireAreaVal / condArea) * 100;

    setResult({
      maxWires,
      conduitArea: condArea,
      wireArea: wireAreaVal,
      fillPercent: actualFillPercent,
    });
  };

  const reset = () => {
    setConduitSize("1/2");
    setConduitType("EMT");
    setWireGauge("12");
    setResult(null);
    setError("");
  };

  const accordionContent = getCalculatorAccordion("conduit-fill");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Wire & Cable" calculatorName="Conduit Fill Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Conduit Fill Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate maximum number of wires in conduit per NEC fill requirements (40% max fill)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Select conduit and wire specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="conduit-type">Conduit Type</Label>
                  <Select value={conduitType} onValueChange={setConduitType}>
                    <SelectTrigger id="conduit-type" data-testid="select-conduit-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EMT">EMT (Electrical Metallic Tubing)</SelectItem>
                      <SelectItem value="PVC">PVC (Schedule 40)</SelectItem>
                      <SelectItem value="Rigid">Rigid Metal Conduit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conduit-size">Conduit Size</Label>
                  <Select value={conduitSize} onValueChange={setConduitSize}>
                    <SelectTrigger id="conduit-size" data-testid="select-conduit-size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1/2">1/2"</SelectItem>
                      <SelectItem value="3/4">3/4"</SelectItem>
                      <SelectItem value="1">1"</SelectItem>
                      <SelectItem value="1-1/4">1-1/4"</SelectItem>
                      <SelectItem value="1-1/2">1-1/2"</SelectItem>
                      <SelectItem value="2">2"</SelectItem>
                      <SelectItem value="2-1/2">2-1/2"</SelectItem>
                      <SelectItem value="3">3"</SelectItem>
                      <SelectItem value="4">4"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wire-gauge">Wire Gauge (AWG)</Label>
                  <Select value={wireGauge} onValueChange={setWireGauge}>
                    <SelectTrigger id="wire-gauge" data-testid="select-wire-gauge">
                      <SelectValue placeholder="Select AWG" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="14">14 AWG</SelectItem>
                      <SelectItem value="12">12 AWG</SelectItem>
                      <SelectItem value="10">10 AWG</SelectItem>
                      <SelectItem value="8">8 AWG</SelectItem>
                      <SelectItem value="6">6 AWG</SelectItem>
                      <SelectItem value="4">4 AWG</SelectItem>
                      <SelectItem value="2">2 AWG</SelectItem>
                      <SelectItem value="1">1 AWG</SelectItem>
                      <SelectItem value="0">1/0 AWG</SelectItem>
                      <SelectItem value="-1">2/0 AWG</SelectItem>
                      <SelectItem value="-2">3/0 AWG</SelectItem>
                      <SelectItem value="-3">4/0 AWG</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Includes insulation thickness</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate Fill
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
              <CardDescription>Maximum conductor fill</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4" data-testid="container-results">
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Max Conductors:</span>
                      <span className="text-4xl font-mono font-bold text-primary" data-testid="text-result-max-wires">
                        {result.maxWires}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Fill Percentage:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-fill-percent">
                        {result.fillPercent.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Conduit Area:</span>
                      <span className="text-lg font-mono" data-testid="text-result-conduit-area">
                        {result.conduitArea.toFixed(3)} in²
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Wire Area (each):</span>
                      <span className="text-lg font-mono" data-testid="text-result-wire-area">
                        {result.wireArea.toFixed(4)} in²
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold">NEC Requirements:</p>
                    <p>• Maximum 40% fill for 3+ conductors</p>
                    <p>• Maximum 31% fill for 2 conductors</p>
                    <p>• Maximum 53% fill for 1 conductor</p>
                    <p>• Includes insulation thickness</p>
                    <p>• Based on NEC Chapter 9, Table 1 & 4</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground" data-testid="text-no-results">
                  Select conduit and wire specifications, then click Calculate.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {accordionContent && (
          <div className="mt-8">
            <CalculatorAccordion calculatorId="conduit-fill" content={accordionContent} />
          </div>
        )}
      </main>
    </div>
  );
}
