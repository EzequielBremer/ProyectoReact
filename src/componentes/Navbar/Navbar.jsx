import Carrito from "../Carrito/carrito";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navContainer">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#"><img src="../img/logospcomun.jpg" alt="logo" width="25" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="../public/index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Compras</a>
              </li>
              <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sobre Nosotros</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./nosotros.html" target="_blank">Nosotros</a></li>
              <li><a class="dropdown-item" href="./ubicacion.html" target="_blank">Ubicacion y Fechas</a></li>
              <li><a class="dropdown-item" href="./contactanos.html" target="_blank">Contactanos</a></li>
            </ul>
          </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 buscadorBtn" type="search" placeholder="Busca tu Producto" aria-label="Search" />
              <button className="btn btn-outline-success buscarBtn" type="submit">Buscar</button>
            </form>

            <Carrito/>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
