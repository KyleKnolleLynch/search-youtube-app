import React from 'react';
import VideoItem from './VideoItem';
import ListGroup from 'react-bootstrap/ListGroup';

const VideoList = ({ videos, onVideoSelect }) => {
 const resultList = videos.map(video => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });

  return <ListGroup>{resultList}</ListGroup>
  
};

export default VideoList;
