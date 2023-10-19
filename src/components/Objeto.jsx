import React from 'react'

const Objeto = () => {

    const productos = [
        {
            id: 32312,
            nombre: "Memoria Ram 16gb",
            precio: 300
        },
        {
            id: 4343,
            nombre: "teclado",
            precio: 20
        },
        {
            id: 545,
            nombre: "Placa de Video ",
            precio: 500
        },
        {
            id: 43242,
            nombre: "Monitor",
            precio: 200
        }
    ]


  return (
    <>
        <h3>Map de Objeto</h3>
        <ol>
            {productos.map((elemento)=>{
                return(
                    <li
                        key={elemento.id}
                    >
                        Producto: {elemento.nombre} - Precio: {elemento.precio}
                    </li>
                )
            })}
        </ol>
    
    </>
  )
}

export default Objeto