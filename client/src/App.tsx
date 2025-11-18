import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Electrical Calculators
import OhmsLaw from "@/pages/calculators/OhmsLaw";
import Power from "@/pages/calculators/Power";
import Resistor from "@/pages/calculators/Resistor";

// Mechanical Calculators
import Force from "@/pages/calculators/Force";
import Torque from "@/pages/calculators/Torque";
import Pressure from "@/pages/calculators/Pressure";

// Civil Calculators
import Beam from "@/pages/calculators/Beam";
import Concrete from "@/pages/calculators/Concrete";

// General Science Calculators
import Velocity from "@/pages/calculators/Velocity";
import Density from "@/pages/calculators/Density";
import Acceleration from "@/pages/calculators/Acceleration";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Electrical Calculators */}
      <Route path="/calculator/ohms-law" component={OhmsLaw} />
      <Route path="/calculator/power" component={Power} />
      <Route path="/calculator/resistor" component={Resistor} />
      
      {/* Mechanical Calculators */}
      <Route path="/calculator/force" component={Force} />
      <Route path="/calculator/torque" component={Torque} />
      <Route path="/calculator/pressure" component={Pressure} />
      
      {/* Civil Calculators */}
      <Route path="/calculator/beam" component={Beam} />
      <Route path="/calculator/concrete" component={Concrete} />
      
      {/* General Science Calculators */}
      <Route path="/calculator/velocity" component={Velocity} />
      <Route path="/calculator/density" component={Density} />
      <Route path="/calculator/acceleration" component={Acceleration} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
