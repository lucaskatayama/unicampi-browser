const defaultInstituto = {
  sigla: '',
  nome: ''
}


const defaultState = {
  institutos: [],
  instituto: defaultInstituto
}



export default (state = defaultState, action) => {

  if (action.type.match(/INSTITUTOS.*PENDING/)) {
    return {
      ...state,
      pending: true
    }
  }
  switch (action.type) {

    case 'INSTITUTOS_LIST_FULFILLED':
      return {
        ...state,
        institutos: action.payload,
        pending: false
      }
      break;
    case 'INSTITUTOS_GET_FULFILLED':
      return {
        ...state,
        instituto: action.payload,
        pending: false
      }
      break;
    default:
      return state
  }

}
