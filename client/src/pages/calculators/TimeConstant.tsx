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
  timeConstant?: number;
  riseTime?: number;
  settlingTime?: number;
  percentageAt1Tau?: number;
  percentageAt5Tau?: number;
}

export default function TimeConstant() {
  const [circuitType, setCircuitType] = useState<"RC" | "RL">("RC");
  
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [inductance, setInductance] = useState("");
  
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  const calculateRC = () => {
    const R = parseFloat(resistance);
    const C = parseFloat(capacitance) / 1000000; // Convert µF to F

    if (isNaN(R) || isNaN(C)) {
      setError("Please enter valid numbers for resistance and capacitance.");
      return false;
    }

    if (R <= 0 || C <= 0) {
      setError("Resistance and capacitance must be positive values.");
      return false;
    }

    // Calculate time constant: τ = RC
    const tau = R * C;
    
    // Rise time (10% to 90%): t_rise ≈ 2.2τ
    const riseTime = 2.2 * tau;
    
    // Settling time (to 98%): t_settle ≈ 4τ
    const settlingTime = 4 * tau;

    setResults({
      timeConstant: tau,
      riseTime,
      settlingTime,
      percentageAt1Tau: 63.2,
      percentageAt5Tau: 99.3,
    });

    return true;
  };

  const calculateRL = () => {
    const R = parseFloat(resistance);
    const L = parseFloat(inductance) / 1000; // Convert mH to H

    if (isNaN(R) || isNaN(L)) {
      setError("Please enter valid numbers for resistance and inductance.");
      return false;
    }

    if (R <= 0 || L <= 0) {
      setError("Resistance and inductance must be positive values.");
      return false;
    }

    // Calculate time constant: τ = L/R
    const tau = L / R;
    
    // Rise time (10% to 90%): t_rise ≈ 2.2τ
    const riseTime = 2.2 * tau;
    
    // Settling time (to 98%): t_settle ≈ 4τ
    const settlingTime = 4 * tau;

    setResults({
      timeConstant: tau,
      riseTime,
      settlingTime,
      percentageAt1Tau: 63.2,
      percentageAt5Tau: 99.3,
    });

    return true;
  };

  const calculate = () => {
    setError("");
    setResults(null);

    if (circuitType === "RC") {
      calculateRC();
    } else {
      calculateRL();
    }
  };

  const reset = () => {
    setResistance("");
    setCapacitance("");
    setInductance("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="AC Circuits" calculatorName="Time Constant Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Time Constant Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate time constant for RC (τ = RC) and RL (τ = L/R) circuits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose circuit type and enter values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={circuitType} onValueChange={(v) => setCircuitType(v as "RC" | "RL")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="RC" data-testid="tab-rc">RC Circuit</TabsTrigger>
                  <TabsTrigger value="RL" data-testid="tab-rl">RL Circuit</TabsTrigger>
                </TabsList>

                <TabsContent value="RC" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="resistance">Resistance (R)</Label>
                    <div className="relative">
                      <Input
                        id="resistance"
                        type="number"
                        step="any"
                        placeholder="Enter resistance"
                        value={resistance}
                        onChange={(e) => setResistance(e.target.value)}
                        className="pr-12"
                        data-testid="input-resistance"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capacitance">Capacitance (C)</Label>
                    <div className="relative">
                      <Input
                        id="capacitance"
                        type="number"
                        step="any"
                        placeholder="Enter capacitance"
                        value={capacitance}
                        onChange={(e) => setCapacitance(e.target.value)}
                        className="pr-12"
                        data-testid="input-capacitance"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        µF
                      </span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="RL" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="resistanceRL">Resistance (R)</Label>
                    <div className="relative">
                      <Input
                        id="resistanceRL"
                        type="number"
                        step="any"
                        placeholder="Enter resistance"
                        value={resistance}
                        onChange={(e) => setResistance(e.target.value)}
                        className="pr-12"
                        data-testid="input-resistance-rl"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        Ω
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inductance">Inductance (L)</Label>
                    <div className="relative">
                      <Input
                        id="inductance"
                        type="number"
                        step="any"
                        placeholder="Enter inductance"
                        value={inductance}
                        onChange={(e) => setInductance(e.target.value)}
                        className="pr-12"
                        data-testid="input-inductance"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        mH
                      </span>
                    </div>
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
              <CardDescription>Time constant and response times</CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <Label>Time Constant (τ)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-time-constant">
                      {results.timeConstant! >= 1
                        ? `${results.timeConstant!.toFixed(6)} s`
                        : results.timeConstant! >= 0.001
                        ? `${(results.timeConstant! * 1000).toFixed(6)} ms`
                        : `${(results.timeConstant! * 1000000).toFixed(6)} µs`}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {circuitType === "RC" ? "τ = R × C" : "τ = L / R"}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Rise Time (10% to 90%)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-rise-time">
                      {results.riseTime! >= 1
                        ? `${results.riseTime!.toFixed(6)} s`
                        : results.riseTime! >= 0.001
                        ? `${(results.riseTime! * 1000).toFixed(6)} ms`
                        : `${(results.riseTime! * 1000000).toFixed(6)} µs`}
                    </div>
                    <p className="text-xs text-muted-foreground">≈ 2.2τ</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Label>Settling Time (to 98%)</Label>
                    <div className="p-3 bg-muted rounded-md font-mono text-lg" data-testid="result-settling-time">
                      {results.settlingTime! >= 1
                        ? `${results.settlingTime!.toFixed(6)} s`
                        : results.settlingTime! >= 0.001
                        ? `${(results.settlingTime! * 1000).toFixed(6)} ms`
                        : `${(results.settlingTime! * 1000000).toFixed(6)} µs`}
                    </div>
                    <p className="text-xs text-muted-foreground">≈ 4τ</p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm font-medium mb-2">Charging/Discharging:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• After 1τ: {results.percentageAt1Tau}% charged</p>
                      <p>• After 5τ: {results.percentageAt5Tau}% charged</p>
                      <p className="text-xs mt-2">
                        V(t) = V₀(1 - e^(-t/τ)) for charging
                      </p>
                      <p className="text-xs">
                        V(t) = V₀ e^(-t/τ) for discharging
                      </p>
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

        {getCalculatorAccordion("time-constant") && (
          <CalculatorAccordion
            content={getCalculatorAccordion("time-constant")!}
            calculatorId="time-constant"
          />
        )}
      </main>
    </div>
  );
}
