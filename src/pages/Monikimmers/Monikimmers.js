import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import GameHeader from './../../components/GameHeader';
import MonikimmerCard from './../../components/MonikimmerCard';

const Monikimmers = ({ cards, rounds, currentCard, currentRound, setCard, nextRound }) => {
  const round = rounds.find(round => round.number === currentRound);
  return (
    <Grid>
      <GameHeader title="Monikimmers"/>
      <Typography align="center" variant="h4">Round {round.number}: {round.title}</Typography>
      <Typography align="center" variant="body1">{round.instructions}</Typography>
      <Grid container justify="center">
        {
          cards.length === currentCard + 1 ?
            <Grid>
              <Button onClick={() => nextRound(currentRound)}>Next Round</Button>
            </Grid>
          :
            <Grid>
              <MonikimmerCard card={cards[currentCard]}></MonikimmerCard>
              <Button color="secondary" size="large" onClick={() => setCard(currentCard + 1)}>Skip</Button>
              <Button color="primary" size="large" onClick={() => setCard(currentCard + 1)}>Correct</Button>
            </Grid>          
        }
      </Grid>
    </Grid>
  );
};

export default Monikimmers;
