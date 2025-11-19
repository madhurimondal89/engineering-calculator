# Engineering & Science Calculator Hub

A professional web application providing engineering and science calculators organized by category.

## Overview

This is a full-stack calculator hub built with React, TypeScript, Express, and Tailwind CSS. It provides 45 specialized calculators across six engineering/science categories:

- **Electrical - Basic** (12 calculators): Ohm's Law, Power Calculator, Resistor Calculator, Resistor Color Code, Voltage Divider, Current Divider, Series & Parallel Resistance, Series & Parallel Capacitor, Series & Parallel Inductor, Conductance, Impedance, Reactance
- **AC Circuits** (13 calculators): AC Power, Power Factor, RLC Series, RLC Parallel, Resonant Frequency, Q-Factor, Phase Angle, Time Constant, AC Voltage Divider, AC Current Divider, Impedance Matching, Transformer, Three Phase Power
- **Electronics** (12 calculators): LED Resistor, Voltage Regulator, BJT Biasing, MOSFET, Op-Amp, 555 Timer, RC Filter, Capacitor Charge/Discharge, Zener Diode, Transistor Amplifier Gain, Wheatstone Bridge, Decibel
- **Mechanical** (3 calculators): Force, Torque, Pressure Calculators  
- **Civil** (2 calculators): Beam Deflection, Concrete Volume Calculators
- **General Science** (3 calculators): Velocity, Density, Acceleration Calculators

## Recent Changes

**November 19, 2025 - Resistor Color Code Calculator (4/5/6-Band Support) ✅ COMPLETE**
- Enhanced Resistor Color Code Calculator with full 4/5/6-band resistor support
- Band count selector allows switching between 4-band (standard), 5-band (precision), and 6-band (high-precision) configurations
- **4-Band**: 2 significant digits, standard tolerances (±5% Gold, ±10% Silver, ±20% None)
- **5-Band**: 3 significant digits for precision applications, tighter tolerances (±1% Brown, ±0.5% Green, ±0.1% Violet)
- **6-Band**: 3 significant digits + temperature coefficient (Brown=100ppm/°C to White=1ppm/°C)
- Bidirectional conversion: Color→Value and Value→Color for all band counts
- Dynamic SVG visualization adapts band positions and spacing for 4/5/6-band resistors
- Temperature coefficient display and selection for 6-band resistors
- Independent state management for Color→Value and Value→Color tabs
- Enhanced educational content explaining differences between 4/5/6-band resistors, E-series values, and thermal stability
- Comprehensive reference chart includes temperature coefficient column
- All 34 E2E test steps passed: 4-band (1kΩ ±5%), 5-band (1kΩ ±1%, 222Ω ±2%), 6-band (47kΩ ±1% 50ppm/°C)
- Value→Color encoding tested for 4700Ω in all three band configurations
- Architect approved as production-ready with suggestions for future edge-case enhancements
- Total calculators: 45 across 6 categories

**November 19, 2025 - Batch 3: Electronics Calculators ✅ COMPLETE**
- Added 12 new Electronics calculators expanding the hub to new category
- LED Resistor Calculator (current-limiting resistor: R = (Vs - Vf) / If)
- Voltage Regulator Calculator (linear regulator power dissipation and efficiency)
- BJT Biasing Calculator (voltage divider bias resistor values)
- MOSFET Calculator (drain current with triode/saturation region detection: fixed to properly calculate Id = Kn×[(Vgs-Vth)×Vds - Vds²/2] for triode, Id = Kn×(Vgs-Vth)² for saturation)
- Op-Amp Calculator (inverting/non-inverting amplifier gain with tab switching)
- 555 Timer Calculator (astable/monostable timing circuits with frequency and pulse width)
- RC Filter Calculator (low-pass/high-pass cutoff frequency fc = 1/(2πRC))
- Capacitor Charge/Discharge Calculator (exponential charging Vc = V×(1-e^(-t/RC)))
- Zener Diode Regulator Calculator (series resistor and power calculations)
- Transistor Amplifier Gain Calculator (common-emitter gain Av = -Rc/Re)
- Wheatstone Bridge Calculator (unknown resistance Rx = R2×R3/R1)
- Decibel Calculator (power/voltage ratio conversions with dB = 10×log₁₀ or 20×log₁₀)
- Created 1,500+ lines of comprehensive SEO-optimized educational content
- All 12 calculators include full accordion sections (How to Use, Metrics, Detailed Guide)
- Updated footer to 6-column layout with dedicated "Electronics" column
- Total calculators expanded from 32 to 44 across 6 categories
- All calculators tested end-to-end (66+ test steps including triode/saturation region tests)
- Architect approved as production-ready after MOSFET calculator fix
- Formulas verified: MOSFET operating regions, Op-Amp gain equations, 555 timing, RC filters, exponential charging, Wheatstone bridge balance, decibel conversions

