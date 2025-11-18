import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  category: string;
  calculatorName: string;
}

export function Breadcrumb({ category, calculatorName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" data-testid="breadcrumb">
      <Link 
        href="/"
        className="hover:text-foreground flex items-center hover-elevate active-elevate-2 rounded px-2 py-1 -ml-2" 
        data-testid="breadcrumb-home"
      >
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium">{category}</span>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{calculatorName}</span>
    </nav>
  );
}
