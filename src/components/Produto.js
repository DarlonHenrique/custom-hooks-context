import React from 'react'
import { GlobalContext } from '../GlobalContext'

const Produto = () => {
  const { productData } = React.useContext(GlobalContext)
  if (productData)
    return (
      <div>
        Produto:{' '}
        {productData.map(produto => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    )
  else return null
}

export default Produto
