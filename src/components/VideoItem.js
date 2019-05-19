import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './videoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <ListGroup.Item action>
      <div className="video-item" onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className="video-item-content">
          <h5>{video.snippet.title}</h5>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default VideoItem;
