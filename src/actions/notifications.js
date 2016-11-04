import axios from 'axios';
import { createAction } from 'redux-actions';


export const list = () => {
  return {
    type: 'LIST_NOTIFICATIONS',
    payload: new Promise()
  }
};


export const markAllRead = () => (dispatch) => {
  return dispatch({
    type: 'MARK_NOTIFICATIONS_READ',
    payload: new Promise()
  });
};
