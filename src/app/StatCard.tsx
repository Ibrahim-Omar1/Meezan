import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ReactNode } from 'react';

interface StatCardProps {
	description: string;
	value: string | number;
	badge: ReactNode;
	footerMain: ReactNode;
	footerSub: string;
}

/**
 * Reusable stat card for dashboard metrics
 * @param {StatCardProps} props
 * @param {string} description - Card description
 * @param {string | number} value - Main value
 * @param {ReactNode} badge - Badge content (icon + text)
 * @param {ReactNode} footerMain - Main footer content
 * @param {string} footerSub - Subtext for the footer
 * @returns - StatCard component
 */
const StatCard = ({ description, value, badge, footerMain, footerSub }: StatCardProps) => {
	return (
		<Card className='@container/card'>
			<CardHeader>
				<CardDescription>{description}</CardDescription>
				<CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
					{value}
				</CardTitle>
				<CardAction>{badge}</CardAction>
			</CardHeader>
			<CardFooter className='flex-col items-start gap-1.5 text-sm'>
				<div className='line-clamp-1 flex gap-2 font-medium'>{footerMain}</div>
				<div className='text-muted-foreground'>{footerSub}</div>
			</CardFooter>
		</Card>
	);
};
export default StatCard;
