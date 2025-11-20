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
import ResistorColorCode from "@/pages/calculators/ResistorColorCode";

// AC Circuit Calculators
import ACPower from "@/pages/calculators/ACPower";
import PowerFactor from "@/pages/calculators/PowerFactor";
import RLCSeries from "@/pages/calculators/RLCSeries";
import RLCParallel from "@/pages/calculators/RLCParallel";
import ResonantFrequency from "@/pages/calculators/ResonantFrequency";
import QFactor from "@/pages/calculators/QFactor";
import PhaseAngle from "@/pages/calculators/PhaseAngle";
import TimeConstant from "@/pages/calculators/TimeConstant";
import ACVoltageDivider from "@/pages/calculators/ACVoltageDivider";
import ACCurrentDivider from "@/pages/calculators/ACCurrentDivider";
import ImpedanceMatching from "@/pages/calculators/ImpedanceMatching";
import Transformer from "@/pages/calculators/Transformer";
import ThreePhasePower from "@/pages/calculators/ThreePhasePower";

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

// Electronics Calculators
import LEDResistor from "@/pages/calculators/LEDResistor";
import VoltageRegulator from "@/pages/calculators/VoltageRegulator";
import BJTBiasing from "@/pages/calculators/BJTBiasing";
import MOSFET from "@/pages/calculators/MOSFET";
import OpAmp from "@/pages/calculators/OpAmp";
import Timer555 from "@/pages/calculators/Timer555";
import RCFilter from "@/pages/calculators/RCFilter";
import CapacitorCharge from "@/pages/calculators/CapacitorCharge";
import ZenerDiode from "@/pages/calculators/ZenerDiode";
import TransistorAmplifier from "@/pages/calculators/TransistorAmplifier";
import WheatStoneBridge from "@/pages/calculators/WheatStoneBridge";
import Decibel from "@/pages/calculators/Decibel";

// Wire & Cable Calculators
import WireGauge from "@/pages/calculators/WireGauge";
import WireCurrentCapacity from "@/pages/calculators/WireCurrentCapacity";
import VoltageDrop from "@/pages/calculators/VoltageDrop";
import WireResistance from "@/pages/calculators/WireResistance";
import ConduitFill from "@/pages/calculators/ConduitFill";

// Power System Calculators
import PowerFactorCorrection from "@/pages/calculators/PowerFactorCorrection";
import KVAtoKW from "@/pages/calculators/KVAtoKW";
import KWtoKVA from "@/pages/calculators/KWtoKVA";
import SinglePhasePower from "@/pages/calculators/SinglePhasePower";
import ApparentPower from "@/pages/calculators/ApparentPower";
import ReactivePower from "@/pages/calculators/ReactivePower";
import PowerTriangle from "@/pages/calculators/PowerTriangle";
import ElectricalLoad from "@/pages/calculators/ElectricalLoad";
import EnergyCost from "@/pages/calculators/EnergyCost";

// Motor Calculators
import MotorStartingCurrent from "@/pages/calculators/MotorStartingCurrent";
import MotorFullLoadCurrent from "@/pages/calculators/MotorFullLoadCurrent";
import MotorEfficiency from "@/pages/calculators/MotorEfficiency";
import MotorPowerFactor from "@/pages/calculators/MotorPowerFactor";
import MotorSpeed from "@/pages/calculators/MotorSpeed";
import MotorTorque from "@/pages/calculators/MotorTorque";
import MotorHPKW from "@/pages/calculators/MotorHPKW";

// Battery & Energy Calculators
import BatteryCapacity from "@/pages/calculators/BatteryCapacity";
import BatteryLife from "@/pages/calculators/BatteryLife";
import BatteryChargeTime from "@/pages/calculators/BatteryChargeTime";
import BatterySeriesParallel from "@/pages/calculators/BatterySeriesParallel";
import SolarPanelOutput from "@/pages/calculators/SolarPanelOutput";
import UPSBackupTime from "@/pages/calculators/UPSBackupTime";
import EnergyStorage from "@/pages/calculators/EnergyStorage";
import BatteryInternalResistance from "@/pages/calculators/BatteryInternalResistance";

