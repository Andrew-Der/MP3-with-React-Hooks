import React, {useContext} from 'react'
import { MusicPlayerContext } from './MusicPlayer'
import { useMusicPlayer } from './useMusicPlayer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
//component that gets context
// a simple button that sets it

export default function TrackList (props) {
	const {children} = props 

	const { state, setState, playTrack } = useContext(MusicPlayerContext)
	const { currentTrackName, isPlaying } = useMusicPlayer()
//map each song in list, return button that says , set my state to that
	return (
		<React.Fragment>
			<ol className="SongList">
			{state.tracks.map((curr, index) => {
				return (
					<li id={curr.name} key={curr.name}>
						{/*<button onClick={() => playTrack(index)}>
							{curr.name}
						</button>*/}

        <span className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === curr.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <div id="songName" className="song-title">
            {curr.name}
          </div>
        </span>
					</li>
				)
			})}
			</ol>
		</React.Fragment>
		)
}
