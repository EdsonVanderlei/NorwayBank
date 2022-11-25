import React from 'react'
import styles from './Input.module.css'
const Input = ({type,onBlur,onChange,value,placeholder,props,style}) => {
  return (
   
    
        <input style={{style}} className={styles.input} type={type} placeholder={placeholder} onBlur={onBlur} onChange={onChange} value={value} {...props}/>

  
  )
}

export default Input