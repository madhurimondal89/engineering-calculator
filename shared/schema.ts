import { z } from "zod";

// Calculator category types
export const calculatorCategories = [
  "Electrical",
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
