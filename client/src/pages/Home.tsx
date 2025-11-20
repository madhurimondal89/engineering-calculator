import { type CalculatorCategory, calculators } from "@shared/schema";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight, Calculator, Zap, Settings, Plug, Battery, Sun, Wrench, Building, Beaker } from "lucide-react";

interface CategoryInfo {
  name: CalculatorCategory;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  seo: string;
  count: number;
}

export default function Home() {
  const getCategorySlug = (category: CalculatorCategory): string => {
    return category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
  };

  const getCategoryCount = (category: CalculatorCategory): number => {
    return calculators.filter(calc => calc.category === category).length;
  };

  const categories: CategoryInfo[] = [
    {
      name: "Electrical",
      slug: getCategorySlug("Electrical"),
      icon: Zap,
      description: "Essential electrical engineering calculators for circuit analysis and design",
      seo: "Calculate voltage, current, resistance, power, and impedance with our comprehensive electrical engineering tools. From Ohm's Law to complex impedance calculations, get accurate results for circuit design and analysis.",
      count: getCategoryCount("Electrical")
    },
    {
      name: "AC Circuits",
      slug: getCategorySlug("AC Circuits"),
      icon: Settings,
      description: "Advanced AC circuit analysis tools for power factor, resonance, and three-phase systems",
      seo: "Analyze AC circuits with calculators for power factor, resonant frequency, RLC circuits, transformers, and three-phase power systems. Essential tools for power system engineers and electrical designers.",
      count: getCategoryCount("AC Circuits")
    },
    {
      name: "Electronics",
      slug: getCategorySlug("Electronics"),
      icon: Plug,
      description: "Electronic component and circuit design calculators",
      seo: "Design electronic circuits with calculators for LED resistors, voltage regulators, BJT biasing, MOSFETs, op-amps, 555 timers, and filters. Perfect for electronics hobbyists and professional circuit designers.",
      count: getCategoryCount("Electronics")
    },
    {
      name: "Wire & Cable",
      slug: getCategorySlug("Wire & Cable"),
      icon: Cable,
      description: "Wire sizing, voltage drop, and cable capacity calculators",
      seo: "Select the right wire gauge and cable size with our wire current capacity, voltage drop, wire resistance, and conduit fill calculators. Ensure safe and efficient electrical installations.",
      count: getCategoryCount("Wire & Cable")
    },
    {
      name: "Power System",
      slug: getCategorySlug("Power System"),
      icon: Zap,
      description: "Power system analysis and energy cost calculators",
      seo: "Calculate power factor correction, kVA to kW conversions, single and three-phase power, apparent and reactive power. Essential tools for power system design and energy management.",
      count: getCategoryCount("Power System")
    },
    {
      name: "Motor",
      slug: getCategorySlug("Motor"),
      icon: Settings,
      description: "Electric motor analysis and selection tools",
      seo: "Analyze electric motors with calculators for starting current, full load current, efficiency, power factor, speed, torque, and HP to kW conversions. Complete motor selection and performance analysis.",
      count: getCategoryCount("Motor")
    },
    {
      name: "Battery & Energy",
      slug: getCategorySlug("Battery & Energy"),
      icon: Battery,
      description: "Battery sizing, energy storage, and backup power calculators",
      seo: "Size battery systems with calculators for battery capacity, life estimation, charge time, series-parallel configurations, solar panel output, UPS backup time, and energy storage systems.",
      count: getCategoryCount("Battery & Energy")
    },
    {
      name: "Renewable Energy",
      slug: getCategorySlug("Renewable Energy"),
      icon: Sun,
      description: "Solar, wind, and renewable energy system design tools",
      seo: "Design renewable energy systems with calculators for wind turbine power, solar array sizing, investment payback analysis, and grid-tie systems. Calculate ROI and optimize your solar or wind installation.",
      count: getCategoryCount("Renewable Energy")
    },
    {
      name: "Mechanical",
      slug: getCategorySlug("Mechanical"),
      icon: Wrench,
      description: "Mechanical engineering calculators for force, torque, and pressure",
      seo: "Calculate mechanical properties including force, torque, and pressure for mechanical engineering design and analysis. Essential tools for mechanical engineers and designers.",
      count: getCategoryCount("Mechanical")
    },
    {
      name: "Civil",
      slug: getCategorySlug("Civil"),
      icon: Building,
      description: "Civil engineering calculators for structural design",
      seo: "Design structural elements with calculators for beam analysis and concrete calculations. Professional tools for civil engineers and structural designers.",
      count: getCategoryCount("Civil")
    },
    {
      name: "General Science",
      slug: getCategorySlug("General Science"),
      icon: Beaker,
      description: "Physics and science calculators for velocity, density, and acceleration",
      seo: "Calculate fundamental physics properties including velocity, density, and acceleration. Essential science calculators for students, educators, and researchers.",
      count: getCategoryCount("General Science")
    },
  ];

  // Cable icon component (lucide doesn't have a cable icon, so we'll use a similar one)
  function Cable({ className }: { className?: string }) {
    return <Plug className={className} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
            Engineering & Science Calculator Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-hero-subtitle">
            Professional calculation tools for engineers, students, and scientists
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calculator className="w-4 h-4" />
            <span data-testid="text-total-calculators">
              {calculators.length} Free Calculators across {categories.length} Categories
            </span>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-categories-heading">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} href={`/category/${category.slug}`}>
                  <a data-testid={`link-category-${category.slug}`}>
                    <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Icon className="w-8 h-8 text-primary" data-testid={`icon-${category.slug}`} />
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span data-testid={`text-count-${category.slug}`}>{category.count}</span>
                            <Calculator className="w-4 h-4" />
                          </div>
                        </div>
                        <CardTitle className="text-xl" data-testid={`text-title-${category.slug}`}>
                          {category.name}
                        </CardTitle>
                        <CardDescription data-testid={`text-description-${category.slug}`}>
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4" data-testid={`text-seo-${category.slug}`}>
                          {category.seo}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm">
                          <span>View Calculators</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer SEO Content */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold mb-4">Professional Engineering Calculators</h2>
            <p className="text-muted-foreground mb-6">
              Our comprehensive calculator hub provides {calculators.length} free, professional-grade calculators covering electrical engineering, 
              electronics, power systems, renewable energy, mechanical engineering, civil engineering, and general science. 
              Each calculator includes detailed formulas, step-by-step guides, and educational content to help you understand 
              the calculations and apply them correctly.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Why Choose Our Calculators?</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Accurate calculations based on engineering standards and formulas</li>
              <li>Comprehensive educational content with each calculator</li>
              <li>User-friendly interface with real-time validation</li>
              <li>Mobile-responsive design for calculations on the go</li>
              <li>Completely free with no registration required</li>
              <li>Dark mode support for comfortable viewing</li>
            </ul>

            <p className="text-muted-foreground">
              Whether you're an electrical engineer designing power systems, a student learning circuit analysis, 
              a solar installer sizing arrays, or a hobbyist building electronics projects, our calculator hub 
              has the tools you need. All calculators are regularly updated and tested for accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
