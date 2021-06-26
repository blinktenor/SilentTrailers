import React from 'react';
import { Round } from './Round';
import styled from 'styled-components';

const GAME_ROUNDS = 3;

export const Gamestate = ({ ...props }) => {

  return (
    <>
      {[...Array(GAME_ROUNDS)].map(
        (value: undefined, index: number) => {
          return (
            <RoundContainer key={`round-${index}`}>
              <Round roundNumber={index} {...props}/>
            </RoundContainer>
          );
        })
      }
    </>
  );
}
const RoundContainer = styled.div`
  padding-top: 10px;
  background-color: #000000;
`;