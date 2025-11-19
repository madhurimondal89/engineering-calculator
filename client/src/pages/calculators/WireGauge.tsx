import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// SWG (Standard Wire Gauge / British Standard Wire Gauge) data
// Area in kcmil, Resistance in Ω/kft for copper wire at 20°C
// Formula: area (kcmil) = (diameter in mils)² / 1000
//          resistance (Ω/kft) = 10.371 × 1000 / circular mils = 10371 / (diameter in mils)²
const swgData: Record<string | number, { diameter: number, area: number, resistance: number }> = {
  "7/0": { diameter: 0.5000, area: 250.00, resistance: 0.0415 },
  "6/0": { diameter: 0.4640, area: 215.30, resistance: 0.0482 },
  "5/0": { diameter: 0.4320, area: 186.62, resistance: 0.0556 },
  "4/0": { diameter: 0.4000, area: 160.00, resistance: 0.0648 },
  "3/0": { diameter: 0.3720, area: 138.38, resistance: 0.0749 },
  "2/0": { diameter: 0.3480, area: 121.10, resistance: 0.0857 },
  0: { diameter: 0.3240, area: 104.98, resistance: 0.0988 },
  1: { diameter: 0.3000, area: 90.00, resistance: 0.1152 },
  2: { diameter: 0.2760, area: 76.18, resistance: 0.1362 },
  3: { diameter: 0.2520, area: 63.50, resistance: 0.1633 },
  4: { diameter: 0.2320, area: 53.82, resistance: 0.1927 },
  5: { diameter: 0.2120, area: 44.94, resistance: 0.2308 },
  6: { diameter: 0.1920, area: 36.86, resistance: 0.2814 },
  7: { diameter: 0.1760, area: 30.98, resistance: 0.3348 },
  8: { diameter: 0.1600, area: 25.60, resistance: 0.4051 },
  9: { diameter: 0.1440, area: 20.74, resistance: 0.5003 },
  10: { diameter: 0.1280, area: 16.38, resistance: 0.6331 },
  11: { diameter: 0.1160, area: 13.46, resistance: 0.7706 },
  12: { diameter: 0.1040, area: 10.82, resistance: 0.9588 },
  13: { diameter: 0.0920, area: 8.464, resistance: 1.226 },
  14: { diameter: 0.0800, area: 6.400, resistance: 1.620 },
  15: { diameter: 0.0720, area: 5.184, resistance: 2.001 },
  16: { diameter: 0.0640, area: 4.096, resistance: 2.532 },
  17: { diameter: 0.0560, area: 3.136, resistance: 3.307 },
  18: { diameter: 0.0480, area: 2.304, resistance: 4.501 },
  19: { diameter: 0.0400, area: 1.600, resistance: 6.482 },
  20: { diameter: 0.0360, area: 1.296, resistance: 8.001 },
  21: { diameter: 0.0320, area: 1.024, resistance: 10.13 },
  22: { diameter: 0.0280, area: 0.784, resistance: 13.23 },
  23: { diameter: 0.0240, area: 0.576, resistance: 18.00 },
  24: { diameter: 0.0220, area: 0.484, resistance: 21.41 },
  25: { diameter: 0.0200, area: 0.400, resistance: 25.93 },
  26: { diameter: 0.0180, area: 0.324, resistance: 32.00 },
  27: { diameter: 0.0164, area: 0.269, resistance: 38.55 },
  28: { diameter: 0.0148, area: 0.219, resistance: 47.35 },
  29: { diameter: 0.0136, area: 0.185, resistance: 56.06 },
  30: { diameter: 0.0124, area: 0.154, resistance: 67.37 },
  31: { diameter: 0.0116, area: 0.135, resistance: 76.82 },
  32: { diameter: 0.0108, area: 0.117, resistance: 88.65 },
  33: { diameter: 0.0100, area: 0.100, resistance: 103.7 },
  34: { diameter: 0.0092, area: 0.085, resistance: 122.4 },
  35: { diameter: 0.0084, area: 0.071, resistance: 146.7 },
  36: { diameter: 0.0076, area: 0.058, resistance: 179.2 },
  37: { diameter: 0.0068, area: 0.046, resistance: 224.1 },
  38: { diameter: 0.0060, area: 0.036, resistance: 288.1 },
  39: { diameter: 0.0052, area: 0.027, resistance: 383.4 },
  40: { diameter: 0.0048, area: 0.023, resistance: 450.3 },
};

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

