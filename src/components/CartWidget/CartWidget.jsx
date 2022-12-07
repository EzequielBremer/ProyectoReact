import { Link } from "react-router-dom";
const CartWidget = () => {
  
    return (
        <>
            <button className="btn btn-secondary cartWidget carrito"><Link to={"/cart"}>
                    <i className="fas fa-shopping-cart fa-lg carrito"></i></Link>
                        <span className="cantCarrito">0</span>
            </button>
                
        </>
    );
}

export default CartWidget;
