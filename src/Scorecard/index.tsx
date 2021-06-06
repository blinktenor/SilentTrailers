import React, { useState } from 'react';
import { PlayerControls } from './PlayerControls';

export const Scorecard = () => {
  const [players, setPlayers] = useState<Array<string>>([]);

  const addPlayer = (playerName: string) => {
    setPlayers(players.concat([playerName]));
  }

  const removePlayer = (playerName: string) => {
    setPlayers(players.filter((player) => player !== playerName));
  }

  return (
    <>
      <PlayerControls players={players} addPlayer={addPlayer} removePlayer={removePlayer} />
    </>
  );
}