'use client';

import { useId, useRef, useState, useEffect } from 'react';
import { CheckIcon, CopyIcon, Share2Icon, SmartphoneIcon } from 'lucide-react';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Props for the ReferralLinkSection component
 */
interface ReferralLinkSectionProps {
	/** The referral link to display and share */
	referralLink?: string;
}

/**
 * Component for displaying and sharing referral links
 * @param {ReferralLinkSectionProps} props - Component props
 * @param {string} props.referralLink - The referral link to display and share
 * @returns {JSX.Element} ReferralLinkSection component
 */
const ReferralLinkSection = ({
	referralLink = 'https://app.example.com/ref/john-doe-abc123',
}: ReferralLinkSectionProps) => {
	const id = useId();
	const [copied, setCopied] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [canShare, setCanShare] = useState<boolean>(false);
	const [isSharing, setIsSharing] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Detect mobile device
		const checkMobile = () => {
			const userAgent =
				navigator.userAgent || navigator.vendor || (window as { opera?: string }).opera || '';
			const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
			const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
			const isSmallScreen = window.innerWidth <= 768;

			return mobileRegex.test(userAgent.toLowerCase()) || (isTouchDevice && isSmallScreen);
		};

		// Check if Web Share API is available
		const checkShareAPI = () => {
			if (typeof navigator !== 'undefined' && 'share' in navigator) {
				return navigator.canShare ? navigator.canShare({ url: referralLink }) : true;
			}
			return false;
		};

		setIsMobile(checkMobile());
		setCanShare(checkShareAPI());
	}, [referralLink]);

	/**
	 * Handles copying the referral link to clipboard
	 */
	const handleCopy = async () => {
		if (inputRef.current) {
			try {
				await navigator.clipboard.writeText(inputRef.current.value);
				setCopied(true);
				toast.success('Referral link copied to clipboard!', {
					description: 'Share it with your friends to start earning rewards',
					duration: 3000,
				});
				setTimeout(() => setCopied(false), 2000);
			} catch (err) {
				// Fallback for older browsers
				inputRef.current.select();
				document.execCommand('copy');
				setCopied(true);
				toast.success('Referral link copied to clipboard!', {
					description: 'Share it with your friends to start earning rewards',
					duration: 3000,
				});
				setTimeout(() => setCopied(false), 2000);
			}
		}
	};

	/**
	 * Handles sharing the referral link using native share API or fallback to copy
	 */
	const handleShare = async () => {
		if (canShare && navigator.share) {
			try {
				setIsSharing(true);

				await navigator.share({
					title: 'Join me on this amazing platform!',
					text: 'Use my referral link to get started and we both get rewards!',
					url: referralLink,
				});

				toast.success('Thanks for sharing!', {
					description: 'Your referral link has been shared successfully',
					duration: 3000,
				});
			} catch (err: unknown) {
				const error = err as Error;
				if (error.name === 'AbortError') {
					// User cancelled sharing - no need to show error
					return;
				} else {
					toast.error('Share failed', {
						description: 'Copying link to clipboard instead',
						duration: 3000,
					});
					handleCopy();
				}
			} finally {
				setIsSharing(false);
			}
		} else {
			// Fallback to copy
			if (!canShare) {
				toast.info('Native sharing not available', {
					description: 'Copying link to clipboard instead',
					duration: 3000,
				});
			}
			handleCopy();
		}
	};

	return (
		<Card className='bg-gradient-to-t from-primary/5 to-card shadow-xs'>
			<CardHeader>
				<CardTitle className='text-lg font-semibold'>Your Referral Link</CardTitle>
				<CardDescription>Share this link to earn $20 for each successful referral</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex flex-col sm:flex-row gap-2'>
					<div className='relative flex-1'>
						<Input
							ref={inputRef}
							id={id}
							className={cn('text-sm', isMobile ? 'pr-3' : 'pr-12')}
							type='text'
							value={referralLink}
							readOnly
						/>
						{/* Hide copy icon on mobile */}
						{!isMobile && (
							<TooltipProvider delayDuration={0}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button
											variant='ghost'
											size='sm'
											onClick={handleCopy}
											className='absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0'
											aria-label={copied ? 'Copied!' : 'Copy referral link'}
										>
											<div
												className={cn(
													'transition-all duration-200',
													copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
												)}
											>
												<CheckIcon className='h-4 w-4 text-green-600' />
											</div>
											<div
												className={cn(
													'absolute transition-all duration-200',
													copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
												)}
											>
												<CopyIcon className='h-4 w-4' />
											</div>
										</Button>
									</TooltipTrigger>
									<TooltipContent
										side='top'
										className='text-xs'
									>
										{copied ? 'Copied!' : 'Copy link'}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)}
					</div>

					<Button
						onClick={handleShare}
						disabled={isSharing}
						className='active:scale-95 transition-all duration-200 disabled:opacity-50'
					>
						{isSharing ? (
							<>
								<div className='w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white/30 border-t-white' />
								Sharing...
							</>
						) : (
							<>
								{isMobile ? (
									<SmartphoneIcon className='h-4 w-4 mr-2' />
								) : (
									<Share2Icon className='h-4 w-4 mr-2' />
								)}
								{isMobile ? 'Share' : 'Share'}
							</>
						)}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ReferralLinkSection;
