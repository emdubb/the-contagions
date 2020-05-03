import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, styled } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import HelpIcon from '@material-ui/icons/Help';
import PropTypes from 'prop-types';

const StyledAppsIcon = styled(AppsIcon)(() => ({
  margin: 20,
}));

const StyledHelpIcon = styled(HelpIcon)(() => ({
  margin: 20,
}));

const GameHeader = ({ title }) => {
  const history = useHistory();
  return (
    <Grid container justify="space-between">
      <StyledAppsIcon onClick={() => history.push('/')} />
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      <StyledHelpIcon />
    </Grid>
  );
};

GameHeader.propTypes = {
  title: PropTypes.string,
};

export default GameHeader;
