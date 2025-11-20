import { calculators, calculatorCategories } from "@shared/schema";

const BASE_URL = 'https://www.calculatorfree.in';

// Convert category name to slug
function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
}

// Generate sitemap.xml content
export function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];

  // Start XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Add homepage
  sitemap += `
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Add category pages
  calculatorCategories.forEach(category => {
    const slug = categoryToSlug(category);
    sitemap += `
  <url>
    <loc>${BASE_URL}/category/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add calculator pages
  calculators.forEach(calc => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${calc.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Close XML
  sitemap += `</urlset>`;

  return sitemap;
}
