import { Link } from "wouter";
import { Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link 
            href="/"
            className="flex items-center space-x-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3" 
            data-testid="link-home"
          >
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">CalcHub</span>
          </Link>
          
          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                href="/#electrical"
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" 
                data-testid="link-electrical"
              >
                Electrical
              </Link>
              <Link 
                href="/#mechanical"
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" 
                data-testid="link-mechanical"
              >
                Mechanical
              </Link>
              <Link 
                href="/#civil"
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" 
                data-testid="link-civil"
              >
                Civil
              </Link>
              <Link 
                href="/#general-science"
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md" 
                data-testid="link-science"
              >
                Science
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
