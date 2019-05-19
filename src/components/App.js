import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onKeywordsSubmit('Bulldogs');
  }

  onKeywordsSubmit = async keywords => {
    const videoRes = await youtube.get('/search', {
      params: {
        q: keywords
      }
    });

    this.setState({
      videos: videoRes.data.items,
      selectedVideo: videoRes.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onKeywordsSubmit={this.onKeywordsSubmit} />
        <Container fluid>
          <Row>
            <Col xs={12} lg={7}>
              <VideoDisplay video={this.state.selectedVideo} />
            </Col>
            <Col xs={12} lg={5}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
