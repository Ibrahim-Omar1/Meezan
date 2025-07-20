import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

/**
 * Custom hook for copying text to clipboard with React Query
 * @returns {Object} Copy mutation with loading state and success feedback
 */
export const useCopyToClipboard = () => {
	const [copied, setCopied] = useState<boolean>(false);
	const mutation = useMutation({
		mutationFn: async (text: string) => {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(text);
			} else {
				// Fallback for older browsers
				const textArea = document.createElement('textarea');
				textArea.value = text;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);
			}
			return { message: 'Text copied to clipboard!' };
		},
		onSuccess: () => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		},
	});

	return {
		mutate: mutation.mutate,
		mutateAsync: mutation.mutateAsync,
		isPending: mutation.isPending,
		error: mutation.error,
		copied,
	};
};
