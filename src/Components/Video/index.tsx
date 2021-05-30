import React, { useState } from 'react';
import { Document } from '../shared/documentUtils';
import { Col, Row, Button, Input, Table, Tooltip } from 'antd';

interface VideosProps {
  videos: Array<Document>;
}

export const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <>
    { videos.map((video) => (
      <Row> 
        <Col> {video.name} </Col>
      </Row>
    ))}
    </>
  );
}