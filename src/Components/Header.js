import React from 'react'
import styles from './Header.module.css'
import logo from '../Assets/img/Logo-NB-Hor-Branco.svg'
import Button from './form/Button'
const Header = () => {

  const [active, setActive] = React.useState(false)
  const [deg, setDeg] = React.useState(0)

  const menu = React.useRef()

  function handleBurguer(event) {
    event.preventDefault()
    setActive(() => !active)
  }



  React.useEffect(() => {


    if (active) {
      console.log(menu.current)
      setDeg(90)
    }
    else {
      setDeg(0)
    }
  }, [active])

  function handleAcess() {
    alert('Acessar Conta')
  }

  function handleOpen() {
    alert('Abrir Conta')
  }

  return (

    <div className={styles.wrapper}>
      <div className={styles.content}>
        <a href='/' className={styles.logo}>
          <img src={logo} />
        </a>
        <div ref={menu} className={ active ? `${styles.menu} ${styles.active}` : `${styles.menu}`} >

 
          <nav className={styles.nav}>
            <a href="/">Principal</a>
            <a href="/">Quem somos</a>
            <a href="/">Franquias</a>
            <a href="/">Fale com a Norway</a>
          </nav>


          <div className={styles.buttons} >
            <Button handleClick={handleAcess} color='#fff' bg='#08590A' >Acessar Conta</Button>
            <Button handleClick={handleOpen} color='#fff' bg='#EF8018' >Abrir Conta</Button>
          </div>
    


        </div>
        <div onClick={handleBurguer} style={{ transform: `Rotate(${deg}deg)` }} className={styles.burguer}>
            <span></span>
            <span></span>
            <span></span>
          </div>




      </div>

    </div>
  )
}

export default Header