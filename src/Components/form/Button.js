import React from 'react'

const button = ({children,color,bg,handleClick}) => {

      


  return (
    <button onClick={handleClick} style={{cursor:'pointer' ,border:'none',borderRadius:'10px',fontSize:'15px',color:color, background:bg, padding:'12px 24px'}}>
        {children}
    </button>
  )
}

export default button