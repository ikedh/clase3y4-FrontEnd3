import React from 'react'

const SubTitulo = ({ info1, info2,pagina }) => {



    return (
        <>
            <h2 className='sub'>{info1}</h2>
            <h2>{info2}</h2>
            <p>{pagina}</p>
        </>
    )
}

export default SubTitulo

