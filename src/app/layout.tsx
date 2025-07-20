import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers/Providers';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
	colorScheme: 'light dark',
};

export const metadata: Metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: {
		default: 'AI Sharia Law - Exploring AI & Islamic Legal Principles',
		template: '%s | AI Sharia Law',
		absolute: 'AI Sharia Law - Technology Ethics & Islamic Law',
	},
	description:
		'Explore the intersection of artificial intelligence and Sharia Law. Resources, analysis, and discussion on how AI technologies interact with Islamic legal principles. Expert insights on halal AI, Islamic ethics in technology, and machine learning applications.',
	applicationName: 'AI Sharia Law',
	keywords: [
		'AI',
		'Sharia Law',
		'Islamic Law',
		'Artificial Intelligence',
		'Technology Ethics',
		'Machine Learning',
		'Halal AI',
		'Islamic Ethics',
		'AI Ethics',
		'Islamic Technology',
		'Digital Sharia',
		'AI Compliance',
		'Islamic Finance AI',
		'Religious AI',
		'Islamic Digital Ethics',
		'AI Governance',
		'Islamic Legal Tech',
		'Muslim Tech Ethics',
		'AI Islamic Law',
		'Technology and Religion',
		'Islamic Technology Ethics',
		'AI and Religion',
		'Islamic AI Guidelines',
		'Digital Islamic Law',
		'AI Sharia Compliance',
	],
	authors: [
		{ name: 'AI Sharia Law Team', url: 'http://localhost:3000' },
		{ name: 'Islamic Technology Experts' },
	],
	creator: 'AI Sharia Law Team',
	publisher: 'AI Sharia Law',
	generator: 'Next.js',
	referrer: 'origin-when-cross-origin',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'http://localhost:3000',
		languages: {
			'en-US': '/en-US',
			ar: '/ar',
			ur: '/ur',
		},
	},
	manifest: '/manifest.json',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/icon.svg', type: 'image/svg+xml' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
		other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' }],
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'http://localhost:3000',
		title: 'AI Sharia Law - Exploring AI & Islamic Legal Principles',
		description:
			'Explore the intersection of artificial intelligence and Sharia Law. Resources, analysis, and discussion on how AI technologies interact with Islamic legal principles.',
		siteName: 'AI Sharia Law',
		images: [
			{
				url: '/opengraph-image',
				width: 1200,
				height: 630,
				alt: 'AI Sharia Law - Exploring AI & Islamic Legal Principles',
			},
			{
				url: '/opengraph-image',
				width: 600,
				height: 600,
				alt: 'AI Sharia Law Logo',
			},
		],
		videos: [
			{
				url: 'http://localhost:3000/video-preview.mp4',
				width: 1200,
				height: 630,
				type: 'video/mp4',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'AI Sharia Law - Exploring AI & Islamic Legal Principles',
		description:
			'Explore the intersection of artificial intelligence and Sharia Law. Resources, analysis, and discussion on how AI technologies interact with Islamic legal principles.',
		creator: '@ai_sharia_law',
		site: '@ai_sharia_law',
		images: ['/twitter-image'],
	},
	verification: {
		google: 'your-google-verification-code',
		yahoo: 'your-yahoo-verification-code',
		yandex: 'your-yandex-verification-code',
		me: '@ai_sharia_law',
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	appleWebApp: {
		capable: true,
		title: 'AI Sharia Law',
		statusBarStyle: 'black-translucent',
		startupImage: [
			{
				url: '/apple-touch-startup-image-768x1004.png',
				media: '(device-width: 768px) and (device-height: 1024px)',
			},
		],
	},
	appLinks: {
		ios: {
			url: 'http://localhost:3000',
		},
		android: {
			package: 'com.aisharialaw.app',
			url: 'http://localhost:3000',
		},
		web: {
			url: 'http://localhost:3000',
		},
	},
	archives: ['http://localhost:3000/archives'],
	assets: ['http://localhost:3000/assets'],
	bookmarks: ['http://localhost:3000/bookmarks'],
	pagination: {
		previous: 'http://localhost:3000/previous',
		next: 'http://localhost:3000/next',
	},
	category: 'Technology',
	classification: 'Educational',
	abstract: 'Comprehensive resources on AI and Islamic legal principles',
	other: {
		'application-name': 'AI Sharia Law',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-status-bar-style': 'default',
		'apple-mobile-web-app-title': 'AI Sharia Law',
		'format-detection': 'telephone=no',
		'mobile-web-app-capable': 'yes',
		'msapplication-config': '/browserconfig.xml',
		'msapplication-TileColor': '#000000',
		'msapplication-tap-highlight': 'no',
		'X-UA-Compatible': 'IE=edge',
		'X-Frame-Options': 'SAMEORIGIN',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
		'Content-Security-Policy':
			"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';",
		'Cross-Origin-Embedder-Policy': 'require-corp',
		'Cross-Origin-Opener-Policy': 'same-origin',
		'Cross-Origin-Resource-Policy': 'same-origin',
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
		'X-DNS-Prefetch-Control': 'on',
		'X-Permitted-Cross-Domain-Policies': 'none',
		'X-XSS-Protection': '1; mode=block',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.variable} antialiased scroll-smooth`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
