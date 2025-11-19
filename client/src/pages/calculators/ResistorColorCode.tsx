import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";

// Color code definitions
const digitColors = [
  { name: "Black", value: 0, hex: "#000000" },
  { name: "Brown", value: 1, hex: "#8B4513" },
  { name: "Red", value: 2, hex: "#FF0000" },
  { name: "Orange", value: 3, hex: "#FFA500" },
  { name: "Yellow", value: 4, hex: "#FFFF00" },
  { name: "Green", value: 5, hex: "#00FF00" },
  { name: "Blue", value: 6, hex: "#0000FF" },
  { name: "Violet", value: 7, hex: "#8B00FF" },
  { name: "Grey", value: 8, hex: "#808080" },
  { name: "White", value: 9, hex: "#FFFFFF" },
];

const multiplierColors = [
  { name: "Black", value: 1, label: "×1", hex: "#000000" },
  { name: "Brown", value: 10, label: "×10", hex: "#8B4513" },
  { name: "Red", value: 100, label: "×100", hex: "#FF0000" },
  { name: "Orange", value: 1000, label: "×1k", hex: "#FFA500" },
  { name: "Yellow", value: 10000, label: "×10k", hex: "#FFFF00" },
  { name: "Green", value: 100000, label: "×100k", hex: "#00FF00" },
  { name: "Blue", value: 1000000, label: "×1M", hex: "#0000FF" },
  { name: "Violet", value: 10000000, label: "×10M", hex: "#8B00FF" },
  { name: "Gold", value: 0.1, label: "×0.1", hex: "#FFD700" },
  { name: "Silver", value: 0.01, label: "×0.01", hex: "#C0C0C0" },
];

const toleranceColors = [
  { name: "Brown", value: 1, label: "±1%", hex: "#8B4513" },
  { name: "Red", value: 2, label: "±2%", hex: "#FF0000" },
  { name: "Gold", value: 5, label: "±5%", hex: "#FFD700" },
  { name: "Silver", value: 10, label: "±10%", hex: "#C0C0C0" },
  { name: "None", value: 20, label: "±20%", hex: "#D4AF37" },
];

function ResistorSVG({ band1, band2, band3, band4 }: { band1: string; band2: string; band3: string; band4: string }) {
  return (
    <svg width="100%" height="120" viewBox="0 0 400 120" className="mx-auto">
      {/* Resistor body */}
      <rect x="80" y="35" width="240" height="50" fill="#E8D4A0" stroke="#8B7355" strokeWidth="2" rx="5" />
      
      {/* Lead wires */}
      <line x1="10" y1="60" x2="80" y2="60" stroke="#888888" strokeWidth="3" />
      <line x1="320" y1="60" x2="390" y2="60" stroke="#888888" strokeWidth="3" />
      
      {/* Color bands */}
      <rect x="110" y="30" width="20" height="60" fill={band1} stroke="#333" strokeWidth="1" />
      <rect x="160" y="30" width="20" height="60" fill={band2} stroke="#333" strokeWidth="1" />
      <rect x="240" y="30" width="20" height="60" fill={band3} stroke="#333" strokeWidth="1" />
      <rect x="280" y="30" width="20" height="60" fill={band4} stroke="#333" strokeWidth="1" />
      
      {/* Labels */}
      <text x="120" y="110" fontSize="12" textAnchor="middle" fill="currentColor">1st</text>
      <text x="170" y="110" fontSize="12" textAnchor="middle" fill="currentColor">2nd</text>
      <text x="250" y="110" fontSize="12" textAnchor="middle" fill="currentColor">Mult</text>
      <text x="290" y="110" fontSize="12" textAnchor="middle" fill="currentColor">Tol</text>
    </svg>
  );
}

