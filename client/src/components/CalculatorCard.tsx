import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "@shared/schema";
import { 
  Zap, Battery, Component, MoveHorizontal, RotateCw, 
  Gauge, Minus, Box, Weight, TrendingUp, LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Battery,
  Component,
  MoveHorizontal,
  RotateCw,
  Gauge,
  Minus,
  Box,
  Weight,
  TrendingUp,
};

interface CalculatorCardProps {
  calculator: Calculator;
}

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const [, setLocation] = useLocation();
  const Icon = iconMap[calculator.icon] || Zap;
  
  return (
    <Card className="hover-elevate transition-all duration-200 h-full flex flex-col" data-testid={`card-calculator-${calculator.id}`}>
      <CardHeader className="flex-1">
        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{calculator.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {calculator.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          onClick={() => setLocation(calculator.path)}
          className="w-full" 
          data-testid={`button-go-${calculator.id}`}
        >
          Go to Calculator
        </Button>
      </CardFooter>
    </Card>
  );
}
