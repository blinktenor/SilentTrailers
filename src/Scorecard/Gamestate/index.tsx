import React from 'react';
import { Round } from './Round';

const GAME_ROUNDS = 3;

interface GamestateProps {
  players: Array<string>;
}

export const Gamestate: React.FC<GamestateProps> = ({ players }) => {

  return (
    <>
      {[...Array(GAME_ROUNDS)].map(
        (value: undefined, index: number) => {
          return (<Round players={players} roundNumber={index} />);
        })
      }
    </>
  );
}