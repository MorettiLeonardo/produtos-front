import { useEffect, useState } from 'react'

import { getProducts } from '../api/services/productService'
import type { Product } from '../type'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  const fetchProducts = async () => {
    try {
      const response = await getProducts()
      setProducts(response)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Container>
        <ul className="flex items-center gap-4 flex-wrap">
          {products.map((product: Product) => (
            <li
              className="bg-zinc-300 max-w-[300px] rounded p-2  cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
              key={product.id}
            >
              <p>{product.nome}</p>
              <p>{product.descricao}</p>
              <p>Quantidade em estoque: {product.quantidadeEstoque}</p>
              <p>R$ {product.preco}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Home
