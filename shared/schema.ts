import { z } from "zod";

// Calculator category types
export const calculatorCategories = [
  "Electrical",
  "AC Circuits",
  "Electronics",
  "Wire & Cable",
  "Mechanical", 
  "Civil",
  "General Science"
] as const;

export type CalculatorCategory = typeof calculatorCategories[number];

// Calculator metadata
export interface Calculator {
  id: string;
  title: string;
  description: string;
  category: CalculatorCategory;
  path: string;
  icon: string;
}

// Electrical Calculator Schemas
export const ohmsLawSchema = z.object({
  voltage: z.number().optional(),
  current: z.number().optional(),
  resistance: z.number().optional(),
});

export const powerCalculatorSchema = z.object({
  voltage: z.number().optional(),
  current: z.number().optional(),
  power: z.number().optional(),
  resistance: z.number().optional(),
});

// Mechanical Calculator Schemas
export const forceCalculatorSchema = z.object({
  mass: z.number().positive(),
  acceleration: z.number(),
});

export const torqueCalculatorSchema = z.object({
  force: z.number().positive(),
  distance: z.number().positive(),
});

export const pressureCalculatorSchema = z.object({
  force: z.number().positive(),
  area: z.number().positive(),
});

// Civil Calculator Schemas
export const beamCalculatorSchema = z.object({
  load: z.number().positive(),
  length: z.number().positive(),
  youngModulus: z.number().positive(),
  momentOfInertia: z.number().positive(),
});

export const concreteVolumeSchema = z.object({
  length: z.number().positive(),
  width: z.number().positive(),
  depth: z.number().positive(),
  unit: z.enum(["m", "ft"]),
});

// General Science Calculator Schemas
export const velocityCalculatorSchema = z.object({
  distance: z.number().positive(),
  time: z.number().positive(),
  unit: z.enum(["m/s", "km/h", "mph"]),
});

export const densityCalculatorSchema = z.object({
  mass: z.number().positive(),
  volume: z.number().positive(),
});

export const accelerationCalculatorSchema = z.object({
  initialVelocity: z.number(),
  finalVelocity: z.number(),
  time: z.number().positive(),
});

