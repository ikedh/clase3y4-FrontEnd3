import React, { Fragment } from 'react'
import SubTitulo from './SubTitulo'


const Titulo = () => {

    const pagina = 3
    const paginanueva= 45


  return (
    <>
    <h1 className='titulo'>Bienvenidos a la Clase 3</h1>
    <SubTitulo
        info1="Clase de Componente"
        pagina={pagina}
        
    />
    <SubTitulo
        info2="Clase de Props"
        pagina={paginanueva}
    />
    </>

  )
}

export default Titulo