import styles from './PreNav.module.css'
import horas from '../images/24horas.png';
import logo from '../images/logo222.png'
import { BsFillTelephoneFill } from 'react-icons/bs'

function PreNav(){
  return (
    <div className={styles.container}>
      <img id={styles.logo} src={logo}></img>
      <div className={styles.atendimento}>
      <img src={horas}></img>
      <div className={styles.vintequatro}>
      <p className={styles.textoAtendimento}>Atendimento</p>
      <p>24h!</p>
      </div>
      </div>
      <div className={styles.tel}>
      <span className={styles.telefones}><BsFillTelephoneFill/> - 71 9 99116-2193</span>
      <span className={styles.telefones}><BsFillTelephoneFill/> - 71 9 99116-2193</span>
      </div>
    </div>

  )
}

export default PreNav;