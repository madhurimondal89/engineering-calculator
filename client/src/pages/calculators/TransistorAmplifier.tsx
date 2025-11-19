import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function TransistorAmplifier() {
  const [rc, setRc] = useState("");
  const [re, setRe] = useState("");
  const [beta, setBeta] = useState("");
  const [result, setResult] = useState<{
    av: number;
    avDb: number;
    zin: number;
    zout: number;
  } | null>(null);

  const handleCalculate = () => {
    const rcVal = parseFloat(rc) * 1000; // kΩ to Ω
    const reVal = parseFloat(re) * 1000; // kΩ to Ω
    const betaVal = parseFloat(beta);

    if (isNaN(rcVal) || isNaN(reVal) || isNaN(betaVal) || rcVal <= 0 || reVal <= 0 || betaVal <= 0) {
      return;
    }

    // Voltage gain (common emitter with emitter degeneration)
    // Av ≈ -Rc / Re
    const av = -(rcVal / reVal);

    // Gain in dB
    const avDb = 20 * Math.log10(Math.abs(av));

    // Input impedance (approximation)
    // Zin ≈ β × Re
    const zin = betaVal * reVal;

    // Output impedance (approximation)
    // Zout ≈ Rc
    const zout = rcVal;

    setResult({ av, avDb, zin, zout });
  };

  const handleReset = () => {
    setRc("");
    setRe("");
    setBeta("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Transistor Amplifier Gain Calculator</h1>
        <p className="text-muted-foreground">
          Calculate transistor amplifier voltage gain and input/output impedance
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Common Emitter Amplifier Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rc">Collector Resistor (Rc)</Label>
              <div className="relative">
                <Input
                  id="rc"
                  data-testid="input-rc"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 4.7"
                  value={rc}
                  onChange={(e) => setRc(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  kΩ
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="re">Emitter Resistor (Re)</Label>
              <div className="relative">
                <Input
                  id="re"
                  data-testid="input-re"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 1"
                  value={re}
                  onChange={(e) => setRe(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  kΩ
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="beta">Current Gain (β)</Label>
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
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Voltage Gain (Av)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-av">
                  {result.av.toFixed(2)} V/V
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Gain in dB</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-av-db">
                  {result.avDb.toFixed(2)} dB
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Input Impedance (Zin)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-zin">
                  {result.zin >= 1000 ? (result.zin / 1000).toFixed(1) + " kΩ" : result.zin.toFixed(0) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Output Impedance (Zout)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-zout">
                  {result.zout >= 1000 ? (result.zout / 1000).toFixed(1) + " kΩ" : result.zout.toFixed(0) + " Ω"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Common emitter: Av ≈ -Rc/Re, Zin ≈ β×Re, Zout ≈ Rc
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Negative gain indicates 180° phase inversion
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("transistor-amplifier") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("transistor-amplifier")!}
          calculatorId="transistor-amplifier"
        />
      )}
    </div>
  );
}
