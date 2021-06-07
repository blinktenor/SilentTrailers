import React, { useState } from 'react';
import { PlayerControls } from './PlayerControls';
import { Gamestate } from './Gamestate';

export const Scorecard = () => {
  const [players, setPlayers] = useState<Array<string>>(['Bob', 'Doug']);

  const addPlayer = (playerName: string) => {
    if (!playerName || playerName === '') return;
    setPlayers(players.concat([playerName]));
  }

  const removePlayer = (playerName: string) => {
    setPlayers(players.filter((player) => player !== playerName));
  }

  return (
    <>
      <PlayerControls players={players} addPlayer={addPlayer} removePlayer={removePlayer} />
      <Gamestate players={players} />
    </>
  );
}