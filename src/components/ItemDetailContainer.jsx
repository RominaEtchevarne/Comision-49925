import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {

    const { id } = useParams ()


    const productos =[
    { id: 1, titulo:"Producto 1",descripcion:"este producto es expectacular",precio:"1500",categoria:"Licores",img},
    { id: 2, titulo:"Producto 2",descripcion:"este producto es expectacular",precio:"950",categoria:"Vinos", img},
    { id: 3, titulo:"Producto 3",descripcion:"este producto es expectacular",precio:"500",categoria:"Whisky", img},
    

]
    const mostrarProductos = new Promise((resolve, reject) => {
    if(productos.length > 0){
    setTimeout(()=>{
    resolve(productos)
    },3000)
    }else{
    reject("No se obtuvieron los productos")
    }
    })
    mostrarProductos
    .then((resultado)=>{
    console.log(resultado)
    })
    .catch((error) => {
    console.log(error)
    })

    const productoFiltrado = productos.find ((producto) => producto.id == id)

    return (
        <div>
            <ItemDetail 
                producto = {productoFiltrado}
            />
        </div>
        )
}

export default ItemDetailContainer