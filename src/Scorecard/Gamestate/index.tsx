import React from 'react';
import { Round } from './Round';
import styled from 'styled-components';

const GAME_ROUNDS = 3;

interface GamestateProps {
  players: Array<string>;
}

export const Gamestate: React.FC<GamestateProps> = ({ players }) => {

  return (
    <>
      {[...Array(GAME_ROUNDS)].map(
        (value: undefined, index: number) => {
          return (
            <div key={`round-${index}`}>
              <RoundDisplay> Round: {index + 1} </RoundDisplay>
              <Round players={players} roundNumber={index} />
            </div>
          );
        })
      }
    </>
  );
}

const RoundDisplay = styled.span`
  margin-top: 20px;
  margin-right: 20px;
`;