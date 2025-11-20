# Engineering & Science Calculator Hub

## Overview
This project is a professional web application providing a comprehensive hub of specialized engineering and science calculators. Built with React, TypeScript, Express, and Tailwind CSS, the application aims to be a go-to resource for engineers, students, and enthusiasts, offering accurate calculations and educational content. The business vision is to capture a significant market share in online technical calculators by providing a superior user experience and a vast array of tools.

**Current Status**: 93 calculators across 13 categories (Electrical, AC Circuits, Electronics, Wire & Cable, Power System, Motor, Battery & Energy, Renewable Energy, PCB, RF, Converter Tools, Mechanical, Civil)

## User Preferences
- Uses Inter font for UI, JetBrains Mono for numerical displays
- Primary color: Blue (engineering-themed)
- Follows Material Design principles for spacing and typography
- Minimalist, clean interface focused on utility

## System Architecture
The application follows a full-stack architecture with a React-based frontend and an Express.js backend, though most calculations are performed client-side.

### Frontend (`client/`)
- **Technology**: React SPA with wouter for routing, TypeScript for type safety.
- **Styling**: Tailwind CSS for utility-first styling, complemented by Shadcn UI components.
- **UI/UX**: Features dark mode support with localStorage persistence, responsive design (mobile, tablet, desktop breakpoints), and a professional, card-based layout.
- **Navigation Structure**: Three-tier navigation system:
  1. **Home Page (/)**: Displays 12 category cards with SEO-optimized descriptions and calculator counts
  2. **Category Pages (/category/:slug)**: Shows all calculator cards for a specific category
  3. **Calculator Pages (/calculators/:id)**: Individual calculator interfaces with breadcrumb navigation
- **Features**: Category-based organization, SEO-optimized content on home page, robust input validation with clear error and empty states, unit displays, and formula presentation for each calculation. Breadcrumb navigation is included on all calculator and category pages.

### Backend (`server/`)
- **Technology**: Express.js server.
- **Purpose**: Primarily serves the React frontend via Vite. Backend logic is minimal as calculations are client-side.

### Shared (`shared/`)
- **Purpose**: Houses common type definitions and calculator metadata, with Zod schemas planned for future validation enhancements.

### System Design Choices
- **Client-side Calculations**: All calculations are performed on the client to minimize server load and provide instant feedback.
- **Educational Content**: Each calculator includes extensive, SEO-optimized educational sections ("How to Use," "Understanding the Metrics," "Detailed Guide") managed through a data-driven architecture using Shadcn Accordion components.
- **Form Validation**: All calculators use React Hook Form + Zod validation with z.coerce.number() pattern for robust number input handling. Empty inputs map to undefined, preventing NaN errors while allowing users to clear fields.
- **Key Features**: Dark mode, input validation with real-time error messages, clear unit indicators, responsive design, professional UI, and formula display.

### Recent Changes

#### Navigation Redesign
**Completed**: November 20, 2025

Implemented improved three-tier navigation structure for better UX and SEO:
- **Home Page**: Shows only category cards (11 categories) with SEO-rich descriptions, no individual calculator cards
- **Category Pages**: New dedicated pages showing all calculators for each category with breadcrumb navigation
- **Simplified Header**: Removed category navigation links, keeping only logo and theme toggle
- **SEO Optimization**: Each category card includes keyword-rich descriptions targeting search engines
- **Footer Content**: Added comprehensive SEO section describing the calculator hub and its features

**Technical Details**:
- Created CategoryPage component with dynamic routing (/category/:slug)
- Updated Home.tsx with category cards featuring icons, descriptions, and calculator counts
- Simplified Header component removing navigation clutter
- All calculators remain accessible through improved navigation flow
- E2E tested: Home → Category → Calculator navigation verified

### Recent Additions (Batch 11 - Converter Tools Calculators)
**Completed**: November 20, 2025

Added 7 comprehensive conversion calculators for electrical and energy unit conversions:
1. **Voltage Converter** - Convert between V, mV, kV, MV with bidirectional conversion
2. **Frequency Converter** - Convert Hz, kHz, MHz, GHz with period and wavelength calculations
3. **AC to DC Conversion** - Calculate DC output from AC input with rectifier efficiency (Half-Wave, Full-Wave, Full Bridge)
4. **DC to AC Inverter** - Calculate AC output from DC input with waveform types (Pure Sine, Modified Sine, Square Wave)
5. **Joules to Watts** - Bidirectional energy/power conversion with time period
6. **Watts to Amps / Amps to Watts** - Power-current conversion for single/three-phase systems with power factor
7. **VA to Watts** - Convert apparent power to real power with power triangle analysis (real, reactive, apparent power)

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation with z.coerce.number()
- Bidirectional conversions: Voltage, Frequency, Joules/Watts, Watts/Amps
- Power factor validation: 0-1 range with inline error messages for invalid inputs
- Complex calculations: Rectifier efficiency (different types), inverter waveform handling, power triangle (Pythagorean theorem)
- Educational content: ~5000 lines covering conversion fundamentals, AC/DC theory, power factor concepts, energy vs power
- E2E tested with Playwright - all 7 calculators verified with accurate outputs:
  - Voltage: 1000 mV = 1 V ✓
  - Frequency: 2.4 GHz = 2400 MHz ✓
  - Watts to Amps: 2300W ÷ (230V × 0.9 PF) = 11.111 A ✓
  - VA to Watts: 1000 VA × 0.8 PF = 800W, 600 VAR ✓
