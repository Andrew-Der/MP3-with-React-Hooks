import React, {createContext, useContext, useEffect, useState} from 'react'

export const MusicPlayerContext = createContext()

export const tracks = [
	{name: 'Once upon a time' },
	{name: 'Song2'},
	{name: 'Song3'},
	{name: 'Song4'},
	{name: 'Song5'},
]

export default function MusicPlayer (props) {

	const { children, defaultIndex, defaultPlaying } = props 
	const [ isPlaying, setIsPlaying ] = useState(defaultPlaying || false)
	const [ activeIndex, setActiveIndex ] = useState(defaultIndex || 0)
	const [ state, setState ] = useState({
		isPlaying : isPlaying,
		activeIndex : activeIndex,
		tracks: tracks
	})

	/* kind of way to pass hooks around in context 
	*/
	const playTrack = (trackIndex) => {
		/* toggle if same track, else play new song */
		if (trackIndex === state.activeIndex) {
			const toggle = !state.isPlaying
			setIsPlaying(toggle)
		}
		else {
			setState({...state, 
				isPlaying: true,
				activeIndex: trackIndex
			})
		}
	}

	return (
		/* Two flavors of doing things
		Using the context to pass around the object and Hook*/
		<MusicPlayerContext.Provider value={{
			/* Passing in vars */
			currentTrackNameFromContext: state.tracks[state.activeIndex].name,
			playTrack: playTrack,

			/* Passing in whole state and how to change to custom Hook */
			state: state,
			setState: setState,
		}}>
			{children}
		</MusicPlayerContext.Provider>
	)

}