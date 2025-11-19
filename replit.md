# Engineering & Science Calculator Hub

## Overview
This project is a professional web application providing a comprehensive hub of specialized engineering and science calculators. Built with React, TypeScript, Express, and Tailwind CSS, the application aims to be a go-to resource for engineers, students, and enthusiasts, offering accurate calculations and educational content. The business vision is to capture a significant market share in online technical calculators by providing a superior user experience and a vast array of tools.

**Current Status**: 59 calculators across 8 categories (Electrical, AC Circuits, Electronics, Wire & Cable, Mechanical, Civil, General Science, Power System)

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

### Recent Additions (Batch 5 - Power System Calculators)
**Completed**: November 19, 2025

Added 9 comprehensive Power System calculators with advanced validation:
1. **Power Factor Correction** - Capacitor sizing for improving power factor
2. **kVA to kW Converter** - Apparent to real power conversion
3. **kW to kVA Converter** - Real to apparent power conversion
4. **Single Phase Power** - Complete single-phase power calculations
5. **Apparent Power** - Calculate S from P and Q
6. **Reactive Power** - Calculate Q from S and P with cross-field validation
7. **Power Triangle** - Multi-method solver with 3 independent tab forms
8. **Electrical Load** - Dynamic load calculator with useFieldArray validation
9. **Energy Cost** - Energy cost calculator with flexible time periods

**Technical Implementation**:
- All calculators use React Hook Form + Zod validation
- Cross-field validation for logical constraints (e.g., targetPF > currentPF, P ≤ S)
- PowerTriangle: Independent forms per tab with tab-specific submit handlers
- ElectricalLoad: Dynamic load list using useFieldArray with per-item validation
- Educational content: 5500+ lines of comprehensive guides in calculatorAccordions.ts
- E2E tested with Playwright covering validation, calculations, and user flows

## External Dependencies
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type-safe development.
- **Express.js**: Backend web application framework for Node.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: Collection of re-usable components built with Radix UI and Tailwind CSS.
- **wouter**: A tiny, dependency-free router for React.