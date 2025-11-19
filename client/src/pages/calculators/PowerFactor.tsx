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
  powerFactor?: number;
  phaseAngle?: number;
  powerFactorPercentage?: number;
  classification?: string;
}

export default function PowerFactor() {
  const [method, setMethod] = useState<"power" | "angle">("power");
  
  const [realPower, setRealPower] = useState("");
  const [apparentPower, setApparentPower] = useState("");
  
  const [phaseAngle, setPhaseAngle] = useState("");
  
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculateFromPower = () => {
    setError("");
    setResults(null);

    const P = parseFloat(realPower);
    const S = parseFloat(apparentPower);

    if (isNaN(P) || isNaN(S)) {
      setError("Please enter valid numbers for both power values.");
      return;
    }

    if (P <= 0 || S <= 0) {
      setError("Power values must be positive.");
      return;
    }

    if (P > S) {
      setError("Real power cannot exceed apparent power.");
      return;
    }

    const pf = P / S;
    const angle = Math.acos(pf) * (180 / Math.PI);
    
    let classification = "";
    if (pf >= 0.95) classification = "Excellent (Unity or near unity)";
    else if (pf >= 0.85) classification = "Good";
    else if (pf >= 0.7) classification = "Fair";
    else classification = "Poor (Needs correction)";

    setResults({
      powerFactor: pf,
      phaseAngle: angle,
      powerFactorPercentage: pf * 100,
      classification,
    });
  };

  const calculateFromAngle = () => {
    setError("");
    setResults(null);

    const angle = parseFloat(phaseAngle);

    if (isNaN(angle)) {
      setError("Please enter a valid phase angle.");
      return;
    }

    if (angle < 0 || angle > 90) {
      setError("Phase angle must be between 0° and 90°.");
      return;
    }

    const angleRad = (angle * Math.PI) / 180;
    const pf = Math.cos(angleRad);
    
    let classification = "";
    if (pf >= 0.95) classification = "Excellent (Unity or near unity)";
    else if (pf >= 0.85) classification = "Good";
    else if (pf >= 0.7) classification = "Fair";
    else classification = "Poor (Needs correction)";

    setResults({
      powerFactor: pf,
      phaseAngle: angle,
      powerFactorPercentage: pf * 100,
      classification,
    });
  };

  const calculate = () => {
    if (method === "power") {
      calculateFromPower();
    } else {
      calculateFromAngle();
    }
  };

  const reset = () => {
    setRealPower("");
    setApparentPower("");
    setPhaseAngle("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Power Factor Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Power Factor Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate power factor from real and apparent power or from phase angle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose calculation method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={method} onValueChange={(v) => setMethod(v as "power" | "angle")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="power" data-testid="tab-from-power">From Power</TabsTrigger>
                  <TabsTrigger value="angle" data-testid="tab-from-angle">From Angle</TabsTrigger>
                </TabsList>

                <TabsContent value="power" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="realPower">Real Power (P)</Label>
                    <div className="relative">
                      <Input
                        id="realPower"
                        type="number"
                        step="any"
                        placeholder="Enter real power"
                        value={realPower}
                        onChange={(e) => setRealPower(e.target.value)}
                        className="pr-12"
                        data-testid="input-real-power"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        W
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apparentPower">Apparent Power (S)</Label>
                    <div className="relative">
                      <Input
                        id="apparentPower"
                        type="number"
                        step="any"
                        placeholder="Enter apparent power"
                        value={apparentPower}
                        onChange={(e) => setApparentPower(e.target.value)}
                        className="pr-12"
                        data-testid="input-apparent-power"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        VA
                      </span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="angle" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="phaseAngle">Phase Angle (θ)</Label>
                    <div className="relative">
                      <Input
                        id="phaseAngle"
                        type="number"
                        step="any"
                        placeholder="Enter phase angle"
                        value={phaseAngle}
                        onChange={(e) => setPhaseAngle(e.target.value)}
                        className="pr-12"
                        data-testid="input-phase-angle"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        °
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Angle between voltage and current (0° to 90°)</p>
                  </div>
                </TabsContent>
              </Tabs>

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
              <CardDescription>Power factor and phase angle</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Power Factor (PF)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-power-factor">
                      {results.powerFactor!.toFixed(4)}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Power Factor (%)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-power-factor-percentage">
                      {results.powerFactorPercentage!.toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Phase Angle (θ)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-phase-angle">
                      {results.phaseAngle!.toFixed(2)}°
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Classification</Label>
                    <div className="p-3 bg-muted rounded-md text-base" data-testid="result-classification">
                      {results.classification}
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Formula:</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      PF = cos θ = P / S
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PF closer to 1 (100%) indicates efficient power usage
                    </p>
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

        {getCalculatorAccordion("power-factor") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("power-factor")!}
            calculatorId="power-factor"
          />
        )}
      </main>
    </div>
  );
}
