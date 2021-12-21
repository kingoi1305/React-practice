import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header'
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDBUeh6T6T4vsOJiJd3WH4_gw8agXEZS3c'

class App extends Component {

  state = { videos: [] }


  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'soccer サッカー' }, (data) => {
      this.setState({videos: data});
    });
  }

  render() {
    return(

      <div className="App">
        <Header />
      </div>
    );
  }
}


export default App;
