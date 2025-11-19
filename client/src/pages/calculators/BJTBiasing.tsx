import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function BJTBiasing() {
  const [vcc, setVcc] = useState("");
  const [ic, setIc] = useState("");
  const [vce, setVce] = useState("");
  const [beta, setBeta] = useState("");
  const [result, setResult] = useState<{
    rb: number;
    rc: number;
    re: number;
    ib: number;
    ie: number;
    ve: number;
  } | null>(null);

  const handleCalculate = () => {
    const vccVal = parseFloat(vcc);
    const icVal = parseFloat(ic) / 1000; // Convert mA to A
    const vceVal = parseFloat(vce);
    const betaVal = parseFloat(beta);

    if (isNaN(vccVal) || isNaN(icVal) || isNaN(vceVal) || isNaN(betaVal) || 
        icVal <= 0 || betaVal <= 0 || vccVal <= vceVal) {
      return;
    }

    // Voltage divider bias calculations
    // Assume Ve = 0.1 × Vcc for stability
    const ve = 0.1 * vccVal;
    const vb = ve + 0.7; // Base voltage (assuming Vbe = 0.7V)
    
    // Emitter resistor
    const ie = icVal; // Assume Ie ≈ Ic
    const re = ve / ie;
    
    // Collector resistor
    const vc = vceVal + ve;
    const rc = (vccVal - vc) / icVal;
    
    // Base current
    const ib = icVal / betaVal;
    
    // Base resistor (assuming voltage divider bias)
    // R1 and R2 form divider, simplified as Rb
    const rb = (vccVal - vb) / (10 * ib); // R1 with stiff divider (I1 = 10×Ib)

    setResult({ rb, rc, re, ib: ib * 1000, ie: ie * 1000, ve });
  };

  const handleReset = () => {
    setVcc("");
    setIc("");
    setVce("");
    setBeta("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">BJT Biasing Calculator</h1>
        <p className="text-muted-foreground">
          Calculate BJT transistor biasing resistors and operating point
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters (Voltage Divider Bias)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vcc">Supply Voltage (Vcc)</Label>
              <div className="relative">
                <Input
                  id="vcc"
                  data-testid="input-vcc"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12"
                  value={vcc}
                  onChange={(e) => setVcc(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ic">Collector Current (Ic)</Label>
              <div className="relative">
                <Input
                  id="ic"
                  data-testid="input-ic"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2"
                  value={ic}
                  onChange={(e) => setIc(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  mA
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vce">Collector-Emitter Voltage (Vce)</Label>
              <div className="relative">
                <Input
                  id="vce"
                  data-testid="input-vce"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 6"
                  value={vce}
                  onChange={(e) => setVce(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="beta">Current Gain (β/hFE)</Label>
              <div className="relative">
                <Input
                  id="beta"
                  data-testid="input-beta"
                  type="number"
                  step="1"
                  placeholder="e.g., 100"
                  value={beta}
                  onChange={(e) => setBeta(e.target.value)}
                />
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
            <CardTitle>Calculated Resistor Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Base Resistor (Rb)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-rb">
                  {result.rb >= 1000 ? (result.rb / 1000).toFixed(1) + " kΩ" : result.rb.toFixed(0) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Collector Resistor (Rc)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-rc">
                  {result.rc >= 1000 ? (result.rc / 1000).toFixed(1) + " kΩ" : result.rc.toFixed(0) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Emitter Resistor (Re)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-re">
                  {result.re >= 1000 ? (result.re / 1000).toFixed(1) + " kΩ" : result.re.toFixed(0) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Base Current (Ib)</div>
                <div className="text-xl font-mono font-bold" data-testid="result-ib">
                  {result.ib >= 1 ? result.ib.toFixed(2) + " mA" : (result.ib * 1000).toFixed(1) + " μA"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Emitter Current (Ie)</div>
                <div className="text-xl font-mono font-bold" data-testid="result-ie">
                  {result.ie.toFixed(2)} mA
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Emitter Voltage (Ve)</div>
                <div className="text-xl font-mono font-bold" data-testid="result-ve">
                  {result.ve.toFixed(2)} V
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Voltage divider bias: Ve ≈ 0.1×Vcc, Ic = β×Ib, Ie ≈ Ic
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Select standard resistor values nearest to calculated values
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("bjt-biasing") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("bjt-biasing")!}
          calculatorId="bjt-biasing"
        />
      )}
    </div>
  );
}
