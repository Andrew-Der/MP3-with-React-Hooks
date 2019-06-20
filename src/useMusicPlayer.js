import { useContext } from 'react';
import { MusicPlayerContext } from "./MusicPlayer";

export function useMusicPlayer () {
  const {state, setState} = useContext(MusicPlayerContext);

  /* Play or Pause a specific track */
  function playTrack(index) {

    if (index === state.activeIndex) {
      if (process.env.NODE_ENV !== 'test') {
        state.isPlaying ? state.audioPlayer.pause() : state.audioPlayer.play()
      }
      setState({...state, 
      	isPlaying: !state.isPlaying});
    } else {
      if (process.env.NODE_ENV !== 'test') {
       state.audioPlayer.pause()
       state.audioPlayer = new Audio(state.tracks[index].file)
       state.audioPlayer.play()
     }
      setState(state => ({ ...state, 
      	activeIndex: index, 
      	isPlaying: true 
      }));

    }
  }

  function playPreviousTrack() {
    /* handle wrapping */
  	let currentIndex = state.activeIndex
  	if (currentIndex === 0) {
  		currentIndex = state.tracks.length
  	}
  	playTrack(currentIndex - 1)
  }
  
  function playNextTrack() {
    /* handle wrapping */
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
    activeIndex: state.activeIndex,
  	isPlaying: state.isPlaying,
    currentTrackName: state.tracks[state.activeIndex].name
  }
}
