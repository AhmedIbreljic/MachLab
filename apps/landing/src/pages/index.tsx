import { ReactComponent as Info } from '@sd/assets/svgs/info.svg';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AppImage from '~/components/AppImage';
import HomeCTA from '~/components/HomeCTA';
import NewBanner from '~/components/NewBanner';
import PageWrapper from '~/components/PageWrapper';
import { detectWebGLContext, getWindow } from '~/utils/util';

interface SectionProps {
	orientation: 'left' | 'right';
	heading?: string;
	description?: string | React.ReactNode;
	children?: React.ReactNode;
	className?: string;
}

function Section(props: SectionProps = { orientation: 'left' }) {
	const info = (
		<div className="px-4 py-10 sm:px-10">
			{props.heading && <h1 className="text-2xl font-black sm:text-4xl">{props.heading}</h1>}
			{props.description && (
				<p className="text-md mt-5 text-gray-450 sm:text-xl">{props.description}</p>
			)}
		</div>
	);
	return (
		<div className={clsx('my-10 grid grid-cols-1 lg:my-44 lg:grid-cols-2', props.className)}>
			{props.orientation === 'right' ? (
				<>
					{info}
					{props.children}
				</>
			) : (
				<>
					{props.children}
					{info}
				</>
			)}
		</div>
	);
}

export default function HomePage() {
	const [unsubscribedFromWaitlist, setUnsubscribedFromWaitlist] = useState(false);
	const [background, setBackground] = useState<JSX.Element | null>(null);

	const router = useRouter();

	useEffect(() => {
		if (!getWindow()) return;
		const cuid = router.query.wunsub;
		if (!cuid) return;
		(async () => {
			console.log('Unsubscribing from waitlist', process.env.NODE_ENV);
			const prod = process.env.NODE_ENV === 'production';

			const req = await fetch(`/api/waitlist?i=${cuid}`, {
				method: 'DELETE'
			});

			if (req.status === 200) {
				setUnsubscribedFromWaitlist(true);
				window.history.replaceState(
					{},
					'',
					prod ? 'https://spacedrive.com' : 'http://localhost:8003'
				);

				setTimeout(() => {
					setUnsubscribedFromWaitlist(false);
				}, 5000);
			} else if (req.status >= 400 && req.status < 500) {
				alert('An error occurred while unsubscribing from waitlist');
			}
		})();
	}, [router.query.wunsub]);

	useEffect(() => {
		if (!(getWindow() && background == null)) return;
		(async () => {
			if (detectWebGLContext()) {
				const Space = (await import('~/components/Space')).Space;
				setBackground(<Space />);
			} else {
				console.warn('Fallback to Bubbles background due WebGL not being available');
				const Bubbles = (await import('~/components/Bubbles')).Bubbles;
				setBackground(<Bubbles />);
			}
		})();
	}, [background]);

	return (
		<PageWrapper>
			<div className="flex w-full flex-col items-center px-4">
				<Head>
					<title>MachLab - Advanced Hardware Electronics. </title>
					<meta
						name="description"
						content="Forging the future of defense with our cutting-edge mach-speed technology. Propelling innovation to new frontiers."
					/>
				</Head>
				<div className="mt-22 lg:mt-28" id="content" aria-hidden="true" />
				<div className="mt-24 lg:mt-8" />
				<NewBanner
					headline="MachLab at IEEE 2023 Showcase!"
					href="/blog/spacedrive-funding-announcement"
					link="Read post"
				/>

				{unsubscribedFromWaitlist && (
					<div
						className={
							'my-2 -mt-8 flex flex-row items-center rounded-md border-2 border-green-900 bg-green-800/20 px-2'
						}
					>
						<Info className="mr-1 w-5 fill-green-500" />
						<p className={'text-sm text-green-500'}>
							You have been unsubscribed from the waitlist
						</p>
					</div>
				)}

				<h1 className="fade-in-heading z-30 mb-3 px-2 text-center text-4xl font-black leading-tight text-white md:text-7xl">
					Propelling Innovation
				</h1>
				<p className="animation-delay-1 fade-in-heading text-md leading-2 z-30 mb-8 mt-1 max-w-4xl text-center text-gray-450 lg:text-lg lg:leading-8">
					Advanced Electronics Intended for Mach Speed Autonomous Vehicles.
					
					<br />
					<span className="hidden sm:block">
					</span>
				</p>
				<HomeCTA />
				<AppImage />
				<Section
					orientation="right"
					heading="Top Hardware Electronics."
					className="z-30 mt-0 sm:mt-8"
					description={
						<>
							Forging the future of defense with our cutting-edge mach-speed technology.
							Allowing you to seamlessly alternate our prototype to achieve your 
							technological goals with unparalleled efficiency. 
							<br />
							<br />
							<Link
								className="text-primary-600 transition hover:text-primary-500"
								href="#"
							>
								Find out more →
							</Link>
						</>
					}
				/>
				{background}
			</div>
		</PageWrapper>
	);
}
