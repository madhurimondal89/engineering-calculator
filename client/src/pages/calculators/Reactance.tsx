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

export default function Reactance() {
  const [frequency, setFrequency] = useState("");
  const [inductance, setInductance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [xlResult, setXlResult] = useState<number | null>(null);
  const [xcResult, setXcResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("inductive");

  const calculateInductive = () => {
    setError("");
    setXlResult(null);

    const f = parseFloat(frequency);
    const l = parseFloat(inductance);

    if (isNaN(f) || isNaN(l)) {
      setError("Please enter valid numbers for frequency and inductance.");
      return;
    }

    if (f <= 0 || l <= 0) {
      setError("Frequency and inductance must be greater than zero.");
      return;
    }

    const xl = 2 * Math.PI * f * l;
    setXlResult(xl);
  };

  const calculateCapacitive = () => {
    setError("");
    setXcResult(null);

    const f = parseFloat(frequency);
    const c = parseFloat(capacitance);

    if (isNaN(f) || isNaN(c)) {
      setError("Please enter valid numbers for frequency and capacitance.");
      return;
    }

    if (f <= 0 || c <= 0) {
      setError("Frequency and capacitance must be greater than zero.");
      return;
    }

    const xc = 1 / (2 * Math.PI * f * c);
    setXcResult(xc);
  };

  const reset = () => {
    setFrequency("");
    setInductance("");
    setCapacitance("");
    setXlResult(null);
    setXcResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Reactance Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Reactance Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate inductive reactance (XL = 2πfL) and capacitive reactance (XC = 1/(2πfC))
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Input Values</CardTitle>
              <CardDescription>Choose reactance type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="inductive" data-testid="tab-inductive">Inductive (XL)</TabsTrigger>
                  <TabsTrigger value="capacitive" data-testid="tab-capacitive">Capacitive (XC)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="inductive" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="frequency-l">Frequency (f)</Label>
                    <div className="relative">
                      <Input
                        id="frequency-l"
                        type="number"
                        step="any"
                        placeholder="Enter frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="pr-12"
                        data-testid="input-frequency-l"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        Hz
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
                        H
                      </span>
                    </div>
                  </div>

                  <Button onClick={calculateInductive} className="w-full" data-testid="button-calculate-xl">
                    Calculate Inductive Reactance
                  </Button>
                </TabsContent>

                <TabsContent value="capacitive" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="frequency-c">Frequency (f)</Label>
                    <div className="relative">
                      <Input
                        id="frequency-c"
                        type="number"
                        step="any"
                        placeholder="Enter frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="pr-12"
                        data-testid="input-frequency-c"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        Hz
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
                        F
                      </span>
                    </div>
                  </div>

                  <Button onClick={calculateCapacitive} className="w-full" data-testid="button-calculate-xc">
                    Calculate Capacitive Reactance
                  </Button>
                </TabsContent>
              </Tabs>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription data-testid="text-error">{error}</AlertDescription>
                </Alert>
              )}

              <Button onClick={reset} variant="outline" className="w-full" data-testid="button-reset">
                Reset
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Reactance value</CardDescription>
            </CardHeader>
            <CardContent>
              {(xlResult !== null || xcResult !== null) ? (
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">
                      {activeTab === "inductive" ? "Inductive Reactance (XL)" : "Capacitive Reactance (XC)"}
                    </div>
                    <div className="text-3xl font-bold font-mono" data-testid="text-result-reactance">
                      {activeTab === "inductive" 
                        ? `${xlResult?.toFixed(4)} Ω` 
                        : `${xcResult?.toFixed(4)} Ω`}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold">Formula Used:</h3>
                    <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                      {activeTab === "inductive" 
                        ? "XL = 2πfL" 
                        : "XC = 1 / (2πfC)"}
                    </div>
                    {activeTab === "inductive" && xlResult !== null && (
                      <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                        XL = 2π × {frequency} × {inductance} = {xlResult.toFixed(4)} Ω
                      </div>
                    )}
                    {activeTab === "capacitive" && xcResult !== null && (
                      <div className="p-4 bg-muted/50 rounded font-mono text-sm">
                        XC = 1 / (2π × {frequency} × {capacitance}) = {xcResult.toFixed(4)} Ω
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Enter values and click Calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
