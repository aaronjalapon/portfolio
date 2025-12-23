import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  image = '/og-preview.png',
  url,
  type = 'website',
  noIndex = false,
}) => {
  const siteUrl = 'https://aaronjalapon.vercel.app'; // Update with your actual domain
  const siteName = 'Aaron Jalapon — Software & ML Engineer';
  const defaultDescription = 'TanUM, Mindspace, RealiTech — IoT + ML + front-end engineering by Aaron Jalapon. Software & ML Engineer | Product-minded Developer';
  
  const seo = {
    title: title ? `${title} | Aaron Jalapon` : siteName,
    description: description || defaultDescription,
    image: image.startsWith('http') ? image : `${siteUrl}${image}`,
    url: url ? `${siteUrl}${url}` : siteUrl,
  };

  // JSON-LD structured data for Person/Portfolio
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aaron Jalapon',
    url: siteUrl,
    jobTitle: 'Software & ML Engineer',
    description: seo.description,
    sameAs: [
      'https://github.com/aaronjalapon', // Update with your actual profiles
      'https://linkedin.com/in/aaronjalapon',
    ],
    knowsAbout: [
      'Software Engineering',
      'Machine Learning',
      'IoT',
      'Web Development',
      'React',
      'Python',
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content="@yourtwitterhandle" /> */}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
