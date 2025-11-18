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
import VoltageDivider from "@/pages/calculators/VoltageDivider";
import CurrentDivider from "@/pages/calculators/CurrentDivider";
import SeriesParallelResistance from "@/pages/calculators/SeriesParallelResistance";
import SeriesParallelCapacitor from "@/pages/calculators/SeriesParallelCapacitor";
import SeriesParallelInductor from "@/pages/calculators/SeriesParallelInductor";
import Conductance from "@/pages/calculators/Conductance";
import Impedance from "@/pages/calculators/Impedance";
import Reactance from "@/pages/calculators/Reactance";

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
      <Route path="/calculators/voltage-divider" component={VoltageDivider} />
      <Route path="/calculators/current-divider" component={CurrentDivider} />
      <Route path="/calculators/series-parallel-resistance" component={SeriesParallelResistance} />
      <Route path="/calculators/series-parallel-capacitor" component={SeriesParallelCapacitor} />
      <Route path="/calculators/series-parallel-inductor" component={SeriesParallelInductor} />
      <Route path="/calculators/conductance" component={Conductance} />
      <Route path="/calculators/impedance" component={Impedance} />
      <Route path="/calculators/reactance" component={Reactance} />
      
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
