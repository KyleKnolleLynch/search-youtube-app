import React from 'react';
import VideoItem from './VideoItem';
import ListGroup from 'react-bootstrap/ListGroup';

const VideoList = ({ videos }) => {
 const resultList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <ListGroup>{resultList}</ListGroup>
  
};

export default VideoList;
