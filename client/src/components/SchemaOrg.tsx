import { useEffect } from 'react';

interface SchemaOrgProps {
  schema: object | object[];
}

export function SchemaOrg({ schema }: SchemaOrgProps) {
  useEffect(() => {
    const scriptId = 'schema-org-json-ld';
    
    // Remove existing schema script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return null;
}

// Schema.org generators
export const createWebSiteSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CalculatorFree.in - Engineering & Science Calculator Hub',
  alternateName: 'Calculator Free',
  url: url,
  description: 'Free online engineering and science calculators for electrical, electronics, PCB design, renewable energy, and more. 100+ professional calculation tools.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${url}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
});

export const createOrganizationSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CalculatorFree.in',
  url: url,
  logo: `${url}/logo.png`,
  description: 'Professional engineering and science calculators platform',
  sameAs: [
    'https://www.facebook.com/calculatorfree',
    'https://twitter.com/calculatorfree'
  ]
});

export const createSoftwareApplicationSchema = (params: {
  name: string;
  description: string;
  url: string;
  category: string;
  operatingSystem?: string;
  applicationCategory?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: params.name,
  description: params.description,
  url: params.url,
  applicationCategory: params.applicationCategory || 'UtilitiesApplication',
  operatingSystem: params.operatingSystem || 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1'
  },
  softwareVersion: '1.0',
  softwareHelp: {
    '@type': 'CreativeWork',
    url: params.url
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createHowToSchema = (params: {
  name: string;
  description: string;
  steps: Array<{ text: string }>;
  totalTime?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: params.name,
  description: params.description,
  totalTime: params.totalTime || 'PT2M',
  step: params.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    text: step.text
  }))
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const createCollectionPageSchema = (params: {
  name: string;
  description: string;
  url: string;
  itemCount: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: params.name,
  description: params.description,
  url: params.url,
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: params.itemCount,
    itemListElement: []
  },
  breadcrumb: {
    '@type': 'BreadcrumbList'
  }
});
