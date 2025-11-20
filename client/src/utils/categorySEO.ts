import { calculators, calculatorCategories } from "@shared/schema";

const BASE_URL = 'https://www.calculatorfree.in';

export interface CategoryMetadata {
  slug: string;
  name: string;
  description: string;
  calculatorCount: number;
  keywords?: string;
  fullDescription?: string;
}

// Category descriptions for SEO
const categoryDescriptions: Record<string, { description: string; fullDescription: string; keywords: string }> = {
  'electrical': {
    description: 'Essential electrical calculators for voltage, current, resistance, and power calculations using fundamental electrical laws.',
    fullDescription: 'Comprehensive collection of electrical engineering calculators including Ohm\'s Law, power calculations, voltage dividers, and current dividers. Perfect for electrical engineers, students, and technicians working with DC and AC circuits.',
    keywords: 'electrical calculator, ohms law, voltage calculator, current calculator, resistance calculator, power calculator, electrical engineering tools'
  },
  'ac-circuits': {
    description: 'AC circuit analysis tools for impedance, reactance, power factor, and resonant frequency calculations.',
    fullDescription: 'Advanced AC circuit calculators for analyzing alternating current systems. Calculate impedance, reactance, power factor, resonant frequency, and three-phase systems. Essential for power system engineers and AC circuit design.',
    keywords: 'ac circuit calculator, impedance calculator, reactance calculator, power factor calculator, resonant frequency, three phase calculator'
  },
  'electronics': {
    description: 'Electronic component calculators for LED resistors, 555 timers, op-amps, and transistor circuits.',
    fullDescription: 'Professional electronics calculators for component selection and circuit design. Includes LED resistor calculators, 555 timer design tools, op-amp configurations, and transistor biasing calculations.',
    keywords: 'electronics calculator, led resistor calculator, 555 timer calculator, opamp calculator, transistor calculator, electronic circuit design'
  },
  'wire-cable': {
    description: 'Wire and cable sizing calculators for current capacity, voltage drop, and conductor selection.',
    fullDescription: 'Wire and cable engineering calculators for determining proper conductor sizes, current carrying capacity, voltage drop, and cable derating. Essential for electrical installations and NEC compliance.',
    keywords: 'wire size calculator, cable sizing, current capacity, voltage drop calculator, conductor selection, wire gauge calculator'
  },
  'power-system': {
    description: 'Power system calculators for transformers, fault analysis, and distribution systems.',
    fullDescription: 'Advanced power system calculators for transformer sizing, fault current analysis, short circuit calculations, and power distribution design. Critical tools for power system engineers.',
    keywords: 'power system calculator, transformer calculator, fault current, short circuit calculator, power distribution, substation design'
  },
  'motor': {
    description: 'Motor calculators for starting current, efficiency, speed, torque, and power conversions.',
    fullDescription: 'Comprehensive motor engineering calculators for AC and DC motors. Calculate starting current, full load current, motor efficiency, speed, torque, and HP to kW conversions. Essential for motor selection and drive design.',
    keywords: 'motor calculator, motor efficiency, motor speed calculator, motor torque, starting current, hp to kw converter, motor selection'
  },
  'battery-energy': {
    description: 'Battery and energy storage calculators for capacity, runtime, charging, and solar systems.',
    fullDescription: 'Complete battery and energy storage calculators including battery capacity conversions, runtime estimation, charge time, series-parallel configurations, solar panel output, UPS backup time, and energy storage sizing.',
    keywords: 'battery calculator, battery capacity, battery life calculator, solar panel calculator, ups backup time, energy storage, battery charge time'
  },
  'renewable-energy': {
    description: 'Renewable energy calculators for wind turbines, solar arrays, payback analysis, and grid-tie systems.',
    fullDescription: 'Professional renewable energy calculators for wind power generation, solar array sizing, financial payback analysis, and grid-tied system design. Essential tools for renewable energy projects and ROI analysis.',
    keywords: 'renewable energy calculator, wind turbine calculator, solar array sizing, solar payback calculator, grid tie system, renewable roi'
  },
  'pcb': {
    description: 'PCB design calculators for trace width, via current, impedance matching, and thermal analysis.',
    fullDescription: 'Professional PCB design calculators including trace width calculations (IPC-2221), via current capacity, microstrip/stripline impedance, differential pairs, thermal analysis, and cost estimation. Essential for PCB layout engineers.',
    keywords: 'pcb calculator, trace width calculator, via current, pcb impedance calculator, microstrip calculator, stripline calculator, pcb thermal'
  },
  'rf': {
    description: 'RF and microwave calculators for antenna design, transmission lines, and wireless systems.',
    fullDescription: 'RF engineering calculators for antenna design, transmission line analysis, waveguide calculations, link budget analysis, and microwave system design. Professional tools for RF engineers and wireless communications.',
    keywords: 'rf calculator, antenna calculator, transmission line calculator, link budget, waveguide calculator, rf design tools, microwave calculator'
  },
  'converter-tools': {
    description: 'Electrical and energy unit converters for voltage, frequency, power, and AC/DC conversion.',
    fullDescription: 'Comprehensive electrical conversion tools including voltage converters, frequency converters, AC to DC conversion, DC to AC inverters, Joules to Watts, Watts to Amps, and VA to Watts conversions. Essential unit conversion tools for electrical engineers.',
    keywords: 'voltage converter, frequency converter, ac to dc converter, dc to ac inverter, joules to watts, watts to amps, va to watts, electrical unit converter'
  },
  'mechanical': {
    description: 'Mechanical engineering calculators for force, torque, pressure, and motion analysis.',
    fullDescription: 'Mechanical engineering calculators for force analysis, torque calculations, pressure conversions, and mechanical system design. Essential tools for mechanical engineers and designers.',
    keywords: 'mechanical calculator, force calculator, torque calculator, pressure calculator, mechanical engineering tools'
  },
  'civil': {
    description: 'Civil engineering calculators for beam analysis, concrete volume, and structural design.',
    fullDescription: 'Civil engineering calculators for structural analysis, concrete volume calculations, beam deflection, and construction material estimation. Professional tools for civil engineers and construction projects.',
    keywords: 'civil calculator, beam calculator, concrete volume calculator, structural design, civil engineering tools'
  },
  'general-science': {
    description: 'General science calculators for physics, chemistry, and everyday scientific calculations.',
    fullDescription: 'General science calculators covering physics, chemistry, and everyday scientific computations. Educational tools for students and professionals.',
    keywords: 'science calculator, physics calculator, chemistry calculator, scientific tools'
  }
};

