
const defaultState = {
  version: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_VERSION_GET_FULFILLED':
      return {
        ...state,
        version: action.payload,
      };
    default:
      return state;
  }
};
