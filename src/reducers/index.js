import { combineReducers } from 'redux';
import messages from 'reducers/messages';
import notifications from 'reducers/notifications';
import institutos from 'reducers/institutos';
import disciplinas from 'reducers/disciplinas';
import app from 'reducers/app';

export default combineReducers({ institutos, messages, notifications, disciplinas, app });
