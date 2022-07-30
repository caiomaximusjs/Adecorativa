import styles from "./Formulario.module.css";
function Formulario() {
  return (
    <section className={styles.formulario_section}>
      <div className={styles.formulario_contato}>
        <div className={styles.telefone_formulario}>
          <i class="bi bi-telephone-fill"></i>
          <p className={styles.telefone_titulo}>Telefones:</p>
          <p className={styles.telefone_texto}>71 99116-2193 / 71 3381-2007</p>
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
      <div id="contato" className={styles.formulario_container}>
        <div>
          <h1 className={styles.formulario_h1}>Fale conosco</h1>
        </div>
        <form type='POST'>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="JoÃ£o da Silva..."
            required
          ></input>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="joÃ£odaSilva@hotmail.com"
            required
          ></input>
          <label>Telefone:</label>
          <input
            type="tel"
            name="tel"
            placeholder='"(xx) xxxxx-xxxx"'
            required
          ></input>
          <label>Motivo do contato:</label>
          <textarea
            rows="5"
            cols="60"
            placeholder="descreva como podemos te ajudar de forma resumida"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
