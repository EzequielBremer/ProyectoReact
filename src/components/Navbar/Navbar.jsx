import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Categorias from './Categorias/Categorias'
import logo from '../imgcarrusel/logospcomun.jpg'

const Navbar = () => {
  return (
    <div className='navContainer'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid logoNav">
          <img src={logo} alt="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Categorias/>
            <CartWidget />

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
