import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CalculatorAccordionContent } from "@/types/calculator-content";

interface CalculatorAccordionProps {
  content: CalculatorAccordionContent;
  calculatorId: string;
}

export function CalculatorAccordion({ content, calculatorId }: CalculatorAccordionProps) {
  return (
    <div className="mt-12" data-testid={`accordion-${calculatorId}`}>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="how-to-use">
          <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-trigger-how-to-use">
            {content.howToUse.title}
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-how-to-use">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              {content.howToUse.steps.map((step, index) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="metrics">
          <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-trigger-metrics">
            {content.metrics.title}
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-metrics">
            <div className="space-y-4">
              {content.metrics.items.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-1">{item.term}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="guide">
          <AccordionTrigger className="text-xl font-semibold" data-testid="accordion-trigger-guide">
            {content.guide.title}
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-guide">
            <div className="space-y-6">
              {content.guide.sections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {section.content.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
