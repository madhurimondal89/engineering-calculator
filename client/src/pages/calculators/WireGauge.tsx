import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// AWG to diameter conversion (in inches)
// Using -4, -3, -2, -1 for 0000, 000, 00, 0 AWG (4/0, 3/0, 2/0, 1/0)
const awgData: { [key: number]: { diameter: number, area: number, resistance: number } } = {
  "-4": { diameter: 0.4600, area: 107.22, resistance: 0.1608 }, // 0000 AWG (4/0)
  "-3": { diameter: 0.4096, area: 85.01, resistance: 0.2028 }, // 000 AWG (3/0)
  "-2": { diameter: 0.3648, area: 67.43, resistance: 0.2557 }, // 00 AWG (2/0)
  "-1": { diameter: 0.3249, area: 53.48, resistance: 0.3224 }, // 0 AWG (1/0)
  0: { diameter: 0.3249, area: 53.48, resistance: 0.3224 },
  1: { diameter: 0.2893, area: 42.41, resistance: 0.4066 },
  2: { diameter: 0.2576, area: 33.62, resistance: 0.5127 },
  3: { diameter: 0.2294, area: 26.67, resistance: 0.6465 },
  4: { diameter: 0.2043, area: 21.15, resistance: 0.8152 },
  5: { diameter: 0.1819, area: 16.77, resistance: 1.028 },
  6: { diameter: 0.1620, area: 13.30, resistance: 1.296 },
  7: { diameter: 0.1443, area: 10.55, resistance: 1.634 },
  8: { diameter: 0.1285, area: 8.366, resistance: 2.061 },
  9: { diameter: 0.1144, area: 6.634, resistance: 2.599 },
  10: { diameter: 0.1019, area: 5.261, resistance: 3.277 },
  11: { diameter: 0.0907, area: 4.172, resistance: 4.132 },
  12: { diameter: 0.0808, area: 3.309, resistance: 5.211 },
  13: { diameter: 0.0720, area: 2.624, resistance: 6.571 },
  14: { diameter: 0.0641, area: 2.081, resistance: 8.286 },
  15: { diameter: 0.0571, area: 1.650, resistance: 10.45 },
  16: { diameter: 0.0508, area: 1.309, resistance: 13.17 },
  17: { diameter: 0.0453, area: 1.038, resistance: 16.61 },
  18: { diameter: 0.0403, area: 0.8230, resistance: 20.95 },
  19: { diameter: 0.0359, area: 0.6527, resistance: 26.42 },
  20: { diameter: 0.0320, area: 0.5176, resistance: 33.31 },
  21: { diameter: 0.0285, area: 0.4105, resistance: 42.00 },
  22: { diameter: 0.0253, area: 0.3255, resistance: 52.96 },
  23: { diameter: 0.0226, area: 0.2582, resistance: 66.79 },
  24: { diameter: 0.0201, area: 0.2047, resistance: 84.22 },
  25: { diameter: 0.0179, area: 0.1624, resistance: 106.2 },
  26: { diameter: 0.0159, area: 0.1288, resistance: 133.9 },
  27: { diameter: 0.0142, area: 0.1022, resistance: 168.6 },
  28: { diameter: 0.0126, area: 0.0810, resistance: 212.9 },
  29: { diameter: 0.0113, area: 0.0642, resistance: 268.5 },
  30: { diameter: 0.0100, area: 0.0509, resistance: 338.6 },
  31: { diameter: 0.0089, area: 0.0404, resistance: 426.9 },
  32: { diameter: 0.0080, area: 0.0320, resistance: 538.3 },
  33: { diameter: 0.0071, area: 0.0254, resistance: 678.8 },
  34: { diameter: 0.0063, area: 0.0201, resistance: 856.0 },
  35: { diameter: 0.0056, area: 0.0159, resistance: 1079 },
  36: { diameter: 0.0050, area: 0.0126, resistance: 1361 },
  37: { diameter: 0.0045, area: 0.0100, resistance: 1716 },
  38: { diameter: 0.0040, area: 0.0079, resistance: 2164 },
  39: { diameter: 0.0035, area: 0.0063, resistance: 2728 },
  40: { diameter: 0.0031, area: 0.0050, resistance: 3441 },
};

// Parse AWG input, handling both numeric and "X/0" format (e.g., "4/0", "3/0", "2/0", "1/0")
function parseAWGInput(input: string): number | null {
  const trimmed = input.trim();
  
  // Handle "X/0" format (e.g., "4/0", "3/0", "2/0", "1/0")
  const oughtMatch = trimmed.match(/^([1-4])\/0$/);
  if (oughtMatch) {
    const oughtCount = parseInt(oughtMatch[1]);
    return -oughtCount; // 4/0 → -4, 3/0 → -3, 2/0 → -2, 1/0 → -1
  }
  
  // Handle numeric input
  const numeric = parseInt(trimmed);
  if (!isNaN(numeric)) {
    return numeric;
  }
  
  return null;
}

// Format AWG number for display (convert -4 to "4/0", -3 to "3/0", etc.)
function formatAWGDisplay(awg: number): string {
  if (awg === -4) return "0000 (4/0)";
  if (awg === -3) return "000 (3/0)";
  if (awg === -2) return "00 (2/0)";
  if (awg === -1) return "0 (1/0)";
  return awg.toString();
}

