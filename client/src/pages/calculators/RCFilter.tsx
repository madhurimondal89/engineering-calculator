import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function RCFilter() {
  const [mode, setMode] = useState<"low-pass" | "high-pass">("low-pass");
  const [r, setR] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<{
    cutoffFrequency: number;
    timeConstant: number;
  } | null>(null);

  const handleCalculate = () => {
    const rVal = parseFloat(r) * 1000; // Convert kΩ to Ω
    const cVal = parseFloat(c) / 1000000; // Convert μF to F

    if (isNaN(rVal) || isNaN(cVal) || rVal <= 0 || cVal <= 0) {
      return;
    }

    // fc = 1 / (2π × R × C)
    const cutoffFrequency = 1 / (2 * Math.PI * rVal * cVal);
    
    // τ = R × C
    const timeConstant = rVal * cVal;

    setResult({ cutoffFrequency, timeConstant });
  };

  const handleReset = () => {
    setR("");
    setC("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">RC Filter Calculator</h1>
        <p className="text-muted-foreground">
          Calculate RC low-pass and high-pass filter cutoff frequency and response
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as "low-pass" | "high-pass")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="low-pass" data-testid="tab-low-pass">
            Low-Pass Filter
          </TabsTrigger>
          <TabsTrigger value="high-pass" data-testid="tab-high-pass">
            High-Pass Filter
          </TabsTrigger>
        </TabsList>

        <TabsContent value="low-pass" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Low-Pass RC Filter (Passes low frequencies, blocks high)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="r">Resistor (R)</Label>
                  <div className="relative">
                    <Input
                      id="r"
                      data-testid="input-r"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={r}
                      onChange={(e) => setR(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c">Capacitor (C)</Label>
                  <div className="relative">
                    <Input
                      id="c"
                      data-testid="input-c"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 0.1"
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

        <TabsContent value="high-pass" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>High-Pass RC Filter (Passes high frequencies, blocks low)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="r-hp">Resistor (R)</Label>
                  <div className="relative">
                    <Input
                      id="r-hp"
                      data-testid="input-r"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={r}
                      onChange={(e) => setR(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="c-hp">Capacitor (C)</Label>
                  <div className="relative">
                    <Input
                      id="c-hp"
                      data-testid="input-c"
                      type="number"
                      step="0.001"
                      placeholder="e.g., 0.1"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Cutoff Frequency (-3dB)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-cutoff">
                  {result.cutoffFrequency >= 1000 
                    ? (result.cutoffFrequency / 1000).toFixed(2) + " kHz" 
                    : result.cutoffFrequency.toFixed(2) + " Hz"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Time Constant (τ)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-tau">
                  {result.timeConstant < 0.001 
                    ? (result.timeConstant * 1000000).toFixed(2) + " μs" 
                    : result.timeConstant < 1
                    ? (result.timeConstant * 1000).toFixed(2) + " ms"
                    : result.timeConstant.toFixed(2) + " s"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Cutoff frequency: fc = 1 / (2π × R × C) where signal is attenuated by -3dB
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                {mode === "low-pass" 
                  ? "Low-pass: Frequencies below fc pass, above fc are attenuated at -20dB/decade" 
                  : "High-pass: Frequencies above fc pass, below fc are attenuated at -20dB/decade"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("rc-filter") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("rc-filter")!}
          calculatorId="rc-filter"
        />
      )}
    </div>
  );
}
