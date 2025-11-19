import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

export default function MOSFET() {
  const [vgs, setVgs] = useState("");
  const [vth, setVth] = useState("");
  const [kn, setKn] = useState("");
  const [vds, setVds] = useState("");
  const [result, setResult] = useState<{
    id: number;
    power: number;
    region: string;
    gm: number;
  } | null>(null);

  const handleCalculate = () => {
    const vgsVal = parseFloat(vgs);
    const vthVal = parseFloat(vth);
    const knVal = parseFloat(kn) / 1000; // Convert mA/V² to A/V²
    const vdsVal = parseFloat(vds);

    if (isNaN(vgsVal) || isNaN(vthVal) || isNaN(knVal) || isNaN(vdsVal) || knVal <= 0) {
      return;
    }

    // Check if MOSFET is ON (Vgs > Vth)
    if (vgsVal <= vthVal) {
      setResult({ id: 0, power: 0, region: "Cut-off", gm: 0 });
      return;
    }

    // Calculate drain current using square-law model
    // Id = Kn × (Vgs - Vth)²
    const vov = vgsVal - vthVal; // Overdrive voltage
    const id = knVal * vov * vov;

    // Determine operating region
    let region = "";
    if (vdsVal < vov) {
      region = "Triode/Linear";
      // In triode: Id = Kn × [(Vgs-Vth)×Vds - Vds²/2]
      // Using simplified calculation here
    } else {
      region = "Saturation";
    }

    // Power dissipation
    const power = id * vdsVal;

    // Transconductance gm = 2 × √(Kn × Id)
    const gm = 2 * Math.sqrt(knVal * id);

    setResult({ id: id * 1000, power, region, gm: gm * 1000 }); // Convert to mA and mS
  };

  const handleReset = () => {
    setVgs("");
    setVth("");
    setKn("");
    setVds("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">MOSFET Calculator</h1>
        <p className="text-muted-foreground">
          Calculate MOSFET parameters including drain current and power
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Input Parameters (N-channel Enhancement MOSFET)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vgs">Gate-Source Voltage (Vgs)</Label>
              <div className="relative">
                <Input
                  id="vgs"
                  data-testid="input-vgs"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 5"
                  value={vgs}
                  onChange={(e) => setVgs(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vth">Threshold Voltage (Vth)</Label>
              <div className="relative">
                <Input
                  id="vth"
                  data-testid="input-vth"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2"
                  value={vth}
                  onChange={(e) => setVth(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="kn">Transconductance Parameter (Kn)</Label>
              <div className="relative">
                <Input
                  id="kn"
                  data-testid="input-kn"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 100"
                  value={kn}
                  onChange={(e) => setKn(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  mA/V²
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vds">Drain-Source Voltage (Vds)</Label>
              <div className="relative">
                <Input
                  id="vds"
                  data-testid="input-vds"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 10"
                  value={vds}
                  onChange={(e) => setVds(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                  V
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
                <div className="text-sm text-muted-foreground mb-1">Drain Current (Id)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-id">
                  {result.id.toFixed(2)} mA
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Operating Region</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-region">
                  {result.region}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Power Dissipation (Pd)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-power">
                  {result.power < 1 ? (result.power * 1000).toFixed(1) + " mW" : result.power.toFixed(2) + " W"}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Transconductance (gm)</div>
                <div className="text-2xl font-mono font-bold" data-testid="result-gm">
                  {result.gm.toFixed(2)} mS
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Square-law model: Id = Kn × (Vgs - Vth)² (in saturation)
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Saturation region: Vds ≥ (Vgs - Vth), Triode region: Vds &lt; (Vgs - Vth)
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {getCalculatorAccordion("mosfet") && (
        <CalculatorAccordion
          content={getCalculatorAccordion("mosfet")!}
          calculatorId="mosfet"
        />
      )}
    </div>
  );
}
