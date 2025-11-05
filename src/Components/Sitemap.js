import React from "react";

// Generate sitemap data
export const getSitemapData = () => {
  const baseUrl = window.location.origin;
  const pages = [
    { path: '/Accueil', priority: '1.0', changefreq: 'weekly' },
    { path: '/NosServices', priority: '0.9', changefreq: 'weekly' },
    { path: '/NotreApproche', priority: '0.8', changefreq: 'monthly' },
    { path: '/APropos', priority: '0.7', changefreq: 'monthly' },
    { path: '/Contact', priority: '0.9', changefreq: 'weekly' },
    { path: '/NosPacks', priority: '0.8', changefreq: 'monthly' },
    { path: '/NotreExpertise', priority: '0.7', changefreq: 'monthly' },
    { path: '/MentionsLegales', priority: '0.3', changefreq: 'yearly' },
    { path: '/PolitiqueConfidentialite', priority: '0.3', changefreq: 'yearly' },
  ];

  return pages.map(page => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: page.priority,
    changefreq: page.changefreq
  }));
};

// Generate XML sitemap string
export const generateSitemapXML = () => {
  const sitemapData = getSitemapData();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  sitemapData.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${page.loc}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Component to display sitemap
export default function SitemapViewer() {
  const sitemapData = getSitemapData();

  const handleDownload = () => {
    const xml = generateSitemapXML();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Sitemap du site</h3>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Télécharger sitemap.xml
        </button>
      </div>
      <ul className="space-y-2">
        {sitemapData.map((page, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
            <a href={page.loc} className="text-blue-600 hover:underline">
              {page.loc}
            </a>
            <span className="text-sm text-gray-500">Priority: {page.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}