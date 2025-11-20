import { calculators } from "@shared/schema";

const BASE_URL = 'https://www.calculatorfree.in';

export interface CalculatorMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
  keywords?: string;
  fullDescription?: string;
}

// Get calculator metadata by ID
export function getCalculatorMeta(calculatorId: string): CalculatorMetadata | null {
  const calc = calculators.find(c => c.id === calculatorId);
  if (!calc) return null;

  return {
    id: calc.id,
    name: calc.name,
    description: calc.description,
    category: calc.category,
    path: calc.path,
  };
}

// Generate SEO title for calculator
export function generateCalculatorTitle(name: string, category: string): string {
  return `${name} - Free ${category} Calculator | CalculatorFree.in`;
}

// Generate SEO description for calculator
export function generateCalculatorDescription(name: string, description: string, category: string): string {
  return `Free ${name} calculator. ${description} Professional ${category} calculation tool with formulas and examples.`;
}

// Generate keywords for calculator
export function generateCalculatorKeywords(name: string, category: string): string {
  const baseName = name.toLowerCase();
  const baseCategory = category.toLowerCase();
  
  return `${baseName} calculator, ${baseName}, ${baseCategory} calculator, ${baseName} formula, calculate ${baseName}, ${baseName} online calculator, free ${baseName} calculator`;
}

// Generate canonical URL for calculator
export function generateCalculatorCanonical(path: string): string {
  return `${BASE_URL}${path}`;
}

// Generate breadcrumb items for calculator
export function generateCalculatorBreadcrumbs(name: string, category: string, path: string) {
  const categorySlug = category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
  
  return [
    {
      name: 'Home',
      url: BASE_URL
    },
    {
      name: category,
      url: `${BASE_URL}/category/${categorySlug}`
    },
    {
      name: name,
      url: `${BASE_URL}${path}`
    }
  ];
}

// Extended SEO metadata for specific calculators (optional overrides)
export const extendedCalculatorSEO: Record<string, Partial<CalculatorMetadata>> = {
  'ohms-law': {
    fullDescription: 'Calculate voltage, current, resistance, and power using Ohm\'s Law. Enter any two values to calculate the remaining parameters. Includes detailed formulas and practical examples for electrical engineers and students.',
    keywords: 'ohms law calculator, voltage calculator, current calculator, resistance calculator, V=IR, electrical calculator, circuit calculator'
  },
  'power-calculator': {
    fullDescription: 'Calculate electrical power in watts using voltage and current, or resistance. Supports both DC and AC power calculations. Essential tool for electrical engineering and circuit design.',
    keywords: 'power calculator, watt calculator, electrical power, P=VI, power formula, energy calculator'
  },
  'voltage-divider': {
    fullDescription: 'Calculate output voltage in a voltage divider circuit. Determine required resistor values for desired voltage division. Perfect for circuit design and analysis.',
    keywords: 'voltage divider calculator, resistor divider, voltage divider formula, circuit design'
  },
  // Add more as needed...
};

// Get full SEO metadata for a calculator
export function getFullCalculatorSEO(calculatorId: string) {
  const baseMeta = getCalculatorMeta(calculatorId);
  if (!baseMeta) return null;

  const extended = extendedCalculatorSEO[calculatorId] || {};
  
  return {
    ...baseMeta,
    ...extended,
    title: generateCalculatorTitle(baseMeta.name, baseMeta.category),
    seoDescription: extended.fullDescription || generateCalculatorDescription(baseMeta.name, baseMeta.description, baseMeta.category),
    keywords: extended.keywords || generateCalculatorKeywords(baseMeta.name, baseMeta.category),
    canonical: generateCalculatorCanonical(baseMeta.path),
    breadcrumbs: generateCalculatorBreadcrumbs(baseMeta.name, baseMeta.category, baseMeta.path)
  };
}
