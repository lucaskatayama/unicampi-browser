export const list = () => ({
  type: 'LIST_MESSAGES',
  payload: new Promise(),
});

export const markAllRead = () => dispatch => dispatch({
  type: 'MARK_MESSAGES_READ',
  payload: new Promise(),
});
