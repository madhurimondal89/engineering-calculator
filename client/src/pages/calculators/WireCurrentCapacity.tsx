import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// Ampacity tables (NEC Table 310.16) for copper conductors at 75°C
const ampacityData: { [key: number]: { [key: string]: number } } = {
  14: { conduit: 20, chassis: 25, open: 30 },
  12: { conduit: 25, chassis: 30, open: 35 },
  10: { conduit: 35, chassis: 40, open: 50 },
  8: { conduit: 50, chassis: 60, open: 70 },
  6: { conduit: 65, chassis: 80, open: 95 },
  4: { conduit: 85, chassis: 105, open: 125 },
  3: { conduit: 100, chassis: 120, open: 145 },
  2: { conduit: 115, chassis: 135, open: 170 },
  1: { conduit: 130, chassis: 150, open: 195 },
  0: { conduit: 150, chassis: 170, open: 230 },
  "-1": { conduit: 170, chassis: 195, open: 260 },
  "-2": { conduit: 195, chassis: 225, open: 300 },
  "-3": { conduit: 225, chassis: 260, open: 350 },
  "-4": { conduit: 260, chassis: 300, open: 405 },
};

export default function WireCurrentCapacity() {
  const [awg, setAwg] = useState<string>("12");
  const [installation, setInstallation] = useState<string>("conduit");
  const [result, setResult] = useState<{
    ampacity: number;
    awg: string;
    installation: string;
    derating: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const awgNum = parseInt(awg);
    const data = ampacityData[awgNum];

    if (!data) {
      setError("AWG value not found in ampacity table.");
      return;
    }

    const ampacity = data[installation];
    if (!ampacity) {
      setError("Installation method not found.");
      return;
    }

    // Apply derating factor for multiple conductors in conduit
    const derating = installation === "conduit" ? 0.8 : 1.0;

    setResult({
      ampacity: ampacity * derating,
      awg,
      installation,
      derating,
    });
  };

  const reset = () => {
    setAwg("12");
    setInstallation("conduit");
    setResult(null);
    setError("");
  };

  const accordionContent = getCalculatorAccordion("wire-current-capacity");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Wire & Cable" calculatorName="Wire Current Capacity Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Wire Current Capacity Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate maximum safe current (ampacity) for wires based on gauge and installation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Select wire size and installation method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="awg">Wire Gauge (AWG)</Label>
                  <Select value={awg} onValueChange={setAwg}>
                    <SelectTrigger id="awg" data-testid="select-awg">
                      <SelectValue placeholder="Select AWG" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="14">14 AWG</SelectItem>
                      <SelectItem value="12">12 AWG</SelectItem>
                      <SelectItem value="10">10 AWG</SelectItem>
                      <SelectItem value="8">8 AWG</SelectItem>
                      <SelectItem value="6">6 AWG</SelectItem>
                      <SelectItem value="4">4 AWG</SelectItem>
                      <SelectItem value="3">3 AWG</SelectItem>
                      <SelectItem value="2">2 AWG</SelectItem>
                      <SelectItem value="1">1 AWG</SelectItem>
                      <SelectItem value="0">1/0 AWG</SelectItem>
                      <SelectItem value="-1">2/0 AWG</SelectItem>
                      <SelectItem value="-2">3/0 AWG</SelectItem>
                      <SelectItem value="-3">4/0 AWG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="installation">Installation Method</Label>
                  <Select value={installation} onValueChange={setInstallation}>
                    <SelectTrigger id="installation" data-testid="select-installation">
                      <SelectValue placeholder="Select installation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conduit">Conduit/Raceway (3+ conductors)</SelectItem>
                      <SelectItem value="chassis">Chassis Wiring (Single)</SelectItem>
                      <SelectItem value="open">Open Air (Free Air)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Based on NEC Table 310.16 (75°C copper)
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate Ampacity
                </Button>
                <Button onClick={reset} variant="outline" data-testid="button-reset">
                  Reset
                </Button>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription data-testid="text-error">{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Maximum safe current</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4" data-testid="container-results">
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Wire Gauge:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-awg">
                        {result.awg} AWG
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Max Current:</span>
                      <span className="text-3xl font-mono font-bold text-primary" data-testid="text-result-ampacity">
                        {result.ampacity.toFixed(0)} A
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Installation:</span>
                      <span className="text-lg font-mono" data-testid="text-result-installation">
                        {result.installation === "conduit" ? "Conduit" : result.installation === "chassis" ? "Chassis" : "Open Air"}
                      </span>
                    </div>
                    {result.derating < 1 && (
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm text-muted-foreground">Derating Factor:</span>
                        <span className="text-lg font-mono" data-testid="text-result-derating">
                          {(result.derating * 100).toFixed(0)}%
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold">Important Notes:</p>
                    <p>• Values based on NEC Table 310.16 (75°C copper)</p>
                    <p>• Ambient temperature assumed 30°C (86°F)</p>
                    <p>• Conduit values include 80% derating for 4-6 conductors</p>
                    <p>• Always verify with local electrical codes</p>
                    <p>• Use 80% of ampacity for continuous loads</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground" data-testid="text-no-results">
                  Select wire gauge and installation method, then click Calculate.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {accordionContent && (
          <div className="mt-8">
            <CalculatorAccordion calculatorId="wire-current-capacity" content={accordionContent} />
          </div>
        )}
      </main>
    </div>
  );
}
