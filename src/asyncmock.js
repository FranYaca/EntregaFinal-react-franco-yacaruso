const products = [
    {nombre: "Monitor 1", precio: 55000, id: "1", img:"../img/monitores-1.jpeg", idCat:"1"},
    {nombre: "Monitor 2", precio: 78000, id: "2", img:"../img/monitores-2.jpeg", idCat:"1"},
    {nombre: "Notebook 1", precio: 220000, id: "3", img:"../img/notebook-1.jpeg", idCat:"2"},
    {nombre: "Notebook 2", precio: 320000, id: "4", img:"../img/notebook-2.jpeg", idCat:"2"},
    {nombre: "Pc 1", precio: 120000, id: "5", img:"../img/pc-1.jpeg", idCat:"3"},
    {nombre: "Pc 2", precio: 200000, id: "6", img:"../img/pc-2.jpeg", idCat:"3"},
    {nombre: "Perifericos 1", precio: 12000, id: "7", img:"../img/perifericos-1.jpeg", idCat:"4"},
    {nombre: "Perifericos 2", precio: 10000, id: "8", img:"../img/perifericos-3.jpeg", idCat:"4"},
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 100)
    })
}

//Creamos una nueva funcion similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = products.find(prod => prod.id === id);
            resolve(producto);
        }, 100 )

    })
}

//Creamos una nueva cuncion que retorna toda la categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve=>{
        setTimeout(()=>{
            const productosCategoria = products.filter(prod=>prod.idCat=== idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}