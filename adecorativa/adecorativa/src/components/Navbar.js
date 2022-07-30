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
          <a href='#sobrenos'>SOBRE</a>
        </li>
        <li>
          <a href='#loc'>LOCALIZAÇÃO</a>
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