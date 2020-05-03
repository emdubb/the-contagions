export const SET_CARD = 'SET_CARD';
export const SET_ROUND = 'SET_ROUND';
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';

export const setCard = (card) => ({
  type: SET_CARD,
  payload: {
    card,
  },
});

export const setRound = (round) => ({
  type: SET_ROUND,
  payload: {
    round,
  },
});

export const shuffleCards = () => ({
  type: SHUFFLE_CARDS,
});
