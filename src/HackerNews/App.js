import React, { useEffect } from 'react'
import { useGlobalContext } from './context'
import { Buttons, SearchForm, Stories} from './components'


const App = () => {

  const { isLoading } = useGlobalContext()

  return (
    <div>
      <SearchForm />
      <Buttons />
      <Stories />
    </div>
  )
}

export default App