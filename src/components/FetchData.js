import React from 'react'
import { GlobalContext } from '../GlobalContext'

const FetchData = () => {
  const { fetchData } = React.useContext(GlobalContext)

  return <button onClick={fetchData}>Puxar Dados</button>
}

export default FetchData
