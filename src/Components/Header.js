import React from 'react'
import styles from './Header.module.css'
import logo from '../Assets/img/Logo-NB-Hor-Branco.svg'
import Button from './form/Button'
const Header = () => {

function handleAcess(){
  alert('Acessar Conta')
}

function handleOpen(){
  alert('Abrir Conta')
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <nav className={styles.nav}>
          <a href="/">Principal</a>
          <a href="/">Quem somos</a>
          <a href="/">Franquias</a>
          <a href="/">Fale com a Norway</a>
        </nav>


        <div className={styles.buttons}>
          <Button handleClick={handleAcess} color='#fff' bg='#08590A' >Acessar Conta</Button>
          <Button handleClick={handleOpen} color='#fff' bg='#EF8018' >Abrir Conta</Button>
        </div>




      </div>

    </div>
  )
}

export default Header