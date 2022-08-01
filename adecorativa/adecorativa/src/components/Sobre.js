import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <div>
      <h1 className={styles.sobre_titulo}>Conheça-nos um pouco mais</h1>

      <section id="sobre" className={styles.sobre_container}>
        <article>
          <div className={styles.sobre_container_texto}>
            <p>
              Com rapidez e qualidade A Decorativa presta atendimento
              personalizado e exclusivo. Através de profissionais experientes
              tudo é realizado para melhor atendê-lo no momento difícil da perda
              de um ente querido. Os nossos colaboradores são capacitados para
              fornecer assistência, prestar assessoramento e oferecer total
              apoio às famílias em luto, desempenhando seu trabalho com
              dedicação, responsabilidade e serenidade.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Sobre;
