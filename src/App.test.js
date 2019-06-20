import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount, unmount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import MusicPlayer, { tracks } from "./MusicPlayer"
import TrackList from "./TrackList"

Enzyme.configure({ adapter: new Adapter() });

describe("The musicPlayer app ", ()=> {

	it('renders without crashing', () => {

	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

  it("has same id for song names", () => {
    const wrapper = mount(<App/>)
    expect(wrapper.find(`#${tracks[2].name}`).text()).toEqual(`${tracks[2].name}`)
    expect(wrapper.find(`#${tracks[3].name}`).text()).toEqual(`${tracks[3].name}`)
    wrapper.unmount()
  });

  it("plays when click play is done first time", () => {
    const wrapper = mount(<App/>)
    let playButton = wrapper.find('#PlayButton')
    expect(playButton.exists('#Pause')).toEqual(true)
    playButton.simulate('click')
    /* enzyme not updating with conditional rendering */
    playButton = wrapper.find('#PlayButton')
    expect(playButton.exists('#Play')).toEqual(true)
    wrapper.unmount()
  });

  it("plays song when song button paused and clicked", () => {
  	const songIndex = 1
    const wrapper = mount(<App/>)
    const songButton = wrapper.find(`#${tracks[1].name.split(" ").join("_")}`).find('button')
    const musicLabel = wrapper.find(`#MusicLabel`)
    //expect(playButton.text()).toEqual('Paused')
    songButton.simulate('click')
    expect(musicLabel.text()).toEqual(`${tracks[1].name}`)
    expect(wrapper.find('#Play').exists()).toEqual(true)
    wrapper.unmount()
  });

  it("pauses song when song button playing and clicked", () => {
    const wrapper = mount(<App defaultPlaying={true} defaultIndex={1}/>)
    const songButton = wrapper.find(`#${tracks[1].name.split(" ").join("_")}`).find('button')
    //expect(playButton.text()).toEqual('Paused')
    songButton.simulate('click')
    expect(wrapper.find('#Pause').exists()).toEqual(true)
    expect(wrapper.find('#Play').exists()).toEqual(false)
    wrapper.unmount()
  });

  it("default plays", () => {
	const wrapper = mount(<App defaultPlaying={true}/>)
	expect(wrapper.find('#Play').exists()).toEqual(true)
	wrapper.unmount()
  })

  it("plays the next song when Next clicked", () => {
  	const index = 1
  	const wrapper = mount(<App defaultIndex={index}/>)
  	const nextButton = wrapper.find("#NextButton")
  	nextButton.simulate('click')
  	//const currentSong = wrapper.find("#CurrentSong")
  	// the state.tracks[default + 1].name
  	expect(wrapper.find('#MusicLabel').text()).toEqual(tracks[index + 1].name)
  })
  it("plays the next song (looped to first) when Next clicked", () => {
  	const index = tracks.length - 1
  	const wrapper = mount(<App defaultIndex={index}/>)
  	const nextButton = wrapper.find("#NextButton")
  	nextButton.simulate('click')
  	expect(wrapper.find('#MusicLabel').text()).toEqual(tracks[0].name)
  })

  it("plays the previous song when Previous clicked", () => {
  	const index = 1
  	const wrapper = mount(<App defaultIndex={index}/>)
  	const previousButton = wrapper.find("#PreviousButton")
  	previousButton.simulate('click')
  	expect(wrapper.find('#MusicLabel').text()).toEqual(tracks[0].name)
  })

  it("plays the previous song (looped to end) when Previous clicked", () => {
  	const index = 0
  	const wrapper = mount(<App defaultIndex={index}/>)
  	const previousButton = wrapper.find("#PreviousButton")
  	previousButton.simulate('click')
  	expect(wrapper.find('#MusicLabel').text()).toEqual(tracks[tracks.length - 1].name)
  })

})