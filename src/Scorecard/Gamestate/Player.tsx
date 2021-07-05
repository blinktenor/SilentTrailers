import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { toggleTray, setCallback } from '../../store/documentSlice';
import { useDispatch } from 'react-redux';

interface PlayerProps {
  roundNumber: number;
  player: string;
  movieName?: string;
  updateScore: (roundNumber: number, player: string, winner: string) => void;
  setMovieForMatch: (player: string, movieName: string) => void;
}

interface Match {
  round: number;
  matchup: string;
  winner: string;
  movie: string;
}

export const Player: React.FC<PlayerProps> = ({ roundNumber, player, movieName, updateScore, setMovieForMatch }) => {
  const dispatch = useDispatch();

  const setVideoCallback = (movieName: string) => {
    dispatch(setCallback(undefined));
    setMovieForMatch(player, movieName);
  }

  const openTrayAndSetCallback = () => {
    dispatch(toggleTray());
    dispatch(setCallback(setVideoCallback));
  }

  return (
    <RadioWrapper key={player}>
      <NameContainer> {player}: </NameContainer>
      <WinnerRadio 
        type="radio" 
        name={`${player}-${roundNumber}`} 
        onClick={() => updateScore(roundNumber, player, player)} 
      />
      <NameContainer> Kieth: </NameContainer>
      <WinnerRadio 
        type="radio" 
        name={`${player}-${roundNumber}`} 
        onClick={() => updateScore(roundNumber, player, 'Kieth')} 
      />
      {!movieName &&
        <Button type="primary" onClick={openTrayAndSetCallback}>
          Pick Video
        </Button>
      }
      {!!movieName && 
        <span>
          {movieName}
        </span>
      }
    </RadioWrapper>
  );
}

const RadioWrapper = styled.span`
  border: 1px solid light-grey;
  margin-right: 20px
`;

const WinnerRadio = styled.input`
  margin-right: 5px;
`;

const NameContainer = styled.span`
  margin-right: 5px;
`;