import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const VideoItem = ({ video }) => {
  return (
    <ListGroup.Item action>
    <img src={video.snippet.thumbnails.medium.url} alt="thumbnails" />
    <h5>{video.snippet.title}</h5>
    </ListGroup.Item>
  )
};

export default VideoItem;