// Convert category name to slug
export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
}

// Convert slug to category name
export function slugToCategory(slug: string): string | null {
  const category = calculatorCategories.find(cat => 
    categoryToSlug(cat) === slug
  );
  return category || null;
}

// Get category metadata by slug
export function getCategoryMeta(categorySlug: string): CategoryMetadata | null {
  const categoryName = slugToCategory(categorySlug);
  if (!categoryName) return null;

  const categoryCalcs = calculators.filter(c => c.category === categoryName);
  const descData = categoryDescriptions[categorySlug] || {
    description: `${categoryName} calculators and tools.`,
    fullDescription: `Professional ${categoryName} calculators for engineering and science applications.`,
    keywords: `${categoryName.toLowerCase()} calculator, ${categoryName.toLowerCase()} tools`
  };

  return {
    slug: categorySlug,
    name: categoryName,
    description: descData.description,
    calculatorCount: categoryCalcs.length,
    fullDescription: descData.fullDescription,
    keywords: descData.keywords
  };
}

// Generate SEO title for category
export function generateCategoryTitle(name: string, count: number): string {
  return `${name} Calculators - ${count} Free Professional Tools | CalculatorFree.in`;
}

// Generate canonical URL for category
export function generateCategoryCanonical(slug: string): string {
  return `${BASE_URL}/category/${slug}`;
}

// Generate breadcrumb items for category
export function generateCategoryBreadcrumbs(name: string, slug: string) {
  return [
    {
      name: 'Home',
      url: BASE_URL
    },
    {
      name: `${name} Calculators`,
      url: `${BASE_URL}/category/${slug}`
    }
  ];
}

// Get full SEO metadata for a category
export function getCategorySEO(categorySlug: string) {
  const baseMeta = getCategoryMeta(categorySlug);
  if (!baseMeta) return null;

  return {
    ...baseMeta,
    title: generateCategoryTitle(baseMeta.name, baseMeta.calculatorCount),
    seoDescription: baseMeta.fullDescription || baseMeta.description,
    keywords: baseMeta.keywords,
    canonical: generateCategoryCanonical(baseMeta.slug),
    breadcrumbs: generateCategoryBreadcrumbs(baseMeta.name, baseMeta.slug)
  };
}
