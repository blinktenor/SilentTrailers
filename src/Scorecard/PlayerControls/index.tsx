import React, { KeyboardEvent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

interface PlayerControlProps {
  addPlayer: (playerName: string) => void;
  players: Array<string>;
  removePlayer: (playerName: string) => void;
}

export const PlayerControls: React.FC<PlayerControlProps> = ({ players, addPlayer, removePlayer }) => {

  const keypressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      const playerName = target.value;
      addPlayer(playerName);
      target.value = "";
    }
  };

  const renderPlayer = (player: string) => (
    <PlayerWrapper key={player}>
      <PlayerName> {player} </PlayerName>
      <Button onClick={() => {removePlayer(player)}}> X </Button>
    </PlayerWrapper>
  );

  return (
    <>
      <div>
        <PlayerInput onBlur={event => addPlayer(event.target.value)} onKeyDown={(event) => keypressHandler(event)} />
      </div>
      {players.map((player) => renderPlayer(player))}
    </>
  );
}

const PlayerInput = styled.input`
  margin-bottom: 20px;
`;

const PlayerWrapper = styled.div`
  width: 20%;
  display: inline;
`;

const PlayerName = styled.span`
  margin-right: 20px;
  margin-left: 30px;
`;