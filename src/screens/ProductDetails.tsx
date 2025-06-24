import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProductsById } from '../api/services/productService'

import type { Product } from '../type'
import Container from '../components/Container'
import Header from '../components/Header'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()

  const fetchProduct = async () => {
    try {
      if (!id) {
        throw new Error('O id do produto é obrigatório')
      }

      const response = await getProductsById(id)
      setProduct(response)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <Container>
        {product && (
          <div>
            <p>{product.nome}</p>
            <p>{product.descricao}</p>
            <p>Quantidade em estoque: {product.quantidadeEstoque}</p>
            <p>R$ {product.preco}</p>
          </div>
        )}
      </Container>
    </>
  )
}

export default ProductDetails
