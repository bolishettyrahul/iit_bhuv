import { MetadataRoute } from 'next';
import { seoConfig } from '../config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
