import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import GameCard from '../../components/GameCard';

const Dashboard = () => {
  const games = [ { title: 'Monikimmers' }, { title: 'Wavelength' }]; // will come from API
  return (
    <Grid>
      <Typography variant="h1" align="center">The Contagions</Typography>
      <Grid container justify="center">
        {games.map(game => (
          <GameCard title={game.title} key={game.title} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
