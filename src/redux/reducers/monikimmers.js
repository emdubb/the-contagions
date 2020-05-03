import reduceReducers from 'reduce-reducers';

import { createReducer } from './../utils';
import cards from './../../config/cards';
import {
  SET_CARD,
  SET_ROUND,
  SHUFFLE_CARDS,
} from './../../actions/monikimmers';

const initialState = {
  currentCard: 0,
  currentRound: 1,
  cards: cards,
};

const shuffle = (array) => {
  const shuffled = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    shuffled.push(randomItem);
    array = array.filter((item) => item.id !== randomItem.id);
  }
  return shuffled;
};

const reducers = {
  [SET_CARD]: (draft, { card }) => {
    draft.currentCard = card;
  },
  [SET_ROUND]: (draft, { round }) => {
    draft.currentRound = round;
  },
  [SHUFFLE_CARDS]: (draft) => {
    draft.cards = shuffle(cards);
  },
};

export default reduceReducers(initialState, createReducer(reducers));
