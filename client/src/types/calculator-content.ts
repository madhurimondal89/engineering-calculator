export interface AccordionSubsection {
  title: string;
  content: string | string[];
}

export interface AccordionSection {
  title: string;
  content?: string | string[];
  subsections?: AccordionSubsection[];
}

export interface CalculatorAccordionContent {
  howToUse: {
    title: string;
    steps: string[];
  };
  metrics: {
    title: string;
    items: {
      term: string;
      definition: string;
    }[];
  };
  guide: {
    title: string;
    sections: AccordionSubsection[];
  };
}
