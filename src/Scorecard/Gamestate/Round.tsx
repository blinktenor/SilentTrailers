import React, { useState } from 'react';

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
    console.log('updating scores');
    let kieth = 0;
    let player = 0;
    round.forEach((value, key) => {
      const points = (roundNumber + 1) * (roundNumber + 1);
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
      <span> Players: {playerDisplay} </span>
      <span> Kieth: {kiethDisplay} </span>
    </>
  );

  return (
    <div key={`round-${roundNumber}`} >
      Round: {roundNumber + 1}
      {players.map((player) => (
        <>
          {player}: 
          <input 
            type="radio" 
            name={`${player}-${roundNumber}`} 
            onClick={() => updateScore(roundNumber, player, player)} 
          />
          Kieth: 
          <input 
            type="radio" 
            name={`${player}-${roundNumber}`} 
            onClick={() => updateScore(roundNumber, player, 'Kieth')} 
          />
        </>
      ))}
      Round Score:
      {displayRoundScore(roundNumber, playerScore, kiethScore)}
    </div>
  );
}