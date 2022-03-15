import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData, unknownPet } from './helpers';

const Round = ({ data, games }) => {
  const pet = (id) => petData(data, id - 1);
  const game = (id) => games[id - 1];
  const winnerFromGame = (gameId) => {
    const winningId = games[gameId - 1].winner;
    if (winningId === '') {
      return unknownPet(games[gameId - 1]);
    }
    return pet(winningId);
  };

  return data.length ? (
    <div className="round">
      <h3>Sweet 16</h3>
      <BracketGame pet1={pet(1)} pet2={winnerFromGame(1)} game={game(9)} />
      <BracketGame pet1={pet(8)} pet2={pet(9)} game={game(5)} />
      <BracketGame pet1={pet(4)} pet2={winnerFromGame(2)} game={game(10)} />
      <BracketGame pet1={pet(5)} pet2={pet(12)} game={game(6)} />
      <BracketGame pet1={pet(2)} pet2={winnerFromGame(3)} game={game(11)} />
      <BracketGame pet1={pet(7)} pet2={pet(10)} game={game(7)} />
      <BracketGame pet1={pet(3)} pet2={winnerFromGame(4)} game={game(12)} />
      <BracketGame pet1={pet(6)} pet2={pet(11)} game={game(8)} />
    </div>
  ) : <div></div>;
};

export default Round;

Round.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
};
