import styles from './PreNav.module.css'
import horas from '../images/24horas.png';
import logo from '../images/logo222.png'
import { BsFillTelephoneFill } from 'react-icons/bs'

function PreNav(){
  return (
    
    <div className={styles.prenav_container}>
      <div className={styles.prenav_atendimento}>
      <img src={horas} alt='Imagem com um telefone e um relógio com dizeres 24 horas'></img>
      <div className={styles.prenav_atendimento_horas}>
      <p className={styles.prenav_texto}>Atendimento</p>
      <p>24h!</p>
      </div>

      </div>
      <img id={styles.logo} src={logo} alt='Logo da A Decorativa'></img>
      <div className={styles.prenav_container_telefones}>
      <span className={styles.prenav_telefones}><BsFillTelephoneFill/> - (71) 99609-8565</span>
      <span className={styles.prenav_telefones}><BsFillTelephoneFill/> - (71) 3381-2007</span>
      </div>
    </div>

  )
}

export default PreNav;