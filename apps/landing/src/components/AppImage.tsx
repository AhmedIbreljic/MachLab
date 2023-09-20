import Image from 'next/image';
import { tw } from '@sd/ui';

const AppFrameOuter = tw.div`relative m-auto flex w-full max-w-7xl rounded-lg transition-opacity px-4`;
const AppFrameInner = tw.div`z-30 flex w-full rounded-lg border-t border-app-line/50 backdrop-blur`;

const AppImage = () => {
	return (
		<div className="w-screen">
			<div className="relative mx-auto max-w-full sm:w-full sm:max-w-[1400px]">
			</div>
			<div className="fade-in-app-embed relative z-30 mt-8 h-[255px] w-full px-1 text-center sm:mt-16 sm:h-[428px] md:h-[428px] lg:h-[628px]">
				<AppFrameOuter>
					<AppFrameInner>
						<video
  className="rounded-lg"
  alt="spacedrive"
  src="/images/anduril.mp4"
  width={1278}
  height={626}
  autoPlay // Automatically start the video
  loop // Loop the video continuously
  controls // Add video controls
>
  Your browser does not support the video tag.
</video>

					</AppFrameInner>
				</AppFrameOuter>
			</div>
		</div>
	);
};

export default AppImage;
