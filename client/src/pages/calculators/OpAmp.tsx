import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function OpAmp() {
  const [mode, setMode] = useState<"inverting" | "non-inverting">("non-inverting");
  const [rf, setRf] = useState("");
  const [rin, setRin] = useState("");
  const [result, setResult] = useState<{
    gain: number;
    gainDb: number;
  } | null>(null);

  const handleCalculate = () => {
    const rfVal = parseFloat(rf);
    const rinVal = parseFloat(rin);

    if (isNaN(rfVal) || isNaN(rinVal) || rinVal <= 0) {
      return;
    }

    let gain = 0;
    if (mode === "non-inverting") {
      // Av = 1 + (Rf/Rin)
      gain = 1 + (rfVal / rinVal);
    } else {
      // Av = -Rf/Rin
      gain = -(rfVal / rinVal);
    }

    const gainDb = 20 * Math.log10(Math.abs(gain));

    setResult({ gain, gainDb });
  };

  const handleReset = () => {
    setRf("");
    setRin("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Op-Amp Calculator</h1>
        <p className="text-muted-foreground">
          Calculate operational amplifier gain and feedback resistor values
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as "inverting" | "non-inverting")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="non-inverting" data-testid="tab-non-inverting">
            Non-Inverting
          </TabsTrigger>
          <TabsTrigger value="inverting" data-testid="tab-inverting">
            Inverting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="non-inverting" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Non-Inverting Amplifier (Av = 1 + Rf/Rin)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rf">Feedback Resistor (Rf)</Label>
                  <div className="relative">
                    <Input
                      id="rf"
                      data-testid="input-rf"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 100"
                      value={rf}
                      onChange={(e) => setRf(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rin">Input Resistor (Rin)</Label>
                  <div className="relative">
                    <Input
                      id="rin"
                      data-testid="input-rin"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={rin}
                      onChange={(e) => setRin(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
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

        <TabsContent value="inverting" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Inverting Amplifier (Av = -Rf/Rin)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rf-inv">Feedback Resistor (Rf)</Label>
                  <div className="relative">
                    <Input
                      id="rf-inv"
                      data-testid="input-rf"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 100"
                      value={rf}
                      onChange={(e) => setRf(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rin-inv">Input Resistor (Rin)</Label>
                  <div className="relative">
                    <Input
                      id="rin-inv"
                      data-testid="input-rin"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 10"
                      value={rin}
                      onChange={(e) => setRin(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                      kΩ
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
                <div className="text-sm text-muted-foreground mb-1">Voltage Gain (Av)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-gain">
                  {result.gain.toFixed(2)} V/V
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Gain in dB</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-gain-db">
                  {result.gainDb.toFixed(2)} dB
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                {mode === "non-inverting" ? "Non-Inverting: Av = 1 + (Rf/Rin)" : "Inverting: Av = -(Rf/Rin)"}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Gain in dB = 20 × log₁₀(|Av|)
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("op-amp") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("op-amp")!}
          calculatorId="op-amp"
        />
      )}
    </div>
  );
}
