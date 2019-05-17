import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: []
  }

  onKeywordsSubmit = async keywords => {
    const videoRes = await youtube.get('/search', {
      params: {
        q: keywords
      }
    });
    
    this.setState({videos: videoRes.data.items});
  };

  render() {
    return (
      <div>
        <SearchBar onKeywordsSubmit={this.onKeywordsSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
