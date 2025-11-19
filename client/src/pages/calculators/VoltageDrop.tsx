import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// Resistance per 1000ft for copper wire (ohms/kft) at 75°C
const wireResistance: { [key: number]: number } = {
  14: 3.07,
  12: 1.93,
  10: 1.21,
  8: 0.764,
  6: 0.491,
  4: 0.308,
  3: 0.245,
  2: 0.194,
  1: 0.154,
  0: 0.122,
  "-1": 0.0967,
  "-2": 0.0766,
  "-3": 0.0608,
  "-4": 0.0482,
};

export default function VoltageDrop() {
  const [current, setCurrent] = useState("");
  const [length, setLength] = useState("");
  const [awg, setAwg] = useState<string>("12");
  const [voltage, setVoltage] = useState("");
  const [phaseType, setPhaseType] = useState("single");
  const [result, setResult] = useState<{
    voltageDrop: number;
    percentDrop: number;
    voltageAtLoad: number;
  } | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const I = parseFloat(current);
    const L = parseFloat(length);
    const V = parseFloat(voltage);
    const awgNum = parseInt(awg);

    if (isNaN(I) || isNaN(L) || isNaN(V)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (I <= 0 || L <= 0 || V <= 0) {
      setError("All values must be greater than zero.");
      return;
    }

    const R = wireResistance[awgNum];
    if (!R) {
      setError("Wire gauge not found.");
      return;
    }

    // Calculate voltage drop
    // Single-phase: Vd = 2 × I × R × L / 1000
    // Three-phase: Vd = √3 × I × R × L / 1000
    const multiplier = phaseType === "single" ? 2 : Math.sqrt(3);
    const Vd = multiplier * I * R * (L / 1000);
    const percentDrop = (Vd / V) * 100;
    const voltageAtLoad = V - Vd;

    setResult({
      voltageDrop: Vd,
      percentDrop,
      voltageAtLoad,
    });
  };

  const reset = () => {
    setCurrent("");
    setLength("");
    setAwg("12");
    setVoltage("");
    setPhaseType("single");
    setResult(null);
    setError("");
  };

  const accordionContent = getCalculatorAccordion("voltage-drop");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Wire & Cable" calculatorName="Voltage Drop Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Voltage Drop Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate voltage drop in wire runs for single-phase and three-phase circuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Enter circuit parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={phaseType} onValueChange={setPhaseType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="single" data-testid="tab-single-phase">Single Phase</TabsTrigger>
                  <TabsTrigger value="three" data-testid="tab-three-phase">Three Phase</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="voltage">System Voltage (V)</Label>
                  <Input
                    id="voltage"
                    type="number"
                    step="any"
                    placeholder="e.g., 120, 240, 480"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                    data-testid="input-voltage"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current">Load Current (A)</Label>
                  <Input
                    id="current"
                    type="number"
                    step="any"
                    placeholder="e.g., 15, 20"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    data-testid="input-current"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="length">One-Way Length (ft)</Label>
                  <Input
                    id="length"
                    type="number"
                    step="any"
                    placeholder="e.g., 100"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    data-testid="input-length"
                  />
                  <p className="text-xs text-muted-foreground">Distance from source to load</p>
                </div>

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
                      <SelectItem value="2">2 AWG</SelectItem>
                      <SelectItem value="1">1 AWG</SelectItem>
                      <SelectItem value="0">1/0 AWG</SelectItem>
                      <SelectItem value="-1">2/0 AWG</SelectItem>
                      <SelectItem value="-2">3/0 AWG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
                  Calculate
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
              <CardDescription>Voltage drop analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4" data-testid="container-results">
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Voltage Drop:</span>
                      <span className="text-3xl font-mono font-bold text-primary" data-testid="text-result-drop">
                        {result.voltageDrop.toFixed(2)} V
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Percentage Drop:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-percent">
                        {result.percentDrop.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">Voltage at Load:</span>
                      <span className="text-2xl font-mono font-semibold" data-testid="text-result-load-voltage">
                        {result.voltageAtLoad.toFixed(2)} V
                      </span>
                    </div>
                  </div>

                  {result.percentDrop > 3 && (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription data-testid="text-warning">
                        Warning: Voltage drop exceeds 3% (NEC recommendation). Consider using larger wire gauge.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold">NEC Recommendations:</p>
                    <p>• Maximum 3% drop for branch circuits</p>
                    <p>• Maximum 5% total drop (feeder + branch)</p>
                    <p>• Lower voltage drop improves efficiency</p>
                    <p>• Formula: Vd = {phaseType === "single" ? "2" : "√3"} × I × R × L / 1000</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground" data-testid="text-no-results">
                  Enter circuit parameters and click Calculate to see voltage drop.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {accordionContent && (
          <div className="mt-8">
            <CalculatorAccordion calculatorId="voltage-drop" content={accordionContent} />
          </div>
        )}
      </main>
    </div>
  );
}
