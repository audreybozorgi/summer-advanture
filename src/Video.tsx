import { Composition } from 'remotion';
import config from "../config.json";
import { SummerAdventure } from './containers/summerAdventure';
import { ShowCaseComponent } from './components/ShowCaseComponent';
import { IntroVideos } from './components/IntroVideos';
import { CustomVideoComponent } from './components/CustomVideoComponent';
import backgroundCover from "../assets/images/bg_blue_tint.png";

const thirdVideo = require(`../assets/videos/${config.footage[2]}`);
const fourthVideo = require(`../assets/videos/${config.footage[3]}`);

export const RemotionVideo: React.FC = () => {

	return (
		<>
			<Composition
				id="summerAdventure"
				component={SummerAdventure}
				durationInFrames={480}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="starterCard"
				component={ShowCaseComponent}
				durationInFrames={60}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: config.text.start_text[0],
					subtitle: '',
					textColor: config.color[2],
					backgroundCover,
					fadeOut: true
				}}
			/>
			<Composition
				id="introVideos"
				component={IntroVideos}
				durationInFrames={130}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="middleCard"
				component={ShowCaseComponent}
				durationInFrames={40}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: config.text.middle_text[0].main || '',
					subtitle: config.text.middle_text[0].secondary || '',
					textColor: config.color[2],
					backgroundCover,
					fadeOut: true
				}}
			/>
			<Composition
				id="scubaDiving-1"
				component={CustomVideoComponent}
				durationInFrames={30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					src: thirdVideo,
					volume: 0,
					from: 0,
					startFrom: 120,
					endAt: 160
				}}
			/>
			<Composition
				id="scubaDiving-2"
				component={CustomVideoComponent}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					src: fourthVideo,
					volume: 0,
					from: 0,
					playbackRate: 2
				}}
			/>
			<Composition
				id="middleCard-2"
				component={ShowCaseComponent}
				durationInFrames={30 + 2}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: config.text.middle_text[1].product_id || '',
					subtitle: config.text.middle_text[1].quantity || '',
					textColor: config.color[2],
					backgroundCover
				}}
			/>
			<Composition
				id="lastVideo"
				component={CustomVideoComponent}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					src: thirdVideo,
					volume: 0,
					from: 0,
				}}
			/>
			<Composition
				id="lastCatd"
				component={ShowCaseComponent}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					showLogo: true,
					title: config.text.end_text[0],
					textColor: config.color[2],
					backgroundCover
				}}
			/>
		</>
	)
}
