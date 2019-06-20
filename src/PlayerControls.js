import React, {useContext} from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

import { MusicPlayerContext } from './MusicPlayer'
import { useMusicPlayer } from './useMusicPlayer'

/* Component that uses custom Hooks */
export default function PlayerControls (props) {

	/* getting functions and vars using a custom Hook! */
	const { 
		playTrack, 
		playNextTrack, 
		playPreviousTrack, 
		isPlaying, 
		activeIndex, 
		currentTrackName, } = useMusicPlayer()

	return (
		<div className="box controls has-background-info">
			<button id="PreviousButton" onClick={() => 
				playPreviousTrack()}
				>
				<FontAwesomeIcon className="fa-2x" icon={faStepBackward}/>
			</button>

			<button id="PlayButton" onClick={(e) => {
				playTrack(activeIndex)}}
				>
				{isPlaying ? 
					<FontAwesomeIcon id="Play" className="fa-2x" icon={faPause} /> : 
					<FontAwesomeIcon id="Pause" className="fa-2x" icon={faPlay} />}
			</button>

			<button id="NextButton" onClick={() => 
				playNextTrack()}
				>
				<FontAwesomeIcon className="fa-2x" icon={faStepForward}/>
			</button>

	        <div className="current-track has-text-light">
	          <h3 id="MusicLabel">{currentTrackName}</h3>
	        </div>

		</div>
	)
}