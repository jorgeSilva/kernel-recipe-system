// import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <section className={style.footer_content}>
        <section className={style.foote_itens}>
          <h1 className={style.footer_h1}>Páginas do site</h1>
          <ul className={style.footer_list}>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/details'}>Detalhes</Link>
            </li>
          </ul>
        </section>

        <section className={style.foote_itens}>
          <h1 className={style.footer_h1}>Contato</h1>
          <ul className={style.footer_list}>
            <li>
              <Link to={'https://wa.me/5515997886834'}>WhatsApp</Link>
            </li>
            <li>
              <Link to={'https://www.instagram.com/_systech/'}>Instagram</Link>
            </li>
            <li>
              <Link to={'https://systech-dun.vercel.app/metodo-pagamento'}>Email</Link>
            </li>
          </ul>
        </section>
      </section>
      <p className={style.footer_p_systech}>SysTech ©️ - Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer