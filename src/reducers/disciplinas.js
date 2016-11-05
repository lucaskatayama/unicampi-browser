const defaultState = {
  disciplinas: [],
  disciplina: {}
}




export default (state = defaultState, action) => {
  if (action.type.match(/DISCIPLINAS_.*_PENDING/)) {
    return {
      ...state,
      disciplinas: [],
      disciplina: {},
      pending: true
    }
  }

  switch (action.type) {
    case 'DISCIPLINAS_LIST_FULFILLED':
      return {
        ...state,
        disciplinas: [...action.payload],
        pending: false
      }
    case 'DISCIPLINAS_GET_FULFILLED':
      return {
        ...state,
        disciplina: action.payload,
        pending: false
      }
    default:
      return state;
  }
}