// Renewable Energy Calculators
import WindTurbinePower from "@/pages/calculators/WindTurbinePower";
import SolarArraySizing from "@/pages/calculators/SolarArraySizing";
import RenewablePayback from "@/pages/calculators/RenewablePayback";
import GridTieSystem from "@/pages/calculators/GridTieSystem";

// PCB Calculators
import PCBTraceWidth from "@/pages/calculators/PCBTraceWidth";
import PCBViaCurrent from "@/pages/calculators/PCBViaCurrent";
import MicrostripImpedance from "@/pages/calculators/MicrostripImpedance";
import StriplineImpedance from "@/pages/calculators/StriplineImpedance";
import PCBTrackResistance from "@/pages/calculators/PCBTrackResistance";
import DifferentialPairImpedance from "@/pages/calculators/DifferentialPairImpedance";
import PCBThermal from "@/pages/calculators/PCBThermal";
import PCBCostEstimator from "@/pages/calculators/PCBCostEstimator";

// RF Calculators
import AntennaLength from "@/pages/calculators/AntennaLength";
import WavelengthFrequency from "@/pages/calculators/WavelengthFrequency";
import DbmWatts from "@/pages/calculators/DbmWatts";
import VSWRCalculator from "@/pages/calculators/VSWRCalculator";
import CoaxCableLoss from "@/pages/calculators/CoaxCableLoss";
import LinkBudget from "@/pages/calculators/LinkBudget";
import ResonantFrequencyLC from "@/pages/calculators/ResonantFrequencyLC";

