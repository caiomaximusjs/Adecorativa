
import sol from "../images/sol.png"
import folha from "../images/folha.png"
import maos from "../images/maos.png"
import styles from './Header.module.css'





export default function CarouselComponents() {
  return (
    <div className={styles.main}>
      
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sol} class="d-block w-100" alt="Imagem widescreen de um pôr do sol"></img>
      <div class="carousel-caption d-none d-md-block">
      <h1>Assistência Funerária em Salvador</h1>
        <p>Há mais de 100 anos prestando assistência funerária de alto padrão</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={maos} class="d-block w-100" alt="Imagem widescreen de duas mãos se tocando e o pôr do sol ao fundo"></img>
      <div class="carousel-caption d-none d-md-block">
      <h2>Quando você mais precisa</h2>
        <p>Atendemos 24 horas e todos os dias da semana</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={folha} class="d-block w-100" alt="Imagem com por do sol ao fundo e um centeio de trigo na frente do sol"></img>
      <div class="carousel-caption d-none d-md-block">
        <h2>Conte com a gente!</h2>
        <p>Estamos localizados no jardim da Saudade em Salvador, no fim de linha da federação</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>   
        </div>
  );
}

