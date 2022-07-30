import Styles from './Footer.module.css'
import logo from '../images/logo222.png'
import {BsTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer>
    <div className={Styles.footer_tittle}>
    <img className={Styles.footer_logo}  src={logo}></img>
    </div>
    <div className={Styles. footer_endereco}>
    <h3>Endereço</h3>
      <p className={Styles.footer_endText}>Fim de linha de Brotas - R. Campinas de Brotas, 754 - Jardim da saudade, Salvador - BA, 40275-160</p>
    </div>
    <div className={Styles.footer_numero}>
      <h3>Telefone</h3>
     <p className={Styles.footer_telText}> <BsTelephoneFill/> - 71 99116-2193</p>
     <p className={Styles.footer_telText}>
       <BsTelephoneFill/> -  71 99116-2193</p>
    </div>
   
    </footer>
    <div className={Styles.footer_copy}>
       Todos os direitos reservados A Decorativa &copy;2022
    </div>
    </>
  )
}

export default Footer