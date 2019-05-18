import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';


const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div><h1>Please enter search keyword.</h1></div>;
  } else {
    return (
      <Fragment>
        <div className="display-card" style={{width: '45vw', float: 'left', margin: '2rem'}}>
          <Card>
            <Card.Img src={video.snippet.thumbnails.medium.url} />
          </Card>

          <Card style={{ marginTop: '3rem', textAlign: 'center' }}>
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
