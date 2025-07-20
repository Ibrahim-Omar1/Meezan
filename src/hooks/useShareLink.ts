import { useMutation } from '@tanstack/react-query';
import { useCopyToClipboard } from './useCopyToClipboard';

/**
 * Props for the useShareLink hook
 */
interface UseShareLinkProps {
	/** The URL to share */
	url: string;
	/** The title for the share dialog */
	title?: string;
	/** The text description for the share dialog */
	text?: string;
	/** Whether native sharing is available */
	canShare?: boolean;
}

/**
 * Custom hook for sharing links with React Query
 * @param {UseShareLinkProps} props - Hook configuration
 * @returns {Object} Share mutation with loading state and fallback to copy
 */
export const useShareLink = ({
	url,
	title = 'Join me on this amazing platform!',
	text = 'Use my referral link to get started and we both get rewards!',
	canShare = false,
}: UseShareLinkProps) => {
	const { mutate: copy } = useCopyToClipboard();

	const mutation = useMutation({
		mutationFn: async () => {
			if (canShare && navigator.share) {
				await navigator.share({
					title,
					text,
					url,
				});
				return { message: 'Thanks for sharing!' };
			} else {
				// Fallback to copy
				copy(url);
				return { message: 'Link copied to clipboard!' };
			}
		},
		onError: (error: unknown) => {
			const err = error as Error;
			if (err.name !== 'AbortError') {
				// If share fails, fallback to copy
				copy(url);
			}
		},
	});

	return {
		mutate: mutation.mutate,
		mutateAsync: mutation.mutateAsync,
		isPending: mutation.isPending,
		error: mutation.error,
	};
};
