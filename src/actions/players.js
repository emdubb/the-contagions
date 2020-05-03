export const JOIN_GAME = 'JOIN_GAME';

export const joinGame = (player) => ({
  type: JOIN_GAME,
  payload: {
    player,
  },
});
