import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';


const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div><h1>Loading..</h1></div>;
  } else {

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <Fragment>
        <div className="video-card"  style={{width: "100%"}}>
          <Card style={{height: "50vh"}}>
            <iframe
            height="100%"
            src={videoSrc} 
            frameBorder="0"
            title="video-player"
            allow="accelerometer; 
            autoplay;
            encrypted-media;
            gyroscope; 
            picture-in-picture" 
            allowFullScreen
            />
          </Card>

          <Card style={{ textAlign: 'center' }}>
            <Card.Body>
              <Card.Title>{video.snippet.title}</Card.Title>
              <Card.Text>{video.snippet.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
};

export default VideoDisplay;
