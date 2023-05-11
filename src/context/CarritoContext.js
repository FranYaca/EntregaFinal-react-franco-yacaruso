import { useState, createContext } from "react";


export const CarritoContext = createContext({carrito:[]});


export const CarritoProvider = ({children}) => {


    const [carrito, setCarrito] = useState([]);






    const agregarProducto = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)) {
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {
            console.log("Producto ya agregado");
        }
    }



     const eliminarProducto = (id)  => {
        setCarrito(carrito.filter((item) => item.item.id !== id));
        
    }




    const vaciarCarrito = () => {
        setCarrito([]);
    }



    const yaEstaEnCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }



    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}} >
            {children}
        </CarritoContext.Provider>
    )


}
