import { compose } from 'redux';
import { connect } from 'react-redux';

import Monikimmers from './Monikimmers';
import selectors from './../../selectors';
import { setCard, setRound, shuffleCards } from './../../actions/monikimmers';

const rounds = [
  {
    number: 1,
    title: 'Description',
    instructions: 'Use any words, sounds, or gestures. You can\'t use the name itself. If you use any part of the name, you have to skip that card and shuffle it back into the deck. Reading the clue text is allowed',
  },
  {
    number: 2,
    title: 'One Word',
    instructions: 'Use only 1 word as a clue. It can be anything except the name itself. You can repeat that word as much as you like, but no sounds or gestures.'
  },
  {
    number: 3,
    title: 'Charades',
    instructions: 'Just charades. No words. Sound effects are OK (within reason).',
  },
];

export const mapDispatchToProps = dispatch => ({
  setCard: card => {
    dispatch(setCard(card))
  },
  nextRound: (round) => {
    dispatch(shuffleCards());
    dispatch(setCard(0));
    dispatch(setRound(round + 1));
  },
});

export const mapStateToProps = (state, props) => ({
  cards: selectors.monikimmers.cardsSelector(state),
  rounds: rounds,
  currentCard: selectors.monikimmers.currentCardSelector(state),
  currentRound: selectors.monikimmers.currentRoundSelector(state),
  team1Score: 0,
  team2Score: 0,
  nextCard: (win, card) => {
    console.log('we won!', win, card++, state, props.settingCard)
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Monikimmers);
