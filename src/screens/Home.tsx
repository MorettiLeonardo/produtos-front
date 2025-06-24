import { useEffect, useState } from 'react'

import { getProducts } from '../api/services/productService'
import type { Product } from '../type'
import { useNavigate } from 'react-router-dom'

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
      <header className="flex items-center justify-between p-5 bg-zinc-500 font-semibold text-white">
        <p>Logo</p>
        <ul className="flex items-center justify-center gap-2">
          <li className="cursor-pointer hover:opacity-65 transition">Home</li>
          <li className="cursor-pointer hover:opacity-65 transition">Login</li>
          <li className="cursor-pointer hover:opacity-65 transition">Register</li>
        </ul>
      </header>

      <main className="sm:px-[200px] py-[24px]">
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
      </main>
    </div>
  )
}

export default Home
