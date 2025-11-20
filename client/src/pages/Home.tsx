import { type CalculatorCategory, calculators } from "@shared/schema";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight, Calculator, Zap, Settings, Plug, Battery, Sun, Wrench, Building, Beaker, Cpu, Radio, ArrowRightLeft, CheckCircle2, Sparkles, Gauge, Award } from "lucide-react";

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
      name: "PCB",
      slug: getCategorySlug("PCB"),
      icon: Cpu,
      description: "PCB design calculators for trace width, impedance, and thermal management",
      seo: "Design printed circuit boards with calculators for trace width, via current capacity, microstrip and stripline impedance, differential pairs, thermal management, and cost estimation. Professional PCB design tools for engineers.",
      count: getCategoryCount("PCB")
    },
    {
      name: "RF",
      slug: getCategorySlug("RF"),
      icon: Radio,
      description: "RF and wireless design calculators for antenna, impedance, and link budget",
      seo: "Design RF and wireless systems with calculators for antenna length, wavelength-frequency conversion, dBm to watts, VSWR, coax cable loss, link budget, and LC resonant frequency. Essential tools for RF engineers and wireless designers.",
      count: getCategoryCount("RF")
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
    {
      name: "Converter Tools",
      slug: getCategorySlug("Converter Tools"),
      icon: ArrowRightLeft,
      description: "Unit conversion calculators for voltage, frequency, power, and energy",
      seo: "Convert between electrical units with our comprehensive conversion tools. Calculate voltage conversions (V, mV, kV), frequency conversions (Hz, kHz, MHz, GHz), AC to DC, DC to AC inverter outputs, Joules to Watts, Watts to Amps, and VA to Watts with power factor analysis.",
      count: getCategoryCount("Converter Tools")
    },
  ];

  // Cable icon component (lucide doesn't have a cable icon, so we'll use a similar one)
  function Cable({ className }: { className?: string }) {
    return <Plug className={className} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-card border rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              Perfect for Engineers, Students & Professionals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{calculators.length}+</div>
                <p className="text-muted-foreground">Professional Calculators</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{categories.length}</div>
                <p className="text-muted-foreground">Engineering Categories</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Free & Accurate</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
              Whether you're a practicing engineer designing power systems, a student learning circuit theory, 
              or a hobbyist building electronics projects, our calculators provide the accuracy and reliability 
              you need. All tools include detailed formulas, educational content, and real-time validation.
            </p>
          </div>
        </div>
      </section>

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
                <Link 
                  key={category.name} 
                  href={`/category/${category.slug}`}
                  data-testid={`link-category-${category.slug}`}
                >
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Calculators Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Complete Engineering & Science Calculation Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From electrical circuit analysis to renewable energy design, our comprehensive calculator hub provides accurate, 
              instant results for students, engineers, and professionals across all technical disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Electrical & Power Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Master electrical engineering with calculators for Ohm's Law, power calculations, AC/DC circuit analysis, 
                  three-phase systems, transformers, motors, and power factor correction. Perfect for designing circuits, 
                  analyzing power systems, and solving complex electrical problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Voltage & Current</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">AC Circuits</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Power Systems</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Motors</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  Electronics & PCB Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Design professional electronic circuits and PCBs with tools for LED resistors, voltage regulators, 
                  op-amps, 555 timers, trace width calculations, impedance matching, and thermal management. 
                  Essential for hobbyists and professional circuit designers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Component Design</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">PCB Layout</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">RF Design</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Impedance</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" />
                  Renewable Energy & Battery Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Plan and optimize renewable energy installations with calculators for solar panel sizing, 
                  wind turbine power output, battery capacity, energy storage systems, and investment payback analysis. 
                  Calculate ROI and design efficient solar, wind, and battery backup systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Solar Power</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Wind Energy</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Battery Life</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Energy Storage</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-primary" />
                  Unit Conversions & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Convert between electrical units effortlessly with tools for voltage conversions, frequency conversions, 
                  AC to DC conversion, DC to AC inverter calculations, power conversions (Watts, Amps, VA), 
                  and energy conversions (Joules to Watts). Includes power factor analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Voltage Units</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Frequency</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Power Factor</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">Energy</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">
                All calculators are completely free to use with no hidden charges or subscriptions
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Get accurate calculations instantly with real-time results as you type
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Professional Grade</h3>
              <p className="text-sm text-muted-foreground">
                Industry-standard formulas and calculations trusted by engineers worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Easy to Use</h3>
              <p className="text-sm text-muted-foreground">
                Intuitive interface with clear instructions and educational content for each tool
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm">
              <a 
                href="https://www.calculatorfree.in/about-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-about"
              >
                About Us
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.calculatorfree.in/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-contact"
              >
                Contact Us
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.calculatorfree.in/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.calculatorfree.in/disclaimer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-disclaimer"
              >
                Disclaimer
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.calculatorfree.in/terms-conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-terms"
              >
                Terms & Conditions
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.calculatorfree.in/dmca-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-1 rounded-md"
                data-testid="link-footer-dmca"
              >
                DMCA
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
              © {new Date().getFullYear()} Copyright calculatorfree.in | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
