import { useContext } from 'react';
import { MusicPlayerContext } from "./MusicPlayer";

export function useMusicPlayer () {
  const {state, setState} = useContext(MusicPlayerContext);

  // Play a specific track
  function playTrack(index) {
  	//console.log(index)
  	//console.log(state)
  	/* handle wrapping */
  	if (index === state.tracks.length) {
  		index = 0
  	}

    if (index === state.activeIndex) {
      setState({...state, 
      	isPlaying: !state.isPlaying});
    } else {
      setState(state => ({ ...state, 
      	activeIndex: index, 
      	isPlaying: true 
      }));
    }
  }

  function playPreviousTrack() {
  	let currentIndex = state.activeIndex
  	if (currentIndex === 0) {
  		currentIndex = state.tracks.length
  	}
  	playTrack(currentIndex - 1)
  }
  
  function playNextTrack() {
  	let currentIndex = state.activeIndex
  	if (currentIndex === state.tracks.length - 1) {
  		currentIndex = -1
  	}
  	playTrack(currentIndex + 1)
  }

  return {
  	playTrack,
  	playPreviousTrack,
  	playNextTrack,
  	trackList: state.tracks,
  	isPlaying: state.isPlaying,
    currentTrackName: state.tracks[state.activeIndex].name
  }
}
