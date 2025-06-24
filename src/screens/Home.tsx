import type { Product } from '../type'

const mockProducts: Product[] = [
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
  { id: 1, name: 'Teclado', price: 200, quantity: 10, description: 'Teclado gamer para gamers' },
]

const Home = () => {
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
          {mockProducts.map((product) => (
            <li className="bg-zinc-300 max-w-[300px] rounded p-2" key={product.id}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Quantidade em estoque: {product.quantity}</p>
              <p>R$ {product.price}</p>
              <button className="bg-emerald-400 p-2 rounded hover:bg-emerald-500 cursor-pointer transition">
                Comprar
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
