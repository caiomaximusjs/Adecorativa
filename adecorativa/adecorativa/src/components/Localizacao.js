import styles from "./Localizacao.module.css";
import jardim from "../images/jardins.jpeg";

function localizacao() {
  return (
    <>
      <h2 className={styles.loc_titulo}>Onde estamos</h2>
      <section id='localizacao'className={styles.localizacao}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.497185074873!2d-38.4768935!3d-12.9798909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87a504134a9e5c33!2sFuner%C3%A1ria%20A%20Decorativa%20-%20Jardim%20da%20Saudade%2024%20horas!5e0!3m2!1spt-BR!2sbr!4v1659160048700!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          zoom='false'
        ></iframe>
      </section>
    </>
  );
}

export default localizacao;
