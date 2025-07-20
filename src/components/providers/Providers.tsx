import React from 'react';
import SidebarProviderComponent from './SidebarProvider';
import { ThemeProvider } from './ThemeProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<SidebarProviderComponent>{children}</SidebarProviderComponent>
			</ThemeProvider>
		</>
	);
};

export default Providers;
