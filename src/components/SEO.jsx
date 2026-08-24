import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Aviral Asthana'
}) => {
  const siteName = 'Aviral Asthana Portfolio';
  const siteUrl = 'https://aviral-asthana.dev';
  const defaultImage = '/portfolio logo.png';
  
  const seoTitle = title ? `${title} | ${siteName}` : siteName;
  const seoDescription = description || 'Aviral Asthana is a passionate Backend Developer and Full Stack Engineer specializing in Java Spring Boot, AWS services, microservices architecture, and cloud-native solutions. View my projects, experience, and technical skills.';
  const seoKeywords = keywords || 'Aviral Asthana, Backend Developer, Full Stack Developer, Java Spring Boot Developer, Spring Boot, Java Developer, AWS Developer, Microservices, Docker, Kubernetes, API Development, Cloud Computing, DevOps Engineer';
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  );
};

export default SEO;
