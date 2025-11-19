import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function WheatStoneBridge() {
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [result, setResult] = useState<{
    rx: number;
    balanced: boolean;
  } | null>(null);

  const handleCalculate = () => {
    const r1Val = parseFloat(r1);
    const r2Val = parseFloat(r2);
    const r3Val = parseFloat(r3);

    if (isNaN(r1Val) || isNaN(r2Val) || isNaN(r3Val) || r1Val <= 0 || r2Val <= 0 || r3Val <= 0) {
      return;
    }

    // Rx = (R2 × R3) / R1
    const rx = (r2Val * r3Val) / r1Val;

    // Bridge is balanced when R1/R2 = R3/Rx
    const balanced = true; // This is the balance condition we're solving for

    setResult({ rx, balanced });
  };

  const handleReset = () => {
    setR1("");
    setR2("");
    setR3("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Wheatstone Bridge Calculator</h1>
        <p className="text-muted-foreground">
          Calculate unknown resistance using Wheatstone bridge configuration
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bridge Resistor Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="r1">Known Resistor R1</Label>
              <div className="relative">
                <Input
                  id="r1"
                  data-testid="input-r1"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 1000"
                  value={r1}
                  onChange={(e) => setR1(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  Ω
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="r2">Known Resistor R2</Label>
              <div className="relative">
                <Input
                  id="r2"
                  data-testid="input-r2"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 1000"
                  value={r2}
                  onChange={(e) => setR2(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  Ω
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="r3">Known Resistor R3</Label>
              <div className="relative">
                <Input
                  id="r3"
                  data-testid="input-r3"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2000"
                  value={r3}
                  onChange={(e) => setR3(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  Ω
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
              Calculate Unknown Rx
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
                <div className="text-sm text-muted-foreground mb-1">Unknown Resistance (Rx)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-rx">
                  {result.rx >= 1000 
                    ? (result.rx / 1000).toFixed(3) + " kΩ" 
                    : result.rx.toFixed(2) + " Ω"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Bridge Status</div>
                <div className="text-2xl font-mono font-bold text-green-600 dark:text-green-400" data-testid="result-status">
                  Balanced
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Balance condition: Rx = (R2 × R3) / R1
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                When balanced, no current flows through the galvanometer
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("wheatstone-bridge") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("wheatstone-bridge")!}
          calculatorId="wheatstone-bridge"
        />
      )}
    </div>
  );
}
