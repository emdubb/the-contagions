import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import GameHeader from './../../components/GameHeader';
import PlayerCard from './../../components/PlayerCard';

const Players = ({ players, joinGame, joined }) => {
  const history = useHistory();
  return (
    <Grid>
      <GameHeader title="Monikimmers" />
      <Typography align="center">Players</Typography>
      <Grid container justify="center">
        {players.map((player) => (
          <PlayerCard key={player.name} name={player.name} />
        ))}
      </Grid>
      <Grid container justify="center">
        {!joined && (
          <Button onClick={() => joinGame({ name: 'New Player' })}>
            Join Game
          </Button>
        )}
        {players.length >= 4 && (
          <Button onClick={() => history.push('/Monikimmers/teams')}>
            Choose Teams
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

Players.propTypes = {
  players: PropTypes.array,
  joinGame: PropTypes.func,
  joined: PropTypes.bool,
};

export default Players;
