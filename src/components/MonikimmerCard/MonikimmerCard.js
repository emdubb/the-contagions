import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)(() => ({
  minHeight: 500,
  width: 350,
  margin: 10,
}));

const TitleTypography = styled(Typography)(() => ({
  marginTop: '20%',
  color: '#525246',
}));

const DescriptionTypography = styled(Typography)(() => ({
  marginTop: '20%',
  color: '#525246',
}));

const CategoryTypography = styled(Typography)(() => ({
  marginTop: '20%',
  color: '#81BB68',
  textTransform: 'uppercase',
}));

const Dots = styled('div')(() => ({
  marginTop: '40%',
  color: '#525246',
  borderTop: '4px dotted #525246',
  // borderStyle: 'dotted',
  // borderColor: '#525246',
  // borderWidth: '0 0 4px 0',
  // borderImageSlice: '33% 33%',
  // borderImageRepeat: 'round',
  width: 100,
  margin: '0 auto',
}));

export const GameCard = ({ card }) => {
  return (
    <StyledCard variant="outlined">
      <Grid container justify="center" direction="column"> 
        <TitleTypography align="center" variant="h5">
          {card.title}
        </TitleTypography>
        <DescriptionTypography align="center">
          {card.description}
        </DescriptionTypography>
        <Dots/>
        <CategoryTypography align="center">
          {card.category}
        </CategoryTypography>
        <Typography align="center">
          {card.points}
        </Typography>
      </Grid>
    </StyledCard>
  );
}

GameCard.propTypes = {
  card: PropTypes.object,
};

export default GameCard;
