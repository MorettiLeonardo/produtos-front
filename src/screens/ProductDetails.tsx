import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProductsById } from '../api/services/productService'

import type { Product } from '../type'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()

  const fetchProduct = async () => {
    try {
      const newId: number = Number(id)
      const response = await getProductsById(newId)
      setProduct(response)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      {product && (
        <div>
          <p>{product.nome}</p>
          <p>{product.descricao}</p>
          <p>Quantidade em estoque: {product.quantidadeEstoque}</p>
          <p>R$ {product.preco}</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
