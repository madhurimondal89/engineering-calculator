import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function CapacitorCharge() {
  const [voltage, setVoltage] = useState("");
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState<{
    voltageAtTime: number;
    timeConstant: number;
    percentCharge: number;
    time63: number;
    time99: number;
  } | null>(null);

  const handleCalculate = () => {
    const v = parseFloat(voltage);
    const r = parseFloat(resistance) * 1000; // kΩ to Ω
    const c = parseFloat(capacitance) / 1000000; // μF to F
    const t = parseFloat(time) / 1000; // ms to s

    if (isNaN(v) || isNaN(r) || isNaN(c) || isNaN(t) || v <= 0 || r <= 0 || c <= 0 || t < 0) {
      return;
    }

    // Time constant τ = R × C
    const timeConstant = r * c;

    // Vc(t) = V × (1 - e^(-t/τ))
    const voltageAtTime = v * (1 - Math.exp(-t / timeConstant));
    
    // Percent charged
    const percentCharge = (voltageAtTime / v) * 100;

    // Time to 63.2% (1 time constant)
    const time63 = timeConstant * 1000; // s to ms

    // Time to 99% (≈ 5 time constants)
    const time99 = 5 * timeConstant * 1000; // s to ms

    setResult({ voltageAtTime, timeConstant, percentCharge, time63, time99 });
  };

  const handleReset = () => {
    setVoltage("");
    setResistance("");
    setCapacitance("");
    setTime("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Capacitor Charge/Discharge Calculator</h1>
        <p className="text-muted-foreground">
          Calculate capacitor voltage and charge over time during charging and discharging
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Charging Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="voltage">Supply Voltage (V)</Label>
              <div className="relative">
                <Input
                  id="voltage"
                  data-testid="input-voltage"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resistance">Resistance (R)</Label>
              <div className="relative">
                <Input
                  id="resistance"
                  data-testid="input-resistance"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 10"
                  value={resistance}
                  onChange={(e) => setResistance(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  kΩ
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="capacitance">Capacitance (C)</Label>
              <div className="relative">
                <Input
                  id="capacitance"
                  data-testid="input-capacitance"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 100"
                  value={capacitance}
                  onChange={(e) => setCapacitance(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  μF
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time Elapsed (t)</Label>
              <div className="relative">
                <Input
                  id="time"
                  data-testid="input-time"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 500"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  ms
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Voltage at Time t</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-voltage">
                  {result.voltageAtTime.toFixed(3)} V
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Percent Charged</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-percent">
                  {result.percentCharge.toFixed(1)} %
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Time Constant (τ)</div>
                <div className="text-xl font-mono font-bold" data-testid="result-tau">
                  {result.timeConstant < 0.001 
                    ? (result.timeConstant * 1000000).toFixed(2) + " μs" 
                    : result.timeConstant < 1
                    ? (result.timeConstant * 1000).toFixed(2) + " ms"
                    : result.timeConstant.toFixed(2) + " s"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Time to 63.2% / 99%</div>
                <div className="text-xl font-mono font-bold" data-testid="result-times">
                  {result.time63.toFixed(1)} / {result.time99.toFixed(1)} ms
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Charging: Vc(t) = V × (1 - e<sup>-t/τ</sup>), τ = R × C
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                63.2% charged after 1τ, 99% charged after ≈5τ
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("capacitor-charge") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("capacitor-charge")!}
          calculatorId="capacitor-charge"
        />
      )}
    </div>
  );
}
