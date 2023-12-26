import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {


  const productos =[
    {id: 1, titulo: "Producto 1", descripcion: "descripcion del producto 1", precio: 1500},
    {id: 2, titulo: "Producto 2", descripcion: "descripcion del producto 2", precio: 950},
    {id: 3, titulo: "Producto 3", descripcion: "descripcion del producto 3", precio: 500},
  ]

  const mostrarProductos = new Promise((resolve,reject) =>{
    
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      },3000)
    }else{
      reject("No se obtuvieron productos.")
    }
  })

  mostrarProductos
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((error)=>{
    console.log(error)
  })

  return (
    

    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer