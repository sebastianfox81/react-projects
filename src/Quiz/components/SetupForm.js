import React from "react";
import { useGlobalContext } from '../context'

const table = {
  sports: 21,
  history: 23,
  politics: 24
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const SetupForm = () => {

  const { amount, category, difficulty, handleChange, fetchQuestions } = useGlobalContext()

  const handleQuizInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
    handleChange({ name, value })
  }

  const handleQuizSubmit = (e) => {
   e.preventDefault()
   const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
   fetchQuestions(url)
  }

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleQuizSubmit}>
          <div className="form-control">
            <label htmlFor="number">number of questions</label>
            <input
              type="number"
              className='form-input'
              name="amount"
              id="amount"
              value={amount}
              onChange={handleQuizInput}
              min={1}
              max={10}
              />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              type="number"
              className='form-input'
              name="category"
              id="category"
              value={category}
              onChange={handleQuizInput}
              >
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politics">politics</option>
              </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              type="number"
              className='form-input'
              name="difficulty"
              id="difficulty"
              value={difficulty}
              onChange={handleQuizInput}
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
          </div>
          <button className="submit-btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
