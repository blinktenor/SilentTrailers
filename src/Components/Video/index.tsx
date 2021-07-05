import React from 'react';
import { Document } from '../shared/documentUtils';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleTray } from '../../store/documentSlice';
import { useDispatch } from 'react-redux';

interface VideosProps {
  videos: Array<Document>;
}

export const Videos: React.FC<VideosProps> = ({ videos }) => {
  const callback = useSelector((state: RootState) => state.document.playerCallback);
  const dispatch = useDispatch();

  const openVideoUrl = (video: Document) => {
    if (callback) {
      // @ts-ignore
      callback(video.name);
    }
    dispatch(toggleTray());
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