// Parse SWG input, handling both numeric and "X/0" format
function parseSWGInput(input: string): number | string | null {
  const trimmed = input.trim();
  
  // Handle "X/0" format (e.g., "7/0", "6/0", "5/0", "4/0", "3/0", "2/0")
  const oughtMatch = trimmed.match(/^([2-7])\/0$/);
  if (oughtMatch) {
    return trimmed; // Return as string key for swgData lookup
  }
  
  // Handle numeric input
  const numeric = parseInt(trimmed);
  if (!isNaN(numeric) && numeric >= 0 && numeric <= 40) {
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

// Format SWG number for display
function formatSWGDisplay(swg: number | string): string {
  if (typeof swg === 'string') return swg; // Already formatted like "7/0"
  return swg.toString();
}

export default function WireGauge() {
  const [gaugeSystem, setGaugeSystem] = useState<"AWG" | "SWG">("AWG");
  const [gaugeInput, setGaugeInput] = useState("");
  const [diameterInput, setDiameterInput] = useState("");
  const [result, setResult] = useState<{
    gauge: number | string;
    diameter: number;
    area: number;
    resistance: number;
    system: "AWG" | "SWG";
  } | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("gauge");

  // Clear results and inputs when gauge system changes
  useEffect(() => {
    setResult(null);
    setError("");
    setGaugeInput("");
    setDiameterInput("");
  }, [gaugeSystem]);

  const calculateFromGauge = () => {
    setError("");
    setResult(null);

    if (gaugeSystem === "AWG") {
      const awg = parseAWGInput(gaugeInput);

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
        gauge: awg,
        diameter: wireData.diameter,
        area: wireData.area,
        resistance: wireData.resistance,
        system: "AWG",
      });
    } else {
      // SWG
      const swg = parseSWGInput(gaugeInput);

      if (swg === null) {
        setError("Please enter a valid SWG number (e.g., 12, 7/0, 6/0, 5/0, 4/0, 3/0, 2/0).");
        return;
      }

      const wireData = swgData[swg];
      if (!wireData) {
        setError("SWG value not found. Supported range: 7/0 through 40 SWG.");
        return;
      }

      setResult({
        gauge: swg,
        diameter: wireData.diameter,
        area: wireData.area,
        resistance: wireData.resistance,
        system: "SWG",
      });
    }
  };

  const calculateFromDiameter = () => {
    setError("");
    setResult(null);

    const diameter = parseFloat(diameterInput);

    if (isNaN(diameter) || diameter <= 0) {
      setError("Please enter a valid diameter greater than zero.");
      return;
    }

    if (gaugeSystem === "AWG") {
      // Find closest AWG
      let closestGauge: number = 0;
      let minDiff = Infinity;

      for (const [awgStr, data] of Object.entries(awgData)) {
        const diff = Math.abs(data.diameter - diameter);
        if (diff < minDiff) {
          minDiff = diff;
          closestGauge = parseInt(awgStr);
        }
      }

      const wireData = awgData[closestGauge];
      setResult({
        gauge: closestGauge,
        diameter: wireData.diameter,
        area: wireData.area,
        resistance: wireData.resistance,
        system: "AWG",
      });
    } else {
      // Find closest SWG
      let closestGauge: number | string = 0;
      let minDiff = Infinity;

      for (const [swgStr, data] of Object.entries(swgData)) {
        const diff = Math.abs(data.diameter - diameter);
        if (diff < minDiff) {
          minDiff = diff;
          closestGauge = swgStr;
        }
      }

      const wireData = swgData[closestGauge];
      setResult({
        gauge: closestGauge,
        diameter: wireData.diameter,
        area: wireData.area,
        resistance: wireData.resistance,
        system: "SWG",
      });
    }
  };

  const reset = () => {
    setGaugeInput("");
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
            Convert between AWG/SWG and metric wire sizes (diameter, area, resistance)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose gauge system and conversion direction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Gauge System Selector */}
              <div className="space-y-2">
                <Label htmlFor="gauge-system">Gauge System</Label>
                <Select value={gaugeSystem} onValueChange={(value: "AWG" | "SWG") => setGaugeSystem(value)}>
                  <SelectTrigger id="gauge-system" data-testid="select-gauge-system">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AWG">AWG (American Wire Gauge)</SelectItem>
                    <SelectItem value="SWG">SWG (British Standard Wire Gauge)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {gaugeSystem === "AWG" ? "Used in North America" : "Used in UK & Commonwealth"}
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="gauge" data-testid="tab-gauge">From {gaugeSystem}</TabsTrigger>
                  <TabsTrigger value="diameter" data-testid="tab-diameter">From Diameter</TabsTrigger>
                </TabsList>
                
                <TabsContent value="gauge" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="gauge">{gaugeSystem} Number</Label>
                    <Input
                      id="gauge"
                      type="text"
                      placeholder={gaugeSystem === "AWG" ? "e.g., 12, 4/0, 3/0" : "e.g., 12, 7/0, 6/0"}
                      value={gaugeInput}
                      onChange={(e) => setGaugeInput(e.target.value)}
                      data-testid="input-gauge"
                    />
                    <p className="text-xs text-muted-foreground">
                      {gaugeSystem === "AWG" 
                        ? "Enter AWG: 4/0 through 40 (e.g., 4/0, 12, 18, 24)" 
                        : "Enter SWG: 7/0 through 40 (e.g., 7/0, 12, 18, 24)"}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={calculateFromGauge} className="flex-1" data-testid="button-calculate-gauge">
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
                      placeholder={gaugeSystem === "AWG" ? "e.g., 0.0808 (12 AWG)" : "e.g., 0.1040 (12 SWG)"}
                      value={diameterInput}
                      onChange={(e) => setDiameterInput(e.target.value)}
                      data-testid="input-diameter"
                    />
                    <p className="text-xs text-muted-foreground">Enter diameter in inches</p>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={calculateFromDiameter} className="flex-1" data-testid="button-calculate-diameter">
                      Find Closest {gaugeSystem}
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
                      <span className="text-sm text-muted-foreground">{result.system}:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-gauge">
                        {result.system === "AWG" 
                          ? formatAWGDisplay(result.gauge as number)
                          : formatSWGDisplay(result.gauge)}
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
                    <p>• Smaller {result.system} numbers = thicker wire</p>
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
