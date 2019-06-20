import React, {useContext} from 'react'
import { MusicPlayerContext } from './MusicPlayer'
import { useMusicPlayer } from './useMusicPlayer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";


export default function TrackList (props) {

	/* Using context to get vars */
	const { currentTrackNameFromContext } = useContext(MusicPlayerContext)
	/* Using custom hooks to get functions and vars */
	const { isPlaying, playTrack, trackList } = useMusicPlayer()

	return (
	<React.Fragment>
		<ul className="SongList">
		{trackList.map((curr, index) => {
			return (
			<li id={curr.name} key={curr.name}>
		        <span className="box" style={{"textAlign" : "left"}}>
		          <button className="button" onClick={() => 
		          	playTrack(index)}
		          	>
		            {currentTrackNameFromContext === curr.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
		          </button>
		          <span id="songName" className="song-title">
		            {curr.name}
		          </span>
		        </span>
			</li>
			)
		})}
		</ul>
	</React.Fragment>
	)
}
