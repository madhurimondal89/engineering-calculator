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
      <Route path="/calculators/ohms-law" component={OhmsLaw} />
      <Route path="/calculators/power" component={Power} />
      <Route path="/calculators/resistor" component={Resistor} />
      
      {/* Mechanical Calculators */}
      <Route path="/calculators/force" component={Force} />
      <Route path="/calculators/torque" component={Torque} />
      <Route path="/calculators/pressure" component={Pressure} />
      
      {/* Civil Calculators */}
      <Route path="/calculators/beam" component={Beam} />
      <Route path="/calculators/concrete" component={Concrete} />
      
      {/* General Science Calculators */}
      <Route path="/calculators/velocity" component={Velocity} />
      <Route path="/calculators/density" component={Density} />
      <Route path="/calculators/acceleration" component={Acceleration} />
      
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
