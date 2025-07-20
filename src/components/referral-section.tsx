import RecentReferralsSection from './recent-referrals-section';
import ReferralLinkSection from './referral-link-section';

/**
 * Main referral section component that combines referral link and recent referrals
 * @returns - ReferralSection component
 */
export default function ReferralSection() {
	return (
		<section className='w-full mx-auto space-y-6 px-4 lg:px-6'>
			<ReferralLinkSection />
			<RecentReferralsSection />
		</section>
	);
}
