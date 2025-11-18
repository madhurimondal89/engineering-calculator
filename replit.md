# Engineering & Science Calculator Hub

A professional web application providing engineering and science calculators organized by category.

## Overview

This is a full-stack calculator hub built with React, TypeScript, Express, and Tailwind CSS. It provides 19 specialized calculators across four engineering/science categories:

- **Electrical** (11 calculators): Ohm's Law, Power Calculator, Resistor Calculator, Voltage Divider, Current Divider, Series & Parallel Resistance, Series & Parallel Capacitor, Series & Parallel Inductor, Conductance, Impedance, Reactance
- **Mechanical**: Force, Torque, Pressure Calculators  
- **Civil**: Beam Deflection, Concrete Volume Calculators
- **General Science**: Velocity, Density, Acceleration Calculators

## Recent Changes

**November 18, 2025 - Batch 1: Basic Electrical Calculators**
- Added 8 new Basic Electrical calculators to complete the category
- Voltage Divider Calculator (Vout = Vin × R2/(R1+R2))
- Current Divider Calculator (I1 = Itotal × R2/(R1+R2))
- Series & Parallel Resistance Calculator (multiple resistors)
- Series & Parallel Capacitor Calculator (multiple capacitors)
- Series & Parallel Inductor Calculator (multiple inductors)
- Conductance Calculator (G = 1/R conversion)
- Impedance Calculator (complex impedance Z = R + jX)
- Reactance Calculator (inductive XL and capacitive XC)
- Updated footer with calculatorfree.in branding and policy links
- Total calculators expanded from 11 to 19

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
