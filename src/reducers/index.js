import { combineReducers } from 'redux';
import messages from 'reducers/messages';
import notifications from 'reducers/notifications';
import institutos from 'reducers/institutos';

export default combineReducers({ institutos, messages, notifications });