export default function WireGauge() {
  const [awgInput, setAwgInput] = useState("");
  const [diameterInput, setDiameterInput] = useState("");
  const [result, setResult] = useState<{
    awg: number;
    diameter: number;
    area: number;
    resistance: number;
  } | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("awg");

  const calculateFromAWG = () => {
    setError("");
    setResult(null);

    const awg = parseAWGInput(awgInput);

    if (awg === null) {
      setError("Please enter a valid AWG number (e.g., 12, 4/0, 3/0, 2/0, 1/0).");
      return;
    }

    const wireData = awgData[awg];
    if (!wireData) {
      setError("AWG value not found. Supported range: 4/0 (0000) through 40 AWG.");
      return;
    }

    setResult({
      awg,
      diameter: wireData.diameter,
      area: wireData.area,
      resistance: wireData.resistance,
    });
  };

  const calculateFromDiameter = () => {
    setError("");
    setResult(null);

    const diameter = parseFloat(diameterInput);

    if (isNaN(diameter) || diameter <= 0) {
      setError("Please enter a valid diameter greater than zero.");
      return;
    }

    // Find closest AWG
    let closestAWG = 0;
    let minDiff = Infinity;

    for (const [awgStr, data] of Object.entries(awgData)) {
      const diff = Math.abs(data.diameter - diameter);
      if (diff < minDiff) {
        minDiff = diff;
        closestAWG = parseInt(awgStr);
      }
    }

    const wireData = awgData[closestAWG];
    setResult({
      awg: closestAWG,
      diameter: wireData.diameter,
      area: wireData.area,
      resistance: wireData.resistance,
    });
  };

  const reset = () => {
    setAwgInput("");
    setDiameterInput("");
    setResult(null);
    setError("");
  };

  const accordionContent = getCalculatorAccordion("wire-gauge");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Wire & Cable" calculatorName="Wire Gauge Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Wire Gauge Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Convert between AWG and metric wire sizes (diameter, area, resistance)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose conversion direction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="awg" data-testid="tab-awg">From AWG</TabsTrigger>
                  <TabsTrigger value="diameter" data-testid="tab-diameter">From Diameter</TabsTrigger>
                </TabsList>
                
                <TabsContent value="awg" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="awg">AWG Number</Label>
                    <Input
                      id="awg"
                      type="text"
                      placeholder="e.g., 12, 4/0, 3/0"
                      value={awgInput}
                      onChange={(e) => setAwgInput(e.target.value)}
                      data-testid="input-awg"
                    />
                    <p className="text-xs text-muted-foreground">Enter AWG: 4/0 through 40 (e.g., 4/0, 12, 18, 24)</p>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={calculateFromAWG} className="flex-1" data-testid="button-calculate-awg">
                      Calculate
                    </Button>
                    <Button onClick={reset} variant="outline" data-testid="button-reset">
                      Reset
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="diameter" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="diameter">Wire Diameter (inches)</Label>
                    <Input
                      id="diameter"
                      type="number"
                      step="any"
                      placeholder="e.g., 0.0808 (12 AWG)"
                      value={diameterInput}
                      onChange={(e) => setDiameterInput(e.target.value)}
                      data-testid="input-diameter"
                    />
                    <p className="text-xs text-muted-foreground">Enter diameter in inches</p>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={calculateFromDiameter} className="flex-1" data-testid="button-calculate-diameter">
                      Find Closest AWG
                    </Button>
                    <Button onClick={reset} variant="outline" data-testid="button-reset-diameter">
                      Reset
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

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
              <CardDescription>Wire specifications</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4" data-testid="container-results">
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">AWG:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-awg">
                        {formatAWGDisplay(result.awg)}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Diameter:</span>
                      <span className="text-lg font-mono" data-testid="text-result-diameter">
                        {result.diameter.toFixed(4)} in
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Diameter (mm):</span>
                      <span className="text-lg font-mono" data-testid="text-result-diameter-mm">
                        {(result.diameter * 25.4).toFixed(3)} mm
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Cross-Section:</span>
                      <span className="text-lg font-mono" data-testid="text-result-area">
                        {result.area.toFixed(2)} kcmil
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Cross-Section (mm²):</span>
                      <span className="text-lg font-mono" data-testid="text-result-area-mm">
                        {(result.area * 0.5067).toFixed(2)} mm²
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Resistance:</span>
                      <span className="text-lg font-mono" data-testid="text-result-resistance">
                        {result.resistance.toFixed(3)} Ω/kft
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Resistance (Ω/km):</span>
                      <span className="text-lg font-mono" data-testid="text-result-resistance-km">
                        {(result.resistance * 3.281).toFixed(3)} Ω/km
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• kcmil = 1000 circular mils</p>
                    <p>• Resistance values are for copper at 20°C (68°F)</p>
                    <p>• Smaller AWG numbers = thicker wire</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground" data-testid="text-no-results">
                  Enter values and click Calculate to see wire specifications.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {accordionContent && (
          <div className="mt-8">
            <CalculatorAccordion calculatorId="wire-gauge" content={accordionContent} />
          </div>
        )}
      </main>
    </div>
  );
}
