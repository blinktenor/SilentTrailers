import React from 'react';
import { PlayerControls } from './PlayerControls';
import { Gamestate } from './Gamestate';

export const Scorecard = ({...props}) => {
  return (
    <>
      <PlayerControls />
      <Gamestate {...props} />
    </>
  );
}