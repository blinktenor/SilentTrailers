import React, { useState } from 'react';
import { Folder } from '../shared/documentUtils';
import { Videos } from '../Video';
import styled from 'styled-components';

interface FoldersProps {
  folder: Folder;
}

export const Folders: React.FC<FoldersProps> = ({ folder }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const folderName = folder.folder;
  const videos = folder.videos;
  return (
    <VideoRow key={folderName.id}>
      <span> Category: {folderName.name} </span>
      <span> Trailer Count: {videos.length} </span>
      { videos.length > 0 && 
        <VideoExpand onClick={() => setExpanded(!expanded)}> 
          View Trailers 
        </VideoExpand>
      }
      {expanded && <Videos videos={videos} />}
    </VideoRow>
  );
};

const VideoRow = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const VideoExpand = styled.button`
  float: right;
`;