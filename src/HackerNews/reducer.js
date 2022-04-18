const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return {...state, isLoading: true}
  }
  if (action.type === 'SET_STORIES') {
    return {
      ...state,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
      isLoading: false
    }
  }
  if (action.type === 'REMOVE_STORY') {
    const newHits = state.hits.filter(story => story.objectID !== action.payload)
    return {...state, hits: newHits}
  }
  if (action.type === 'HANDLE_SEARCH') {
    return { ...state, query: action.payload, page: 0 }
  }
  if (action.type === 'HANDLE_PAGE') {
    if (action.payload === 'inc') {
      let nextPage = state.page + 1
      if (nextPage > state.nbPages - 1) {
        nextPage = 0
      }
      return {...state, page: nextPage}
    }
    if (action.payload === 'dec') {
      let prevPage = state.page - 1
      if (prevPage < 0) {
        prevPage = state.nbPages - 1
      }
      return {...state, page: prevPage}
    }
  }
  return state
}

export default reducer