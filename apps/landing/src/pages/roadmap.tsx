import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

import PageWrapper from '~/components/PageWrapper';

const items = [
	{
		when: 'Spark',
		subtext: 'Q1 2021',
		completed: true,
		title: 'Visio Planning',
		description:
			'V Models and Org Charts of our team and intended R&D for the next three years.'
	},
	{
		title: 'Technology Breakdown',
		completed: true,
		description: 'Analyzed current problems in tech and mapped different protoypes of various technology devices.'
	},
	{
		title: 'Statistics',
		completed: true,
		description: 'Total capacity, device size, preview growth, BOM, total prototype costs, and electrical requirements.'
	},
	{
		title: 'Org',
		completed: true,
		description:
			'Tasks to be performed via a queue system tracking progress and allocating work between engineers.'
	},
	{
		when: 'Alpha',
		subtext: 'Q2 2021',
		completed: true,
		title: 'Explorer',
		description:
			'Limited funding, building initial prototypes of each project.'
	},
	{
		completed: true,
		title: 'Self promotion',
		description:
			'Hosted at various different college competitions, competing to win cash prizes.'
	},
	{
		completed: true,
		title: 'Connections',
		description:
			'Custom tags and connections with other various R&D companies.'
	},
	{
		completed: true,
		title: 'Management',
		description:
			'Progression on prototypes steady as anticipations of seed rounds'
	},
	{
		when: 'Present Day',
		title: 'Kits',
		description: 'Developing our tech kits for engineers to purchase and iterate on more breakthroughs.'
	},
	{
		title: 'Problems',
		description: 'Deep dive into any potential problems with our kits'
	},
	{
		title: 'Testing',
		description: 'Integrating and testing our kits to ensure that people are able to utilize our prototyes.'
	},
	{
		when: '0.1.0 Beta',
		subtext: 'Q2 2023',
		title: 'Realtime library synchronization',
		description: 'XXXXXX.'
	},
	{
		title: 'Tech encoder',
		description:
			'XXXXXX.'
	},
	{
		title: 'Cloud integration',
		description:
			'XXXXXX.'
	},
	{
		title: 'Custom Support',
		description: 'XXXXXX.'
	},
	{
		when: '0.6.0 Beta',
		subtext: 'Q3 2023',
		title: 'Extensions',
		description:
			'XXXXXX.'
	},
	{
		title: 'Encryption',
		description:
			'XXXXXX.'
	},
	{
		when: 'New Release',
		subtext: 'Q4 2023',
		title: 'Kits 2.0',
		description:
			'XXXXXX.'
	},
	{
		title: 'Advanced Prototypes',
		description:
			'XXXXXX.'
	},
	{
		title: 'Speed',
		description:
			'XXXXXX.'
	}
];

export default function RoadmapPage() {
	return (
		<PageWrapper>
			<Head>
				<title>Roadmap - MachLab</title>
				<meta name="description" content="What can MachLab do?" />
			</Head>
			<div className="lg:prose-xs prose dark:prose-invert container m-auto mb-20 flex max-w-4xl flex-col gap-20 p-4 pt-32">
				<section className="flex flex-col items-center">
					{/* ??? why img tag */}
					<img className="pointer-events-none w-24" />
					<h1 className="fade-in-heading mb-0 text-center text-5xl leading-snug">
						What's next for MachLab?
					</h1>
					<p className="animation-delay-2 fade-in-heading text-center text-gray-400">
						Here is a list of the technology we are working on, and the progress we have
						made so far.
					</p>
				</section>
				<section className="grid auto-cols-auto grid-flow-row grid-cols-[auto_1fr] gap-x-4">
					{items.map((item, i) => (
						<Fragment key={i}>
							{/* Using span so i can use the group-last-of-type selector */}
							<span className="group flex max-w-[10rem] items-start justify-end gap-4 first:items-start">
								<div className="flex flex-col items-end">
									<h3
										className={
											`m-0 hidden text-right lg:block ` +
											(i === 0 ? '-translate-y-1/4' : '-translate-y-1/2')
										}
									>
										{item.when}
									</h3>
									{item?.subtext && (
										<span className="text-sm text-gray-300">
											{item?.subtext}
										</span>
									)}
								</div>
								<div className="flex h-full w-2 group-first:mt-2 group-first:rounded-t-full group-last-of-type:rounded-b-full lg:items-center">
									<div
										className={
											'flex h-full w-full ' +
											(item.completed ? 'z-10 bg-primary-500' : 'bg-gray-550')
										}
									>
										{item?.when !== undefined ? (
											<div
												className={clsx(
													'absolute z-20 mt-5 h-4 w-4 -translate-x-1/4 -translate-y-1/2 rounded-full border-2 border-gray-200 group-first:mt-0 group-first:self-start lg:mt-0',
													items[i - 1]?.completed || i === 0
														? 'z-10 bg-primary-500'
														: 'bg-gray-550'
												)}
											>
												&zwj;
											</div>
										) : (
											<div className="z-20">&zwj;</div>
										)}
									</div>
								</div>
							</span>
							<div className="group flex flex-col items-start justify-center gap-4">
								{item?.when && (
									<h3 className="mb-0 group-first-of-type:m-0 lg:hidden">
										{item.when}
									</h3>
								)}
								<div className="my-2 flex w-full flex-col space-y-2 rounded-xl border border-gray-500 p-4 group-last:mb-0 group-first-of-type:mt-0">
									<h3 className="m-0">{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</div>
						</Fragment>
					))}
				</section>
				<section className="space-y-2 rounded-xl bg-gray-850 p-8">
					<h2 className="my-1">That's not all.</h2>
					<p>
						We're always open to ideas and feedback over{' '}
						<Link href="https://github.com/MachLab/discussions">
							here
						</Link>{' '}
						and we have a <Link href="/blog">blog</Link> where you can find the latest
						news and updates.
					</p>
				</section>
			</div>
		</PageWrapper>
	);
}
