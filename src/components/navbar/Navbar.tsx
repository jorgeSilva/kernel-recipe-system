import style from './Navbar.module.css'
import logoSVG from '../../assets/navbar/Receitas.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar_container}>
      <Link to={'/'}>
        <img src={logoSVG} alt="Receitas" />
      </Link>
    </nav>
  )
}

export default Navbar