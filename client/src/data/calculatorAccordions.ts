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
        "For Color to Value: Select the color of each band on your resistor from the dropdown menus.",
        "The calculator displays a visual representation of the resistor with your selected colors.",
        "The resistance value, tolerance, and acceptable range are calculated automatically.",
        "For Value to Color: Enter the desired resistance value in ohms in the input field.",
        "The calculator will display the appropriate color bands needed for that resistance.",
        "Refer to the color code reference chart at the bottom for quick reference.",
        "The calculator supports standard 4-band resistors with ±5% tolerance (Gold) as default."
      ]
    },
    metrics: {
      title: "Understanding the Metrics",
      items: [
        {
          term: "1st Band (First Digit)",
          definition: "The first significant digit of the resistance value. Colors range from Black (0) to White (9). This forms the tens place of the base resistance number."
        },
        {
          term: "2nd Band (Second Digit)",
          definition: "The second significant digit of the resistance value. Also ranges from Black (0) to White (9). This forms the ones place of the base resistance number."
        },
        {
          term: "3rd Band (Multiplier)",
          definition: "The multiplier that determines the magnitude of resistance. Black = ×1, Brown = ×10, Red = ×100, up to Violet = ×10M. Gold and Silver represent decimal multipliers (×0.1 and ×0.01)."
        },
        {
          term: "4th Band (Tolerance)",
          definition: "Indicates the precision or acceptable deviation from the nominal value. Gold = ±5%, Silver = ±10%, Brown = ±1%, Red = ±2%. No band (or just resistor body color) = ±20%."
        },
        {
          term: "Resistance Value",
          definition: "The calculated resistance in ohms (Ω), kilohms (kΩ), or megohms (MΩ). Calculated as: (First Digit × 10 + Second Digit) × Multiplier."
        },
        {
          term: "Acceptable Range",
          definition: "The minimum and maximum resistance values considering the tolerance. A 1kΩ ±5% resistor can measure anywhere from 950Ω to 1050Ω and still be within specification."
        }
      ]
    },
    guide: {
      title: "A Detailed Guide to Resistor Color Codes",
      sections: [
        {
          title: "What is a Resistor Color Code?",
          content: "The resistor color code is a standardized marking system used to indicate the resistance value, tolerance, and sometimes the temperature coefficient of resistors. Since resistors are often too small to print numbers on, colored bands provide a compact, reliable way to encode this information. The system was developed in the 1920s and standardized by the Electronic Industries Alliance (EIA). The most common format uses 4 colored bands, though 5-band and 6-band resistors exist for higher precision applications."
        },
        {
          title: "How to Read Color Bands",
          content: [
            "Hold the resistor so the tolerance band (usually Gold or Silver) is on the right",
            "The first band (leftmost) represents the first significant digit (0-9)",
            "The second band represents the second significant digit (0-9)",
            "The third band is the multiplier (power of 10 to multiply by)",
            "The fourth band is the tolerance (precision of the resistor)",
            "If there's a fifth band, it indicates temperature coefficient in ppm/°C"
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
  }
};

export function getCalculatorAccordion(id: string): CalculatorAccordionContent | null {
  return accordionContent[id] || null;
}
