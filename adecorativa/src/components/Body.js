import styles from './Body.module.css'
import freesia from '../images/freesia.png'
import igreja from '../images/igreja.png'
import moeda from '../images/moeda.png'
import urna from '../images/urna.png'
import chueira from '../images/chueira.jpg'
function Body(){
  return(
<body>

  <section className={styles.sobre}>
    <h1>Sobre nós</h1>
    <div className={styles.nos}>
      <div className={styles.sobrenos}><p className={styles.textoSobre}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  </p></div>
      <div className={styles.imagens}>
        <img className={styles.chueira}src={chueira}></img>

      </div>
    </div>
  </section>
  
</body>
  )
}

export default Body