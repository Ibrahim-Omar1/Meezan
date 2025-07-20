import { ImageResponse } from 'next/og';

/**
 * @type {import('next').ImageResponse}
 * @returns {Promise<ImageResponse>} Apple touch icon for the website
 */
export const runtime = 'edge';

export const size = {
	width: 180,
	height: 180,
};

export const contentType = 'image/png';

export default async function AppleIcon(): Promise<ImageResponse> {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 120,
					background: 'linear-gradient(135deg, #000000, #1a1a1a)',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontWeight: 'bold',
					borderRadius: '20px',
				}}
			>
				AI
			</div>
		),
		{
			...size,
		}
	);
}
