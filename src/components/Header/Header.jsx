import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />

      <ul>
        <li> <Link to='/'> Home </Link>  </li>
        <li> <Link to='/register'> Register </Link>  </li>
        <li> <Link to='/about'> About </Link>  </li>
      </ul>

    </header>

  )
}

export default Header;