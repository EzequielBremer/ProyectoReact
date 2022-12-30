
import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/Categorias';
import BotonDarkMode from './BtnDarkMode/BtnDarkMode.css';
import { useDarkModeContext } from '../../Context/darkModeContext.jsx';
import logo from '../imgcarrusel/logospcomun.jpg'

const Navbar = () => {
  const {DarkMode} = useDarkModeContext();
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark ${DarkMode ? 'bg-primary' : 'bg-dark'}`}>
        <div className="container-fluid">
        <img src={logo} alt="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navbar/>
            <Categorias/>
            <CartWidget />
            <BotonDarkMode/>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;





<img src={logo} alt="logo"/>
