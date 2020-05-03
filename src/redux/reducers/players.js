import reduceReducers from 'reduce-reducers';

import { createReducer } from './../utils';
import { JOIN_GAME } from './../../actions/players';

const players = [
  {
    name: 'Player 1',
  },
  {
    name: 'Player 2',
  },
  {
    name: 'Player 3',
  },
];

const initialState = {
  players: players,
  joined: false,
};

const reducers = {
  [JOIN_GAME]: (draft, { player }) => {
    draft.players.push(player);
    draft.joined = true;
  },
};

export default reduceReducers(initialState, createReducer(reducers));
