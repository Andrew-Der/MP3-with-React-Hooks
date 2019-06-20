import React, {useContext} from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

import { MusicPlayerContext } from './MusicPlayer'
import { useMusicPlayer } from './useMusicPlayer'

export default function PlayerControls (props) {

	const { state } = useContext(MusicPlayerContext)
	const { isPlaying, setIsPlaying } = state
	/* using a custom Hook! */
	const { playTrack, playPreviousTrack, playNextTrack } = useMusicPlayer()
	//console.log(state)

	return (
		<React.Fragment>
		<button id="PreviousButton" onClick={() => {playPreviousTrack()}}
			>
			<FontAwesomeIcon icon={faStepBackward}/>
		</button>
		<button id="PlayButton" onClick={(e) => {
			playTrack(state.activeIndex)}}
			>
			{isPlaying ? <FontAwesomeIcon id="Play" icon={faPause} /> : <FontAwesomeIcon id="Pause" icon={faPlay} />}
		</button>
		<button id="NextButton" onClick={() => playNextTrack()}
			>
			<FontAwesomeIcon icon={faStepForward}/>
		</button>
        <div className="current-track has-text-light">
          <h3 id="MusicLabel">{state.tracks[state.activeIndex].name}</h3>
        </div>
		</React.Fragment>
	)
}