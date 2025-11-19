import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function VoltageRegulator() {
  const [inputVoltage, setInputVoltage] = useState("");
  const [outputVoltage, setOutputVoltage] = useState("");
  const [loadCurrent, setLoadCurrent] = useState("");
  const [result, setResult] = useState<{
    voltageDrop: number;
    powerDissipation: number;
    efficiency: number;
    heatSinkRequired: boolean;
  } | null>(null);

  const handleCalculate = () => {
    const vin = parseFloat(inputVoltage);
    const vout = parseFloat(outputVoltage);
    const iload = parseFloat(loadCurrent) / 1000; // Convert mA to A

    if (isNaN(vin) || isNaN(vout) || isNaN(iload) || iload <= 0 || vin <= vout) {
      return;
    }

    const voltageDrop = vin - vout;
    const powerDissipation = voltageDrop * iload;
    const efficiency = (vout / vin) * 100;
    const heatSinkRequired = powerDissipation > 1; // If > 1W, heat sink recommended

    setResult({ voltageDrop, powerDissipation, efficiency, heatSinkRequired });
  };

  const handleReset = () => {
    setInputVoltage("");
    setOutputVoltage("");
    setLoadCurrent("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Voltage Regulator Calculator</h1>
        <p className="text-muted-foreground">
          Calculate voltage regulator components and power dissipation
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="input-voltage">Input Voltage (Vin)</Label>
              <div className="relative">
                <Input
                  id="input-voltage"
                  data-testid="input-input-voltage"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12"
                  value={inputVoltage}
                  onChange={(e) => setInputVoltage(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="output-voltage">Output Voltage (Vout)</Label>
              <div className="relative">
                <Input
                  id="output-voltage"
                  data-testid="input-output-voltage"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 5"
                  value={outputVoltage}
                  onChange={(e) => setOutputVoltage(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="load-current">Load Current (Iload)</Label>
              <div className="relative">
                <Input
                  id="load-current"
                  data-testid="input-load-current"
                  type="number"
                  step="1"
                  placeholder="e.g., 500"
                  value={loadCurrent}
                  onChange={(e) => setLoadCurrent(e.target.value)}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Voltage Drop</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-voltage-drop">
                  {result.voltageDrop.toFixed(2)} V
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Power Dissipation</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-power">
                  {result.powerDissipation.toFixed(2)} W
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Efficiency</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-efficiency">
                  {result.efficiency.toFixed(1)} %
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Heat Sink Required</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-heatsink">
                  {result.heatSinkRequired ? "Yes" : "No"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Formulas: Pdiss = (Vin - Vout) × Iload, η = (Vout / Vin) × 100%
              </p>
              {result.heatSinkRequired && (
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  ⚠ Heat sink recommended for power dissipation above 1W
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("voltage-regulator") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("voltage-regulator")!}
          calculatorId="voltage-regulator"
        />
      )}
    </div>
  );
}
