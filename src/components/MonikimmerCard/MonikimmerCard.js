import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import GreenPoints from './../../icons/GreenPoints';

const StyledCard = styled(Card)(() => ({
  minHeight: 500,
  width: 350,
  margin: 10,
}));

const GridSpread = styled(Grid)(() => ({
  height: 500,
}));

const TitleTypography = styled(Typography)(() => ({
  marginTop: '20%',
  color: '#525246',
}));

const DescriptionTypography = styled(Typography)(() => ({
  margin: '0 30px',
  color: '#525246',
}));

const CategoryTypography = styled(Typography)(() => ({
  // marginTop: '20%',
  color: '#80c268',
  textTransform: 'uppercase',
}));

const PointNumberTypography = styled(Typography)(() => ({
  // marginTop: '20%',
  fontWeight: 500,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -190%)',
  color: 'white',
  textTransform: 'uppercase',
}));

const PointsTypography = styled(Typography)(() => ({
  // marginTop: '20%',
  fontSize: '0.5em',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -150%)',
  color: 'white',
  textTransform: 'uppercase',
}));

const Dots = styled('div')(() => ({
  // marginTop: '40%',
  borderTop: '4px dotted #E8E7E5',
  // borderStyle: 'dotted',
  // borderColor: '#525246',
  // borderWidth: '0 0 4px 0',
  borderImageSlice: '33% 33%',
  borderImageRepeat: 'round',
  width: 100,
  margin: '0 auto',
}));

const StyledGreenPoints = styled(GreenPoints)(() => ({
  width: 70,
  margin: '0 auto',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  // bottom: 0,
}));


// #80c268	GREEN	CELEBRITIES
// #8f6eb3	PURPLE	HISTORICAL FIGURES
// #ea5e3a	RED/ORANGE	ET CETERA
// #37c6fe	BLUE	FICTIONAL CHARACTERS
export const MonikimmerCard = ({ card }) => (
  <StyledCard variant="outlined">
    <GridSpread container justify="space-between" direction="column">
      <TitleTypography align="center" variant="h5">
        {card.title}
      </TitleTypography>
      <DescriptionTypography align="center">
        {card.description}
      </DescriptionTypography>
        <Dots />
        <CategoryTypography align="center">{card.category}</CategoryTypography>
        
        <Grid item>
          <StyledGreenPoints />
          <PointNumberTypography align="center">{card.points}</PointNumberTypography>
          <PointsTypography align="center">Points</PointsTypography>
        </Grid>
      </GridSpread>
  </StyledCard>
);

MonikimmerCard.propTypes = {
  card: PropTypes.object,
};

export default MonikimmerCard;
