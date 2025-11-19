import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { CalculatorAccordion } from "@/components/CalculatorAccordion";
import { getCalculatorAccordion } from "@/data/calculatorAccordions";

// Type definitions
type BandCount = 4 | 5 | 6;

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

const toleranceColors4Band = [
  { name: "Brown", value: 1, label: "±1%", hex: "#8B4513" },
  { name: "Red", value: 2, label: "±2%", hex: "#FF0000" },
  { name: "Gold", value: 5, label: "±5%", hex: "#FFD700" },
  { name: "Silver", value: 10, label: "±10%", hex: "#C0C0C0" },
  { name: "None", value: 20, label: "±20%", hex: "#D4AF37" },
];

const toleranceColors5_6Band = [
  { name: "Brown", value: 1, label: "±1%", hex: "#8B4513" },
  { name: "Red", value: 2, label: "±2%", hex: "#FF0000" },
  { name: "Green", value: 0.5, label: "±0.5%", hex: "#00FF00" },
  { name: "Blue", value: 0.25, label: "±0.25%", hex: "#0000FF" },
  { name: "Violet", value: 0.1, label: "±0.1%", hex: "#8B00FF" },
  { name: "Grey", value: 0.05, label: "±0.05%", hex: "#808080" },
  { name: "Gold", value: 5, label: "±5%", hex: "#FFD700" },
  { name: "Silver", value: 10, label: "±10%", hex: "#C0C0C0" },
];

const temperatureCoefficientColors = [
  { name: "Brown", value: 100, label: "100 ppm/°C", hex: "#8B4513" },
  { name: "Red", value: 50, label: "50 ppm/°C", hex: "#FF0000" },
  { name: "Orange", value: 15, label: "15 ppm/°C", hex: "#FFA500" },
  { name: "Yellow", value: 25, label: "25 ppm/°C", hex: "#FFFF00" },
  { name: "Blue", value: 10, label: "10 ppm/°C", hex: "#0000FF" },
  { name: "Violet", value: 5, label: "5 ppm/°C", hex: "#8B00FF" },
  { name: "White", value: 1, label: "1 ppm/°C", hex: "#FFFFFF" },
];

interface ResistorSVGProps {
  bands: string[];
  labels: string[];
  bandCount: BandCount;
}

