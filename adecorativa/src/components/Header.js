import flores from "../images/flowers.png";
import styles from './Header.module.css'

function Header() {
  return <div>
    <img className={styles.imagem}src={flores}></img>
  </div>;
}

export default Header;
