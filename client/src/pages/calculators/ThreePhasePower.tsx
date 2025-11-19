import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

interface Results {
  realPower?: number;
  reactivePower?: number;
  apparentPower?: number;
  powerFactor?: number;
  lineCurrent?: number;
  phaseCurrent?: number;
  lineVoltage?: number;
  phaseVoltage?: number;
}

export default function ThreePhasePower() {
  const [connectionType, setConnectionType] = useState<"star" | "delta">("star");
  
  const [lineVoltage, setLineVoltage] = useState("");
  const [lineCurrent, setLineCurrent] = useState("");
  const [powerFactor, setPowerFactor] = useState("");
  
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResults(null);

    const VL = parseFloat(lineVoltage);
    const IL = parseFloat(lineCurrent);
    const PF = parseFloat(powerFactor);

    if (isNaN(VL) || isNaN(IL) || isNaN(PF)) {
      setError("Please enter valid numbers for all fields.");
      return;
    }

    if (VL <= 0 || IL <= 0) {
      setError("Voltage and current must be positive values.");
      return;
    }

    if (PF < 0 || PF > 1) {
      setError("Power factor must be between 0 and 1.");
      return;
    }

    // Calculate powers
    const S = Math.sqrt(3) * VL * IL; // Apparent power
    const P = S * PF; // Real power
    const Q = S * Math.sqrt(1 - PF * PF); // Reactive power

    // Calculate phase quantities based on connection type
    let Vph, Iph;
    
    if (connectionType === "star") {
      // Star (Y) connection: VL = √3 × Vph, IL = Iph
      Vph = VL / Math.sqrt(3);
      Iph = IL;
    } else {
      // Delta (Δ) connection: VL = Vph, IL = √3 × Iph
      Vph = VL;
      Iph = IL / Math.sqrt(3);
    }

    setResults({
      realPower: P,
      reactivePower: Q,
      apparentPower: S,
      powerFactor: PF,
      lineCurrent: IL,
      phaseCurrent: Iph,
      lineVoltage: VL,
      phaseVoltage: Vph,
    });
  };

  const reset = () => {
    setLineVoltage("");
    setLineCurrent("");
    setPowerFactor("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Three Phase Power Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Three Phase Power Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate power in three-phase systems for Star (Y) and Delta (Δ) connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose connection type and enter values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={connectionType} onValueChange={(v) => setConnectionType(v as "star" | "delta")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="star" data-testid="tab-star">Star (Y)</TabsTrigger>
                  <TabsTrigger value="delta" data-testid="tab-delta">Delta (Δ)</TabsTrigger>
                </TabsList>

                <TabsContent value="star" className="space-y-4 mt-4">
                  <Alert>
                    <AlertDescription className="text-xs">
                      Star Connection: VL = √3 × Vph, IL = Iph
                    </AlertDescription>
                  </Alert>
                </TabsContent>

                <TabsContent value="delta" className="space-y-4 mt-4">
                  <Alert>
                    <AlertDescription className="text-xs">
                      Delta Connection: VL = Vph, IL = √3 × Iph
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="lineVoltage">Line Voltage (VL)</Label>
                <div className="relative">
                  <Input
                    id="lineVoltage"
                    type="number"
                    step="any"
                    placeholder="Enter line voltage"
                    value={lineVoltage}
                    onChange={(e) => setLineVoltage(e.target.value)}
                    className="pr-12"
                    data-testid="input-line-voltage"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    V
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Voltage between any two lines</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lineCurrent">Line Current (IL)</Label>
                <div className="relative">
                  <Input
                    id="lineCurrent"
                    type="number"
                    step="any"
                    placeholder="Enter line current"
                    value={lineCurrent}
                    onChange={(e) => setLineCurrent(e.target.value)}
                    className="pr-12"
                    data-testid="input-line-current"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    A
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Current in any line conductor</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="powerFactor">Power Factor (cos θ)</Label>
                <div className="relative">
                  <Input
                    id="powerFactor"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    placeholder="Enter power factor"
                    value={powerFactor}
                    onChange={(e) => setPowerFactor(e.target.value)}
                    data-testid="input-power-factor"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Value between 0 and 1 (e.g., 0.8 for 80%)</p>
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
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Three-phase power analysis</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Real Power (P)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-real-power">
                      {results.realPower! >= 1000000
                        ? `${(results.realPower! / 1000000).toFixed(3)} MW`
                        : results.realPower! >= 1000
                        ? `${(results.realPower! / 1000).toFixed(3)} kW`
                        : `${results.realPower!.toFixed(3)} W`}
                    </div>
                    <p className="text-xs text-muted-foreground">Active power consumed</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Reactive Power (Q)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-reactive-power">
                      {results.reactivePower! >= 1000000
                        ? `${(results.reactivePower! / 1000000).toFixed(3)} MVAR`
                        : results.reactivePower! >= 1000
                        ? `${(results.reactivePower! / 1000).toFixed(3)} kVAR`
                        : `${results.reactivePower!.toFixed(3)} VAR`}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Apparent Power (S)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-apparent-power">
                      {results.apparentPower! >= 1000000
                        ? `${(results.apparentPower! / 1000000).toFixed(3)} MVA`
                        : results.apparentPower! >= 1000
                        ? `${(results.apparentPower! / 1000).toFixed(3)} kVA`
                        : `${results.apparentPower!.toFixed(3)} VA`}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Phase Voltage</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-phase-voltage">
                        {results.phaseVoltage!.toFixed(2)} V
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Phase Current</Label>
                      <div className="p-2 bg-muted rounded-md font-mono text-sm" data-testid="result-phase-current">
                        {results.phaseCurrent!.toFixed(4)} A
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formulas (Balanced Load):</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• S = √3 × VL × IL</p>
                      <p>• P = S × cos θ</p>
                      <p>• Q = S × sin θ</p>
                      {connectionType === "star" && (
                        <p className="text-xs mt-2">Star: VL = √3 × Vph, IL = Iph</p>
                      )}
                      {connectionType === "delta" && (
                        <p className="text-xs mt-2">Delta: VL = Vph, IL = √3 × Iph</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Enter values and click Calculate to see results
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {getCalculatorAccordion("three-phase-power") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("three-phase-power")!}
            calculatorId="three-phase-power"
          />
        )}
      </main>
    </div>
  );
}
