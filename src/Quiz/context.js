import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()


const API_ENDPOINT = 'https://opentdb.com/api.php?'
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const initialState = {
  waiting: true,
  loading: false,
  questions: [],
  index: 0,
  correct: 0,
  error: false,
  isModalOpen: false,
  amount: 10,
  category: 'sports',
  difficulty: 'easy'
}

const AppProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const fetchQuestions = async (url) => {
    dispatch({ type: 'BEGIN_LOADIN_WAITING'})
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        const { results } = data;
        if (results.length > 0) {
          dispatch({ type: 'SET_QUESTIONS', payload: results})
        } else {
          dispatch({ type: 'NO_DATA_LENGTH'})
        }
      } else {
        dispatch({ type: 'NO_RESPONSE'})
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchQuestions(tempUrl)
  // },[])

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION'})
  }

  const checkAnswer = (value) => {
    if (value) {
      dispatch({ type: 'CHECK_ANSWER', payload: value})
    }
    dispatch({ type: 'NEXT_QUESTION'})
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL'})
  }
  const handleChange = ({ name, value}) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value }})
  }

  return <AppContext.Provider value={{...state, nextQuestion, checkAnswer, closeModal, handleChange, fetchQuestions}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext}