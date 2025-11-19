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
  }
};

export function getCalculatorAccordion(id: string): CalculatorAccordionContent | null {
  return accordionContent[id] || null;
}
