export const list = () => ({
  type: 'LIST_NOTIFICATIONS',
  payload: new Promise(),
});

export const markAllRead = () => dispatch => dispatch({
  type: 'MARK_NOTIFICATIONS_READ',
  payload: new Promise(),
});
