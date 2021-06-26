import React, { KeyboardEvent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { addPlayer, removePlayer } from '../../store/playersSlice';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';

export const PlayerControls = () => {
  const players = useSelector((state: RootState)=> state.players.value);
  const dispatch = useDispatch();

  const keypressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      const playerName = target.value;
      dispatch(addPlayer(playerName));
      target.value = "";
    }
  };

  const renderPlayer = (player: string) => (
    <PlayerWrapper key={player}>
      <PlayerName> {player} </PlayerName>
      <Button onClick={() => {dispatch(removePlayer(player))}}> X </Button>
    </PlayerWrapper>
  );

  return (
    <PlayerSetup>
      <div>
        New Player: <PlayerInput onBlur={event => addPlayer(event.target.value)} onKeyDown={(event) => keypressHandler(event)} />
      </div>
      {players.map((player) => renderPlayer(player))}
    </PlayerSetup>
  );
}

const PlayerSetup = styled.div`
  padding-top: 20px;
  background-color: #000000;
  color: #7FFF00;
`;

const PlayerInput = styled.input`
  margin-bottom: 20px;
  background-color: #A9A9A9;
`;

const PlayerWrapper = styled.div`
  margin-left: 10px;
  padding: 20px;
  border-radius: 25px;
  background-color: #A9A9A9;
  width: 20%;
  display: inline;
`;

const PlayerName = styled.span`
  margin-right: 20px;
  margin-left: 30px;
`;