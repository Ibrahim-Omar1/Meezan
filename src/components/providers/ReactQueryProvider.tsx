'use client';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';
import { toast } from 'sonner';

/**
 * Query cache with global error handling
 */
const queryCache = new QueryCache({
	onError: (error) => {
		toast.error('Something went wrong', {
			description: error.message,
		});
	},
});

/**
 * Mutation cache with global success/error handling
 */
const mutationCache = new MutationCache({
	onSuccess: (data: unknown) => {
		if (data && typeof data === 'object' && 'message' in data) {
			toast.success(String((data as { message: string }).message));
		}
	},
	onError: (error: unknown) => {
		const message = error instanceof Error ? error.message : 'Operation failed';
		toast.error('Operation failed', {
			description: message,
		});
	},
});

/**
 * Query client with optimized settings based on TanStack Query docs
 */
const queryClient: QueryClient = new QueryClient({
	queryCache,
	mutationCache,
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			refetchOnMount: true,
			retry: (failureCount, error: unknown) => {
				// Don't retry on 4xx errors
				if (error && typeof error === 'object' && 'status' in error) {
					const status = (error as { status: number }).status;
					if (status >= 400 && status < 500) {
						return false;
					}
				}
				return failureCount < 3;
			},
			retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
			staleTime: 5 * 60 * 1000, // 5 minutes
			gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
		},
		mutations: {
			retry: false, // Don't retry mutations by default
		},
	},
});

/**
 * React Query Provider component
 * @param {React.ReactNode} children - The child components to be wrapped
 * @returns {React.ReactNode} - The wrapped child components
 */
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
