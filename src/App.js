import React from 'react';
import logo from './logo.svg';
import './App.css';

import MusicPlayer from './MusicPlayer'
import TrackList from './TrackList'
import PlayerControls from './PlayerControls'

function App(props) {

  /* defaults used to pass into for testing */
  const {defaultPlaying, defaultIndex} = props
  return (
    <div className="App">
      <header className="App-header">
        <div className="box has-background-grey">
          <MusicPlayer className="MusicPlayer" 
          defaultPlaying={defaultPlaying} 
          defaultIndex={defaultIndex}>

            <div className="container">
              <TrackList id="TrackList"/>
              <PlayerControls/>
            </div>
          </MusicPlayer>
        </div>
      </header>
    </div>
  );
}

export default App;