- Data-testid attributes on all interactive elements

### Previous Additions (Batch 9 - PCB Calculators)
**Completed**: November 20, 2025

Added 8 comprehensive PCB design calculators for professional PCB layout and manufacturing:
1. **PCB Trace Width** - Calculate minimum trace width using IPC-2221 standard for current and temperature rise
2. **PCB Via Current** - Determine current carrying capacity of vias based on hole diameter and plating thickness
3. **Microstrip Impedance** - Calculate characteristic impedance for microstrip transmission lines
4. **Stripline Impedance** - Calculate characteristic impedance for stripline transmission lines
5. **PCB Track Resistance** - Calculate track resistance, voltage drop, and power dissipation
6. **Differential Pair Impedance** - Calculate differential and single-ended impedance for differential pairs
7. **PCB Thermal** - Calculate temperature rise and heat dissipation for PCB copper areas
8. **PCB Cost Estimator** - Estimate PCB manufacturing costs based on specifications and quantity

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation with z.coerce.number()
- Complex calculations: IPC-2221 standards for trace width/via current, Wheeler's equations for impedance, thermal modeling
- Educational content: 5000+ lines covering PCB design principles, transmission line theory, thermal management, IPC standards
- Critical bug fixes: PCB Via Current annular area calculation, unit conversions (mils to inches), resistance length calculation
- E2E tested with Playwright - all 8 calculators verified with realistic inputs
- Data-testid attributes on all interactive elements

### Previous Additions (Batch 8 - Renewable Energy Calculators)
**Completed**: November 20, 2025

Added 4 comprehensive Renewable Energy calculators covering wind, solar, and grid-tied systems:
1. **Wind Turbine Power** - Calculate power output from wind speed, blade diameter, and turbine specifications
2. **Solar Array Sizing** - Size solar panel arrays for grid-tied or off-grid systems with battery backup
3. **Renewable Energy Payback** - Calculate ROI, payback period, and lifetime savings for renewable energy systems
4. **Grid Tie System** - Design grid-tied solar systems with net metering analysis

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation with z.coerce.number()
- Complex calculations: Wind power (cubic relationship P ∝ V³), solar sizing (peak sun hours, system efficiency), financial analysis (rate increases, lifetime savings), grid-tie inverter sizing
- Educational content: 160+ lines covering wind power fundamentals, solar array design, financial metrics (NPV, IRR, LCOE), grid-tied vs off-grid systems
- E2E tested with Playwright - all 4 calculators verified with realistic inputs
- Bug fix: Removed misleading capacity factor metric from Wind Turbine calculator (was always showing 100%)
- Data-testid attributes on all interactive elements

### Previous Additions (Batch 7 - Battery & Energy Calculators)
**Completed**: November 19, 2025

Added 8 comprehensive Battery & Energy calculators covering energy storage and battery systems:
1. **Battery Capacity** - Convert between Ah, Wh, and kWh for different battery voltages
2. **Battery Life** - Estimate runtime based on capacity, load current, and depth of discharge
3. **Battery Charge Time** - Calculate charging time with charger current and efficiency
4. **Battery Series Parallel** - Determine voltage and capacity for series/parallel battery configurations
5. **Solar Panel Output** - Calculate daily energy production from solar panels
6. **UPS Backup Time** - Estimate UPS runtime with battery capacity and inverter efficiency
7. **Energy Storage** - Size battery banks for off-grid and backup power systems
8. **Battery Internal Resistance** - Calculate internal resistance from voltage measurements

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation with z.coerce.number()
- Optional fields with .default() pattern to prevent undefined validation errors
- Critical calculation fixes: charger efficiency handling, inverter efficiency application, kWh-to-Wh unit conversion
- Comprehensive educational content: 145+ lines covering battery chemistry, Peukert's law, DoD, cycle life, charging methods
- E2E tested with Playwright - all 8 calculators verified with realistic inputs and expected outputs
- Data-testid attributes on all interactive elements for robust testing

### Previous Additions (Batch 6 - Motor Calculators)
**Completed**: November 19, 2025

Added 7 comprehensive Motor calculators covering motor analysis and conversions:
1. **Motor Starting Current** - Calculate starting current with multiple methods (DOL, Star-Delta, Soft Start, LRA)
2. **Motor Full Load Current** - Determine FLC for single-phase and three-phase motors
3. **Motor Efficiency** - Calculate motor efficiency with IE rating classification
4. **Motor Power Factor** - Compute motor power factor from real and apparent power
5. **Motor Speed** - Calculate synchronous and actual motor speed from frequency, poles, and slip
6. **Motor Torque** - Determine motor torque from power and speed
7. **Motor HP to kW** - Bidirectional horsepower and kilowatt converter

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation with z.coerce.number()
- Optional fields with UI defaults use .default() pattern to prevent validation errors
- Cross-field validation (e.g., inputPower >= outputPower in efficiency calculator)
- Comprehensive educational content: 1000+ lines covering motor theory, selection, applications
- E2E tested with Playwright - all calculations and validations verified
- Data-testid attributes on all interactive elements for robust testing

## External Dependencies
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type-safe development.
- **Express.js**: Backend web application framework for Node.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: Collection of re-usable components built with Radix UI and Tailwind CSS.
- **wouter**: A tiny, dependency-free router for React.