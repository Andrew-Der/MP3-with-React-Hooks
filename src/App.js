import React from 'react';
import logo from './logo.svg';
import './App.css';

import MusicPlayer from './MusicPlayer'
import TrackList from './TrackList'
import PlayerControls from './PlayerControls'

function App(props) {

  const {defaultPlaying, defaultIndex} = props
  return (
    <div className="App">
      <header className="App-header">
        <MusicPlayer className="MusicPlayer" 
        defaultPlaying={defaultPlaying || false} 
        defaultIndex={defaultIndex || 0}>

          <div className="container">
            <TrackList id="TrackList"/>
          </div>

          <div>
            <PlayerControls/>
          </div>
        </MusicPlayer>
      </header>
    </div>
  );
}

export default App;
