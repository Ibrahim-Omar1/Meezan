'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * ThemeProvider component for the application.
 * Wraps the application in the NextThemesProvider component.
 *
 * @param {Object} param0 - The component props
 * @param {React.ReactNode} param0.children - The child components to be wrapped
 * @returns - ThemeProvider component
 */
const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
