import styles from "./Formulario.module.css";
function Formulario() {
  return (
    <section id='contato'className={styles.formulario_section}>
      <div className={styles.formulario_contato}>
        <div className={styles.telefone_formulario}>
          <i class="bi bi-telephone-fill"></i>
          <p className={styles.telefone_titulo}>Telefones:</p>
          <p className={styles.telefone_texto}> (71) 99609-8565 / (71) 3381-2007</p>
        </div>
        <div className={styles.endereco_formulario}>
          <i class="bi bi-geo-alt-fill"></i>
          <p className={styles.endereco_titulo}>Endereço completo:</p>
          <p className={styles.endereco_texto}>
            Endereço: Fim de linha de Brotas - R. Campinas de Brotas, 754 -
            Jardim da saudade, Salvador - BA, 40275-160
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Formulario;