export default function ResistorColorCode() {
  // Color to Value state
  const [band1Color, setBand1Color] = useState("Brown");
  const [band2Color, setBand2Color] = useState("Black");
  const [band3Color, setBand3Color] = useState("Red");
  const [band4Color, setBand4Color] = useState("Gold");

  // Value to Color state
  const [resistanceValue, setResistanceValue] = useState("");

  // Calculate resistance from colors
  const calculateResistance = () => {
    const digit1 = digitColors.find(c => c.name === band1Color)?.value ?? 0;
    const digit2 = digitColors.find(c => c.name === band2Color)?.value ?? 0;
    const multiplier = multiplierColors.find(c => c.name === band3Color)?.value ?? 1;
    const tolerance = toleranceColors.find(c => c.name === band4Color)?.value ?? 5;

    const baseValue = (digit1 * 10 + digit2) * multiplier;
    
    return { baseValue, tolerance };
  };

  // Format resistance value with appropriate unit
  const formatResistance = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)} MΩ`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)} kΩ`;
    } else {
      return `${value.toFixed(2)} Ω`;
    }
  };

  // Calculate colors from resistance value
  const calculateColors = (resistance: number) => {
    if (resistance <= 0 || !isFinite(resistance)) {
      return null;
    }

    // Find the appropriate multiplier
    let digit1 = 0, digit2 = 0, multiplier = 1;
    
    // Normalize to two significant digits
    let normalized = resistance;
    let mult = 1;
    
    while (normalized >= 100) {
      normalized /= 10;
      mult *= 10;
    }
    
    while (normalized < 10) {
      normalized *= 10;
      mult /= 10;
    }

    digit1 = Math.floor(normalized / 10);
    digit2 = Math.floor(normalized % 10);
    multiplier = mult;

    // Find closest matching colors
    const color1 = digitColors.find(c => c.value === digit1)?.name ?? "Black";
    const color2 = digitColors.find(c => c.value === digit2)?.name ?? "Black";
    const color3 = multiplierColors.reduce((prev, curr) => 
      Math.abs(curr.value - multiplier) < Math.abs(prev.value - multiplier) ? curr : prev
    ).name;

    return { color1, color2, color3 };
  };

  const resistanceResult = calculateResistance();
  const valueToColorResult = resistanceValue ? calculateColors(parseFloat(resistanceValue)) : null;

  // Get hex colors for SVG
  const getBandHex = (colorName: string, type: 'digit' | 'multiplier' | 'tolerance') => {
    if (type === 'digit') {
      return digitColors.find(c => c.name === colorName)?.hex ?? "#000000";
    } else if (type === 'multiplier') {
      return multiplierColors.find(c => c.name === colorName)?.hex ?? "#000000";
    } else {
      return toleranceColors.find(c => c.name === colorName)?.hex ?? "#FFD700";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="button-back">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-title">Resistor Color Code Calculator</h1>
            <p className="text-muted-foreground" data-testid="text-description">
              Decode resistor color bands to resistance value or encode resistance to color bands
            </p>
          </div>
        </div>

        <Tabs defaultValue="color-to-value" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="color-to-value" data-testid="tab-color-to-value">Color to Value</TabsTrigger>
            <TabsTrigger value="value-to-color" data-testid="tab-value-to-color">Value to Color</TabsTrigger>
          </TabsList>

          {/* Color to Value Tab */}
          <TabsContent value="color-to-value" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Color Bands</CardTitle>
                <CardDescription>Choose the color of each band on your resistor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Color Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="band1">1st Band (First Digit)</Label>
                    <Select value={band1Color} onValueChange={setBand1Color}>
                      <SelectTrigger id="band1" data-testid="select-band1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {digitColors.map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({color.value})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="band2">2nd Band (Second Digit)</Label>
                    <Select value={band2Color} onValueChange={setBand2Color}>
                      <SelectTrigger id="band2" data-testid="select-band2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {digitColors.map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({color.value})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="band3">3rd Band (Multiplier)</Label>
                    <Select value={band3Color} onValueChange={setBand3Color}>
                      <SelectTrigger id="band3" data-testid="select-band3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {multiplierColors.map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({color.label})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="band4">4th Band (Tolerance)</Label>
                    <Select value={band4Color} onValueChange={setBand4Color}>
                      <SelectTrigger id="band4" data-testid="select-band4">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {toleranceColors.map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({color.label})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Resistor Visualization */}
                <div className="border rounded-lg p-4 bg-muted/20">
                  <ResistorSVG
                    band1={getBandHex(band1Color, 'digit')}
                    band2={getBandHex(band2Color, 'digit')}
                    band3={getBandHex(band3Color, 'multiplier')}
                    band4={getBandHex(band4Color, 'tolerance')}
                  />
                </div>

                {/* Result */}
                <div className="p-4 border rounded-lg bg-primary/5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Resistance:</span>
                      <span className="text-2xl font-mono font-bold" data-testid="result-resistance">
                        {formatResistance(resistanceResult.baseValue)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tolerance:</span>
                      <span className="text-lg font-mono" data-testid="result-tolerance">
                        ±{resistanceResult.tolerance}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Range:</span>
                      <span data-testid="result-range">
                        {formatResistance(resistanceResult.baseValue * (1 - resistanceResult.tolerance / 100))} to{" "}
                        {formatResistance(resistanceResult.baseValue * (1 + resistanceResult.tolerance / 100))}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Value to Color Tab */}
          <TabsContent value="value-to-color" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Enter Resistance Value</CardTitle>
                <CardDescription>Input the resistance value to get the color code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="resistance">Resistance Value (Ω)</Label>
                  <Input
                    id="resistance"
                    type="number"
                    value={resistanceValue}
                    onChange={(e) => setResistanceValue(e.target.value)}
                    placeholder="e.g., 1000 for 1kΩ"
                    step="any"
                    min="0"
                    data-testid="input-resistance"
                  />
                </div>

                {valueToColorResult && (
                  <>
                    {/* Resistor Visualization */}
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <ResistorSVG
                        band1={getBandHex(valueToColorResult.color1, 'digit')}
                        band2={getBandHex(valueToColorResult.color2, 'digit')}
                        band3={getBandHex(valueToColorResult.color3, 'multiplier')}
                        band4={getBandHex("Gold", 'tolerance')}
                      />
                    </div>

                    {/* Color Code Result */}
                    <div className="p-4 border rounded-lg bg-primary/5">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Color Code:</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">1st Band:</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getBandHex(valueToColorResult.color1, 'digit') }}
                              />
                              <span className="font-medium" data-testid="result-color1">{valueToColorResult.color1}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">2nd Band:</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getBandHex(valueToColorResult.color2, 'digit') }}
                              />
                              <span className="font-medium" data-testid="result-color2">{valueToColorResult.color2}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">3rd Band (Mult):</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getBandHex(valueToColorResult.color3, 'multiplier') }}
                              />
                              <span className="font-medium" data-testid="result-color3">{valueToColorResult.color3}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">4th Band (Tol):</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getBandHex("Gold", 'tolerance') }}
                              />
                              <span className="font-medium" data-testid="result-color4">Gold (±5%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {!valueToColorResult && resistanceValue && (
                  <div className="p-4 border border-destructive/50 rounded-lg bg-destructive/5 text-destructive">
                    Please enter a valid positive resistance value
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Color Code Reference Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Color Code Reference Chart</CardTitle>
            <CardDescription>Standard resistor color code values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Color</th>
                    <th className="text-center p-2">Digit</th>
                    <th className="text-center p-2">Multiplier</th>
                    <th className="text-center p-2">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-black" />
                        <span>Black</span>
                      </div>
                    </td>
                    <td className="text-center p-2">0</td>
                    <td className="text-center p-2">×1</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: "#8B4513" }} />
                        <span>Brown</span>
                      </div>
                    </td>
                    <td className="text-center p-2">1</td>
                    <td className="text-center p-2">×10</td>
                    <td className="text-center p-2">±1%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-red-500" />
                        <span>Red</span>
                      </div>
                    </td>
                    <td className="text-center p-2">2</td>
                    <td className="text-center p-2">×100</td>
                    <td className="text-center p-2">±2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-orange-500" />
                        <span>Orange</span>
                      </div>
                    </td>
                    <td className="text-center p-2">3</td>
                    <td className="text-center p-2">×1k</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-yellow-400" />
                        <span>Yellow</span>
                      </div>
                    </td>
                    <td className="text-center p-2">4</td>
                    <td className="text-center p-2">×10k</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-green-500" />
                        <span>Green</span>
                      </div>
                    </td>
                    <td className="text-center p-2">5</td>
                    <td className="text-center p-2">×100k</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-blue-500" />
                        <span>Blue</span>
                      </div>
                    </td>
                    <td className="text-center p-2">6</td>
                    <td className="text-center p-2">×1M</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: "#8B00FF" }} />
                        <span>Violet</span>
                      </div>
                    </td>
                    <td className="text-center p-2">7</td>
                    <td className="text-center p-2">×10M</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-gray-500" />
                        <span>Grey</span>
                      </div>
                    </td>
                    <td className="text-center p-2">8</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border bg-white" />
                        <span>White</span>
                      </div>
                    </td>
                    <td className="text-center p-2">9</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: "#FFD700" }} />
                        <span>Gold</span>
                      </div>
                    </td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">×0.1</td>
                    <td className="text-center p-2">±5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: "#C0C0C0" }} />
                        <span>Silver</span>
                      </div>
                    </td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">×0.01</td>
                    <td className="text-center p-2">±10%</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: "#D4AF37" }} />
                        <span>None</span>
                      </div>
                    </td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">-</td>
                    <td className="text-center p-2">±20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Educational Accordion */}
        <CalculatorAccordion calculatorId="resistor-color-code" />
      </div>
    </div>
  );
}
