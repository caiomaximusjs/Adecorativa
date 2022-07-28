import styles from './Localizacao.module.css'
import loc from '../images/loc.png'
function localizacao() {
  return(
    <>
    <section className={styles.localizacao}>
    <h1>Onde estamos:</h1>
  <div className={styles.locText}>
  <img className={styles.imageLoc}src={loc}></img>
  <h4 className={styles.locText}>Fim de linha de Brotas - R. Campinas de Brotas, 754 - Jardim da saudade, Salvador - BA, 40275-160</h4>
  <p>Telefone: 71 3381-2007</p>
  <p>Telefone: 71 3381-2007</p>
  <a href='https://www.google.com/maps/place/Funer%C3%A1ria+A+Decorativa+-+Jardim+da+Saudade+24+horas/@-12.9798909,-38.494403,14z/data=!4m9!1m2!2m1!1sa+decorativa+jardim+da+saudade!3m5!1s0x7161b90ab9a4933:0x87a504134a9e5c33!8m2!3d-12.9798909!4d-38.4768935!15sCh5hIGRlY29yYXRpdmEgamFyZGltIGRhIHNhdWRhZGWSAQxmdW5lcmFsX2hvbWU' target='blank'>Ver no mapa</a>
  </div>
  </section>
    </>
  )
}

export default localizacao