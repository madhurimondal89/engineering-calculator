import { Link, useLocation } from "wouter";
import { Calculator, ArrowLeft, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const isCalculatorPage = location.startsWith("/calculators/");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {isCalculatorPage && (
              <Link href="/" data-testid="link-back">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
            )}
            <Link 
              href="/"
              className="flex items-center space-x-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3" 
              data-testid="link-home-logo"
            >
              <Calculator className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">CalcHub</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-1">
            <Link href="/" data-testid="link-home">
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
