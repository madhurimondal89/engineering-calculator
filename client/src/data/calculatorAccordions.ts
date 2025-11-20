import type { CalculatorAccordionContent } from "@/types/calculator-content";

const accordionContent: Record<string, CalculatorAccordionContent> = {
  "ohms-law": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter any two values from Voltage (V), Current (I), or Resistance (R).",
        "The calculator will automatically compute the third value using Ohm's Law.",
        "Power (P) is also calculated automatically using the formula P = V × I.",
        "Click 'Reset' to clear all fields and start a new calculation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Voltage (V)",
          definition: "The electrical potential difference between two points in a circuit, measured in volts. It represents the 'push' that drives current through a conductor."
        },
        {
          term: "Current (I)",
          definition: "The rate of flow of electric charge through a conductor, measured in amperes (A). It represents how many electrons are flowing per unit time."
        },
        {
          term: "Resistance (R)",
          definition: "The opposition to current flow in a circuit, measured in ohms (Ω). Materials with high resistance restrict current flow more than those with low resistance."
        },
        {
          term: "Power (P)",
          definition: "The rate at which electrical energy is converted to another form of energy, measured in watts (W). It represents how much work the electrical circuit can do."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Ohm's Law",
      sections: [
        {
          title: "What is Ohm's Law?",
          content: "Ohm's Law is one of the fundamental principles in electrical engineering and physics. Discovered by German physicist Georg Ohm in 1827, it establishes a linear relationship between voltage, current, and resistance in an electrical circuit. The law states that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance."
        },
        {
          title: "The Formula",
          content: "Ohm's Law is expressed mathematically as: V = I × R, where V is voltage in volts, I is current in amperes, and R is resistance in ohms. This formula can be rearranged to solve for any variable: I = V / R or R = V / I. Additionally, power can be calculated using: P = V × I = I²R = V²/R."
        },
        {
          title: "Practical Applications",
          content: [
            "Designing electrical circuits and determining component values",
            "Troubleshooting electrical systems by measuring voltage and current",
            "Calculating power consumption in household and industrial appliances",
            "Sizing wires and fuses for safe electrical installations",
            "Understanding battery performance and charging characteristics"
          ]
        },
        {
          title: "Key Concepts",
          content: [
            "Direct Relationship: Doubling voltage doubles current (if resistance stays constant)",
            "Inverse Relationship: Doubling resistance halves current (if voltage stays constant)",
            "Series Circuits: Current remains constant, voltage divides across resistors",
            "Parallel Circuits: Voltage remains constant, current divides among paths",
            "Temperature Effects: Most materials' resistance increases with temperature"
          ]
        },
        {
          title: "Common Mistakes to Avoid",
          content: [
            "Confusing AC and DC circuits - Ohm's Law applies directly only to DC or resistive AC loads",
            "Ignoring wire resistance - In high-current applications, wire resistance can be significant",
            "Forgetting power ratings - Components have maximum power ratings that must not be exceeded",
            "Neglecting safety - Always use appropriate safety measures when working with electricity"
          ]
        }
      ]
    }
  },
  "power-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the calculation mode: Calculate Power, Calculate Voltage, or Calculate Current.",
        "Enter the two known values based on your selected mode.",
        "Click 'Calculate' to compute the unknown value.",
        "Results are displayed instantly with the formula used.",
        "Use 'Reset' to clear inputs and start fresh."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Power (P)",
          definition: "The rate of energy transfer or conversion, measured in watts (W). One watt equals one joule per second, representing how quickly electrical energy is being used or generated."
        },
        {
          term: "Voltage (V)",
          definition: "The electrical potential difference that drives current through a circuit, measured in volts. Higher voltage can deliver more power for the same current."
        },
        {
          term: "Current (I)",
          definition: "The flow of electric charge measured in amperes (A). The amount of current flowing determines how much power is consumed at a given voltage."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Electrical Power",
      sections: [
        {
          title: "What is Electrical Power?",
          content: "Electrical power is the rate at which electrical energy is transferred by an electric circuit. It represents how much work an electrical device can perform per unit time. In simple terms, power tells us how 'strong' an electrical device is - a 100W light bulb is brighter than a 60W bulb because it converts more electrical energy to light and heat per second."
        },
        {
          title: "Power Formula",
          content: "The fundamental power formula is P = V × I, where power equals voltage multiplied by current. This can be combined with Ohm's Law (V = I × R) to derive alternative formulas: P = I²R (power equals current squared times resistance) and P = V²/R (power equals voltage squared divided by resistance)."
        },
        {
          title: "Types of Power",
          content: [
            "Active Power (Real Power): Measured in watts (W), this is the actual power consumed by resistive loads",
            "Reactive Power: Measured in volt-amperes reactive (VAR), power stored and released by inductive or capacitive loads",
            "Apparent Power: Measured in volt-amperes (VA), the total power in AC circuits combining real and reactive power",
            "Power Factor: The ratio of real power to apparent power, important in AC systems"
          ]
        },
        {
          title: "Where Power Calculations Are Used",
          content: [
            "Sizing electrical systems and choosing appropriate circuit breakers",
            "Calculating electricity costs based on appliance power ratings",
            "Designing power supplies for electronic devices",
            "Determining battery capacity and runtime for portable devices",
            "Evaluating energy efficiency of electrical equipment"
          ]
        },
        {
          title: "Power and Energy",
          content: "It's important to distinguish between power and energy. Power is the rate of energy transfer (watts), while energy is the total amount transferred over time (watt-hours or kilowatt-hours). For example, a 100W light bulb running for 10 hours consumes 1,000 watt-hours (1 kWh) of energy. Your electricity bill charges for energy consumed, not power."
        }
      ]
    }
  },
  "resistor-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the resistance value in ohms.",
        "Optionally enter voltage or current to calculate power dissipation.",
        "Click 'Calculate' to see all computed values including power ratings.",
        "Use the color code section to decode resistor bands if needed.",
        "Reset to start a new calculation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Resistance Value",
          definition: "The opposition to current flow, measured in ohms (Ω). Standard resistor values follow E-series (E12, E24, E96) for manufacturing consistency."
        },
        {
          term: "Power Rating",
          definition: "The maximum power a resistor can safely dissipate as heat, typically 1/8W, 1/4W, 1/2W, or higher. Exceeding this causes resistor failure."
        },
        {
          term: "Tolerance",
          definition: "The acceptable deviation from the nominal resistance value, expressed as a percentage (±1%, ±5%, ±10%). Lower tolerance means higher precision."
        },
        {
          term: "Temperature Coefficient",
          definition: "How much resistance changes with temperature, measured in ppm/°C. Important for precision applications."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Resistors",
      sections: [
        {
          title: "What is a Resistor?",
          content: "A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. Resistors are used to reduce current flow, adjust signal levels, divide voltages, bias active elements, and terminate transmission lines, among other applications."
        },
        {
          title: "Types of Resistors",
          content: [
            "Carbon Composition: Inexpensive, high tolerance, noisy",
            "Metal Film: Better tolerance and stability, lower noise",
            "Wire Wound: High power handling, low resistance values",
            "Surface Mount (SMD): Compact, used in modern electronics",
            "Variable (Potentiometers): Adjustable resistance for tuning circuits"
          ]
        },
        {
          title: "Color Code System",
          content: "Most through-hole resistors use color bands to indicate their resistance value and tolerance. The standard 4-band code uses the first two bands for significant digits, third band for multiplier, and fourth band for tolerance. 5-band and 6-band codes provide higher precision."
        },
        {
          title: "Power Dissipation",
          content: "When current flows through a resistor, electrical energy is converted to heat. The power dissipated is P = I²R = V²/R. Selecting a resistor with adequate power rating (typically 2x the calculated power) prevents overheating and failure."
        }
      ]
    }
  },
  "voltage-divider": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the input voltage (Vin) that will be divided.",
        "Enter the value of resistor R1 (upper resistor).",
        "Enter the value of resistor R2 (lower resistor).",
        "Click 'Calculate' to find the output voltage (Vout).",
        "The calculator also shows current through the divider and power dissipation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Input Voltage (Vin)",
          definition: "The voltage applied across the entire voltage divider circuit. This is the source voltage being divided."
        },
        {
          term: "Output Voltage (Vout)",
          definition: "The voltage obtained at the junction between R1 and R2, calculated as: Vout = Vin × (R2 / (R1 + R2))"
        },
        {
          term: "Voltage Ratio",
          definition: "The fraction Vout/Vin, determined solely by the resistance ratio R2/(R1+R2), independent of absolute resistance values."
        },
        {
          term: "Current Draw",
          definition: "The current flowing through both resistors: I = Vin / (R1 + R2). Higher current means more power consumption."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Voltage Dividers",
      sections: [
        {
          title: "What is a Voltage Divider?",
          content: "A voltage divider is one of the most fundamental circuits in electronics, consisting of two resistors in series. It produces an output voltage that is a fraction of its input voltage, making it essential for level shifting, biasing, and signal conditioning."
        },
        {
          title: "The Voltage Divider Formula",
          content: "The output voltage is given by: Vout = Vin × (R2 / (R1 + R2)). This elegant formula shows that the output voltage is simply the input voltage multiplied by the ratio of R2 to the total resistance. For example, if R1 = R2, then Vout = Vin/2."
        },
        {
          title: "Common Applications",
          content: [
            "Level shifting signals to match input requirements of components",
            "Creating reference voltages for comparators and ADCs",
            "Biasing transistor circuits in amplifiers",
            "Sensing applications (potentiometers, thermistors, LDRs)",
            "Attenuating signals in measurement circuits"
          ]
        },
        {
          title: "Important Considerations",
          content: [
            "Loading Effect: Connecting a load in parallel with R2 changes Vout; use high impedance loads or buffer amplifiers",
            "Power Dissipation: Both resistors dissipate power continuously; choose appropriate wattage ratings",
            "Noise: Resistor thermal noise increases with resistance value",
            "Frequency Response: Parasitic capacitance can affect high-frequency signals"
          ]
        },
        {
          title: "Design Tips",
          content: "For minimal loading effects, keep the total resistance (R1+R2) low, but balance this against power consumption. A common rule of thumb: make the divider current 10x greater than the load current. For precision applications, use 1% tolerance resistors and consider temperature coefficients."
        }
      ]
    }
  },
  "current-divider": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the total current (Itotal) flowing into the parallel branches.",
        "Enter the resistance values for R1 and R2 (the two parallel resistors).",
        "Click 'Calculate' to find the current through each branch.",
        "The calculator shows current distribution and power dissipation in each resistor.",
        "Use 'Reset' to clear all values and start a new calculation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Total Current (Itotal)",
          definition: "The total current entering the parallel combination of resistors. This current splits between the branches according to their resistance values."
        },
        {
          term: "Branch Current (I1, I2)",
          definition: "The current flowing through each individual resistor. Lower resistance branches carry more current, calculated using: I1 = Itotal × (R2 / (R1 + R2))"
        },
        {
          term: "Current Ratio",
          definition: "The proportion of total current in each branch, inversely proportional to resistance. A resistor with half the resistance carries twice the current."
        },
        {
          term: "Equivalent Resistance",
          definition: "The total resistance of the parallel combination: Req = (R1 × R2) / (R1 + R2). Always less than the smallest individual resistance."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Current Dividers",
      sections: [
        {
          title: "What is a Current Divider?",
          content: "A current divider is a fundamental circuit configuration where current splits between two or more parallel branches. The current division follows a predictable pattern based on the resistance of each branch - the path of least resistance carries the most current. This principle is essential for understanding parallel circuits and designing current-sensing and distribution networks."
        },
        {
          title: "Current Divider Formula",
          content: "For two parallel resistors, the current through R1 is: I1 = Itotal × (R2 / (R1 + R2)), and through R2: I2 = Itotal × (R1 / (R1 + R2)). Notice the inverse relationship - I1 depends on R2 and vice versa. This elegant formula shows that current divides inversely proportional to resistance, unlike voltage dividers where voltage divides proportionally."
        },
        {
          title: "Practical Applications",
          content: [
            "Current sensing circuits where a small shunt resistor carries measured current",
            "Protecting sensitive components by providing a low-resistance bypass path",
            "Designing ammeter circuits with multiple measurement ranges",
            "LED current limiting in parallel LED arrays",
            "Current distribution in power supply output stages"
          ]
        },
        {
          title: "Key Principles",
          content: [
            "Kirchhoff's Current Law: The sum of branch currents equals the total current (I1 + I2 = Itotal)",
            "Inverse Relationship: Smaller resistance carries larger current share",
            "Parallel Voltage: All parallel branches have the same voltage across them",
            "Power Distribution: Branch with higher current dissipates more power (P = I²R)",
            "Equal Resistances: When R1 = R2, current splits equally between branches"
          ]
        },
        {
          title: "Design Considerations",
          content: "When designing current divider circuits, consider the power dissipation in each resistor based on the current it carries. Use precision resistors when exact current ratios are critical. Account for temperature effects, as resistance changes with temperature will alter current distribution. For high-current applications, consider wire resistance and contact resistance which can significantly affect the current split."
        }
      ]
    }
  },
  "series-parallel-resistance": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the configuration: Series, Parallel, or Series-Parallel combination.",
        "Enter the resistance values for each resistor in the circuit.",
        "Add or remove resistor inputs as needed for your specific circuit.",
        "Click 'Calculate' to compute total equivalent resistance.",
        "The calculator displays step-by-step breakdown for complex configurations."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Series Resistance",
          definition: "When resistors are connected end-to-end, total resistance equals the sum: Rtotal = R1 + R2 + R3... The total is always greater than any individual resistor."
        },
        {
          term: "Parallel Resistance",
          definition: "When resistors share the same voltage, total resistance follows: 1/Rtotal = 1/R1 + 1/R2 + 1/R3... The total is always less than the smallest resistor."
        },
        {
          term: "Equivalent Resistance",
          definition: "The single resistance value that could replace the entire network while maintaining the same current-voltage relationship at the terminals."
        },
        {
          term: "Series-Parallel Combination",
          definition: "Complex circuits with both series and parallel sections. Solve by simplifying parallel sections first, then adding series resistances."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Series and Parallel Resistance",
      sections: [
        {
          title: "Understanding Resistance Combinations",
          content: "Resistors can be connected in series (end-to-end) or parallel (side-by-side), and understanding these configurations is fundamental to circuit analysis. Series connections increase total resistance while parallel connections decrease it. Most real-world circuits use combinations of both, requiring systematic simplification to find equivalent resistance."
        },
        {
          title: "Series Resistance Formula",
          content: "For resistors in series: Rtotal = R1 + R2 + R3 + ... + Rn. This is the simplest case - just add all resistance values. Series resistors carry the same current, but voltage divides among them proportionally. The total resistance always increases when adding resistors in series, making this configuration useful for limiting current."
        },
        {
          title: "Parallel Resistance Formula",
          content: "For resistors in parallel: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ... + 1/Rn. Alternatively, for two resistors: Rtotal = (R1 × R2)/(R1 + R2), known as the product-over-sum formula. Parallel resistors share the same voltage, but current divides among them. Adding resistors in parallel always decreases total resistance."
        },
        {
          title: "Solving Complex Networks",
          content: [
            "Identify all parallel groups and calculate their equivalent resistance first",
            "Replace each parallel group with its equivalent single resistor",
            "Add all remaining series resistances together",
            "Work systematically from innermost groups outward in nested combinations",
            "Verify results by checking that parallel equivalents are smaller than components"
          ]
        },
        {
          title: "Practical Applications",
          content: "Series-parallel resistance calculations are essential for designing voltage dividers, current limiters, and impedance matching networks. They're used in audio systems for speaker impedance matching, in power distribution for load balancing, and in sensor circuits for signal conditioning. Understanding these combinations helps troubleshoot circuits and predict behavior under different load conditions."
        }
      ]
    }
  },
  "series-parallel-capacitor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select whether capacitors are connected in Series or Parallel.",
        "Enter the capacitance values in microfarads (μF), nanofarads (nF), or picofarads (pF).",
        "Add additional capacitor inputs as needed for your circuit.",
        "Click 'Calculate' to find the total equivalent capacitance.",
        "Results show the combined capacitance and useful circuit information."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Series Capacitance",
          definition: "When capacitors are in series, total capacitance follows: 1/Ctotal = 1/C1 + 1/C2 + 1/C3... The total is always less than the smallest capacitor."
        },
        {
          term: "Parallel Capacitance",
          definition: "When capacitors are in parallel, total capacitance is the sum: Ctotal = C1 + C2 + C3... The total is always greater than any individual capacitor."
        },
        {
          term: "Voltage Rating",
          definition: "In series, voltage ratings add up. In parallel, the lowest voltage rating limits the entire combination. Critical for preventing capacitor failure."
        },
        {
          term: "Equivalent Capacitance",
          definition: "The single capacitance value that stores the same charge at the same voltage as the entire capacitor network."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Capacitor Combinations",
      sections: [
        {
          title: "Capacitor Behavior in Circuits",
          content: "Capacitors store electrical energy in an electric field between two conductive plates. Unlike resistors, capacitor combinations follow opposite rules: series connections decrease total capacitance while parallel connections increase it. This inverse behavior occurs because capacitors store charge, and the way charge distributes in series versus parallel differs fundamentally from current distribution in resistors."
        },
        {
          title: "Series Capacitor Formula",
          content: "For series capacitors: 1/Ctotal = 1/C1 + 1/C2 + 1/C3... This is the same mathematical form as parallel resistors. For two capacitors: Ctotal = (C1 × C2)/(C1 + C2). In series, all capacitors store the same charge but voltage divides among them. The smallest capacitor limits the total capacitance because it reaches full voltage first."
        },
        {
          title: "Parallel Capacitor Formula",
          content: "For parallel capacitors: Ctotal = C1 + C2 + C3 + ... This simple addition is the same as series resistors. Parallel capacitors share the same voltage but store different amounts of charge based on their individual capacitance. This configuration is commonly used to increase total charge storage capacity in power supply filtering and energy storage applications."
        },
        {
          title: "Common Applications",
          content: [
            "Power supply filtering: Parallel capacitors provide more charge storage and better noise reduction",
            "Voltage multipliers: Series capacitors in charge pump circuits generate higher voltages",
            "Tuning circuits: Adjustable capacitor combinations set resonant frequencies in radios",
            "Motor starting: Series capacitors increase voltage rating for high-voltage motor applications",
            "Decoupling networks: Multiple parallel capacitors filter different frequency ranges"
          ]
        },
        {
          title: "Important Considerations",
          content: "Always respect voltage ratings - in series configurations, ensure each capacitor can handle its share of the total voltage. Consider equivalent series resistance (ESR) which affects high-frequency performance. For electrolytic capacitors, mind the polarity when connecting in series or parallel. Temperature affects capacitance, typically ±10-20% over operating range. When paralleling for increased current handling, use same type and value for balanced load sharing."
        }
      ]
    }
  },
  "series-parallel-inductor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose the configuration: Series, Parallel, or Mixed combination.",
        "Enter inductance values in henries (H), millihenries (mH), or microhenries (μH).",
        "Specify the number of inductors and their individual values.",
        "Click 'Calculate' to compute total equivalent inductance.",
        "Review the results including total inductance and coupling considerations."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Series Inductance",
          definition: "When inductors are connected in series without magnetic coupling, total inductance is the sum: Ltotal = L1 + L2 + L3... Total inductance increases with each added inductor."
        },
        {
          term: "Parallel Inductance",
          definition: "When inductors are in parallel without coupling: 1/Ltotal = 1/L1 + 1/L2 + 1/L3... Total inductance is always less than the smallest individual inductor."
        },
        {
          term: "Mutual Inductance",
          definition: "When inductors are physically close, magnetic fields interact, affecting total inductance. Coupling can be additive (aiding) or subtractive (opposing) based on winding direction."
        },
        {
          term: "Quality Factor (Q)",
          definition: "The ratio of inductive reactance to resistance, indicating inductor efficiency. Higher Q means lower losses and better performance in resonant circuits."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Inductor Combinations",
      sections: [
        {
          title: "Understanding Inductors",
          content: "Inductors store energy in a magnetic field when current flows through them. They oppose changes in current, making them essential for filters, energy storage, and electromagnetic applications. Unlike ideal components, real inductors have resistance, capacitance, and magnetic coupling effects that influence their behavior in series and parallel combinations."
        },
        {
          title: "Series Inductor Formula",
          content: "For uncoupled series inductors: Ltotal = L1 + L2 + L3 + ... If magnetic coupling exists: Ltotal = L1 + L2 ± 2M, where M is mutual inductance. The ± depends on whether magnetic fields aid (+) or oppose (-) each other, determined by winding direction. Series inductors carry the same current, and voltage across each is proportional to its inductance."
        },
        {
          title: "Parallel Inductor Formula",
          content: "For uncoupled parallel inductors: 1/Ltotal = 1/L1 + 1/L2 + 1/L3... For two inductors: Ltotal = (L1 × L2)/(L1 + L2). Parallel inductors share the same voltage but current divides inversely proportional to inductance. This configuration is less common than series because of coupling issues, but useful when lower inductance or higher current handling is needed."
        },
        {
          title: "Practical Applications",
          content: [
            "Filter circuits: Series inductors in LC filters for power supplies and audio crossovers",
            "Energy storage: Parallel inductors in high-current applications like DC-DC converters",
            "Impedance matching: Series-parallel combinations in RF circuits and antenna tuners",
            "Common-mode chokes: Coupled series inductors filter noise in power lines",
            "Resonant circuits: LC combinations determine oscillation frequency in radios and oscillators"
          ]
        },
        {
          title: "Design Considerations",
          content: "Physical spacing is critical - place inductors at right angles or far apart to minimize coupling unless coupling is intentional. Consider DC resistance which causes power loss and affects efficiency. Saturation current limits must not be exceeded or inductance drops dramatically. Core material affects frequency response and loss characteristics. For high-frequency applications, parasitic capacitance between windings creates self-resonance that limits usable frequency range."
        }
      ]
    }
  },
  "conductance": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter either the resistance value in ohms (Ω) or conductance in siemens (S).",
        "The calculator automatically converts between resistance and conductance.",
        "Results display both values along with related electrical properties.",
        "Use the unit converter to work with millisiemens (mS) or microsiemens (μS).",
        "Click 'Reset' to clear values and perform a new conversion."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Resistance (R)",
          definition: "The opposition to current flow through a conductor, measured in ohms (Ω). Represents how much a material impedes the flow of electric charge."
        },
        {
          term: "Conductance (G)",
          definition: "The ease with which current flows through a conductor, measured in siemens (S). It is the reciprocal of resistance: G = 1/R."
        },
        {
          term: "Siemens",
          definition: "The SI unit of conductance, named after Werner von Siemens. One siemens equals one ampere per volt (1 S = 1 A/V), or the reciprocal of one ohm."
        },
        {
          term: "Conductivity vs Conductance",
          definition: "Conductivity is a material property (σ) measured in S/m, while conductance is a property of a specific conductor depending on both material and geometry."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Conductance",
      sections: [
        {
          title: "What is Conductance?",
          content: "Conductance is the measure of how easily electricity flows through a material or component. While resistance describes opposition to current flow, conductance describes facilitation of current flow. The relationship is perfectly inverse: G = 1/R and R = 1/G. Conductance is particularly useful in parallel circuit analysis where conductances simply add, unlike the complex reciprocal calculations required for parallel resistances."
        },
        {
          title: "Converting Between Resistance and Conductance",
          content: "The conversion is straightforward: to find conductance from resistance, divide 1 by the resistance value. To find resistance from conductance, divide 1 by the conductance value. For example, a 100Ω resistor has conductance of 0.01 S (or 10 mS). A very low resistance of 0.1Ω has high conductance of 10 S. This inverse relationship means high resistance equals low conductance and vice versa."
        },
        {
          title: "Why Use Conductance?",
          content: [
            "Parallel circuit analysis: Conductances in parallel add directly (Gtotal = G1 + G2 + G3...)",
            "Network analysis: Nodal analysis and admittance calculations are simpler with conductance",
            "Measurement applications: Some instruments measure conductance directly (conductivity meters)",
            "Material science: Comparing electrical properties of different materials and solutions",
            "Transmission lines: Characterizing leakage and losses in communication cables"
          ]
        },
        {
          title: "Parallel Circuits Made Simple",
          content: "Conductance shines in parallel circuit analysis. Instead of the complex formula 1/Rtotal = 1/R1 + 1/R2 + 1/R3, you can use: Gtotal = G1 + G2 + G3. This simple addition makes calculations faster and more intuitive. For example, three parallel resistors of 100Ω, 200Ω, and 300Ω convert to 0.01 S, 0.005 S, and 0.0033 S, which sum to 0.0183 S total conductance, equivalent to 54.6Ω total resistance."
        },
        {
          title: "Applications in Engineering",
          content: "Conductance is essential in electrochemistry for measuring ion concentration in solutions. In telecommunications, it characterizes cable insulation and leakage. Power system engineers use conductance to model transmission line losses. In electronics, transconductance (ratio of output current to input voltage) defines amplifier gain in transistors and vacuum tubes. Semiconductor physics uses conductance to describe carrier mobility and doping effects."
        }
      ]
    }
  },
  "impedance": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the resistance (R) component in ohms.",
        "Enter the reactance (X) component in ohms (positive for inductive, negative for capacitive).",
        "Click 'Calculate' to compute impedance magnitude and phase angle.",
        "Results show rectangular form (R + jX) and polar form (|Z| ∠ θ).",
        "Use the results to analyze AC circuit behavior and phase relationships."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Impedance (Z)",
          definition: "The total opposition to AC current flow, combining resistance and reactance. Measured in ohms (Ω), it is a complex quantity: Z = R + jX."
        },
        {
          term: "Impedance Magnitude |Z|",
          definition: "The absolute value of impedance, calculated as |Z| = √(R² + X²). This represents the overall opposition to current flow in an AC circuit."
        },
        {
          term: "Phase Angle (θ)",
          definition: "The angle between voltage and current waveforms, calculated as θ = arctan(X/R). Positive angles indicate inductive circuits, negative indicate capacitive circuits."
        },
        {
          term: "Complex Impedance",
          definition: "Expressed as Z = R + jX where R is the real part (resistance), X is the imaginary part (reactance), and j is the imaginary unit (√-1)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Impedance",
      sections: [
        {
          title: "Understanding Impedance",
          content: "Impedance extends the concept of resistance to AC circuits, accounting for both energy dissipation (resistance) and energy storage (reactance). While resistance is purely real and constant with frequency, impedance is complex and frequency-dependent. It describes not only the magnitude of opposition to current but also the phase relationship between voltage and current, essential for understanding AC circuit behavior."
        },
        {
          title: "Impedance Components and Formula",
          content: "Impedance combines resistance (R) and reactance (X) as Z = R + jX in rectangular form. The magnitude is |Z| = √(R² + X²) and phase angle θ = arctan(X/R), giving polar form Z = |Z|∠θ. Inductive reactance XL = 2πfL creates positive phase angles (voltage leads current). Capacitive reactance XC = 1/(2πfC) creates negative phase angles (current leads voltage). Pure resistance has zero phase angle."
        },
        {
          title: "Impedance in Series and Parallel",
          content: [
            "Series impedances: Ztotal = Z1 + Z2 + Z3... (add complex numbers)",
            "Parallel impedances: 1/Ztotal = 1/Z1 + 1/Z2 + 1/Z3... (reciprocal sum)",
            "Series: Both real and imaginary parts add separately",
            "Parallel: Use admittance (Y = 1/Z) for easier calculation",
            "Mixed networks: Simplify step by step, combining series and parallel sections"
          ]
        },
        {
          title: "Practical Applications",
          content: "Impedance matching is crucial in RF circuits, audio systems, and power transmission to maximize power transfer and minimize reflections. Loudspeaker impedance (typically 4Ω, 8Ω, or 16Ω) must match amplifier output impedance. In telecommunications, 50Ω or 75Ω impedance standards prevent signal distortion. Power factor correction uses impedance calculations to minimize reactive power in industrial systems."
        },
        {
          title: "Resonance and Impedance",
          content: "At resonance in LC circuits, inductive and capacitive reactances cancel (XL = XC), leaving only resistance. This creates minimum impedance in parallel LC circuits (used in bandpass filters) and maximum impedance in series LC circuits (used in traps and notch filters). Resonant frequency is f = 1/(2π√LC). Quality factor Q = |X|/R determines bandwidth and selectivity of resonant circuits."
        }
      ]
    }
  },
  "reactance": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the type of reactance: Inductive (XL) or Capacitive (XC).",
        "For inductive reactance, enter frequency (Hz) and inductance (H).",
        "For capacitive reactance, enter frequency (Hz) and capacitance (F).",
        "Click 'Calculate' to compute reactance value in ohms.",
        "Results show reactance, impedance at that frequency, and phase information."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Inductive Reactance (XL)",
          definition: "The opposition to AC current flow by an inductor, calculated as XL = 2πfL. Measured in ohms, it increases with frequency and inductance."
        },
        {
          term: "Capacitive Reactance (XC)",
          definition: "The opposition to AC current flow by a capacitor, calculated as XC = 1/(2πfC). Measured in ohms, it decreases as frequency or capacitance increases."
        },
        {
          term: "Frequency Dependence",
          definition: "Reactance varies with frequency: inductors block high frequencies (high XL) while capacitors block low frequencies (high XC). This enables filtering applications."
        },
        {
          term: "Reactive Power",
          definition: "Power alternately stored and released by reactive components, measured in volt-amperes reactive (VAR). Unlike resistive power, it doesn't dissipate as heat."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Reactance",
      sections: [
        {
          title: "What is Reactance?",
          content: "Reactance is the opposition to AC current caused by capacitors and inductors. Unlike resistance which dissipates energy as heat, reactance stores energy temporarily in electric or magnetic fields and returns it to the circuit. Reactance is frequency-dependent: inductors have higher reactance at higher frequencies, while capacitors have lower reactance at higher frequencies. This frequency selectivity makes reactive components essential for filters, tuning circuits, and impedance matching."
        },
        {
          title: "Inductive Reactance Formula",
          content: "Inductive reactance is XL = 2πfL = ωL, where f is frequency in Hz, L is inductance in henries, and ω = 2πf is angular frequency in radians/second. At DC (f = 0), XL = 0, meaning inductors act as short circuits. As frequency increases, XL increases linearly, making inductors block high-frequency signals. This property is used in low-pass filters, RF chokes, and power line filtering."
        },
        {
          title: "Capacitive Reactance Formula",
          content: "Capacitive reactance is XC = 1/(2πfC) = 1/(ωC), where C is capacitance in farads. At DC (f = 0), XC approaches infinity, meaning capacitors block DC completely. As frequency increases, XC decreases, allowing capacitors to pass high-frequency signals easily. This makes capacitors ideal for AC coupling, high-pass filters, and blocking DC while passing AC signals in audio and communication circuits."
        },
        {
          title: "Applications of Reactance",
          content: [
            "Filters: Combining XL and XC creates low-pass, high-pass, band-pass, and band-stop filters",
            "Tuning circuits: Resonance occurs when XL = XC, selecting specific frequencies in radios",
            "Power factor correction: Capacitors offset inductive reactance in motors and transformers",
            "Impedance matching: Reactive components match source and load impedances for maximum power transfer",
            "Signal coupling: Capacitors couple AC signals while blocking DC bias voltages"
          ]
        },
        {
          title: "Phase Relationships",
          content: "Inductors cause current to lag voltage by 90 degrees, meaning voltage reaches its peak before current does. Capacitors cause current to lead voltage by 90 degrees. This phase shift is critical in AC circuit analysis and power systems. In purely reactive circuits, no real power is consumed - energy oscillates between source and reactive components. The mnemonic 'ELI the ICE man' helps remember: in an inductor (L), voltage (E) leads current (I); in a capacitor (C), current (I) leads voltage (E)."
        }
      ]
    }
  },
  "force-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select what you want to calculate: Force, Mass, or Acceleration.",
        "Enter the two known values from the formula F = m × a.",
        "Choose appropriate units (newtons, kilograms, m/s²).",
        "Click 'Calculate' to compute the unknown value.",
        "Results display the calculated value with proper units and context."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Force (F)",
          definition: "A push or pull that can change an object's motion, measured in newtons (N). One newton is the force required to accelerate 1 kg at 1 m/s²."
        },
        {
          term: "Mass (m)",
          definition: "The quantity of matter in an object, measured in kilograms (kg). Mass is constant regardless of location, unlike weight which varies with gravity."
        },
        {
          term: "Acceleration (a)",
          definition: "The rate of change of velocity, measured in meters per second squared (m/s²). Includes both speeding up, slowing down, and changing direction."
        },
        {
          term: "Newton's Second Law",
          definition: "States that force equals mass times acceleration (F = ma). This fundamental principle connects force, mass, and motion in classical mechanics."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Force Calculations",
      sections: [
        {
          title: "Newton's Second Law of Motion",
          content: "Newton's Second Law, F = ma, is one of the most important equations in physics. It states that the force acting on an object equals its mass multiplied by its acceleration. This means heavier objects require more force to accelerate at the same rate as lighter objects, and any object will accelerate more when subjected to greater force. This law governs everything from car crashes to rocket launches."
        },
        {
          title: "The Force Formula",
          content: "F = m × a relates three fundamental quantities. Force is measured in newtons (N), mass in kilograms (kg), and acceleration in meters per second squared (m/s²). The formula can be rearranged: a = F/m (acceleration equals force divided by mass) or m = F/a (mass equals force divided by acceleration). One newton is defined as the force needed to accelerate 1 kg at 1 m/s², equivalent to about 0.225 pounds-force."
        },
        {
          title: "Types of Forces",
          content: [
            "Gravitational Force: Weight = mass × gravitational acceleration (W = mg, where g ≈ 9.8 m/s²)",
            "Normal Force: Perpendicular support force from surfaces, equal and opposite to applied force",
            "Friction Force: Opposes motion, proportional to normal force (F = μN)",
            "Tension Force: Force transmitted through ropes, cables, or strings",
            "Applied Force: External force directly applied to an object by a person or machine"
          ]
        },
        {
          title: "Real-World Applications",
          content: "Force calculations are essential in engineering design, from calculating structural loads in buildings to determining thrust requirements for aircraft. Automotive engineers use F = ma to design braking systems and analyze crash safety. Sports scientists apply it to optimize athletic performance by analyzing forces during jumping, throwing, and running. Rocket scientists use it to calculate the thrust needed to overcome gravity and achieve orbit."
        },
        {
          title: "Common Scenarios",
          content: "When an elevator accelerates upward, you feel heavier because the floor exerts extra upward force. A car accelerating at 5 m/s² with mass 1500 kg requires 7500 N of force from the engine. A falling object experiences downward gravitational force of mg; without air resistance, it accelerates at g = 9.8 m/s². Understanding force helps explain why pushing a shopping cart is easier than pushing a car - same force produces much greater acceleration on lower mass."
        }
      ]
    }
  },
  "torque-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select what to calculate: Torque, Force, or Distance (lever arm).",
        "Enter the force applied in newtons (N) or pounds-force (lbf).",
        "Enter the distance from the pivot point (lever arm) in meters or feet.",
        "Specify the angle between force and lever arm (90° for perpendicular).",
        "Click 'Calculate' to compute torque in newton-meters (N·m) or pound-feet (lb·ft)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Torque (τ)",
          definition: "The rotational force that causes an object to rotate about an axis, measured in newton-meters (N·m). Also called moment of force or turning force."
        },
        {
          term: "Force (F)",
          definition: "The linear force applied at a distance from the pivot point. The component of force perpendicular to the lever arm creates torque."
        },
        {
          term: "Lever Arm (r)",
          definition: "The perpendicular distance from the axis of rotation to the line of action of the force. Greater distance creates greater torque for the same force."
        },
        {
          term: "Angle of Application",
          definition: "The angle between force vector and lever arm. Maximum torque occurs at 90° (perpendicular). Torque = F × r × sin(θ)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Torque",
      sections: [
        {
          title: "Understanding Torque",
          content: "Torque is the rotational equivalent of force. While force causes linear acceleration, torque causes angular acceleration - it makes things spin. The same force creates different torques depending on where it's applied: pushing a door near the hinges requires much more force than pushing at the handle because the lever arm is shorter. This principle explains why we use wrenches with long handles and why doorknobs are placed far from hinges."
        },
        {
          title: "Torque Formula",
          content: "The basic torque formula is τ = r × F × sin(θ), where r is the lever arm distance, F is the applied force, and θ is the angle between them. When force is perpendicular to the lever arm (θ = 90°), sin(90°) = 1, simplifying to τ = r × F. Torque is measured in newton-meters (N·m) in SI units or pound-feet (lb·ft) in imperial units. Increasing either force or distance increases torque proportionally."
        },
        {
          title: "Direction and Sign Convention",
          content: "Torque is a vector quantity with both magnitude and direction. By the right-hand rule, if your fingers curl in the direction of rotation, your thumb points in the torque vector direction. Counterclockwise torque is typically positive, clockwise is negative. When multiple torques act on an object, they add vectorially. Equilibrium occurs when net torque equals zero, meaning the object doesn't rotate or rotates at constant angular velocity."
        },
        {
          title: "Practical Applications",
          content: [
            "Automotive: Engine torque determines acceleration capability; wheel lug nuts require specific tightening torque",
            "Mechanical tools: Wrenches, screwdrivers, and torque wrenches apply controlled rotational force",
            "Bicycles: Gear ratios change torque-speed relationship; riders apply torque to pedals",
            "Doors and levers: Placement of handles maximizes torque for easy opening",
            "Robotics: Motor torque calculations for robotic arm movements and load capacity"
          ]
        },
        {
          title: "Torque vs Horsepower",
          content: "In engines, torque and horsepower are related but different. Torque is the twisting force the engine produces; horsepower is the rate at which work is done. The relationship is: Horsepower = (Torque × RPM) / 5252. High torque at low RPM is useful for towing and acceleration from standstill. High horsepower at high RPM provides top speed. Diesel engines typically produce more torque, gasoline engines more horsepower."
        }
      ]
    }
  },
  "pressure-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose what to calculate: Pressure, Force, or Area.",
        "Enter the force applied in newtons (N) or pounds (lb).",
        "Enter the area over which force is distributed in m² or ft².",
        "Select your preferred pressure unit (Pa, kPa, psi, bar, atm).",
        "Click 'Calculate' to compute pressure using P = F/A."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Pressure (P)",
          definition: "Force distributed over an area, measured in pascals (Pa). One pascal equals one newton per square meter (1 Pa = 1 N/m²)."
        },
        {
          term: "Force (F)",
          definition: "The total perpendicular force applied to the surface, measured in newtons (N). The same force creates higher pressure when applied to smaller areas."
        },
        {
          term: "Area (A)",
          definition: "The surface area over which force is distributed, measured in square meters (m²). Increasing area decreases pressure for the same force."
        },
        {
          term: "Common Pressure Units",
          definition: "Pascal (Pa), kilopascal (kPa), bar, atmosphere (atm), pounds per square inch (psi), torr, and mmHg. 1 atm = 101,325 Pa = 14.7 psi."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Pressure",
      sections: [
        {
          title: "Understanding Pressure",
          content: "Pressure is force distributed over an area, calculated as P = F/A. This fundamental concept explains why sharp objects pierce more easily than dull ones (same force concentrated over smaller area creates higher pressure), why snowshoes prevent sinking in snow (spreading weight over larger area reduces pressure), and how hydraulic systems multiply force. Pressure acts perpendicular to surfaces and distributes equally in all directions in fluids."
        },
        {
          title: "The Pressure Formula",
          content: "P = F/A shows that pressure is inversely proportional to area - doubling the area halves the pressure. The formula rearranges to F = P × A (force equals pressure times area) and A = F/P (area equals force divided by pressure). Standard atmospheric pressure at sea level is 101,325 Pa (or 101.325 kPa), which equals 14.7 psi or 1 atm. This pressure results from the weight of Earth's atmosphere pressing down on surfaces."
        },
        {
          title: "Types of Pressure",
          content: [
            "Absolute Pressure: Total pressure including atmospheric pressure, measured from perfect vacuum",
            "Gauge Pressure: Pressure relative to atmospheric pressure (most pressure gauges show this)",
            "Atmospheric Pressure: Pressure exerted by Earth's atmosphere, varies with altitude and weather",
            "Hydrostatic Pressure: Pressure in fluids due to gravity, increases with depth (P = ρgh)",
            "Partial Pressure: Pressure contribution of individual gases in a mixture (Dalton's Law)"
          ]
        },
        {
          title: "Real-World Applications",
          content: "Pressure calculations are essential in pneumatic and hydraulic systems, where small input forces create large output forces by pressure transmission through fluids. Tire pressure affects vehicle handling and fuel efficiency. Scuba divers must understand pressure changes with depth to avoid decompression sickness. Weather forecasting relies on atmospheric pressure patterns. Medical applications include blood pressure measurement and ventilator settings. Industrial processes use pressure vessels, compressors, and vacuum systems."
        },
        {
          title: "Pascal's Principle and Hydraulics",
          content: "Pascal's Principle states that pressure applied to a confined fluid transmits equally in all directions. This enables hydraulic systems to multiply force: a small force on a small piston creates the same pressure as a large force on a large piston. If input piston has area 1 cm² and output piston has area 100 cm², a 10 N input force creates 1000 N output force. This principle powers car brakes, hydraulic jacks, and heavy machinery."
        }
      ]
    }
  },
  "beam-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the beam support type: Simply supported, cantilever, or fixed.",
        "Enter the beam length (span) in meters or feet.",
        "Input the load magnitude and type (point load or distributed load).",
        "Specify material properties: Young's modulus (E) and moment of inertia (I).",
        "Click 'Calculate' to compute maximum deflection, bending moment, and shear force."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Beam Deflection (δ)",
          definition: "The vertical displacement of a beam under load, measured in millimeters or inches. Excessive deflection can cause structural failure or serviceability issues."
        },
        {
          term: "Bending Moment (M)",
          definition: "The internal moment causing bending stress in the beam, measured in kN·m or lb·ft. Maximum bending moment determines required beam strength."
        },
        {
          term: "Moment of Inertia (I)",
          definition: "A geometric property representing resistance to bending, measured in m⁴ or in⁴. Larger I values mean stiffer beams with less deflection."
        },
        {
          term: "Young's Modulus (E)",
          definition: "The material's stiffness or resistance to deformation, measured in GPa or psi. Steel has E ≈ 200 GPa, concrete ≈ 25 GPa, wood ≈ 10 GPa."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Beam Deflection",
      sections: [
        {
          title: "Understanding Beam Deflection",
          content: "Beam deflection is the displacement of a structural member under load. All beams deflect when loaded, and calculating this deflection is crucial for ensuring structures remain safe and functional. Excessive deflection can cause cracks in attached finishes, misalignment of machinery, or structural failure. Building codes specify maximum allowable deflections, typically L/360 for floors (where L is span length) to prevent visible sagging and damage."
        },
        {
          title: "Deflection Formulas",
          content: "For a simply supported beam with uniform load: δmax = (5wL⁴)/(384EI), where w is load per unit length, L is span, E is Young's modulus, and I is moment of inertia. For a cantilever beam with point load at end: δmax = (PL³)/(3EI). Deflection increases dramatically with span (fourth power relationship) and decreases with increased stiffness (EI). This shows why doubling beam depth is much more effective than doubling width for reducing deflection."
        },
        {
          title: "Support Conditions",
          content: [
            "Simply Supported: Beam rests on supports at both ends, free to rotate but not translate",
            "Cantilever: Beam fixed at one end, free at the other; deflects more than simply supported",
            "Fixed (Built-in): Both ends rigidly attached; deflects less, develops fixed-end moments",
            "Continuous: Beam extends over multiple supports; intermediate supports reduce deflection",
            "Propped Cantilever: One fixed end, one simple support; intermediate stiffness"
          ]
        },
        {
          title: "Factors Affecting Deflection",
          content: "Beam deflection depends on load magnitude and distribution, span length, cross-sectional shape, and material properties. Increasing beam depth is most effective for reducing deflection because moment of inertia increases with the cube of depth. Material choice matters: steel beams deflect less than wood beams of the same size. Temperature changes cause thermal expansion that can increase deflection. Long-term deflection in concrete includes creep effects, potentially doubling initial deflection over years."
        },
        {
          title: "Practical Design Considerations",
          content: "Engineers must check both strength (stress) and serviceability (deflection). A beam might be strong enough to carry loads without breaking but still deflect too much for practical use. Pre-cambering (building in upward curvature) compensates for expected deflection in long-span beams. Composite construction using steel and concrete combines high strength-to-weight ratio with reduced deflection. For vibration-sensitive applications like laboratories or dance floors, deflection limits are stricter than typical L/360 criteria."
        }
      ]
    }
  },
  "concrete-volume": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the shape: Slab, column, footing, or stairs.",
        "Enter dimensions in your preferred units (meters, feet, or inches).",
        "For slabs: enter length, width, and thickness.",
        "For columns or footings: enter diameter/dimensions and height/depth.",
        "Click 'Calculate' to get concrete volume in cubic meters, cubic yards, or cubic feet."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Concrete Volume",
          definition: "The amount of concrete needed for a project, measured in cubic meters (m³), cubic yards (yd³), or cubic feet (ft³). One cubic yard equals 27 cubic feet."
        },
        {
          term: "Wastage Factor",
          definition: "Additional concrete ordered to account for spillage, over-excavation, and irregular surfaces. Typically 5-10% extra is added to calculated volume."
        },
        {
          term: "Number of Bags",
          definition: "For small projects using bagged concrete mix. A typical 80 lb bag yields about 0.6 ft³ (0.017 m³) of concrete when mixed."
        },
        {
          term: "Weight Estimation",
          definition: "Concrete weighs approximately 2,400 kg/m³ (150 lb/ft³). Important for structural load calculations and transportation planning."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Concrete Volume Calculations",
      sections: [
        {
          title: "Why Accurate Volume Matters",
          content: "Calculating concrete volume accurately saves money and ensures project success. Ordering too little means expensive rush deliveries and cold joints where new concrete meets old, potentially weakening the structure. Ordering too much wastes money and creates disposal problems. For large pours, even small percentage errors translate to significant cost differences. Professional contractors include 5-10% wastage factor to account for uneven subgrades, spillage, and measurement uncertainties."
        },
        {
          title: "Volume Formulas by Shape",
          content: "For rectangular slabs: Volume = Length × Width × Thickness. For cylindrical columns: Volume = π × r² × Height, where r is radius. For square/rectangular footings: Volume = Length × Width × Depth. For stairs: Calculate each step volume and multiply by number of steps, or use overall dimensions and subtract triangular void. Always convert all measurements to the same unit before calculating."
        },
        {
          title: "Common Concrete Applications",
          content: [
            "Foundation Slabs: Typically 100-150mm thick for residential, thicker for commercial buildings",
            "Driveways and Paths: Usually 100mm thick for light vehicles, 150mm for heavy vehicles",
            "Footings: Size depends on soil bearing capacity and load; common residential footings are 600mm wide × 300mm deep",
            "Columns: Circular or square, size determined by structural requirements and building height",
            "Retaining Walls: Thickness increases with wall height, typically 200-400mm for residential walls"
          ]
        },
        {
          title: "Ordering Concrete",
          content: "Ready-mix concrete is ordered in cubic yards or cubic meters with minimum quantities typically 1-2 m³. Specify the concrete strength (e.g., 25 MPa, 32 MPa), slump (workability), and aggregate size. For small jobs under 1 m³, bagged concrete mix may be more economical despite higher unit cost. Calculate total project volume, add wastage factor, then round up to the next convenient delivery size. Consider access for concrete trucks and placement method."
        },
        {
          title: "Important Considerations",
          content: "Account for rebar and embedded items that displace concrete volume in columns and beams. For large slabs, expansion joints divide the pour into sections but don't affect volume calculations. Sloped surfaces require careful measurement - use average thickness or divide into sections. Irregular shapes can be broken down into combinations of rectangles, triangles, and circles. Always verify measurements on-site before ordering, as design drawings may not reflect as-built conditions."
        }
      ]
    }
  },
  "velocity-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select what to calculate: Velocity, Distance, or Time.",
        "Enter distance traveled in meters, kilometers, miles, or feet.",
        "Enter time taken in seconds, minutes, or hours.",
        "Choose desired velocity units (m/s, km/h, mph, ft/s).",
        "Click 'Calculate' to compute velocity using v = d/t."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Velocity (v)",
          definition: "The rate of change of position with time, measured in m/s, km/h, or mph. Velocity includes both speed (magnitude) and direction of motion."
        },
        {
          term: "Distance (d)",
          definition: "The total path length traveled by an object, measured in meters, kilometers, miles, or feet. For straight-line motion, distance equals displacement."
        },
        {
          term: "Time (t)",
          definition: "The duration of motion, measured in seconds, minutes, or hours. Time must be measured from start to end of the distance traveled."
        },
        {
          term: "Speed vs Velocity",
          definition: "Speed is scalar (magnitude only), velocity is vector (magnitude and direction). Speed is always positive; velocity can be negative indicating opposite direction."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Velocity",
      sections: [
        {
          title: "Understanding Velocity",
          content: "Velocity describes how fast an object moves and in what direction. The basic formula v = d/t (velocity equals distance divided by time) gives average velocity over a time interval. Instantaneous velocity is the velocity at a specific moment, found by calculus as the derivative of position with respect to time. While speed only tells you how fast something moves, velocity's directional component is crucial for navigation, collision avoidance, and understanding motion in physics."
        },
        {
          title: "The Velocity Formula",
          content: "v = d/t can be rearranged to find any variable: d = v × t (distance equals velocity times time) or t = d/v (time equals distance divided by velocity). If a car travels 100 km in 2 hours, average velocity is 50 km/h. Converting units is common: 50 km/h = 13.9 m/s = 31.1 mph. Common conversions: multiply km/h by 0.278 to get m/s, multiply mph by 0.447 to get m/s."
        },
        {
          title: "Average vs Instantaneous Velocity",
          content: [
            "Average Velocity: Total displacement divided by total time, ignoring variations during motion",
            "Instantaneous Velocity: Velocity at a specific instant, shown by speedometer in vehicles",
            "Constant Velocity: Object moves equal distances in equal time intervals, no acceleration",
            "Variable Velocity: Speed or direction changes, requires acceleration or deceleration",
            "Velocity-Time Graphs: Slope represents acceleration, area under curve represents displacement"
          ]
        },
        {
          title: "Real-World Applications",
          content: "Velocity calculations are essential in transportation for trip planning, fuel consumption estimates, and arrival time predictions. In sports, analyzing athlete velocities helps optimize performance in running, swimming, and cycling. GPS systems calculate velocity from position changes to provide navigation guidance. Air traffic control uses velocity vectors to maintain safe aircraft separation. In physics education, velocity problems develop understanding of motion, acceleration, and momentum."
        },
        {
          title: "Relative Velocity",
          content: "Velocity depends on the reference frame. A person walking forward at 1 m/s on a train moving at 30 m/s has velocity of 31 m/s relative to the ground but only 1 m/s relative to the train. When objects move toward each other, relative velocity is the sum of their speeds; when moving in the same direction, it's the difference. This concept is crucial for understanding collisions, orbital mechanics, and special relativity effects at very high speeds."
        }
      ]
    }
  },
  "density-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose what to calculate: Density, Mass, or Volume.",
        "Enter mass in kilograms, grams, or pounds.",
        "Enter volume in liters, cubic meters, or cubic centimeters.",
        "Select desired density units (kg/m³, g/cm³, lb/ft³).",
        "Click 'Calculate' to compute density using ρ = m/V."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Density (ρ)",
          definition: "Mass per unit volume of a substance, measured in kg/m³ or g/cm³. Dense materials have more mass packed into the same volume than less dense materials."
        },
        {
          term: "Mass (m)",
          definition: "The amount of matter in an object, measured in kilograms or grams. Mass is constant regardless of location, unlike weight which varies with gravity."
        },
        {
          term: "Volume (V)",
          definition: "The amount of three-dimensional space occupied by an object, measured in liters, m³, or cm³. Volume can be measured directly or calculated from dimensions."
        },
        {
          term: "Specific Gravity",
          definition: "The ratio of a substance's density to water's density (1 g/cm³ or 1000 kg/m³). Dimensionless number useful for comparing material densities."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Density",
      sections: [
        {
          title: "Understanding Density",
          content: "Density is a fundamental property that describes how much mass is packed into a given volume, calculated as ρ = m/V. It explains why some objects float (lower density than water) and others sink (higher density than water). Density varies with temperature and pressure - gases are highly compressible and density changes significantly, while liquids and solids are relatively incompressible. This property is crucial in material selection, fluid mechanics, and understanding physical behavior of matter."
        },
        {
          title: "The Density Formula",
          content: "ρ = m/V can be rearranged: m = ρ × V (mass equals density times volume) or V = m/ρ (volume equals mass divided by density). Water's density is exactly 1 g/cm³ or 1000 kg/m³ at 4°C, making it a convenient reference. Lead (11,340 kg/m³) is much denser than aluminum (2,700 kg/m³), so equal volumes of lead weigh about 4 times more. Air density at sea level is approximately 1.2 kg/m³, nearly 800 times less dense than water."
        },
        {
          title: "Density of Common Materials",
          content: [
            "Solids: Steel 7,850 kg/m³, Aluminum 2,700 kg/m³, Wood 400-900 kg/m³, Gold 19,300 kg/m³",
            "Liquids: Water 1,000 kg/m³, Mercury 13,600 kg/m³, Gasoline 737 kg/m³, Ethanol 789 kg/m³",
            "Gases: Air 1.2 kg/m³, Helium 0.18 kg/m³, CO₂ 1.98 kg/m³ (all at standard temperature and pressure)",
            "Construction: Concrete 2,400 kg/m³, Brick 1,920 kg/m³, Sand 1,600 kg/m³",
            "Exotic: Osmium 22,590 kg/m³ (densest element), Aerogel 1 kg/m³ (ultra-light solid)"
          ]
        },
        {
          title: "Practical Applications",
          content: "Density measurements identify unknown substances and detect adulteration or contamination. In quality control, checking density ensures correct material composition. Oil floats on water due to lower density, enabling oil-water separation. Hot air balloons rise because heated air is less dense than cool air. Hydrometers measure liquid density to test battery acid strength, wine alcohol content, and antifreeze concentration. In geology, density differences drive plate tectonics and planetary differentiation."
        },
        {
          title: "Temperature and Pressure Effects",
          content: "Most materials expand when heated, decreasing density. Water is unusual: it's densest at 4°C and becomes less dense when frozen, which is why ice floats. This unique property prevents lakes from freezing solid from bottom up, preserving aquatic life. Gas density is highly sensitive to pressure (ideal gas law: ρ = PM/RT). High-altitude air is less dense, affecting aircraft performance and human physiology. Pressure cookers increase water density, raising boiling point for faster cooking."
        }
      ]
    }
  },
  "acceleration-calculator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select what to calculate: Acceleration, Final Velocity, Initial Velocity, or Time.",
        "Enter initial velocity (if object starts from rest, use 0).",
        "Enter final velocity or the velocity change.",
        "Enter the time interval over which acceleration occurs.",
        "Click 'Calculate' to compute acceleration using a = Δv/Δt."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Acceleration (a)",
          definition: "The rate of change of velocity with time, measured in m/s² or ft/s². Positive acceleration means speeding up, negative (deceleration) means slowing down."
        },
        {
          term: "Initial Velocity (v₀)",
          definition: "The velocity at the start of the time interval. For objects starting from rest, v₀ = 0. Measured in m/s, km/h, or mph."
        },
        {
          term: "Final Velocity (v)",
          definition: "The velocity at the end of the time interval. The change in velocity (Δv = v - v₀) determines acceleration magnitude."
        },
        {
          term: "Time Interval (Δt)",
          definition: "The duration over which velocity changes, measured in seconds, minutes, or hours. Shorter time for same velocity change means higher acceleration."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Acceleration",
      sections: [
        {
          title: "Understanding Acceleration",
          content: "Acceleration is the rate at which velocity changes over time, calculated as a = Δv/Δt or a = (v - v₀)/t. It describes how quickly something speeds up, slows down, or changes direction. Acceleration is a vector quantity with both magnitude and direction. Constant acceleration means velocity changes by equal amounts in equal time intervals. Variable acceleration, like in real driving, requires calculus to analyze. Understanding acceleration is fundamental to mechanics, vehicle dynamics, and motion analysis."
        },
        {
          title: "Acceleration Formulas",
          content: "The basic formula a = (v - v₀)/t gives average acceleration. From Newton's Second Law: a = F/m (acceleration equals force divided by mass), connecting acceleration to forces. Kinematic equations for constant acceleration include: v = v₀ + at (final velocity), s = v₀t + ½at² (displacement), and v² = v₀² + 2as (velocity without time). These equations solve countless motion problems in physics and engineering."
        },
        {
          title: "Types of Acceleration",
          content: [
            "Linear Acceleration: Change in straight-line speed, like a car accelerating on a highway",
            "Deceleration (Negative Acceleration): Slowing down, like braking; velocity decreases over time",
            "Centripetal Acceleration: Change in direction at constant speed, like a car turning; a = v²/r",
            "Angular Acceleration: Rate of change of rotational speed, measured in rad/s²",
            "Gravitational Acceleration: g ≈ 9.8 m/s² on Earth, causes all objects to fall at same rate in vacuum"
          ]
        },
        {
          title: "Real-World Examples",
          content: "A sports car accelerating from 0-100 km/h (0-62 mph) in 4 seconds has average acceleration of about 7 m/s². Elevator acceleration is kept low (1-2 m/s²) for passenger comfort. Formula 1 cars achieve 5 g's (49 m/s²) of deceleration under braking. Roller coasters subject riders to 3-6 g's of acceleration. Astronauts experience 3 g's during rocket launch. Human tolerance limits vary: 5 g's briefly is survivable, but sustained high g-forces cause unconsciousness."
        },
        {
          title: "Acceleration and G-Forces",
          content: "Acceleration is often expressed in g's, where 1 g = 9.8 m/s² (Earth's gravitational acceleration). Experiencing 2 g's means you feel twice your normal weight. Fighter pilots can withstand up to 9 g's briefly with special suits. Negative g's (upward acceleration) cause blood to pool in the head and are less tolerable. Theme park rides limit acceleration to ensure safety while maximizing thrill. Understanding g-forces is crucial for aircraft design, crash safety, and human spaceflight."
        }
      ]
    }
  },

  // AC Circuit Calculators
  "ac-power": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the RMS voltage (Vrms) in volts.",
        "Enter the RMS current (Irms) in amperes.",
        "Enter the power factor (cos θ) as a value between 0 and 1.",
        "The calculator computes real power (P), reactive power (Q), apparent power (S), and phase angle (θ).",
        "Results show power values in watts and var, with automatic unit conversion for large values."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Real Power (P)",
          definition: "The actual power consumed by the load and converted to useful work, measured in watts (W). It represents energy consumption that appears on your electricity bill."
        },
        {
          term: "Reactive Power (Q)",
          definition: "Power that oscillates between source and load without being consumed, measured in volt-amperes reactive (VAR). It's required for magnetic fields in motors and transformers."
        },
        {
          term: "Apparent Power (S)",
          definition: "The product of RMS voltage and RMS current, measured in volt-amperes (VA). It represents the total power flowing in the circuit regardless of phase angle."
        },
        {
          term: "Power Factor (cos θ)",
          definition: "The ratio of real power to apparent power, ranging from 0 to 1. Higher power factor means more efficient power usage with less reactive power."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to AC Power",
      sections: [
        {
          title: "Understanding AC Power",
          content: "In AC circuits, power has three components: real power (P), reactive power (Q), and apparent power (S). Unlike DC circuits where P = V × I, AC circuits require considering the phase angle between voltage and current. Real power does actual work, reactive power maintains magnetic/electric fields, and apparent power is the vector sum of both. The power triangle (S² = P² + Q²) visualizes these relationships."
        },
        {
          title: "Power Formulas",
          content: "Apparent power: S = Vrms × Irms. Real power: P = S × cos θ = Vrms × Irms × cos θ. Reactive power: Q = S × sin θ = Vrms × Irms × sin θ. The phase angle θ represents the angular difference between voltage and current waveforms. Inductive loads (motors, transformers) have lagging power factor (current lags voltage), while capacitive loads have leading power factor."
        },
        {
          title: "Practical Applications",
          content: [
            "Sizing electrical equipment: generators, transformers, and cables rated in VA or kVA",
            "Power factor correction: reducing reactive power improves efficiency and reduces costs",
            "Electrical bill analysis: utilities charge for both real and reactive power in industrial settings",
            "Motor efficiency: understanding power factor helps optimize motor performance",
            "Renewable energy systems: inverters and grid-tie systems must manage power factor"
          ]
        },
        {
          title: "Power Factor Importance",
          content: "Low power factor means high current for the same real power, causing increased losses in cables and transformers. Utilities may impose power factor penalties below 0.8-0.9. Power factor correction using capacitors reduces reactive power, lowering apparent power and current. Industrial facilities often install capacitor banks for this purpose. Unity power factor (1.0) is ideal but rarely achieved except with resistive loads."
        },
        {
          title: "Common Mistakes",
          content: [
            "Confusing RMS and peak values: AC power calculations require RMS (root mean square) values",
            "Ignoring power factor: assuming P = V × I without cos θ leads to significant errors",
            "Wrong units: mixing watts, VA, and VAR without proper conversion",
            "Forgetting three-phase: single-phase formulas don't apply to three-phase systems",
            "Neglecting harmonics: non-linear loads create harmonic distortion affecting power measurements"
          ]
        }
      ]
    }
  },

  "power-factor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the real power (P) in watts or kilowatts.",
        "Enter the reactive power (Q) in VAR or kVAR.",
        "The calculator computes power factor (cos θ), apparent power (S), and phase angle (θ).",
        "Alternatively, enter apparent power and phase angle to find real and reactive power.",
        "Results classify power factor quality: excellent (>0.95), good (0.85-0.95), or needs improvement (<0.85)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Power Factor (PF)",
          definition: "The cosine of the phase angle between voltage and current (cos θ), ranging from 0 to 1. It indicates how effectively electrical power is being converted to useful work."
        },
        {
          term: "Displacement Power Factor",
          definition: "The power factor caused by the phase shift between fundamental voltage and current. It's correctable using capacitors or inductors for reactive compensation."
        },
        {
          term: "Phase Angle (θ)",
          definition: "The angular difference between voltage and current waveforms, measured in degrees. Positive angles indicate inductive loads (lagging), negative angles indicate capacitive loads (leading)."
        },
        {
          term: "Power Factor Classification",
          definition: "Leading (capacitive, θ < 0°), Unity (resistive, θ = 0°), or Lagging (inductive, θ > 0°). Most industrial loads are inductive with lagging power factor."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Power Factor",
      sections: [
        {
          title: "What is Power Factor?",
          content: "Power factor is the ratio of real power (doing useful work) to apparent power (total power). It represents electrical efficiency: PF = P/S = cos θ. A power factor of 1.0 means all power is used effectively. Lower power factor means more current flows for the same useful power, causing losses and requiring larger equipment. Inductive loads (motors, transformers, fluorescent lights) typically have power factor between 0.6-0.9."
        },
        {
          title: "Why Power Factor Matters",
          content: "Low power factor increases current for the same real power, causing higher I²R losses in cables and transformers. It requires larger wire sizes and electrical equipment rated for higher apparent power. Utilities impose power factor penalties because low PF loads stress the grid and reduce capacity. Improving power factor from 0.7 to 0.95 can reduce current by 26%, significantly lowering energy costs and equipment stress. Industrial facilities save thousands annually through power factor correction."
        },
        {
          title: "Power Factor Correction",
          content: [
            "Capacitor Banks: Most common method, adds capacitive reactance to offset inductive loads",
            "Synchronous Condensers: Rotating machines that provide dynamic power factor correction",
            "Static VAR Compensators (SVC): Electronic systems for fast, precise reactive power control",
            "Active Harmonic Filters: Address both power factor and harmonic distortion simultaneously",
            "Proper Motor Sizing: Oversized motors run at low power factor; correct sizing improves PF"
          ]
        },
        {
          title: "Calculating Correction Capacitance",
          content: "To improve power factor from PF₁ to PF₂, required capacitive reactive power: Qc = P × (tan θ₁ - tan θ₂). For example, improving a 100 kW load from 0.7 to 0.95 PF requires Qc = 100 × (1.02 - 0.329) = 69 kVAR of capacitance. At 400V, C = Qc / (2πfV²) gives the capacitor value. This calculation helps size power factor correction equipment accurately."
        },
        {
          title: "Power Factor in Practice",
          content: "Typical power factors: Incandescent lamps (~1.0), LED drivers (0.9-0.95), Fluorescent lights (0.5-0.95 depending on ballast), Induction motors at full load (0.85-0.9), Induction motors at light load (0.5-0.7), Welding equipment (0.5-0.7), Transformers (0.9-0.95). Industrial plants target 0.95 or higher. Residential power factor is generally good (0.9+) due to balanced loads. Commercial buildings with many motors may need correction."
        }
      ]
    }
  },

  "rlc-series": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the resistance (R) in ohms.",
        "Enter the inductance (L) in henries or millihenries.",
        "Enter the capacitance (C) in farads or microfarads.",
        "Enter the frequency (f) in hertz.",
        "The calculator computes inductive reactance (XL), capacitive reactance (XC), total impedance (Z), phase angle, and circuit type.",
        "Results indicate whether the circuit is resistive, inductive, or capacitive dominant."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Inductive Reactance (XL)",
          definition: "Opposition to current flow caused by inductance, calculated as XL = 2πfL. It increases with frequency and inductance, measured in ohms."
        },
        {
          term: "Capacitive Reactance (XC)",
          definition: "Opposition to current flow caused by capacitance, calculated as XC = 1/(2πfC). It decreases with frequency and capacitance, measured in ohms."
        },
        {
          term: "Total Impedance (Z)",
          definition: "The combined opposition to AC current from resistance and reactances, calculated as Z = √(R² + (XL - XC)²). It determines current magnitude in the circuit."
        },
        {
          term: "Phase Angle (θ)",
          definition: "The angular phase shift between voltage and current, calculated as θ = arctan((XL - XC)/R). Positive means inductive (lagging), negative means capacitive (leading)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to RLC Series Circuits",
      sections: [
        {
          title: "Understanding Series RLC Circuits",
          content: "In a series RLC circuit, resistance (R), inductance (L), and capacitance (C) are connected in a single path, sharing the same current. The voltage across each component depends on its impedance. Total impedance Z = R + j(XL - XC) combines resistance and net reactance. At low frequencies, capacitive reactance dominates; at high frequencies, inductive reactance dominates. At resonance (XL = XC), only resistance remains, and impedance is minimum."
        },
        {
          title: "Impedance and Phase Relationships",
          content: "Voltage across resistor is in phase with current. Inductor voltage leads current by 90°, capacitor voltage lags by 90°. These 90° phase-shifted voltages partially cancel. The phase angle θ = arctan((XL - XC)/R) determines whether voltage leads (inductive) or lags (capacitive) the current. At resonance, θ = 0° and circuit is purely resistive. The impedance triangle relates R, (XL - XC), and Z geometrically."
        },
        {
          title: "Frequency Response",
          content: [
            "Below Resonance (f < f₀): XC > XL, circuit is capacitive, voltage lags current",
            "At Resonance (f = f₀): XC = XL, circuit is resistive, minimum impedance Z = R",
            "Above Resonance (f > f₀): XL > XC, circuit is inductive, voltage leads current",
            "Bandwidth: Range of frequencies where current exceeds 70.7% of maximum",
            "Quality Factor Q: Determines sharpness of resonance peak, Q = (XL or XC)/R at resonance"
          ]
        },
        {
          title: "Practical Applications",
          content: "Series RLC circuits form the basis of radio tuners, selecting desired frequency while rejecting others. They're used in filter circuits for signal processing and noise reduction. Antenna matching networks use series RLC to maximize power transfer. Power supply filters smooth rectified DC by blocking AC ripple. Impedance matching networks transform load impedance for maximum power transfer. Understanding series RLC is fundamental to RF design, audio engineering, and power electronics."
        },
        {
          title: "Design Considerations",
          content: "Component tolerance affects resonant frequency; 1% capacitor variation shifts f₀ by 0.5%. Q factor trades off selectivity versus bandwidth: high Q gives narrow bandwidth (sharp tuning). Resistor losses (including inductor DC resistance) limit minimum impedance. Parasitic capacitance and inductance affect high-frequency behavior. Temperature changes component values, shifting resonance. For stable circuits, use low-temperature-coefficient components and allow frequency adjustment."
        }
      ]
    }
  },

  "rlc-parallel": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the resistance (R) in ohms.",
        "Enter the inductance (L) in henries or millihenries.",
        "Enter the capacitance (C) in farads or microfarads.",
        "Enter the frequency (f) in hertz.",
        "The calculator computes branch currents, total impedance, admittance, and phase angle.",
        "Results show whether the circuit is resistive, inductive, or capacitive at the given frequency."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Admittance (Y)",
          definition: "The reciprocal of impedance, Y = 1/Z, measured in siemens (S). It represents how easily current flows in the circuit."
        },
        {
          term: "Conductance (G)",
          definition: "The reciprocal of resistance, G = 1/R, measured in siemens. It's the real part of admittance."
        },
        {
          term: "Susceptance (B)",
          definition: "The imaginary part of admittance, B = BL - BC, measured in siemens. Inductive susceptance BL = 1/XL, capacitive susceptance BC = 1/XC."
        },
        {
          term: "Total Impedance (Z)",
          definition: "For parallel RLC, Z = 1/√(G² + (BC - BL)²). At resonance, impedance is maximum (not minimum like series RLC)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to RLC Parallel Circuits",
      sections: [
        {
          title: "Understanding Parallel RLC Circuits",
          content: "In parallel RLC circuits, R, L, and C share the same voltage but have different currents. Total current is the vector sum of branch currents. Unlike series RLC where impedance is minimum at resonance, parallel RLC has maximum impedance at resonance. This makes parallel RLC circuits ideal for reject filters and tank circuits. At resonance, inductive and capacitive branch currents cancel, leaving only resistive current."
        },
        {
          title: "Current and Phase Relationships",
          content: "Voltage is common across all branches. Resistor current is in phase with voltage. Inductor current lags voltage by 90°, capacitor current leads by 90°. These reactive currents partially cancel. Total current I = √(IR² + (IC - IL)²) has magnitude less than arithmetic sum. Phase angle θ = arctan((IC - IL)/IR) shows whether total current leads or lags voltage. At resonance, IC = IL and total current equals IR."
        },
        {
          title: "Resonance in Parallel RLC",
          content: [
            "Resonant Frequency: f₀ = 1/(2π√(LC)), same formula as series RLC",
            "At Resonance: Maximum impedance (Z = R), minimum current for given voltage",
            "Current Magnification: Branch currents can exceed total current by factor Q",
            "Quality Factor: Q = R√(C/L) = R/(2πf₀L) determines resonance sharpness",
            "Tank Circuit: At resonance, energy oscillates between L and C with minimal external current"
          ]
        },
        {
          title: "Applications of Parallel RLC",
          content: "Parallel RLC circuits are used extensively in RF oscillators and frequency-selective circuits. They form tank circuits in radio transmitters and receivers, storing energy and determining oscillation frequency. Parallel resonant circuits act as band-reject (notch) filters, blocking signals near resonance while passing others. They're used in impedance matching networks and antenna tuners. Power factor correction capacitors create parallel resonance with grid inductance if not properly designed."
        },
        {
          title: "Design and Practical Considerations",
          content: "High-Q parallel circuits have very high impedance at resonance, useful for oscillators but can cause voltage spikes. Component ESR (equivalent series resistance) reduces Q and maximum impedance. Parasitics become significant: inductor winding capacitance, capacitor lead inductance. For power applications, consider component current ratings; branch currents can be much larger than line current at resonance. Anti-resonance can occur at unintended frequencies due to parasitics."
        }
      ]
    }
  },

  "resonant-frequency": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the inductance (L) in henries, millihenries, or microhenries.",
        "Enter the capacitance (C) in farads, microfarads, or picofarads.",
        "The calculator computes resonant frequency (f₀) in Hz, kHz, or MHz.",
        "Results show angular frequency (ω₀), characteristic impedance (Z₀), and wavelength.",
        "Use this for designing tuned circuits, filters, and oscillators."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Resonant Frequency (f₀)",
          definition: "The frequency at which inductive and capacitive reactances are equal (XL = XC), calculated as f₀ = 1/(2π√(LC)). At this frequency, the circuit exhibits special behavior."
        },
        {
          term: "Angular Frequency (ω₀)",
          definition: "Resonant frequency in radians per second, ω₀ = 2πf₀ = 1/√(LC). It's used in complex impedance calculations."
        },
        {
          term: "Characteristic Impedance (Z₀)",
          definition: "The ratio of inductive reactance to capacitive susceptance at resonance, Z₀ = √(L/C). It represents the impedance level of the resonant circuit."
        },
        {
          term: "Wavelength (λ)",
          definition: "The physical distance corresponding to one complete wave cycle, λ = c/f₀, where c is the speed of light (3×10⁸ m/s). It's important for antenna design."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Resonant Frequency",
      sections: [
        {
          title: "Understanding Resonance",
          content: "Resonance occurs when the energy storage in inductance equals energy storage in capacitance, causing them to exchange energy. At resonant frequency f₀ = 1/(2π√(LC)), inductive reactance XL = 2πf₀L equals capacitive reactance XC = 1/(2πf₀C). In series RLC, impedance is minimum (Z = R); in parallel RLC, impedance is maximum (Z = R). This frequency-selective behavior is fundamental to radio, filters, and oscillators."
        },
        {
          title: "The LC Resonance Formula",
          content: "The formula f₀ = 1/(2π√(LC)) shows that resonant frequency decreases with larger L or C values. Doubling either L or C reduces f₀ by factor of √2 (0.707). To shift resonance from 100 MHz to 50 MHz, increase L or C by factor of 4. This square root relationship means precise frequency control requires tight component tolerances. A 1% change in L or C causes 0.5% change in f₀."
        },
        {
          title: "Applications of Resonant Circuits",
          content: [
            "Radio Tuning: LC circuits select desired station frequency while rejecting others",
            "Oscillators: Resonant circuits determine oscillation frequency in transmitters and clocks",
            "Filters: Band-pass filters pass frequencies near resonance, reject others",
            "Antenna Matching: Quarter-wave antennas resonate at design frequency for efficient radiation",
            "Wireless Power Transfer: Coupled resonant coils enable efficient energy transfer",
            "Crystal Oscillators: Quartz crystals act as very high-Q LC resonators"
          ]
        },
        {
          title: "Quality Factor and Bandwidth",
          content: "Quality factor Q = f₀/BW relates resonant frequency to bandwidth. High Q means sharp, selective resonance; low Q means broad response. For series RLC, Q = (1/R)√(L/C); for parallel RLC, Q = R√(C/L). Bandwidth BW = f₀/Q is the frequency range where response exceeds 70.7% (-3dB) of maximum. Radio receivers use high Q for station selectivity. Wideband applications need low Q. Component losses limit achievable Q."
        },
        {
          title: "Practical Design Considerations",
          content: "Component tolerance directly affects resonant frequency accuracy. Use 1% or better tolerance for precise applications. Temperature changes component values, causing frequency drift; use COG/NP0 capacitors for stability. Inductor core saturation at high currents shifts L value and resonance. Parasitic capacitance (wiring, board) adds to intentional C. Parasitic inductance (capacitor leads) adds to intentional L. For VHF/UHF, parasitics dominate and must be minimized or calculated into design."
        }
      ]
    }
  },

  "q-factor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose calculation mode: from bandwidth, from component values, or from energy.",
        "For bandwidth method: Enter resonant frequency (f₀) and bandwidth (BW).",
        "For component method: Enter R, L, C, and frequency for series or parallel RLC.",
        "For energy method: Enter energy stored and energy dissipated per cycle.",
        "The calculator computes Q factor, bandwidth (if applicable), and circuit selectivity rating."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Quality Factor (Q)",
          definition: "A dimensionless parameter indicating resonance sharpness. Q = f₀/BW = (energy stored)/(energy dissipated per cycle). Higher Q means sharper, more selective resonance."
        },
        {
          term: "Bandwidth (BW)",
          definition: "The frequency range where response exceeds 70.7% (-3dB) of maximum, calculated as BW = f₀/Q. Narrow bandwidth means high selectivity."
        },
        {
          term: "Loaded Q",
          definition: "The Q factor of a resonant circuit with external load connected, always lower than unloaded Q. It determines practical bandwidth and selectivity."
        },
        {
          term: "Unloaded Q",
          definition: "The Q factor determined solely by component losses, representing the best-case scenario without external loading."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Q Factor",
      sections: [
        {
          title: "Understanding Q Factor",
          content: "Quality factor (Q) quantifies how underdamped a resonator is, indicating energy storage efficiency versus energy loss. Mathematically, Q = 2π × (energy stored)/(energy dissipated per cycle). For RLC circuits, Q = f₀/BW relates resonant frequency to bandwidth. High-Q circuits have sharp resonance peaks and good frequency selectivity. Low-Q circuits have broad response and poor selectivity. Typical values: Quartz crystals (Q = 10,000-100,000), LC tank circuits (Q = 50-500), loaded resonators (Q = 10-100)."
        },
        {
          title: "Q Factor Formulas",
          content: "Series RLC: Q = (1/R)√(L/C) = XL/R = XC/R at resonance. Parallel RLC: Q = R√(C/L) = R/XL = R/XC at resonance. Inductor Q: QL = XL/Rs where Rs is series resistance. Capacitor Q: QC = XC/Rs (usually very high, >1000). From bandwidth: Q = f₀/BW where BW is the -3dB bandwidth. Loaded Q: 1/QL = 1/QU + 1/Qext where QU is unloaded Q and Qext is external Q from loading."
        },
        {
          title: "Q Factor and Bandwidth",
          content: [
            "High Q (>100): Narrow bandwidth, sharp selectivity, sensitive to tuning, low loss",
            "Medium Q (10-100): Moderate bandwidth, good selectivity, typical for RF filters",
            "Low Q (<10): Wide bandwidth, poor selectivity, high damping, fast transient response",
            "Bandwidth Calculation: BW = f₀/Q; for Q=100 at 10 MHz, BW = 100 kHz",
            "Half-Power Points: Frequencies where power is half (-3dB) the maximum, separated by BW"
          ]
        },
        {
          title: "Applications of Q Factor",
          content: "Q factor determines filter selectivity in radio receivers; higher Q provides better adjacent channel rejection. Oscillators require sufficient Q for stable oscillation; Q > 5 typically needed. High-Q resonators in crystal oscillators provide frequency stability. Antenna matching networks use moderate Q for balance between selectivity and bandwidth. Cavity resonators in microwave systems achieve very high Q. Low-Q circuits provide wide bandwidth for broadband applications. Q factor affects transient response: high-Q circuits ring longer after excitation."
        },
        {
          title: "Practical Q Factor Considerations",
          content: "Component losses limit achievable Q. Inductor Q limited by wire resistance and core losses; air-core inductors have higher Q than ferrite. Capacitor Q usually very high (>1000); use COG/NP0 or mica for high Q. External loading reduces Q: connecting 50Ω to high-Z resonator drops Q significantly. Temperature affects Q through component value changes and loss variations. Skin effect at high frequencies increases resistance and lowers inductor Q. Impedance matching trades Q for power transfer; critical coupling achieves maximum power transfer."
        }
      ]
    }
  },

  "phase-angle": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose input method: from power values, from impedance components, or from time delay.",
        "For power method: Enter real power (P) and reactive power (Q) or apparent power (S).",
        "For impedance method: Enter resistance (R) and reactance (X).",
        "For time method: Enter time difference (Δt) between voltage and current, and frequency.",
        "The calculator computes phase angle in degrees and radians, with circuit classification."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Phase Angle (θ)",
          definition: "The angular difference between voltage and current waveforms, measured in degrees or radians. Positive means inductive (current lags), negative means capacitive (current leads)."
        },
        {
          term: "Leading Phase Angle",
          definition: "Negative phase angle (θ < 0°) indicating capacitive circuit where current waveform leads voltage waveform. Common in capacitor-dominant circuits."
        },
        {
          term: "Lagging Phase Angle",
          definition: "Positive phase angle (θ > 0°) indicating inductive circuit where current waveform lags voltage waveform. Common in motor and transformer circuits."
        },
        {
          term: "Phase Shift",
          definition: "The time difference between corresponding points on voltage and current waveforms, related to phase angle by Δt = θ/(2πf)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Phase Angle",
      sections: [
        {
          title: "Understanding Phase Angle",
          content: "Phase angle (θ) describes the temporal relationship between voltage and current in AC circuits. In resistive circuits, voltage and current are in phase (θ = 0°). Inductors cause current to lag voltage by up to 90° (θ = +90°). Capacitors cause current to lead voltage by up to 90° (θ = -90°). In RLC circuits, phase angle depends on relative magnitudes of resistance and net reactance: θ = arctan((XL - XC)/R). Phase angle directly affects power factor: PF = cos θ."
        },
        {
          title: "Calculating Phase Angle",
          content: "From impedance: θ = arctan(X/R) where X is net reactance (XL - XC). From power: θ = arctan(Q/P) = arccos(P/S). From time delay: θ = 360° × Δt × f = 2π × Δt × f (radians). For example, at 60 Hz, if current lags voltage by 2.78 ms, θ = 360° × 0.00278 × 60 = 60°. Positive θ indicates inductive circuit, negative θ indicates capacitive circuit. The tangent function gives angle between -90° and +90°."
        },
        {
          title: "Phase Angle in Different Loads",
          content: [
            "Purely Resistive (R): θ = 0°, current in phase with voltage, PF = 1.0",
            "Purely Inductive (L): θ = +90°, current lags by quarter cycle, PF = 0",
            "Purely Capacitive (C): θ = -90°, current leads by quarter cycle, PF = 0",
            "Induction Motor (typical): θ = +30° to +45°, PF = 0.85-0.90",
            "Fluorescent Lamp (uncorrected): θ = +60°, PF = 0.5",
            "Power Supply (capacitive input): θ = -20° to -40°, PF = 0.75-0.90"
          ]
        },
        {
          title: "Practical Implications",
          content: "Large phase angles (far from 0°) indicate poor power factor, causing increased current for same real power. This leads to higher I²R losses, voltage drop, and equipment heating. Power factor correction aims to reduce phase angle toward 0°. Three-phase systems require balanced phase angles across all three phases. Phase angle affects power measurement: wattmeters must account for phase to measure true power. Protective relays use phase angle information to detect faults and abnormal conditions."
        },
        {
          title: "Measuring Phase Angle",
          content: "Oscilloscopes display voltage and current waveforms, allowing visual phase angle measurement from time difference. Power analyzers directly measure and display phase angle. The formula θ = 360° × (Δt/T) converts time shift to degrees, where T is the period. Phase angle meters compare voltage and current zero-crossings. In three-phase systems, phase sequence (ABC vs ACB) affects motor rotation direction. Digital signal processing uses Fourier transforms to extract phase information from complex waveforms."
        }
      ]
    }
  },

  "time-constant": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose circuit type: RC (resistor-capacitor) or RL (resistor-inductor).",
        "For RC circuits: Enter resistance (R) and capacitance (C).",
        "For RL circuits: Enter resistance (R) and inductance (L).",
        "The calculator computes time constant (τ), rise time, and time to reach various percentages.",
        "Results show how long the circuit takes to charge/discharge and reach steady state."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Time Constant (τ)",
          definition: "The time required to reach 63.2% of final value during charging, or decay to 36.8% during discharging. For RC: τ = R×C, for RL: τ = L/R."
        },
        {
          term: "Rise Time",
          definition: "Time to rise from 10% to 90% of final value, approximately 2.2τ. It indicates how quickly the circuit responds to a step input."
        },
        {
          term: "Settling Time",
          definition: "Time to reach and stay within a specified percentage of final value, typically 5τ (99.3%) is considered fully settled."
        },
        {
          term: "Charging/Discharging Curve",
          definition: "Exponential function describing voltage or current versus time: V(t) = Vf(1 - e^(-t/τ)) charging, V(t) = Vi × e^(-t/τ) discharging."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Time Constants",
      sections: [
        {
          title: "Understanding Time Constants",
          content: "The time constant (τ) characterizes how quickly first-order RC or RL circuits respond to changes. It's the time for the response to reach 63.2% of its final value when charging, or decay to 36.8% when discharging. These percentages come from e^(-1) ≈ 0.368. After 5τ, the circuit is 99.3% settled, effectively reaching steady state. Time constant determines circuit speed: smaller τ means faster response, larger τ means slower response."
        },
        {
          title: "RC Time Constant",
          content: "For RC circuits, τ = R × C. Increasing either R or C increases time constant, slowing the circuit. The charging equation: Vc(t) = Vf × (1 - e^(-t/τ)) shows capacitor voltage rising exponentially toward final voltage Vf. Discharging: Vc(t) = Vi × e^(-t/τ) shows exponential decay from initial voltage Vi. Current leads voltage changes: Ic(t) = (Vf/R) × e^(-t/τ) during charging. RC circuits are used in timers, filters, and pulse shapers."
        },
        {
          title: "RL Time Constant",
          content: "For RL circuits, τ = L/R. Larger inductance or smaller resistance increases time constant. The current equation: IL(t) = If × (1 - e^(-t/τ)) shows exponential rise toward final current If = Vf/R. Voltage across inductor: VL(t) = Vf × e^(-t/τ) decays exponentially as current builds. During turn-off, inductor generates voltage spike trying to maintain current. RL circuits are common in motor control, solenoids, and relay coils. Freewheeling diodes protect against inductive kickback."
        },
        {
          title: "Time Constant Applications",
          content: [
            "Timer Circuits: 555 timers use RC to set pulse width and frequency",
            "Low-Pass Filters: Cutoff frequency fc = 1/(2πτ) for RC or RL filters",
            "Signal Conditioning: Time constants shape pulse edges and filter noise",
            "Power Supplies: Output capacitors with load resistance set transient response",
            "Motor Control: RL time constants determine current rise time in motor windings",
            "Touch Sensors: Capacitive sensing uses RC time constant changes to detect touch"
          ]
        },
        {
          title: "Practical Considerations",
          content: "Time constant values range from nanoseconds (fast logic circuits) to hours (timing applications). For 1 kΩ and 1 μF, τ = 1 ms. For faster circuits, reduce R or C; for slower, increase them. Component tolerance affects τ: 10% tolerance in R and C gives ~20% variation in τ. Temperature changes component values, especially C and L. Parasitic capacitance/inductance matters at high speeds. Multiple time constants in complex circuits create higher-order responses. Always verify time constant with oscilloscope in critical applications."
        }
      ]
    }
  },

  "ac-voltage-divider": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter input voltage (Vin) for the AC voltage divider.",
        "Enter resistance (R1) and reactance (X1) for the first impedance Z1.",
        "Enter resistance (R2) and reactance (X2) for the second impedance Z2.",
        "The calculator computes output voltage (Vout) across Z2.",
        "Results show impedance magnitudes, total impedance, current, and voltage division ratio."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Output Voltage (Vout)",
          definition: "The voltage across the second impedance Z2, calculated as Vout = Vin × |Z2|/(|Z1| + |Z2|). It's the divided-down voltage in the AC divider."
        },
        {
          term: "Impedance Magnitude |Z|",
          definition: "The magnitude of complex impedance Z = R + jX, calculated as |Z| = √(R² + X²). It represents total opposition to AC current."
        },
        {
          term: "Voltage Division Ratio",
          definition: "The ratio Vout/Vin showing what fraction of input voltage appears at output. Unlike resistive dividers, AC dividers have frequency-dependent ratios."
        },
        {
          term: "Circuit Current (I)",
          definition: "The current flowing through the series impedances, I = Vin/Ztotal. Same current flows through both Z1 and Z2 in series connection."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to AC Voltage Dividers",
      sections: [
        {
          title: "Understanding AC Voltage Dividers",
          content: "AC voltage dividers use impedances instead of just resistances, making them frequency-dependent. The output voltage Vout = Vin × Z2/(Z1 + Z2) depends on complex impedance ratio. Unlike resistive dividers where Vout = Vin × R2/(R1 + R2), AC dividers must account for both magnitude and phase. If Z1 and Z2 have different phase angles, output voltage phase shifts relative to input. This frequency dependence makes AC dividers useful for filtering and frequency-selective applications."
        },
        {
          title: "AC Divider Formulas",
          content: "For complex impedances Z1 = R1 + jX1 and Z2 = R2 + jX2, the division ratio is H = Z2/(Z1 + Z2). Magnitude: |H| = |Z2|/|Z1 + Z2|. Phase: ∠H = ∠Z2 - ∠(Z1 + Z2). Output voltage: Vout = Vin × |H| with phase shift ∠H. For purely resistive dividers, this reduces to familiar Vout = Vin × R2/(R1 + R2). Reactive components introduce frequency dependence through XL = 2πfL and XC = 1/(2πfC)."
        },
        {
          title: "Types of AC Voltage Dividers",
          content: [
            "RC Divider: Resistor and capacitor, creates high-pass or low-pass frequency response",
            "RL Divider: Resistor and inductor, less common due to inductor size and losses",
            "LC Divider: Inductor and capacitor, frequency-selective with resonance effects",
            "Capacitive Divider: Two capacitors, common in high-voltage measurement (low loss)",
            "Compensated Divider: Designed for flat frequency response (oscilloscope probes)"
          ]
        },
        {
          title: "Applications",
          content: "AC voltage dividers are used in oscilloscope probes (10:1 compensated dividers) to reduce loading and extend bandwidth. High-voltage measurement uses capacitive dividers to safely scale down dangerous voltages. Sensor interfaces employ RC dividers to filter noise and set input impedance. Phase shifters use reactive dividers to shift signal phase. Audio crossover networks divide signal by frequency to separate speakers. Impedance matching networks often incorporate divider principles."
        },
        {
          title: "Design Considerations",
          content: "Frequency response depends on component values; changing frequency changes division ratio. Parasitic capacitance/inductance affects high-frequency accuracy. Loading effect: output impedance of divider is not simple Z2; it's Z1||Z2. For accurate division, load impedance should be >> output impedance. Temperature affects component values, especially capacitors. Use COG/NP0 capacitors for stable AC dividers. Resistor noise contributes to output noise; lower impedances reduce thermal noise."
        }
      ]
    }
  },

  "ac-current-divider": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter total current (Itotal) flowing into the parallel branches.",
        "Enter resistance (R1) and reactance (X1) for the first branch impedance Z1.",
        "Enter resistance (R2) and reactance (X2) for the second branch impedance Z2.",
        "The calculator computes current through each branch (I1 and I2).",
        "Results show impedance magnitudes and current division ratio."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Branch Currents (I1, I2)",
          definition: "Currents flowing through each parallel impedance. They divide inversely with impedance magnitude: higher impedance gets less current."
        },
        {
          term: "Current Division Rule",
          definition: "For two parallel impedances: I1 = Itotal × |Z2|/(|Z1| + |Z2|) and I2 = Itotal × |Z1|/(|Z1| + |Z2|). Notice each current is proportional to the other branch's impedance."
        },
        {
          term: "Current Division Ratio",
          definition: "The fraction of total current flowing through each branch, I1/Itotal or I2/Itotal. Sum of ratios equals 1 for two branches."
        },
        {
          term: "Phase Differences",
          definition: "Branch currents can have different phase angles if impedances have different phase angles, even though all branches share the same voltage."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to AC Current Dividers",
      sections: [
        {
          title: "Understanding AC Current Dividers",
          content: "In parallel AC circuits, current divides among branches based on impedance magnitude and phase. Unlike resistive current dividers where current divides proportionally to conductance (I = Itotal × G/Gtotal), AC current dividers must account for complex impedance. The key principle: current takes path of least impedance. Branch with lower impedance magnitude gets more current. Since voltage across all branches is identical, branch currents are I = V/Z for each branch."
        },
        {
          title: "Current Division Formulas",
          content: "For two parallel impedances Z1 and Z2, current division: I1 = Itotal × (Z2/(Z1 + Z2)) and I2 = Itotal × (Z1/(Z1 + Z2)). Notice the 'opposite' impedance in numerator - this is inverse division. For admittances (Y = 1/Z): I1 = Itotal × (Y1/(Y1 + Y2)), which looks like resistive division. Vector sum: Itotal = I1 + I2 (complex addition accounting for phase). Magnitude: |Itotal| ≤ |I1| + |I2| due to phase differences."
        },
        {
          title: "Parallel Impedance Combinations",
          content: [
            "R || R: Currents divide resistively, no phase difference between branches",
            "R || L: Inductor current lags resistor current by up to 90°",
            "R || C: Capacitor current leads resistor current by up to 90°",
            "L || C: At resonance, branch currents can be much larger than line current (tank circuit)",
            "Complex || Complex: Both magnitude and phase determine division"
          ]
        },
        {
          title: "Applications",
          content: "AC current dividers appear in power distribution where loads connect in parallel. Each load draws current based on its impedance. Parallel resonant circuits (tank circuits) use LC current division at resonance. Power factor correction capacitors create parallel paths where capacitor current leads and partially cancels inductive current. Multi-way speaker crossovers divide audio signal current by frequency. Current transformers and current sensing circuits use current division principles."
        },
        {
          title: "Practical Considerations",
          content: "In parallel resonance (L||C), branch currents can exceed line current by factor Q, creating high circulating currents. This requires careful component current rating. Voltage across parallel impedances is constant, so calculate I = V/Z for each branch to verify. Phase angle between branch currents affects total current magnitude. Power factor correction must account for current division to size capacitors correctly. Harmonic currents divide differently than fundamental, affecting filter design."
        }
      ]
    }
  },

  "impedance-matching": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter source impedance (Zs) in ohms.",
        "Enter load impedance (Zl) in ohms.",
        "The calculator computes matching impedance, reflection coefficient, VSWR, and efficiency.",
        "Results indicate match quality: excellent, good, fair, or poor.",
        "Return loss in dB shows power reflected back to source."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Reflection Coefficient (Γ)",
          definition: "The ratio of reflected wave amplitude to incident wave amplitude, Γ = (Zl - Zs)/(Zl + Zs). Perfect match gives Γ = 0, complete mismatch gives |Γ| = 1."
        },
        {
          term: "VSWR",
          definition: "Voltage Standing Wave Ratio, VSWR = (1 + |Γ|)/(1 - |Γ|). It ranges from 1:1 (perfect match) to ∞:1 (complete mismatch). Values below 2:1 are generally acceptable."
        },
        {
          term: "Return Loss (RL)",
          definition: "Power reflected expressed in decibels, RL = -20 log(|Γ|). Higher return loss means better match. RL > 20 dB indicates excellent match (< 1% reflected power)."
        },
        {
          term: "Power Transfer Efficiency",
          definition: "Percentage of available power delivered to load, η = 4ZsZl/(Zs + Zl)². Maximum (100%) occurs when Zl = Zs (conjugate match)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Impedance Matching",
      sections: [
        {
          title: "Why Impedance Matching Matters",
          content: "Impedance matching maximizes power transfer from source to load and minimizes reflections in transmission lines. When source and load impedances differ, some power reflects back, wasting energy and potentially damaging the source. In RF systems, reflections create standing waves, causing voltage/current peaks that can damage components. Maximum power transfer theorem states: maximum power occurs when load impedance equals complex conjugate of source impedance (Zl = Zs*). For resistive impedances, this simplifies to Zl = Zs."
        },
        {
          title: "Matching Techniques",
          content: "L-Network: Uses one inductor and one capacitor to match two different impedances. Can step up or step down impedance. Simple but single-frequency. Transformer matching: Turns ratio n = √(Zs/Zl) transforms impedances by n². Broadband but bulky. Quarter-wave transformer: λ/4 transmission line with Z₀ = √(ZsZl) matches at specific frequency and odd harmonics. Stub matching: Shunt or series stubs adjust impedance at specific distance from load. Common in microwave circuits."
        },
        {
          title: "Reflection and Standing Waves",
          content: [
            "Perfect Match (Zl = Zs): Γ = 0, VSWR = 1:1, all power absorbed by load",
            "Slight Mismatch (VSWR 1.5:1): ~4% power reflected, generally acceptable",
            "Moderate Mismatch (VSWR 2:1): ~11% power reflected, acceptable for some applications",
            "Poor Match (VSWR 3:1): ~25% power reflected, often unacceptable",
            "Open/Short (VSWR ∞:1): 100% reflection, complete mismatch"
          ]
        },
        {
          title: "Practical Applications",
          content: "Antenna systems require matching to transmitter output impedance (typically 50Ω or 75Ω) for efficient radiation. RF amplifiers need input/output matching for maximum power transfer and stability. Audio systems match amplifier to speaker impedance (4Ω, 8Ω) for maximum power. Transmission line matching prevents ghosting in video and data corruption in digital signals. Power distribution networks use impedance matching to minimize losses. Biomedical sensors match electrode impedance to amplifier inputs."
        },
        {
          title: "Design Considerations",
          content: "Matching networks introduce some loss; minimize component count for lower loss. Bandwidth: narrowband matching is easier than wideband. High-Q matching networks have narrow bandwidth. Component tolerance affects match quality; use 1% or better for critical applications. Frequency dependence: matching is perfect at only one frequency unless complex networks used. Temperature changes component values, detuning the match. In high-power systems, matching network components must handle voltage/current stress from standing waves."
        }
      ]
    }
  },

  "transformer": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter primary voltage (Vp) in volts.",
        "Enter primary current (Ip) in amperes.",
        "Enter number of primary turns (Np).",
        "Enter number of secondary turns (Ns).",
        "The calculator computes secondary voltage, secondary current, turns ratio, and transformer type.",
        "Results indicate if transformer is step-up, step-down, or isolation type."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Turns Ratio (n)",
          definition: "The ratio of secondary turns to primary turns, n = Ns/Np. It determines voltage transformation ratio and inversely affects current ratio."
        },
        {
          term: "Step-Up Transformer",
          definition: "Transformer with more secondary turns than primary (n > 1), increasing voltage while decreasing current. Used to boost voltage for transmission."
        },
        {
          term: "Step-Down Transformer",
          definition: "Transformer with fewer secondary turns than primary (n < 1), decreasing voltage while increasing current. Common in power supplies."
        },
        {
          term: "Isolation Transformer",
          definition: "Transformer with equal turns ratio (n = 1:1), providing electrical isolation without changing voltage level. Used for safety and noise reduction."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Transformers",
      sections: [
        {
          title: "How Transformers Work",
          content: "Transformers transfer electrical energy between circuits through electromagnetic induction. AC current in primary winding creates changing magnetic flux in the core. This flux links the secondary winding, inducing voltage according to Faraday's law: V = -N(dΦ/dt). The turns ratio determines voltage transformation: Vs/Vp = Ns/Np. Ideal transformers conserve power: VpIp = VsIs, so Is/Ip = Np/Ns. Real transformers have losses from resistance, core magnetization, eddy currents, and flux leakage."
        },
        {
          title: "Transformer Equations",
          content: "Voltage transformation: Vs = Vp × (Ns/Np). Current transformation: Is = Ip × (Np/Ns). Turns ratio: n = Ns/Np. Impedance transformation: Zs = Zp × n². Power (ideal): Pp = Ps, VpIp = VsIs. Efficiency: η = Pout/Pin × 100%. Regulation: Percentage voltage drop from no-load to full-load. These equations assume ideal transformer; real transformers include leakage inductance, winding resistance, and core losses."
        },
        {
          title: "Types of Transformers",
          content: [
            "Power Transformers: 50/60 Hz, transfer large power in distribution systems",
            "Isolation Transformers: Provide electrical isolation and noise rejection",
            "Auto-transformers: Single winding with tap, more compact but no isolation",
            "Step-Up Transformers: Increase voltage for long-distance transmission",
            "Step-Down Transformers: Reduce voltage for residential/commercial use",
            "Current Transformers: Measure high currents, secondary typically 5A or 1A",
            "Instrument Transformers: Provide safe voltage/current levels for measurement"
          ]
        },
        {
          title: "Transformer Applications",
          content: "Power distribution uses transformers to step up voltage for transmission (reduces I²R losses) and step down for end use. Power supplies use transformers to provide required voltage levels and isolation. Audio transformers match impedances and provide galvanic isolation. Isolation transformers protect equipment from ground loops and provide safety isolation. Switched-mode power supplies use high-frequency transformers for compact size. Current transformers measure high currents safely in metering and protection. Distribution transformers feed power from grid to homes and businesses."
        },
        {
          title: "Practical Considerations",
          content: "Core material affects transformer efficiency and size: silicon steel for power, ferrite for high frequency. Copper losses (I²R) increase with load current. Core losses (hysteresis and eddy currents) are constant, dominating at light load. Leakage inductance causes voltage regulation and limits short-circuit current. Winding capacitance affects high-frequency response and can cause resonances. Temperature rise limits transformer rating; thermal management is critical. Cooling methods: self-cooled (air), oil-immersed, forced-air, forced-oil. Proper sizing prevents overheating and ensures rated voltage under load."
        }
      ]
    }
  },

  "three-phase-power": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select connection type: Star (Y) or Delta (Δ).",
        "Enter line voltage (VL) - voltage between any two line conductors.",
        "Enter line current (IL) - current in any line conductor.",
        "Enter power factor (cos θ) as a value between 0 and 1.",
        "The calculator computes real power (P), reactive power (Q), apparent power (S), and phase quantities.",
        "Results show power in watts, var, and VA with automatic unit scaling."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Line Voltage (VL)",
          definition: "The voltage measured between any two line conductors in a three-phase system. For star connection: VL = √3 × Vph. For delta: VL = Vph."
        },
        {
          term: "Phase Voltage (Vph)",
          definition: "The voltage across one phase of the load. In star connection, it's voltage from line to neutral. In delta, it equals line voltage."
        },
        {
          term: "Line Current (IL)",
          definition: "The current flowing in any line conductor. For star connection: IL = Iph. For delta: IL = √3 × Iph."
        },
        {
          term: "Three-Phase Power",
          definition: "The total power in all three phases. Apparent power: S = √3 × VL × IL. Real power: P = √3 × VL × IL × cos θ. Three times single-phase power."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Three-Phase Power",
      sections: [
        {
          title: "Understanding Three-Phase Systems",
          content: "Three-phase power uses three AC voltages of equal magnitude and frequency, offset by 120° in phase. This creates a constant, smooth power flow unlike single-phase's pulsating power. Three-phase systems deliver √3 times more power than single-phase for same conductor size. They're more efficient for power transmission and distribution. Motors run smoother and more efficiently on three-phase. The power formula S = √3 × VL × IL comes from vector addition of three 120°-offset sinusoids."
        },
        {
          title: "Star (Wye) vs Delta Connections",
          content: "Star (Y) Connection: Three loads connect to common neutral point. Line voltage VL = √3 × Vph (1.732 times phase voltage). Line current equals phase current (IL = Iph). Provides two voltage levels (line-to-line and line-to-neutral). Neutral carries unbalanced current. Delta (Δ) Connection: Three loads connected in triangle. Line voltage equals phase voltage (VL = Vph). Line current IL = √3 × Iph. No neutral point. Cannot supply line-to-neutral loads. More common in motors and high-power applications."
        },
        {
          title: "Three-Phase Power Formulas",
          content: [
            "Apparent Power: S = √3 × VL × IL (VA, kVA, MVA)",
            "Real Power: P = √3 × VL × IL × cos θ (W, kW, MW)",
            "Reactive Power: Q = √3 × VL × IL × sin θ (VAR, kVAR, MVAR)",
            "Star Connection: VL = √3 × Vph, IL = Iph",
            "Delta Connection: VL = Vph, IL = √3 × Iph",
            "Balanced Load: All three phase powers are equal, P = 3 × Pph"
          ]
        },
        {
          title: "Applications of Three-Phase Power",
          content: "Electric utility distribution: high-voltage three-phase for efficient long-distance transmission. Industrial motors: three-phase induction motors are simpler, cheaper, and more efficient than single-phase. Large buildings: three-phase service for HVAC, elevators, and heavy machinery. Data centers: three-phase PDUs (power distribution units) for high-density server racks. Manufacturing: three-phase for consistent, high-power machinery operation. Renewable energy: three-phase inverters for solar farms and wind turbines connecting to grid."
        },
        {
          title: "Practical Considerations",
          content: "Load balancing is critical: unbalanced loads cause neutral current in star systems and overheating. Phase sequence (ABC vs ACB) determines motor rotation direction; reversing any two phases reverses rotation. Harmonics from non-linear loads (VFDs, switching power supplies) require oversized neutrals in star systems. Power measurement requires wattmeters on at least two phases; single wattmeter insufficient. Protection systems must detect faults on all three phases. Voltage unbalance (>2%) reduces motor life and efficiency. Three-phase calculations assume balanced loads; unbalanced loads require per-phase analysis."
        }
      ]
    }
  },

  "led-resistor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the supply voltage (Vs) - the voltage source powering the LED circuit.",
        "Enter the LED forward voltage (Vf) - typically 1.8-2.2V for red, 3-3.6V for white/blue LEDs.",
        "Enter the desired LED current (If) - typically 10-20mA for standard LEDs, check datasheet.",
        "Click 'Calculate' to find the required current-limiting resistor value.",
        "The calculator shows the closest standard resistor value and power dissipation.",
        "Verify the resistor power rating is sufficient for calculated power dissipation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Supply Voltage (Vs)",
          definition: "The total voltage supplied to the LED circuit, from battery or power supply. Must be higher than LED forward voltage for LED to light."
        },
        {
          term: "LED Forward Voltage (Vf)",
          definition: "The voltage drop across the LED when conducting current. Varies by LED color: red ~2V, green ~2.1V, blue/white ~3.2V. Check LED datasheet for exact value."
        },
        {
          term: "LED Current (If)",
          definition: "The operating current flowing through the LED. Standard LEDs typically use 10-20mA. Higher current = brighter light but shorter lifespan. Never exceed maximum rated current."
        },
        {
          term: "Resistor Value (R)",
          definition: "The resistance needed to limit current to safe level. Calculated using R = (Vs - Vf) / If. Use next higher standard resistor value for safety."
        },
        {
          term: "Power Dissipation (P)",
          definition: "Heat generated by the resistor, calculated as P = (Vs - Vf) × If. Resistor must be rated for at least 2× this power for reliability."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to LED Current-Limiting Resistors",
      sections: [
        {
          title: "Why LEDs Need Current-Limiting Resistors",
          content: "LEDs are current-controlled devices, not voltage-controlled. Without a current-limiting resistor, an LED will draw excessive current, overheat, and fail within seconds. Unlike incandescent bulbs that self-limit current through resistance, LEDs have very low dynamic resistance once forward voltage is reached. A small voltage increase causes exponential current increase. The series resistor drops excess voltage and limits current to safe levels specified in the LED datasheet."
        },
        {
          title: "The Resistor Formula Explained",
          content: "R = (Vs - Vf) / If is derived from Ohm's Law (V = I × R). The resistor must drop the difference between supply voltage and LED forward voltage. Example: 5V supply, 2V LED, 20mA current: R = (5 - 2) / 0.02 = 150Ω. Always round up to next standard value (150Ω or 180Ω). Power dissipation: P = 3V × 0.02A = 0.06W, use 1/4W resistor for safety margin."
        },
        {
          title: "LED Forward Voltage by Color",
          content: [
            "Infrared: 1.2-1.6V (invisible light, used in remotes)",
            "Red: 1.8-2.2V (most common, lowest Vf)",
            "Orange/Yellow: 2.0-2.4V",
            "Green: 2.0-3.0V (varies widely by technology)",
            "Blue: 3.0-3.6V (higher Vf than red)",
            "White: 3.0-3.6V (blue LED + phosphor coating)",
            "UV: 3.2-4.0V (highest Vf, special applications)"
          ]
        },
        {
          title: "Common LED Current Ratings",
          content: [
            "Standard 5mm LEDs: 10-20mA typical, 30mA maximum",
            "High-brightness 5mm: 20-30mA typical, 50mA maximum",
            "Power LEDs (1W-3W): 350-700mA, requires heatsink",
            "RGB LEDs: 20mA per color channel",
            "SMD LEDs (0603, 0805): 10-25mA depending on size",
            "Flashing LEDs: Built-in IC, use 5-20mA, no PWM needed"
          ]
        },
        {
          title: "Multiple LED Circuits",
          content: "Series connection: LEDs share same current, voltages add. Example: 3× red LEDs (2V each) need 6V + resistor drop. Advantage: same current through all, one resistor. Parallel connection: Each LED needs own resistor to ensure equal current sharing (LED Vf varies). Never parallel LEDs with single resistor - one LED may hog current. Series-parallel: Combine both for large arrays, balance voltage and current requirements. Always calculate worst-case (minimum Vs, maximum Vf) for reliability."
        },
        {
          title: "Practical Tips",
          content: "Always use next higher standard resistor value (E12 series: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82). LED brightness varies with current but relationship is non-linear - 2× current ≠ 2× brightness. For battery operation, calculate for minimum battery voltage (e.g., 9V battery drops to 6-7V). Pulsing LEDs with PWM reduces average current while maintaining perceived brightness. Standard 1/4W resistors handle most indicator LED applications. High-current LEDs need constant-current drivers instead of resistors for efficiency."
        }
      ]
    }
  },

  "voltage-regulator": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter input voltage (Vin) - the unregulated DC voltage from power supply or rectifier.",
        "Enter desired output voltage (Vout) - the regulated voltage needed by your circuit.",
        "Enter load current (Iload) - the maximum current your circuit will draw.",
        "Calculator determines if linear regulator is feasible based on voltage difference.",
        "Results show required dropout voltage, power dissipation, and efficiency.",
        "Use heatsink if power dissipation exceeds 1W for TO-220 packages."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Input Voltage (Vin)",
          definition: "The unregulated input voltage to the voltage regulator. Must be higher than output voltage plus dropout voltage. Typical range: 7-35V for 7805 (5V regulator)."
        },
        {
          term: "Output Voltage (Vout)",
          definition: "The stable, regulated output voltage. Common values: 3.3V, 5V, 12V. Linear regulators maintain this voltage despite input voltage or load current variations."
        },
        {
          term: "Dropout Voltage (Vdrop)",
          definition: "The minimum voltage difference (Vin - Vout) required for regulation. Standard regulators: 2-3V. LDO (low dropout) regulators: 0.1-0.6V. Determines minimum Vin."
        },
        {
          term: "Power Dissipation (Pdiss)",
          definition: "Heat generated by regulator: Pdiss = (Vin - Vout) × Iload. Determines heatsink requirements. Exceeding maximum power causes thermal shutdown or failure."
        },
        {
          term: "Efficiency (η)",
          definition: "Ratio of output power to input power: η = (Vout / Vin) × 100%. Linear regulators waste voltage difference as heat. Switching regulators achieve >80% efficiency."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Voltage Regulators",
      sections: [
        {
          title: "Linear vs Switching Regulators",
          content: "Linear regulators (like 7805) use pass transistor to drop excess voltage as heat. Advantages: simple, low noise, no switching frequency EMI. Disadvantages: inefficient (wastes power as heat), requires Vin > Vout. Switching regulators (buck/boost converters) rapidly switch on/off to convert voltage efficiently. Advantages: 80-95% efficient, can step up or down voltage. Disadvantages: complex circuitry, generates EMI, output ripple noise. Use linear for low-power (<1W), noise-sensitive applications. Use switching for high power or battery operation where efficiency matters."
        },
        {
          title: "Power Dissipation and Heatsinking",
          content: "Linear regulator power loss: P = (Vin - Vout) × Iload. Example: 12V to 5V at 1A dissipates (12-5) × 1 = 7W as heat. Junction-to-case thermal resistance: ~5°C/W for TO-220. Heatsink required when: Pdiss × Rθ(jc) + Rθ(cs) + Rθ(sa) causes junction temp >125°C. Simple rule: Use heatsink if Pdiss > 1W. Larger heatsink = lower thermal resistance = cooler operation. Thermal compound between regulator and heatsink improves heat transfer. Consider forced-air cooling for extreme cases."
        },
        {
          title: "Common Voltage Regulator ICs",
          content: [
            "78xx Series (Positive): 7805 (5V), 7809 (9V), 7812 (12V) - Standard linear, 1.5A max",
            "79xx Series (Negative): 7905 (-5V), 7912 (-12V) - Negative voltage output",
            "LM317 (Adjustable): 1.25-37V adjustable with two resistors, 1.5A max",
            "LM7805 (Low Dropout): 0.3V dropout vs 2V for standard 7805",
            "AMS1117 (LDO): 3.3V/5V versions, 1A, 1.2V dropout, SMD package",
            "LM2596 (Buck Switching): 3A, adjustable, 80% efficient, step-down only"
          ]
        },
        {
          title: "Regulator Circuit Design",
          content: "Input capacitor (0.33µF ceramic): filters input ripple, should be close to regulator. Output capacitor (10µF-100µF electrolytic + 0.1µF ceramic): stabilizes output, prevents oscillation. Ceramic cap provides high-frequency bypassing. Protection diode (1N4001) from output to input prevents damage if output voltage exceeds input (e.g., from large output capacitor discharge). Typical circuit: rectifier → input cap → regulator → output cap → load. For adjustable regulators (LM317), use resistor divider on adjust pin: Vout = 1.25 × (1 + R2/R1)."
        },
        {
          title: "Practical Considerations",
          content: "Minimum load current: Some regulators require minimum load (1-10mA) for regulation, use dummy load resistor if needed. Input voltage ripple: Allow 2-3V margin above dropout for AC ripple from rectifier. Multiple regulators: Regulate high voltage first (e.g., 12V), then derive lower voltages (5V, 3.3V) for better efficiency. Reverse polarity protection: Add diode or MOSFET on input. Current limiting: Linear regulators have built-in thermal and current limiting, but don't rely on it for continuous operation. For current >1.5A, parallel multiple regulators or use switching regulator."
        }
      ]
    }
  },

  "bjt-biasing": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter supply voltage (Vcc) - the power supply voltage for the transistor circuit.",
        "Enter desired collector current (Ic) - the operating current through the transistor.",
        "Enter transistor current gain (β or hFE) - find this value in the transistor datasheet.",
        "Enter desired collector-emitter voltage (Vce) - typically Vcc/2 for maximum swing.",
        "Calculator computes voltage divider bias resistor values (R1, R2, Rc, Re).",
        "Results provide stable bias point with temperature compensation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Collector Current (Ic)",
          definition: "The DC current flowing from collector to emitter. Determines transistor operating point. Typically 1-100mA for small-signal transistors. Sets the Q-point for amplifier linearity."
        },
        {
          term: "Current Gain (β / hFE)",
          definition: "The ratio of collector current to base current: β = Ic / Ib. Typical values: 100-400 for small-signal BJTs. Varies with temperature and Ic. Used to calculate base current: Ib = Ic / β."
        },
        {
          term: "Collector-Emitter Voltage (Vce)",
          definition: "The voltage across the transistor from collector to emitter. For linear amplifiers, set to Vcc/2 for maximum AC signal swing. Minimum Vce ≈ 0.2V (saturation)."
        },
        {
          term: "Base Voltage (Vb)",
          definition: "Voltage at transistor base relative to ground. For silicon BJT: Vbe ≈ 0.7V, so Vb = Ve + 0.7V. Set by voltage divider R1-R2 from Vcc."
        },
        {
          term: "Voltage Divider Bias",
          definition: "R1-R2 network sets base voltage independent of β. Stiff divider (low resistance) provides stable bias despite β variations. Bleeder current (through R1-R2) = 10× base current for good stability."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to BJT Biasing",
      sections: [
        {
          title: "Why Proper Biasing is Critical",
          content: "Bipolar junction transistors (BJTs) require correct DC bias to operate in the active region for amplification. Without bias, the transistor is either off (cutoff) or fully on (saturation), unable to amplify AC signals. Proper biasing establishes the Q-point (quiescent operating point) - the DC collector current and voltage with no AC signal. The Q-point must be stable against temperature changes and transistor β variations. Voltage divider bias is the most stable biasing method, widely used in amplifier circuits."
        },
        {
          title: "Voltage Divider Bias Analysis",
          content: "Voltage divider bias uses four resistors: R1-R2 divide Vcc to set base voltage Vb. Emitter resistor Re provides negative feedback for stability. Collector resistor Rc sets collector voltage. Design equations: Vb = Vcc × R2/(R1+R2), Ve = Vb - 0.7V, Ie ≈ Ic (since Ic » Ib), Re = Ve/Ie, Vc = Vcc - Ic×Rc. For stability, make bleeder current through R1-R2 at least 10× base current. This makes Vb independent of β. Typical design: Set Ve = 0.1×Vcc, Vc = 0.5×Vcc for Class A amplifier."
        },
        {
          title: "BJT Operating Regions",
          content: [
            "Cutoff: Vbe < 0.6V, both junctions reverse biased, transistor off, Ic ≈ 0",
            "Active (Linear): Vbe ≈ 0.7V, base-emitter forward biased, base-collector reverse biased, Ic = β×Ib",
            "Saturation: Both junctions forward biased, Vce < 0.3V, transistor fully on, acts like closed switch",
            "Active region used for amplifiers - small base current changes produce large collector current changes",
            "Saturation used for digital switches - transistor acts as on/off switch",
            "Q-point in middle of active region allows maximum AC signal swing without clipping"
          ]
        },
        {
          title: "Temperature Stability",
          content: "BJT characteristics change with temperature: β increases ~0.5%/°C, Vbe decreases 2mV/°C. Without stabilization, Ic increases with temperature, causing thermal runaway. Emitter resistor Re provides negative feedback: if Ic increases, Ve increases, Vb-Ve decreases, base current decreases, countering the Ic increase. Stiff voltage divider (low R1-R2) keeps Vb constant despite β changes. Bypass capacitor across Re removes AC degeneration while keeping DC stabilization. For critical applications, use temperature-compensated bias or constant-current source."
        },
        {
          title: "Practical Design Tips",
          content: "Choose Vce = Vcc/2 for amplifiers to maximize output swing. Set Ve = 0.1×Vcc (or 1-2V) for good stability. Use standard E12 resistor values, recalculate actual bias point. Verify transistor power dissipation: Pc = Vce × Ic doesn't exceed rating. Add emitter bypass capacitor (10-100µF) for AC signals to prevent gain loss. Use coupling capacitors (1-10µF) on input/output to block DC. For high-frequency circuits, minimize stray capacitance. Account for resistor tolerances (±5% or ±1%) in worst-case analysis. Measure actual Vb, Ve, Vc to verify design."
        }
      ]
    }
  },

  "mosfet": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter gate-source voltage (Vgs) - the voltage between gate and source terminals.",
        "Enter threshold voltage (Vth) - the minimum Vgs for MOSFET to start conducting (from datasheet).",
        "Enter transconductance parameter (Kn) - MOSFET gain factor in A/V² (from datasheet).",
        "Calculator computes drain current (Id) using square-law MOSFET equation.",
        "For enhancement mode: Vgs must exceed Vth for current to flow.",
        "Results show operating region: cutoff (Id=0), saturation (active), or triode (ohmic)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Gate-Source Voltage (Vgs)",
          definition: "The control voltage applied between gate and source. For n-channel enhancement MOSFET: Vgs > Vth turns on. For depletion mode: can be negative. Gate draws negligible current (input impedance GΩ range)."
        },
        {
          term: "Threshold Voltage (Vth)",
          definition: "The minimum Vgs needed to create conductive channel. Typical: 1-3V for logic-level MOSFETs, 2-4V for standard power MOSFETs. Negative for depletion-mode devices. Varies with temperature (~-2mV/°C)."
        },
        {
          term: "Drain Current (Id)",
          definition: "The current flowing from drain to source. In saturation region: Id = Kn(Vgs - Vth)². Depends on Vgs, increases quadratically above threshold. Limited by Rds(on) in triode region."
        },
        {
          term: "Transconductance (Kn / β)",
          definition: "The MOSFET gain parameter in the square-law equation, units A/V². Determined by device geometry and process. Higher Kn = more current for same Vgs. Typical range: 0.001 to 10 A/V² depending on MOSFET size."
        },
        {
          term: "On-Resistance (Rds(on))",
          definition: "The drain-source resistance when MOSFET is fully on (triode region). Typical: 0.001Ω to 1Ω for power MOSFETs. Power loss: P = Id² × Rds(on). Lower Rds(on) = less heat in switching applications."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to MOSFET Operation",
      sections: [
        {
          title: "MOSFET Types and Symbols",
          content: "MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) come in four types: N-channel enhancement (most common in power switching), P-channel enhancement, N-channel depletion, P-channel depletion. Enhancement mode: Off when Vgs=0, turned on by applying gate voltage. Depletion mode: On when Vgs=0, turned off by applying opposite gate voltage. N-channel: electrons are majority carriers, source connected to ground. P-channel: holes are majority carriers, source connected to positive supply. Enhancement N-channel is the most widely used for digital and power applications."
        },
        {
          title: "MOSFET Operating Regions",
          content: "Cutoff region: Vgs < Vth, no channel formed, Id ≈ 0, MOSFET off. Saturation (active) region: Vgs > Vth and Vds > Vgs - Vth, channel pinched at drain, Id = Kn(Vgs-Vth)², used for amplifiers. Triode (linear/ohmic) region: Vgs > Vth and Vds < Vgs - Vth, channel fully formed, acts like voltage-controlled resistor Rds = 1/(Kn(Vgs-Vth)), used for switches. For switching applications, operate in triode (on) or cutoff (off). For amplifiers, operate in saturation with Id proportional to (Vgs-Vth)²."
        },
        {
          title: "Square-Law MOSFET Equation",
          content: [
            "Saturation region current: Id = Kn(Vgs - Vth)² for Vds ≥ Vgs - Vth",
            "Triode region current: Id = Kn[(Vgs-Vth)Vds - Vds²/2] for Vds < Vgs - Vth",
            "Transconductance gm = ∂Id/∂Vgs = 2Kn(Vgs - Vth) in saturation",
            "Output resistance ro = ∂Vds/∂Id ≈ 1/(λId) where λ is channel-length modulation",
            "Cutoff current: Id ≈ 0 when Vgs < Vth (small leakage in nA range)",
            "Square-law holds for long-channel devices; modern short-channel MOSFETs show velocity saturation"
          ]
        },
        {
          title: "MOSFET as a Switch",
          content: "MOSFETs make excellent switches: fast switching speed (ns), low on-resistance, high input impedance. To turn on fully: Apply Vgs > Vth + safety margin (typically 10V for power MOSFETs, 5V for logic-level). Gate drive voltage determines Rds(on): higher Vgs = lower resistance. Switch dissipation: Pon = Id² × Rds(on) when conducting. Switching losses: Psw = f × (ton + toff) × Vds × Id due to transition time. Use gate resistor (10-100Ω) to control switching speed and prevent ringing. MOSFET gates are capacitive, require current pulse to charge/discharge: Qg (gate charge) from datasheet."
        },
        {
          title: "Practical MOSFET Applications",
          content: "Power switching: DC-DC converters, motor drivers, relay replacement - exploit low Rds(on) and fast switching. Digital logic: CMOS (complementary MOS) uses pairs of N and P-channel MOSFETs, nearly zero static power. Amplifiers: Source follower (unity gain buffer), common source (voltage gain), differential pairs. Motor control: H-bridges use 4 MOSFETs to control DC motor speed and direction. LED dimming: PWM switching controls average current. Solar MPPT: Buck/boost converters track maximum power point. Linear regulators: MOSFET as pass element, linear mode wastes power but provides quiet output."
        },
        {
          title: "MOSFET Selection and Safety",
          content: "Check maximum ratings: Vds(max) - drain-source voltage, Id(max) - continuous drain current, Pd(max) - power dissipation. Gate oxide is fragile: ESD can destroy MOSFET, always use ESD protection and handling. Gate-source voltage: Never exceed Vgs(max) (typically ±20V), use zener clamp if needed. Avalanche rating: for inductive switching, some MOSFETs rated for avalanche breakdown. Body diode: intrinsic diode from source to drain, useful for inductive loads but slower than external Schottky. Thermal management: use heatsink if Pd > 1W, calculate θja (junction-to-ambient thermal resistance). Driver circuits: for high-speed switching, use dedicated gate driver IC for fast, strong gate drive."
        }
      ]
    }
  },

  "op-amp": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select amplifier configuration: Non-inverting or Inverting.",
        "Enter feedback resistor value (Rf) - the resistor from output to inverting input.",
        "Enter input resistor value (Rin) - for inverting: from signal to inverting input; for non-inverting: from inverting input to ground.",
        "Calculator computes voltage gain (Av) and gain in decibels (dB).",
        "Non-inverting: Av = 1 + Rf/Rin, output in-phase with input.",
        "Inverting: Av = -Rf/Rin, output 180° out of phase (negative gain indicates inversion)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Voltage Gain (Av)",
          definition: "The ratio of output voltage to input voltage: Vout/Vin. For non-inverting: always ≥ 1 (amplifies or buffers). For inverting: magnitude can be <1 (attenuator) or >1 (amplifier). Negative sign indicates 180° phase inversion."
        },
        {
          term: "Feedback Resistor (Rf)",
          definition: "The resistor connecting op-amp output to inverting input. Creates negative feedback for stable, linear operation. Higher Rf = higher gain but also higher noise and offset voltage errors. Typical range: 10kΩ to 1MΩ."
        },
        {
          term: "Input Resistor (Rin)",
          definition: "For inverting amplifier: sets input impedance and gain with Rf. For non-inverting: sets gain with Rf. Lower Rin = higher gain but may load signal source. Typical range: 1kΩ to 100kΩ."
        },
        {
          term: "Gain in Decibels (dB)",
          definition: "Logarithmic expression of gain: dB = 20 × log₁₀(|Av|). Gain of 10 = 20dB, gain of 100 = 40dB. Convenient for cascaded stages (dB values add). Always positive (uses absolute value of Av)."
        },
        {
          term: "Input Impedance (Zin)",
          definition: "For non-inverting: very high (GΩ range, limited by op-amp input impedance). For inverting: equals Rin. High Zin avoids loading the signal source."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Op-Amp Amplifier Configurations",
      sections: [
        {
          title: "Ideal vs Real Op-Amps",
          content: "Ideal op-amp assumptions: infinite open-loop gain, infinite input impedance, zero output impedance, infinite bandwidth, zero offset voltage, zero input bias current. Real op-amps approximate these: open-loop gain 100,000-1,000,000 (100-120dB), input impedance MΩ to GΩ, output impedance Ω range, bandwidth limited by gain-bandwidth product (GBW), offset voltage 0.1-10mV, input bias current pA to nA. Negative feedback makes practical circuits insensitive to variations in open-loop parameters. Golden rules for ideal op-amp with negative feedback: (1) no current into inputs, (2) voltage at + and - inputs are equal."
        },
        {
          title: "Non-Inverting Amplifier Analysis",
          content: "Non-inverting configuration: input signal to non-inverting (+) input, inverting (-) input connected to voltage divider Rin-Rf from output to ground. By voltage divider: V- = Vout × Rin/(Rf+Rin). Golden rule: V+ = V- = Vin. Therefore: Vin = Vout × Rin/(Rf+Rin). Solving for gain: Av = Vout/Vin = 1 + Rf/Rin. Input impedance ≈ op-amp input impedance (very high). Output in-phase with input. Unity-gain buffer: set Rf = 0, Rin = ∞ (or short Rf, omit Rin) for Av = 1, provides impedance transformation."
        },
        {
          title: "Inverting Amplifier Analysis",
          content: "Inverting configuration: input signal through Rin to inverting (-) input, non-inverting (+) input grounded, Rf from output to inverting input. Virtual ground at inverting input (V- = V+ = 0). Input current: Iin = Vin/Rin. No current into op-amp input, so all Iin flows through Rf. Feedback current: If = -Vout/Rf. Since Iin = If: Vin/Rin = -Vout/Rf. Gain: Av = Vout/Vin = -Rf/Rin. Negative sign indicates 180° phase inversion. Input impedance = Rin (relatively low). For unity-gain inverter, set Rf = Rin."
        },
        {
          title: "Frequency Response and Stability",
          content: [
            "Gain-bandwidth product (GBW): open-loop gain × bandwidth = constant (e.g., 1MHz for TL081)",
            "Closed-loop bandwidth: f(-3dB) ≈ GBW / Av (higher gain = lower bandwidth)",
            "Slew rate: maximum rate of output voltage change, limits high-frequency large-signal performance",
            "Phase margin: must be >45° for stability, set by feedback network and op-amp poles",
            "Compensation: internally compensated op-amps stable for gains ≥1, external compensation for very low gains",
            "Noise gain: for stability analysis, equals non-inverting gain 1+Rf/Rin regardless of configuration"
          ]
        },
        {
          title: "Common Op-Amp Applications",
          content: "Voltage follower (buffer): Av=1, very high input impedance, very low output impedance, isolates stages. Summing amplifier: multiple inputs through separate resistors to inverting input, Vout = -(Rf/R1×V1 + Rf/R2×V2 + ...). Differential amplifier: amplifies difference between two inputs, rejects common-mode signals (noise). Integrator: capacitor in place of Rf, output is integral of input voltage over time. Differentiator: capacitor in place of Rin, output proportional to rate of change of input. Instrumentation amplifier: high-precision differential input, very high input impedance, low drift."
        },
        {
          title: "Practical Design Considerations",
          content: "Resistor selection: Use values 1kΩ to 1MΩ to balance noise, offset, and bandwidth. Too low = excessive output current, too high = noise and stray capacitance issues. Decoupling capacitors: 0.1µF ceramic close to power pins to filter high-frequency noise. Input bias current compensation: match impedance at both inputs to minimize offset voltage from bias current. Output swing: limited to within power rails (rail-to-rail op-amps get closest). Input common-mode range: ensure input voltage stays within specified range. Output current limit: typically 20-30mA, use buffer for higher loads. Offset voltage: causes output error Verror = Vos × (1 + Rf/Rin), use precision op-amps for low offset."
        }
      ]
    }
  },

  "555-timer": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select timer mode: Astable (oscillator) or Monostable (one-shot).",
        "For astable: Enter R1, R2 resistor values and capacitor C value.",
        "For monostable: Enter resistor R and capacitor C values.",
        "Calculator computes frequency, period, duty cycle (astable) or pulse width (monostable).",
        "Astable mode creates continuous square wave output.",
        "Monostable mode generates single output pulse when triggered.",
        "Use standard resistor/capacitor values for practical circuits."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Frequency (f)",
          definition: "For astable mode, the rate of oscillation in Hz (cycles per second). Formula: f = 1.44 / ((R1 + 2×R2) × C). Typical range: 0.1Hz to 500kHz. Higher frequency = smaller R and C values."
        },
        {
          term: "Duty Cycle (D)",
          definition: "For astable, the percentage of time output is high: D = (R1 + R2)/(R1 + 2×R2) × 100%. Minimum ~50% with standard circuit (R1>0). For 50% duty cycle, make R1 « R2 or use modified circuit with steering diode."
        },
        {
          term: "Time High (Th)",
          definition: "Duration output stays high in astable mode: Th = 0.693 × (R1 + R2) × C. Longer time high = larger R1+R2 or C values."
        },
        {
          term: "Time Low (Tl)",
          definition: "Duration output stays low in astable mode: Tl = 0.693 × R2 × C. Longer time low = larger R2 or C values. Note: Cannot make Tl > Th with standard circuit."
        },
        {
          term: "Pulse Width (T)",
          definition: "For monostable, duration of output pulse: T = 1.1 × R × C. Triggered by falling edge on trigger pin. Pulse width independent of trigger pulse length. Typical range: 1µs to hours."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to 555 Timer Circuits",
      sections: [
        {
          title: "555 Timer Architecture",
          content: "The 555 timer contains: two comparators, SR flip-flop, discharge transistor, voltage divider (three 5kΩ resistors creating 1/3 and 2/3 Vcc thresholds). Pin 1: Ground, Pin 2: Trigger (starts timing), Pin 3: Output, Pin 4: Reset (active low), Pin 5: Control voltage (modulates thresholds), Pin 6: Threshold (ends timing), Pin 7: Discharge (internal transistor to ground), Pin 8: Vcc power supply (4.5-16V). Internal voltage divider creates 1/3 Vcc and 2/3 Vcc reference voltages for comparators. Trigger below 1/3 Vcc sets flip-flop high, threshold above 2/3 Vcc resets flip-flop low."
        },
        {
          title: "Astable Mode Operation",
          content: "Astable circuit uses R1, R2, and C to create free-running oscillator. Power-on: C discharged, output high, discharge transistor off. C charges through R1+R2 toward Vcc. When voltage reaches 2/3 Vcc, threshold comparator resets flip-flop, output goes low, discharge transistor turns on. C discharges through R2 to ground. When voltage falls to 1/3 Vcc, trigger comparator sets flip-flop, output high, cycle repeats. Charge time Th = 0.693(R1+R2)C, discharge time Tl = 0.693×R2×C. Period T = Th + Tl, frequency f = 1/T = 1.44/((R1+2R2)C). Duty cycle always >50% because charge path includes R1+R2 while discharge is only through R2."
        },
        {
          title: "Monostable Mode Operation",
          content: "Monostable circuit uses one R, one C, and external trigger. Stable state: C discharged (pin 7 shorts to ground), output low. Trigger pulse (falling edge below 1/3 Vcc on pin 2): sets flip-flop, output high, discharge transistor off. C charges through R toward Vcc. When C voltage reaches 2/3 Vcc, threshold comparator resets flip-flop, output returns low, discharge transistor shorts C to ground. Pulse width T = 1.1×R×C, independent of trigger pulse width (as long as trigger shorter than T). Re-triggering during timing extends pulse. Use R: 1kΩ to 10MΩ, C: 100pF to 1000µF. Add 0.01µF capacitor on trigger input to prevent false triggering."
        },
        {
          title: "555 Timer Specifications",
          content: [
            "Supply voltage: 4.5V to 16V (bipolar 555), 2V to 18V (CMOS 7555)",
            "Output current: 200mA source/sink (bipolar), 100mA (CMOS)",
            "Frequency range: 0.01Hz to 500kHz (bipolar), up to 2MHz (CMOS)",
            "Timing accuracy: ±1% typ (depends on R and C tolerances)",
            "Temperature stability: ±50ppm/°C (0.005%/°C)",
            "Trigger/threshold current: 0.5µA (bipolar), 1pA (CMOS)",
            "Reset voltage: <0.4V to reset, >1.0V for normal operation",
            "Power consumption: 3-6mA (bipolar), 100µA (CMOS)"
          ]
        },
        {
          title: "Practical 555 Applications",
          content: "Tone generation: audio oscillator for alarms, doorbells, electronic music (100Hz-5kHz range). PWM control: variable duty cycle by adding diode parallel to R2, controls motor speed or LED brightness. Missing pulse detector: monostable continuously re-triggered by input pulses, output goes low if pulse missing. Capacitance meter: unknown capacitor in timing circuit, measure period to find C. Voltage-controlled oscillator (VCO): apply control voltage to pin 5 to modulate frequency. Touch switch: body capacitance triggers monostable through high-value resistor. Pulse position modulation: precise timing for servo control and RC models."
        },
        {
          title: "Design Tips and Troubleshooting",
          content: "Component selection: Use 1% metal-film resistors and low-leakage capacitors (ceramic, film) for accuracy. Avoid electrolytic capacitors for timing if possible (high leakage, poor tolerance). Decoupling: Add 0.1µF ceramic capacitor close to pin 8 (Vcc) to ground. For pin 5, add 0.01µF to ground to reduce noise sensitivity. Resistor limits: R minimum 1kΩ (higher discharge currents damage chip), maximum 10MΩ (leakage affects timing). Capacitor limits: C minimum 100pF, maximum 1000µF. For long delays, use CMOS version (lower leakage). Reset pin: Tie to Vcc if unused, or add 10kΩ pull-up. Troubleshooting: Check Vcc, verify C charged/discharged properly, measure pin 6 and 2 voltages, confirm discharge transistor switching on pin 7."
        }
      ]
    }
  },

  "rc-filter": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select filter type: Low-pass (passes low frequencies, blocks high) or High-pass (passes high, blocks low).",
        "Enter resistor value (R) in kilohms.",
        "Enter capacitor value (C) in microfarads.",
        "Calculator computes cutoff frequency (-3dB point) where signal is attenuated by 29.3%.",
        "Also calculates time constant τ = R × C.",
        "Frequencies beyond cutoff are attenuated at -20dB/decade (10× frequency = 1/10 amplitude)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Cutoff Frequency (fc)",
          definition: "The -3dB frequency where signal power is reduced to 50% (voltage to 70.7%). Formula: fc = 1/(2π×R×C). Above fc (low-pass) or below fc (high-pass), attenuation increases. Defines filter bandwidth."
        },
        {
          term: "Time Constant (τ)",
          definition: "Product of resistance and capacitance: τ = R × C, measured in seconds. Related to cutoff frequency: fc = 1/(2πτ). For step input, output reaches 63.2% of final value after one τ. 99% settled after 5τ."
        },
        {
          term: "-3dB Point",
          definition: "The frequency where output power is half the input power. Voltage amplitude reduced to 1/√2 ≈ 0.707 times input. Also called half-power point. Phase shift is -45° (low-pass) or +45° (high-pass) at fc."
        },
        {
          term: "Attenuation (dB/decade)",
          definition: "RC filters have first-order rolloff: -20dB/decade or -6dB/octave. Each 10× frequency increase attenuates by factor of 10 (20dB). Simple, predictable slope but limited filtering."
        },
        {
          term: "Filter Order",
          definition: "Single RC = first-order filter (20dB/decade). Cascade multiple RC stages for steeper rolloff: second-order = 40dB/decade, third-order = 60dB/decade. Higher order = sharper cutoff but more complexity."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to RC Filters",
      sections: [
        {
          title: "Low-Pass RC Filter Operation",
          content: "Low-pass filter: resistor in series, capacitor to ground. At DC (f=0), capacitor acts as open circuit, output = input (no attenuation). As frequency increases, capacitive reactance Xc = 1/(2πfC) decreases. At high frequencies, capacitor acts as short circuit, signal shunted to ground (high attenuation). Cutoff frequency fc = 1/(2πRC) where Xc = R. Below fc: signal passes relatively unattenuated. Above fc: attenuation increases at -20dB/decade. Phase shift: 0° at low frequencies, -45° at fc, approaching -90° at high frequencies. Output lags input."
        },
        {
          title: "High-Pass RC Filter Operation",
          content: "High-pass filter: capacitor in series, resistor to ground. At DC (f=0), capacitor blocks signal (open circuit), output = 0 (infinite attenuation). As frequency increases, capacitive reactance Xc = 1/(2πfC) decreases, capacitor impedance drops. At high frequencies, capacitor approaches short circuit, signal passes through (no attenuation). Cutoff frequency fc = 1/(2πRC) where Xc = R. Above fc: signal passes relatively unattenuated. Below fc: attenuation increases at -20dB/decade toward DC. Phase shift: +90° at DC, +45° at fc, approaching 0° at high frequencies. Output leads input."
        },
        {
          title: "RC Filter Frequency Response",
          content: [
            "Transfer function magnitude: |H(f)| = 1 / √(1 + (f/fc)²) for low-pass",
            "At f = fc: |H(fc)| = 1/√2 ≈ 0.707 = -3dB",
            "At f = 10×fc: |H(10fc)| ≈ 0.1 = -20dB (low-pass)",
            "At f = 100×fc: |H(100fc)| ≈ 0.01 = -40dB (low-pass)",
            "Bode plot: flat response until fc, then -20dB/decade slope",
            "Phase response: arctan(f/fc), transitions over decade around fc"
          ]
        },
        {
          title: "Practical Filter Design",
          content: "Choosing fc: For audio filters, set fc based on desired frequency range (e.g., fc = 20kHz for low-pass audio, fc = 20Hz for high-pass to remove DC). For power supply filtering, fc « switching frequency (e.g., fc = 1kHz for 100kHz switcher). Impedance considerations: Filter affects both source and load. Source impedance should be « R for low-pass, or » R for high-pass to avoid loading. Load impedance should be » R to avoid attenuating desired signals. Example: 1kΩ resistor, 0.1µF capacitor gives fc = 1/(2π×1000×0.0000001) ≈ 1.59kHz."
        },
        {
          title: "Multi-Stage and Active Filters",
          content: "Cascading RC stages: each stage loads the previous, shifting fc. Buffer between stages with op-amp prevents loading. Disadvantage: total attenuation « n×20dB/decade due to loading. Active low-pass: op-amp + RC creates Sallen-Key or Multiple Feedback topology, sharper rolloff, no loading. Active high-pass: similar but capacitors and resistors swapped. Higher-order filters (Butterworth, Chebyshev, Bessel): designed response using tables or software, trade off flatness, rolloff steepness, and phase linearity. State-variable filters: simultaneously provide low-pass, high-pass, and band-pass outputs."
        },
        {
          title: "Common RC Filter Applications",
          content: "Power supply filtering: remove switching noise and ripple from DC supply. Audio tone controls: bass/treble adjust using variable RC filters. Anti-aliasing filter: low-pass before ADC to prevent aliasing (fc < 0.5 × sample rate). Sensor signal conditioning: remove high-frequency noise from slow sensor outputs. PWM filtering: low-pass to recover average voltage from PWM signal. Decoupling capacitors: high-pass filter blocks DC, passes AC (e.g., blocking DC offset between stages). Differentiator/integrator approximations: high-pass approximates differentiation, low-pass approximates integration in specific frequency ranges."
        }
      ]
    }
  },

  "capacitor-charge": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter supply voltage (V) - the voltage source charging the capacitor.",
        "Enter resistance (R) - the series resistor limiting charge/discharge current.",
        "Enter capacitance (C) - the capacitor being charged or discharged.",
        "Enter time elapsed (t) - how long the circuit has been charging.",
        "Calculator computes capacitor voltage at time t using exponential charging equation.",
        "Results show percentage charged and key time constants.",
        "63.2% charged after 1τ, 99% after 5τ where τ = R×C."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Time Constant (τ)",
          definition: "Product of resistance and capacitance: τ = R × C, units in seconds. Determines charging/discharging rate. After 1τ, voltage changes by 63.2%. After 5τ, >99% complete. Larger R or C = slower charging."
        },
        {
          term: "Charging Equation",
          definition: "Voltage across capacitor during charging: Vc(t) = V × (1 - e^(-t/τ)) where V is supply voltage, t is elapsed time, τ is time constant. Exponential approach to final voltage. Never quite reaches 100% (asymptotic)."
        },
        {
          term: "Discharging Equation",
          definition: "Voltage during discharge (initial voltage V0): Vc(t) = V0 × e^(-t/τ). Exponential decay toward zero. Same time constant τ = R×C. Used in timing circuits, pulse shaping, delay circuits."
        },
        {
          term: "Percentage Charged",
          definition: "Fraction of final voltage reached: (Vc/V) × 100%. After 1τ: 63.2%, after 2τ: 86.5%, after 3τ: 95%, after 4τ: 98.2%, after 5τ: 99.3%. Practical circuits consider fully charged at 5τ."
        },
        {
          term: "Charge Current",
          definition: "Current during charging: I(t) = (V/R) × e^(-t/τ). Maximum current I0 = V/R at t=0. Decreases exponentially as capacitor charges. Power dissipated in resistor: P = I²R, decreases over time."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Capacitor Charging and Discharging",
      sections: [
        {
          title: "Capacitor Charging Process",
          content: "When voltage V applied through resistor R to uncharged capacitor C: At t=0: capacitor voltage Vc=0, acts like short circuit, current I0 = V/R (maximum). As capacitor charges, voltage across it increases, voltage across resistor decreases, current decreases exponentially. Voltage across capacitor: Vc = V(1 - e^(-t/RC)). Current: I = (V/R)e^(-t/RC). Time constant τ = RC determines rate: small τ = fast charging, large τ = slow charging. Energy stored in capacitor: E = ½CV². Energy dissipated in resistor = ½CV² (half the energy lost as heat)."
        },
        {
          title: "Capacitor Discharging Process",
          content: "Charged capacitor (initial voltage V0) connected to resistor R: At t=0: capacitor acts as voltage source V0, discharge current I0 = V0/R (maximum). Voltage decreases exponentially: Vc = V0 × e^(-t/RC). Current: I = (V0/R) × e^(-t/RC), decreases exponentially. Time constant τ = RC same as charging. After 5τ, capacitor essentially discharged (<1% of V0). All stored energy (½CV0²) dissipated as heat in resistor. Discharge creates current in opposite direction to charging current."
        },
        {
          title: "Time Constant and Practical Charging Times",
          content: [
            "τ = R × C determines speed of charging/discharging",
            "1τ: Charged to 63.2%, discharged to 36.8%",
            "2τ: Charged to 86.5%, discharged to 13.5%",
            "3τ: Charged to 95.0%, discharged to 5.0%",
            "4τ: Charged to 98.2%, discharged to 1.8%",
            "5τ: Charged to 99.3%, discharged to 0.7% (considered complete)",
            "Example: 10kΩ, 100µF gives τ = 1 second, ~5 seconds for full charge"
          ]
        },
        {
          title: "RC Time Constant Applications",
          content: "Timing circuits: 555 timers, delay circuits use RC charging to create precise time intervals. Flash circuits: camera flash charges capacitor slowly (seconds), discharges rapidly through xenon tube (milliseconds). Power-on delay: delay circuit activation after power applied, allows supplies to stabilize. Pulse shaping: differentiation (short RC) creates spike from square wave, integration (long RC) smooths signals. Debouncing: RC filter removes switch bounce noise (multiple fast on-off transitions). Sample-and-hold: capacitor holds voltage while ADC converts. Turn-off snubber: RC across switch protects from voltage spikes during inductive load turnoff."
        },
        {
          title: "Component Selection for RC Circuits",
          content: "Resistor selection: larger R = slower charging, less current, less power loss. Typical range 1kΩ to 10MΩ. For timing, use 1% tolerance metal-film resistors. Very high R (>10MΩ) affected by leakage. Capacitor selection: larger C = slower charging, more energy stored. For timing: film or ceramic capacitors (low leakage, tight tolerance). Avoid electrolytic for precision timing (high leakage, poor tolerance, polarity). For energy storage: electrolytic okay (high capacitance, low cost). Typical values: 1nF to 10,000µF. Example calculations: τ = 1ms: 1kΩ × 1µF or 10kΩ × 0.1µF. τ = 1s: 1MΩ × 1µF or 10kΩ × 100µF."
        },
        {
          title: "Advanced RC Considerations",
          content: "ESR (Equivalent Series Resistance): real capacitors have internal resistance, adds to external R, slightly reduces τ. Matters for high-frequency or low-R circuits. Leakage current: capacitor self-discharges over time through internal leakage resistance. Electrolytic caps: high leakage (MΩ range), film caps: very low leakage (GΩ range). Dielectric absorption: after discharge, some charge reappears as dielectric relaxes. Voltage rating: capacitor voltage rating must exceed maximum voltage, use 2× margin for reliability. Temperature effects: capacitance changes with temperature (especially ceramic and electrolytic), affects τ. Initial conditions: real capacitors may have residual charge, fully discharge before use in precision circuits."
        }
      ]
    }
  },

  "zener-diode": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter input voltage (Vin) - the unregulated DC voltage source.",
        "Enter zener voltage (Vz) - the regulated output voltage from the zener diode datasheet.",
        "Enter load current (Iload) - the current drawn by the load being powered.",
        "Calculator computes series resistor value (Rs) to limit current.",
        "Assumes zener current Iz ≥ 10% of Iload for proper regulation.",
        "Results show power dissipation in resistor and zener diode.",
        "Ensure components rated for calculated power dissipation."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Series Resistor (Rs)",
          definition: "Current-limiting resistor: Rs = (Vin - Vz) / (Iload + Iz). Drops excess voltage and limits current to safe values. Use next higher standard resistor value. Must handle power dissipation: Prs = I²Rs."
        },
        {
          term: "Zener Current (Iz)",
          definition: "Current flowing through zener diode. Must stay within datasheet range: Iz(min) < Iz < Iz(max). Too little = poor regulation, too much = overheating. Typical: Iz ≥ 10% of Iload for stable regulation."
        },
        {
          term: "Zener Voltage (Vz)",
          definition: "The regulated output voltage when zener operates in reverse breakdown. Available in standard values: 2.4V, 3.3V, 5.1V, 6.2V, 9.1V, 12V, 15V, 18V, 24V, etc. Tolerance typically ±5%, use precision zeners for ±2% or ±1%."
        },
        {
          term: "Power Dissipation",
          definition: "Heat generated by components. Zener: Pz = Vz × Iz. Series resistor: Prs = (Vin - Vz) × Itotal. Select components with power rating ≥ 2× calculated dissipation for reliability and temperature margin."
        },
        {
          term: "Load Regulation",
          definition: "How well output voltage stays constant as load current changes. Zener regulation depends on dynamic impedance Zz (Ω). Lower Zz = better regulation. Change in output: ΔVout = Zz × ΔIload. Typical Zz: 2-100Ω."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Zener Diode Voltage Regulation",
      sections: [
        {
          title: "Zener Diode Operating Principle",
          content: "Zener diodes are PN junction diodes designed to operate in reverse breakdown region. Forward biased: conducts like normal diode (Vf ≈ 0.7V). Reverse biased below Vz: acts as open circuit, negligible current. Reverse breakdown at Vz: conducts heavily while maintaining nearly constant voltage. Unlike normal diodes that fail in breakdown, zener diodes are designed for controlled breakdown. Breakdown mechanisms: Zener effect (<5V, quantum tunneling) and avalanche effect (>5V, carrier multiplication). Voltage regulation occurs because large current changes produce small voltage changes across dynamic impedance Zz."
        },
        {
          title: "Zener Regulator Circuit Design",
          content: "Basic shunt regulator: Input voltage Vin → series resistor Rs → zener diode to ground (cathode toward Vin). Load connected in parallel with zener. Series resistor Rs limits current and drops excess voltage: Vrs = Vin - Vz. Total current through Rs: Itotal = Iload + Iz. Zener current must stay above minimum (Iz(min) typically 1-5mA for small zeners) for regulation. Design for Iz ≥ 10% of Iload or ≥ 5mA, whichever is greater. Calculate Rs = (Vin - Vz) / (Iload + Iz). Verify Iz doesn't exceed Pz(max) / Vz."
        },
        {
          title: "Zener Diode Specifications",
          content: [
            "Zener voltage (Vz): Nominal breakdown voltage at specified test current Izt (usually 5-20mA)",
            "Power rating (Pz): Maximum power dissipation, typically 400mW, 500mW, 1W, 5W packages",
            "Tolerance: Voltage tolerance ±5% standard, ±2% or ±1% for precision types",
            "Dynamic impedance (Zz): Slope of V-I curve in breakdown, 2-100Ω typical, lower is better",
            "Temperature coefficient: mV/°C voltage change with temperature, positive for Vz>5V, negative for Vz<5V",
            "Maximum current: Iz(max) = Pz / Vz, e.g., 500mW / 5.1V ≈ 98mA",
            "Minimum current (Iz(min)): Current needed for regulation, typically 1-5mA"
          ]
        },
        {
          title: "Load and Line Regulation",
          content: "Load regulation: Output voltage change when load current varies. ΔVout = Zz × ΔIload. Good regulation requires low Zz and Iz » ΔIload. Example: Zz = 10Ω, ΔIload = 10mA gives ΔVout = 0.1V change. Line regulation: Output voltage change when input voltage varies. ΔVout ≈ Zz × (ΔVin / Rs). Better regulation needs larger Rs, but increases power loss. For both: lower zener dynamic impedance Zz improves regulation. Use precision zeners (BZX55C series) or voltage reference ICs (LM431, TL431) for critical applications requiring <1% regulation."
        },
        {
          title: "Practical Zener Applications",
          content: "Simple voltage regulation: Power indicator LEDs, low-power sensors (< 100mA). Advantage: simple, cheap, two components. Disadvantage: wastes power, poor regulation compared to linear regulators. Overvoltage protection: Zener across sensitive circuit clamps voltage spikes to Vz, protects from overvoltage. Use fast-acting zener or TVS (transient voltage suppressor). Reference voltage: Provides stable voltage for comparators, ADC reference. Use temperature-compensated zener or bandgap reference for precision. Waveform clipping: Limits signal amplitude to ±Vz, useful in audio limiters, signal conditioning. Voltage shifting: Back-to-back zeners for ±Vz bipolar clipping or level shifting."
        },
        {
          title: "Design Tips and Limitations",
          content: "Input voltage range: Design for minimum and maximum Vin. At Vin(min), ensure Iz ≥ Iz(min). At Vin(max), ensure Iz doesn't exceed Iz(max). Account for Vin ripple in power supply designs. Power rating selection: Calculate worst-case power (maximum Vin, minimum Iload gives maximum Iz and Pz). Derate power by 50% for reliability or provide heatsinking for >500mW zeners. Output capacitor: Add 10-100µF across output to reduce ripple and improve transient response. Noise: Zener diodes generate noise (especially low voltage), filter with capacitor or use low-noise reference IC. Load current limits: For Iload > 100mA, use linear regulator IC (7805, LM317) instead - better regulation, less power waste. For high efficiency, use switching regulator."
        }
      ]
    }
  },

  "transistor-amplifier": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter collector resistor value (Rc) in kilohms.",
        "Enter emitter resistor value (Re) in kilohms.",
        "Enter transistor current gain (β or hFE) from datasheet - typical 100-400.",
        "Calculator computes common-emitter amplifier voltage gain and impedances.",
        "Voltage gain Av ≈ -Rc/Re (negative indicates 180° phase inversion).",
        "Input impedance Zin ≈ β × Re, output impedance Zout ≈ Rc.",
        "Results shown in V/V and decibels (dB)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Voltage Gain (Av)",
          definition: "Ratio of AC output voltage to AC input voltage: Av = vout/vin. For common-emitter with emitter degeneration: Av ≈ -Rc/Re. Negative sign indicates 180° phase inversion. Magnitude can range from <1 to >100 depending on Rc/Re ratio."
        },
        {
          term: "Collector Resistor (Rc)",
          definition: "Resistor from collector to Vcc. Converts collector current variations to output voltage: vout = Δic × Rc. Larger Rc = higher gain but less voltage swing (Vc drops). Typical range: 1kΩ to 100kΩ."
        },
        {
          term: "Emitter Resistor (Re)",
          definition: "Resistor from emitter to ground. Provides negative feedback for bias stability and linearization. Reduces gain (Av proportional to Rc/Re) but improves linearity and bandwidth. Bypass with capacitor for AC to restore gain while keeping DC stability."
        },
        {
          term: "Input Impedance (Zin)",
          definition: "AC resistance seen at base terminal: Zin ≈ β × Re for common-emitter. Higher Re or β increases Zin. Loading effect: signal source must be able to drive Zin without excessive attenuation. Typical values: 1kΩ to 100kΩ."
        },
        {
          term: "Output Impedance (Zout)",
          definition: "AC resistance seen at collector output: Zout ≈ Rc for common-emitter. Lower Zout can drive low-impedance loads better. Emitter follower (common-collector) has very low Zout ≈ (Rs + re)/β, good for buffering."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Transistor Amplifiers",
      sections: [
        {
          title: "Common-Emitter Amplifier Configuration",
          content: "Most widely used BJT amplifier configuration. Input at base, output at collector, emitter common to both. Characteristics: voltage gain >1 (typically 10-200), current gain β, power gain = voltage gain × current gain, 180° phase inversion. With emitter resistor Re (unbypassed): gain Av ≈ -Rc/Re, more linear, stable against β variations. With bypassed Re (capacitor): gain Av ≈ -gm×Rc where gm ≈ Ic/Vt (Vt = 26mV at room temp), higher gain but less linear. DC biasing essential for proper AC operation - use voltage divider bias for temperature stability."
        },
        {
          title: "Small-Signal Gain Analysis",
          content: "Small-signal equivalent circuit: base input resistance rin = β×re where re = Vt/Ie ≈ 26mV/Ie. For Re unbypassed: gain Av = -Rc/(Re + re). Since Re » re typically, Av ≈ -Rc/Re, independent of transistor parameters. For Re bypassed: gain Av = -Rc/re = -gm×Rc where gm = Ic/Vt. At Ic = 1mA, gm ≈ 38mS, so Av = -38×Rc. Example: Rc = 4.7kΩ gives Av ≈ -179. Input impedance: Zin = R1 || R2 || β(re + Re) where R1,R2 are bias resistors. Output impedance: Zout ≈ Rc (assuming ro » Rc where ro is transistor output resistance)."
        },
        {
          title: "Emitter Follower (Common-Collector)",
          content: [
            "Configuration: Input at base, output at emitter, collector at Vcc (AC ground)",
            "Voltage gain: Av ≈ 1 (unity gain, no voltage amplification)",
            "Current gain: Ai ≈ β + 1 (high current gain)",
            "Input impedance: Zin ≈ β × Re (very high, typically MΩ)",
            "Output impedance: Zout ≈ (Rs + re)/β (very low, typically Ω)",
            "No phase inversion: output in-phase with input",
            "Applications: Buffer amplifier, impedance matching, current booster"
          ]
        },
        {
          title: "Common-Base Amplifier",
          content: "Configuration: Input at emitter, output at collector, base at AC ground. Characteristics: voltage gain Av ≈ Rc/re (positive, no inversion), current gain ≈ 1, low input impedance Zin ≈ re ≈ 26Ω at 1mA, high output impedance Zout ≈ Rc. Applications: high-frequency amplifiers (better high-frequency response than CE), current buffer, RF amplifiers. Advantage: no Miller capacitance effect, wider bandwidth. Disadvantage: low input impedance makes it harder to drive, requires impedance matching."
        },
        {
          title: "Frequency Response and Bandwidth",
          content: "Low-frequency rolloff: caused by coupling and bypass capacitors. Coupling caps block DC but act as high-pass filters. Bypass cap on Re: removes AC degeneration for full gain, but forms high-pass with Re. Frequency: f(-3dB) = 1/(2πRC). High-frequency rolloff: caused by transistor junction capacitances (Cbe, Cbc) and current gain falloff. Miller effect: Cbc appears amplified (×gain) at input due to voltage swing at collector. Unity-gain frequency fT: frequency where β = 1. Gain-bandwidth product: gain × bandwidth ≈ fT/2π. Wider bandwidth requires lower gain."
        },
        {
          title: "Practical Amplifier Design",
          content: "DC bias design first: establish Q-point (Ic, Vce) using voltage divider bias. Set Vce ≈ Vcc/2 for maximum swing, Ve ≈ 0.1×Vcc for stability. Choose Ic based on required gain, power, and transistor rating. AC design: Choose Rc for desired gain (Av = -Rc/Re), verify collector voltage swing doesn't clip. Bypass Re with large capacitor (10-100µF) if high gain needed. Coupling capacitors: 1-10µF to block DC while passing AC (f(-3dB) = 1/(2πCRload)). Load considerations: output loaded by next stage or actual load, affects gain (Av = -Rc||Rload/Re). Frequency compensation: reduce bandwidth with capacitor across Rc for stability, prevent oscillation. Testing: measure DC voltages first (Vb, Ve, Vc), then AC gain, input/output impedance, frequency response."
        }
      ]
    }
  },

  "wheatstone-bridge": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter three known resistor values (R1, R2, R3) in ohms.",
        "Calculator computes unknown resistor Rx using balance condition.",
        "Balance equation: Rx = (R2 × R3) / R1.",
        "When balanced, no current flows through galvanometer (zero voltage).",
        "Bridge used to measure unknown resistance precisely.",
        "Unbalanced bridge: adjust R2 (variable resistor) until balance achieved."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Unknown Resistance (Rx)",
          definition: "The resistance being measured using the bridge. Calculated from three known resistances when bridge is balanced. Accuracy depends on precision of known resistors and balance detection. Can measure from mΩ to MΩ with appropriate component selection."
        },
        {
          term: "Balance Condition",
          definition: "The bridge is balanced when no current flows through galvanometer: R1/R2 = R3/Rx, rearranged to Rx = (R2 × R3)/R1. At balance, voltage at points B and D are equal. Null detection more accurate than voltage measurement."
        },
        {
          term: "Ratio Arms (R1/R2)",
          definition: "R1 and R2 form ratio arm determining sensitivity and range. Common ratios: 1:1, 1:10, 1:100, 1:1000. Example: if R1/R2 = 10, then Rx = 10 × R3. Allows wide range of measurements with fixed R3."
        },
        {
          term: "Standard Arm (R3)",
          definition: "Known precision resistor in standard arm. Variable in manual bridges (decade box), fixed in some applications. Precision and stability of R3 directly affects measurement accuracy. Use 1% or better tolerance resistors."
        },
        {
          term: "Galvanometer Sensitivity",
          definition: "Detector sensitivity determines balance precision. High-sensitivity galvanometer detects small imbalance currents. Modern bridges use op-amp null detectors or digital meters. More sensitive detector = more precise balance = more accurate Rx measurement."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Wheatstone Bridge",
      sections: [
        {
          title: "Wheatstone Bridge Principle",
          content: "Invented by Samuel Hunter Christie (1833), popularized by Charles Wheatstone (1843). Four resistors arranged in diamond: R1-R2 form one voltage divider, R3-Rx form second voltage divider. Voltage supply (Vs) across A-C, galvanometer between B-D. At balance: voltage at B equals voltage at D, so galvanometer current = 0. Voltage divider equations: Vb = Vs × R2/(R1+R2), Vd = Vs × Rx/(R3+Rx). At balance: Vb = Vd, therefore R1/R2 = R3/Rx. Solving for unknown: Rx = (R2 × R3)/R1. Bridge null detection more accurate than voltage measurement because small voltage differences are easier to detect than absolute voltage."
        },
        {
          title: "Practical Bridge Measurement Procedure",
          content: "Setup: Connect known resistors R1, R2 (ratio arms), R3 (standard arm), and unknown Rx. Connect DC voltage source (typically 3-15V) across supply diagonal. Connect sensitive galvanometer or null detector across measurement diagonal. Balancing: If R2 is variable (potentiometer or decade box), adjust R2 until galvanometer reads zero (null). If R3 is variable, adjust R3 to achieve balance. Read final values and calculate: Rx = (R2 × R3)/R1. Verification: Reverse supply polarity and recheck balance (eliminates thermoelectric effects). Multiple measurements: Take several readings and average for better accuracy."
        },
        {
          title: "Types of Wheatstone Bridges",
          content: [
            "Meter Bridge (Slide-Wire Bridge): Uses uniform resistance wire with sliding contact, ratio determined by wire position. Simple, educational, moderate accuracy.",
            "Decade Box Bridge: R2 or R3 is precise decade resistance box (1Ω to 100kΩ in decade steps). High accuracy, convenient for lab use.",
            "Strain Gauge Bridge: Rx is strain gauge (resistance changes with mechanical strain). Unbalanced bridge monitors small resistance changes. Used in load cells, pressure sensors.",
            "Kelvin Bridge: Modified bridge for low-resistance measurement (< 1Ω), accounts for lead resistance. Four-wire measurement eliminates contact resistance.",
            "AC Bridge: Uses capacitors/inductors instead of resistors. Measures impedance, capacitance, inductance (e.g., Maxwell bridge, Wien bridge)."
          ]
        },
        {
          title: "Sources of Error and Accuracy",
          content: "Resistor tolerance: 1% resistors limit accuracy to ±1%. Use 0.1% or 0.01% precision resistors for high-accuracy measurements. Temperature effects: resistance changes with temperature (typically 100ppm/°C). Use temperature-compensated resistors or climate-controlled environment. Lead resistance: wire resistance adds to measurement, significant for low Rx. Use four-wire (Kelvin) connection for Rx < 100Ω. Galvanometer resolution: limited sensitivity misses balance point. Use high-sensitivity detector or op-amp null detector. Thermoelectric EMF: dissimilar metal junctions create voltages, causes false null. Reverse polarity and average, use copper connections, minimize dissimilar metals."
        },
        {
          title: "Modern Bridge Applications",
          content: "Resistance thermometers (RTD): Platinum RTD in bridge measures temperature (-200°C to +800°C). Bridge imbalance proportional to temperature. Strain measurement: Wheatstone bridge with strain gauge measures deformation, stress, pressure, force. Quarter-bridge (1 active gauge), half-bridge (2 gauges), full-bridge (4 gauges) configurations. Load cells: Full-bridge with four strain gauges measures weight and force. Output voltage proportional to applied load. Resistance spot welding: Bridge monitors weld resistance in real-time to control weld quality and current. Component matching: Bridge quickly identifies matched resistor pairs by nulling (zero galvanometer reading indicates matched resistances)."
        },
        {
          title: "Designing a Wheatstone Bridge Circuit",
          content: "Supply voltage selection: higher voltage increases sensitivity but causes self-heating in resistors. Typical: 5-10V for low-power resistors. For strain gauges, use 5-10V; for RTDs, use lower voltage to minimize self-heating (<1V for precision). Ratio arm selection: choose R1/R2 ratio to center range. For Rx ≈ 1kΩ, use R1 = R2 = 1kΩ. For wide range, use switched ratio (×1, ×10, ×100). Galvanometer selection: moving-coil galvanometer (µA sensitivity) for manual bridges, op-amp comparator for automatic bridges. Modern: instrumentation amplifier + ADC measures small imbalance. Lead wire compensation: use three-wire or four-wire connection for strain gauges and RTDs to cancel lead resistance. Shielding: in noisy environments, shield bridge circuit and use twisted-pair wiring to reduce electromagnetic interference."
        }
      ]
    }
  },

  "decibel": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select measurement type: Power Ratio or Voltage Ratio.",
        "For power: Enter reference power (P1) and measured power (P2) in watts.",
        "For voltage: Enter reference voltage (V1) and measured voltage (V2) in volts.",
        "Calculator computes gain/attenuation in decibels (dB) and numerical ratio.",
        "Positive dB = gain (amplification), negative dB = attenuation (loss).",
        "Power: dB = 10 × log₁₀(P2/P1), Voltage: dB = 20 × log₁₀(V2/V1).",
        "0 dB means unity (no gain or loss)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Decibel (dB)",
          definition: "Logarithmic unit expressing ratio of two power or voltage levels. Logarithmic scale compresses wide range of values. Positive dB = gain, negative dB = loss. 0 dB = unity (no change). Decibels add when amplifiers cascade: total gain = dB1 + dB2 + dB3."
        },
        {
          term: "Power Ratio (dB)",
          definition: "For power measurements: dB = 10 × log₁₀(P2/P1). Factor of 10 power = 10dB. Factor of 100 power = 20dB. 3dB = 2× power (half power when negative). 10dB = 10× power. Use for RF power, audio power, antenna gain."
        },
        {
          term: "Voltage Ratio (dB)",
          definition: "For voltage measurements: dB = 20 × log₁₀(V2/V1). Factor of 10 voltage = 20dB. Factor of 100 voltage = 40dB. 6dB = 2× voltage (half voltage when negative). 20dB = 10× voltage. Remember: 2× voltage = 4× power (assuming same impedance)."
        },
        {
          term: "Power vs Voltage dB",
          definition: "Power dB uses factor 10, voltage uses factor 20. Why? Power ∝ Voltage². If voltage doubles (6dB), power quadruples (also 6dB). The 10× and 20× factors make power and voltage dB equivalent. Always consistent when impedance constant."
        },
        {
          term: "Absolute dB Units",
          definition: "dBm: power relative to 1 milliwatt (0 dBm = 1mW, 30 dBm = 1W). dBW: power relative to 1 watt. dBV: voltage relative to 1 volt. dBu: voltage relative to 0.775V (audio). dBµV: voltage relative to 1 microvolt (RF). Absolute reference allows comparison."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Decibels",
      sections: [
        {
          title: "Why Use Decibels?",
          content: "Decibels compress huge ranges into manageable numbers. Example: audio amplifier from 1µW to 100W spans 100 million (10⁸) range linearly, but only 80dB logarithmically. Human perception is logarithmic: doubling loudness requires 10× power (10dB). Cascaded systems: when amplifiers/attenuators cascade, their gains multiply (linear), but add in dB (convenient). Circuit analysis: dB allows adding gains instead of multiplying. Example: three 10dB amplifiers give 30dB total gain (1000× linear). Frequency response: Bode plots use log frequency and dB magnitude for clear visualization of amplifier/filter response over wide frequency ranges."
        },
        {
          title: "Common dB Values and Ratios",
          content: "Power ratios: 0 dB = 1× (unity), 3 dB = 2× (double power), 6 dB = 4×, 10 dB = 10×, 20 dB = 100×, 30 dB = 1000×. Negative dB for loss: -3 dB = 1/2 (half power), -10 dB = 1/10, -20 dB = 1/100. Voltage ratios: 0 dB = 1× (unity), 6 dB = 2× (double voltage), 20 dB = 10×, 40 dB = 100×. Key values: 1 dB barely perceptible change, 3 dB = twice/half power (minimally perceptible to humans), 10 dB = subjectively twice as loud, 20 dB = much louder/quieter. Combining equal levels: two equal power sources = +3dB (e.g., two 10W speakers = 13dB total)."
        },
        {
          title: "dB Calculations",
          content: [
            "Power: dB = 10 × log₁₀(P2/P1). Example: 100mW to 1W = 10 × log₁₀(1/0.1) = 10dB gain",
            "Voltage: dB = 20 × log₁₀(V2/V1). Example: 1V to 10V = 20 × log₁₀(10/1) = 20dB gain",
            "Converting dB to ratio: Power ratio = 10^(dB/10). Voltage ratio = 10^(dB/20)",
            "Example: 13dB power gain = 10^(13/10) = 19.95× ≈ 20× power",
            "Example: 26dB voltage gain = 10^(26/20) = 19.95× ≈ 20× voltage",
            "Adding dB: Cascade gain (dB) = Gain1 + Gain2 + ... (in dB)",
            "Overall power ratio = product of individual ratios (in linear)"
          ]
        },
        {
          title: "Absolute dB References",
          content: "dBm (decibels relative to 1 milliwatt): Most common in RF and telecommunications. 0 dBm = 1 mW, 10 dBm = 10 mW, 20 dBm = 100 mW, 30 dBm = 1W. Cell phone transmits at ~23-27 dBm. Wi-Fi router: 15-20 dBm. dBW (relative to 1 watt): 0 dBW = 1W = 30 dBm. Radio transmitters often rated in dBW. dBV (relative to 1 volt): Pro audio standard. 0 dBV = 1V RMS. Consumer line level ≈ -10 dBV. dBu (relative to 0.775V): Audio industry standard. 0 dBu = 0.775V RMS (1mW into 600Ω). Professional line level = +4 dBu. dBFS (Full Scale): Digital audio. 0 dBFS = maximum digital value, all other levels negative."
        },
        {
          title: "dB in Different Applications",
          content: "Audio: Sound pressure level (SPL) measured in dB SPL (reference: 20µPa, threshold of hearing). 0 dB SPL = barely audible, 60 dB SPL = conversation, 90 dB SPL = lawnmower, 120 dB SPL = pain threshold. Dynamic range: difference between loudest and quietest sounds (CD: 96 dB, analog tape: ~60 dB). RF/Wireless: Antenna gain in dBi (relative to isotropic) or dBd (relative to dipole). Path loss in dB = 20×log₁₀(distance) + 20×log₁₀(frequency) + constant. Link budget = Tx power (dBm) + Tx gain (dBi) - path loss (dB) - misc losses (dB) + Rx gain (dBi). Optics: Fiber loss in dB/km. Optical return loss in dB. Typical fiber attenuation: 0.2 dB/km at 1550nm."
        },
        {
          title: "Common Mistakes and Tips",
          content: "Don't confuse power and voltage dB: Use 10×log for power, 20×log for voltage. Mixing them gives wrong answer by factor of 2. Impedance assumption: Voltage dB implies same impedance at input and output. If impedance changes, must use power calculation. Adding dB vs adding power: To combine two equal uncorrelated signals, add 3dB (not double the dB value). Logarithm rules: log(A×B) = log(A) + log(B), so multiplying ratios = adding dB. log(A/B) = log(A) - log(B), so dividing ratios = subtracting dB. Negative dB meaning: Negative dB means attenuation (loss), not negative power. -10dB means 10× reduction, still positive power value. Reference consistency: When using dBm, dBW, dBV, keep reference consistent throughout calculation."
        }
      ]
    }
  },

  "resistor-color-code": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the number of bands (4, 5, or 6) using the band count selector at the top.",
        "For Color to Value: Select the color of each band on your resistor from the dropdown menus.",
        "The calculator displays a live visual representation of the resistor with your selected colors.",
        "The resistance value, tolerance, and acceptable range are calculated automatically.",
        "For 6-band resistors, the temperature coefficient (ppm/°C) is also displayed.",
        "For Value to Color: Choose the target band count, then enter the desired resistance value in ohms.",
        "Select tolerance and (for 6-band) temperature coefficient from the dropdown menus.",
        "The calculator will display the appropriate color bands needed for that resistance value.",
        "Refer to the comprehensive color code reference chart at the bottom for quick reference."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "4-Band Resistors",
          definition: "Standard consumer-grade resistors with 2 significant digits. Format: Digit1-Digit2-Multiplier-Tolerance. Typical tolerances: ±5% (Gold), ±10% (Silver), ±20% (None). Example: Brown-Black-Red-Gold = 10×100 = 1kΩ ±5%."
        },
        {
          term: "5-Band Resistors",
          definition: "Precision resistors with 3 significant digits for more accurate values. Format: Digit1-Digit2-Digit3-Multiplier-Tolerance. Typical tolerances: ±1% (Brown), ±0.5% (Green), ±0.1% (Violet). Example: Brown-Black-Black-Brown-Brown = 100×10 = 1kΩ ±1%."
        },
        {
          term: "6-Band Resistors",
          definition: "High-precision resistors with 3 significant digits plus temperature coefficient. Format: Digit1-Digit2-Digit3-Multiplier-Tolerance-TempCoeff. Used in critical applications requiring thermal stability. Example: Brown-Black-Black-Brown-Brown-Red = 1kΩ ±1% 50ppm/°C."
        },
        {
          term: "Temperature Coefficient (ppm/°C)",
          definition: "Indicates how much the resistance changes per degree Celsius. Measured in parts per million (ppm). Brown=100ppm/°C, Red=50ppm/°C, Orange=15ppm/°C. Lower ppm means better stability across temperature changes. Only present on 6-band resistors."
        },
        {
          term: "Multiplier Band",
          definition: "Determines the magnitude of resistance by powers of 10. Black=×1, Brown=×10, Red=×100, Orange=×1k, Yellow=×10k, Green=×100k, Blue=×1M, Violet=×10M. Gold=×0.1 and Silver=×0.01 for sub-ohm values."
        },
        {
          term: "Tolerance",
          definition: "The acceptable deviation from nominal value. 4-band: Gold=±5%, Silver=±10%, None=±20%. 5/6-band: Brown=±1%, Red=±2%, Green=±0.5%, Blue=±0.25%, Violet=±0.1%, Grey=±0.05%. Precision circuits require tighter tolerances."
        },
        {
          term: "Resistance Value",
          definition: "For 4-band: (D1×10 + D2) × Multiplier. For 5/6-band: (D1×100 + D2×10 + D3) × Multiplier. Displayed in Ω, kΩ, or MΩ automatically. The calculator shows the exact value and its acceptable range based on tolerance."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Resistor Color Codes",
      sections: [
        {
          title: "What is a Resistor Color Code?",
          content: "The resistor color code is a standardized marking system used to indicate the resistance value, tolerance, and sometimes the temperature coefficient of resistors. Since resistors are often too small to print numbers on, colored bands provide a compact, reliable way to encode this information. The system was developed in the 1920s and standardized by the Electronic Industries Alliance (EIA). Three formats exist: 4-band resistors (2 significant digits) for general use, 5-band resistors (3 significant digits) for precision applications, and 6-band resistors (3 digits + temperature coefficient) for critical applications requiring thermal stability."
        },
        {
          title: "How to Read Color Bands",
          content: [
            "Identify the band count: 4-band (common), 5-band (precision), or 6-band (high-precision with temp coefficient)",
            "Hold the resistor so the tolerance band is on the right (usually Gold, Silver, or Brown)",
            "4-Band: Read left to right: Digit1, Digit2, Multiplier, Tolerance",
            "5-Band: Read left to right: Digit1, Digit2, Digit3, Multiplier, Tolerance",
            "6-Band: Read left to right: Digit1, Digit2, Digit3, Multiplier, Tolerance, Temperature Coefficient",
            "The first band often has a wider spacing or the body is asymmetric to indicate orientation",
            "When in doubt, measure with a multimeter to verify the value"
          ]
        },
        {
          title: "Common Resistance Values (E-Series)",
          content: "Resistors are manufactured in standardized value series. E12 series (10% tolerance): 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 (and multiples of 10). E24 series (5% tolerance): Includes E12 plus 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75, 91 (and multiples). E96 series (1% tolerance): 96 standard values between 100 and 976. These values follow logarithmic spacing to provide even coverage across decades. When designing circuits, always use standard E-series values for component availability."
        },
        {
          title: "Practical Applications and Tips",
          content: [
            "Circuit Design: Choose standard E-series values for easy procurement and cost-effectiveness",
            "Troubleshooting: Measure resistors with a multimeter to verify they're within tolerance",
            "Heat Damage: Resistors that have overheated often show discolored or burnt bands",
            "Series/Parallel: Combine standard values to achieve non-standard resistances when needed",
            "Power Rating: Color bands don't indicate power rating - check resistor physical size",
            "Orientation: Some precision resistors have an extra wide band indicating the first band"
          ]
        },
        {
          title: "5-Band and 6-Band Resistors",
          content: "5-band resistors provide three significant digits instead of two, offering more precise values (typically 1% or better tolerance). Reading pattern: 1st digit, 2nd digit, 3rd digit, multiplier, tolerance. Common in precision circuits and instrumentation. 6-band resistors add a temperature coefficient band (in ppm/°C): Brown = 100ppm/°C, Red = 50ppm/°C, Orange = 15ppm/°C, Yellow = 25ppm/°C. Military-grade resistors often use 6 bands. Example: Brown-Black-Black-Brown-Brown-Red = 100Ω ±1% 50ppm/°C."
        },
        {
          title: "Special Cases and Exceptions",
          content: "Zero-ohm resistors (jumpers): Single black band, used as PCB jumpers for automated assembly. High-value resistors (>10MΩ): Often use non-standard color combinations or printed values. Surface-mount resistors: Use numerical codes (e.g., 103 = 10×10³ = 10kΩ) instead of color bands. Fusible resistors: May have special markings indicating their current rating. Wirewound resistors: Often have printed values due to their larger size. When in doubt, always verify with a multimeter."
        },
        {
          title: "Common Mistakes to Avoid",
          content: [
            "Reading bands from the wrong end - tolerance band should be on the right (usually Gold/Silver)",
            "Confusing Brown and Red under poor lighting - use bright light and magnification if needed",
            "Assuming all 4-band resistors are 5% tolerance - older ones may be 10% or 20%",
            "Ignoring tolerance in critical circuits - use 1% resistors where precision matters",
            "Not accounting for power rating - small resistors typically 1/4W, larger ones 1/2W or more",
            "Trusting color codes on damaged resistors - heat can change band colors",
            "Mixing up Orange (3) and Yellow (4) - they can look similar in some lighting"
          ]
        },
        {
          title: "Memory Aids and Mnemonics",
          content: "Many technicians use mnemonics to remember the color sequence. Popular ones include: 'Big Brown Rabbits Often Yield Great Big Vegetables Growing Wild' (Black-Brown-Red-Orange-Yellow-Green-Blue-Violet-Grey-White). Or: 'Better Be Right Or Your Great Big Venture Goes Wrong'. The key is: Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9. For tolerance: Gold=5%, Silver=10%, None=20%. Practice reading various resistors to build muscle memory."
        }
      ]
    }
  },

  "wire-gauge": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Choose your conversion direction: From AWG or From Diameter.",
        "For AWG to metric: Enter the AWG number (e.g., 12, 14, 18) and click Calculate.",
        "For diameter to AWG: Enter the wire diameter in inches and click Find Closest AWG.",
        "The calculator displays AWG, diameter (in/mm), cross-sectional area (kcmil/mm²), and resistance (Ω/kft and Ω/km).",
        "All values are for bare copper wire at 20°C (68°F).",
        "Use the Reset button to clear all inputs and start over."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "AWG (American Wire Gauge)",
          definition: "A standardized wire gauge system used in North America. Smaller AWG numbers indicate thicker wires. AWG 0000 (4/0) is the thickest common size, while AWG 40 is very thin. Common building wire sizes: 14, 12, 10 AWG."
        },
        {
          term: "Wire Diameter",
          definition: "The physical diameter of the bare conductor (without insulation). Given in both inches (imperial) and millimeters (metric). For example, 12 AWG = 0.0808 inches = 2.053 mm. Insulation adds thickness beyond this."
        },
        {
          term: "Cross-Sectional Area",
          definition: "The area of the wire's circular cross-section. Measured in kcmil (thousand circular mils) or mm². Directly affects current capacity and resistance. Area = π × (diameter/2)². Larger area = lower resistance, higher current capacity."
        },
        {
          term: "kcmil (Thousand Circular Mils)",
          definition: "Traditional imperial unit for wire area. 1 circular mil = area of a circle 1 mil (0.001 inch) in diameter. 1 kcmil = 1000 circular mils = 0.5067 mm². Used primarily in North American electrical codes."
        },
        {
          term: "Wire Resistance (Ω/kft or Ω/km)",
          definition: "DC resistance per unit length at 20°C. Important for voltage drop calculations. Lower AWG (thicker wire) = lower resistance. Copper resistivity: 1.68×10⁻⁸ Ω·m. Resistance increases ~0.4% per °C for copper."
        },
        {
          term: "AWG Number Progression",
          definition: "Every 3 AWG steps doubles the area and halves the resistance. Every 10 AWG steps multiplies area by 10. For example: 10 AWG has twice the area of 13 AWG, and 10 times the area of 20 AWG."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Wire Gauge Systems",
      sections: [
        {
          title: "What is AWG?",
          content: "The American Wire Gauge (AWG) system is a logarithmic stepped standardized wire gauge system used since 1857, primarily in North America, for the diameters of round, solid, nonferrous, electrically conducting wire. Originating in the number of drawing operations used to produce a given gauge of wire, the AWG system has an inverse relationship: as gauge numbers increase, wire diameter decreases. This system allows for precise specification of wire sizes in electrical and electronic applications."
        },
        {
          title: "AWG Number System",
          content: "The AWG system uses whole numbers and aught (0) sizes. Common sizes range from 0000 (4/0, pronounced 'four-ought') to 40 AWG. Building wire typically uses 14-10 AWG. Electronics use 22-30 AWG. The gauge number derives from the number of drawing dies originally required to produce the wire. The mathematical relationship: diameter decreases by a factor of 92^(1/39) ≈ 1.1229 for each gauge increment."
        },
        {
          title: "Common Wire Sizes and Applications",
          content: [
            "14 AWG: 15A circuits, lighting, outlets (residential minimum for power circuits)",
            "12 AWG: 20A circuits, kitchen appliances, bathrooms (most common residential)",
            "10 AWG: 30A circuits, electric water heaters, central AC units",
            "8 AWG: 40-50A circuits, electric ranges, large AC units",
            "6 AWG: 55-65A circuits, large appliances, sub-panels",
            "4 AWG: 70-85A circuits, electric vehicle chargers, sub-panels",
            "2 AWG: 95-115A circuits, service entrance cables",
            "1/0 AWG: 150A+ circuits, main service panels, large motors"
          ]
        },
        {
          title: "Metric vs. Imperial Systems",
          content: "While AWG dominates in North America, most of the world uses metric wire sizing based on cross-sectional area in mm². Common metric sizes: 1.5mm² ≈ 15 AWG, 2.5mm² ≈ 13 AWG, 4mm² ≈ 11 AWG, 6mm² ≈ 9 AWG, 10mm² ≈ 7 AWG. The conversion: Area(mm²) = 0.5067 × Area(kcmil). Metric sizing directly indicates current capacity, while AWG requires lookup tables. Both systems use copper or aluminum conductors with similar properties."
        },
        {
          title: "Resistance and Conductivity",
          content: "Wire resistance is inversely proportional to cross-sectional area. Doubling the area (going down 3 AWG numbers) halves the resistance. Copper has resistivity of 1.68×10⁻⁸ Ω·m at 20°C. Temperature coefficient is +0.393%/°C, meaning resistance increases with temperature. Aluminum has 61% of copper's conductivity, requiring larger wire for same current. Resistance formula: R = ρ × L / A, where ρ = resistivity, L = length, A = area. High resistance causes voltage drop and heat generation."
        },
        {
          title: "Practical Considerations",
          content: [
            "Stranded vs Solid: Same AWG, but stranded is more flexible, solid carries slightly more current",
            "Insulation: Adds diameter, common types: THHN, THWN, XHHW rated for different temperatures",
            "Current Capacity: Depends on insulation temperature rating (60°C, 75°C, 90°C)",
            "Derating: Multiple conductors in conduit require derating (typically 80% for 4-6 wires)",
            "Voltage Drop: NEC recommends max 3% drop for branch circuits, 5% total including feeders",
            "Material: Copper is standard, aluminum used for large feeders (lighter, cheaper, requires special terminations)",
            "Cost vs Performance: Oversizing wire reduces voltage drop and heat, improving efficiency and safety"
          ]
        },
        {
          title: "AWG Selection Guidelines",
          content: "Select wire gauge based on: 1) Current capacity (ampacity) - must exceed circuit breaker rating with derating factors applied. 2) Voltage drop - calculate for total circuit length, keep under 3% for optimal performance. 3) Mechanical strength - larger wire more durable for permanent installations. 4) Future expansion - oversizing allows circuit upgrades without rewiring. 5) Code compliance - NEC Table 310.16 provides minimum sizes. 6) Cost optimization - balance initial cost vs long-term efficiency. Always consult local electrical codes and qualified electricians for installations."
        },
        {
          title: "Common Mistakes and Misconceptions",
          content: [
            "Confusing AWG with wire count - AWG is not the number of strands in stranded wire",
            "Assuming bigger numbers mean thicker wire - opposite is true in AWG system",
            "Ignoring temperature effects - wire ampacity decreases at higher ambient temperatures",
            "Overlooking voltage drop - long wire runs need larger gauges than short runs",
            "Mixing copper and aluminum - requires special anti-oxidant compounds and compatible connectors",
            "Using residential wire for automotive - automotive uses different sizing (metric or AWG with different insulation)",
            "Ignoring insulation rating - 60°C wire can't carry same current as 90°C wire of same gauge"
          ]
        }
      ]
    }
  },

  "wire-current-capacity": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the wire gauge (AWG) from the dropdown menu (14 AWG to 4/0 AWG).",
        "Choose the installation method: Conduit/Raceway, Chassis Wiring, or Open Air.",
        "Click Calculate Ampacity to see the maximum safe current for the selected configuration.",
        "The results show max current, installation type, and any derating factors applied.",
        "Values are based on NEC Table 310.16 for 75°C copper conductors.",
        "For continuous loads, use only 80% of the displayed ampacity."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Ampacity",
          definition: "The maximum current a conductor can carry continuously under specified conditions without exceeding its temperature rating. Measured in amperes (A). Depends on wire gauge, insulation temperature rating, installation method, and ambient temperature."
        },
        {
          term: "Installation Method",
          definition: "How the wire is installed affects cooling and ampacity. Conduit/Raceway (lowest ampacity due to limited cooling), Chassis/Cable (moderate), Open Air/Free Air (highest due to maximum cooling). Multiple conductors in conduit require additional derating."
        },
        {
          term: "Temperature Rating",
          definition: "Maximum operating temperature of wire insulation. Common ratings: 60°C (140°F), 75°C (167°F), 90°C (194°F). Higher-rated insulation allows higher ampacity. THHN/THWN rated 90°C, but connections often limit to 75°C, so 75°C ampacity typically used."
        },
        {
          term: "Derating Factor",
          definition: "Reduction in ampacity due to multiple conductors bundled together. NEC requires 80% derating for 4-6 current-carrying conductors, 70% for 7-9, 50% for 10-20. Neutral and ground wires don't always count as current-carrying."
        },
        {
          term: "Continuous Load",
          definition: "Load expected to operate for 3+ hours continuously. NEC requires conductor ampacity be at least 125% of continuous load (or use only 80% of conductor ampacity). Circuit breaker must also be sized for 125% of continuous load."
        },
        {
          term: "Ambient Temperature",
          definition: "Surrounding air temperature. Standard ampacity tables assume 30°C (86°F). Higher ambient temperatures require further derating. For every 10°C above 30°C, reduce ampacity by approximately 5-10% depending on insulation type."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Wire Current Capacity",
      sections: [
        {
          title: "Understanding Ampacity",
          content: "Ampacity is the maximum current a conductor can carry continuously without exceeding its insulation temperature rating. When current flows through wire, I²R losses generate heat. If heat generation exceeds heat dissipation, temperature rises. Excessive temperature degrades insulation, shortens wire life, and creates fire hazards. Ampacity accounts for wire size (larger = more current), material (copper vs aluminum), insulation rating (60°C, 75°C, 90°C), installation method (conduit vs open air), ambient temperature, and number of conductors bundled together."
        },
        {
          title: "NEC Ampacity Tables",
          content: "The National Electrical Code (NEC) provides standardized ampacity tables. Table 310.16 covers most common applications: conductors rated 0-2000V in raceway, cable, or direct burial. Assumes 3 current-carrying conductors and 30°C ambient temperature. Table 310.17 covers single insulated conductors in free air (higher ampacity due to better cooling). Table 310.15(B)(2) provides adjustment factors for more than 3 conductors. Always use tables appropriate for your specific installation and verify with local codes."
        },
        {
          title: "Temperature Considerations",
          content: [
            "Insulation Rating: Determines max operating temperature (60°C, 75°C, 90°C common)",
            "Ambient Temperature: Higher ambient = lower ampacity (use correction factors from NEC 310.15(B)(2)(a))",
            "Termination Limits: Equipment terminals often rated 60°C or 75°C even with 90°C wire",
            "Use 75°C column: Most practical for general wiring (matches terminal ratings)",
            "Correction Example: 12 AWG THWN copper in 40°C ambient: 25A × 0.88 = 22A",
            "Heat Buildup: Bundled conductors in conduit trap heat, requiring derating",
            "Continuous vs Non-continuous: Continuous loads generate more sustained heat"
          ]
        },
        {
          title: "Installation Method Impact",
          content: "Wire cooling depends on installation. Free air installation (single conductor openly suspended) allows maximum cooling - highest ampacity. Cable assemblies (Romex, MC cable) have moderate cooling. Conduit/raceway installation (multiple conductors in enclosed space) has poorest cooling - lowest ampacity. The difference can be substantial: 12 AWG copper has 25A in conduit, 30A in cable, 35A in free air (75°C rating). Underground direct burial similar to conduit. Overhead spans and aerial cables get better cooling but need mechanical strength consideration."
        },
        {
          title: "Derating for Multiple Conductors",
          content: "When multiple current-carrying conductors share an enclosure (conduit, cable, or raceway), they must be derated per NEC 310.15(B)(3)(a). 1-3 conductors: No derating (100%). 4-6 conductors: 80% derating. 7-9 conductors: 70% derating. 10-20 conductors: 50% derating. 21-30 conductors: 45% derating. 31-40 conductors: 40% derating. Example: Four 12 AWG in conduit: 25A × 0.80 = 20A each. Note: Neutral conductors carrying only imbalanced current and equipment grounding conductors don't count. Balanced 3-phase circuits have reduced neutral current."
        },
        {
          title: "Practical Application Examples",
          content: [
            "20A kitchen circuit: 12 AWG minimum (25A > 20A), allows 80% = 16A continuous",
            "30A dryer circuit: 10 AWG (35A > 30A), typical 240V installation",
            "50A range circuit: 6 AWG (65A > 50A), 240V with neutral",
            "100A sub-panel feeder: 1 AWG aluminum or 2/0 copper, includes derating for conduit",
            "200A service entrance: 2/0 AWG copper or 4/0 aluminum typical",
            "EV charger 40A: 8 AWG (50A × 0.8 = 40A continuous rating)",
            "Always verify local codes and consult licensed electrician for installations"
          ]
        },
        {
          title: "Safety and Code Compliance",
          content: "Never exceed wire ampacity - causes overheating, insulation failure, and fire risk. Circuit breaker/fuse must protect wire: breaker rating ≤ wire ampacity (with derating applied). Exception: Motor circuits have special rules per NEC 430. Continuous loads require 125% safety factor. Use 75°C ampacity column even with 90°C wire unless terminals rated higher. Ambient temperature corrections are mandatory above 30°C. Document all derating calculations for inspector review. When in doubt, oversize wire - safer and reduces voltage drop. Regular inspections detect overheated connections (discolored insulation, burnt smell). Ground fault protection essential in wet locations."
        },
        {
          title: "Common Mistakes",
          content: [
            "Using 90°C ampacity with 75°C-rated terminals - can overheat connections",
            "Forgetting to derate for multiple conductors in conduit",
            "Ignoring ambient temperature above 30°C in hot climates or attics",
            "Not accounting for continuous loads (must use 125% rule)",
            "Assuming aluminum and copper have same ampacity (aluminum needs larger gauge)",
            "Using residential ampacity tables for commercial/industrial applications",
            "Neglecting voltage drop in long wire runs (ampacity OK but excessive voltage drop)",
            "Mixing wire gauges in same circuit without proper splice protection"
          ]
        }
      ]
    }
  },

  "voltage-drop": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select Single Phase or Three Phase depending on your circuit type.",
        "Enter the system voltage (e.g., 120V, 240V, 480V).",
        "Enter the load current in amperes (A).",
        "Enter the one-way wire length in feet (distance from source to load).",
        "Select the wire gauge (AWG) you're using or planning to use.",
        "Click Calculate to see voltage drop, percentage drop, and voltage at load.",
        "If voltage drop exceeds 3%, consider using larger wire gauge."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Voltage Drop (V)",
          definition: "The reduction in voltage as current flows through wire resistance. Calculated as Vd = 2 × I × R × L / 1000 (single-phase) or Vd = √3 × I × R × L / 1000 (three-phase), where I=current, R=resistance/kft, L=length. Larger voltage drop = more energy wasted as heat."
        },
        {
          term: "Percentage Voltage Drop",
          definition: "Voltage drop expressed as percentage of source voltage: %Vd = (Vdrop / Vsource) × 100. NEC recommends max 3% for branch circuits, 2% for feeders (5% total). Excessive drop causes dim lights, motor overheating, equipment malfunction."
        },
        {
          term: "Voltage at Load",
          definition: "Actual voltage delivered to the load after accounting for wire losses: Vload = Vsource - Vdrop. Equipment rated for specific voltages (e.g., 120V ±10%) may malfunction if voltage too low. Motors draw higher current at lower voltage, increasing heat."
        },
        {
          term: "Wire Resistance (Ω/kft)",
          definition: "DC resistance per 1000 feet at 75°C. Resistance = ρ × L / A, where ρ=resistivity, L=length, A=area. Smaller AWG = higher resistance = more voltage drop. Aluminum has 1.63× resistance of copper for same gauge."
        },
        {
          term: "Single-Phase Voltage Drop",
          definition: "Uses factor of 2 because current flows out and back (two conductors). Formula: Vd = 2 × I × R × L / 1000. Typical for 120V and 240V residential circuits. Both hot wires contribute to voltage drop in 240V single-phase."
        },
        {
          term: "Three-Phase Voltage Drop",
          definition: "Uses factor of √3 ≈ 1.732 for balanced three-phase loads. Formula: Vd = 1.732 × I × R × L / 1000. Line-to-line voltage drop in balanced systems. Neutral carries minimal current in balanced loads, so mainly affects phase conductors."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Voltage Drop Calculations",
      sections: [
        {
          title: "Why Voltage Drop Matters",
          content: "Voltage drop is the reduction in voltage as current flows through wire resistance. All conductors have resistance that causes energy loss as heat (P = I²R). This reduces voltage available to equipment. Consequences: Lights dim and flicker. Motors run hot, draw excess current, and fail prematurely. Heaters produce less heat. Electronics malfunction or shut down. Energy wasted in wiring (higher utility bills). Excessive voltage drop violates electrical codes and creates safety hazards. Proper wire sizing minimizes these issues."
        },
        {
          title: "NEC Voltage Drop Guidelines",
          content: "The National Electrical Code (NEC) provides voltage drop recommendations in FPN (Fine Print Notes) 210.19(A) and 215.2(A)(1). These are recommendations, not mandatory requirements, but following them ensures proper equipment operation. Branch circuits (outlets, lights): Maximum 3% voltage drop. Feeders (sub-panels): Maximum 2% voltage drop. Combined feeder + branch: Maximum 5% total. Critical loads (medical, emergency): Often require 1-2% maximum. Some local codes make these mandatory. Calculate worst-case: maximum current at maximum distance. Size wire to stay under limits even at peak load."
        },
        {
          title: "Voltage Drop Formulas Explained",
          content: [
            "Single-Phase: Vd = 2 × I × R × L / 1000 (factor 2 for out-and-back path)",
            "Three-Phase: Vd = √3 × I × R × L / 1000 (factor 1.732 for balanced loads)",
            "Where: I = current (A), R = resistance (Ω/kft), L = one-way length (ft)",
            "Resistance calculation: R = ρ × L / A (ρ=resistivity, L=length, A=area)",
            "Copper resistivity: 1.68×10⁻⁸ Ω·m at 20°C (increases 0.4%/°C)",
            "Alternative formula: Vd = (2 × ρ × I × L) / (1000 × A) for any material",
            "Percentage: %Vd = (Vd / Vsource) × 100"
          ]
        },
        {
          title: "Factors Affecting Voltage Drop",
          content: "Wire gauge: Thicker wire (lower AWG) = lower resistance = less voltage drop. Length: Voltage drop doubles if length doubles (linear relationship). Current: Voltage drop doubles if current doubles (linear relationship). Material: Aluminum has 63% of copper's conductivity, needs larger gauge. Temperature: Resistance increases with temperature (~0.4%/°C for copper). Power factor: AC circuits with poor power factor have higher effective voltage drop. Harmonics: Non-linear loads create additional losses not captured by simple formulas. Connections: Poor terminations add resistance and voltage drop."
        },
        {
          title: "Practical Wire Sizing for Voltage Drop",
          content: "Step 1: Determine maximum current (nameplate rating or NEC Article 430 for motors). Step 2: Measure or estimate wire run length (one-way distance). Step 3: Select acceptable voltage drop (typically 3% for branch, 2% for feeder). Step 4: Calculate maximum allowed resistance: R = (Vd_max × 1000) / (2 × I × L) for single-phase. Step 5: Select wire gauge with resistance ≤ calculated value from wire resistance tables. Step 6: Verify ampacity meets or exceeds circuit requirements. Step 7: If ampacity requires larger wire than voltage drop calculation, use larger gauge. Always round up to next larger gauge for safety margin."
        },
        {
          title: "Real-World Examples",
          content: [
            "Example 1: 120V, 15A circuit, 75ft run: Vd = 2×15×1.93×75/1000 = 4.34V = 3.62% (use 10 AWG to reduce below 3%)",
            "Example 2: 240V, 30A circuit, 150ft: With 10 AWG (1.21 Ω/kft): Vd = 2×30×1.21×150/1000 = 10.89V = 4.54% → use 8 AWG",
            "Example 3: 480V 3-phase, 50A, 200ft: With 6 AWG (0.491 Ω/kft): Vd = 1.732×50×0.491×200/1000 = 8.50V = 1.77% ✓",
            "Example 4: 120V LED lights, 8A continuous, 120ft: Target 2% = 2.4V. R_max = 2.4×1000/(2×8×120) = 1.25 Ω/kft → use 10 AWG",
            "Always verify calculations with local code requirements and qualified electrician"
          ]
        },
        {
          title: "Special Considerations",
          content: "Motor circuits: Starting current can be 6-8× running current, but voltage drop calculated at running current per NEC. LED lighting: Low current means smaller wire OK for ampacity, but voltage drop still important for dimming and color consistency. Low-voltage systems (12V, 24V): Voltage drop is critical - even 1V drop is significant. Use much larger wire than ampacity requires. Long runs: Consider higher supply voltage (e.g., 240V instead of 120V) to halve current and reduce voltage drop. Parallel circuits: Splitting load across multiple circuits reduces current per wire. Temperature: Hot environments (attics, outdoors in summer) increase resistance ~20-30% above room temperature. Aluminum wire: Requires 1-2 AWG sizes larger than copper for same voltage drop."
        },
        {
          title: "Common Mistakes",
          content: [
            "Using round-trip length instead of one-way length (formula already accounts for return path)",
            "Forgetting the √3 factor for three-phase calculations",
            "Ignoring voltage drop when wire ampacity seems adequate",
            "Not accounting for simultaneous loads in multi-outlet circuits",
            "Using wrong resistance values (must match temperature rating: 60°C, 75°C, or 90°C)",
            "Calculating at nominal voltage instead of worst-case (utility ±5% tolerance)",
            "Neglecting motor starting voltage drop (can cause contactors to drop out)",
            "Using DC formulas for AC circuits with significant inductance/capacitance"
          ]
        }
      ]
    }
  },

  "wire-resistance": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the wire material from the dropdown (Copper, Aluminum, Silver, or Gold).",
        "Enter the wire length and select the unit (m, ft, cm, or mm).",
        "Enter the wire diameter and select the unit (mm, cm, or in).",
        "Click Calculate Resistance to compute the DC resistance.",
        "Results show resistance in ohms (Ω) or milliohms (mΩ), material, and cross-sectional area.",
        "All calculations are at 20°C (68°F) - resistance increases with temperature."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Wire Resistance (R)",
          definition: "Opposition to current flow in a conductor. Calculated using R = ρ × L / A, where ρ=resistivity, L=length, A=cross-sectional area. Measured in ohms (Ω) or milliohms (mΩ). Lower resistance = better conductivity = less power loss."
        },
        {
          term: "Resistivity (ρ)",
          definition: "Material property indicating how strongly it resists current flow. Measured in ohm-meters (Ω·m). At 20°C: Copper=1.68×10⁻⁸, Aluminum=2.82×10⁻⁸, Silver=1.59×10⁻⁸, Gold=2.44×10⁻⁸ Ω·m. Lower resistivity = better conductor. Temperature dependent - increases with heat."
        },
        {
          term: "Cross-Sectional Area (A)",
          definition: "Area of the wire's circular cross-section perpendicular to current flow. Calculated as A = π × (d/2)², where d=diameter. Larger area = lower resistance. Doubling area halves resistance. Measured in mm² or kcmil (circular mils)."
        },
        {
          term: "Wire Length (L)",
          definition: "Total conductor length through which current flows. Resistance increases linearly with length: double length = double resistance. For round-trip (out and back), total length = 2 × one-way distance. Measured in meters, feet, or other length units."
        },
        {
          term: "Temperature Coefficient",
          definition: "Rate at which resistance changes with temperature. For copper: α = 0.00393/°C (0.393%/°C increase). R_T = R_20 × [1 + α(T - 20°C)]. At 75°C, copper resistance is ~20% higher than at 20°C. Critical for accurate ampacity and voltage drop calculations."
        },
        {
          term: "Material Comparison",
          definition: "Relative conductivity: Silver (best, 105%), Copper (standard, 100%), Gold (73%), Aluminum (61%). Copper is standard due to cost/performance balance. Aluminum lighter and cheaper but requires 1.63× cross-section for same resistance. Silver used in critical RF applications."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Wire Resistance",
      sections: [
        {
          title: "Understanding Electrical Resistance",
          content: "Electrical resistance is the opposition to current flow in a conductor. When electrons flow through a wire, they collide with atoms in the crystal lattice, losing energy as heat. This opposition is quantified as resistance (R), measured in ohms (Ω). Resistance depends on four factors: Material (conductors like copper, semiconductors like silicon, insulators like rubber). Length (longer wire = more resistance). Cross-sectional area (thicker wire = less resistance). Temperature (hotter wire = more resistance for metals). Ohm's Law relates resistance to voltage and current: V = I × R."
        },
        {
          title: "The Resistance Formula: R = ρ × L / A",
          content: "This fundamental formula calculates wire resistance from material properties and dimensions. ρ (rho) = resistivity in Ω·m (material constant at given temperature). L = length in meters (total conductor path). A = cross-sectional area in m² (perpendicular to current flow). Derivation: Resistance is proportional to length (R ∝ L) because more material means more electron collisions. Resistance is inversely proportional to area (R ∝ 1/A) because larger area provides more parallel paths for current. Resistivity is the proportionality constant that makes the equation exact: R = ρL/A. Example: 10m of copper wire, 1mm diameter: A = π(0.5mm)² = 0.785mm² = 7.85×10⁻⁷m². R = 1.68×10⁻⁸ × 10 / 7.85×10⁻⁷ = 0.214Ω."
        },
        {
          title: "Material Resistivity Values",
          content: [
            "Silver: 1.59×10⁻⁸ Ω·m (lowest, best conductor, expensive - used in critical applications)",
            "Copper: 1.68×10⁻⁸ Ω·m (industry standard - excellent conductivity, moderate cost)",
            "Gold: 2.44×10⁻⁸ Ω·m (corrosion resistant - used in contacts and connectors)",
            "Aluminum: 2.82×10⁻⁸ Ω·m (61% of copper's conductivity - lighter, cheaper, larger wire needed)",
            "Tungsten: 5.6×10⁻⁸ Ω·m (high resistance - used in incandescent bulb filaments)",
            "Iron: 1.0×10⁻⁷ Ω·m (poor conductor - used for structural, not electrical)",
            "All values at 20°C (68°F) - resistivity increases with temperature for metals"
          ]
        },
        {
          title: "Temperature Effects on Resistance",
          content: "Resistance of metallic conductors increases with temperature due to increased atomic vibration. The relationship is approximately linear over normal operating ranges: R_T = R_20 × [1 + α(T - 20°C)], where α = temperature coefficient. For copper: α = 0.00393/°C (0.393% increase per °C). Example: 1Ω copper wire at 20°C becomes 1.22Ω at 75°C (typical operating temperature). For aluminum: α = 0.00403/°C (slightly higher than copper). Practical impact: Wire ampacity tables specify resistance at 75°C, not 20°C. Voltage drop calculations should use operating temperature, not room temperature. Temperature rise from current flow increases resistance, which increases heat, creating positive feedback. Thermal runaway can occur if heat generation exceeds dissipation."
        },
        {
          title: "Practical Wire Resistance Examples",
          content: [
            "12 AWG copper wire: 1.93 Ω/kft at 75°C, 0.0063 Ω/m. 100ft run = 0.193Ω",
            "10 AWG copper wire: 1.21 Ω/kft at 75°C, 0.00397 Ω/m. Carries 30A, 100ft drop = 5.8V",
            "4/0 AWG copper: 0.0482 Ω/kft at 75°C. Heavy feeder cable, very low resistance",
            "Same gauge aluminum: 1.63× copper resistance. 10 AWG aluminum = 1.97 Ω/kft",
            "Speaker wire 18 AWG: 6.5 Ω/kft. 50ft run = 0.325Ω. For 8Ω speaker, adds 4% to impedance",
            "Car battery cable 2 AWG: 0.16 Ω/kft. 6ft total = 0.001Ω. Minimal drop at high current",
            "Ethernet CAT6 24 AWG: 28.5 Ω/kft. 300ft = 8.55Ω. PoE limited by resistance and heat"
          ]
        },
        {
          title: "Copper vs Aluminum Wiring",
          content: "Copper has been the standard conductor for over a century, but aluminum gained popularity in the 1960s-70s due to lower cost and weight. Conductivity: Aluminum is 61% as conductive as copper - requires 1.6× the cross-sectional area for same current. Weight: Aluminum is 30% the weight of copper - important for overhead power lines and aircraft. Cost: Aluminum typically 25-50% cheaper than copper (fluctuates with commodity prices). Connections: Aluminum requires special anti-oxidant compounds and AL-rated connectors. Aluminum oxide is insulating and increases resistance at connections. Thermal expansion: Aluminum expands/contracts 30% more than copper - loosens connections over time. Building codes: Aluminum wiring in homes (1960s-70s) now recognized fire hazard. Requires specialized connectors (CO/ALR rated) and periodic inspection. Modern use: Aluminum used for large feeders, service entrances, and utility transmission where weight and cost matter more than space."
        },
        {
          title: "Resistance in AC Circuits",
          content: "This calculator computes DC resistance (R). AC circuits have additional complexity: Skin Effect: At high frequencies, current concentrates near conductor surface, effectively reducing cross-sectional area and increasing resistance. Significant above 10 kHz. 60 Hz power frequency has minimal skin effect for building wire sizes. Proximity Effect: AC current in parallel conductors creates magnetic fields that concentrate current on facing sides, increasing resistance. Important in large conductor bundles. Impedance: AC circuits have impedance Z = √(R² + X²), where X is reactance from inductance and capacitance. At power frequencies (50-60 Hz), resistance dominates for wire runs under 1000ft. Stranded wire: For same AWG, stranded has slightly higher DC resistance than solid, but better AC performance due to reduced skin effect and increased flexibility. Use DC resistance for: Voltage drop calculations at power frequencies (50-60 Hz). Ampacity calculations. Short wire runs (< 1000ft). Resistive heating calculations."
        },
        {
          title: "Common Mistakes and Misconceptions",
          content: [
            "Using room temperature (20°C) resistance instead of operating temperature (75°C) - actual resistance 20% higher",
            "Assuming thicker insulation means thicker conductor - insulation adds no conductivity",
            "Confusing AWG number with wire diameter - lower AWG = thicker wire (counterintuitive)",
            "Ignoring strand count - 19-strand and 37-strand same AWG have slightly different resistance",
            "Using one-way length for round-trip circuit - total resistance = 2 × one-way",
            "Comparing copper and aluminum without area adjustment - must account for 61% conductivity",
            "Neglecting temperature rise from current flow - operating temp > ambient temp",
            "Assuming wire resistance is negligible - even short runs have measurable drop at high current",
            "Using DC formulas for high-frequency AC - skin effect significant above 10 kHz"
          ]
        }
      ]
    }
  },

  "conduit-fill": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the conduit type: EMT (Electrical Metallic Tubing), PVC (Schedule 40), or Rigid Metal Conduit.",
        "Select the conduit size from 1/2\" to 4\" nominal diameter.",
        "Select the wire gauge (AWG) including insulation that will be installed.",
        "Click Calculate Fill to see the maximum number of conductors allowed.",
        "Results show max conductor count, fill percentage, conduit area, and wire area.",
        "Values based on NEC Chapter 9, Table 1 (40% fill for 3+ conductors)."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Maximum Conductors",
          definition: "Maximum number of current-carrying conductors allowed in conduit per NEC fill limits. Based on 40% maximum fill for 3+ wires, 31% for 2 wires, 53% for 1 wire. Ground wires count toward fill. Neutrals carrying current count. Bare ground wires still count but use different tables."
        },
        {
          term: "Fill Percentage",
          definition: "Percentage of conduit internal area occupied by conductor insulation. NEC limits: 53% for 1 conductor, 31% for 2 conductors, 40% for 3+ conductors. Limits prevent heat buildup and ensure wires can be pulled without damage. Higher fill = harder to pull, more heat, increased ampacity derating."
        },
        {
          term: "Conduit Internal Area",
          definition: "Usable cross-sectional area inside conduit. Varies by conduit type due to wall thickness: EMT (thin wall), PVC (medium), Rigid (thick wall). Measured in square inches. Larger conduit = more area = more conductors. NEC Chapter 9, Table 4 provides exact areas."
        },
        {
          term: "Conductor Area",
          definition: "Cross-sectional area of insulated conductor including insulation thickness. Larger than bare conductor area. Depends on wire gauge and insulation type (THHN/THWN). NEC Chapter 9, Table 5 lists areas for each conductor type. Same AWG can have different areas depending on insulation."
        },
        {
          term: "Conduit Types",
          definition: "EMT: Thin-wall, most interior space, lightweight, most common. PVC Schedule 40: Corrosion-proof, underground/wet locations, moderate wall thickness. Rigid Metal: Heavy-duty, thickest wall, least interior space, outdoor/industrial. IMC (Intermediate Metal): Between EMT and Rigid. Each has different fill capacity."
        },
        {
          term: "NEC Fill Requirements",
          definition: "National Electrical Code Chapter 9 governs conduit fill. Table 1: Maximum fill percentages (40% standard). Table 4: Conduit dimensions and areas. Table 5: Conductor areas with insulation. Annex C: Complete fill tables for common combinations. Local codes may have additional restrictions."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Conduit Fill Calculations",
      sections: [
        {
          title: "Why Conduit Fill Matters",
          content: "Conduit fill limits exist for three critical reasons: Heat dissipation - Tightly packed conductors trap heat, reducing ampacity. Overheating causes insulation failure and fire hazards. Wire pulling - Overfilled conduits make pulling wire difficult or impossible, damaging insulation during installation. Jam factors - Beyond certain fill, wires jam and cannot be pulled. Code compliance - Exceeding fill limits violates NEC, fails inspections, and creates liability. The 40% fill limit balances these factors, allowing sufficient space for cooling, reasonable pulling effort, and some future expansion. Different fill limits (53%, 31%, 40%) account for the number of conductors and their interaction."
        },
        {
          title: "NEC Chapter 9 Fill Rules",
          content: "NEC Chapter 9 provides comprehensive conduit fill requirements. Table 1 specifies maximum fill percentages based on conductor count: 1 conductor: 53% fill allowed (most space for cooling single conductor). 2 conductors: 31% fill allowed (ensures sufficient spacing). 3+ conductors: 40% fill allowed (standard installations). These limits apply to the cross-sectional area, not linear length. Table 4 lists conduit dimensions: internal diameter, usable area for each conduit type and size. Table 5 lists conductor dimensions: area including insulation for each wire type and size. Annex C provides complete fill tables: pre-calculated maximum conductors for common combinations, eliminating manual calculation for standard installations."
        },
        {
          title: "Conduit Types and Internal Areas",
          content: [
            "EMT (Electrical Metallic Tubing): Thin wall, lightweight, most common residential/commercial. 1/2\" EMT: 0.304 in² area. 3/4\" EMT: 0.533 in². 1\" EMT: 0.864 in². Most interior space per size.",
            "PVC Schedule 40: Plastic, corrosion-proof, underground and wet locations. 1/2\" PVC: 0.285 in². 3/4\" PVC: 0.508 in². Less area than EMT due to thicker walls.",
            "Rigid Metal Conduit: Heavy-duty, outdoor/industrial, thick walls. 1/2\" Rigid: 0.314 in². Least interior area but strongest protection.",
            "IMC (Intermediate Metal Conduit): Between EMT and Rigid in wall thickness. PVC Schedule 80: Thicker than Schedule 40, for harsh environments.",
            "Flexible conduit: Special rules apply, generally avoid for long runs due to increased pulling difficulty."
          ]
        },
        {
          title: "Conductor Area with Insulation",
          content: "Conductor area includes wire metal plus insulation. NEC Table 5 lists areas for various insulation types. THHN/THWN: Most common, compact insulation, 90°C rating. XHHW: Cross-linked polyethylene, moisture-resistant, 90°C wet/75°C dry. TW: Older thermoplastic, 60°C rating, larger area than THHN. THW: Moisture-resistant thermoplastic, 75°C rating. Example 12 AWG: Bare copper = 0.0081 in². THHN insulated = 0.0133 in² (64% larger due to insulation). Stranded vs Solid: Same AWG stranded slightly larger area due to interstices between strands. Compact strand: Special construction, slightly smaller than standard strand. Always use areas from NEC Table 5 for fill calculations, not bare conductor area."
        },
        {
          title: "Calculating Maximum Fill",
          content: "Step-by-step calculation: 1) Determine number of conductors (3+ for typical circuits). 2) Find maximum fill percentage: 40% for 3+ wires, 31% for 2, 53% for 1. 3) Look up conduit internal area from NEC Table 4 for your conduit type and size. 4) Calculate maximum fill area: Max Area = Conduit Area × Fill Percentage. 5) Look up conductor area from NEC Table 5 for your wire type and gauge. 6) Calculate maximum conductors: Max Count = Max Area / Conductor Area (round down). Example: 3/4\" EMT, 12 AWG THHN, 6 conductors. Conduit area = 0.533 in². Max fill = 0.533 × 0.40 = 0.213 in². Conductor area = 0.0133 in². Max conductors = 0.213 / 0.0133 = 16 wires. 6 conductors OK ✓. Or use Annex C Table C.1 for pre-calculated values: Shows 16 conductors allowed."
        },
        {
          title: "Special Considerations and Exceptions",
          content: [
            "Equipment Grounding Conductors: Count toward fill using Table 5 dimensions. Bare ground can use Table 8 (smaller area).",
            "Neutral Conductors: Must count if carrying current. Balanced 3-phase neutrals carrying only imbalance may have reduced count rules.",
            "Control and Signal Wires: Count normally, use their insulation type from Table 5.",
            "Nipples (< 24\"): May exceed normal fill if conductors don't exceed 60% fill. Short runs reduce heat buildup.",
            "Splices and Taps: Not allowed in conduit (except junction boxes). Conduit is for through-conductors only.",
            "Mixed Wire Sizes: Add up individual areas. Can mix 12 AWG and 10 AWG if total area < 40% fill.",
            "Derating for Fill: If more than 3 current-carrying conductors, ampacity must be derated per NEC 310.15(B)(3)(a).",
            "Cable Assemblies in Conduit: Romex, MC cable generally not allowed in conduit. Use individual THHN conductors."
          ]
        },
        {
          title: "Practical Examples and Applications",
          content: "Example 1: Residential 20A circuit: 3 conductors (2 hot, 1 ground) 12 AWG THHN in 1/2\" EMT. Conductor area = 0.0133 in² × 3 = 0.0399 in². Conduit area (31% for 2 current-carrying) = 0.304 × 0.31 = 0.094 in². 0.0399 < 0.094 ✓ OK (could fit up to 7). Example 2: Commercial sub-panel feeder: 4 conductors (3 phase + neutral) 2 AWG THHN in 1-1/4\" EMT. Conductor area = 0.1158 in² × 4 = 0.463 in². Conduit area (40%) = 1.496 × 0.40 = 0.598 in². 0.463 < 0.598 ✓ OK. Example 3: Multiple circuits in one conduit: Eight 12 AWG THHN (four circuits: 4 hot, 4 neutral) in 3/4\" EMT. Total area = 8 × 0.0133 = 0.106 in². Max fill = 0.533 × 0.40 = 0.213 in². 0.106 < 0.213 ✓ OK. But must derate ampacity: 7-9 conductors = 70% derating. Example 4: Home run to panel: Six 12 AWG (3 circuits) + three 12 AWG grounds in 1\" EMT. 9 conductors × 0.0133 = 0.120 in². Max fill = 0.864 × 0.40 = 0.346 in². 0.120 < 0.346 ✓ OK."
        },
        {
          title: "Common Mistakes and Best Practices",
          content: [
            "Mistake: Using bare conductor area instead of insulated area - significantly underestimates fill",
            "Mistake: Forgetting to count ground wires - they contribute to fill even if not current-carrying",
            "Mistake: Using 40% fill for 1-2 conductors - must use 53% for 1, 31% for 2",
            "Mistake: Exceeding fill thinking 'it's close enough' - fails inspection, makes pulling impossible",
            "Mistake: Not accounting for derating - 4+ conductors require ampacity reduction",
            "Mistake: Mixing different insulation types without checking - TW larger than THHN",
            "Best Practice: Use Annex C tables when possible - eliminates calculation errors",
            "Best Practice: Size up conduit if close to limit - easier pulling, allows future additions",
            "Best Practice: Pull rope/tape through before pulling wire - confirms conduit clear",
            "Best Practice: Use wire pulling lubricant - reduces friction, prevents insulation damage",
            "Best Practice: Limit bends to 360° total between boxes - prevents jamming",
            "Best Practice: Document conduit fill - helps future electricians with additions"
          ]
        }
      ]
    }
  },
  
  // Power System Calculators
  "power-factor-correction": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the real power (kW) of your electrical load.",
        "Input the current power factor (typically 0.6-0.9 for uncorrected systems).",
        "Enter the target power factor you want to achieve (typically 0.95 or higher).",
        "Specify the line voltage and frequency of your system.",
        "Click 'Calculate Capacitor Size' to determine the required capacitor bank rating."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Required Capacitance (µF)",
          definition: "The capacitance value needed for power factor correction. This is the actual capacitor size you need to install, measured in microfarads."
        },
        {
          term: "Capacitor kVAR Rating",
          definition: "The reactive power rating of the capacitor bank, measured in kilovolt-amperes reactive (kVAR). This is how capacitors are typically rated and purchased."
        },
        {
          term: "Reactive Power Reduction",
          definition: "The amount of reactive power that will be eliminated from the system by the capacitor. This reduces current draw and improves system efficiency."
        },
        {
          term: "Power Factor",
          definition: "The ratio of real power to apparent power (cos φ). A power factor of 1.0 (unity) is ideal, meaning all power is doing useful work. Lower values indicate wasted energy."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Power Factor Correction",
      sections: [
        {
          title: "Why Power Factor Correction Matters",
          content: "Poor power factor forces electrical systems to draw more current to deliver the same real power. This excess current: 1) Increases I²R losses in wiring, transformers, and switchgear, wasting energy as heat. 2) Requires larger conductors, transformers, and protection devices, increasing installation costs. 3) Often triggers utility penalty charges - many utilities bill extra for power factor below 0.90-0.95. 4) Reduces system capacity - low power factor means less available capacity for productive loads. Power factor correction using capacitors eliminates these issues by supplying reactive power locally instead of drawing it from the utility."
        },
        {
          title: "How Capacitors Improve Power Factor",
          content: "Inductive loads (motors, transformers, fluorescent lights) require reactive power to create magnetic fields. This reactive power oscillates back and forth between source and load, doing no useful work but increasing current. Capacitors store energy in electric fields and naturally produce reactive power opposite to inductors. When installed in parallel with inductive loads, capacitors: 1) Supply the reactive power locally, so it doesn't flow through the distribution system. 2) Cancel the inductive reactive power (lagging) with capacitive reactive power (leading). 3) Reduce total current while maintaining the same real power. The result: improved power factor (approaching 1.0), reduced current, lower losses, and often lower utility bills."
        },
        {
          title: "Calculating Required Capacitor Size",
          content: "The calculation involves: 1) Determine current reactive power: Q₁ = P × tan(cos⁻¹(PF_current)). 2) Determine target reactive power: Q₂ = P × tan(cos⁻¹(PF_target)). 3) Calculate reactive power to be supplied by capacitor: Qc = Q₁ - Q₂. 4) Convert to capacitance: C = Qc / (2πfV²). Where P is real power (kW), PF is power factor, f is frequency (Hz), V is line voltage (V). The capacitor kVAR rating equals Qc. For example, improving a 100kW load from 0.70 to 0.95 PF at 480V, 60Hz requires approximately 71 kVAR capacitance."
        },
        {
          title: "Practical Implementation",
          content: [
            "Automatic Power Factor Controllers: Monitor PF continuously, switch capacitor banks on/off as needed. Best for varying loads.",
            "Fixed Capacitors: Simple, economical for constant loads. Size for full-load conditions to avoid over-correction.",
            "Individual Correction: Install capacitors at each major motor/load. Corrects PF at source, maximum benefit.",
            "Group Correction: Single capacitor bank for multiple similar loads. More economical than individual correction.",
            "Central Correction: Capacitor bank at main service entrance. Simplest installation, benefits entire facility.",
            "Never Over-Correct: Leading power factor (capacitive) can cause voltage rise, resonance, and equipment damage."
          ]
        },
        {
          title: "Common Mistakes and Best Practices",
          content: [
            "Mistake: Over-correcting to leading power factor - causes voltage rise, can damage equipment and trigger penalties",
            "Mistake: Installing capacitors without harmonic analysis - can create resonance with non-linear loads (VFDs, computers)",
            "Mistake: Not protecting capacitors with fuses - capacitor failures can be catastrophic without protection",
            "Mistake: Correcting lightly loaded motors - causes high voltage at motor terminals, insulation stress",
            "Best Practice: Target 0.95-0.98 PF, not 1.0 - leaves margin for load variation, avoids leading PF",
            "Best Practice: Use reactors (5-7%) with capacitors in harmonic environments - prevents resonance",
            "Best Practice: Install discharge resistors - safely bleeds capacitor charge after disconnection",
            "Best Practice: Monitor temperature - excessive heat indicates harmonics or overload"
          ]
        }
      ]
    }
  },
  "kva-to-kw": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the apparent power in kilovolt-amperes (kVA).",
        "Input the power factor (cos φ) of your system or load.",
        "Click 'Convert to kW' to calculate the real power.",
        "View results including kW, kVAR, and phase angle."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Real Power (kW)",
          definition: "The actual power consumed by the load that does useful work, measured in kilowatts. This is the power you pay for in your electricity bill."
        },
        {
          term: "Apparent Power (kVA)",
          definition: "The total power in an AC circuit, combining both real and reactive power. Measured in kilovolt-amperes. Equipment like transformers and generators are rated in kVA."
        },
        {
          term: "Reactive Power (kVAR)",
          definition: "The power that oscillates between source and load, creating magnetic fields in motors and transformers. Measured in kilovolt-amperes reactive. Does no useful work but necessary for AC equipment."
        },
        {
          term: "Power Factor (cos φ)",
          definition: "The ratio of real power to apparent power. Ranges from 0 to 1. Higher is better (1.0 is ideal). Indicates how effectively electrical power is being used."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to kVA and kW",
      sections: [
        {
          title: "The Difference Between kVA and kW",
          content: "kVA (apparent power) and kW (real power) are both measures of power but represent different aspects. kW is the actual power that performs work - running motors, heating elements, lighting. It's what meters measure and utilities bill. kVA is the total power the electrical system must handle, including both useful (kW) and non-useful reactive power (kVAR). Equipment like transformers, generators, and wiring must be sized for kVA, not just kW, because they handle the total current. The relationship: kVA = kW / power factor. For example, a 100kW load with 0.8 power factor requires 125kVA capacity (100/0.8=125)."
        },
        {
          title: "Power Factor and the Power Triangle",
          content: "Power factor is the cosine of the phase angle between voltage and current. In a power triangle: kVA is the hypotenuse (apparent power), kW is the adjacent side (real power), kVAR is the opposite side (reactive power). They relate by: kVA² = kW² + kVAR². Power factor = kW / kVA = cos φ. A power factor of 1.0 means all power is real (purely resistive load). Power factor less than 1.0 means reactive power is present (inductive or capacitive loads). Typical power factors: Resistive heaters: 1.0, Incandescent lights: 1.0, Fluorescent lights: 0.85-0.95 (with ballast), Induction motors: 0.7-0.9 (lower when lightly loaded), Transformers: 0.95-0.98."
        },
        {
          title: "Why Equipment is Rated in kVA",
          content: "Transformers, generators, and UPS systems are rated in kVA rather than kW because: 1) They must handle the total current (related to kVA), not just the real power current. 2) The load power factor is unknown during equipment design - could be 0.6 or 0.95 depending on application. 3) kVA rating indicates maximum current and voltage product the equipment can safely handle. 4) Heat dissipation depends on total current (kVA), not just real power. A 100kVA transformer can supply 100kW at unity power factor (PF=1.0), but only 80kW at 0.8 power factor. The kVA rating is the limit, regardless of load power factor."
        },
        {
          title: "Practical Applications",
          content: [
            "Generator Sizing: Select generator kVA > load kVA. If load is 75kW at 0.85 PF, need 88kVA generator (75/0.85=88).",
            "Transformer Selection: Size transformer for kVA demand, not just kW. Include future expansion and power factor.",
            "Utility Bills: Utilities meter kWh (energy) but may charge for low power factor or excessive kVA demand.",
            "Electrical Design: Circuit breakers, conductors sized for current related to kVA, not kW. 100kW at 0.7 PF draws more current than 100kW at 0.95 PF.",
            "Power Factor Penalties: Utilities charge extra if power factor < 0.90-0.95. Improving PF reduces kVA draw and penalties."
          ]
        },
        {
          title: "Common Mistakes and Best Practices",
          content: [
            "Mistake: Sizing generator/transformer for kW only - leads to overload when power factor is low",
            "Mistake: Assuming power factor is always 1.0 - most real loads have PF between 0.7-0.95",
            "Mistake: Confusing energy (kWh) with power (kW, kVA) - kWh is energy over time, kW and kVA are instantaneous",
            "Mistake: Ignoring power factor when calculating current - current depends on kVA, not kW",
            "Best Practice: Measure actual power factor before sizing equipment - don't assume typical values",
            "Best Practice: Include safety margin - size equipment 15-25% above calculated kVA requirement",
            "Best Practice: Improve power factor when possible - reduces kVA demand, saves on utility charges",
            "Best Practice: Use kVA for equipment ratings, kW for energy consumption and billing"
          ]
        }
      ]
    }
  },
  "kw-to-kva": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the real power in kilowatts (kW).",
        "Input the power factor (cos φ) of your system or load.",
        "Click 'Convert to kVA' to calculate the apparent power.",
        "View results including kVA, kVAR, and phase angle."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Apparent Power (kVA)",
          definition: "The total power in an AC circuit, combining real and reactive power. This determines the size of transformers, generators, and conductors needed."
        },
        {
          term: "Real Power (kW)",
          definition: "The useful power that performs actual work. This is what you pay for in electricity bills and what meters typically measure."
        },
        {
          term: "Reactive Power (kVAR)",
          definition: "The oscillating power that creates magnetic/electric fields in reactive components. Necessary for motors and transformers but does no productive work."
        },
        {
          term: "Phase Angle (φ)",
          definition: "The angular difference between voltage and current waveforms, measured in degrees. Related to power factor by cos φ. Zero degrees means unity power factor (ideal)."
        }
      ]
    },
    guide: {
      title: "Converting kW to kVA",
      sections: [
        {
          title: "When to Convert kW to kVA",
          content: "Converting kW to kVA is necessary when: 1) Sizing generators - Generator nameplates show kVA rating, but loads are often specified in kW. 2) Selecting transformers - Transformers rated in kVA must handle the total power, not just real power. 3) Planning electrical systems - Switchgear, cables, and protection devices must be sized for kVA (current). 4) Calculating current - I = kVA / (V × √3) for 3-phase, current depends on kVA not kW. 5) Understanding utility bills - Some utilities charge demand based on kVA, especially for large commercial/industrial customers."
        },
        {
          title: "The Conversion Formula",
          content: "To convert kW to kVA: kVA = kW / power factor. For example: 80kW load with 0.8 power factor requires 100kVA (80/0.8=100). Lower power factor means higher kVA requirement for same kW. At PF=1.0: kVA = kW (ideal, resistive loads). At PF=0.9: kVA = 1.11 × kW (typical good industrial). At PF=0.8: kVA = 1.25 × kW (typical uncorrected industrial). At PF=0.7: kVA = 1.43 × kW (poor, lightly loaded motors). The reactive power is calculated as: kVAR = kW × tan φ = kW × tan(cos⁻¹(PF))."
        },
        {
          title: "Impact of Power Factor",
          content: "Power factor dramatically affects kVA requirements. Consider a 100kW load: At PF = 1.00: Requires 100.0 kVA, 0 kVAR. At PF = 0.95: Requires 105.3 kVA, 32.9 kVAR. At PF = 0.90: Requires 111.1 kVA, 48.4 kVAR. At PF = 0.85: Requires 117.6 kVA, 62.0 kVAR. At PF = 0.80: Requires 125.0 kVA, 75.0 kVAR. At PF = 0.70: Requires 142.9 kVA, 102.0 kVAR. A drop from 0.95 to 0.70 power factor increases kVA requirement by 36%, meaning 36% more current flow, larger equipment, and higher costs."
        },
        {
          title: "Equipment Sizing Guidelines",
          content: [
            "Generators: Size for peak kVA demand with 20-25% safety margin. Account for starting currents (motors draw 6x running current).",
            "Transformers: Size for continuous kVA load plus 25% growth margin. Consider harmonic derating (10-20%) for non-linear loads.",
            "UPS Systems: Size for kVA, not kW. UPS may be kVA-limited even if kW capacity remains. Check both kVA and kW ratings.",
            "Cables and Breakers: Size for current, which relates to kVA. Higher kVA means higher current for same voltage.",
            "Power Factor Correction: Installing capacitors reduces kVA for given kW, allowing smaller equipment or adding load capacity."
          ]
        },
        {
          title: "Common Applications and Examples",
          content: [
            "Example 1: Industrial facility needs 500kW power, PF = 0.85. Required kVA = 500/0.85 = 588kVA. Select 600kVA transformer for 2% margin.",
            "Example 2: Data center 200kW IT load, PF = 0.95 (modern power supplies). Required UPS = 200/0.95 = 211kVA. Select 225kVA UPS.",
            "Example 3: Motor load 75kW, PF = 0.82. Generator needed = 75/0.82 = 91kVA. Add 25% for starting current and safety = 114kVA generator.",
            "Example 4: After installing capacitors, 100kW load improved from PF = 0.75 to 0.95. Before: 133kVA. After: 105kVA. Freed up 28kVA capacity for new loads.",
            "Example 5: Utility demand charge: 250kW load, PF = 0.70. kVA demand = 357kVA. Improving to 0.95 reduces demand to 263kVA, saving on monthly charges."
          ]
        }
      ]
    }
  },
  "single-phase-power": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the voltage (V) of your single-phase system (typically 120V or 230V).",
        "Input the current (A) drawn by the load.",
        "Enter the power factor (cos φ) if known, or use typical values.",
        "Click 'Calculate Power' to compute all power values.",
        "View real power (kW), apparent power (kVA), reactive power (kVAR), and phase angle."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Real Power (kW)",
          definition: "The actual power consumed that does useful work, measured in kilowatts. In single-phase: P = V × I × cos φ / 1000."
        },
        {
          term: "Apparent Power (kVA)",
          definition: "The total power including both real and reactive components. In single-phase: S = V × I / 1000. Equipment must be sized for this value."
        },
        {
          term: "Reactive Power (kVAR)",
          definition: "The power that oscillates between source and load, creating magnetic or electric fields. In single-phase: Q = V × I × sin φ / 1000."
        },
        {
          term: "Phase Angle (φ)",
          definition: "The angular difference between voltage and current. Zero for resistive loads, positive for inductive (motors), negative for capacitive."
        }
      ]
    },
    guide: {
      title: "Single-Phase Power Systems",
      sections: [
        {
          title: "Single-Phase Power Basics",
          content: "Single-phase AC power is the most common form of electrical power for residential and small commercial applications. It uses two wires: one hot (line) and one neutral, with voltage oscillating sinusoidally at 50Hz or 60Hz. In North America: 120V for lighting and outlets, 240V for large appliances (dryers, AC, electric ranges). In Europe/Asia: 230V standard for most applications. Single-phase power calculations use three fundamental formulas: Apparent Power (S) = V × I (the total power, in VA or kVA). Real Power (P) = V × I × cos φ (useful power, in W or kW). Reactive Power (Q) = V × I × sin φ (oscillating power, in VAR or kVAR)."
        },
        {
          title: "Power Triangle Relationships",
          content: "The three types of power form a right triangle: S (apparent power) is the hypotenuse. P (real power) is the adjacent side. Q (reactive power) is the opposite side. Relationships: S² = P² + Q². Power factor = P / S = cos φ. tan φ = Q / P. For example, a 10A load at 230V with 0.85 power factor: S = 230 × 10 = 2300 VA = 2.3 kVA. P = 2300 × 0.85 = 1955 W = 1.96 kW. Q = 2300 × sin(cos⁻¹(0.85)) = 2300 × 0.527 = 1212 VAR = 1.21 kVAR. Phase angle φ = cos⁻¹(0.85) = 31.8°."
        },
        {
          title: "Common Single-Phase Loads",
          content: [
            "Resistive Loads (PF ≈ 1.0): Incandescent lights, electric heaters, toasters. Current in phase with voltage. All power is real power (kW = kVA).",
            "Inductive Loads (PF = 0.6-0.9): Motors (pumps, compressors, fans), transformers, fluorescent lights. Current lags voltage. Significant reactive power.",
            "Capacitive Loads (PF leading): Rare in single-phase, mostly in power factor correction. Current leads voltage. Negative reactive power.",
            "Non-Linear Loads (distorted waveforms): LED drivers, computer power supplies, electronics. True power factor includes displacement and distortion factors."
          ]
        },
        {
          title: "Calculating Current and Voltage Drop",
          content: "Current calculation from power: I = P / (V × PF) for known real power. I = S / V for known apparent power. For example: 1500W load at 120V, PF=0.9: I = 1500 / (120 × 0.9) = 13.9A. Same load as apparent power: S = 1500 / 0.9 = 1667 VA. I = 1667 / 120 = 13.9A (same result). Voltage drop in conductors: Vd = 2 × I × R × L / 1000 (for single-phase). Where R is resistance in Ω/kft, L is one-way length in ft. For 13.9A over 100ft using 14AWG (2.525 Ω/kft): Vd = 2 × 13.9 × 2.525 × 100 / 1000 = 7.0V drop. Voltage at load = 120 - 7.0 = 113V (5.8% drop, acceptable for lighting, marginal for motors)."
        },
        {
          title: "Practical Examples",
          content: [
            "Example 1: 1500W space heater at 120V. PF=1.0 (resistive). I = 1500/120 = 12.5A. S = P = 1.5kW = 1.5kVA. Q = 0. Use 15A circuit.",
            "Example 2: 1/2 HP motor (373W) at 120V, PF=0.75. I = 373/(120×0.75) = 4.1A. S = 0.50kVA. Q = 0.33kVAR. φ = 41.4°.",
            "Example 3: Residential AC unit 4000W at 240V, PF=0.88. I = 4000/(240×0.88) = 18.9A. S = 4.55kVA. Q = 2.16kVAR. Use 20A breaker.",
            "Example 4: LED light 18W at 120V, PF=0.90 (driver). I = 18/(120×0.90) = 0.17A. S = 20VA. Q = 8.8VAR.",
            "Example 5: Combined load: 10×100W lamps + 1HP motor. Lamps: 1000W, PF=1.0. Motor: 746W, PF=0.80. Total P = 1746W. Total kVA and current calculated by complex sum of individual S values."
          ]
        }
      ]
    }
  },
  "apparent-power": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the real power (kW) - the useful power consumed by the load.",
        "Input the reactive power (kVAR) - the oscillating power in the system.",
        "Click 'Calculate Apparent Power' to compute total power and power factor.",
        "View results including apparent power (kVA), power factor, and phase angle."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Apparent Power (S)",
          definition: "The vector sum of real and reactive power, measured in kVA. This is the total power the electrical system must supply and represents the capacity required."
        },
        {
          term: "Real Power (P)",
          definition: "The component of power that does actual work, measured in kW. This is the power converted to mechanical work, heat, light, or other useful forms."
        },
        {
          term: "Reactive Power (Q)",
          definition: "The component of power stored and returned by reactive elements (inductors and capacitors), measured in kVAR. Essential for magnetic fields in motors and transformers."
        },
        {
          term: "Power Factor",
          definition: "The ratio P/S, indicating how effectively power is used. Values range from 0 to 1, with 1.0 being ideal (all power is useful). Calculated as cos φ."
        }
      ]
    },
    guide: {
      title: "Understanding Apparent Power",
      sections: [
        {
          title: "What is Apparent Power?",
          content: "Apparent power (S) represents the total power in an AC circuit, combining both the real power that does work and the reactive power that cycles between source and load. Unlike DC circuits where power is simply voltage × current, AC circuits with reactive loads (motors, transformers) have power that oscillates without doing useful work. Apparent power accounts for this: S = √(P² + Q²), where P is real power (kW) and Q is reactive power (kVAR). The unit kVA (kilovolt-ampere) distinguishes it from real power (kW). Equipment like transformers, generators, cables, and switchgear must be sized based on kVA because they must handle the total current, not just the component doing useful work."
        },
        {
          title: "The Power Triangle",
          content: "The relationship between P, Q, and S forms a right triangle called the power triangle: The hypotenuse is S (apparent power) in kVA. The horizontal leg is P (real/active power) in kW. The vertical leg is Q (reactive power) in kVAR. The angle φ between S and P represents the phase angle between voltage and current. By Pythagorean theorem: S² = P² + Q². Power factor = P/S = cos φ (ranges 0 to 1). Reactive factor = Q/S = sin φ. Tan φ = Q/P. For example: P=80kW, Q=60kVAR → S=√(80²+60²)=100kVA, PF=80/100=0.80, φ=36.87°."
        },
        {
          title: "Why Apparent Power Matters",
          content: "Apparent power determines system capacity requirements: Current magnitude: I = S/(V√3) for three-phase or I=S/V for single-phase. Higher S means higher current, requiring larger conductors. Equipment sizing: Transformers, generators, UPS rated in kVA must provide full S, not just P. A 100kVA transformer handles 100kW only at unity PF (PF=1.0). Losses: I²R losses in conductors, transformers depend on current (S), not just useful power (P). Higher S means higher losses. Utility charges: Some utilities bill for kVA demand or penalize low power factor because infrastructure must handle S. System capacity: A 1000kVA service can supply 1000kW at PF=1.0 but only 800kW at PF=0.8. Poor power factor wastes capacity."
        },
        {
          title: "Improving Power Factor to Reduce kVA",
          content: [
            "Power factor correction reduces S without changing P. Example: 100kW load, PF=0.70 → S=143kVA. After adding 51kVAR capacitors to improve PF to 0.95 → S=105kVA. Benefit: 38kVA (27%) reduction in apparent power.",
            "Benefits of PF correction: Reduced current draw (-27% in example above). Lower I²R losses in cables and transformers. Increased system capacity (38kVA freed for additional loads). Reduced utility demand charges and PF penalties.",
            "Optimal target PF: Typically 0.95-0.98 for commercial/industrial. Not 1.0 - leaves margin for load variations. Avoid leading PF (over-correction) - causes problems.",
            "Methods: Capacitor banks (most common), Synchronous condensers (large industrial), Adjusting motor loading (operate motors near rated load)."
          ]
        },
        {
          title: "Calculating Apparent Power in Different Scenarios",
          content: [
            "Scenario 1 - From P and Q: Given 75kW real power, 100kVAR reactive power. S = √(75² + 100²) = 125kVA. PF = 75/125 = 0.60 (poor).",
            "Scenario 2 - From P and PF: Given 200kW real power, PF=0.92. S = P/PF = 200/0.92 = 217kVA. Q = √(S² - P²) = √(217² - 200²) = 85kVAR.",
            "Scenario 3 - From V and I (single-phase): Measured 240V, 50A. S = V×I = 240×50 = 12,000VA = 12kVA. If PF=0.85: P=10.2kW, Q=6.3kVAR.",
            "Scenario 4 - From V and I (three-phase): Measured 480V line, 100A. S = √3×V×I = 1.732×480×100 = 83.1kVA. If PF=0.88: P=73.1kW, Q=39.3kVAR.",
            "Scenario 5 - Combined loads: Motor 50kW @ 0.80 PF (62.5kVA, 37.5kVAR) + Heater 30kW @ 1.0 PF (30kVA, 0kVAR). Total P=80kW, Q=37.5kVAR. Combined S=√(80²+37.5²)=88.5kVA, PF=0.90."
          ]
        }
      ]
    }
  },
  "reactive-power": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the apparent power (kVA) from equipment nameplate or measurement.",
        "Input the real power (kW) actually consumed by the load.",
        "Ensure real power is less than or equal to apparent power.",
        "Click 'Calculate Reactive Power' to compute reactive power and power factor.",
        "View results including reactive power (kVAR), power factor, and phase angle."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Reactive Power (Q)",
          definition: "The power that oscillates between source and load without doing useful work, measured in kVAR. Necessary for creating magnetic fields in motors and transformers."
        },
        {
          term: "Apparent Power (S)",
          definition: "The total power that must be supplied by the electrical system, measured in kVA. The vector sum of real and reactive power: S = √(P² + Q²)."
        },
        {
          term: "Real Power (P)",
          definition: "The power that performs actual work and is converted to other forms of energy, measured in kW. This is what you pay for on your electric bill."
        },
        {
          term: "Phase Angle (φ)",
          definition: "The angular displacement between voltage and current waveforms. Calculated as φ = cos⁻¹(P/S). Larger angles indicate more reactive power and lower power factor."
        }
      ]
    },
    guide: {
      title: "Understanding Reactive Power",
      sections: [
        {
          title: "What is Reactive Power?",
          content: "Reactive power is the portion of AC power that flows back and forth between the source and load without being converted to useful work. Unlike real power (kW) which is consumed and converted to heat, light, or mechanical work, reactive power (kVAR) is alternately stored in the magnetic fields of inductors (motors, transformers) or electric fields of capacitors, then returned to the source. This power is essential for the operation of AC equipment but does not register on energy meters (kWh) because no net energy is transferred over a complete cycle. However, reactive power causes real current to flow in the conductors, creating I²R losses and requiring larger equipment. Formula: Q = √(S² - P²) or Q = P × tan φ or Q = V × I × sin φ."
        },
        {
          title: "Sources of Reactive Power",
          content: "Inductive loads (lagging, positive Q): AC motors are the primary source - they need reactive power to create rotating magnetic fields. Especially high when motors run lightly loaded or during starting. Transformers require reactive power for magnetizing current, typically 2-5% of rating. Reactors and inductors in filters, ballasts, control circuits. Inductive loads cause current to lag voltage by angle φ. Capacitive loads (leading, negative Q): Power factor correction capacitors supply reactive power locally. Lightly loaded cables and transmission lines (capacitive charging current). Synchronous motors can be overexcited to generate reactive power (synchronous condenser). Capacitive loads cause current to lead voltage. Balance: Ideal system has equal inductive and capacitive reactive power, canceling to near-zero net reactive power and unity power factor."
        },
        {
          title: "Impact of Reactive Power",
          content: "Reactive power has several negative impacts on electrical systems: Increased current: For given real power P, higher Q means higher total current I = S/V where S = √(P²+Q²). Example: 100kW load, Q=0 → I=217A at 480V. Same load, Q=100kVAR → I=307A (41% more current). Higher losses: I²R losses increase with square of current. 41% current increase → 99% loss increase. Wasted capacity: Transformers, cables, switchgear sized for kVA (includes reactive power). High Q reduces useful capacity. Voltage drop: Higher current causes more voltage drop: ΔV = I×R. Low voltage affects equipment performance. Utility penalties: Many utilities charge for excessive reactive power or low power factor. Some have minimum PF requirements (0.90-0.95). Equipment rating reduction: Generators, UPS may be kVA-limited before reaching kW rating due to reactive power."
        },
        {
          title: "Managing and Minimizing Reactive Power",
          content: [
            "Capacitor Banks: Install capacitors to supply reactive power locally. Capacitors have negative Q (leading), canceling inductive Q (lagging). Size capacitors for kVAR reduction needed. Example: 100kW motor at PF=0.70 has 102kVAR. Adding 70kVAR capacitors improves PF to 0.95, leaving only 32kVAR from utility.",
            "Motor Loading: Operate motors near their rated load. Lightly loaded motors have very poor PF (high reactive power demand). A motor at 25% load might have PF=0.50 vs PF=0.85 at 75% load. Size motors appropriately - don't use oversized motors.",
            "Synchronous Motors: Can generate reactive power when overexcited. Useful for large installations. Can be adjusted to control PF continuously.",
            "Efficient Transformers: Modern transformers have lower magnetizing current, reducing reactive power draw. Energy-efficient transformers pay off through lower losses and reactive power.",
            "Power Quality Equipment: Active harmonic filters can provide reactive power correction along with harmonic mitigation. Static VAR compensators (SVC) for dynamic reactive power control in large facilities."
          ]
        },
        {
          title: "Calculating Reactive Power",
          content: [
            "Method 1 - From S and P: Q = √(S² - P²). Example: 100kVA transformer, 85kW load. Q = √(100² - 85²) = 52.7kVAR. PF = 85/100 = 0.85.",
            "Method 2 - From P and PF: First find S = P/PF. Then Q = √(S² - P²). Example: 60kW load, PF=0.75. S = 60/0.75 = 80kVA. Q = √(80² - 60²) = 53kVAR.",
            "Method 3 - From P and φ: Q = P × tan φ where φ = cos⁻¹(PF). Example: 120kW, PF=0.90. φ = cos⁻¹(0.90) = 25.84°. Q = 120 × tan(25.84°) = 58.1kVAR.",
            "Method 4 - From V, I, and PF (single-phase): S = V×I, P = S×PF, Q = √(S² - P²). Example: 240V, 30A, PF=0.82. S = 7.2kVA, P = 5.9kW, Q = 4.1kVAR.",
            "Method 5 - Capacitor kVAR for PF correction: Qc = P(tan φ₁ - tan φ₂). Example: 200kW from PF=0.75 to 0.95. Qc = 200(tan(cos⁻¹(0.75)) - tan(cos⁻¹(0.95))) = 200(0.882-0.329) = 111kVAR capacitor needed."
          ]
        }
      ]
    }
  },
  "power-triangle": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select calculation method: From P & Q, From P & S, or From Q & S.",
        "Enter the two known power values based on your selection.",
        "Click 'Calculate Power Triangle' to compute all values.",
        "View complete power triangle with real, reactive, and apparent power.",
        "See power factor and phase angle relationships."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Power Triangle",
          definition: "A graphical representation showing the relationship between real power (P), reactive power (Q), and apparent power (S) as a right triangle. The angle φ represents the phase difference between voltage and current."
        },
        {
          term: "Real Power (P) - Horizontal",
          definition: "The useful power component (adjacent side of triangle), measured in kW. This is the power that does actual work and is what energy meters measure."
        },
        {
          term: "Reactive Power (Q) - Vertical",
          definition: "The oscillating power component (opposite side of triangle), measured in kVAR. Positive for inductive loads (lagging), negative for capacitive loads (leading)."
        },
        {
          term: "Apparent Power (S) - Hypotenuse",
          definition: "The total power (hypotenuse of triangle), measured in kVA. This is what equipment like transformers and generators must be sized to provide: S = √(P² + Q²)."
        }
      ]
    },
    guide: {
      title: "The Power Triangle Explained",
      sections: [
        {
          title: "Understanding the Power Triangle",
          content: "The power triangle is a fundamental concept in AC power systems that visually represents the relationship between three types of power. Imagine a right triangle: The horizontal leg (adjacent) represents real power P (kW) - the useful power doing work. The vertical leg (opposite) represents reactive power Q (kVAR) - the oscillating power. The hypotenuse represents apparent power S (kVA) - the total power the system must supply. The angle φ between the horizontal (P) and hypotenuse (S) is the phase angle - the lag between voltage and current waveforms. Mathematical relationships: S² = P² + Q² (Pythagorean theorem). cos φ = P/S (power factor). sin φ = Q/S (reactive factor). tan φ = Q/P."
        },
        {
          title: "Power Triangle for Different Loads",
          content: "Different types of loads create different power triangle shapes: Purely Resistive (heaters, incandescent lights): Q = 0, φ = 0°, PF = 1.0. Triangle collapses to horizontal line. S = P, all power is useful. Highly Inductive (lightly loaded motors): Large Q, φ = 60°+, PF < 0.6. Tall triangle. Much reactive power needed. Typical Inductive (motors at rated load): Moderate Q, φ = 25-35°, PF = 0.85-0.90. Balanced triangle. Most industrial loads. Corrected with Capacitors: Small Q, φ = 18°, PF = 0.95. Flat triangle. Small reactive component. Capacitive (over-corrected): Negative Q, φ negative, PF leading. Triangle below horizontal. Avoid this condition."
        },
        {
          title: "Solving the Power Triangle",
          content: "Given any two values from P, Q, S, or φ (PF), you can solve for all others: Scenario 1 - Know P and Q: S = √(P² + Q²). PF = P/S. φ = tan⁻¹(Q/P). Example: P=60kW, Q=45kVAR → S=75kVA, PF=0.80, φ=36.87°. Scenario 2 - Know P and S: Q = √(S² - P²). PF = P/S. φ = cos⁻¹(P/S). Example: P=85kW, S=100kVA → Q=52.7kVAR, PF=0.85, φ=31.79°. Scenario 3 - Know Q and S: P = √(S² - Q²). PF = P/S. φ = sin⁻¹(Q/S). Example: Q=60kVAR, S=100kVA → P=80kW, PF=0.80, φ=36.87°. Scenario 4 - Know P and PF: S = P/PF. Q = P × tan(cos⁻¹(PF)). φ = cos⁻¹(PF). Example: P=120kW, PF=0.90 → S=133kVA, Q=58.1kVAR, φ=25.84°."
        },
        {
          title: "Power Factor Correction Using the Triangle",
          content: "Power factor correction involves adding capacitors to supply reactive power, reducing Q and flattening the triangle: Before correction: P=100kW, Q=100kVAR (highly inductive motor). S=√(100²+100²)=141kVA. PF=100/141=0.71, φ=45°. After adding 70kVAR capacitors: Capacitors supply +70kVAR (leading, negative Q). Net Q = 100kVAR - 70kVAR = 30kVAR from utility. New S=√(100²+30²)=104kVA. New PF=100/104=0.96, φ=16.7°. Benefits: kVA reduced from 141 to 104 (26% reduction). Current reduced by 26% (I=S/V). Losses reduced by 44% (proportional to I²). Triangle is flatter, more horizontal (more efficient). System freed up 37kVA capacity for additional loads."
        },
        {
          title: "Practical Applications",
          content: [
            "Equipment Sizing: Transformer for 200kW load, PF=0.82. Q = 200×tan(cos⁻¹(0.82)) = 200×0.688 = 138kVAR. S = √(200²+138²) = 244kVA. Need 250kVA transformer (round up to standard size).",
            "Current Calculation: 100kW, 75kVAR load at 480V three-phase. S = √(100²+75²) = 125kVA. I = 125×1000/(√3×480) = 150A. Use 175A breaker with 15% safety margin.",
            "PF Penalty Analysis: Utility bills for kW but penalizes PF<0.90. Load 500kW, Q=364kVAR, S=619kVA, PF=0.81. Add 242kVAR capacitors to improve to 0.95 PF: New Q=122kVAR, S=526kVA, eliminates penalty.",
            "Generator Selection: Standby generator for critical 150kW load, PF=0.88. S = 150/0.88 = 170kVA. Add 25% safety for motor starting = 213kVA. Select 250kVA generator.",
            "Cable Sizing: 80kW load at 208V, PF=0.75. S = 80/0.75 = 107kVA. I = 107×1000/(√3×208) = 297A. From ampacity tables, need 350kcmil copper (310A) in conduit."
          ]
        }
      ]
    }
  },
  "electrical-load": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Add electrical loads using the 'Add Load' button.",
        "For each load, enter: name, power (W), quantity, and usage hours per day.",
        "The calculator shows individual load power (W) automatically.",
        "Enter system voltage (typically 120V, 230V, or 480V).",
        "Input the estimated power factor for the combined loads.",
        "Click 'Calculate Total Load' to compute power, current, and energy consumption.",
        "Remove loads using the X button if needed."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Total Real Power (kW)",
          definition: "The sum of all individual load powers. This is the actual power consumed and represents the continuous electrical load on the system."
        },
        {
          term: "Total Apparent Power (kVA)",
          definition: "The total power accounting for power factor: kVA = kW / PF. This determines the size of transformers, generators, and conductors needed."
        },
        {
          term: "Total Current (A)",
          definition: "The current that will flow based on voltage and apparent power. Calculated as I = kVA × 1000 / V for single-phase. This determines conductor and breaker sizes."
        },
        {
          term: "Daily Energy Consumption (kWh/day)",
          definition: "The total energy used per day: sum of (power × quantity × hours) for all loads. This determines electricity costs and sizing for backup power systems."
        }
      ]
    },
    guide: {
      title: "Electrical Load Calculation Guide",
      sections: [
        {
          title: "Why Calculate Electrical Loads?",
          content: "Electrical load calculation is essential for: 1) Panel and Service Sizing: Determines required ampacity for main service, sub-panels, and feeders. Under-sizing causes overloads and tripped breakers. Over-sizing wastes money on unnecessary capacity. 2) Generator/UPS Sizing: Standby and backup systems must handle the total load plus starting currents. Load calculation prevents under-sizing (equipment won't start) or over-sizing (wasted capital). 3) Energy Cost Estimation: Knowing daily/monthly kWh consumption allows accurate electricity cost budgeting. Helps justify energy efficiency investments. 4) Conductor and Breaker Selection: Total current determines wire gauge and overcurrent protection sizing per NEC requirements. 5) Demand Calculations: Some loads don't run simultaneously. Applying demand factors per NEC prevents over-sizing."
        },
        {
          title: "Types of Electrical Loads",
          content: "Continuous Loads: Run for 3+ hours continuously (HVAC, lighting, refrigeration). NEC requires sizing circuits for 125% of continuous load current. Example: 1200W continuous load needs circuit sized for 1500W (1200×1.25). Non-Continuous Loads: Run less than 3 hours (hair dryers, toasters, some tools). Can size circuits for 100% of load. Starting vs Running Current: Motors, compressors draw 5-8× normal current when starting. Must consider in generator sizing, but not steady-state panel sizing. Inrush lasts only seconds. Cyclic Loads: Operate in cycles (washing machines, water heaters). Average power over time is less than nameplate. Can apply diversity/demand factors. Resistive vs Inductive: Resistive (heaters, lights): PF≈1.0, simple kW calculation. Inductive (motors, transformers): PF=0.7-0.9, must account for reactive power when sizing equipment."
        },
        {
          title: "Calculating Total Load",
          content: "Step-by-step process: 1) List all loads: Name, power rating (W), quantity, hours of daily use. Get power from equipment nameplates. 2) Calculate individual load totals: Load Total (W) = Unit Power × Quantity. Example: 10 LED lights, 12W each = 120W total. 3) Sum all loads for total power: Total P = Σ(individual loads). Example: Lights 120W + Motors 3000W + Heaters 2000W = 5120W = 5.12kW. 4) Convert to apparent power using power factor: Total S (kVA) = Total P (kW) / PF. Example: 5.12kW ÷ 0.88 = 5.82kVA. 5) Calculate current based on voltage: Single-phase: I = S × 1000 / V. Three-phase: I = S × 1000 / (√3 × V). Example: 5.82kVA ÷ 230V = 25.3A single-phase."
        },
        {
          title: "Energy Consumption Calculation",
          content: "Daily energy (kWh/day): For each load: Energy = Power (kW) × Quantity × Hours/day. Sum all individual energies for total daily consumption. Example: 10 lights × 0.012kW × 5 hours = 0.6 kWh. Monthly and yearly energy: Monthly (kWh/month) = Daily × 30. Yearly (kWh/year) = Daily × 365. Cost calculation: Cost = Energy (kWh) × Rate ($/kWh). Example: 120 kWh/month × $0.12/kWh = $14.40/month. Practical example: Home load - 20 LED lights (12W, 5hr/day): 1.2 kWh/day. Refrigerator (150W, 24hr/day): 3.6 kWh/day. AC unit (2000W, 8hr/day): 16 kWh/day. TV (100W, 4hr/day): 0.4 kWh/day. Total: 21.2 kWh/day = 636 kWh/month. At $0.12/kWh = $76/month."
        },
        {
          title: "Demand Factors and Diversity",
          content: [
            "Not all loads operate simultaneously. NEC allows demand factors to reduce calculated load: Lighting (general): Typically 100% of first 3000VA, then 35% for remainder. Receptacles: 100% first 10kVA, 50% beyond 10kVA. Ranges/Ovens: Demand factor based on number of units (NEC Table 220.55). HVAC: Typically 100% of largest unit only. Motors: 125% largest motor + 100% sum of others.",
            "Diversity Factor: Ratio of sum of individual max demands to max total demand. Example: 10 apartments, each 5kW max load. Sum = 50kW. Actual peak demand = 35kW. Diversity factor = 50/35 = 1.43. Can size transformer/service for 35kW, not 50kW.",
            "Example Application: Building with 100 offices, each with: Lighting 500W, Computer 200W, HVAC 1000W. Sum = 170kW if all on. With NEC demand factors: Lighting 70%, Receptacles 50%, HVAC 70%. Actual demand ≈ 110kW. Can size 150kVA transformer vs 200kVA without demand factors."
          ]
        },
        {
          title: "Practical Load Calculation Examples",
          content: [
            "Example 1 - Residential Home: 40 LED lights (12W, 5hr) = 2.4 kWh/day. Refrigerator (150W, 24hr) = 3.6 kWh/day. AC (3500W, 8hr) = 28 kWh/day. Washer (500W, 1hr) = 0.5 kWh/day. Total: 34.5 kWh/day, 1035 kWh/month. Peak load: 3500W + 150W + 240W = 3.89kW. At PF=0.92: 4.23kVA. Current at 240V: 17.6A. Use 20A main breaker.",
            "Example 2 - Small Shop: 50 fluorescent lights (32W, 10hr) = 16 kWh/day. 5 HP air compressor (3.73kW, 4hr, PF=0.82) = 14.9 kWh/day. Welding machine (8kW, 2hr) = 16 kWh/day. Hand tools (1kW, 6hr) = 6 kWh/day. Total: 52.9 kWh/day. Peak: 15.3kW. At PF=0.85: 18kVA. Current at 240V: 75A. Use 100A service.",
            "Example 3 - Office Building: 200 computers (150W, 8hr) = 240 kWh/day. 100 lights (25W, 10hr) = 25 kWh/day. HVAC (30kW, 12hr) = 360 kWh/day. Elevator (10kW, 2hr) = 20 kWh/day. Total: 645 kWh/day. Peak with diversity (70%): 35kW. At PF=0.90: 38.9kVA. Current at 208V 3-phase: 108A.",
            "Example 4 - Data Center: 200 servers (300W, 24hr) = 1440 kWh/day. Cooling (50kW, 24hr) = 1200 kWh/day. Lighting (2kW, 24hr) = 48 kWh/day. UPS losses 5% = 134 kWh/day. Total: 2822 kWh/day, 84,660 kWh/month. Peak: 110kW continuous. At PF=0.95: 116kVA. Need 150kVA UPS with 20% margin."
          ]
        }
      ]
    }
  },
  "energy-cost": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the power consumption of your device or load.",
        "Select the power unit: watts (W) or kilowatts (kW).",
        "Input the usage time and select the time unit (per day, week, month, or year).",
        "Enter your electricity rate in $/kWh (check your utility bill).",
        "Click 'Calculate Cost' to see daily, monthly, and yearly energy consumption and costs.",
        "Compare different appliances or usage scenarios to identify savings opportunities."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Energy (kWh)",
          definition: "Kilowatt-hours represent the amount of energy consumed over time. 1 kWh = running a 1000W device for 1 hour. This is what you're billed for on your electric bill."
        },
        {
          term: "Power (W or kW)",
          definition: "The rate at which energy is consumed, measured in watts or kilowatts. Higher power means faster energy consumption. 1 kW = 1000 W."
        },
        {
          term: "Electricity Rate ($/kWh)",
          definition: "The cost per kilowatt-hour charged by your utility company. Varies by region, time of day (in some areas), and usage tier. Check your bill for your actual rate."
        },
        {
          term: "Daily/Monthly/Yearly Cost",
          definition: "The projected electricity cost based on the usage pattern. Helps estimate budget and compare efficiency of different appliances or usage scenarios."
        }
      ]
    },
    guide: {
      title: "Understanding Electricity Costs",
      sections: [
        {
          title: "How Electricity Billing Works",
          content: "Utilities bill for energy consumption, not just power. Energy = Power × Time. You pay for kilowatt-hours (kWh), not kilowatts. A 100W light bulb on for 10 hours consumes 1 kWh (100W × 10hr ÷ 1000 = 1 kWh). A 1000W space heater on for 1 hour also consumes 1 kWh. Both cost the same despite different power ratings because energy consumed is equal. Your electric bill shows: kWh used (energy consumption, usually monthly). Rate ($/kWh, varies by region and utility). Total cost = kWh × Rate. Additional charges may include: Fixed monthly service fee, Demand charges (commercial/industrial), Time-of-use rates (higher during peak hours), Power factor penalties (commercial/industrial)."
        },
        {
          title: "Calculating Energy Consumption",
          content: "Formula: Energy (kWh) = Power (kW) × Time (hours). Example 1: 60W light bulb on 5 hours/day. Power = 60W = 0.06kW. Daily energy = 0.06kW × 5hr = 0.3 kWh. Monthly = 0.3 × 30 = 9 kWh. At $0.12/kWh = $1.08/month. Example 2: 1500W space heater on 8 hours/day. Power = 1.5kW. Daily = 1.5 × 8 = 12 kWh. Monthly = 12 × 30 = 360 kWh. At $0.12/kWh = $43.20/month. Example 3: Refrigerator rated 150W runs 24hr (but cycles on/off, ~40% duty). Effective power = 150W × 0.40 = 60W. Daily = 0.06kW × 24hr = 1.44 kWh. Monthly = 43.2 kWh. At $0.12/kWh = $5.18/month."
        },
        {
          title: "Typical Electricity Rates by Region",
          content: "United States average: $0.10-0.15/kWh residential. Hawaii (highest): ~$0.33/kWh due to island isolation. Louisiana (lowest): ~$0.09/kWh due to abundant natural gas. Northeast (CT, MA, NY): $0.20-0.25/kWh. West Coast (CA): $0.18-0.25/kWh. Midwest: $0.10-0.13/kWh. South: $0.09-0.12/kWh. Commercial rates: Generally 20-30% lower than residential due to volume. Industrial rates: Even lower, often $0.05-0.08/kWh. Time-of-use (TOU) rates: Some utilities charge more during peak hours (typically 3-8 PM weekdays). Peak rate might be $0.30/kWh. Off-peak (night/weekends) might be $0.08/kWh. Shifting usage to off-peak can save significantly."
        },
        {
          title: "Cost of Common Appliances",
          content: [
            "LED Light 12W, 5hr/day: 0.06 kWh/day, 1.8 kWh/month, $0.22/month @ $0.12/kWh",
            "Incandescent 60W, 5hr/day: 0.3 kWh/day, 9 kWh/month, $1.08/month (5× LED cost)",
            "Refrigerator 150W equivalent, 24hr: 1.44 kWh/day, 43 kWh/month, $5.18/month",
            "Air Conditioner 3500W, 8hr/day: 28 kWh/day, 840 kWh/month, $100.80/month",
            "Electric Water Heater 4500W, 3hr/day: 13.5 kWh/day, 405 kWh/month, $48.60/month",
            "Clothes Dryer 3000W, 1hr/day: 3 kWh/day, 90 kWh/month, $10.80/month",
            "Desktop Computer 200W, 8hr/day: 1.6 kWh/day, 48 kWh/month, $5.76/month",
            "Laptop 50W, 8hr/day: 0.4 kWh/day, 12 kWh/month, $1.44/month (75% less than desktop)",
            "Space Heater 1500W, 6hr/day: 9 kWh/day, 270 kWh/month, $32.40/month",
            "Electric Stove 3000W, 1hr/day: 3 kWh/day, 90 kWh/month, $10.80/month",
            "Dishwasher 1800W, 1hr/day: 1.8 kWh/day, 54 kWh/month, $6.48/month",
            "Hair Dryer 1500W, 0.2hr/day: 0.3 kWh/day, 9 kWh/month, $1.08/month"
          ]
        },
        {
          title: "Energy Saving Strategies",
          content: [
            "Replace Incandescent with LED: 60W incandescent → 12W LED (same light). Saves 48W per bulb. If 20 bulbs, 5hr/day: Savings = 20 × 48W × 5hr × 30days ÷ 1000 = 144 kWh/month = $17.28/month.",
            "Use Energy Star Appliances: Refrigerator: Old 1200 kWh/year → New 400 kWh/year. Saves 800 kWh/year = $96/year @ $0.12/kWh. Washing Machine: Old 450 kWh/year → New 180 kWh/year. Saves 270 kWh/year = $32.40/year.",
            "Reduce AC/Heating Usage: Increase thermostat 2°F in summer: Saves 5-10% cooling cost. 840 kWh/month × 7% = 59 kWh = $7/month. Lower thermostat 2°F in winter: Similar savings on heating.",
            "Shift to Off-Peak Hours (if TOU rates): Running dishwasher, laundry, EV charging at night. Peak $0.30/kWh → Off-peak $0.08/kWh. 100 kWh shifted saves $22/month.",
            "Unplug Vampire Loads: Devices consuming power while 'off' (TVs, chargers, appliances). Typical home: 50W continuous standby = 1.2 kWh/day = 36 kWh/month = $4.32/month wasted. Use power strips to fully disconnect.",
            "Optimize Water Heater: Lower temperature 140°F → 120°F saves 6-10%. 405 kWh/month × 8% = 32 kWh = $3.86/month. Insulate tank and pipes for additional 4-9% savings."
          ]
        }
      ]
    }
  },

  // Motor Calculators
  "motor-starting-current": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the motor power rating in HP or kW",
        "Select the power unit (HP or kW)",
        "Enter the supply voltage",
        "Select motor type (Single-phase or Three-phase)",
        "Select the starting method (DOL, Star-Delta, Soft Start, or LRA)",
        "If using LRA method, enter the Locked Rotor Amps value",
        "Enter power factor and efficiency (typical values pre-filled)",
        "Click 'Calculate Starting Current' to see results"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Full Load Current (FLC)",
          definition: "The current drawn by the motor when operating at its rated load. This is the normal operating current under full-load conditions."
        },
        {
          term: "Starting Current (Ist)",
          definition: "The inrush current drawn when the motor first starts. Typically 5-8 times FLC for DOL starting. This high current is due to low back-EMF at startup."
        },
        {
          term: "Locked Rotor Amps (LRA)",
          definition: "The maximum current drawn when the rotor is stationary (locked). Usually indicated by motor nameplate code letter. Used to calculate starting current accurately."
        },
        {
          term: "Starting Method",
          definition: "The technique used to start the motor. DOL (highest inrush), Star-Delta (reduces inrush to ~33%), Soft-starter (gradual current ramp), VFD (lowest inrush)."
        },
        {
          term: "Ratio (Ist / FLC)",
          definition: "The multiplier showing how many times larger starting current is compared to full load current. Important for circuit breaker and contactor sizing."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Starting Current",
      sections: [
        {
          title: "Why Motors Draw High Starting Current",
          content: "When a motor starts, it draws significantly higher current than during normal operation. At standstill, the rotor has no back-EMF (electromotive force) opposing the applied voltage. The only opposition to current is the motor's winding resistance and leakage reactance, both relatively small. As the rotor accelerates, it generates back-EMF that opposes the supply voltage, reducing current draw. At full speed under rated load, back-EMF is high, resulting in normal full-load current. During starting, the absence of back-EMF causes current to surge 5-8 times FLC for direct-on-line (DOL) starting."
        },
        {
          title: "Starting Methods and Current Reduction",
          content: "Direct On Line (DOL): Full voltage applied at startup. Starting current = 5-8× FLC. Simplest and cheapest method. Used for small motors (<7.5 HP) or where high starting torque needed and supply can handle inrush. Star-Delta (Y-Δ): Motor starts in star connection (reduced voltage), then switches to delta at ~80% speed. Starting current = 2-2.5× FLC (reduced to ~33% of DOL). Starting torque also reduced to ~33%. Requires 6-wire motor connection. Soft Starter: Electronic device gradually ramps up voltage. Starting current = 3-4× FLC. Smooth acceleration, reduced mechanical stress. More expensive than DOL/Star-Delta. Variable Frequency Drive (VFD): Controls both voltage and frequency. Starting current = 1.5-2× FLC. Best current control, adjustable speed. Most expensive option. Autotransformer: Uses transformer to reduce starting voltage. Current reduction depends on tap setting (typically 50%, 65%, 80%). Less common today, replaced by soft starters."
        },
        {
          title: "Locked Rotor Code Letters",
          content: "Motor nameplates often show a code letter indicating locked rotor kVA per HP. This determines starting current characteristics. Code A: 0-3.14 kVA/HP (lowest starting current). Code B: 3.15-3.54 kVA/HP. Code C: 3.55-3.99 kVA/HP. Code D: 4.0-4.49 kVA/HP. Code E: 4.5-4.99 kVA/HP. Code F: 5.0-5.59 kVA/HP. Code G: 5.6-6.29 kVA/HP. Code H: 6.3-7.09 kVA/HP. Code J: 7.1-7.99 kVA/HP. Code K: 8.0-8.99 kVA/HP. Code L: 9.0-9.99 kVA/HP. Code M: 10.0-11.19 kVA/HP. Code N: 11.2-12.49 kVA/HP. Code P: 12.5-13.99 kVA/HP. Code R: 14.0-15.99 kVA/HP. Code S: 16.0-17.99 kVA/HP. Code T: 18.0-19.99 kVA/HP. Code U: 20.0-22.39 kVA/HP. Code V: 22.4 and up kVA/HP. Higher letters = higher starting current. Most general-purpose motors are Code F to H."
        },
        {
          title: "Calculating Starting Current",
          content: "For three-phase motors: FLC = (P × 1000) / (√3 × V × PF × η). For single-phase motors: FLC = (P × 1000) / (V × PF × η). Where P = power (kW), V = voltage (V), PF = power factor, η = efficiency. Starting current depends on method: DOL: Ist = FLC × 6 (typical range 5-8). Star-Delta: Ist = FLC × 2 (range 2-2.5). Soft Start: Ist = FLC × 3.5 (range 3-4). Using LRA: If nameplate shows LRA directly, use that value. From code letter: LRA = (Code kVA/HP × HP × 1000) / V. Example: 10 HP, 460V, Code F motor. Code F = 5.0-5.59 kVA/HP (use midpoint 5.3). LRA = 5.3 × 10 × 1000 / 460 = 115A."
        },
        {
          title: "Impact on Electrical System",
          content: "High starting current affects: Voltage Dip: Starting current causes temporary voltage drop. Large motors can cause lights to dim, sensitive equipment to malfunction. Rule of thumb: Motor HP should not exceed 20% of transformer kVA rating for DOL starting. Circuit Protection: Circuit breakers and fuses must handle starting current without tripping. Motor circuit breakers (Type D) have higher trip threshold for startup. Inverse-time breakers allow brief overload during start. Contactor Sizing: Contactors must handle inrush current and associated magnetic forces. AC-3 rated contactors designed for motor starting duty. Undersized contactors may weld shut or fail prematurely. Cable Sizing: Cables sized for FLC, but voltage drop during start considered. Long cable runs increase impedance, worsen voltage dip. Transformer Capacity: Transformer must supply starting kVA without excessive voltage drop. Starting kVA = √3 × V × Ist / 1000. 10% voltage drop acceptable during brief motor start."
        },
        {
          title: "Selecting Starting Method",
          content: "DOL Starting: Use when: Motor < 7.5 HP (5.5 kW). Supply has sufficient capacity. No sensitive loads affected by voltage dip. High starting torque required. Cost is primary consideration. Star-Delta Starting: Use when: Motor 7.5-50 HP (5.5-37 kW). Reduced starting torque acceptable (fan, pump loads). Need lower cost than soft starter. Motor has 6-wire connection available. Soft Starter: Use when: Motor 10-500 HP (7.5-375 kW). Smooth acceleration desired. Mechanical stress reduction important. Starting/stopping frequent. Can justify higher cost. VFD: Use when: Variable speed operation needed. Minimum starting current essential. Energy savings important. Precise control required. Highest cost justified."
        }
      ]
    }
  },

  "motor-full-load-current": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the motor power rating",
        "Select power unit (HP or kW)",
        "Enter supply voltage",
        "Select motor type (Single-phase or Three-phase)",
        "Enter power factor (typical: 0.85 for motors)",
        "Enter efficiency (typical: 0.90 for general-purpose motors)",
        "Click 'Calculate Full Load Current' to see results"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Full Load Current (FLC)",
          definition: "The current drawn when motor operates at its rated power output. Used for sizing conductors, overload protection, and calculating circuit requirements. Also called rated current or nameplate current."
        },
        {
          term: "Input Power",
          definition: "The electrical power supplied to the motor. Input Power = Output Power / Efficiency. The difference between input and output is losses (heat, friction, magnetic losses)."
        },
        {
          term: "Apparent Power (kVA)",
          definition: "The total power supplied by the source, including both real power and reactive power. kVA = kW / PF. Circuit components must be rated for kVA, not just kW."
        },
        {
          term: "Power Factor (PF)",
          definition: "The ratio of real power to apparent power. Motors are inductive loads with lagging power factor (0.7-0.9). Low PF increases current for same kW, requiring larger conductors and circuit protection."
        },
        {
          term: "Efficiency (η)",
          definition: "The ratio of mechanical output power to electrical input power. Modern motors: 85-96% efficient. Premium efficiency (IE3): >92%. Super premium (IE4): >94%. Efficiency decreases at partial load."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Full Load Current",
      sections: [
        {
          title: "The FLC Formula Explained",
          content: "For three-phase motors: FLC = (P × 1000) / (√3 × V × PF × η). For single-phase motors: FLC = (P × 1000) / (V × PF × η). Where: P = output power (kW), V = line-to-line voltage (3-phase) or line voltage (1-phase), PF = power factor (0.7-0.9 typical), η = efficiency (0.85-0.95 typical). The factor 1000 converts kW to W. The factor √3 (1.732) appears in 3-phase because power is distributed across three conductors. Example: 10 HP (7.46 kW), 460V, 3-phase, PF=0.85, η=0.90. FLC = (7.46 × 1000) / (1.732 × 460 × 0.85 × 0.90) = 12.2 A."
        },
        {
          title: "Why FLC Matters",
          content: "Conductor Sizing: Conductors must carry at least 125% of FLC per NEC. For 12.2A FLC, minimum conductor rating = 12.2 × 1.25 = 15.25A. Select 14 AWG (20A) for short runs, 12 AWG (25A) for longer runs to limit voltage drop. Overload Protection: Thermal overload relays set at 115-125% of FLC. Protects motor from overheating due to overload or phase loss. 12.2A motor: overload set at 13.4-15.25A range. Circuit Breaker Sizing: Must carry FLC continuously but allow brief starting current. Motor circuit breakers typically 150-250% of FLC. 12.2A motor: 20-30A circuit breaker typical. Transformer Capacity: Total connected motor load determines transformer size. Include diversity factor: Not all motors run at full load simultaneously. Typical 0.7-0.8 diversity for multiple motors. Cost Analysis: Current determines conductor size, which affects installation cost. Lower current = smaller conductors = lower material and labor cost. Improving PF and efficiency reduces FLC, saving on electrical infrastructure."
        },
        {
          title: "Power Factor and Its Impact",
          content: "Power factor represents the phase angle between voltage and current in AC circuits. In motors, current lags voltage due to magnetic field energy storage. Typical motor power factors: Large motors (>50 HP): 0.85-0.92. Medium motors (5-50 HP): 0.80-0.88. Small motors (<5 HP): 0.70-0.85. Lightly loaded motors: 0.50-0.70. Impact of low power factor: 100 kW motor, PF=0.70 vs PF=0.90, 460V, 3-phase. At PF=0.70: I = 100,000 / (1.732 × 460 × 0.70) = 179A. At PF=0.90: I = 100,000 / (1.732 × 460 × 0.90) = 139A. Low PF requires 29% more current (40A difference). Larger conductors, circuit breakers, contactors needed. Higher I²R losses in conductors. Utility may charge power factor penalty. Power factor correction using capacitors: Adds leading reactive power to offset lagging. Reduces current drawn from supply. Improves voltage regulation. Capacitor kVAR = P × (tan φ1 - tan φ2). Where φ = arccos(PF)."
        },
        {
          title: "Motor Efficiency Classes",
          content: "International Efficiency (IE) Classes per IEC 60034-30-1: IE1 - Standard Efficiency: Older designs, 85-90% typical. Being phased out in many regions. IE2 - High Efficiency: 88-92% typical. Minimum in many countries. IE3 - Premium Efficiency: 90-94% typical. Required in EU, USA (NEMA Premium). IE4 - Super Premium Efficiency: 92-96% typical. Best available technology. IE5 - Ultra Premium Efficiency: >96%, emerging technology. Benefits of higher efficiency: Lower operating current for same output power. Reduced energy costs: 90% vs 95% efficiency, 5.5% energy savings. Less heat generation, longer motor life. May qualify for utility rebates. Example: 50 HP motor, 8000 hours/year, $0.10/kWh. IE2 (90% eff): Annual energy = 37.3 kW / 0.90 × 8000 = 331,111 kWh. Cost = $33,111. IE4 (95% eff): Annual energy = 37.3 kW / 0.95 × 8000 = 314,105 kWh. Cost = $31,410. Savings = $1,701/year. Higher efficiency motor may pay for itself in 2-3 years."
        },
        {
          title: "Derating Factors",
          content: "FLC must be adjusted for: Ambient Temperature: Motors rated for 40°C ambient. Above 40°C: derate 1% per degree C. At 50°C: multiply FLC by 1.10 (10% increase). Altitude: Standard rating up to 1000m elevation. Above 1000m: derate 1% per 100m. At 2000m: multiply FLC by 1.10. Voltage Variation: Motors tolerate ±10% voltage variation. Low voltage increases current: I varies inversely with V. 10% low voltage → 11% higher current. High voltage decreases current but may cause insulation stress. Frequency Variation: Designed for 50 Hz or 60 Hz operation. Operating 60 Hz motor at 50 Hz: Speed reduced 17%, current increased. Harmonic Distortion: VFDs and nonlinear loads cause harmonics. Harmonics increase RMS current, heating. May require 110-115% FLC rating. Duty Cycle: Continuous duty (S1): Full FLC applies. Intermittent duty (S3): Can use higher current during on-time. Frequent starts (S4, S5): Heating from starting current. May limit load to 80-90% of rating."
        },
        {
          title: "Single-Phase vs Three-Phase",
          content: "Single-Phase Motors: Used for residential, small commercial (< 5 HP). Line current = P / (V × PF × η). Only one voltage waveform, no phase angle benefit. Higher current for same power vs 3-phase. Less efficient, larger conductors needed. Three-Phase Motors: Standard for industrial, large commercial (> 1 HP). Line current = P / (√3 × V × PF × η). Power distributed across three phases, 73% of single-phase current. More efficient, smooth torque, smaller size. Comparison Example: 5 HP (3.73 kW), PF=0.85, η=0.90. Single-phase, 230V: I = 3730 / (230 × 0.85 × 0.90) = 21.2A. Three-phase, 230V: I = 3730 / (1.732 × 230 × 0.85 × 0.90) = 12.2A. Three-phase uses 42% less current (9A difference). Conductor sizing: single-phase needs 10 AWG, three-phase needs 14 AWG. Converting Single-Phase to Three-Phase: Phase converter or VFD can convert. Enables using 3-phase motors on 1-phase supply. Input current from 1-phase supply similar to single-phase motor. Output: balanced 3-phase, motor operates normally. Cost-effective for workshop with multiple motors."
        }
      ]
    }
  },

  "motor-efficiency": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the motor output power (mechanical power delivered to load)",
        "Enter the motor input power (electrical power consumed from supply)",
        "Click 'Calculate Efficiency' to see results",
        "View efficiency percentage, decimal value, and power losses",
        "Check the efficiency rating classification"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Efficiency (η)",
          definition: "The ratio of mechanical output power to electrical input power, expressed as decimal (0-1) or percentage (0-100%). Higher efficiency means less energy wasted as heat and more useful work output."
        },
        {
          term: "Power Losses",
          definition: "The difference between input and output power. Losses appear as heat and include: copper losses (I²R heating), core losses (hysteresis, eddy currents), friction and windage, stray load losses. Typical losses: 5-15%."
        },
        {
          term: "Output Power",
          definition: "The useful mechanical power delivered to the load. Measured at the motor shaft. This is the power doing actual work (pumping, compressing, rotating, lifting). Rated in kW or HP."
        },
        {
          term: "Input Power",
          definition: "The electrical power drawn from the supply. Always greater than output power due to losses. Measured with power meter. Input = Output / Efficiency. This is what you pay for on electric bill."
        },
        {
          term: "Efficiency Rating (IE Class)",
          definition: "International standard classification. IE1 (Standard), IE2 (High), IE3 (Premium), IE4 (Super Premium), IE5 (Ultra Premium). Higher class = better efficiency = lower operating cost. Most regions now require minimum IE2 or IE3."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Efficiency",
      sections: [
        {
          title: "Understanding Motor Efficiency",
          content: "Motor efficiency is the ratio of mechanical power output to electrical power input. Formula: η = P_out / P_in, where η is efficiency (0 to 1 or 0% to 100%). No motor is 100% efficient; all have losses. Typical efficiencies: Small motors (< 1 HP): 60-80%. Medium motors (1-50 HP): 85-92%. Large motors (> 50 HP): 92-96%. Premium efficiency motors (IE3): 90-95% across range. Super premium (IE4): 92-96%. The difference between input and output is losses, dissipated as heat. Losses = Input - Output = Input × (1 - η). Example: 10 kW output, 90% efficiency. Input = 10 / 0.90 = 11.11 kW. Losses = 11.11 - 10 = 1.11 kW (10% of input). These losses heat the motor and surrounding area."
        },
        {
          title: "Types of Motor Losses",
          content: "Copper Losses (I²R losses): Due to resistance in stator and rotor windings. Heat generated = I²R watts. Largest single loss component (typically 55-60% of total losses). Varies with load: double the current quadruples copper losses. Reduced by using larger diameter wire (lower R). Core Losses (Iron Losses): Hysteresis losses: Energy lost magnetizing and demagnetizing iron core each cycle. Proportional to frequency and flux density. Eddy current losses: Circulating currents induced in iron core. Reduced by using laminated core instead of solid iron. Core losses relatively constant (30-35% of total), independent of load. Mechanical Losses: Friction: Bearings, shaft seals. Constant regardless of load. Reduced with quality bearings, proper lubrication. Windage: Air resistance of rotating fan blades. Small component (3-5% of total losses). Stray Load Losses: Various small losses: harmonics, leakage flux. Difficult to measure directly. Assumed as 1-2% of output power. Load-dependent losses. Total losses = Copper + Core + Mechanical + Stray. Example breakdown for 10 kW motor (1.11 kW total loss): Copper: 0.66 kW (60%), Core: 0.33 kW (30%), Mechanical: 0.08 kW (7%), Stray: 0.04 kW (3%)."
        },
        {
          title: "Factors Affecting Efficiency",
          content: "Motor Design: Premium efficiency motors use: More copper (larger conductor area, lower resistance). Better core steel (lower hysteresis losses). Optimized air gap (reduces magnetizing current). Improved cooling (larger frame, better ventilation). Tighter manufacturing tolerances. Cost 15-30% more but save energy over lifetime. Load Level: Efficiency peaks at 75-100% rated load. At 50% load: efficiency drops 2-5 points. At 25% load: efficiency drops 5-10 points. Never operate motor continuously below 50% load if efficiency matters. Voltage: Operating voltage affects efficiency. 10% low voltage: efficiency drops 1-2%. Increased current → higher I²R losses. Magnetic saturation changes. 10% high voltage: efficiency may drop slightly. Risk of insulation damage. Maintain voltage within ±5% of rated. Frequency: Operating 60 Hz motor at 50 Hz: Speed reduced 17%. Flux density increases. Core losses increase. Overall efficiency drops 2-4%. VFDs: Introduce harmonic losses. Efficiency reduction: 1-3% depending on VFD quality. High-quality VFDs minimize harmonic content. Temperature: High ambient temperature reduces efficiency. Winding resistance increases with temperature. 10°C rise → resistance up 4%. Proper ventilation maintains efficiency."
        },
        {
          title: "Measuring Motor Efficiency",
          content: "Direct Method (Input-Output): Measure electrical input power with power meter. Measure mechanical output power at shaft with dynamometer or torque sensor. Calculate η = P_out / P_in. Most accurate but requires load testing. Slip Method (for induction motors): Measure slip at known load. Calculate losses from slip. Less accurate, no direct measurement needed. Nameplate Method: Use manufacturer's stated efficiency. May not match actual field conditions. Suitable for estimates, not precision. Field Testing Procedure: Install calibrated power meter on motor supply. Ensure stable load conditions. Record voltage, current, power factor, power (kW). Measure mechanical output: torque and speed. Calculate power = 2π × N × T / 60 (kW). Where N = speed (RPM), T = torque (N⋅m). Efficiency = (Mechanical Power / Electrical Power) × 100%. Example: Electrical: 10.5 kW, 0.88 PF, 460V, 15.2A. Mechanical: 1450 RPM, 65.7 N⋅m. Mech Power = 2 × 3.1416 × 1450 × 65.7 / 60 = 9.97 kW. Efficiency = 9.97 / 10.5 = 94.9%."
        },
        {
          title: "Energy and Cost Savings",
          content: "Upgrading from standard to premium efficiency motor saves energy and money. Energy Savings Calculation: Standard motor: 50 HP, 90% eff, 6000 hours/year. Input power = 37.3 kW / 0.90 = 41.4 kW. Annual energy = 41.4 × 6000 = 248,640 kWh. Premium motor: 50 HP, 94% eff, 6000 hours/year. Input power = 37.3 kW / 0.94 = 39.7 kW. Annual energy = 39.7 × 6000 = 238,200 kWh. Savings = 248,640 - 238,200 = 10,440 kWh/year (4.2% reduction). Cost Savings (at $0.10/kWh): Annual savings = 10,440 × $0.10 = $1,044/year. Over 20-year motor life = $20,880 saved. If premium motor costs $500 more: Payback = $500 / $1,044 = 0.48 years (6 months). NPV of savings (5% discount): ~$13,000. Return on investment: 209%/year. Factors affecting payback: Hours of operation: More hours = faster payback. Energy cost: Higher rates = faster payback. Motor size: Larger motors save more absolute kWh. Load factor: Motors running at high load save more. As energy costs rise, premium efficiency becomes more compelling. Many utilities offer rebates for premium efficiency motors. Typical rebate: $10-30 per HP, reducing upfront cost difference."
        },
        {
          title: "Improving Existing Motor Efficiency",
          content: "If replacing motor not feasible, improve efficiency of existing motor: Ensure Proper Load: Motors most efficient at 75-100% load. Oversized motor runs inefficiently at partial load. Replace with correctly sized motor if consistently <50% loaded. Improve Power Quality: Correct phase imbalance: Even 1% imbalance increases losses. Check and balance phase voltages. Maintain voltage within ±5% of rated. Low voltage increases current and losses. Reduce harmonic distortion with filters. Regular Maintenance: Clean ventilation passages annually. Blocked vents increase temperature, reduce efficiency. Inspect and replace bearings on schedule. Worn bearings increase friction losses. Ensure proper belt tension (belt-driven loads). Loose belts slip, tight belts load bearings. Check alignment periodically. Misalignment causes vibration, mechanical losses. Rewind vs Replace: Motor rewind can reduce efficiency 1-2% per rewind. Copper losses increase if winding technique poor. After 2-3 rewinds, replacement more cost-effective. Specify premium rewind practices if rewinding. Use VFD for Variable Loads: Loads varying significantly over time benefit from VFD. VFD adjusts speed to match load, reducing energy. Example: Fan/pump operating at 50% flow most of time. Fixed speed: motor runs full speed, damper restricts flow (energy wasted). VFD: motor runs at 70% speed to produce 50% flow (energy saved). Energy savings: 30-50% for variable loads."
        }
      ]
    }
  },

  "motor-power-factor": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter the real power (kW) - the actual power doing work",
        "Enter the apparent power (kVA) - the total power supplied",
        "Ensure apparent power ≥ real power (validation enforced)",
        "Click 'Calculate Power Factor' to see results",
        "View power factor (decimal and %), reactive power, and phase angle",
        "Check the power factor rating classification"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Power Factor (PF)",
          definition: "The ratio of real power to apparent power. Represents efficiency of power utilization. Range: 0 to 1 (0% to 100%). Unity (1.0) is ideal. Motors typically 0.70-0.90. Low PF increases current for same kW output."
        },
        {
          term: "Real Power (P)",
          definition: "The actual power doing useful work, measured in kilowatts (kW). This is the power converted to mechanical work, heat, or light. Only real power does work; this is what runs the motor load."
        },
        {
          term: "Apparent Power (S)",
          definition: "The total power supplied by the source, measured in kilovolt-amperes (kVA). S = √(P² + Q²). Circuit components sized for kVA, not kW. Generators, transformers, cables rated in kVA."
        },
        {
          term: "Reactive Power (Q)",
          definition: "Power oscillating between source and load, measured in kilovolt-amperes reactive (kVAR). Does no real work but necessary for magnetic fields in motors. Q = √(S² - P²). Corrected with capacitors."
        },
        {
          term: "Phase Angle (θ)",
          definition: "The angle between voltage and current waveforms. θ = arccos(PF). 0° = resistive load (unity PF). Positive angle = inductive (lagging PF, typical for motors). Larger angle = lower PF."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Power Factor",
      sections: [
        {
          title: "Understanding Power Factor",
          content: "Power factor is the ratio of real power (kW) to apparent power (kVA). Formula: PF = P / S = cos(θ), where θ is the phase angle between voltage and current. In AC circuits, voltage and current may not be in phase. Resistive loads (heaters): Voltage and current in phase, θ = 0°, PF = 1.0 (unity). Inductive loads (motors, transformers): Current lags voltage, 0° < θ < 90°, PF < 1.0 (lagging). Capacitive loads (power factor correction capacitors): Current leads voltage, -90° < θ < 0°, PF < 1.0 (leading). Motors are inductive: require magnetizing current to create magnetic field. This magnetizing current does not contribute to mechanical work. It creates reactive power (kVAR). Example: Motor consumes 80 kW real power and 60 kVAR reactive power. Apparent power = √(80² + 60²) = 100 kVA. Power factor = 80 / 100 = 0.80 or 80%. Phase angle = arccos(0.80) = 36.87°. Current lags voltage by 36.87°."
        },
        {
          title: "Why Power Factor Matters",
          content: "Low power factor has significant consequences: Increased Current: Lower PF requires higher current for same kW. Example: 100 kW load, 460V, 3-phase. At PF = 1.0: I = 100,000 / (1.732 × 460 × 1.0) = 125.5A. At PF = 0.80: I = 100,000 / (1.732 × 460 × 0.80) = 156.9A. At PF = 0.70: I = 100,000 / (1.732 × 460 × 0.70) = 179.3A. Lower PF increases current 43% (0.70 vs 1.0). Larger Conductors Required: Higher current needs larger wire gauge. 125A: 1/0 AWG copper. 157A: 3/0 AWG copper. 179A: 4/0 AWG copper. Significant cost increase in materials and installation. Higher I²R Losses: Power loss in conductors = I²R. Doubling current quadruples losses. At PF = 0.70 vs 1.0: Current up 43%, losses up 104%. Wasted energy, heat generation, reduced efficiency. Transformer Capacity: Transformer sized for kVA, not kW. 100 kW load at PF = 0.70 requires 143 kVA transformer. Same load at PF = 1.0 requires 100 kVA transformer. 43% larger (more expensive) transformer needed. Utility Penalties: Many utilities charge penalty for PF < 0.90. Typical: 0.5% charge for each 0.01 below 0.90. At PF = 0.70: penalty = 20 × 0.5% = 10% on bill. For $10,000/month bill: $1,000/month penalty = $12,000/year."
        },
        {
          title: "Motor Power Factor Characteristics",
          content: "Induction motor power factor varies with load: No load (0% load): PF = 0.15-0.25. Magnetizing current dominates, little real power. Light load (25%): PF = 0.50-0.65. Magnetizing current still significant fraction. Half load (50%): PF = 0.70-0.80. Improved but not optimal. Three-quarter load (75%): PF = 0.80-0.88. Near optimal range. Full load (100%): PF = 0.85-0.92. Best power factor. Overload (>100%): PF may reach 0.90-0.95. But motor overheats. Why PF improves with load: Motor requires fixed magnetizing current regardless of load. At light load, this reactive component is large relative to real current. At full load, real current increases while magnetizing current stays same. Fraction of current doing real work increases. Example: 10 HP motor, 460V, 3-phase. Magnetizing current (constant): 3A. At 25% load: Real current 2A. Total current = √(2² + 3²) = 3.6A. PF = 2 / 3.6 = 0.56. At 100% load: Real current 10A. Total current = √(10² + 3²) = 10.4A. PF = 10 / 10.4 = 0.96."
        },
        {
          title: "Power Factor Correction",
          content: "Power factor correction adds capacitance to offset inductive reactance. Capacitors provide leading reactive power to cancel lagging reactive power from motors. Benefits: Reduced current draw from utility. Smaller conductor and circuit breaker requirements. Lower I²R losses and voltage drop. Avoid utility power factor penalties. Increased system capacity. Capacitor Sizing Formula: Required capacitor kVAR = P × (tan φ1 - tan φ2). Where: P = motor kW. φ1 = arccos(PF1) = existing phase angle. φ2 = arccos(PF2) = target phase angle. Example: 100 kW motor, existing PF = 0.70, target PF = 0.95. φ1 = arccos(0.70) = 45.57°. tan φ1 = 1.02. φ2 = arccos(0.95) = 18.19°. tan φ2 = 0.33. Capacitor kVAR = 100 × (1.02 - 0.33) = 69 kVAR. Install 69 kVAR capacitor bank. Before correction: Apparent power = 100 / 0.70 = 143 kVA. Current (460V, 3-ph) = 180A. After correction: Apparent power = 100 / 0.95 = 105 kVA. Current (460V, 3-ph) = 132A. Current reduced 27%, significant savings on infrastructure. Capacitor Types: Fixed capacitors: Sized for specific motor, always connected. Automatic capacitor banks: Switch capacitor steps based on load/PF. Synchronous condensers: Rotating machines providing variable reactive power. Active harmonic filters: Electronic devices providing PF correction and harmonic filtering."
        },
        {
          title: "Practical Considerations",
          content: "Installing Capacitors: Individual correction: Capacitor for each motor. Automatic with motor starter. Exact correction for that load. Group correction: Capacitor bank for group of motors. Centralized at distribution panel. Sized for combined load. Central correction: One large bank at main switchboard. For entire facility. Switched in steps based on demand. Prevent Over-Correction: Do not correct beyond PF = 1.0 (unity). Leading power factor (capacitive) causes: Voltage rise, harmonic resonance, damage to capacitors. Correct to PF = 0.95, not 1.0, for safety margin. Use automatic switching to match correction to load. Motor Starting: Disconnect capacitors during motor start. Starting current can damage capacitors. Voltage transient during switching. Reconnect after motor reaches rated speed. Some motor starters have built-in capacitor disconnect. Harmonics: VFD-powered motors have harmonic currents. Harmonics cause capacitor overheating. Use harmonic-rated or detuned capacitor banks. Consider active harmonic filter instead of capacitors. Maintenance: Inspect capacitors annually. Check for bulging, leaking, overheating. Test capacitance periodically. Capacity decreases over time. Replace capacitors when capacity drops 10-15%. Failed capacitors provide no correction but draw current."
        },
        {
          title: "Economic Analysis",
          content: "Cost-Benefit of Power Factor Correction: Example: 500 kW average load, PF = 0.72, 8000 hours/year. Utility penalty: 0.5% per 0.01 below 0.90 PF. Current penalty: (0.90 - 0.72) × 100 × 0.5% = 9% surcharge. Annual energy bill: $250,000. Penalty: $250,000 × 9% = $22,500/year. Install 400 kVAR capacitor bank to improve PF to 0.93. Capacitor cost: 400 kVAR × $35/kVAR = $14,000. Installation: $3,000. Total investment: $17,000. Annual savings: $22,500 (penalty eliminated). Additional savings from reduced I²R losses: ~$3,000. Total annual savings: $25,500. Simple payback: $17,000 / $25,500 = 0.67 years (8 months). 15-year savings (present value, 5% discount): $253,000. Return on investment: 1400%. Net present value: $236,000. Internal rate of return: 150%. Clearly justified investment. Additional Benefits (Difficult to Quantify): Extended life of transformers and motors (cooler operation). Increased capacity to add loads without upgrading transformer. Improved voltage regulation. Reduced downtime from overloaded equipment. Better equipment performance and reliability. Factors Affecting Payback: Utility penalty structure: Higher penalties = faster payback. Operating hours: More hours = more savings. Load size: Larger loads save more absolutely. Energy cost: Higher rates = faster payback. Most industrial facilities with motors achieve < 2 year payback."
        }
      ]
    }
  },

  "motor-speed": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select the supply frequency (50 Hz or 60 Hz)",
        "Select number of motor poles (2, 4, 6, 8, 10, or 12)",
        "Enter slip percentage (typical: 2-5% for induction motors)",
        "Click 'Calculate Speed' to see results",
        "View synchronous speed, actual rotor speed, slip in RPM, and slip percentage"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Synchronous Speed (Ns)",
          definition: "The speed of the rotating magnetic field in the stator. Calculated as Ns = (120 × f) / P. This is the theoretical maximum speed. Rotor cannot reach this speed in induction motors."
        },
        {
          term: "Actual Speed (N)",
          definition: "The real operating speed of the rotor. Always less than synchronous speed in induction motors. N = Ns × (1 - s/100), where s is slip percentage. This is the shaft speed driving the load."
        },
        {
          term: "Slip (%)",
          definition: "The difference between synchronous and actual speed as percentage. s = [(Ns - N) / Ns] × 100. Typical: 2-5% at full load. Higher slip = more torque but lower efficiency and more heat."
        },
        {
          term: "Number of Poles (P)",
          definition: "The number of magnetic poles in the motor stator winding. Always an even number (2, 4, 6, 8, etc.). More poles = lower speed. 2-pole fastest, 12-pole slowest."
        },
        {
          term: "Frequency (f)",
          definition: "The supply frequency in Hertz (cycles per second). Standard: 60 Hz (North America), 50 Hz (Europe, Asia). Higher frequency = higher synchronous speed for same pole count."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Speed",
      sections: [
        {
          title: "Understanding Motor Speed",
          content: "Induction motors operate on the principle of a rotating magnetic field. The stator winding creates a magnetic field that rotates at synchronous speed. Formula: Ns = (120 × f) / P, where Ns = synchronous speed (RPM), f = frequency (Hz), P = number of poles. Example: 4-pole motor, 60 Hz. Ns = (120 × 60) / 4 = 1800 RPM. The rotor tries to follow this rotating field but always lags behind (slips). This slip is essential for induction motor operation. If rotor reached synchronous speed, no relative motion between rotor and field. No induced current in rotor, no torque produced. Motor would stop accelerating. At standstill: Slip = 100% (maximum). At no-load: Slip = 1-2% (minimum). At full-load: Slip = 2-5% (typical). During overload: Slip increases beyond 5%."
        },
        {
          title: "Standard Synchronous Speeds",
          content: "Common synchronous speeds for 50 Hz and 60 Hz: 2-Pole motors: 50 Hz = 3000 RPM, 60 Hz = 3600 RPM. Applications: Fans, blowers, centrifugal pumps requiring high speed. 4-Pole motors: 50 Hz = 1500 RPM, 60 Hz = 1800 RPM. Applications: General purpose, most common configuration. Pumps, compressors, conveyors. 6-Pole motors: 50 Hz = 1000 RPM, 60 Hz = 1200 RPM. Applications: Lower speed requirements, mixers, agitators. 8-Pole motors: 50 Hz = 750 RPM, 60 Hz = 900 RPM. Applications: High torque, slow speed. Crushers, mills, large fans. 10-Pole motors: 50 Hz = 600 RPM, 60 Hz = 720 RPM. 12-Pole motors: 50 Hz = 500 RPM, 60 Hz = 600 RPM. Applications: Very slow speeds, high torque. Large reciprocating compressors, cooling tower fans. Most motors are 2, 4, or 6 pole. Higher pole counts less common, larger and more expensive."
        },
        {
          title: "Slip and Its Significance",
          content: "Slip is fundamental to induction motor operation. Definition: s = (Ns - N) / Ns. Also: s = (Ns - N) / Ns × 100%. At different load conditions: No-Load Slip: 0.5-2%. Motor spins near synchronous speed, very little torque needed. Light Load (25%): 1-2.5% slip. Moderate Load (50%): 2-3% slip. Full Load (100%): 3-5% slip. Typical operating point, maximum efficiency near here. Overload (>100%): >5% slip. Motor slows significantly, risk of overheating. Slip affects: Torque: Higher slip → more induced rotor current → more torque. Efficiency: Higher slip → more rotor losses (I²R) → lower efficiency. Speed Regulation: Good regulation = small slip change from no-load to full-load. Typical: 2-5% speed drop from no-load to full-load. Heating: Rotor losses = (Slip × Mechanical Power). High slip generates excessive heat. Example: 10 HP motor, 1800 RPM synchronous, 1750 RPM actual. Slip = (1800 - 1750) / 1800 = 2.78%. If overloaded to 1700 RPM: Slip = (1800 - 1700) / 1800 = 5.56% (doubled). Rotor heating doubles, risk of thermal damage."
        },
        {
          title: "Speed Control Methods",
          content: "Changing motor speed: Pole Changing: Motors can be wound for multiple pole configurations (e.g., 4/6 pole). Switch connections to change poles, thus synchronous speed. Discrete speed steps, not continuously variable. Less common today, replaced by VFDs. Voltage Control: Reducing voltage reduces torque (T ∝ V²). Motor slows due to increased slip. Poor method: Inefficient, high slip losses, limited range. Frequency Control (VFD): Change supply frequency to change synchronous speed. V/f ratio maintained to preserve flux. Best method: Wide speed range (0-120 Hz typical). High efficiency, smooth control. Example: 4-pole, 60 Hz motor normally runs 1800 RPM. At 30 Hz: Ns = (120 × 30) / 4 = 900 RPM. At 90 Hz: Ns = (120 × 90) / 4 = 2700 RPM. Mechanical Speed Changing: Gearbox: Reduces speed, increases torque mechanically. Belt drive with variable pulleys: Stepless speed control. Direct mechanical solution, no electrical complexity."
        },
        {
          title: "Speed-Torque Characteristics",
          content: "Induction motor torque varies with slip: Starting (100% slip): High starting torque (150-300% of rated). Acceleration region (100-10% slip): Torque rises to peak (breakdown torque). Peak torque typically at 10-20% slip. Breakdown torque = 200-300% of rated torque. Operating region (5-0% slip): Torque decreases as speed approaches synchronous. Linear relationship: T ≈ s for small slip. Full-load point: Intersection of motor torque curve and load torque curve. Typical slip: 3-5%. Stable operation: Slope of motor curve > slope of load curve. Example: 10 HP motor, 1800 RPM synchronous, 5% rated slip. Full-load speed = 1800 × (1 - 0.05) = 1710 RPM. Full-load torque = (10 HP × 5252) / 1710 = 30.7 lb-ft. At 10% slip (1620 RPM): Available torque ≈ 60 lb-ft (breakdown torque). At 0% slip (1800 RPM): Available torque = 0 (theoretical). Load Type Effects: Constant torque loads: Torque independent of speed (conveyors, positive displacement pumps). Motor must provide rated torque across speed range. Variable torque loads: Torque varies with speed (fans, centrifugal pumps). T ∝ N² for fans/pumps. Power ∝ N³. Reduced speed significantly reduces power."
        },
        {
          title: "Practical Considerations",
          content: "Speed Measurement: Tachometer: Optical or contact type, measures actual RPM. Strobe light: Visual method, freeze rotating marks at synchronous multiples. Speed encoder: Attached to shaft, high precision. Slip calculation: Measure actual speed, calculate from synchronous speed. Speed Variations: Voltage variations: ±10% voltage causes ±1-2% speed change. Frequency variations: 1% frequency change = 1% speed change. Load variations: Heavy load increases slip, reduces speed. Temperature: Rotor resistance increases with temperature, increasing slip. Overload Protection: Motors protected by thermal overloads. Excessive slip causes rotor overheating. Overload relay trips before damage. Check nameplate: Service factor, ambient temperature rating. Speed vs Application: High speed (3600 RPM): Fans, blowers, centrifugal pumps. Lower inertia loads, lower starting torque. Medium speed (1800 RPM): Most general-purpose applications. Balanced torque and speed requirements. Low speed (≤1200 RPM): High inertia, high starting torque loads. Crushers, mills, large machinery. Better speed regulation at low speeds."
        }
      ]
    }
  },

  "motor-torque": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Enter motor power rating",
        "Select power unit (HP or kW)",
        "Enter motor speed in RPM",
        "Click 'Calculate Torque' to see results",
        "View torque in Newton-meters (N⋅m) and pound-feet (lb⋅ft)",
        "See angular velocity calculation in radians per second"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Torque (T)",
          definition: "The rotational force produced by the motor, measured in N⋅m or lb⋅ft. Torque = Force × Distance from rotation axis. Higher torque can move heavier loads or overcome greater resistance. T = P / ω."
        },
        {
          term: "Power (P)",
          definition: "The rate of doing work, measured in kW or HP. Power is torque multiplied by angular speed. For same power, lower speed produces higher torque. P = T × ω. 1 HP = 0.746 kW."
        },
        {
          term: "Speed (N)",
          definition: "The rotational speed of the motor shaft, measured in RPM (revolutions per minute). Inversely related to torque for constant power. Higher speed = lower torque for same power. Typical: 900-3600 RPM."
        },
        {
          term: "Angular Velocity (ω)",
          definition: "The rotational speed in radians per second. ω = (2π × N) / 60. Used in torque calculations. Converts RPM to rad/s for SI units. 1 revolution = 2π radians."
        },
        {
          term: "Newton-meter (N⋅m)",
          definition: "SI unit of torque. 1 N⋅m = force of 1 Newton applied at 1 meter radius. Common in metric countries. Conversion: 1 lb⋅ft = 1.356 N⋅m. Typical motor: 10-1000 N⋅m."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Motor Torque",
      sections: [
        {
          title: "Understanding Torque",
          content: "Torque is the rotational equivalent of linear force. While force causes linear acceleration (F = ma), torque causes rotational acceleration (T = Iα). Definition: Torque = Force × Perpendicular Distance from axis. Units: Newton-meters (N⋅m) in SI, pound-feet (lb⋅ft) in Imperial. Conversion: 1 lb⋅ft = 1.356 N⋅m, 1 N⋅m = 0.7376 lb⋅ft. Torque and Power Relationship: Power = Torque × Angular Velocity. P = T × ω, where P in watts, T in N⋅m, ω in rad/s. Practical formula: T = (9550 × P) / N, where P in kW, N in RPM, T in N⋅m. Or in Imperial: T = (5252 × P) / N, where P in HP, N in RPM, T in lb⋅ft. Example: 10 HP motor at 1750 RPM. T = (5252 × 10) / 1750 = 30 lb⋅ft = 40.7 N⋅m. The motor can exert 30 lb of force at 1 ft radius."
        },
        {
          title: "Types of Motor Torque",
          content: "Starting Torque (Locked Rotor Torque): Torque available at 0 RPM when motor first energized. Typically 150-300% of full-load torque for induction motors. Critical for starting heavy loads or high-inertia loads. NEMA design B: 150% of rated. Design C: 200% of rated. Design D: 275% of rated. Pull-Up Torque (Accelerating Torque): Minimum torque during acceleration from standstill to operating speed. Usually occurs at 60-80% of synchronous speed. Must exceed load torque throughout acceleration. Typically 100-150% of rated torque. Breakdown Torque (Pull-Out Torque): Maximum torque motor can develop before stalling. Typically 200-300% of full-load torque. Occurs at 10-20% slip (80-90% synchronous speed). Safety margin: Motor won't stall unless load exceeds this. Full-Load Torque (Rated Torque): Torque at rated power and speed. This is the continuous duty rating. Used for motor selection. T = (9550 × kW) / RPM. Example: 10 kW at 1450 RPM. T = (9550 × 10) / 1450 = 65.9 N⋅m."
        },
        {
          title: "Torque-Speed Curve",
          content: "Induction motor torque varies with speed: At 0% speed (locked rotor): Starting torque (150-300% rated). 0-30% speed: Torque dips slightly (pull-up region). 30-80% speed: Torque rises to peak (breakdown torque at ~80%). 80-100% speed: Torque decreases linearly. At 100% speed (synchronous): Zero torque (theoretical, can't operate here). Operating Point: Where motor torque curve intersects load torque curve. Stable if motor curve steeper than load curve at intersection. Typical full-load operation at 95-97% synchronous speed. Example: 4-pole, 60 Hz motor (1800 RPM synchronous). Starting: 1.5 × rated torque at 0 RPM. Pull-up: 1.2 × rated torque at 600 RPM (33% speed). Breakdown: 2.5 × rated torque at 1620 RPM (90% speed). Full-load: 1.0 × rated torque at 1750 RPM (97% speed). Load Types: Constant Torque: Required torque same at all speeds (conveyors, hoists). Motor must provide rated torque from 0 to full speed. Variable Torque: Required torque varies with speed. Fans/pumps: T ∝ N², reduces at low speed. Allows smaller motor or soft starting."
        },
        {
          title: "Calculating Required Torque",
          content: "To select proper motor size, calculate load torque requirements: Linear Motion (Belt, Chain): Force required at load. Speed of movement. Torque = Force × Pulley Radius. Power = Force × Velocity. Example: Conveyor needs 200 lb force, moves 100 ft/min. Power = 200 × 100 / 33,000 = 0.606 HP. Using 6-inch pulley (0.25 ft radius). Torque = 200 × 0.25 = 50 lb⋅ft. At 100 ft/min on 6-inch pulley: RPM = 100 / (π × 0.5) = 63.7 RPM. Motor: 0.606 HP, 63.7 RPM, 50 lb⋅ft torque. Use 1 HP motor with gearbox to reduce speed. Rotational Acceleration: Must accelerate load inertia (I) to speed. Torque = I × α, where α = angular acceleration. Inertia I = Σ(m × r²) for all rotating masses. Acceleration time affects motor selection. Example: Accelerate 10 kg-m² inertia to 1000 RPM in 2 seconds. α = (1000 × 2π/60) / 2 = 52.4 rad/s². Torque = 10 × 52.4 = 524 N⋅m. Very high torque needed for rapid acceleration. May require larger motor or longer acceleration time. Overcoming Friction: Bearing friction, seal friction. Rolling resistance for wheels. Windage (air resistance). Measure or estimate from manufacturer data. Add to load torque calculation."
        },
        {
          title: "Gearboxes and Torque Multiplication",
          content: "Gearboxes change speed-torque relationship: Gear Ratio (GR) = Input Speed / Output Speed = Output Torque / Input Torque. Speed Reduction: GR = 10:1 means output speed is 1/10 input. Output torque is 10× input (minus losses). Power remains constant (minus efficiency losses). Efficiency typically 90-98% per stage. Example: Motor: 5 HP, 1750 RPM, 15 lb⋅ft torque. Gearbox: 10:1 ratio, 95% efficiency. Output: 175 RPM, 142.5 lb⋅ft (15 × 10 × 0.95). Power: 4.75 HP (5 × 0.95), torque increased 9.5×. Selection Considerations: Torque Capacity: Gearbox rated for output torque. Overhang Load: If load not concentric, creates side load. Service Factor: For shock loads or continuous duty. Typically 1.25-2.0 depending on application. Multiple Stages: High ratios use multiple gear stages. Each stage: 3:1 to 5:1 typical. Total ratio = product of stages. 100:1 = 5:1 × 5:1 × 4:1 (three stages). Cost and Size: Higher ratios larger, more expensive. Consider direct drive high-torque motor vs small motor with gearbox. Gearbox adds maintenance (lubrication, wear)."
        },
        {
          title: "Torque Measurement and Verification",
          content: "Measuring Motor Torque: Dynamometer: Applies calibrated brake load to motor. Measures force and distance → torque. Accurate but requires special setup. Inline Torque Sensor: Mounted on motor shaft. Measures strain in shaft (twist). Real-time torque monitoring. Expensive, used for critical applications. Electrical Method: Measure motor input power and speed. Calculate: T = (9550 × P) / N. Requires accurate power meter. Assumes known efficiency. Prony Brake: Simple mechanical brake. Apply known friction force at known radius. Measure speed drop → torque. Verification Methods: Calculate torque from motor nameplate. Compare measured speed under load vs no-load. Higher slip → higher load → higher torque. Check current draw: Higher current = higher torque (approximately). Typical Measurements: Monitor torque for condition monitoring. Detect bearing wear, misalignment (increased friction). Verify proper loading (underloaded wastes energy). Prevent overload (thermal damage). Common Issues: Measured torque much less than rated: Check voltage, frequency. Motor may be partially failed (winding damage). Load may have high friction (bearings, alignment). Torque fluctuates: Load has cyclic variations. Normal for reciprocating loads (compressors). May indicate mechanical problems (loose coupling)."
        }
      ]
    }
  },

  "motor-hp-kw": {
    howToUse: {
      title: "How to Use This Calculator",
      steps: [
        "Select conversion direction (HP → kW or kW → HP)",
        "Enter power value in the selected unit",
        "Click 'Convert' to see the result",
        "View converted power value in the output unit",
        "See conversion formula and quick reference table"
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "Horsepower (HP)",
          definition: "Imperial unit of power. 1 HP = 550 ft⋅lb/s = 745.7 watts. Defined by James Watt (18th century). Common in USA, motor industry worldwide. Mechanical HP different from electrical HP (746W) or metric HP (735.5W)."
        },
        {
          term: "Kilowatt (kW)",
          definition: "SI unit of power. 1 kW = 1000 watts. Standard in most countries. Used for electrical power measurements. 1 kW = 1.341 HP. Energy billing in kWh (kilowatt-hours)."
        },
        {
          term: "Conversion Factor",
          definition: "HP to kW: multiply by 0.746. kW to HP: multiply by 1.341. Exact: 1 HP = 0.74570 kW. Rounded: 1 HP ≈ 0.75 kW or 3/4 kW. Quick mental math: 10 HP ≈ 7.5 kW, 100 HP ≈ 75 kW."
        },
        {
          term: "Mechanical HP",
          definition: "Original definition: 550 ft⋅lb/s. Power to lift 550 lbs by 1 ft in 1 second. Or 33,000 ft⋅lb/min. Equivalent to 745.699872 watts. This is what motor nameplates specify."
        },
        {
          term: "Other HP Variants",
          definition: "Electrical HP: Exactly 746 W (rounded for convenience). Metric HP (PS, CV): 735.5 W = 0.9863 mechanical HP. Boiler HP: 33,475 BTU/hr (archaic, rarely used). Always clarify which HP definition when critical."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to HP and kW Conversion",
      sections: [
        {
          title: "History of Horsepower",
          content: "Horsepower defined by James Watt in late 1700s. Purpose: Market steam engines to replace horses. Needed relatable comparison for potential customers. Watt observed horses turning mill wheels (grinding grain). Measured work: horse could lift 550 lbs by 1 ft in 1 second. Or 33,000 ft⋅lb per minute (same rate). Defined: 1 Horsepower = 550 ft⋅lb/s = 33,000 ft⋅lb/min. This became standard for rating engines, motors, pumps. Modern Equivalents: 1 HP (mechanical) = 745.699872 W (exact). Usually rounded: 1 HP ≈ 746 W or 0.746 kW. Reverse: 1 kW = 1.34102 HP. Usually rounded: 1 kW ≈ 1.34 HP. Example: 5 HP motor = 5 × 0.746 = 3.73 kW. 10 kW motor = 10 × 1.341 = 13.41 HP. International Standards: USA, Canada: HP still common on motor nameplates. Europe, Asia, most world: kW standard. IEC (International Electrotechnical Commission): Specifies kW. Both often shown on nameplates for global markets."
        },
        {
          title: "When to Use HP vs kW",
          content: "Horsepower Used: USA motor industry: NEMA standards in HP. Automotive: Engine power in HP (USA market). Historical documentation: Old equipment rated in HP. Consumer products: Lawnmowers, shop tools (USA). Quick estimates: 'A 5 HP motor for this pump.' Kilowatts Used: Most of world: IEC standards in kW. Electrical engineering: All electrical calculations in kW. Energy billing: Electricity billed per kWh (kilowatt-hour). Scientific/technical: SI units preferred. Industrial control: Modern VFDs display kW. Dual Ratings: Many motors show both: '10 HP (7.5 kW).' Allows use in different markets. Electrical nameplates usually show kW primary. Mechanical applications may show HP primary. Practical Advice: For international projects: Use kW as primary unit. For USA domestic: HP acceptable but include kW equivalent. Energy analysis: Always use kW (utility bills in kWh). Motor selection: Check if catalog uses HP or kW, convert as needed."
        },
        {
          title: "Common Motor Sizes and Conversions",
          content: "Fractional HP Motors: 1/4 HP = 0.19 kW (186.4W). 1/3 HP = 0.25 kW (248.5W). 1/2 HP = 0.37 kW (373W). 3/4 HP = 0.56 kW (560W). 1 HP = 0.75 kW (746W). Applications: Small pumps, fans, conveyor motors. Standard Integral HP Motors: 1.5 HP = 1.1 kW. 2 HP = 1.5 kW. 3 HP = 2.2 kW. 5 HP = 3.7 kW. 7.5 HP = 5.5 kW. 10 HP = 7.5 kW. 15 HP = 11 kW. 20 HP = 15 kW. 25 HP = 18.5 kW. 30 HP = 22 kW. Applications: Industrial pumps, compressors, machine tools. Large Motors: 50 HP = 37 kW. 75 HP = 55 kW. 100 HP = 75 kW. 150 HP = 110 kW. 200 HP = 150 kW. 250 HP = 185 kW. 300 HP = 225 kW. 400 HP = 300 kW. 500 HP = 375 kW. 1000 HP = 750 kW. Applications: Large compressors, fans, pumps, process equipment. Notice Pattern: Odd numbers common in HP: 3, 5, 7.5, 15, 25, 50, 75... Rounder numbers in kW: 2.2, 3.7, 5.5, 11, 18.5, 37, 55... This reflects historical development in different regions."
        },
        {
          title: "Power, Current, and Motor Sizing",
          content: "Relationship Between Power and Current: Power determines current draw. Higher HP/kW = higher current. Formula: I = P / (V × PF × η × √3) for 3-phase. Example 1: 10 HP (7.46 kW), 460V, 3-phase, PF=0.85, η=0.90. I = 7460 / (460 × 0.85 × 0.90 × 1.732) = 12.2A. Example 2: 50 HP (37.3 kW), 460V, 3-phase, PF=0.88, η=0.92. I = 37,300 / (460 × 0.88 × 0.92 × 1.732) = 60.9A. Sizing Conductors: Conductors sized for 125% of motor FLC (NEC). 10 HP motor (12.2A): Wire for 12.2 × 1.25 = 15.25A. Use 14 AWG (20A). 50 HP motor (60.9A): Wire for 60.9 × 1.25 = 76.1A. Use 4 AWG (85A). Circuit Breakers: Typically 150-250% of FLC. 10 HP: 12.2A → 20A breaker. 50 HP: 60.9A → 100A breaker. Overload Protection: Thermal overloads set at 115-125% FLC. 10 HP: 12.2A → 14-15A overload. 50 HP: 60.9A → 70-76A overload. Motor Selection: Size for load requirement plus safety margin. Typical: 125% of calculated load. Avoid oversizing >150% (poor efficiency at partial load). Consider service factor: Allows 115% continuous overload. SF 1.15 motor can run continuously at 11.5 HP (if rated 10 HP)."
        },
        {
          title: "Energy Consumption and Cost",
          content: "Energy Calculation: Energy (kWh) = Power (kW) × Time (hours). Must convert HP to kW for energy calculations. Example 1: 5 HP motor runs 8 hours/day, 22 days/month. Power = 5 HP × 0.746 = 3.73 kW. Monthly hours = 8 × 22 = 176 hours. Energy = 3.73 × 176 = 656.5 kWh/month. At $0.10/kWh: Cost = 656.5 × $0.10 = $65.65/month. Annual: $65.65 × 12 = $788/year. Example 2: 100 HP motor, continuous operation, 90% average load, 92% efficiency. Average power = 100 × 0.90 × 0.746 / 0.92 = 73.0 kW. Monthly hours = 24 × 30 = 720 hours. Energy = 73.0 × 720 = 52,560 kWh/month. At $0.08/kWh: Cost = 52,560 × $0.08 = $4,205/month. Annual: $50,460/year. Efficiency Impact: Standard efficiency (90%): 100 HP motor uses 100 × 0.746 / 0.90 = 82.9 kW. Premium efficiency (95%): 100 HP motor uses 100 × 0.746 / 0.95 = 78.5 kW. Difference: 82.9 - 78.5 = 4.4 kW saved. Annual savings: 4.4 kW × 8760 hr × $0.08/kWh = $3,083/year. Premium motor may cost $1000 more but saves $3083/year. Payback: 4 months. Total Ownership Cost: Purchase price: One-time. Energy cost: Ongoing, usually exceeds purchase price within 1-2 years. Maintenance: Ongoing, 5-10% of purchase price annually. For 100 HP motor, 20-year life, 8760 hr/year, $0.08/kWh: Purchase: $10,000 (one-time). Energy: $50,460/year × 20 = $1,009,200 (98% of total cost). Maintenance: $500/year × 20 = $10,000 (1% of total cost). Total: $1,029,200. Energy dominates total cost! Even small efficiency improvements save significantly."
        },
        {
          title: "International Variations",
          content: "Different HP Definitions: Mechanical/Imperial HP: 550 ft⋅lb/s = 745.7 W. USA, Canada, used for motors. Metric HP (Pferdestärke PS, Chevaux-Vapeur CV): 75 kgf⋅m/s = 735.5 W. Germany, France, some others. 0.986 mechanical HP. Electrical HP: Exactly 746 W. Simplified for electrical calculations. Boiler HP: 33,475 BTU/hr = 9.81 kW. Archaic, rarely used today. Conversions: 1 Mechanical HP = 745.7 W = 1.014 Metric HP = 0.999 Electrical HP. 1 Metric HP = 735.5 W = 0.986 Mechanical HP. Always specify which HP when precision matters! Voltage and Frequency: North America: 460V, 60 Hz common for industrial. Europe/Asia: 400V, 50 Hz common. 60 Hz motors produce 20% more power than 50 Hz (same frame). 50 Hz motors have 20% higher torque per HP. Motor Design Standards: NEMA (USA): Defines frame sizes, performance. Dimensions, mounting, shaft size standardized. Ratings in HP. IEC (International): Defines frame sizes, performance (different from NEMA). Dimensions slightly different. Ratings in kW. Frame sizes incompatible: NEMA 286T ≠ IEC 160M (different dimensions). Selecting Motors Globally: Specify voltage, frequency, and power. Use kW to avoid HP confusion. Check if NEMA or IEC frame needed. Verify nameplate shows both HP and kW. For replacement: Match frame size exactly (NEMA or IEC). Convert power carefully considering voltage/frequency differences."
        }
      ]
    }
  },

  // Battery & Energy Calculators
  "battery-capacity": {
    howToUse: {
      title: "How to Use the Battery Capacity Calculator",
      steps: [
        "Enter the battery capacity value in either Ah (amp-hours) or Wh (watt-hours)",
        "Select the appropriate unit (Ah or Wh) from the dropdown",
        "Enter the battery voltage in volts (e.g., 12V, 24V, 48V)",
        "Click 'Calculate Battery Capacity' to see the results",
        "View capacity in Ah, energy in Wh and kWh"
      ]
    },
    metrics: {
      title: "Understanding Battery Capacity Metrics",
      items: [
        {
          term: "Amp-Hours (Ah)",
          definition: "Battery capacity measured in amp-hours. Indicates how many amps a battery can deliver for one hour. A 100Ah battery can theoretically supply 100A for 1 hour, 50A for 2 hours, or 10A for 10 hours. Actual capacity varies with discharge rate (Peukert's Law)."
        },
        {
          term: "Watt-Hours (Wh)",
          definition: "Energy storage measured in watt-hours. Calculated as Ah × Voltage. More universal than Ah since it accounts for voltage. A 12V 100Ah battery stores 1200Wh. A 24V 50Ah battery also stores 1200Wh (same energy, different voltage/capacity)."
        },
        {
          term: "Kilowatt-Hours (kWh)",
          definition: "Energy in thousands of watt-hours. Common unit for utility billing and large batteries. 1 kWh = 1000Wh. A 12V 100Ah battery = 1.2 kWh. Tesla Powerwall 2: 13.5 kWh. Electric vehicles: 40-100+ kWh battery packs."
        },
        {
          term: "C-Rate",
          definition: "Discharge/charge rate relative to capacity. 1C = discharge in 1 hour. 0.5C = discharge in 2 hours. 2C = discharge in 30 minutes. For 100Ah battery: 1C = 100A, 0.5C = 50A, 2C = 200A. Higher C-rates reduce effective capacity (Peukert effect)."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Battery Capacity",
      sections: [
        {
          title: "Understanding Ah vs Wh",
          content: "Amp-Hours (Ah): Current-based rating. Depends on voltage for energy content. 100Ah at 12V ≠ 100Ah at 24V in energy. Use when: Comparing batteries of same voltage. Calculating runtime with known current draw. Sizing battery banks (series/parallel). Watt-Hours (Wh): Energy-based rating. Independent of voltage configuration. 1200Wh is same energy regardless of voltage. Use when: Comparing different voltage systems. Calculating energy needs. Sizing off-grid solar systems. Conversion: Wh = Ah × V. Ah = Wh / V. Example 1: 12V 100Ah battery. Energy = 100 × 12 = 1200Wh = 1.2kWh. Example 2: 48V 200Ah battery. Energy = 200 × 48 = 9600Wh = 9.6kWh. Example 3: 5kWh energy storage at 24V. Capacity = 5000 / 24 = 208.3Ah. Which to Use: Electrical specs: Use Ah (current ratings, wire sizing). Energy analysis: Use Wh or kWh (runtime, solar sizing). System comparison: Use Wh (compare different voltages)."
        },
        {
          title: "Battery Chemistry and Capacity",
          content: "Lead-Acid Batteries: Flooded, AGM, Gel types. Nominal: 2.0V per cell, 6V/12V common. Capacity at 20-hour rate (0.05C). Usable: 50% DoD recommended. 100Ah rated = 50Ah usable. Deep cycle can handle 80% DoD. Capacity decreases with age, cycles. Cost: $100-200 per kWh. Applications: Automotive, UPS, off-grid solar. Lithium-Ion Batteries: LiFePO4, NMC, NCA chemistries. Nominal: 3.2-3.7V per cell. Capacity at 1C or higher discharge rate. Usable: 80-90% DoD safe. 100Ah rated = 80-90Ah usable. Minimal capacity fade with cycles. Cost: $300-600 per kWh (declining). Applications: EVs, portable power, grid storage. Nickel-Metal Hydride (NiMH): Nominal: 1.2V per cell. Capacity at 0.2C discharge. Usable: 80% DoD typical. Self-discharge: Higher than Li-ion. Cost: $200-400 per kWh. Applications: Hybrid vehicles, power tools. Comparison Example: All rated 100Ah nominal. Lead-acid 12V: 1.2kWh total, 0.6kWh usable (50% DoD). LiFePO4 12.8V: 1.28kWh total, 1.02kWh usable (80% DoD). NiMH 12V: 1.2kWh total, 0.96kWh usable (80% DoD). Li-ion provides nearly 2× usable energy per Ah rating!"
        },
        {
          title: "Calculating Runtime",
          content: "Basic Formula: Runtime (hours) = Capacity (Ah) / Load Current (A). Must account for: Depth of Discharge (DoD). Inverter efficiency (if using). Peukert effect (capacity loss at high currents). Temperature effects. Example 1 (Simple): 12V 100Ah battery, 5A load. Runtime = 100 / 5 = 20 hours (theoretical). Realistic with 50% DoD: 20 × 0.5 = 10 hours. Example 2 (With Inverter): 12V 200Ah battery, 500W AC load, 85% inverter efficiency. DC current = 500 / (12 × 0.85) = 49.0A. Runtime = 200 / 49.0 = 4.08 hours (100% DoD). With 50% DoD: 4.08 × 0.5 = 2.04 hours. Example 3 (High Discharge): 12V 100Ah battery rated at 20-hour rate. Load: 50A (0.5C). Peukert exponent 1.3 for lead-acid. Effective capacity = 100 / (50/5)^(1.3-1) = 82.4Ah. Runtime = 82.4 / 50 = 1.65 hours. At 20-hour rate (5A): 100 / 5 = 20 hours. At 1-hour rate (50A): only 1.65 hours (not 2 hours)! Temperature Impact: 25°C (77°F): Rated capacity. 0°C (32°F): 70-80% capacity. -20°C (-4°F): 50% capacity or less. 40°C (104°F): 105% capacity but accelerated aging. Cold significantly reduces available energy!"
        }
      ]
    }
  },

  "battery-life": {
    howToUse: {
      title: "How to Use the Battery Life Calculator",
      steps: [
        "Enter the battery capacity in Ah or mAh",
        "Select the appropriate capacity unit from the dropdown",
        "Enter the load current in A or mA",
        "Select the current unit (match your measurement)",
        "Enter the discharge rate (typical: 0.8 for 80% usable capacity)",
        "Click 'Calculate Battery Life' to see runtime results",
        "View runtime in hours, minutes, and days"
      ]
    },
    metrics: {
      title: "Understanding Battery Life Metrics",
      items: [
        {
          term: "Runtime Hours",
          definition: "How long the battery will last under the specified load. Calculated from usable capacity divided by load current. Assumes constant load and ideal conditions. Actual runtime may vary with temperature, battery age, and discharge profile."
        },
        {
          term: "Discharge Rate",
          definition: "Percentage of total capacity safely usable. Lead-acid: 0.5 (50%) for longevity, 0.8 (80%) for deep-cycle. Lithium: 0.8-0.9 (80-90%) safe. Affects cycle life: Deeper discharge = fewer cycles. Balance runtime needs vs battery lifespan."
        },
        {
          term: "Usable Capacity",
          definition: "Actual amp-hours available for use after applying discharge rate limit. Total capacity × discharge rate. 100Ah battery at 80% discharge = 80Ah usable. Protects battery from damage and extends cycle life."
        },
        {
          term: "Load Current",
          definition: "Continuous current drawn by the connected load. Higher current = shorter runtime. Also reduces effective capacity (Peukert effect). Measure actual current for accuracy. Don't rely solely on nameplate ratings."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Battery Runtime Estimation",
      sections: [
        {
          title: "Factors Affecting Battery Life",
          content: "Discharge Rate (C-Rate): Low rate (0.05C): Battery delivers full rated capacity or more. Medium rate (0.2-1C): Near-rated capacity. High rate (>1C): Reduced capacity due to Peukert effect. Example: 100Ah battery. At 5A (0.05C): ~100Ah available, 20hr runtime. At 50A (0.5C): ~85Ah available, 1.7hr runtime (not 2hr). At 100A (1C): ~75Ah available, 0.75hr runtime (not 1hr). Temperature: 25°C (77°F): Rated capacity. 0°C (32°F): 70-80% capacity (cold slows chemical reactions). -20°C (-4°F): 50% capacity (extreme cold). 40°C (104°F): 105% capacity but accelerated aging. Battery Age: New battery: 100% capacity. After 500 cycles (lead-acid): 80% capacity typical. After 2000 cycles (lithium): 80% capacity typical. Old batteries have reduced runtime even at same current. State of Charge: Full charge: Maximum runtime. 50% charged: Half runtime. Don't confuse DoD limit with current charge state. Battery Chemistry: Lead-acid: Significant Peukert effect, temperature sensitive. Lithium: Minimal Peukert effect, less temperature sensitive. NiMH: Moderate Peukert effect, higher self-discharge. Load Profile: Constant load: Easier to calculate. Variable load: Average current over time. Pulsed loads: May not affect runtime much if duty cycle low. Starting surges: Can cause voltage sag, reduce runtime."
        },
        {
          title: "Peukert's Law",
          content: "Concept: Battery capacity decreases at higher discharge rates. Named after German scientist Wilhelm Peukert (1897). More current = less total energy delivered. Formula: t = C / I^k. Where: t = time to discharge. C = nominal capacity (Ah). I = discharge current (A). k = Peukert exponent. Peukert Exponent (k): Perfect battery: k = 1.0 (capacity independent of rate). Lead-acid: k = 1.1-1.4 (1.3 typical). AGM: k = 1.05-1.15. Lithium: k = 1.0-1.05 (nearly ideal). Lower k = better performance at high currents. Example Calculations: 100Ah lead-acid (k=1.3). Rated at 20-hour rate (5A). 5A discharge: t = 100 / 5^1.3 = 20hr (by definition). 10A discharge: t = 100 / 10^1.3 = 5.25hr (not 10hr!). 50A discharge: t = 100 / 50^1.3 = 0.76hr (not 2hr!). Capacity at each rate: 5A: 5 × 20 = 100Ah (rated). 10A: 10 × 5.25 = 52.5Ah (47.5% loss). 50A: 50 × 0.76 = 38Ah (62% loss). Practical Impact: Sizing batteries: Oversize for high-current loads. 1000W inverter load from 12V = 83A. Need 200Ah+ battery for reasonable runtime. Small 100Ah battery would give poor performance. Deep cycle vs starting: Starting batteries: High k, poor deep discharge. Deep cycle: Lower k, better at sustained loads. Runtime calculations: Must account for Peukert or overestimate runtime. Use actual discharge current, not average. Lithium Advantage: k ≈ 1.0, full capacity at high rates. 100Ah lithium delivers 100Ah even at 100A (1C). Can use smaller battery for same performance."
        },
        {
          title: "Depth of Discharge and Cycle Life",
          content: "Relationship: Deeper discharge = fewer cycles before 80% capacity. Shallower discharge = more cycles. Trade-off: runtime per cycle vs total cycles. DoD vs Cycle Life (Lead-Acid): 100% DoD: ~200-300 cycles. 80% DoD: ~400-500 cycles. 50% DoD: ~1200-1500 cycles. 30% DoD: ~3000-4000 cycles. 10% DoD: ~10,000+ cycles. DoD vs Cycle Life (Lithium): 100% DoD: ~1000-1500 cycles. 80% DoD: ~2000-3000 cycles. 50% DoD: ~5000-8000 cycles. 30% DoD: ~10,000+ cycles. Total Energy Delivered: Lead-acid 100Ah (12V, 1.2kWh): 100% DoD, 300 cycles: 300 × 1.2 = 360 kWh total. 50% DoD, 1500 cycles: 1500 × 0.6 = 900 kWh total (2.5× more). 30% DoD, 4000 cycles: 4000 × 0.36 = 1440 kWh total (4× more). Conclusion: Shallower cycling delivers more total energy. Lithium 100Ah (12.8V, 1.28kWh): 80% DoD, 3000 cycles: 3000 × 1.02 = 3060 kWh total. 50% DoD, 8000 cycles: 8000 × 0.64 = 5120 kWh total (67% more). Still significant but less dramatic than lead-acid. Practical Recommendations: Off-grid solar: Lead-acid at 50% DoD. Lithium at 80% DoD. Daily cycling: Size battery 2× daily energy need (lead-acid). Or 1.25× daily energy (lithium). Occasional use: Can use higher DoD, infrequent cycling. Emergency backup: Size for 50% DoD, extend battery life. EVs: 80-90% DoD acceptable, 10-15 year lifespan. Cost Analysis: Lead-acid: $150 per kWh, 50% DoD, 1500 cycles. Cost per cycle: $150 / 1500 = $0.10/cycle. Cost per kWh delivered: $150 / 900 = $0.17/kWh. Lithium: $500 per kWh, 80% DoD, 3000 cycles. Cost per cycle: $500 / 3000 = $0.17/cycle. Cost per kWh delivered: $500 / 3060 = $0.16/kWh. Similar cost per kWh despite higher upfront cost!"
        }
      ]
    }
  },

  "battery-charge-time": {
    howToUse: {
      title: "How to Use the Battery Charge Time Calculator",
      steps: ["Enter battery capacity in Ah or mAh", "Select capacity unit", "Enter charger current in A or mA", "Select current unit", "Enter charger efficiency (typical: 0.85)", "Enter current charge level percentage (0-100%)", "Click 'Calculate Charge Time'"]
    },
    metrics: {
      title: "Understanding Charging Time Metrics",
      items: [
        {term: "Charger Current", definition: "Maximum current the charger delivers. Higher current = faster charging but may reduce battery life. Typical: 0.1C-0.5C for lead-acid, up to 1C for lithium."},
        {term: "Charger Efficiency", definition: "Percentage of input power reaching battery. Typical: 85-95%. Lost as heat. Affects charging time and energy cost."},
        {term: "Capacity to Charge", definition: "Amp-hours needed to reach full. Total capacity × (1 - current charge level). Example: 100Ah at 50% = 50Ah to charge."},
        {term: "Charging Stages", definition: "Bulk: Constant current, fastest. Absorption: Constant voltage, slower top-off. Float: Maintenance trickle charge."}
      ]
    },
    guide: {
      title: "Complete Battery Charging Guide",
      sections: [
        {title: "Charging Methods and Stages", content: "Most chargers use multi-stage charging: Bulk stage provides constant current until battery reaches absorption voltage (typically 80-90% charged). Absorption stage holds constant voltage while current tapers as battery fills. Float stage maintains full charge at lower voltage. Lead-acid: Bulk at 14.4-14.8V, Float at 13.2-13.8V. Lithium: Bulk at 14.4-14.6V (LiFePO4), no float needed. Charging time = (Capacity to charge / Charger current) / Efficiency. Add 15-25% for absorption stage. Fast charging (>0.5C) reduces battery cycle life."},
        {title: "Safe Charge Rates by Chemistry", content: "Lead-Acid: Maximum 0.3C (C/3), typical 0.1-0.2C. Example: 100Ah battery with 10A charger (0.1C) takes ~12 hours. Lithium: Can handle 1C safely, up to 3C for special cells. Example: 100Ah LiFePO4 with 50A charger (0.5C) takes ~2.5 hours. Fast charging generates heat and reduces cycle life. Cold temperatures (<0°C) require reduced charge rates to prevent damage."},
        {title: "Temperature Effects on Charging", content: "Cold batteries (<0°C): Charge at maximum 0.05C. Risk of lithium plating in Li-ion batteries. Lead-acid accepts charge poorly when cold. Hot batteries (>45°C): Reduce charge rate or stop. Risk of thermal runaway. Optimal charging: 15-25°C. Monitor battery temperature during fast charging."}
      ]
    }
  },

  "battery-series-parallel": {
    howToUse: {
      title: "How to Use Battery Series Parallel Calculator",
      steps: ["Enter single battery voltage", "Enter single battery capacity (Ah)", "Select configuration type", "Enter number in series (if applicable)", "Enter number in parallel (if applicable)", "Click 'Calculate Configuration'"]
    },
    metrics: {
      title: "Series and Parallel Configuration Basics",
      items: [
        {term: "Series Connection", definition: "Batteries connected + to -. Voltages add, capacity stays same. Two 12V 100Ah in series = 24V 100Ah. Used for higher voltage systems."},
        {term: "Parallel Connection", definition: "Batteries connected + to +, - to -. Capacities add, voltage stays same. Two 12V 100Ah in parallel = 12V 200Ah. Used for higher capacity."},
        {term: "Series-Parallel", definition: "Combination of both. Increases voltage AND capacity. Four 6V 200Ah batteries: 2S2P = 12V 400Ah total."},
        {term: "Total Energy", definition: "Wh = Voltage × Capacity. Same regardless of configuration. Four 12V 100Ah: Series (48V 100Ah) = 4800Wh. Parallel (12V 400Ah) = 4800Wh."}
      ]
    },
    guide: {
      title: "Battery Bank Configuration Guide",
      sections: [
        {title: "Series Configuration Details", content: "In series: Voltage = Single voltage × Number in series. Capacity remains same as single battery. All cells carry same current, weakest cell limits entire string. Must match capacities closely. Higher voltage reduces current for same power, allowing smaller wire sizes. Used in: 48V telecom, EV battery packs, high-voltage solar systems."},
        {title: "Parallel Configuration Details", content: "In parallel: Capacity = Single capacity × Number in parallel. Voltage remains same. Current splits among batteries. Must match voltages closely (within 0.1V) to prevent circulating currents. Higher capacity provides longer runtime. Need heavier wiring for higher total current. Used in: RV/marine house banks, off-grid solar, long-runtime UPS systems."},
        {title: "Series-Parallel Design Best Practices", content: "Configuration strategy: First determine voltage needed, then capacity, then calculate arrangement. Example: Need 24V 400Ah from 12V 200Ah batteries. Series: 2 for 24V. Parallel: 2 strings for 400Ah. Total: 4 batteries (2S2P). Critical: Each parallel string must have same number of series batteries. Never mix old and new batteries. Use busbars for parallel connections. Fuse each parallel string individually. For lithium: BMS monitors each series cell voltage. Proper voltage balancing essential."}
      ]
    }
  },

  "solar-panel-output": {
    howToUse: {
      title: "How to Use Solar Panel Output Calculator",
      steps: ["Enter panel power rating in watts", "Enter number of panels", "Enter peak sun hours per day for your location", "Enter system efficiency (typical: 0.75)", "Click 'Calculate Solar Output'"]
    },
    metrics: {
      title: "Understanding Solar Panel Output",
      items: [
        {term: "Panel Power Rating", definition: "Nameplate wattage under standard test conditions (STC): 1000W/m² irradiance, 25°C cell temp, AM1.5 spectrum. Real-world output typically 75-85% of rated."},
        {term: "Peak Sun Hours", definition: "Equivalent hours of 1000W/m² sunlight per day. Not same as daylight hours. Varies by location and season. US average: 4-6 hours. Check NREL database for accurate local data."},
        {term: "System Efficiency", definition: "Overall system losses: Inverter (5-15%), wiring (2-3%), temperature (10-25%), soiling (2-5%), shading (0-80%). Typical: 75% (0.75). Good systems: 80-85%."},
        {term: "Daily Output", definition: "Energy produced per day: Panel Watts × Panels × Peak Hours × Efficiency. 300W panel, 5 peak hours, 75% efficiency = 1.125 kWh/day."}
      ]
    },
    guide: {
      title: "Comprehensive Solar Panel Guide",
      sections: [
        {title: "Understanding Solar Panel Output", content: "Panel ratings (STC) assume ideal conditions: 1000W/m² irradiance (bright noon sun), 25°C panel temperature, clean panels. Real-world factors: Temperature: Panels lose ~0.5%/°C above 25°C. 45°C panel = 10% power loss. Irradiance: Morning/evening <1000W/m², clouds reduce further. Angle/orientation: Off-optimal reduces output 10-30%. Soiling: Dust/pollen reduces 2-5%, bird droppings 20%+ if covering cells. Shading: Even small shade can reduce output 50%+ due to cell mismatch. System efficiency accounts for all losses. Daily energy = Rated power × Peak sun hours × System efficiency. Example: 5kW system, 5 peak sun hours, 75% efficiency = 5 × 5 × 0.75 = 18.75 kWh/day."},
        {title: "Peak Sun Hours by Location", content: "Peak sun hours vary by: Latitude: Equator ~6 hours, polar regions ~2-3 hours. Season: Summer > Spring/Fall > Winter. Example, Phoenix AZ: Summer 7 hours, Winter 5 hours. Weather: Cloudy climates have lower peak hours. Pacific Northwest ~3-4 hours. Southwest US ~5-7 hours. Find accurate data: NREL PVWatts database, NASA SSE, Local solar installers. Use annual average for sizing, consider seasonal variation for off-grid systems."},
        {title: "System Sizing for Off-Grid", content: "Calculate daily energy need: List all loads with power and hours used. Example: Lights 100W × 5hr, Fridge 150W × 24hr, TV 80W × 3hr. Daily total: 500 + 3600 + 240 = 4340Wh = 4.34kWh. Size solar array: Daily need / (Peak hours × Efficiency). 4.34kWh / (5hr × 0.75) = 1.16kW. Add 25% margin: 1.16 × 1.25 = 1.45kW. Use 5× 300W panels = 1.5kW array. Size battery: Daily need × Days autonomy / DoD. 4.34kWh × 2 days / 0.5 = 17.4kWh. Use 12V system: 17400/12 = 1450Ah. Build with 4× 12V 400Ah batteries (1600Ah, some margin)."}
      ]
    }
  },

  "ups-backup-time": {
    howToUse: {
      title: "How to Use UPS Backup Time Calculator",
      steps: ["Enter battery voltage (typically 12V)", "Enter battery capacity in Ah", "Enter connected load power in watts", "Enter inverter efficiency (typical: 0.85)", "Enter depth of discharge limit (typical: 0.8 for lithium, 0.5 for lead-acid)", "Click 'Calculate Backup Time'"]
    },
    metrics: {
      title: "UPS Backup Time Metrics",
      items: [
        {term: "Battery Voltage", definition: "Nominal voltage of UPS battery bank. Common: 12V (small UPS), 24V (medium), 48V (large). Higher voltage = lower current = smaller wires."},
        {term: "Load Power", definition: "Total wattage of connected equipment. Measure actual power, not just nameplate. Computers use 50-70% of PSU rating. Consider inrush current for motors/compressors."},
        {term: "Inverter Efficiency", definition: "Percentage of DC battery power converted to AC output. Typical: 85-95%. Higher quality inverters = higher efficiency. Efficiency drops at very light loads (<20%)."},
        {term: "Depth of Discharge", definition: "How much battery capacity to use. Lead-acid: 50% for longevity. Lithium: 80% safe. Deeper discharge = shorter battery life."}
      ]
    },
    guide: {
      title: "UPS Backup Time Complete Guide",
      sections: [
        {title: "Calculating UPS Runtime", content: "Basic formula: Runtime = (Battery Wh × DoD) / (Load W / Efficiency). Example: 12V 100Ah battery (1200Wh), 500W load, 85% efficiency, 50% DoD. Usable energy = 1200 × 0.5 = 600Wh. Actual load = 500 / 0.85 = 588W. Runtime = 600 / 588 = 1.02 hours = 61 minutes. Add derating factors: Battery age: Reduce capacity by 20% after 3-5 years. Temperature: Reduce 20% if room is hot or cold. High discharge rate: Peukert effect reduces capacity. Realistic runtime: 61 × 0.8 × 0.8 = 39 minutes. Always oversize UPS for adequate runtime."},
        {title: "UPS Sizing Best Practices", content: "Measure actual load: Use kill-a-watt meter for computers/equipment. Don't rely on nameplate ratings. Typical computer: 100-300W actual (400-600W PSU). Server rack: Measure each device, sum total. Determine required runtime: Desktop PC: 5-10 minutes (enough to save and shutdown). Home office: 30-60 minutes (weather outage). Server room: 2-4 hours (critical systems). Data center: 15-30 minutes (until generator starts). Size battery capacity: Runtime needed × Load / (Voltage × DoD × Efficiency). Example for 1-hour runtime, 1000W load, 24V, 50% DoD, 85% eff: Capacity = 1 × 1000 / (24 × 0.5 × 0.85) = 98Ah. Use 2× 12V 100Ah in series (24V 100Ah). Add 20% margin for battery aging and inefficiencies."},
        {title: "Extending UPS Battery Life", content: "Factors affecting battery life: Operating temperature: 25°C = rated life. 30°C = 50% life reduction. Keep UPS in cool room. Cycle depth: Shallow discharge = longer life. Size battery larger to reduce DoD per cycle. Float voltage: Proper float voltage prevents sulfation. Too high = water loss, too low = sulfation. Maintenance: Replace batteries every 3-5 years (lead-acid). Test UPS monthly under load. Keep batteries clean and terminals tight. Upgrade to lithium: Lithium UPS batteries: 3-5× longer life (10+ years). 80% DoD safe vs 50% lead-acid. Lighter weight, smaller footprint. Higher upfront cost but lower TCO."}
      ]
    }
  },

  "energy-storage": {
    howToUse: {
      title: "How to Use Energy Storage Calculator",
      steps: ["Enter daily energy consumption in kWh", "Enter desired days of autonomy", "Enter system voltage (12V, 24V, or 48V)", "Enter depth of discharge limit", "Enter battery efficiency (typical: 0.85)", "Click 'Calculate Storage Requirements'"]
    },
    metrics: {
      title: "Energy Storage System Metrics",
      items: [
        {term: "Daily Energy Consumption", definition: "Total kWh used per day. Measure from utility bill or energy monitor. Include all loads: lights, appliances, HVAC, pumps. Plan for future loads."},
        {term: "Days of Autonomy", definition: "Days system can run without charging. Off-grid solar: 2-3 days typical. Backup power: 1 day minimum. Critical loads: 3-7 days. More days = larger, costlier battery."},
        {term: "System Voltage", definition: "Battery bank voltage. 12V: Small systems <3kW. 24V: Medium 3-5kW. 48V: Large >5kW. Higher voltage = lower current = cheaper wiring/components."},
        {term: "Required Capacity", definition: "Battery Ah needed at system voltage. (Daily kWh × Days × 1000) / (Voltage × DoD × Efficiency). Accounts for usable capacity and losses."}
      ]
    },
    guide: {
      title: "Complete Energy Storage System Design",
      sections: [
        {title: "Sizing Energy Storage Systems", content: "Step 1 - Calculate daily load: Inventory all electrical loads. Lights: 10× 10W LED × 5hr = 500Wh. Refrigerator: 150W × 24hr × 0.4 = 1440Wh (40% duty cycle). Computer: 200W × 8hr = 1600Wh. Total: 3540Wh = 3.54kWh/day. Add 20% margin: 3.54 × 1.2 = 4.25kWh/day. Step 2 - Determine days autonomy: Off-grid solar: 2-3 days (for cloudy weather). Emergency backup: 1-2 days. Critical applications: 3-7 days. Example: 3 days autonomy. Total energy: 4.25 × 3 = 12.75kWh. Step 3 - Select voltage: Small (<3kW): 12V. Medium (3-5kW): 24V. Large (>5kW): 48V. Choose 48V for this example. Step 4 - Calculate capacity: Capacity = Energy / (Voltage × DoD × Efficiency). 12.75kWh / (48V × 0.5 × 0.85) = 625Ah at 48V. Using 12V batteries in series: 625Ah ÷ 4 batteries = 625Ah per battery (4S configuration). Use 4× 12V 700Ah batteries in series for margin."},
        {title: "System Voltage Selection", content: "12V Systems: Pros: Common battery sizes available. Simple wiring, familiar to RV/marine. Many 12V appliances available. Cons: Very high currents (>200A possible). Expensive thick wiring required. Voltage drop issues. Best for: RVs, boats, small cabins <1kW average. 24V Systems: Pros: Half the current of 12V. Good balance of current and voltage. Reasonable wire sizes. Cons: Fewer native 24V appliances. Need step-down for 12V loads. Best for: Medium homes 2-5kW average. Most common for off-grid homes. 48V Systems: Pros: Lowest current for given power. Smallest/cheapest wiring. Most efficient inverters. Standard for large systems. Cons: Higher voltage = more shock hazard. Requires series batteries (complexity). Fewer direct 48V loads. Best for: Large homes >5kW average. Commercial/industrial backup. Grid-tied with storage."},
        {title: "Battery Technology Selection", content: "Lead-Acid (Flooded): Pros: Lowest upfront cost ($100-150/kWh). Proven technology, 10+ years in stationary use. Easy to recycle. Cons: 50% usable capacity (DoD limit). Requires maintenance (water, equalization). Heavy weight. Temp sensitive. Best for: Budget-conscious off-grid. Infrequent use. Familiar with maintenance. AGM/Gel Lead-Acid: Pros: Sealed, no maintenance. Better cycle life than flooded. Handles higher discharge rates. Cons: Higher cost ($150-250/kWh). Still limited to 50-80% DoD. Temp sensitive. Best for: RV/marine (vibration resistant). Backup power (set and forget). Lithium (LiFePO4): Pros: 80-90% usable capacity. 3000+ cycles at 80% DoD. Lightweight, compact. Minimal temp sensitivity. No maintenance. Cons: High upfront cost ($400-800/kWh). Requires BMS. Some models sensitive to freezing. Best for: Daily cycling applications. Long-term lowest TCO. Space/weight constraints. Cost Comparison Example: 10kWh usable energy needed. Lead-acid: 20kWh nominal (50% DoD) = $2000-3000. 1500 cycles, 30MWh lifetime. Cost: $0.10/kWh. Lithium: 12kWh nominal (80% DoD) = $5000-9000. 3000+ cycles, 36MWh+ lifetime. Cost: $0.14-0.25/kWh. Lead-acid cheaper upfront, lithium better long-term if cycling daily."}
      ]
    }
  },

  "battery-internal-resistance": {
    howToUse: {
      title: "How to Use Battery Internal Resistance Calculator",
      steps: ["Measure open circuit voltage (battery at rest, no load)", "Connect a known load and measure voltage under load", "Measure the load current", "Enter all three values", "Click 'Calculate Internal Resistance'"]
    },
    metrics: {
      title: "Battery Internal Resistance Metrics",
      items: [
        {term: "Open Circuit Voltage", definition: "Battery voltage with no load. Measure after 2+ hours rest for lead-acid, 30+ min for lithium. Indicates state of charge. Should be stable if battery healthy."},
        {term: "Load Voltage", definition: "Battery voltage while delivering current. Always lower than open circuit due to internal resistance drop. Larger drop = higher resistance or heavier load."},
        {term: "Internal Resistance", definition: "Opposition to current flow inside battery. Calculated: (V_open - V_load) / Current. Lower is better. Increases with age, sulfation, corrosion. Typical: 5-20mΩ new, 50-100mΩ end-of-life."},
        {term: "Power Loss", definition: "Power dissipated as heat inside battery. = I² × R. Reduces efficiency and runtime. Example: 50A through 20mΩ = 50² × 0.02 = 50W heat loss."}
      ]
    },
    guide: {
      title: "Battery Internal Resistance Complete Guide",
      sections: [
        {title: "Understanding Internal Resistance", content: "Internal resistance (ESR - Equivalent Series Resistance) is the opposition to current flow inside a battery. Composed of: Electrode resistance. Electrolyte resistance. Contact resistance. Separator resistance. Measured: Voltage drop under load / Current. Or: AC impedance (frequency-dependent). Typical values: New lead-acid 12V 100Ah: 5-10mΩ. New lithium 12V 100Ah: 2-5mΩ. End-of-life (either): 50-200mΩ. Lower resistance = Better power delivery. Less voltage sag under load. Higher efficiency. Less heat generation. Resistance increases with: Age and cycling. Sulfation (lead-acid). Corrosion of terminals/connections. Cold temperature. Low state of charge."},
        {title: "Measuring Internal Resistance", content: "DC Load Test Method: Measure open circuit voltage after rest period. Apply known load (resistor or device). Measure voltage under load. Measure current flowing. Calculate: R = (V_open - V_load) / I. Example: V_open = 12.6V, V_load = 12.0V, I = 30A. R = (12.6 - 12.0) / 30 = 0.02Ω = 20mΩ. AC Impedance Method: Apply small AC signal (typically 1kHz). Measure impedance. More accurate but requires special equipment. Used in battery analyzers. Practical Tips: Use substantial load (0.5-1C) for meaningful measurement. Ensure good connections (clean terminals). Measure when battery is at room temperature. Allow rest period before measuring open circuit voltage. Compare measurements over time to track degradation."},
        {title: "Internal Resistance and Battery Health", content: "Resistance as health indicator: New battery: Low, stable resistance. Mid-life: Gradual increase (10-20% per year). End-of-life: Rapid increase (2-3× new value). When to replace: Lead-acid: >50mΩ for 12V 100Ah. Lithium: >10mΩ for 12V 100Ah. Or: >2× initial resistance. Or: Noticeable voltage sag under normal loads. Causes of high resistance: Lead-acid: Sulfation: Hard lead sulfate crystals on plates. Corrosion: Internal plate corrosion. Dry-out: Lost electrolyte (flooded cells). Grid corrosion: Positive plate grid oxidation. Lithium: SEI layer growth: Solid Electrolyte Interface thickens with cycles. Dendrite formation: Lithium metal deposits. Electrode degradation: Active material loss. Poor connections: Contact resistance increases. Prevention: Lead-acid: Avoid deep discharge. Maintain proper charge voltage. Keep electrolyte levels (flooded). Equalize regularly (flooded). Lithium: Avoid high charge/discharge currents. Keep in moderate temperature range. Use proper BMS. Store at 30-50% SOC if unused. Both: Keep terminals clean and tight. Avoid prolonged high temperature. Don't over-discharge."}
      ]
    }
  },

  "wind-turbine-power": {
    howToUse: {
      title: "How to Use Wind Turbine Power Calculator",
      steps: ["Enter wind speed at hub height in your preferred unit", "Input blade diameter (rotor diameter) of turbine", "Specify air density (default 1.225 kg/m³ at sea level)", "Enter power coefficient Cp (0.35-0.45 typical)", "Input generator efficiency (0.85-0.95 typical)", "Click 'Calculate Power Output'"]
    },
    metrics: {
      title: "Wind Turbine Power Metrics",
      items: [
        {term: "Swept Area", definition: "Circular area covered by rotating blades. A = π × (D/2)². Larger swept area = more power capture. Doubling diameter = 4× power capacity."},
        {term: "Theoretical Power", definition: "Total power available in wind passing through swept area. P = 0.5 × ρ × A × V³. Cubic relationship: Doubling wind speed = 8× power."},
        {term: "Power Coefficient (Cp)", definition: "Efficiency of converting wind power to shaft power. Betz limit: 0.593 (59.3%) maximum theoretical. Practical turbines: 0.35-0.45. Modern large turbines: 0.45-0.50."},
        {term: "Actual Power Output", definition: "Electrical power generated after all losses. Theoretical × Cp × Generator efficiency. Rated power achieved at design wind speed (typically 12-15 m/s)."}
      ]
    },
    guide: {
      title: "Complete Wind Turbine Power Guide",
      sections: [
        {title: "Wind Power Fundamentals", content: "Wind power is proportional to V³ (cubic relationship): 5 m/s wind: 1× power baseline. 10 m/s wind: 8× power (2³ = 8). 15 m/s wind: 27× power (3³ = 27). This makes wind resource assessment critical - small increase in average wind speed = large increase in energy production. Power formula: P = 0.5 × ρ × A × V³ × Cp × ηg. Where: ρ = air density (1.225 kg/m³ at sea level, 15°C). Decreases with altitude (~1.0 at 2000m). Decreases with temperature. A = swept area (π × r²). V = wind speed (m/s). Cp = power coefficient (0.35-0.50). ηg = generator + gearbox efficiency (0.85-0.95). Example calculation: 100m diameter turbine, 12 m/s wind: A = π × 50² = 7854 m². P_theoretical = 0.5 × 1.225 × 7854 × 12³ = 8.27 MW. P_actual = 8.27 × 0.45 × 0.92 = 3.43 MW. This is the instantaneous power at 12 m/s wind speed."},
        {title: "Wind Speed Considerations", content: "Hub height matters: Wind speed increases with height above ground. Power law: V_h = V_ref × (h/h_ref)^α. Where α ≈ 0.14 (open terrain) to 0.40 (urban). Example: 8 m/s at 10m height → 10.4 m/s at 80m height (α=0.14). Power increases: (10.4/8)³ = 2.2× at turbine height! Wind resource classes: Class I: Low wind sites (<6.5 m/s avg). Class II: Medium wind (6.5-7.5 m/s). Class III: High wind (7.5-8.5 m/s). Class IV: Very high wind (>8.5 m/s). Capacity factor increases dramatically with class: Class I: 15-20% capacity factor. Class II: 25-30%. Class III: 35-40%. Class IV: 40-50%. Annual energy production: Need wind speed distribution (Weibull). Can't use simple average wind speed. Typically measure hourly for 1+ year. Example: 3 MW turbine, 30% capacity factor: 3000 kW × 8760 hr/yr × 0.30 = 7884 MWh/yr."},
        {title: "Turbine Sizing and Selection", content: "Residential/Small turbines: 1-10 kW rated power. 3-7m blade diameter. Tower height: 15-40m. Cost: $3,000-$8,000/kW installed. Best for: Off-grid homes, farms, remote sites. Payback: 10-20 years (highly site dependent). Commercial/Community turbines: 100-500 kW rated power. 20-40m blade diameter. Tower height: 40-80m. Cost: $2,000-$4,000/kW installed. Best for: Farms, businesses, small communities. Payback: 8-15 years. Utility-scale turbines: 2-15 MW rated power. 80-220m blade diameter. Tower height: 80-150m. Cost: $1,200-$1,800/kW installed. Best for: Wind farms, utility power generation. Payback: 6-12 years. Selection criteria: Average wind speed (most critical): Need >5 m/s average for small turbines. >6.5 m/s for utility turbines. Site accessibility: Can large equipment reach site? Maintenance access year-round? Grid connection: Distance to grid (if grid-tied). Transmission capacity. Zoning and setbacks: Height restrictions. Distance from buildings/property lines. Noise regulations."}
      ]
    }
  },

  "solar-array-sizing": {
    howToUse: {
      title: "How to Use Solar Array Sizing Calculator",
      steps: ["Enter daily or monthly energy consumption from utility bill", "Input average peak sun hours for your location (3-6 typical)", "Specify solar panel wattage (300-450W typical)", "Set system efficiency (0.75-0.85 typical)", "Enter days of autonomy for battery backup (off-grid)", "Configure battery voltage and depth of discharge", "Click 'Calculate Solar Array Size'"]
    },
    metrics: {
      title: "Solar Array Sizing Metrics",
      items: [
        {term: "Number of Panels", definition: "Solar panels needed to meet daily energy demand. Accounts for system efficiency and peak sun hours. More panels = more power capacity."},
        {term: "Total Array Wattage", definition: "Combined DC power rating of all panels. Sum of individual panel wattages. Inverter must handle this capacity. Typical residential: 5-10 kW."},
        {term: "Peak Sun Hours", definition: "Equivalent hours of 1000 W/m² solar irradiance per day. Not actual daylight hours. Varies by location and season. Example: 5 peak hours = 5000 Wh/m²/day."},
        {term: "Battery Capacity", definition: "Amp-hours needed for specified autonomy days. Sized for energy storage, not panel output. Must account for depth of discharge limits."}
      ]
    },
    guide: {
      title: "Complete Solar Array Sizing Guide",
      sections: [
        {title: "System Sizing Methodology", content: "Step-by-step sizing process: 1. Determine daily energy consumption: Review 12 months utility bills. Calculate average daily kWh. Add 10-20% for growth. Example: 900 kWh/month = 30 kWh/day. 2. Find peak sun hours for location: NREL PVWatts or similar tool. Use yearly average or worst-case month. Example: Phoenix 6.5h, Seattle 3.5h, Dallas 5.0h. 3. Calculate system efficiency: DC-to-AC (inverter): 0.96-0.98. Wiring losses: 0.98. Temperature derating: 0.90-0.96 (hotter = worse). Soiling/dirt: 0.95-0.98. Shading: 0.95-1.00 (if applicable). Mismatch: 0.98-0.99. Total typical: 0.75-0.82. Use 0.78 as conservative estimate. 4. Calculate required array size: Daily energy = 30 kWh. Peak hours = 5.0. Efficiency = 0.78. Required DC = 30 / (5.0 × 0.78) = 7.69 kW. 5. Select panel size and quantity: Using 400W panels: 7690W / 400W = 19.2 → 20 panels. Total array: 20 × 400W = 8.0 kW DC. Expected daily: 8.0 × 5.0 × 0.78 = 31.2 kWh (meets need)."},
        {title: "Grid-Tied vs Off-Grid Sizing", content: "Grid-tied systems: Size to offset utility consumption: 100% offset: Array matches annual consumption. 80% offset: Smaller array, still have utility bill. 120% offset: Net producer (if net metering allowed). No battery typically (grid is 'battery'). Simpler, lower cost. Size based on: Annual consumption / (365 × peak hours × efficiency). Off-grid systems: Must meet 100% of loads: Size for worst-case season (winter typically). Include all loads (no grid backup). Add significant margin (20-30%). Require battery storage: Days of autonomy: 2-3 typical. Battery capacity (Ah): (Daily Wh × Days) / (Voltage × DoD × Efficiency). Example: 30kWh/day, 3 days, 48V system, 50% DoD, 85% eff: Capacity = (30000 × 3) / (48 × 0.5 × 0.85) = 4412 Ah. Using 200Ah batteries: 4412 / 200 = 22 batteries. Cost comparison: Grid-tied 8kW: $12,000-$20,000 (panels + inverter). Off-grid 8kW: $30,000-$50,000 (+ batteries, charge controller)."},
        {title: "Location and Mounting Considerations", content: "Optimal tilt angle: Latitude-based rule: Tilt ≈ Latitude angle. Seasonal adjustment: Summer: Latitude - 15°. Winter: Latitude + 15°. Fixed optimal: Latitude (compromise). Impact: Optimal vs horizontal: +20-40% energy. Optimal vs ±20° off: -5-10% energy. Mounting types: Fixed tilt (most common): Roof mount: Cheapest, uses existing structure. Ground mount: Better angle, easier access. Carport/awning: Dual purpose. Tracking systems: Single-axis (E-W): +25-35% energy vs fixed. Cost: +$0.50-1.00/W. Dual-axis: +35-45% energy vs fixed. Cost: +$1.00-1.50/W. Rarely economical for residential. Shading analysis: Even 10% shading → 40-80% power loss (due to series strings). Use microinverters or power optimizers if shading. Avoid morning/afternoon shading if possible. Trees grow - plan ahead! Roof requirements: Age: >10 years left minimum. Structure: Must support 3-4 lb/ft² (panels + mounting). Orientation: South-facing ideal (north hemisphere). East/west acceptable (-15-20% energy)."}
      ]
    }
  },

  "renewable-payback": {
    howToUse: {
      title: "How to Use Renewable Energy Payback Calculator",
      steps: ["Enter total system cost before incentives", "Input any incentives, rebates, or grants available", "Specify federal/state tax credit percentage", "Enter annual energy production in kWh", "Input current electricity rate ($/kWh)", "Set expected annual electricity rate increase (2-4% typical)", "Enter annual maintenance cost", "Specify system lifespan (25-30 years for solar)", "Click 'Calculate Payback & ROI'"]
    },
    metrics: {
      title: "Renewable Energy Financial Metrics",
      items: [
        {term: "Simple Payback Period", definition: "Years to recover initial investment without considering rate increases. Net Cost / Annual Savings. Shorter = better investment. Residential solar: 6-12 years typical."},
        {term: "Net System Cost", definition: "Out-of-pocket cost after incentives and tax credits. Gross Cost - Rebates - (Cost × Tax Credit%). This is the actual investment amount."},
        {term: "Return on Investment (ROI)", definition: "Percentage return over system lifetime. (Lifetime Savings / Net Cost) × 100. Higher = better investment. Should compare to alternative investments."},
        {term: "Lifetime Savings", definition: "Total savings minus net cost over system life. Accounts for electricity rate increases. Panel degradation (~0.5%/year). Maintenance costs."}
      ]
    },
    guide: {
      title: "Complete Renewable Energy Financial Guide",
      sections: [
        {title: "Understanding Investment Returns", content: "Financial metrics explained: Simple payback: Time to recover investment. Doesn't account for: Time value of money. Rate increases. Degradation. Use for rough comparison only. Net Present Value (NPV): Money value in today's dollars. Accounts for discount rate (opportunity cost). Positive NPV = good investment. Solar often has NPV > $10,000. Internal Rate of Return (IRR): Effective annual return rate. Compare to stock market (7-10% historical). Solar IRR: 8-15% typical (better in high-cost areas). Levelized Cost of Energy (LCOE): Cost per kWh over system lifetime. Total costs / Total kWh produced. Solar LCOE: $0.03-0.08/kWh. Compare to utility: $0.10-0.30/kWh. Example calculation: System cost: $20,000. Incentives: $2,000. Tax credit (30%): $6,000. Net cost: $12,000. Annual production: 10,000 kWh. Electricity rate: $0.12/kWh. Annual savings: $1,200. Simple payback: $12,000 / $1,200 = 10 years. But with 3% annual rate increase: Year 1: $1,200. Year 10: $1,569. Year 25: $2,510. Total 25-year savings: $44,728. Net profit: $44,728 - $12,000 = $32,728. ROI: 273%. IRR: ~12%."},
        {title: "Incentives and Tax Credits", content: "Federal Investment Tax Credit (ITC): 30% through 2032 (US). Applies to: System equipment cost. Installation labor. Permitting fees. Does not apply to: Battery storage (separate credit). Maintenance. Repairs. How to claim: File IRS Form 5695 with tax return. Can carry forward unused credit. State and local incentives: State tax credits: Varies by state (0-25% typical). Property tax exemptions: System doesn't increase property tax. Sales tax exemptions: No sales tax on equipment. Rebates: Utility or state programs ($0.10-1.00/W). SREC programs (Solar Renewable Energy Credits): Sell certificates for energy produced. Value: $50-300/MWh depending on state. Additional 10-15% return in some markets. Net metering: Sell excess production to grid. Full retail rate vs wholesale rate (varies by utility). Can significantly improve economics. Financing impacts: Cash purchase: Best ROI, fastest payback. Loan: Spreads cost, may increase total spend. Interest reduces ROI. PPA/Lease: $0 upfront, lower total savings. Typically 10-20% less savings than ownership."},
        {title: "Financial Decision Factors", content: "When solar makes financial sense: High electricity rates: >$0.12/kWh: Usually good investment. >$0.15/kWh: Excellent investment. <$0.10/kWh: Marginal (depends on incentives). Good solar resource: >4.5 peak sun hours average: Good. >5.5 peak sun hours: Excellent. <3.5 peak sun hours: Challenging economics. Available incentives: 30% ITC + state incentives: Payback 6-10 years typical. ITC only: Payback 10-15 years. No incentives: Payback 15-20+ years. Long-term occupancy: Planning to stay >10 years: Usually worth it. May move in <5 years: Consider carefully. Investment vs rental: Payback <8 years: Beat many investments. IRR >10%: Competitive with stock market. LCOE <50% of utility rate: Strong savings. When to wait: Roof needs replacement soon. Major electrical upgrades needed. Trees need removal first. Planning to move soon. Better to wait and avoid complexity. When to proceed now: Incentives expiring soon. Rate increases expected. Can use power now. Good financial position."}
      ]
    }
  },

  "grid-tie-system": {
    howToUse: {
      title: "How to Use Grid Tie System Calculator",
      steps: ["Enter monthly energy consumption from utility bill", "Input desired energy offset percentage (100% = full offset)", "Specify average peak sun hours for your location", "Enter solar panel wattage (300-450W typical)", "Set system efficiency (0.75-0.82 for grid-tie)", "Select grid voltage (120V/240V residential typical)", "Input net metering rate from utility", "Click 'Calculate Grid Tie System'"]
    },
    metrics: {
      title: "Grid Tie System Metrics",
      items: [
        {term: "Energy Offset", definition: "Percentage of consumption met by solar. 100% = no electric bill (except grid fees). 120% = net producer with credits. Lower % = smaller system, lower cost."},
        {term: "Inverter Size", definition: "AC power rating needed for grid connection. Typically 80-90% of DC array wattage. Must match grid voltage and frequency. String inverter vs microinverters."},
        {term: "Net Metering", definition: "Utility credits for excess solar production. Retail rate: Dollar-for-dollar credit (most common). Wholesale rate: Lower credit for excess (some utilities). Annual true-up: Credits roll year-to-year."},
        {term: "Annual Production", definition: "Total kWh generated per year. Varies by season (winter lower, summer higher). Should closely match consumption for 100% offset."}
      ]
    },
    guide: {
      title: "Complete Grid Tie Solar System Guide",
      sections: [
        {title: "Grid-Tied System Fundamentals", content: "How grid-tied systems work: Solar panels → Inverter → Home loads: Inverter converts DC to AC. Matches grid voltage and frequency. Powers home loads first. Excess to grid (net metering): Meter runs backwards (or credits account). Utility buys excess at net metering rate. Night/cloudy: Grid supplies power. No batteries needed: Grid acts as infinite battery. Simpler, lower cost than off-grid. Still have power when solar not producing. Pros of grid-tied: Lower cost (no batteries): $2.50-3.50/W typical. Batteries add: $1.00-2.00/W. Net metering credits: Get value for excess production. Can oversize system if beneficial. Simpler installation: No charge controller. No battery management. Easier permitting. Higher ROI: Less equipment = better economics. Payback 6-12 years typical. Cons of grid-tied: No backup power: Power out = solar off (anti-islanding). Utility outage = no power. Utility dependent: Net metering policies can change. Interconnection approval required. Subject to utility rate changes."},
        {title: "System Sizing for Grid-Tied", content: "Determining system size: Review 12 months consumption: Get total annual kWh. Identify seasonal patterns. Note peak usage months. Calculate daily average: Annual kWh / 365 days. Or monthly average × 12 / 365. Choose offset percentage: 100% offset: Target is annual consumption. Pros: Minimize electric bill. Maximize savings. Cons: May overproduce in summer, underproduce in winter. <100% offset (80-90%): Smaller, cheaper system. Still significant savings. Avoid overproduction issues. >100% offset (110-130%): Net producer with credits. Beneficial if: Expanding home/loads. Electric vehicle planned. Utility has good net metering. Size calculation: Annual consumption: 12,000 kWh. Target offset: 100%. Peak sun hours: 5.0. System efficiency: 0.78. Required DC: 12000 / (365 × 5.0 × 0.78) = 8.43 kW. Using 400W panels: 8430 / 400 = 21.1 → 22 panels. Total: 22 × 400W = 8.8 kW DC. Expected annual: 8800 × 5.0 × 365 × 0.78 = 12,535 kWh. Offset: 104% (slight overproduction)."},
        {title: "Inverter Selection and Grid Connection", content: "Inverter types: String inverters: One inverter for whole array. Most common, lowest cost. Cons: Shading affects whole string. Single point of failure. Power optimizers: DC-DC optimizers per panel. Central inverter. Benefits: Panel-level optimization. String inverter benefits. Cost: +$0.20-0.40/W vs string. Microinverters: AC inverter per panel. Pros: No single point of failure. Panel-level monitoring. Best for shading. Cons: Higher cost (+$0.30-0.50/W). More electronics on roof. Sizing inverter: DC-to-AC ratio: Residential: 1.10-1.25:1 typical. Commercial: 1.15-1.30:1. Higher ratio = more energy (clipping OK). Example: 8.8 kW DC array. Using 1.20 ratio. Inverter: 8800 / 1.20 = 7.3 kW AC. Select 7.6 kW inverter. Grid connection: Voltage matching: Residential: 120/240V split-phase. Commercial: 208/480V three-phase. Inverter must match. Interconnection: Apply to utility for permission. Engineering review required. May require upgrades. Approval before energizing!  Net metering agreement: Lock in rate schedule. Understand credit rollover. Know excess handling."}
      ]
    }
  }
};

export function getCalculatorAccordion(id: string): CalculatorAccordionContent | null {
  return accordionContent[id] || null;
}
