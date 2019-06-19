import React, {useContext} from 'react'
import { MusicPlayerContext } from './MusicPlayer'

//component that gets context
// a simple button that sets it

export default function TrackList (props) {
	const {children} = props 

	const { state, setState, playTrack } = useContext(MusicPlayerContext)

//map each song in list, return button that says , set my state to that
	return (
		<React.Fragment>
			<button id="poop">POOP</button>
			<ol className="SongList">
			{state.tracks.map((curr, index) => {
				return (
					<li id={curr.name} key={curr.name}>
						<button onClick={() => playTrack(index)}>
							{curr.name}
						</button>
					</li>
				)
			})}
			</ol>
		</React.Fragment>
		)
}
