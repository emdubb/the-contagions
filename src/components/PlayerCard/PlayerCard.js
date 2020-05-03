import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(() => ({
  height: 100,
  width: 200,
  margin: 10,
  textTransform: 'uppercase',
}));

export const PlayerCard = ({ name }) => (
  <StyledCard variant="outlined">
    <Typography align="center">{name}</Typography>
  </StyledCard>
);

PlayerCard.propTypes = {
  name: PropTypes.string,
};

export default PlayerCard;