**November 19, 2025 - Batch 2: AC Circuits Calculators ✅ COMPLETE**
- Added 13 new AC Circuits calculators expanding electrical category
- AC Power Calculator (real, reactive, apparent power with power factor)
- Power Factor Calculator (PF analysis, correction calculations)
- RLC Series & Parallel Circuit Calculators (impedance, phase angle, resonance)
- Resonant Frequency Calculator (f₀ = 1/(2π√LC))
- Q-Factor Calculator (quality factor from bandwidth or components)
- Phase Angle Calculator (from power values, impedance, or time delay)
- Time Constant Calculator (RC and RL circuits with tab switching)
- AC Voltage/Current Divider Calculators (complex impedance division)
- Impedance Matching Calculator (VSWR, reflection coefficient, return loss)
- Transformer Calculator (turns ratio, step-up/step-down detection)
- Three Phase Power Calculator (Star/Delta configurations with tabs)
- Created 1,260+ lines of comprehensive SEO-optimized educational content
- All 13 calculators include full accordion sections (How to Use, Metrics, Detailed Guide)
- Updated footer to 5-column layout with dedicated "AC Circuits" column
- Total calculators expanded from 19 to 32
- All calculators tested end-to-end (57 test steps)
- Architect approved as production-ready
- Formulas verified: AC power triangle, transformer equations, star/delta conversions, RLC impedance, impedance matching, time constants

**November 19, 2025 - Header Navigation Updates ✅ COMPLETE**
- Added "Back" button in header (only visible on calculator pages)
- Added "Home" tab linking to https://www.calculatorfree.in/ (opens in new tab)
- Conditional rendering based on route detection (useLocation hook)
- Mobile-responsive: "Back" text hidden on small screens, icon always visible
- All E2E tests passed (11 steps)

**November 19, 2025 - Informational Accordion Sections ✅ COMPLETE**
- Added educational accordion sections to ALL 19 calculators
- Three sections per calculator: "How to Use", "Understanding the Metrics", "Detailed Guide"
- 1,242 lines of SEO-optimized educational content
- Data-driven architecture with centralized content management
- Reusable CalculatorAccordion component using Shadcn Accordion
- Single collapsible mode for better UX
- Responsive design and dark mode compatible
- Content includes: formulas, practical applications, real-world examples, common mistakes
- Architect approved as production-ready
- All E2E tests passed (21 steps)

**November 18, 2025 - Batch 1: Basic Electrical Calculators ✅ COMPLETE**
- Added 8 new Basic Electrical calculators to complete the category
- Voltage Divider Calculator (Vout = Vin × R2/(R1+R2))
- Current Divider Calculator (I1 = Itotal × R2/(R1+R2))
- Series & Parallel Resistance Calculator (multiple resistors)
- Series & Parallel Capacitor Calculator (multiple capacitors)
- Series & Parallel Inductor Calculator (multiple inductors)
- Conductance Calculator (G = 1/R conversion)
- Impedance Calculator (complex impedance Z = R + jX)
- Reactance Calculator (inductive XL and capacitive XC with shared frequency input)
- Updated footer with calculatorfree.in branding and policy links
- Total calculators expanded from 11 to 19
- All calculators tested end-to-end (111 test steps total)
- Architect approved as production-ready
- Fixed: Reactance calculator tab-switching now shows proper empty state instead of "undefined"

**November 18, 2024**
- Initial implementation of calculator hub with 11 calculators
- Added dark mode support with ThemeProvider
- Implemented proper input validation and error handling
- Added unit conversions for relevant calculators
- Responsive design with mobile-first approach

## Project Architecture

### Frontend (`client/`)
- **React SPA** with wouter for routing
- **Tailwind CSS** + Shadcn UI components for styling
- **TypeScript** for type safety
- Dark mode support with localStorage persistence
- Responsive design (mobile, tablet, desktop breakpoints)

### Backend (`server/`)
- **Express.js** server
- In-memory storage (minimal backend as calculations are client-side)
- Serves the React frontend via Vite

### Shared (`shared/`)
- Type definitions and calculator metadata
- Zod schemas for future validation needs

## Key Features

1. **Category-Based Organization**: Calculators grouped by engineering discipline
2. **Dark Mode**: Full theme support with toggle in header
3. **Input Validation**: Proper error handling for invalid inputs
4. **Unit Displays**: Clear unit indicators on all inputs and results
5. **Responsive Design**: Works on all devices
6. **Professional UI**: Card-based layout similar to Financial Hub reference
7. **Formula Display**: Shows formulas used for each calculation

## User Preferences

- Uses Inter font for UI, JetBrains Mono for numerical displays
- Primary color: Blue (engineering-themed)
- Follows Material Design principles for spacing and typography
- Minimalist, clean interface focused on utility

## Development Notes

- All calculators perform calculations client-side (no backend API needed)
- Validation ensures proper inputs before calculations
- Error states clearly communicated to users
- Empty states guide users on what to enter
- Breadcrumb navigation on all calculator pages
