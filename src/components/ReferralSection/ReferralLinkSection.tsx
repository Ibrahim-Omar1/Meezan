'use client';

import { useId, useRef } from 'react';
import { CheckIcon, CopyIcon, Share2Icon, SmartphoneIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useShareLink } from '@/hooks/useShareLink';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useShareAPIDetection } from '@/hooks/useShareAPIDetection';

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
	const inputRef = useRef<HTMLInputElement>(null);

	// React Query hooks for device detection
	const { data: mobileData } = useMobileDetection();
	const { data: shareAPIData } = useShareAPIDetection({ url: referralLink });

	// Custom hooks for mutations
	const { mutate: copy, copied } = useCopyToClipboard();
	const { mutate: share, isPending: isSharing } = useShareLink({
		url: referralLink,
		canShare: shareAPIData?.canShare ?? false,
	});

	/**
	 * Handles copying the referral link to clipboard
	 */
	const handleCopy = () => {
		if (inputRef.current) {
			copy(inputRef.current.value);
		}
	};

	/**
	 * Handles sharing the referral link using native share API or fallback to copy
	 */
	const handleShare = () => {
		share();
	};

	return (
		<Card className='bg-gradient-to-t from-primary/5 to-card shadow-xs'>
			<CardHeader>
				<CardTitle className='text-lg font-semibold'>Your Referral Link</CardTitle>
				<CardDescription>
					Share this link to earn 10% of the first month&apos;s subscription fee for each successful
					referral
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex flex-col sm:flex-row gap-2'>
					<div className='relative flex-1'>
						<Input
							ref={inputRef}
							id={id}
							className={cn('text-sm', mobileData?.isMobile ? 'pr-3' : 'pr-12')}
							type='text'
							value={referralLink}
							readOnly
						/>
						{/* Hide copy icon on mobile */}
						{!mobileData?.isMobile && (
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
								{mobileData?.isMobile ? (
									<SmartphoneIcon className='h-4 w-4 mr-2' />
								) : (
									<Share2Icon className='h-4 w-4 mr-2' />
								)}
								{mobileData?.isMobile ? 'Share' : 'Share'}
							</>
						)}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ReferralLinkSection;
