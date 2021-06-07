import React, { useState } from 'react';
import styled from 'styled-components';

interface RoundProps {
  players: Array<string>;
  roundNumber: number;
}

interface Match {
  round: number;
  matchup: string;
  winner: string;
}

export const Round: React.FC<RoundProps> = ({ players, roundNumber }) => {
  const roundWinner = new Map<string, Match>();
  const [kiethScore, setKiethScore] = useState<number>(0);
  const [playerScore, setPlayerScore] = useState<number>(0);

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
      {players.map((player) => (
        <RadioWrapper>
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
        </RadioWrapper>
      ))}
      <RoundScoreDisplay>
        Round Score:
        {displayRoundScore(roundNumber, playerScore, kiethScore)}
      </RoundScoreDisplay>
    </RoundContainer>
  );
}

const RadioWrapper = styled.span`
  border: 1px solid light-grey;
  margin-right: 20px
`;



const RoundScoreDisplay = styled.span`
  margin-left: 20px;
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
  margin-top: 20px;
`;