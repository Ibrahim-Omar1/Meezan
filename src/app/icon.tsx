import { ImageResponse } from 'next/og';

/**
 * @type {import('next').ImageResponse}
 * @returns {Promise<ImageResponse>} Dynamic favicon for the website
 */
export const runtime = 'edge';

export const size = {
	width: 32,
	height: 32,
};

export const contentType = 'image/png';

export default async function Icon(): Promise<ImageResponse> {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 24,
					background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontWeight: 'bold',
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
