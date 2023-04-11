import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <>
    <div className='contenedorItem'> 
    <div className="detalles">

        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quas!</p>
        <img src={img} alt= {nombre} />
    </div>
        <div className='contador'>

        <ItemCount />
        </div>
    </div>
    </>
  )
}

export default ItemDetail
