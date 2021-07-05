import React, { useState } from 'react';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Player } from './Player';

interface RoundProps {
  roundNumber: number;
}

interface Match {
  round: number;
  matchup: string;
  winner: string;
  movie: string;
}

export const Round: React.FC<RoundProps> = ({ roundNumber }) => {
  const [roundWinner, setRoundWinner] = useState<Map<string, Match>>(new Map<string, Match>());
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
    const match = roundWinner.get(player);
    const movie = match?.movie || '';
    roundWinner.set(player, {round: roundNumber, matchup: player, winner: winner, movie: movie});
    updateRoundScore(roundNumber, roundWinner);
  }

  const setMovieForMatch = (player: string, movie: string) => {
    const match = roundWinner.get(player) || {round: roundNumber, matchup: player, winner: '', movie: movie};
    match.movie = movie;
    roundWinner.set(player, match);
    setRoundWinner(roundWinner);
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
        <Player 
          key={player}
          roundNumber={roundNumber}
          player={player}
          movieName={roundWinner?.get(player)?.movie}
          updateScore={updateScore}
          setMovieForMatch={setMovieForMatch}
        />
      ))}
      <RoundScoreDisplay>
        <div> Round Score: </div>
        {displayRoundScore(roundNumber, playerScore, kiethScore)}
      </RoundScoreDisplay>
    </RoundContainer>
  );
}

const RoundDisplay = styled.span`
  margin-top: 20px;
  display: block;
`;

const RoundScoreDisplay = styled.span`
  display: block;
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
  color: #00008B;
`;