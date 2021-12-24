import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyDBUeh6T6T4vsOJiJd3WH4_gw8agXEZS3c'

class App extends Component {

  state = { videos: [] }


  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'soccer'}, (data) => {
      this.setState({videos: data})
    });
  }

  render() {
    return(

      <div className="App">
        <Header />

        <Body>
          <Video video={this.state.videos[0]} />
          <List videos={this.state.videos} />
        </Body>
      </div>
    );
  }
}


export default App;
