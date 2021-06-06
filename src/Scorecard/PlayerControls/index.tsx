import React from 'react';

interface PlayerControlProps {
  addPlayer: (playerName: string) => void;
  players: Array<string>;
  removePlayer: (playerName: string) => void;
}

export const PlayerControls: React.FC<PlayerControlProps> = ({ players, addPlayer, removePlayer }) => {

  const renderPlayer = (player: string) => (
    <div key={player}>
      <span> {player} </span>
      <span onClick={() => {removePlayer(player)}}> X </span>
    </div>
  );

  return (
    <>
      {players.map((player) => renderPlayer(player))}
      <input onBlur={event => addPlayer(event.target.value)} />
    </>
  );
}