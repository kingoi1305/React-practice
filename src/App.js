import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyAOIsfVLvIyzcYHhgLWe2NPSrwjS_99L1s'

class App extends Component {

  state = { videos: [],
            selectedVideo: null}


  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'soccer'}, (data) => {
      this.setState({videos: data, selectedVideo: data[2]})
    });
  }

  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return(
      <div className="App">
        <Header />

        <Body>
          <Video video={this.state.selectedVideo} />
          <List 
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}


export default App;
