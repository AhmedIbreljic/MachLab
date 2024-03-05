import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

import Markdown from '~/components/Markdown';
import PageWrapper from '~/components/PageWrapper';
import { TeamMember, TeamMemberProps } from '~/components/TeamMember';

export const teamMembers: Array<TeamMemberProps> = [
	{
		name: 'Teddy Daniel',
		role: 'Chief Engineer and CEO',
		imageUrl: '/images/team/ericson.jpg',
		socials: {
			twitter: 'https://x.com/',
			github: 'https://github.com'
		}
	},
	{
		name: 'Brendan Nguyen',
		role: 'Lead Hardware Engineer, SME',
		imageUrl: '/images/team/utku.jpg',
		socials: {
			twitter: 'https://x.com/',
			github: 'https://github.com'
		},
		{
		name: 'Scott Miller',
		role: 'Lead Hardware Engineer, SME',
		imageUrl: '/images/team/scott.png',
		socials: {
			twitter: 'https://x.com/',
			github: 'https://github.com'
		},
];

const investors: Array<TeamMemberProps> = [
	{
		name: 'Analog',
		role: 'Supplier',
		investmentRound: '',
		imageUrl: '/images/team/analogd.png',
	},
	{
		name: 'Xilinx',
		role: 'Supplier',
		investmentRound: '',
		imageUrl: '/images/team/xilinx.jpg',
	},
	{
		name: 'Nvidia',
		role: 'Supplier',
		investmentRound: '',
		imageUrl: '/images/team/nvidia.jpg',
	},
	{
		name: 'Propulsion Systems',
		role: 'Test',
		investmentRound: 'UMass Boston',
		imageUrl: '/images/team/umbprops.png',
	},
	{
		name: 'Micro Center',
		role: 'Supplier',
		investmentRound: '',
		imageUrl: '/images/team/microcenter.png',
	},
	{
		name: 'Rocket Propulsion Group',
		role: 'Test',
		investmentRound: 'Boston University',
		imageUrl: '/images/team/BURPG.png',
	},
];

export default function TeamPage() {
	return (
		<PageWrapper>
			<Markdown articleClassNames="mx-auto mt-32 prose-a:text-white">
				<Head>
					<title>Our Team - MachLab</title>
					<meta name="description" content="Who's behind MachLab?" />
				</Head>
				<div className="team-page relative mx-auto">
					<div/>
					<div className="relative z-10">
						<h1 className="fade-in-heading text-5xl leading-tight sm:leading-snug ">
							Innovating advanced electronics for mach-speed {' '}
							<span className="title-gradient">vehicles</span>.
						</h1>
						<p className="animation-delay-2 fade-in-heading text-white/50 ">
							When it comes to pushing the boundaries of electronic advancements and electronics designed 
							for speed, we are at the forefront. 
						</p>
						<p className="animation-delay-2 fade-in-heading text-white/50 ">
							We engage in daily testing and conduct ongoing research and development to enhance our prototypes and advanced electronic kits, catering to engineers' needs.
						</p>
						<Link
							href="/docs/product/resources/faq"
							className="animation-delay-3 fade-in-heading text-underline flex flex-row items-center text-gray-400 underline-offset-4 duration-150 hover:text-white"
						>
							<ArrowRight className="mr-2" />
							Read more
						</Link>
						<div className="fade-in-heading animation-delay-5">
							<h2 className="mt-10 text-2xl leading-relaxed sm:mt-20 ">
								Meet the team
							</h2>
							<div className="my-10 grid grid-cols-2 gap-x-5 gap-y-10 xs:grid-cols-3 sm:grid-cols-4">
								{teamMembers.map((member) => (
									<TeamMember key={member.name} {...member} />
								))}
							</div>
							<h2
								id="investors"
								className="mb-2 mt-10 text-2xl leading-relaxed sm:mt-20 "
							>
								Our investors
							</h2>
							<p className="text-sm text-gray-400 ">
								We're backed by some of the greatest leaders in the technology
								industry.
							</p>
							<div className="my-10 grid grid-cols-3 gap-x-5 gap-y-10 sm:grid-cols-5">
								{investors.map((investor) => (
									<TeamMember
										key={investor.name + investor.investmentRound}
										{...investor}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Markdown>
		</PageWrapper>
	);
}
