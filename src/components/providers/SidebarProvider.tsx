import { SidebarInset, SidebarProvider } from '../ui/sidebar';

import React from 'react';
import { AppSidebar } from '../side-bar/app-sidebar';
import { SiteHeader } from '../site-header/SiteHeader';

const SidebarProviderComponent = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<SidebarProvider
				style={
					{
						'--sidebar-width': 'calc(var(--spacing) * 72)',
						'--header-height': 'calc(var(--spacing) * 12)',
					} as React.CSSProperties
				}
			>
				<AppSidebar variant='inset' />
				<SidebarInset>
					<SiteHeader />
					{children}
				</SidebarInset>
			</SidebarProvider>
		</>
	);
};

export default SidebarProviderComponent;
