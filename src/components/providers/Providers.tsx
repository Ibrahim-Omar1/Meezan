import React from 'react';
import SidebarProviderComponent from './SidebarProvider';
import ThemeProvider from './ThemeProvider';

/**
 * Providers component for the application.
 * Wraps the application in the ThemeProvider and SidebarProvider components.
 *
 * @param {Object} param0 - The component props
 * @param {React.ReactNode} param0.children - The child components to be wrapped
 * @returns - Providers component
 */
const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<SidebarProviderComponent>{children}</SidebarProviderComponent>
		</ThemeProvider>
	);
};

export default Providers;
