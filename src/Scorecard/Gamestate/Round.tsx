import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

interface RoundProps {
  roundNumber: number;
  setListDocumentsVisibility?: (visible: boolean) => void;
}

interface Match {
  round: number;
  matchup: string;
  winner: string;
}

export const Round: React.FC<RoundProps> = ({ roundNumber, setListDocumentsVisibility }) => {
  const roundWinner = new Map<string, Match>();
  const [kiethScore, setKiethScore] = useState<number>(0);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const players = useSelector((state: RootState)=> state.players.value);

  const updateRoundScore = (roundNumber: number, round: Map<string, Match>) => {
    let kieth = 0;
    let player = 0;
    const points = Math.pow(2, roundNumber);
    round.forEach((value, key) => {
      if (value.winner === 'Kieth') {
        kieth += points;
      } else {
        player += points;
      }
    });
    setKiethScore(kieth);
    setPlayerScore(player);
  }

  const updateScore = (roundNumber: number, player: string, winner: string) => {
    roundWinner.set(player, {round: roundNumber, matchup: player, winner: winner});
    updateRoundScore(roundNumber, roundWinner);
  }

  const displayRoundScore = (roundNumber: number, playerDisplay: number, kiethDisplay: number) => (
    <>
      <ScoreContainer> Players: {playerDisplay} </ScoreContainer>
      <ScoreContainer> Kieth: {kiethDisplay} </ScoreContainer>
    </>
  );

  return (
    <RoundContainer key={`round-${roundNumber}`} >
      <RoundDisplay> Round: {roundNumber + 1} </RoundDisplay>
      {players.map((player) => (
        <RadioWrapper key={player}>
          <NameContainer> {player}: </NameContainer>
          <WinnerRadio 
            type="radio" 
            name={`${player}-${roundNumber}`} 
            onClick={() => updateScore(roundNumber, player, player)} 
          />
          <NameContainer> Kieth: </NameContainer>
          <WinnerRadio 
            type="radio" 
            name={`${player}-${roundNumber}`} 
            onClick={() => updateScore(roundNumber, player, 'Kieth')} 
          />
          {setListDocumentsVisibility &&
            <Button type="primary" onClick={() => setListDocumentsVisibility(true)}>
              Pick Video
            </Button>
          }
        </RadioWrapper>
      ))}
      <RoundScoreDisplay>
        <div> Round Score: </div>
        {displayRoundScore(roundNumber, playerScore, kiethScore)}
      </RoundScoreDisplay>
    </RoundContainer>
  );
}

const RadioWrapper = styled.span`
  border: 1px solid light-grey;
  margin-right: 20px
`;

const RoundDisplay = styled.span`
  margin-top: 20px;
  display: block;
`;

const RoundScoreDisplay = styled.span`
  display: block;
`;

const WinnerRadio = styled.input`
  margin-right: 5px;
`;

const NameContainer = styled.span`
  margin-right: 5px;
`;

const ScoreContainer = styled.span`
  margin-right: 20px;
`;

const RoundContainer = styled.div`
  font-style: bold;
  border-radius: 25px;
  margin-top: 20px;
  background-color: #A9A9A9;
  width: 50%;
  display: inline-block;
  color: #7FFF00;
`;