# Engineering & Science Calculator Hub - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing from the Financial Hub calculator site structure while adapting for engineering/science context. The design prioritizes utility, clarity, and efficient navigation across calculator categories.

**Core Principle**: Clean, professional calculator interface where users can quickly find and use tools without distraction. Card-based navigation with clear categorization and intuitive result displays.

---

## Typography Hierarchy

**Font Selection**: 
- Primary: Inter or IBM Plex Sans (professional, technical feel)
- Monospace: JetBrains Mono or Roboto Mono (for numerical displays and results)

**Type Scale**:
- Page Title (Homepage hero): `text-4xl md:text-5xl font-bold`
- Tagline/Subtitle: `text-lg md:text-xl font-normal`
- Category Headers: `text-2xl md:text-3xl font-semibold`
- Calculator Card Titles: `text-xl font-semibold`
- Calculator Card Descriptions: `text-sm md:text-base font-normal`
- Form Labels: `text-sm font-medium`
- Input Fields: `text-base font-normal`
- Results Display: `text-2xl md:text-3xl font-bold` (monospace)
- Result Labels: `text-sm font-medium uppercase tracking-wide`
- Navigation Links: `text-sm font-medium`
- Buttons: `text-base font-semibold`

---

## Layout System

**Spacing Primitives**: Use Tailwind units of `2, 4, 6, 8, 12, 16` for consistent rhythm
- Component padding: `p-6 md:p-8`
- Section spacing: `py-12 md:py-16`
- Card gaps: `gap-6 md:gap-8`
- Form element spacing: `space-y-4`
- Button padding: `px-6 py-3`

**Container Strategy**:
- Maximum width: `max-w-7xl mx-auto px-4 md:px-6`
- Calculator pages: `max-w-4xl mx-auto`
- Narrow content: `max-w-2xl`

**Grid System**:
- Homepage calculator cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Category sections: Group calculators by engineering discipline
- Responsive breakpoints: Mobile-first, stack on small screens

---

## Component Library

### Navigation Bar
- Full-width header with site title/logo on left
- Category dropdown or horizontal menu for: Electrical, Mechanical, Civil, Chemical, General Science
- Search functionality (optional quick-find)
- Sticky positioning: `sticky top-0 z-50`
- Height: `h-16 md:h-20`
- Inner padding: `px-4 md:px-6`

### Homepage Structure

**Hero Section**:
- Centered headline: "Engineering & Science Calculator Hub"
- Subtitle: "Professional calculation tools for engineers and scientists"
- No background image - clean, focused text section
- Padding: `py-16 md:py-24`

**Calculator Card Grid**:
- Card structure: Rounded corners `rounded-lg`, subtle shadow `shadow-md hover:shadow-xl transition-shadow`
- Card padding: `p-6`
- Card content:
  - Icon or symbol (engineering-related) at top: `h-12 w-12 mb-4`
  - Calculator title: `text-xl font-semibold mb-2`
  - Brief description: `text-sm mb-4 line-clamp-2`
  - CTA button: "Go to Calculator" - full width `w-full`
  
**Category Sections** (Alternative Layout):
- Section headers for each discipline: "Electrical Calculators", "Mechanical Calculators", etc.
- 2-3 calculators per category on homepage
- "View All" link for each category

### Individual Calculator Pages

**Page Layout**:
- Breadcrumb navigation: `text-sm mb-6`
- Calculator title: `text-3xl font-bold mb-2`
- Brief description: `text-base mb-8`
- Two-column layout on desktop: `grid md:grid-cols-2 gap-8`
  - Left: Input form
  - Right: Results display

**Input Form Section**:
- Form container: `space-y-6`
- Input groups: Label + input field wrapper
- Labels: Above inputs, `mb-2`
- Input fields: 
  - Height: `h-12`
  - Padding: `px-4`
  - Border: `border-2`
  - Rounded: `rounded-lg`
  - Focus state: visible outline
- Number inputs with unit indicators (V, A, Ω, kg, m/s, etc.)
- Select dropdowns for unit conversion
- Calculate button: Prominent, `w-full md:w-auto px-8 py-3 rounded-lg font-semibold`

**Results Display Section**:
- Results card: `rounded-lg p-6 md:p-8`
- Primary result: Large monospace number with unit
- Secondary calculations: List format `space-y-3`
- Result item structure:
  - Label in uppercase tracking
  - Value in monospace bold
- Formula reference (optional): Small text showing calculation formula
- Copy result button (icon button)

### Calculator Categories & Examples

**Electrical Engineering**:
- Ohm's Law Calculator (V = I × R)
- Power Calculator (P = V × I)
- Resistor Series/Parallel Calculator
- Capacitor Calculator
- Inductor Calculator

**Mechanical Engineering**:
- Force Calculator (F = m × a)
- Torque Calculator
- Pressure Calculator
- Velocity Calculator
- Kinetic Energy Calculator

**Civil Engineering**:
- Beam Deflection Calculator
- Concrete Mix Design
- Load Calculator
- Area/Volume Calculators

**General Science**:
- Unit Converter (comprehensive)
- Density Calculator
- pH Calculator
- Acceleration Calculator

### Footer
- Multi-column layout: `grid md:grid-cols-4 gap-8`
- Columns: Calculator Categories, Quick Links, About, Contact
- Copyright notice
- Links to privacy policy
- Padding: `py-12 px-4`

---

## Interaction Patterns

**Navigation**:
- Smooth scroll for same-page anchors
- Instant page transitions
- Active state for current calculator/category

**Form Behavior**:
- Real-time validation on input blur
- Calculate on button click or Enter key
- Clear/Reset button to start over
- Error messages below respective fields

**Calculator Results**:
- Results appear immediately after calculation
- Smooth fade-in transition for results section
- Persist results while user modifies inputs
- Update results on recalculation

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layout throughout
- Full-width calculator cards
- Stacked input/results sections
- Simplified navigation (hamburger menu if needed)
- Larger touch targets for inputs/buttons

**Tablet (768px - 1024px)**:
- 2-column calculator grid
- Side-by-side input/results on calculator pages
- Maintain comfortable reading width

**Desktop (> 1024px)**:
- 3-column calculator grid
- Maximum content width for readability
- Hover states on interactive elements

---

## Accessibility

- Semantic HTML throughout
- Proper label associations for all form inputs
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus indicators on all interactive elements
- Sufficient contrast ratios for text
- Screen reader friendly result announcements

---

This design creates a professional, utility-focused calculator hub that prioritizes ease of use while maintaining visual appeal through clean layouts and thoughtful spacing.