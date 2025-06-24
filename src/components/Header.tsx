import { useNavigate } from 'react-router-dom'
import Container from './Container'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Container className="flex items-center justify-between p-5 bg-zinc-500 font-semibold text-white">
      <p>Logo</p>
      <ul className="flex items-center justify-center gap-2">
        <li onClick={() => navigate('/home')} className="cursor-pointer hover:opacity-65 transition">
          Home
        </li>
        <li className="cursor-pointer hover:opacity-65 transition">Login</li>
        <li className="cursor-pointer hover:opacity-65 transition">Register</li>
      </ul>
    </Container>
  )
}

export default Header
