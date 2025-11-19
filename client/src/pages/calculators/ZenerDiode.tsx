import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function ZenerDiode() {
  const [vin, setVin] = useState("");
  const [vz, setVz] = useState("");
  const [iload, setIload] = useState("");
  const [result, setResult] = useState<{
    rs: number;
    iz: number;
    powerRs: number;
    powerZener: number;
  } | null>(null);

  const handleCalculate = () => {
    const vinVal = parseFloat(vin);
    const vzVal = parseFloat(vz);
    const iloadVal = parseFloat(iload) / 1000; // Convert mA to A

    if (isNaN(vinVal) || isNaN(vzVal) || isNaN(iloadVal) || iloadVal < 0 || vinVal <= vzVal) {
      return;
    }

    // Assume Iz = 10% of Iload minimum for regulation
    const izMin = iloadVal * 0.1;
    const itotal = iloadVal + izMin;

    // Rs = (Vin - Vz) / Itotal
    const rs = (vinVal - vzVal) / itotal;

    // Actual zener current
    const iz = itotal - iloadVal;

    // Power dissipation in series resistor
    const powerRs = Math.pow(itotal, 2) * rs;

    // Power dissipation in zener
    const powerZener = vzVal * iz;

    setResult({ rs, iz: iz * 1000, powerRs, powerZener });
  };

  const handleReset = () => {
    setVin("");
    setVz("");
    setIload("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Zener Diode Calculator</h1>
        <p className="text-muted-foreground">
          Calculate Zener diode voltage regulation and current-limiting resistor
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vin">Input Voltage (Vin)</Label>
              <div className="relative">
                <Input
                  id="vin"
                  data-testid="input-vin"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vz">Zener Voltage (Vz)</Label>
              <div className="relative">
                <Input
                  id="vz"
                  data-testid="input-vz"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 5.1"
                  value={vz}
                  onChange={(e) => setVz(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="iload">Load Current (Iload)</Label>
              <div className="relative">
                <Input
                  id="iload"
                  data-testid="input-iload"
                  type="number"
                  step="1"
                  placeholder="e.g., 50"
                  value={iload}
                  onChange={(e) => setIload(e.target.value)}
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
                <div className="text-sm text-muted-foreground mb-1">Series Resistor (Rs)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-rs">
                  {result.rs >= 1000 ? (result.rs / 1000).toFixed(1) + " kΩ" : result.rs.toFixed(0) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Zener Current (Iz)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-iz">
                  {result.iz.toFixed(1)} mA
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Power in Rs</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-power-rs">
                  {result.powerRs < 1 ? (result.powerRs * 1000).toFixed(0) + " mW" : result.powerRs.toFixed(2) + " W"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Power in Zener</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-power-zener">
                  {result.powerZener < 1 ? (result.powerZener * 1000).toFixed(0) + " mW" : result.powerZener.toFixed(2) + " W"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Rs = (Vin - Vz) / (Iload + Iz), where Iz ≥ 10% of Iload
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Ensure resistor and zener are rated for calculated power dissipation
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("zener-diode") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("zener-diode")!}
          calculatorId="zener-diode"
        />
      )}
    </div>
  );
}
