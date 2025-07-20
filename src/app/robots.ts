import { MetadataRoute } from 'next';

/**
 * @type {import('next').MetadataRoute.Robots}
 * @returns {Promise<MetadataRoute.Robots>} Dynamic robots.txt for search engines
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin/', '/private/', '/api/', '/_next/', '/static/'],
			},
		],
		sitemap: 'http://localhost:3000/sitemap.xml',
		host: 'http://localhost:3000',
	};
}
