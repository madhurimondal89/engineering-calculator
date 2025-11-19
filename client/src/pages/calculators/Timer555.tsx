import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function Timer555() {
  const [mode, setMode] = useState<"astable" | "monostable">("astable");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<{
    frequency?: number;
    period?: number;
    dutyCycle?: number;
    timeHigh?: number;
    timeLow?: number;
  } | null>(null);

  const handleCalculate = () => {
    const cVal = parseFloat(c) / 1000000; // Convert μF to F

    if (isNaN(cVal) || cVal <= 0) return;

    if (mode === "astable") {
      const r1Val = parseFloat(r1) * 1000; // Convert kΩ to Ω
      const r2Val = parseFloat(r2) * 1000; // Convert kΩ to Ω

      if (isNaN(r1Val) || isNaN(r2Val) || r1Val <= 0 || r2Val <= 0) return;

      // f = 1.44 / ((R1 + 2×R2) × C)
      const frequency = 1.44 / ((r1Val + 2 * r2Val) * cVal);
      const period = 1 / frequency;
      
      // Time high = 0.693 × (R1 + R2) × C
      const timeHigh = 0.693 * (r1Val + r2Val) * cVal;
      
      // Time low = 0.693 × R2 × C
      const timeLow = 0.693 * r2Val * cVal;
      
      // Duty cycle = (R1 + R2) / (R1 + 2×R2) × 100%
      const dutyCycle = ((r1Val + r2Val) / (r1Val + 2 * r2Val)) * 100;

      setResult({ frequency, period, dutyCycle, timeHigh, timeLow });
    } else {
      // Monostable
      const rVal = parseFloat(r1) * 1000; // Convert kΩ to Ω
      if (isNaN(rVal) || rVal <= 0) return;

      // T = 1.1 × R × C
      const period = 1.1 * rVal * cVal;
      
      setResult({ period });
    }
  };

  const handleReset = () => {
    setR1("");
    setR2("");
    setC("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">555 Timer Calculator</h1>
        <p className="text-muted-foreground">
          Calculate timing components for 555 timer circuits (astable and monostable)
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as "astable" | "monostable")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="astable" data-testid="tab-astable">
            Astable (Oscillator)
          </TabsTrigger>
          <TabsTrigger value="monostable" data-testid="tab-monostable">
            Monostable (One-Shot)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="astable" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Astable Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="r1">Resistor R1</Label>
                  <div className="relative">
                    <Input
                      id="r1"
                      data-testid="input-r1"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={r1}
                      onChange={(e) => setR1(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="r2">Resistor R2</Label>
                  <div className="relative">
                    <Input
                      id="r2"
                      data-testid="input-r2"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 100"
                      value={r2}
                      onChange={(e) => setR2(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c">Capacitor C</Label>
                  <div className="relative">
                    <Input
                      id="c"
                      data-testid="input-c"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={c}
                      onChange={(e) => setC(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      μF
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

        <TabsContent value="monostable" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Monostable Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="r1-mono">Resistor R</Label>
                  <div className="relative">
                    <Input
                      id="r1-mono"
                      data-testid="input-r1"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 100"
                      value={r1}
                      onChange={(e) => setR1(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-mono">Capacitor C</Label>
                  <div className="relative">
                    <Input
                      id="c-mono"
                      data-testid="input-c"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={c}
                      onChange={(e) => setC(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      μF
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
            {mode === "astable" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Frequency</div>
                  <div className="text-2xl font-mono font-bold" data-testid="result-frequency">
                    {result.frequency! >= 1000 
                      ? (result.frequency! / 1000).toFixed(2) + " kHz" 
                      : result.frequency!.toFixed(2) + " Hz"}
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Period</div>
                  <div className="text-2xl font-mono font-bold" data-testid="result-period">
                    {result.period! < 0.001 
                      ? (result.period! * 1000000).toFixed(2) + " μs" 
                      : result.period! < 1
                      ? (result.period! * 1000).toFixed(2) + " ms"
                      : result.period!.toFixed(2) + " s"}
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Duty Cycle</div>
                  <div className="text-2xl font-mono font-bold" data-testid="result-duty">
                    {result.dutyCycle!.toFixed(1)} %
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Time High / Low</div>
                  <div className="text-xl font-mono font-bold" data-testid="result-times">
                    {(result.timeHigh! * 1000).toFixed(2)} / {(result.timeLow! * 1000).toFixed(2)} ms
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Output Pulse Width</div>
                  <div className="text-2xl font-mono font-bold" data-testid="result-period">
                    {result.period! < 0.001 
                      ? (result.period! * 1000000).toFixed(2) + " μs" 
                      : result.period! < 1
                      ? (result.period! * 1000).toFixed(2) + " ms"
                      : result.period!.toFixed(2) + " s"}
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                {mode === "astable" 
                  ? "Astable: f = 1.44 / ((R1 + 2×R2) × C)" 
                  : "Monostable: T = 1.1 × R × C"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("555-timer") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("555-timer")!}
          calculatorId="555-timer"
        />
      )}
    </div>
  );
}
