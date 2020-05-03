import React from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(() => ({
  minHeight: 250,
  minWidth: 250,
  margin: 10,
  textTransform: 'uppercase',
  cursor: 'pointer',
}));

export const GameCard = ({ title }) => {
  const history = useHistory();
  return (
    <StyledCard variant="outlined" onClick={() => history.push(`/${title}`)}>
      <Typography align="center">{title}</Typography>
    </StyledCard>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
};

export default GameCard;