function ResistorSVG({ bands, labels, bandCount }: ResistorSVGProps) {
  // Calculate positions based on band count
  const bodyWidth = bandCount === 6 ? 280 : bandCount === 5 ? 260 : 240;
  const bodyX = bandCount === 6 ? 60 : bandCount === 5 ? 70 : 80;
  
  // Calculate band positions
  const getBandPositions = () => {
    if (bandCount === 4) {
      return [110, 160, 240, 280];
    } else if (bandCount === 5) {
      return [100, 140, 180, 250, 290];
    } else { // 6 bands
      return [85, 120, 155, 220, 255, 295];
    }
  };

  const positions = getBandPositions();

  return (
    <svg width="100%" height="120" viewBox="0 0 400 120" className="mx-auto">
      {/* Resistor body */}
      <rect x={bodyX} y="35" width={bodyWidth} height="50" fill="#E8D4A0" stroke="#8B7355" strokeWidth="2" rx="5" />
      
      {/* Lead wires */}
      <line x1="10" y1="60" x2={bodyX} y2="60" stroke="#888888" strokeWidth="3" />
      <line x1={bodyX + bodyWidth} y1="60" x2="390" y2="60" stroke="#888888" strokeWidth="3" />
      
      {/* Color bands */}
      {bands.map((band, index) => (
        <rect 
          key={index}
          x={positions[index]} 
          y="30" 
          width="20" 
          height="60" 
          fill={band} 
          stroke="#333" 
          strokeWidth="1"
        />
      ))}
      
      {/* Labels */}
      {labels.map((label, index) => (
        <text 
          key={index}
          x={positions[index] + 10} 
          y="110" 
          fontSize="11" 
          textAnchor="middle" 
          fill="currentColor"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

export default function ResistorColorCode() {
  // Band count state
  const [bandCount, setBandCount] = useState<BandCount>(4);

  // Color to Value state - all bands
  const [band1Color, setBand1Color] = useState("Brown");
  const [band2Color, setBand2Color] = useState("Black");
  const [band3Color, setBand3Color] = useState("Black"); // 3rd digit for 5/6-band, or multiplier for 4-band
  const [band4Color, setBand4Color] = useState("Red"); // Multiplier for 5/6-band, tolerance for 4-band
  const [band5Color, setBand5Color] = useState("Gold"); // Tolerance for 5/6-band
  const [band6Color, setBand6Color] = useState("Brown"); // Temperature coefficient for 6-band

  // Value to Color state
  const [resistanceValue, setResistanceValue] = useState("");
  const [selectedTolerance, setSelectedTolerance] = useState("Gold");
  const [selectedTempCoeff, setSelectedTempCoeff] = useState("Brown");
  const [valueBandCount, setValueBandCount] = useState<BandCount>(4);

  // Get tolerance colors based on band count
  const getToleranceColors = (bands: BandCount) => {
    return bands === 4 ? toleranceColors4Band : toleranceColors5_6Band;
  };

  // Calculate resistance from colors
  const calculateResistance = () => {
    if (bandCount === 4) {
      // 4-band: digit-digit-multiplier-tolerance
      const digit1 = digitColors.find(c => c.name === band1Color)?.value ?? 0;
      const digit2 = digitColors.find(c => c.name === band2Color)?.value ?? 0;
      const multiplier = multiplierColors.find(c => c.name === band3Color)?.value ?? 1;
      const tolerance = toleranceColors4Band.find(c => c.name === band4Color)?.value ?? 5;

      const baseValue = (digit1 * 10 + digit2) * multiplier;
      return { baseValue, tolerance, tempCoeff: null };
    } else if (bandCount === 5) {
      // 5-band: digit-digit-digit-multiplier-tolerance
      const digit1 = digitColors.find(c => c.name === band1Color)?.value ?? 0;
      const digit2 = digitColors.find(c => c.name === band2Color)?.value ?? 0;
      const digit3 = digitColors.find(c => c.name === band3Color)?.value ?? 0;
      const multiplier = multiplierColors.find(c => c.name === band4Color)?.value ?? 1;
      const tolerance = toleranceColors5_6Band.find(c => c.name === band5Color)?.value ?? 1;

      const baseValue = (digit1 * 100 + digit2 * 10 + digit3) * multiplier;
      return { baseValue, tolerance, tempCoeff: null };
    } else {
      // 6-band: digit-digit-digit-multiplier-tolerance-tempcoeff
      const digit1 = digitColors.find(c => c.name === band1Color)?.value ?? 0;
      const digit2 = digitColors.find(c => c.name === band2Color)?.value ?? 0;
      const digit3 = digitColors.find(c => c.name === band3Color)?.value ?? 0;
      const multiplier = multiplierColors.find(c => c.name === band4Color)?.value ?? 1;
      const tolerance = toleranceColors5_6Band.find(c => c.name === band5Color)?.value ?? 1;
      const tempCoeff = temperatureCoefficientColors.find(c => c.name === band6Color)?.value ?? 100;

      const baseValue = (digit1 * 100 + digit2 * 10 + digit3) * multiplier;
      return { baseValue, tolerance, tempCoeff };
    }
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

  // Calculate colors from resistance value (2 or 3 significant digits)
  const calculateColors = (resistance: number, targetBandCount: BandCount) => {
    if (resistance <= 0 || !isFinite(resistance)) {
      return null;
    }

    const availableMultipliers = multiplierColors.map(c => c.value).sort((a, b) => a - b);
    const minMultiplier = Math.min(...availableMultipliers);
    const maxMultiplier = Math.max(...availableMultipliers);
    
    const usesThreeDigits = targetBandCount >= 5;
    
    // Normalize to 2 or 3 significant digits
    let normalized = resistance;
    let mult = 1;
    
    const targetMin = usesThreeDigits ? 100 : 10;
    const targetMax = usesThreeDigits ? 1000 : 100;
    
    // Get normalized to appropriate range
    while (normalized >= targetMax) {
      normalized /= 10;
      mult *= 10;
    }
    
    while (normalized < targetMin) {
      normalized *= 10;
      mult /= 10;
    }

    // Constrain multiplier to available range
    if (mult < minMultiplier) {
      const scaleFactor = minMultiplier / mult;
      normalized *= scaleFactor;
      mult = minMultiplier;
      
      while (normalized >= targetMax) {
        normalized /= 10;
        mult *= 10;
      }
    }
    
    if (mult > maxMultiplier) {
      const scaleFactor = mult / maxMultiplier;
      normalized *= scaleFactor;
      mult = maxMultiplier;
      
      while (normalized < targetMin && mult > minMultiplier) {
        normalized *= 10;
        mult /= 10;
      }
    }

    // Extract digits with rounding to avoid floating point issues
    let digit1, digit2, digit3 = 0;
    
    if (usesThreeDigits) {
      const roundedNormalized = Math.round(normalized);
      digit1 = Math.floor(roundedNormalized / 100);
      digit2 = Math.floor((roundedNormalized % 100) / 10);
      digit3 = Math.round(roundedNormalized % 10);
      
      // Ensure digits are in valid range
      if (digit1 > 9) {
        digit1 = 1;
        digit2 = 0;
        digit3 = 0;
        mult *= 10;
      }
      if (digit2 > 9) digit2 = 9;
      if (digit3 > 9) digit3 = 9;
    } else {
      const roundedNormalized = Math.round(normalized * 10) / 10;
      digit1 = Math.floor(roundedNormalized / 10);
      digit2 = Math.round(roundedNormalized % 10);
      
      if (digit1 > 9) {
        digit1 = 1;
        digit2 = 0;
        mult *= 10;
      }
      if (digit2 > 9) digit2 = 9;
    }

    // Find closest matching multiplier
    const closestMultiplier = availableMultipliers.reduce((prev, curr) => 
      Math.abs(curr - mult) < Math.abs(prev - mult) ? curr : prev
    );

    // Find colors
    const color1 = digitColors.find(c => c.value === digit1)?.name ?? "Black";
    const color2 = digitColors.find(c => c.value === digit2)?.name ?? "Black";
    const color3 = usesThreeDigits ? (digitColors.find(c => c.value === digit3)?.name ?? "Black") : "";
    const multiplierColor = multiplierColors.find(c => c.value === closestMultiplier)?.name ?? "Black";

    return { color1, color2, color3, multiplierColor };
  };

  const resistanceResult = calculateResistance();
  const valueToColorResult = resistanceValue ? calculateColors(parseFloat(resistanceValue), valueBandCount) : null;

  // Get hex colors for SVG
  const getBandHex = (colorName: string, type: 'digit' | 'multiplier' | 'tolerance' | 'tempcoeff') => {
    if (type === 'digit') {
      return digitColors.find(c => c.name === colorName)?.hex ?? "#000000";
    } else if (type === 'multiplier') {
      return multiplierColors.find(c => c.name === colorName)?.hex ?? "#000000";
    } else if (type === 'tempcoeff') {
      return temperatureCoefficientColors.find(c => c.name === colorName)?.hex ?? "#8B4513";
    } else {
      const tolerances = bandCount === 4 ? toleranceColors4Band : toleranceColors5_6Band;
      return tolerances.find(c => c.name === colorName)?.hex ?? "#FFD700";
    }
  };

  // Get SVG bands and labels for Color to Value mode
  const getColorToValueBands = () => {
    if (bandCount === 4) {
      return {
        bands: [
          getBandHex(band1Color, 'digit'),
          getBandHex(band2Color, 'digit'),
          getBandHex(band3Color, 'multiplier'),
          getBandHex(band4Color, 'tolerance'),
        ],
        labels: ['1st', '2nd', 'Mult', 'Tol']
      };
    } else if (bandCount === 5) {
      return {
        bands: [
          getBandHex(band1Color, 'digit'),
          getBandHex(band2Color, 'digit'),
          getBandHex(band3Color, 'digit'),
          getBandHex(band4Color, 'multiplier'),
          getBandHex(band5Color, 'tolerance'),
        ],
        labels: ['1st', '2nd', '3rd', 'Mult', 'Tol']
      };
    } else {
      return {
        bands: [
          getBandHex(band1Color, 'digit'),
          getBandHex(band2Color, 'digit'),
          getBandHex(band3Color, 'digit'),
          getBandHex(band4Color, 'multiplier'),
          getBandHex(band5Color, 'tolerance'),
          getBandHex(band6Color, 'tempcoeff'),
        ],
        labels: ['1st', '2nd', '3rd', 'Mult', 'Tol', 'TC']
      };
    }
  };

  // Get SVG bands and labels for Value to Color mode
  const getValueToColorBands = () => {
    if (!valueToColorResult) return { bands: [], labels: [] };

    const toleranceColors = valueBandCount === 4 ? toleranceColors4Band : toleranceColors5_6Band;
    const toleranceHex = toleranceColors.find(c => c.name === selectedTolerance)?.hex ?? "#FFD700";
    const tempCoeffHex = temperatureCoefficientColors.find(c => c.name === selectedTempCoeff)?.hex ?? "#8B4513";

    if (valueBandCount === 4) {
      return {
        bands: [
          getBandHex(valueToColorResult.color1, 'digit'),
          getBandHex(valueToColorResult.color2, 'digit'),
          getBandHex(valueToColorResult.multiplierColor, 'multiplier'),
          toleranceHex,
        ],
        labels: ['1st', '2nd', 'Mult', 'Tol']
      };
    } else if (valueBandCount === 5) {
      return {
        bands: [
          getBandHex(valueToColorResult.color1, 'digit'),
          getBandHex(valueToColorResult.color2, 'digit'),
          getBandHex(valueToColorResult.color3, 'digit'),
          getBandHex(valueToColorResult.multiplierColor, 'multiplier'),
          toleranceHex,
        ],
        labels: ['1st', '2nd', '3rd', 'Mult', 'Tol']
      };
    } else {
      return {
        bands: [
          getBandHex(valueToColorResult.color1, 'digit'),
          getBandHex(valueToColorResult.color2, 'digit'),
          getBandHex(valueToColorResult.color3, 'digit'),
          getBandHex(valueToColorResult.multiplierColor, 'multiplier'),
          toleranceHex,
          tempCoeffHex,
        ],
        labels: ['1st', '2nd', '3rd', 'Mult', 'Tol', 'TC']
      };
    }
  };

  const colorToValueBands = getColorToValueBands();
  const valueToColorBands = getValueToColorBands();

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
                <CardDescription>Choose the number of bands and color of each band on your resistor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Band Count Selector */}
                <div className="space-y-2">
                  <Label>Number of Bands</Label>
                  <div className="flex gap-2">
                    {[4, 5, 6].map((count) => (
                      <button
                        key={count}
                        onClick={() => setBandCount(count as BandCount)}
                        className={`flex-1 py-2 px-4 rounded-md border-2 transition-colors ${
                          bandCount === count
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background hover-elevate active-elevate-2'
                        }`}
                        data-testid={`button-band-count-${count}`}
                      >
                        {count} Band
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Band 1 - Always visible */}
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

                  {/* Band 2 - Always visible */}
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

                  {/* Band 3 - Third digit for 5/6-band, Multiplier for 4-band */}
                  <div className="space-y-2">
                    <Label htmlFor="band3">
                      {bandCount === 4 ? '3rd Band (Multiplier)' : '3rd Band (Third Digit)'}
                    </Label>
                    <Select value={band3Color} onValueChange={setBand3Color}>
                      <SelectTrigger id="band3" data-testid="select-band3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(bandCount === 4 ? multiplierColors : digitColors).map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({bandCount === 4 ? (color as any).label : color.value})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Band 4 - Tolerance for 4-band, Multiplier for 5/6-band */}
                  <div className="space-y-2">
                    <Label htmlFor="band4">
                      {bandCount === 4 ? '4th Band (Tolerance)' : '4th Band (Multiplier)'}
                    </Label>
                    <Select value={band4Color} onValueChange={setBand4Color}>
                      <SelectTrigger id="band4" data-testid="select-band4">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(bandCount === 4 ? toleranceColors4Band : multiplierColors).map((color) => (
                          <SelectItem key={color.name} value={color.name}>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: color.hex }} />
                              {color.name} ({(color as any).label})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Band 5 - Tolerance for 5/6-band only */}
                  {bandCount >= 5 && (
                    <div className="space-y-2">
                      <Label htmlFor="band5">5th Band (Tolerance)</Label>
                      <Select value={band5Color} onValueChange={setBand5Color}>
                        <SelectTrigger id="band5" data-testid="select-band5">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {toleranceColors5_6Band.map((color) => (
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
                  )}

                  {/* Band 6 - Temperature coefficient for 6-band only */}
                  {bandCount === 6 && (
                    <div className="space-y-2">
                      <Label htmlFor="band6">6th Band (Temp. Coefficient)</Label>
                      <Select value={band6Color} onValueChange={setBand6Color}>
                        <SelectTrigger id="band6" data-testid="select-band6">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {temperatureCoefficientColors.map((color) => (
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
                  )}
                </div>

                {/* Resistor Visualization */}
                <div className="border rounded-lg p-4 bg-muted/20">
                  <ResistorSVG
                    bands={colorToValueBands.bands}
                    labels={colorToValueBands.labels}
                    bandCount={bandCount}
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
                    {resistanceResult.tempCoeff !== null && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Temp. Coefficient:</span>
                        <span className="text-lg font-mono" data-testid="result-tempcoeff">
                          {resistanceResult.tempCoeff} ppm/°C
                        </span>
                      </div>
                    )}
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
                {/* Band Count Selector */}
                <div className="space-y-2">
                  <Label>Target Number of Bands</Label>
                  <div className="flex gap-2">
                    {[4, 5, 6].map((count) => (
                      <button
                        key={count}
                        onClick={() => setValueBandCount(count as BandCount)}
                        className={`flex-1 py-2 px-4 rounded-md border-2 transition-colors ${
                          valueBandCount === count
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background hover-elevate active-elevate-2'
                        }`}
                        data-testid={`button-value-band-count-${count}`}
                      >
                        {count} Band
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="tolerance">Tolerance</Label>
                    <Select value={selectedTolerance} onValueChange={setSelectedTolerance}>
                      <SelectTrigger id="tolerance" data-testid="select-tolerance">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {getToleranceColors(valueBandCount).map((color) => (
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

                  {valueBandCount === 6 && (
                    <div className="space-y-2">
                      <Label htmlFor="tempcoeff">Temperature Coefficient</Label>
                      <Select value={selectedTempCoeff} onValueChange={setSelectedTempCoeff}>
                        <SelectTrigger id="tempcoeff" data-testid="select-tempcoeff">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {temperatureCoefficientColors.map((color) => (
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
                  )}
                </div>

                {valueToColorResult && (
                  <>
                    {/* Resistor Visualization */}
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <ResistorSVG
                        bands={valueToColorBands.bands}
                        labels={valueToColorBands.labels}
                        bandCount={valueBandCount}
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
                          {valueBandCount >= 5 && (
                            <div className="space-y-1">
                              <span className="text-sm text-muted-foreground">3rd Band:</span>
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-6 h-6 rounded border border-border" 
                                  style={{ backgroundColor: getBandHex(valueToColorResult.color3, 'digit') }}
                                />
                                <span className="font-medium" data-testid="result-color3">{valueToColorResult.color3}</span>
                              </div>
                            </div>
                          )}
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">{valueBandCount >= 5 ? '4th' : '3rd'} Band (Mult):</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getBandHex(valueToColorResult.multiplierColor, 'multiplier') }}
                              />
                              <span className="font-medium" data-testid="result-multiplier">{valueToColorResult.multiplierColor}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm text-muted-foreground">{valueBandCount >= 5 ? '5th' : '4th'} Band (Tol):</span>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-6 h-6 rounded border border-border" 
                                style={{ backgroundColor: getToleranceColors(valueBandCount).find(c => c.name === selectedTolerance)?.hex }}
                              />
                              <span className="font-medium" data-testid="result-tolerance-color">
                                {selectedTolerance} ({getToleranceColors(valueBandCount).find(c => c.name === selectedTolerance)?.label})
                              </span>
                            </div>
                          </div>
                          {valueBandCount === 6 && (
                            <div className="space-y-1">
                              <span className="text-sm text-muted-foreground">6th Band (TC):</span>
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-6 h-6 rounded border border-border" 
                                  style={{ backgroundColor: temperatureCoefficientColors.find(c => c.name === selectedTempCoeff)?.hex }}
                                />
                                <span className="font-medium" data-testid="result-tempcoeff-color">
                                  {selectedTempCoeff} ({temperatureCoefficientColors.find(c => c.name === selectedTempCoeff)?.label})
                                </span>
                              </div>
                            </div>
                          )}
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
                    <th className="text-center p-2">Temp. Coeff.</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Black", hex: "#000000", digit: "0", mult: "×1", tol: "-", tc: "-" },
                    { name: "Brown", hex: "#8B4513", digit: "1", mult: "×10", tol: "±1%", tc: "100 ppm/°C" },
                    { name: "Red", hex: "#FF0000", digit: "2", mult: "×100", tol: "±2%", tc: "50 ppm/°C" },
                    { name: "Orange", hex: "#FFA500", digit: "3", mult: "×1k", tol: "-", tc: "15 ppm/°C" },
                    { name: "Yellow", hex: "#FFFF00", digit: "4", mult: "×10k", tol: "-", tc: "25 ppm/°C" },
                    { name: "Green", hex: "#00FF00", digit: "5", mult: "×100k", tol: "±0.5%", tc: "-" },
                    { name: "Blue", hex: "#0000FF", digit: "6", mult: "×1M", tol: "±0.25%", tc: "10 ppm/°C" },
                    { name: "Violet", hex: "#8B00FF", digit: "7", mult: "×10M", tol: "±0.1%", tc: "5 ppm/°C" },
                    { name: "Grey", hex: "#808080", digit: "8", mult: "-", tol: "±0.05%", tc: "-" },
                    { name: "White", hex: "#FFFFFF", digit: "9", mult: "-", tol: "-", tc: "1 ppm/°C" },
                    { name: "Gold", hex: "#FFD700", digit: "-", mult: "×0.1", tol: "±5%", tc: "-" },
                    { name: "Silver", hex: "#C0C0C0", digit: "-", mult: "×0.01", tol: "±10%", tc: "-" },
                  ].map((row) => (
                    <tr key={row.name} className="border-b">
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: row.hex }} />
                          <span>{row.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-2">{row.digit}</td>
                      <td className="text-center p-2">{row.mult}</td>
                      <td className="text-center p-2">{row.tol}</td>
                      <td className="text-center p-2">{row.tc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Educational Accordion */}
        <CalculatorAccordion content={getCalculatorAccordion('resistor-color-code')} />
      </div>
    </div>
  );
}
