import React from 'react'
import { GlobalContext } from '../GlobalContext'
import Produto from './Produto'
import ClearData from './ClearData'
import FetchData from './FetchData'

const GetData = () => {
  const { loading, error, fetchObj } = React.useContext(GlobalContext)

  if (error)
    return (
      <>
        <p style={{ color: 'red' }}> um erro ocorreu!</p>
        <ClearData />
        <FetchData />
      </>
    )
  if (loading) return <p>Loading...</p>
  return (
    <>
      {/* <h2>Status: {fetchObj.response.status}</h2> */}
      <Produto />
      <ClearData />
      <FetchData />
    </>
  )
}

export default GetData
