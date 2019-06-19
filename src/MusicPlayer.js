import React, {createContext, useContext, useEffect, useState} from 'react'

export const MusicPlayerContext = createContext()
export const tracks = [
	{name: 'Once upon a time' },
	{name: 'Song2'},
	{name: 'Song3'}
]
export default function MusicPlayer (props) {
// going to render children
// going to have a provider.



	const { children, defaultIndex, defaultPlaying } = props 
	const [ isPlaying, setIsPlaying ] = useState(defaultPlaying)
	const [ activeIndex, setActiveIndex ] = useState(defaultIndex)
	const [ state, setState ] = useState({
		isPlaying : isPlaying,
		activeIndex : activeIndex,
		tracks: tracks
	})

	/* kind of way to pass hooks around in context */
	const playTrack = (trackIndex) => {
		//console.log("state,isPlaying", state.isPlaying)
		//console.log(trackIndex + " " + state.activeIndex)
		if (trackIndex === state.activeIndex) {
			//toggle on same index
			const toggle = !state.isPlaying
			console.log("toggle", toggle)
			setState({...state, 
				isPlaying: toggle
			})
		}
		else {
			setState({...state, 
				isPlaying: true,
				activeIndex: trackIndex
			})
		}
	}

	useEffect(() => {
		//console.log("state changed to ", state)
	}, [state])

	return (
		/*Using the context to pass around the object and Hook*/
		<MusicPlayerContext.Provider value={{
			state: state,
			setState: setState,
			playTrack: playTrack
		}}>
		{children}
			<button id="shit">SHIT</button>
		</MusicPlayerContext.Provider>
	)

}