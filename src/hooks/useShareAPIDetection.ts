import { useQuery } from '@tanstack/react-query';

/**
 * Props for the useShareAPIDetection hook
 */
interface UseShareAPIDetectionProps {
	/** The URL to test sharing capability */
	url: string;
}

/**
 * Detects if Web Share API is available and can share the given URL
 * @param {UseShareAPIDetectionProps} props - Hook configuration
 * @returns {Object} Share API detection query
 */
export const useShareAPIDetection = ({ url }: UseShareAPIDetectionProps) => {
	return useQuery({
		queryKey: ['share-api-detection', url],
		queryFn: () => {
			if (typeof navigator !== 'undefined' && 'share' in navigator) {
				const canShare = navigator.canShare ? navigator.canShare({ url }) : true;
				return {
					isSupported: true,
					canShare,
					hasShareAPI: true,
				};
			}
			return {
				isSupported: false,
				canShare: false,
				hasShareAPI: false,
			};
		},
		staleTime: Infinity, // Never refetch - API support doesn't change
		gcTime: Infinity, // Keep in cache forever
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});
};
