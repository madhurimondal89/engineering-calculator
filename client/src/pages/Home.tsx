import { calculators, type CalculatorCategory } from "@shared/schema";
import { CalculatorCard } from "@/components/CalculatorCard";
import { Header } from "@/components/Header";

export default function Home() {
  const categories: CalculatorCategory[] = ["Electrical", "AC Circuits", "Electronics", "Wire & Cable", "Power System", "Mechanical", "Civil", "General Science"];
  
  const getCalculatorsByCategory = (category: CalculatorCategory) => {
    return calculators.filter(calc => calc.category === category);
  };
  
  const getCategoryId = (category: CalculatorCategory) => {
    return category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
            Engineering & Science Calculator Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Professional calculation tools for engineers and scientists
          </p>
        </div>
      </section>

      {/* Calculator Categories */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
          {categories.map((category) => {
            const categoryCalcs = getCalculatorsByCategory(category);
            const categoryId = getCategoryId(category);
            
            return (
              <div key={category} id={categoryId} className="scroll-mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-testid={`text-category-${categoryId}`}>
                  {category} Calculators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCalcs.map((calc) => (
                    <CalculatorCard key={calc.id} calculator={calc} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Electrical</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Electrical").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">AC Circuits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("AC Circuits").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Electronics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Electronics").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Wire & Cable</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Wire & Cable").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Power System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Power System").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Mechanical</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Mechanical").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Civil</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("Civil").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">General Science</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {getCalculatorsByCategory("General Science").map(calc => (
                  <li key={calc.id}>
                    <a href={calc.path} className="hover:text-foreground">
                      {calc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p className="mb-4">© 2025 calculatorfree.in All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <a 
                href="https://www.calculatorfree.in/about-us/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-about"
              >
                About Us
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a 
                href="https://www.calculatorfree.in/contact-us/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact"
              >
                Contact Us
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a 
                href="https://www.calculatorfree.in/privacy-policy/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a 
                href="https://www.calculatorfree.in/disclaimer/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-disclaimer"
              >
                Disclaimer
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a 
                href="https://www.calculatorfree.in/terms-conditions/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-terms"
              >
                Terms & Conditions
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a 
                href="https://www.calculatorfree.in/dmca-policy/" 
                className="hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-dmca"
              >
                DMCA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
