import { useRoute } from "wouter";
import { calculators, type CalculatorCategory } from "@shared/schema";
import { CalculatorCard } from "@/components/CalculatorCard";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const categoryMap: Record<string, CalculatorCategory> = {
  "electrical": "Electrical",
  "ac-circuits": "AC Circuits",
  "electronics": "Electronics",
  "wire-cable": "Wire & Cable",
  "power-system": "Power System",
  "motor": "Motor",
  "battery-energy": "Battery & Energy",
  "renewable-energy": "Renewable Energy",
  "mechanical": "Mechanical",
  "civil": "Civil",
  "general-science": "General Science",
};

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  const categorySlug = params?.slug || "";
  const categoryName = categoryMap[categorySlug];
  
  const categoryCalculators = calculators.filter(calc => calc.category === categoryName);

  if (!categoryName || categoryCalculators.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link href="/" className="text-primary hover:underline" data-testid="link-home">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="breadcrumb-nav">
          <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium" data-testid="text-breadcrumb-category">
            {categoryName}
          </span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-category-title">
            {categoryName} Calculators
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-category-description">
            {categoryCalculators.length} professional calculators for {categoryName.toLowerCase()} engineering and analysis
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCalculators.map((calc) => (
            <CalculatorCard key={calc.id} calculator={calc} />
          ))}
        </div>
      </div>
    </div>
  );
}
