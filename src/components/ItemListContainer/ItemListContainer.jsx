import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const {idCategoria} = useParams();

    useEffect(()=>{

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;

        funcionProductos(idCategoria)
        .then(response => setProducts(response))
        .catch(error =>console.error(error))
    }, [idCategoria])


  return (
    <div>

    <h2 className='sub'>
        {props.greeting}
    </h2>
    <ItemList products={products}/>
    </div>

  )
}

export default ItemListContainer