// Calculator data
export const calculators: Calculator[] = [
  // Electrical
  {
    id: "ohms-law",
    title: "Ohm's Law Calculator",
    description: "Calculate voltage, current, or resistance using Ohm's Law (V = I × R)",
    category: "Electrical",
    path: "/calculators/ohms-law",
    icon: "Zap"
  },
  {
    id: "power-calculator",
    title: "Electrical Power Calculator",
    description: "Calculate electrical power using voltage, current, or resistance",
    category: "Electrical",
    path: "/calculators/power",
    icon: "Battery"
  },
  {
    id: "resistor-series",
    title: "Resistor Calculator",
    description: "Calculate total resistance for series and parallel resistor combinations",
    category: "Electrical",
    path: "/calculators/resistor",
    icon: "Component"
  },
  {
    id: "voltage-divider",
    title: "Voltage Divider Calculator",
    description: "Calculate output voltage in a voltage divider circuit (Vout = Vin × R2/(R1+R2))",
    category: "Electrical",
    path: "/calculators/voltage-divider",
    icon: "GitBranch"
  },
  {
    id: "current-divider",
    title: "Current Divider Calculator",
    description: "Calculate current distribution in parallel branches (I1 = Itotal × R2/(R1+R2))",
    category: "Electrical",
    path: "/calculators/current-divider",
    icon: "Split"
  },
  {
    id: "series-parallel-resistance",
    title: "Series & Parallel Resistance Calculator",
    description: "Calculate total resistance for multiple resistors in series or parallel configuration",
    category: "Electrical",
    path: "/calculators/series-parallel-resistance",
    icon: "Network"
  },
  {
    id: "series-parallel-capacitor",
    title: "Series & Parallel Capacitor Calculator",
    description: "Calculate total capacitance for multiple capacitors in series or parallel",
    category: "Electrical",
    path: "/calculators/series-parallel-capacitor",
    icon: "Boxes"
  },
  {
    id: "series-parallel-inductor",
    title: "Series & Parallel Inductor Calculator",
    description: "Calculate total inductance for multiple inductors in series or parallel",
    category: "Electrical",
    path: "/calculators/series-parallel-inductor",
    icon: "Codesandbox"
  },
  {
    id: "conductance",
    title: "Conductance Calculator",
    description: "Convert between resistance and conductance (G = 1/R, R = 1/G)",
    category: "Electrical",
    path: "/calculators/conductance",
    icon: "Activity"
  },
  {
    id: "impedance",
    title: "Impedance Calculator",
    description: "Calculate complex impedance from resistance and reactance (Z = R + jX)",
    category: "Electrical",
    path: "/calculators/impedance",
    icon: "Workflow"
  },
  {
    id: "reactance",
    title: "Reactance Calculator",
    description: "Calculate inductive (XL = 2πfL) and capacitive reactance (XC = 1/(2πfC))",
    category: "Electrical",
    path: "/calculators/reactance",
    icon: "Radio"
  },
  {
    id: "resistor-color-code",
    title: "Resistor Color Code Calculator",
    description: "Decode resistor color bands to resistance value or encode resistance to color bands",
    category: "Electrical",
    path: "/calculators/resistor-color-code",
    icon: "Palette"
  },
  
  // AC Circuits
  {
    id: "ac-power",
    title: "AC Power Calculator",
    description: "Calculate real power (P), reactive power (Q), apparent power (S), and power factor",
    category: "AC Circuits",
    path: "/calculators/ac-power",
    icon: "Zap"
  },
  {
    id: "power-factor",
    title: "Power Factor Calculator",
    description: "Calculate power factor from real and apparent power or phase angle",
    category: "AC Circuits",
    path: "/calculators/power-factor",
    icon: "TrendingUp"
  },
  {
    id: "rlc-series",
    title: "RLC Series Circuit Calculator",
    description: "Calculate impedance, current, and voltage drops in series RLC circuits",
    category: "AC Circuits",
    path: "/calculators/rlc-series",
    icon: "GitMerge"
  },
  {
    id: "rlc-parallel",
    title: "RLC Parallel Circuit Calculator",
    description: "Calculate impedance, current, and branch currents in parallel RLC circuits",
    category: "AC Circuits",
    path: "/calculators/rlc-parallel",
    icon: "GitBranch"
  },
  {
    id: "resonant-frequency",
    title: "Resonant Frequency Calculator",
    description: "Calculate resonant frequency of LC circuits (fr = 1/(2π√LC))",
    category: "AC Circuits",
    path: "/calculators/resonant-frequency",
    icon: "Radio"
  },
  {
    id: "q-factor",
    title: "Quality Factor (Q) Calculator",
    description: "Calculate Q-factor for resonant circuits and bandwidth",
    category: "AC Circuits",
    path: "/calculators/q-factor",
    icon: "Target"
  },
  {
    id: "phase-angle",
    title: "Phase Angle Calculator",
    description: "Calculate phase angle between voltage and current in AC circuits",
    category: "AC Circuits",
    path: "/calculators/phase-angle",
    icon: "RotateCcw"
  },
  {
    id: "time-constant",
    title: "Time Constant Calculator",
    description: "Calculate time constant for RC (τ = RC) and RL (τ = L/R) circuits",
    category: "AC Circuits",
    path: "/calculators/time-constant",
    icon: "Clock"
  },
  {
    id: "ac-voltage-divider",
    title: "AC Voltage Divider Calculator",
    description: "Calculate output voltage in AC voltage divider with impedances",
    category: "AC Circuits",
    path: "/calculators/ac-voltage-divider",
    icon: "Split"
  },
  {
    id: "ac-current-divider",
    title: "AC Current Divider Calculator",
    description: "Calculate current distribution in parallel AC branches with impedances",
    category: "AC Circuits",
    path: "/calculators/ac-current-divider",
    icon: "GitBranch"
  },
  {
    id: "impedance-matching",
    title: "Impedance Matching Calculator",
    description: "Calculate components needed for impedance matching networks",
    category: "AC Circuits",
    path: "/calculators/impedance-matching",
    icon: "Layers"
  },
  {
    id: "transformer",
    title: "Transformer Calculator",
    description: "Calculate transformer voltage, current, turns ratio, and power",
    category: "AC Circuits",
    path: "/calculators/transformer",
    icon: "Repeat"
  },
  {
    id: "three-phase-power",
    title: "Three Phase Power Calculator",
    description: "Calculate three-phase power, line and phase voltages, and currents",
    category: "AC Circuits",
    path: "/calculators/three-phase-power",
    icon: "Layers"
  },
  
  // Electronics
  {
    id: "led-resistor",
    title: "LED Resistor Calculator",
    description: "Calculate the required current-limiting resistor for LEDs",
    category: "Electronics",
    path: "/calculators/led-resistor",
    icon: "Lightbulb"
  },
  {
    id: "voltage-regulator",
    title: "Voltage Regulator Calculator",
    description: "Calculate voltage regulator components and power dissipation",
    category: "Electronics",
    path: "/calculators/voltage-regulator",
    icon: "Gauge"
  },
  {
    id: "bjt-biasing",
    title: "BJT Biasing Calculator",
    description: "Calculate BJT transistor biasing resistors and operating point",
    category: "Electronics",
    path: "/calculators/bjt-biasing",
    icon: "Cpu"
  },
  {
    id: "mosfet",
    title: "MOSFET Calculator",
    description: "Calculate MOSFET parameters including drain current and power",
    category: "Electronics",
    path: "/calculators/mosfet",
    icon: "Chip"
  },
  {
    id: "op-amp",
    title: "Op-Amp Calculator",
    description: "Calculate operational amplifier gain and feedback resistor values",
    category: "Electronics",
    path: "/calculators/op-amp",
    icon: "Triangle"
  },
  {
    id: "555-timer",
    title: "555 Timer Calculator",
    description: "Calculate timing components for 555 timer circuits (astable and monostable)",
    category: "Electronics",
    path: "/calculators/555-timer",
    icon: "Clock"
  },
  {
    id: "rc-filter",
    title: "RC Filter Calculator",
    description: "Calculate RC low-pass and high-pass filter cutoff frequency and response",
    category: "Electronics",
    path: "/calculators/rc-filter",
    icon: "Filter"
  },
  {
    id: "capacitor-charge",
    title: "Capacitor Charge/Discharge Calculator",
    description: "Calculate capacitor voltage and charge over time during charging and discharging",
    category: "Electronics",
    path: "/calculators/capacitor-charge",
    icon: "BatteryCharging"
  },
  {
    id: "zener-diode",
    title: "Zener Diode Calculator",
    description: "Calculate Zener diode voltage regulation and current-limiting resistor",
    category: "Electronics",
    path: "/calculators/zener-diode",
    icon: "Zap"
  },
  {
    id: "transistor-amplifier",
    title: "Transistor Amplifier Gain Calculator",
    description: "Calculate transistor amplifier voltage gain and input/output impedance",
    category: "Electronics",
    path: "/calculators/transistor-amplifier",
    icon: "Volume2"
  },
  {
    id: "wheatstone-bridge",
    title: "Wheatstone Bridge Calculator",
    description: "Calculate unknown resistance using Wheatstone bridge configuration",
    category: "Electronics",
    path: "/calculators/wheatstone-bridge",
    icon: "Grid"
  },
  {
    id: "decibel",
    title: "Decibel (dB) Calculator",
    description: "Convert between power ratio, voltage ratio, and decibels",
    category: "Electronics",
    path: "/calculators/decibel",
    icon: "Radio"
  },
  
  // Wire & Cable
  {
    id: "wire-gauge",
    title: "Wire Gauge Calculator",
    description: "Convert between AWG and metric wire sizes (diameter, area, resistance)",
    category: "Wire & Cable",
    path: "/calculators/wire-gauge",
    icon: "Cable"
  },
  {
    id: "wire-current-capacity",
    title: "Wire Current Capacity Calculator",
    description: "Calculate maximum safe current (ampacity) for wires based on gauge and installation",
    category: "Wire & Cable",
    path: "/calculators/wire-current-capacity",
    icon: "Zap"
  },
  {
    id: "voltage-drop",
    title: "Voltage Drop Calculator",
    description: "Calculate voltage drop in wire runs for single-phase and three-phase circuits",
    category: "Wire & Cable",
    path: "/calculators/voltage-drop",
    icon: "TrendingDown"
  },
  {
    id: "wire-resistance",
    title: "Wire Resistance Calculator",
    description: "Calculate wire resistance based on material, length, and cross-sectional area",
    category: "Wire & Cable",
    path: "/calculators/wire-resistance",
    icon: "Activity"
  },
  {
    id: "conduit-fill",
    title: "Conduit Fill Calculator",
    description: "Calculate maximum number of wires in conduit per NEC fill requirements",
    category: "Wire & Cable",
    path: "/calculators/conduit-fill",
    icon: "Cylinder"
  },
  
  // Mechanical
  {
    id: "force-calculator",
    title: "Force Calculator",
    description: "Calculate force using Newton's second law (F = m × a)",
    category: "Mechanical",
    path: "/calculators/force",
    icon: "MoveHorizontal"
  },
  {
    id: "torque-calculator",
    title: "Torque Calculator",
    description: "Calculate torque from force and distance (τ = F × d)",
    category: "Mechanical",
    path: "/calculators/torque",
    icon: "RotateCw"
  },
  {
    id: "pressure-calculator",
    title: "Pressure Calculator",
    description: "Calculate pressure from force and area (P = F / A)",
    category: "Mechanical",
    path: "/calculators/pressure",
    icon: "Gauge"
  },
  
  // Civil
  {
    id: "beam-calculator",
    title: "Beam Deflection Calculator",
    description: "Calculate beam deflection under uniform distributed load",
    category: "Civil",
    path: "/calculators/beam",
    icon: "Minus"
  },
  {
    id: "concrete-volume",
    title: "Concrete Volume Calculator",
    description: "Calculate concrete volume needed for slabs and foundations",
    category: "Civil",
    path: "/calculators/concrete",
    icon: "Box"
  },
  
  // General Science
  {
    id: "velocity-calculator",
    title: "Velocity Calculator",
    description: "Calculate velocity from distance and time (v = d / t)",
    category: "General Science",
    path: "/calculators/velocity",
    icon: "Gauge"
  },
  {
    id: "density-calculator",
    title: "Density Calculator",
    description: "Calculate density from mass and volume (ρ = m / V)",
    category: "General Science",
    path: "/calculators/density",
    icon: "Weight"
  },
  {
    id: "acceleration-calculator",
    title: "Acceleration Calculator",
    description: "Calculate acceleration from velocity change and time",
    category: "General Science",
    path: "/calculators/acceleration",
    icon: "TrendingUp"
  }
];
