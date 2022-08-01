import styles from './Navbar.module.css'
function Navbar() {
  return(
    <>
    <nav>
      <ul>
        <li>
          <a href='#'>HOME</a>
        </li>
        <li>
          <a href='#sobre'>SOBRE</a>
        </li>
        <li>
          <a href='#localizacao'>LOCALIZAÇÃO</a>
        </li>
        <li>
          <a href='#contato'>CONTATO</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar