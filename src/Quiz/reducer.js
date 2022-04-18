const reducer = (state, action) => {
  if (action.type === 'BEGIN_LOADING_WATING') {
    return {...state, loading: true, waiting: false}
  }
  if (action.type === 'SET_QUESTIONS') {
    return {
      ...state,
      questions: action.payload,
      loading: false,
      waiting: false,
      error: false
    }
  }
  if (action.type === 'NO_RESPONSE') {
    return { ...state, waiting: true }
  }
  if (action.type === 'NO_DATA_LENGTH') {
    return {
      ...state,
      waiting: true,
      error: true
    }
  }
  if (action.type === 'NEXT_QUESTION') {
    let nextQ = state.index + 1
    if (nextQ > state.questions.length - 1) {
      nextQ = 0
      return {...state, isModalOpen: true, index: nextQ }
    }
    return {...state, index: nextQ}
  }
  if (action.type === 'CHECK_ANSWER') {
    return {...state, correct: state.correct + 1}
  }
  if (action.type === 'CLOSE_MODAL') {
    return {...state, waiting: true, correct: 0, isModalOpen: false}
  }
  if (action.type === 'HANDLE_CHANGE') {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }
  return state
}


export default reducer