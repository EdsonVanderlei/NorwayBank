import React from 'react'
import Head from './Head'
import styles from './HomePage.module.css'
import homeimg from '../Assets/img/14.png'
import Card from './Card'
import room from '../Assets/img/sala.png'
import Carrousel from './Carrousel'
import Button from './form/Button'
import smartphone from '../Assets/img/smartphone'
import useForm from '../Hooks/useForm'
import Input from './form/Input'
import formImage from '../Assets/img/2.png'


const HomePage = () => {
  const slides = [{
    id: '1',
    url: 'https://www.norwaybank.com.br/wp-content/uploads/2022/11/006.png'
  },
  {
    id: '2',
    url: 'https://www.norwaybank.com.br/wp-content/uploads/2022/11/003.png'
  },
  {
    id: '3',
    url: 'https://www.norwaybank.com.br/wp-content/uploads/2022/11/004.png'
  },
  {
    id: '4',
    url: 'https://www.norwaybank.com.br/wp-content/uploads/2022/11/005.png'
  },
  {
    id: '5',
    url: 'https://www.norwaybank.com.br/wp-content/uploads/2022/11/002.png'
  }



  ]

  function handleClick(event){
    event.preventDefault()
    if(email.Validate()){
      email.setValue('')
      name.setValue('')
      message.setValue('')
    }
    else{
      alert('preencha corretamento o campo E-mail')
    }

  }

  const email = useForm('email');
  const name = useForm()
  const message = useForm()


  return (
    <div>
      <Head title='Norway'/>
      <section className={styles.homepage}>
        <div className={styles.content}>
        <div className={styles.hometitle}>
          <h2>Chegamos!</h2>
          <p>Com a missão de ser o norte<br /> para sua vida financeira.</p>

        </div>
        <img style={{ maxWidth: '494px' }} src={homeimg} alt="" />
        </div>
      </section>
      <div className={styles.wrappercard}>
        <div className={styles.cards}>

          <Card title='Somos diferentes' content='Vantagens que nenhum outro banco pensou antes!' />
          <Card title='Somos diferentes' content='Vantagens que nenhum outro banco pensou antes!' />
          <Card title='Somos diferentes' content='Vantagens que nenhum outro banco pensou antes!' />
        </div>
      </div>
      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.about_paragraph}>
            <h1>Quem Somos</h1>
            <p>
              Nossa história começa em 2019, com a ideia de gerar uma sinergia econômica e trazer soluções que ajudassem de fato nossos parceiros a encontrarem o norte para sua vida financeira.
            </p>
            <p>
              O <span>NorwayBank</span> é uma startup de serviços financeiros, ou seja, uma Fintech. Esse termo vem do Inglês: Fin (Financial) + Tech (Technology).
            </p>
            <p>
              Como o próprio nome já diz, uma Fintech é uma startup que utiliza a tecnologia, inovação e processos bem definidos para resolver questões financeiras.
            </p>
            <p>
              Uma Startup busca, por meio de análise de mercado, transformar ideias em grandes empreendimentos.
            </p>
            <p>
              Além de sermos o norte da vida financeira das pessoas, nossa missão é ajudar importantes causas que precisam de nós.
            </p>
            <p>
              Seu caminho para o Norte na palma da mão. Seja parceiro do <span>NorwayBank</span> e aproveite uma nova saúde financeira!
            </p>
          </div>
          <img src={room} alt="" />
        </div>


      </section>
      <div className={styles.plataform}>
        <h2>Uma Plataforma completa para seu dia a dia.<br /> APP e WEB com Soluções Diferenciadas!</h2>
        <p>Seu Caminho Para o Norte na Palma da Mão.<br /> Seja Parceiro do NorwayBank e Chegue onde Nunca Imaginou.</p>

      </div>



      <div className={styles.smartphone}>
        <div className={styles.content}>
          <div className={styles.smartphone_text}>

            <h2>

              Conta Digital com <span className={styles.span_smartphone}>TUDO</span><br /> o que você precisa!

            </h2>
            <p>
              Pix, Emissão de Boleto, Transferência, Cartão de Crédito, Maquininha para Receber suas Vendas e uma vasta Plataforma de Empréstimos, incluindo empréstimo para negativado.


            </p>
          </div>
          <img src={smartphone} />

        </div>
      </div>




      <section className={styles.form_container}>
        <div className={styles.content}>
          <form className={styles.form}>

            <h3>Fale com a NorwayBank</h3>
            <Input {...name} placeholder="Nome" />
            <div>
            <Input {...email} placeholder="Email" />
            {email.error && <p style={{color:'red', margin:'1rem 10px' ,fontSize:'12px'}}>{email.error}</p>}

            </div>
           
            <Input {...message}  type="textfield" placeholder="Message" />



              <Button handleClick={handleClick} bg='#EF8018' color='#fff'>Enviar</Button>
          </form>
          <img  src={formImage} />
        </div>


      </section>



      <div className={styles.slider}>
        <h2>Conheça nossa Agência Matriz</h2>
        <Carrousel slides={slides} />


      </div>

    </div>
  )
}

export default HomePage