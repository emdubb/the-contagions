import { combineReducers } from 'redux';
import monikimmers from './monikimmers';
import players from './players';
import wavelength from './wavelength';

export default combineReducers({ monikimmers, wavelength, players });
