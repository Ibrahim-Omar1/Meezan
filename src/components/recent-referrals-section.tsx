import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

/**
 * Interface for referral data structure
 */
interface Referral {
	id: number;
	email: string;
	name: string;
	status: 'completed' | 'pending';
	reward: number;
	date: string;
}

/**
 * Props for the RecentReferralsSection component
 */
interface RecentReferralsSectionProps {
	/** Array of referral data to display */
	referrals?: Referral[];
}

// Mock data for recent referrals
const mockReferrals: Referral[] = [
	{
		id: 1,
		email: 'john.doe@example.com',
		name: 'John Doe',
		status: 'completed',
		reward: 20,
		date: '2024-01-15',
	},
	{
		id: 2,
		email: 'jane.smith@example.com',
		name: 'Jane Smith',
		status: 'pending',
		reward: 20,
		date: '2024-01-14',
	},
	{
		id: 3,
		email: 'mike.wilson@example.com',
		name: 'Mike Wilson',
		status: 'completed',
		reward: 20,
		date: '2024-01-12',
	},
	{
		id: 4,
		email: 'sarah.johnson@example.com',
		name: 'Sarah Johnson',
		status: 'completed',
		reward: 20,
		date: '2024-01-10',
	},
	{
		id: 5,
		email: 'alex.brown@example.com',
		name: 'Alex Brown',
		status: 'pending',
		reward: 20,
		date: '2024-01-08',
	},
];

/**
 * Formats a date string to a readable format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	});
};

/**
 * Gets the appropriate color class for referral status badges
 * @param {string} status - Status of the referral
 * @returns {string} CSS classes for badge styling
 */
const getStatusColor = (status: string): string => {
	switch (status) {
		case 'completed':
			return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
		case 'pending':
			return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
		default:
			return 'bg-muted text-muted-foreground';
	}
};

/**
 * Component for displaying recent referrals in a table format
 * @param {RecentReferralsSectionProps} props - Component props
 * @param {Referral[]} props.referrals - Array of referral data to display
 * @returns - RecentReferralsSection component
 */
const RecentReferralsSection = ({ referrals = mockReferrals }: RecentReferralsSectionProps) => {
	return (
		<Card className='bg-gradient-to-t from-primary/5 to-card shadow-xs'>
			<CardHeader>
				<CardTitle className='text-lg font-semibold'>Recent Referrals</CardTitle>
				<CardDescription>Track your referral progress and earnings</CardDescription>
			</CardHeader>

			<CardContent className='overflow-hidden'>
				{/* Desktop Table */}
				<div className='hidden sm:block'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='text-xs font-medium uppercase tracking-wider'>
									Referral
								</TableHead>
								<TableHead className='text-xs font-medium uppercase tracking-wider'>
									Status
								</TableHead>
								<TableHead className='text-xs font-medium uppercase tracking-wider'>
									Reward
								</TableHead>
								<TableHead className='text-xs font-medium uppercase tracking-wider'>Date</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{referrals.map((referral) => (
								<TableRow key={referral.id}>
									<TableCell>
										<div>
											<div className='text-sm font-medium'>{referral.name}</div>
											<div className='text-sm text-muted-foreground'>{referral.email}</div>
										</div>
									</TableCell>
									<TableCell>
										<Badge className={cn('text-xs', getStatusColor(referral.status))}>
											{referral.status}
										</Badge>
									</TableCell>
									<TableCell className='text-sm'>${referral.reward}</TableCell>
									<TableCell className='text-sm text-muted-foreground'>
										{formatDate(referral.date)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				{/* Mobile Cards */}
				<div className='sm:hidden divide-y divide-border'>
					{referrals.map((referral) => (
						<div
							key={referral.id}
							className='p-4 space-y-3'
						>
							<div className='flex items-start justify-between'>
								<div className='flex-1 min-w-0'>
									<p className='text-sm font-medium truncate'>{referral.name}</p>
									<p className='text-xs text-muted-foreground truncate'>{referral.email}</p>
								</div>
								<Badge className={cn('text-xs ml-2', getStatusColor(referral.status))}>
									{referral.status}
								</Badge>
							</div>
							<div className='flex items-center justify-between text-sm'>
								<div className='flex items-center gap-1 text-muted-foreground'>
									<CalendarIcon className='h-3 w-3' />
									{formatDate(referral.date)}
								</div>
								<div className='font-medium'>${referral.reward}</div>
							</div>
						</div>
					))}
				</div>

				{/* Empty state */}
				{referrals.length === 0 && (
					<div className='p-8 text-center'>
						<p className='text-muted-foreground'>No referrals yet</p>
						<p className='text-sm text-muted-foreground mt-1'>
							Share your link to start earning rewards
						</p>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default RecentReferralsSection;
