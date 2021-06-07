import React from 'react';
import { Document } from '../shared/documentUtils';
import { Col, Row, Button } from 'antd';
import styled from 'styled-components';

interface VideosProps {
  videos: Array<Document>;
}

export const Videos: React.FC<VideosProps> = ({ videos }) => {

  const openVideoUrl = (video: Document) => {
    window.open(video.webViewLink, "_blank");
  }

  return (
    <>
    { videos.map((video) => (
      <VideoWrapper key={video.id}> 
        <VideoButton
            onClick={() => {openVideoUrl(video)}}
          > 
          Play Video 
        </VideoButton>
        <span> {video.name} </span>
      </VideoWrapper>
    ))}
    </>
  );
}

const VideoWrapper = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const VideoButton = styled.button`
  margin-right: 20px;
`;