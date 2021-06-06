import React, { useState } from 'react';
import { Folder } from '../shared/documentUtils';
import { Videos } from '../Video';
import { Col, Row, Button } from 'antd';

interface FoldersProps {
  folder: Folder;
}

export const Folders: React.FC<FoldersProps> = ({ folder }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const folderName = folder.folder;
  const videos = folder.videos;
  return (
    <Row key={folderName.id}>
      <Col> Category: {folderName.name} </Col>
      <Col> Trailer Count: {videos.length} </Col>
      { videos.length > 0 && 
        <Button onClick={() => setExpanded(!expanded)}> 
          View Trailers 
        </Button>
      }
      {expanded && <Videos videos={videos} />}
    </Row>
  );
};