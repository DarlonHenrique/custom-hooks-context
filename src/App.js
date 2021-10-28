import React from 'react'
import { GlobalStorage } from './GlobalContext'
import GetData from './components/GetData'

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <GetData />
      </GlobalStorage>
    </div>
  )
}

export default App
