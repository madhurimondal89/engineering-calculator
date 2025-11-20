import { SEOHead } from "@/components/SEOHead";
import { SchemaOrg, createCollectionPageSchema, createBreadcrumbSchema } from "@/components/SchemaOrg";
import { getCategorySEO, getCategoryCalculators } from "@/utils/categorySEO";

interface CategorySEOProps {
  categorySlug: string;
}

export function CategorySEO({ categorySlug }: CategorySEOProps) {
  const seoData = getCategorySEO(categorySlug);
  
  if (!seoData) {
    console.warn(`SEO data not found for category: ${categorySlug}`);
    return null;
  }

  const categoryCalculators = getCategoryCalculators(categorySlug);

  const schemas = [
    createCollectionPageSchema({
      name: seoData.name,
      description: seoData.seoDescription,
      url: seoData.canonical,
      items: categoryCalculators,
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
        ogType="website"
      />
      <SchemaOrg schema={schemas} />
    </>
  );
}
