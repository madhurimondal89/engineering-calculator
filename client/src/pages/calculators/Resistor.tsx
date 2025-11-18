import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resistor() {
  const [seriesR1, setSeriesR1] = useState("");
  const [seriesR2, setSeriesR2] = useState("");
  const [seriesTotal, setSeriesTotal] = useState<number | null>(null);
  
  const [parallelR1, setParallelR1] = useState("");
  const [parallelR2, setParallelR2] = useState("");
  const [parallelTotal, setParallelTotal] = useState<number | null>(null);

  const calculateSeries = () => {
    const r1 = parseFloat(seriesR1);
    const r2 = parseFloat(seriesR2);
    if (!isNaN(r1) && !isNaN(r2)) {
      setSeriesTotal(r1 + r2);
    }
  };

  const calculateParallel = () => {
    const r1 = parseFloat(parallelR1);
    const r2 = parseFloat(parallelR2);
    if (!isNaN(r1) && !isNaN(r2)) {
      setParallelTotal((r1 * r2) / (r1 + r2));
    }
  };

  const resetSeries = () => {
    setSeriesR1("");
    setSeriesR2("");
    setSeriesTotal(null);
  };

  const resetParallel = () => {
    setParallelR1("");
    setParallelR2("");
    setParallelTotal(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb category="Electrical" calculatorName="Resistor Calculator" />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-calculator-title">Resistor Calculator</h1>
          <p className="text-base text-muted-foreground" data-testid="text-calculator-description">
            Calculate total resistance for resistors in series or parallel configuration.
          </p>
        </div>

        <Tabs defaultValue="series" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="series" data-testid="tab-series">Series</TabsTrigger>
            <TabsTrigger value="parallel" data-testid="tab-parallel">Parallel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="series">
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Series Configuration</CardTitle>
                  <CardDescription>Resistors in series</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="series-r1">Resistor 1 (R₁)</Label>
                    <div className="relative">
                      <Input
                        id="series-r1"
                        type="number"
                        placeholder="Enter resistance"
                        value={seriesR1}
                        onChange={(e) => setSeriesR1(e.target.value)}
                        className="pr-12"
                        data-testid="input-series-r1"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ω</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="series-r2">Resistor 2 (R₂)</Label>
                    <div className="relative">
                      <Input
                        id="series-r2"
                        type="number"
                        placeholder="Enter resistance"
                        value={seriesR2}
                        onChange={(e) => setSeriesR2(e.target.value)}
                        className="pr-12"
                        data-testid="input-series-r2"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ω</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={calculateSeries} className="flex-1" data-testid="button-calculate-series">Calculate</Button>
                    <Button onClick={resetSeries} variant="outline" data-testid="button-reset-series">Reset</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>Total resistance</CardDescription>
                </CardHeader>
                <CardContent>
                  {seriesTotal !== null ? (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Total Resistance</p>
                        <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-series-total">{seriesTotal.toFixed(2)} Ω</p>
                      </div>
                      <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                        <p className="font-medium mb-1">Formula used:</p>
                        <p className="font-mono">R_total = R₁ + R₂</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>Enter values and click Calculate</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parallel">
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Parallel Configuration</CardTitle>
                  <CardDescription>Resistors in parallel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="parallel-r1">Resistor 1 (R₁)</Label>
                    <div className="relative">
                      <Input
                        id="parallel-r1"
                        type="number"
                        placeholder="Enter resistance"
                        value={parallelR1}
                        onChange={(e) => setParallelR1(e.target.value)}
                        className="pr-12"
                        data-testid="input-parallel-r1"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ω</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parallel-r2">Resistor 2 (R₂)</Label>
                    <div className="relative">
                      <Input
                        id="parallel-r2"
                        type="number"
                        placeholder="Enter resistance"
                        value={parallelR2}
                        onChange={(e) => setParallelR2(e.target.value)}
                        className="pr-12"
                        data-testid="input-parallel-r2"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">Ω</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={calculateParallel} className="flex-1" data-testid="button-calculate-parallel">Calculate</Button>
                    <Button onClick={resetParallel} variant="outline" data-testid="button-reset-parallel">Reset</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>Total resistance</CardDescription>
                </CardHeader>
                <CardContent>
                  {parallelTotal !== null ? (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Total Resistance</p>
                        <p className="text-2xl md:text-3xl font-bold font-mono" data-testid="result-parallel-total">{parallelTotal.toFixed(2)} Ω</p>
                      </div>
                      <div className="pt-4 mt-4 border-t text-xs text-muted-foreground">
                        <p className="font-medium mb-1">Formula used:</p>
                        <p className="font-mono">1/R_total = 1/R₁ + 1/R₂</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>Enter values and click Calculate</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
