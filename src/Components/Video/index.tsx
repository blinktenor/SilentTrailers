import React, { useState } from 'react';
import { Document } from '../shared/documentUtils';
import { Col, Row, Button, Input, Table, Tooltip } from 'antd';

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
      <Row key={video.id}> 
        <Col> {video.name} </Col>
        <Col> 
          <Button
            onClick={() => {openVideoUrl(video)}}
          > 
            Play Video 
          </Button>
        </Col>
      </Row>
    ))}
    </>
  );
}