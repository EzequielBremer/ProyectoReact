import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title detalleItemCarrito">{item.nombre}</h5>
                    <p className="card-text detalleItemCarrito">Caracteristicas: {item.caracteristicas} </p>
                    <p className="card-text detalleItemCarrito">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text detalleItemCarrito">Stock: {item.stock} </p>
                    <ItemCount stock= {item.stock}/><br/>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;
