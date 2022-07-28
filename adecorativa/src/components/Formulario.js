import styles from './Formulario.module.css'
function Formulario () {
  return (
    <>
    <section>
      <h1>Fale conosco!</h1>
      <div className={styles.form}>
      <form>
        <label>Nome</label>
        <input type='text' name='nome'></input>
        <div className={styles.emailTel}>
        <label>E-mail</label>
        <input type='email' name='email'></input>
        <label>Telefone</label>
        <input type='tel' name='telefone'></input>
        </div>
        <label>Descreva o motivo do seu contato</label>
        <textarea name="motivo" rows="4" cols="50" ></textarea>
      </form>
      </div>
    </section>
    </>
  )
}

export default Formulario