import { ImageResponse } from 'next/og';

/**
 * @type {import('next').ImageResponse}
 * @returns {Promise<ImageResponse>} Dynamic Twitter Card image
 */
export const runtime = 'edge';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function TwitterImage(): Promise<ImageResponse> {
	return new ImageResponse(
		(
			<div
				style={{
					background: 'linear-gradient(135deg, #1DA1F2, #0D8BD9)',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					padding: '40px',
				}}
			>
				<div
					style={{
						fontSize: 80,
						fontWeight: 'bold',
						marginBottom: '20px',
						textAlign: 'center',
					}}
				>
					AI Sharia Law
				</div>
				<div
					style={{
						fontSize: 32,
						opacity: 0.9,
						textAlign: 'center',
						maxWidth: '800px',
					}}
				>
					Exploring AI & Islamic Legal Principles
				</div>
				<div
					style={{
						fontSize: 24,
						opacity: 0.7,
						marginTop: '20px',
						textAlign: 'center',
					}}
				>
					@ai_sharia_law
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
