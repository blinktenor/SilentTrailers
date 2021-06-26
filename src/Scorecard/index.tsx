import React, { useState } from 'react';
import { PlayerControls } from './PlayerControls';
import { Gamestate } from './Gamestate';
import { useSelector, useDispatch } from 'react-redux';

export const Scorecard = ({...props}) => {
  return (
    <>
      <PlayerControls />
      <Gamestate {...props} />
    </>
  );
}