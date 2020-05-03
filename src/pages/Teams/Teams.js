import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import GameHeader from './../../components/GameHeader';

const Teams = () => {
  const history = useHistory();
  return (
    <Grid>
      <GameHeader title="Monikimmers" />
      <Typography align="center">Team 1 - Select your players</Typography>
      <Button onClick={() => history.push('/monikimmers')}>Lets Play!</Button>
    </Grid>
  );
};

export default Teams;
