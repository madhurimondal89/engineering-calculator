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

      {/* Prestigious Solutions Showcase */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          {/* Band 1: Mission Control Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by Engineers Worldwide</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Engineering Calculations Made Simple
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From circuit design to renewable energy systems, access professional-grade calculators 
              that power innovation across electrical, electronics, and engineering disciplines.
            </p>
          </div>

          {/* Band 2: Split Narrative - Story + Proof */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Story & Value Props */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Engineers Choose Our Platform
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry-Standard Formulas</h4>
                    <p className="text-muted-foreground text-sm">
                      Every calculator uses verified engineering formulas following IEEE, IPC, and international standards. 
                      From Ohm's Law to complex three-phase power calculations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Validation</h4>
                    <p className="text-muted-foreground text-sm">
                      Input validation ensures accurate results every time. See instant feedback with 
                      comprehensive error handling for out-of-range values.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Educational Content</h4>
                    <p className="text-muted-foreground text-sm">
                      Each calculator includes detailed explanations, formulas, and practical examples 
                      to help you understand the theory behind the calculations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Coverage</h4>
                    <p className="text-muted-foreground text-sm">
                      From basic resistor calculations to advanced PCB trace impedance, solar array sizing, 
                      and motor performance analysis - we've got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Proof & KPI Tiles */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <p className="text-sm text-muted-foreground">Professional Calculators</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Electrical, Electronics, PCB, Renewable Energy, and more
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">14</div>
                    <p className="text-sm text-muted-foreground">Engineering Categories</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Organized for quick access and discovery
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Free Forever</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      No subscriptions, no hidden fees
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Always Available</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Access anytime, anywhere, any device
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    What You Get
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Instant calculations with real-time results as you type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Detailed formulas and step-by-step explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Mobile-friendly responsive design for on-the-go access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Dark mode support for comfortable nighttime calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Regular updates with new calculators and features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Band 3: Featured Calculators Showcase */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Popular Calculator Categories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Electrical & Power</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ohm's Law, power calculations, three-phase systems
                  </p>
                  <div className="text-xs text-primary font-medium">
                    28 Calculators →
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Cpu className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Electronics & PCB</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    LED resistors, trace width, impedance matching
                  </p>
                  <div className="text-xs text-primary font-medium">
                    22 Calculators →
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Sun className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Renewable Energy</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Solar sizing, wind power, battery systems
                  </p>
                  <div className="text-xs text-primary font-medium">
                    12 Calculators →
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <ArrowRightLeft className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Unit Converters</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Voltage, frequency, power, energy conversions
                  </p>
                  <div className="text-xs text-primary font-medium">
                    7 Calculators →
                  </div>
                </CardContent>
              </Card>
            </div>
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
