import { MetadataRoute } from 'next';
import { artists } from '@/data/artists';
import { music } from '@/data/music';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://musicbintangproduction.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/artis`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/karya-musik`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kontak`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const artistRoutes: MetadataRoute.Sitemap = artists.map((a) => ({
    url: `${baseUrl}/artis/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const musicRoutes: MetadataRoute.Sitemap = music.map((m) => ({
    url: `${baseUrl}/karya-musik/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...artistRoutes, ...musicRoutes];
}
