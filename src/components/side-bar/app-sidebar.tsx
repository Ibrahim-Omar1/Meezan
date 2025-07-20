'use client';

import * as React from 'react';
import {
	IconCamera,
	IconChartBar,
	IconCoin,
	IconDashboard,
	IconDatabase,
	IconFileAi,
	IconFileDescription,
	IconFileWord,
	IconFolder,
	IconHelp,
	IconInnerShadowTop,
	IconListDetails,
	IconReport,
	IconSearch,
	IconSettings,
	IconUsers,
} from '@tabler/icons-react';

import { NavDocuments } from '@/components/side-bar/nav-documents';
import NavMain from '@/components/side-bar/nav-main';
import { NavSecondary } from '@/components/side-bar/nav-secondary';
import NavUser from '@/components/side-bar/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
	user: {
		name: 'Ibrahim Omar',
		email: 'ebrahimamra69@gmail.com',
		avatar: '/avatars/ibrahimomar.jpg',
	},
	navMain: [
		{
			title: 'Referrals',
			url: '#',
			icon: IconUsers,
		},
		{
			title: 'Rewards',
			url: '#',
			icon: IconCoin,
		},
		{
			title: 'Tasks',
			url: '#',
			icon: IconListDetails,
		},
	],
	// navClouds: [
	// 	{
	// 		title: 'Capture',
	// 		icon: IconCamera,
	// 		isActive: true,
	// 		url: '#',
	// 		items: [
	// 			{
	// 				title: 'Active Proposals',
	// 				url: '#',
	// 			},
	// 			{
	// 				title: 'Archived',
	// 				url: '#',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title: 'Proposal',
	// 		icon: IconFileDescription,
	// 		url: '#',
	// 		items: [
	// 			{
	// 				title: 'Active Proposals',
	// 				url: '#',
	// 			},
	// 			{
	// 				title: 'Archived',
	// 				url: '#',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title: 'Prompts',
	// 		icon: IconFileAi,
	// 		url: '#',
	// 		items: [
	// 			{
	// 				title: 'Active Proposals',
	// 				url: '#',
	// 			},
	// 			{
	// 				title: 'Archived',
	// 				url: '#',
	// 			},
	// 		],
	// 	},
	// ],
	navSecondary: [
		{
			title: 'Get Help',
			url: '#',
			icon: IconHelp,
		},
		{
			title: 'Search',
			url: '#',
			icon: IconSearch,
		},
	],
	// documents: [
	// 	{
	// 		name: 'Data Library',
	// 		url: '#',
	// 		icon: IconDatabase,
	// 	},
	// 	{
	// 		name: 'Reports',
	// 		url: '#',
	// 		icon: IconReport,
	// 	},
	// 	{
	// 		name: 'Word Assistant',
	// 		url: '#',
	// 		icon: IconFileWord,
	// 	},
	// ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			collapsible='offcanvas'
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className='data-[slot=sidebar-menu-button]:!p-1.5'
						>
							<a href='#'>
								<IconInnerShadowTop className='!size-5' />
								<span className='text-base font-semibold'>AI Sharia Law</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavDocuments items={data.documents} /> */}
				<NavSecondary
					items={data.navSecondary}
					className='mt-auto'
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
