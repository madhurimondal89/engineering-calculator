import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function LEDResistor() {
  const [supplyVoltage, setSupplyVoltage] = useState("");
  const [ledVoltage, setLedVoltage] = useState("");
  const [ledCurrent, setLedCurrent] = useState("");
  const [result, setResult] = useState<{
    resistance: number;
    power: number;
    nearestStandard: number;
  } | null>(null);

  const handleCalculate = () => {
    const vs = parseFloat(supplyVoltage);
    const vled = parseFloat(ledVoltage);
    const iled = parseFloat(ledCurrent) / 1000; // Convert mA to A

    if (isNaN(vs) || isNaN(vled) || isNaN(iled) || iled <= 0 || vs <= vled) {
      return;
    }

    // R = (Vs - Vled) / Iled
    const resistance = (vs - vled) / iled;
    
    // P = (Vs - Vled) × Iled
    const power = (vs - vled) * iled;

    // Find nearest standard resistor value (E12 series)
    const standardValues = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
    let nearestStandard = resistance;
    
    // Find the right decade
    let decade = 1;
    while (resistance / decade > 100) decade *= 10;
    while (resistance / decade < 10) decade /= 10;
    
    // Find closest standard value in that decade
    const normalized = resistance / decade;
    const closest = standardValues.reduce((prev, curr) => 
      Math.abs(curr - normalized) < Math.abs(prev - normalized) ? curr : prev
    );
    nearestStandard = closest * decade;

    setResult({ resistance, power, nearestStandard });
  };

  const handleReset = () => {
    setSupplyVoltage("");
    setLedVoltage("");
    setLedCurrent("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">LED Resistor Calculator</h1>
        <p className="text-muted-foreground">
          Calculate the required current-limiting resistor for LEDs
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="supply-voltage">Supply Voltage (Vs)</Label>
              <div className="relative">
                <Input
                  id="supply-voltage"
                  data-testid="input-supply-voltage"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12"
                  value={supplyVoltage}
                  onChange={(e) => setSupplyVoltage(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="led-voltage">LED Forward Voltage (Vf)</Label>
              <div className="relative">
                <Input
                  id="led-voltage"
                  data-testid="input-led-voltage"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2"
                  value={ledVoltage}
                  onChange={(e) => setLedVoltage(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="led-current">LED Current (If)</Label>
              <div className="relative">
                <Input
                  id="led-current"
                  data-testid="input-led-current"
                  type="number"
                  step="1"
                  placeholder="e.g., 20"
                  value={ledCurrent}
                  onChange={(e) => setLedCurrent(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  mA
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleCalculate}
              className="flex-1"
              data-testid="button-calculate"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              data-testid="button-reset"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Calculated Resistance</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-resistance">
                  {result.resistance.toFixed(2)} Ω
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Nearest Standard Value (E12)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-standard">
                  {result.nearestStandard.toFixed(0)} Ω
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Power Dissipation</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-power">
                  {result.power < 1 ? (result.power * 1000).toFixed(1) + " mW" : result.power.toFixed(2) + " W"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Formula: R = (Vs - Vf) / If
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Use a resistor rated for at least 2× the calculated power dissipation
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("led-resistor") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("led-resistor")!}
          calculatorId="led-resistor"
        />
      )}
    </div>
  );
}
