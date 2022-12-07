import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-link">
                <button className='btn btn-secondary itemNavSeccionesContainer'><Link className="nav-link itemNavSecciones" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
        </li>
        <li className="nav-link">
            <button className='btn btn-secondary itemNavSeccionesContainer'><Link className="nav-link itemNavSecciones" to={"/category/1"}><i className="fa-regular fa-face-grin-hearts"></i></Link></button>

        </li>
        
        <li className="nav-link">
                <button className='btn btn-secondary itemNavSeccionesContainer'><Link className="nav-link itemNavSecciones" to={"/category/2"}><i className="fa-solid fa-shower"></i></Link></button>
            
        </li>

        <li className="nav-link">
                <button className='btn btn-secondary itemNavSeccionesContainer'><Link className="nav-link itemNavSecciones" to={"/category/3"}><i className="fa-solid fa-person-walking"></i></Link></button>
            
        </li>
        
        
        
    </ul>
        
    );
}

export default Categorias;
