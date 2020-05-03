import { compose } from 'redux';
import { connect } from 'react-redux';

import Players from './Players';
import selectors from './../../selectors';
import { joinGame } from './../../actions/players';

export const mapDispatchToProps = (dispatch) => ({
  joinGame: (player) => {
    dispatch(joinGame(player));
  },
});

export const mapStateToProps = (state) => ({
  players: selectors.players.playersSelector(state),
  joined: selectors.players.playerJoinedSelector(state),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Players);
