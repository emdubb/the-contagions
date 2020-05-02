import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import PropTypes from 'prop-types';

const GameHeader = ({ title }) => {
  const history = useHistory();
  return (
    <Grid>
      <AppsIcon onClick={() => history.push('/')} />
      <Typography variant="h3" align="center">{title}</Typography>
    </Grid>
  );
};

GameHeader.propTypes = {
  title: PropTypes.string,
};

export default GameHeader;