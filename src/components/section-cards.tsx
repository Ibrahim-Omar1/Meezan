import {
	IconTrendingUp,
	IconEyeDollar,
	IconUsers,
	IconPercentage,
	IconShoppingCart,
} from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/app/StatCard';

// Mock data for stat cards
/**
 * @typedef {Object} StatCardMock
 * @property {string} description - Card description
 * @property {string|number} value - Main value
 * @property {React.ReactNode} badge - Badge content (icon + text)
 * @property {React.ReactNode} footerMain - Main footer content
 * @property {string} footerSub - Subtext for the footer
 */
const statCards = [
	{
		description: 'Total Earnings',
		value: '$12,450.00',
		badge: (
			<Badge variant='outline'>
				<IconTrendingUp />
				+18.2%
			</Badge>
		),
		footerMain: (
			<>
				Earnings up this month <IconEyeDollar className='size-4' />
			</>
		),
		footerSub: 'Revenue from all sources',
	},
	{
		description: 'Active Referrals',
		value: '156',
		badge: (
			<Badge variant='outline'>
				<IconTrendingUp />
				+12%
			</Badge>
		),
		footerMain: (
			<>
				Growing referral network <IconUsers className='size-4' />
			</>
		),
		footerSub: 'Active referral partners',
	},
	{
		description: 'Commission Rate',
		value: '15.5%',
		badge: (
			<Badge variant='outline'>
				<IconTrendingUp />
				+2.1%
			</Badge>
		),
		footerMain: (
			<>
				Above average rate <IconPercentage className='size-4' />
			</>
		),
		footerSub: 'Industry benchmark: 12%',
	},
	{
		description: 'Total Purchases',
		value: '2,847',
		badge: (
			<Badge variant='outline'>
				<IconTrendingUp />
				+8.7%
			</Badge>
		),
		footerMain: (
			<>
				Purchase volume increasing <IconShoppingCart className='size-4' />
			</>
		),
		footerSub: 'Transactions this period',
	},
];

export function SectionCards() {
	return (
		<div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
			{statCards.map((card, i) => (
				<StatCard
					key={card.description + i}
					{...card}
				/>
			))}
		</div>
	);
}
