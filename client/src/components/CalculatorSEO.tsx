import { SEOHead } from "@/components/SEOHead";
import { SchemaOrg, createSoftwareApplicationSchema, createBreadcrumbSchema } from "@/components/SchemaOrg";
import { getFullCalculatorSEO } from "@/utils/calculatorSEO";

interface CalculatorSEOProps {
  calculatorId: string;
}

export function CalculatorSEO({ calculatorId }: CalculatorSEOProps) {
  const seoData = getFullCalculatorSEO(calculatorId);
  
  if (!seoData) {
    console.warn(`SEO data not found for calculator: ${calculatorId}`);
    return null;
  }

  const schemas = [
    createSoftwareApplicationSchema({
      name: seoData.name,
      description: seoData.seoDescription,
      url: seoData.canonical,
      category: seoData.category,
      applicationCategory: 'UtilitiesApplication',
    }),
    createBreadcrumbSchema(seoData.breadcrumbs)
  ];

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.seoDescription}
        canonical={seoData.canonical}
        keywords={seoData.keywords}
        ogType="article"
      />
      <SchemaOrg schema={schemas} />
    </>
  );
}
