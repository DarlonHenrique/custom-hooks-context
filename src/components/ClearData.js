import React from 'react'
import { GlobalContext } from '../GlobalContext'

const ClearData = () => {
  const { clearData } = React.useContext(GlobalContext)
  return (
    <button style={{ margin: '0.5rem' }} onClick={clearData}>
      Limpar
    </button>
  )
}

export default ClearData
