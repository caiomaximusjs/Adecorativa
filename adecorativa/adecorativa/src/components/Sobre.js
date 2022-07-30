import styles from './Sobre.module.css'



function Sobre() {
  return (

    <div>
      <h1 className={styles.sobre_titulo} >Conheça-nos um pouco mais</h1>

      <section className={styles.sobre_container}>

        <div id='sobrenos'className={styles.sobre_container_texto}>
          <p>Com rapidez e qualidade A Decorativa presta atendimento personalizado e exclusivo. Através de profissionais experientes tudo é realizado para melhor atendê-lo no momento difícil da perda de um ente querido. Os nossos colaboradores são capacitados para fornecer assistência, prestar assessoramento e oferecer total apoio às famílias em luto, desempenhando seu trabalho com dedicação, responsabilidade e serenidade.  </p>

        </div>


      </section>
    </div>

  )
}

export default Sobre