// Category Page
import CategoryPage from "@/pages/CategoryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={CategoryPage} />
      
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
      <Route path="/calculators/resistor-color-code" component={ResistorColorCode} />
      
      {/* AC Circuit Calculators */}
      <Route path="/calculators/ac-power" component={ACPower} />
      <Route path="/calculators/power-factor" component={PowerFactor} />
      <Route path="/calculators/rlc-series" component={RLCSeries} />
      <Route path="/calculators/rlc-parallel" component={RLCParallel} />
      <Route path="/calculators/resonant-frequency" component={ResonantFrequency} />
      <Route path="/calculators/q-factor" component={QFactor} />
      <Route path="/calculators/phase-angle" component={PhaseAngle} />
      <Route path="/calculators/time-constant" component={TimeConstant} />
      <Route path="/calculators/ac-voltage-divider" component={ACVoltageDivider} />
      <Route path="/calculators/ac-current-divider" component={ACCurrentDivider} />
      <Route path="/calculators/impedance-matching" component={ImpedanceMatching} />
      <Route path="/calculators/transformer" component={Transformer} />
      <Route path="/calculators/three-phase-power" component={ThreePhasePower} />
      
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
      
      {/* Electronics Calculators */}
      <Route path="/calculators/led-resistor" component={LEDResistor} />
      <Route path="/calculators/voltage-regulator" component={VoltageRegulator} />
      <Route path="/calculators/bjt-biasing" component={BJTBiasing} />
      <Route path="/calculators/mosfet" component={MOSFET} />
      <Route path="/calculators/op-amp" component={OpAmp} />
      <Route path="/calculators/555-timer" component={Timer555} />
      <Route path="/calculators/rc-filter" component={RCFilter} />
      <Route path="/calculators/capacitor-charge" component={CapacitorCharge} />
      <Route path="/calculators/zener-diode" component={ZenerDiode} />
      <Route path="/calculators/transistor-amplifier" component={TransistorAmplifier} />
      <Route path="/calculators/wheatstone-bridge" component={WheatStoneBridge} />
      <Route path="/calculators/decibel" component={Decibel} />
      
      {/* Wire & Cable Calculators */}
      <Route path="/calculators/wire-gauge" component={WireGauge} />
      <Route path="/calculators/wire-current-capacity" component={WireCurrentCapacity} />
      <Route path="/calculators/voltage-drop" component={VoltageDrop} />
      <Route path="/calculators/wire-resistance" component={WireResistance} />
      <Route path="/calculators/conduit-fill" component={ConduitFill} />
      
      {/* Power System Calculators */}
      <Route path="/calculators/power-factor-correction" component={PowerFactorCorrection} />
      <Route path="/calculators/kva-to-kw" component={KVAtoKW} />
      <Route path="/calculators/kw-to-kva" component={KWtoKVA} />
      <Route path="/calculators/single-phase-power" component={SinglePhasePower} />
      <Route path="/calculators/apparent-power" component={ApparentPower} />
      <Route path="/calculators/reactive-power" component={ReactivePower} />
      <Route path="/calculators/power-triangle" component={PowerTriangle} />
      <Route path="/calculators/electrical-load" component={ElectricalLoad} />
      <Route path="/calculators/energy-cost" component={EnergyCost} />
      
      {/* Motor Calculators */}
      <Route path="/calculators/motor-starting-current" component={MotorStartingCurrent} />
      <Route path="/calculators/motor-full-load-current" component={MotorFullLoadCurrent} />
      <Route path="/calculators/motor-efficiency" component={MotorEfficiency} />
      <Route path="/calculators/motor-power-factor" component={MotorPowerFactor} />
      <Route path="/calculators/motor-speed" component={MotorSpeed} />
      <Route path="/calculators/motor-torque" component={MotorTorque} />
      <Route path="/calculators/motor-hp-kw" component={MotorHPKW} />
      
      {/* Battery & Energy Calculators */}
      <Route path="/calculators/battery-capacity" component={BatteryCapacity} />
      <Route path="/calculators/battery-life" component={BatteryLife} />
      <Route path="/calculators/battery-charge-time" component={BatteryChargeTime} />
      <Route path="/calculators/battery-series-parallel" component={BatterySeriesParallel} />
      <Route path="/calculators/solar-panel-output" component={SolarPanelOutput} />
      <Route path="/calculators/ups-backup-time" component={UPSBackupTime} />
      <Route path="/calculators/energy-storage" component={EnergyStorage} />
      <Route path="/calculators/battery-internal-resistance" component={BatteryInternalResistance} />
      
      {/* Renewable Energy Calculators */}
      <Route path="/calculators/wind-turbine-power" component={WindTurbinePower} />
      <Route path="/calculators/solar-array-sizing" component={SolarArraySizing} />
      <Route path="/calculators/renewable-payback" component={RenewablePayback} />
      <Route path="/calculators/grid-tie-system" component={GridTieSystem} />
      
      {/* PCB Calculators */}
      <Route path="/calculators/pcb-trace-width" component={PCBTraceWidth} />
      <Route path="/calculators/pcb-via-current" component={PCBViaCurrent} />
      <Route path="/calculators/microstrip-impedance" component={MicrostripImpedance} />
      <Route path="/calculators/stripline-impedance" component={StriplineImpedance} />
      <Route path="/calculators/pcb-track-resistance" component={PCBTrackResistance} />
      <Route path="/calculators/differential-pair-impedance" component={DifferentialPairImpedance} />
      <Route path="/calculators/pcb-thermal" component={PCBThermal} />
      <Route path="/calculators/pcb-cost-estimator" component={PCBCostEstimator} />
      
      {/* RF Calculators */}
      <Route path="/calculators/antenna-length" component={AntennaLength} />
      <Route path="/calculators/wavelength-frequency" component={WavelengthFrequency} />
      <Route path="/calculators/dbm-watts" component={DbmWatts} />
      <Route path="/calculators/vswr" component={VSWRCalculator} />
      <Route path="/calculators/coax-cable-loss" component={CoaxCableLoss} />
      <Route path="/calculators/link-budget" component={LinkBudget} />
      <Route path="/calculators/resonant-frequency-lc" component={ResonantFrequencyLC} />
      
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
