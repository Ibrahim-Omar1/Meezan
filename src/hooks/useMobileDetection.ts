import { useQuery } from '@tanstack/react-query';

/**
 * Detects if the current device is mobile
 * @returns {Object} Mobile detection query with device info
 */
export const useMobileDetection = () => {
	return useQuery({
		queryKey: ['mobile-detection'],
		queryFn: () => {
			const userAgent =
				navigator.userAgent || navigator.vendor || (window as { opera?: string }).opera || '';
			const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
			const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
			const isSmallScreen = window.innerWidth <= 768;

			const isMobile =
				mobileRegex.test(userAgent.toLowerCase()) || (isTouchDevice && isSmallScreen);

			return {
				isMobile,
				userAgent,
				isTouchDevice,
				isSmallScreen,
				screenWidth: window.innerWidth,
			};
		},
		staleTime: Infinity, // Never refetch - device type doesn't change
		gcTime: Infinity, // Keep in cache forever
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});
};
