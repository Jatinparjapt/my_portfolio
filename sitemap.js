const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://my-portfolio-three-green.vercel.app' });

  // Static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1 });
  sitemap.write({ url: '/About', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/Skills', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/Projects', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/Contact', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/Resume', changefreq: 'monthly', priority: 0.7 });


  // Example of dynamic page (for project details)
  // Fetch project IDs and add each one
  const projectIds = [1231230,1231231 , 1231232, 1231233,1231234,1231235]; // Replace with actual IDs from your data source
  projectIds.forEach(id => {
    sitemap.write({ url: `/project/${id}`, changefreq: 'monthly', priority: 0.7 });
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then(sm => sm.toString());

  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapXML);
}

generateSitemap().catch(console.error);
