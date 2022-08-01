import zap from '../images/zap.png'
import styles from './Whatsapp.module.css'
function Whatsapp () {
  return(
    <div>
      <a className={styles.telefone_ligar}href='https://www.google.com/search?q=a+decorativa+jardim+da+saudade&oq=a+decorativa+jardim&aqs=chrome.0.69i59j69i57j0i15i22i30j69i59j69i60l3.3272j0j4&sourceid=chrome&ie=UTF-8'><i class="bi bi-telephone-outbound-fill"></i></a>
      <a href='https://api.whatsapp.com/send?phone=5571996098565&text=Ol%C3%A1%2C%20Poderia%20me%20ajudar%3F' target='blank'>
       <img className={styles.zap} src={zap}></img>
       </a>
       
    </div>
  )
}

export default Whatsapp;