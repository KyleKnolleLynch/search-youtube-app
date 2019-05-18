import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onKeywordsSubmit = async keywords => {
    const videoRes = await youtube.get('/search', {
      params: {
        q: keywords
      }
    });

    this.setState({ videos: videoRes.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onKeywordsSubmit={this.onKeywordsSubmit} />
        <VideoDisplay video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
