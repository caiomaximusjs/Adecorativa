import zap from '../images/zap.png'
import styles from './Whatsapp.module.css'
function Whatsapp () {
  return(
    <div>
      
      <a href='https://api.whatsapp.com/send?phone=5571996098565&text=Ol%C3%A1%2C%20Poderia%20me%20ajudar%3F' target='blank'>
       <img className={styles.zap} src={zap}></img>
       </a>
       
    </div>
  )
}

export default Whatsapp;