import React from 'react'
import useFetch from './hooks/useFetch'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [productData, setProductData] = React.useState(null)
  const [fetchObj, setFetchObj] = React.useState(null)
  const { request, data, loading, error } = useFetch()

  React.useEffect(() => {
    fetchData()
    //eslint-disable-next-line
  }, [])

  async function fetchData() {
    const fetch = await request(
      'https://ranekapi.origamid.dev/json/api/produto/'
    )
    setProductData(data)
    setFetchObj(fetch)
  }

  function clearData() {
    setProductData(null)
  }
  console.log(fetchObj)

  return (
    <GlobalContext.Provider
      value={{ fetchObj, loading, error, productData, clearData, fetchData }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
