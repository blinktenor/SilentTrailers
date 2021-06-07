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
            <RoundContainer key={`round-${index}`}>
              <Round players={players} roundNumber={index} />
            </RoundContainer>
          );
        })
      }
    </>
  );
}
const RoundContainer = styled.div`
  padding-top: 10px;
  background-color: #dfdfdf;
`;