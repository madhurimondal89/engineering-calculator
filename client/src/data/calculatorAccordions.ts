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
  }
};

export function getCalculatorAccordion(id: string): CalculatorAccordionContent | null {
  return accordionContent[id] || null;
}
