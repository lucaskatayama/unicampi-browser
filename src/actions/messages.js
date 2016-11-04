import axios from 'axios';


export const list = () => {
  return {
    type: 'LIST_MESSAGES',
    payload: new Promise()
  };
};


export const markAllRead = () => (dispatch) => {
  return dispatch({
    type: 'MARK_MESSAGES_READ',
    payload: new Promise()
  });
};
