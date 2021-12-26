import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyDBUeh6T6T4vsOJiJd3WH4_gw8agXEZS3c'

class App extends Component {

  state = { videos: [],
            selectedVideo: null}


  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'soccer'}, (data) => {
      this.setState({videos: data, selectedVideo: data[0]})
    });
  }

  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  onKeywordChangedHandler = (keyword) => {
    let newTerm = 'soccer' + keyword;
    if(keyword === ''){
      newTerm = 'soccer';
    }
    
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
     this.setState({ videos: data, selectedVideo: data[0]})
  });
  }

  render() {
    return(
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler}/>
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
