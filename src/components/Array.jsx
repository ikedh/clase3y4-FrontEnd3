import React from 'react'

const Array = () => {

    const frutas= [
        "Pera",
        "Manzana",
        "Banana",
        "Pera",
        "Naranja"
    ]

  return (
    <>
     <h3>Map de Array</h3>
     <ul>
        {frutas.map((fruta,index)=>{
            return(
                <li
                    key={index}
                >
                    {fruta}
                </li>
            )
        })}
     </ul>
    </>
  )
}

export default Array