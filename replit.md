# Engineering & Science Calculator Hub

## Overview
This project is a professional web application providing a comprehensive hub of 50 specialized engineering and science calculators across seven categories: Electrical - Basic, AC Circuits, Electronics, Wire & Cable, Mechanical, Civil, and General Science. Built with React, TypeScript, Express, and Tailwind CSS, the application aims to be a go-to resource for engineers, students, and enthusiasts, offering accurate calculations and educational content. The business vision is to capture a significant market share in online technical calculators by providing a superior user experience and a vast array of tools.

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
- **Key Features**: Dark mode, input validation, clear unit indicators, responsive design, professional UI, and formula display.

## External Dependencies
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type-safe development.
- **Express.js**: Backend web application framework for Node.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: Collection of re-usable components built with Radix UI and Tailwind CSS.
- **wouter**: A tiny, dependency-free router for React.