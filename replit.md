# Engineering & Science Calculator Hub

## Overview
This project is a professional web application providing a comprehensive hub of specialized engineering and science calculators. Built with React, TypeScript, Express, and Tailwind CSS, the application aims to be a go-to resource for engineers, students, and enthusiasts, offering accurate calculations and educational content. The business vision is to capture a significant market share in online technical calculators by providing a superior user experience and a vast array of tools.

**Current Status**: 66 calculators across 9 categories (Electrical, AC Circuits, Electronics, Wire & Cable, Mechanical, Civil, General Science, Power System, Motor)

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
- **Features**: Category-based organization, robust input validation with clear error and empty states, unit displays, and formula presentation for each calculation. Breadcrumb navigation is included on all calculator pages.

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

### Recent Additions (Batch 6 - Motor Calculators)
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