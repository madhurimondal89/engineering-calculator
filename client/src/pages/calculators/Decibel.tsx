import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Decibel() {
  const [mode, setMode] = useState<"power" | "voltage">("power");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [result, setResult] = useState<{
    db: number;
    ratio: number;
  } | null>(null);

  const handleCalculate = () => {
    const p1Val = parseFloat(p1);
    const p2Val = parseFloat(p2);

    if (isNaN(p1Val) || isNaN(p2Val) || p1Val <= 0 || p2Val <= 0) {
      return;
    }

    let db = 0;
    const ratio = p2Val / p1Val;

    if (mode === "power") {
      // dB = 10 × log₁₀(P2/P1)
      db = 10 * Math.log10(ratio);
    } else {
      // dB = 20 × log₁₀(V2/V1)
      db = 20 * Math.log10(ratio);
    }

    setResult({ db, ratio });
  };

  const handleReset = () => {
    setP1("");
    setP2("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Decibel (dB) Calculator</h1>
        <p className="text-muted-foreground">
          Convert between power ratio, voltage ratio, and decibels
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as "power" | "voltage")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="power" data-testid="tab-power">
            Power Ratio
          </TabsTrigger>
          <TabsTrigger value="voltage" data-testid="tab-voltage">
            Voltage Ratio
          </TabsTrigger>
        </TabsList>

        <TabsContent value="power" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Power Ratio to Decibels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="p1">Reference Power (P1)</Label>
                  <div className="relative">
                    <Input
                      id="p1"
                      data-testid="input-p1"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 1"
                      value={p1}
                      onChange={(e) => setP1(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      W
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="p2">Measured Power (P2)</Label>
                  <div className="relative">
                    <Input
                      id="p2"
                      data-testid="input-p2"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 10"
                      value={p2}
                      onChange={(e) => setP2(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      W
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCalculate} className="flex-1" data-testid="button-calculate">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
                <Button onClick={handleReset} variant="outline" data-testid="button-reset">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voltage" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Voltage Ratio to Decibels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="v1">Reference Voltage (V1)</Label>
                  <div className="relative">
                    <Input
                      id="v1"
                      data-testid="input-p1"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 1"
                      value={p1}
                      onChange={(e) => setP1(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      V
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="v2">Measured Voltage (V2)</Label>
                  <div className="relative">
                    <Input
                      id="v2"
                      data-testid="input-p2"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 10"
                      value={p2}
                      onChange={(e) => setP2(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      V
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCalculate} className="flex-1" data-testid="button-calculate">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
                <Button onClick={handleReset} variant="outline" data-testid="button-reset">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Gain/Attenuation</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-db">
                  {result.db > 0 ? "+" : ""}{result.db.toFixed(2)} dB
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Ratio</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-ratio">
                  {result.ratio.toFixed(3)}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                {mode === "power" 
                  ? "Power: dB = 10 × log₁₀(P2/P1)" 
                  : "Voltage: dB = 20 × log₁₀(V2/V1)"}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Positive dB = gain, Negative dB = attenuation, 0 dB = unity (no change)
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("decibel") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("decibel")!}
          calculatorId="decibel"
        />
      )}
    </div>
  );
}
