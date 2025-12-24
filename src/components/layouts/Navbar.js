import { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-scroll' 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <h1>Adriel Massagli</h1>

        {/* Botão hamburguer */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`${styles.lista} ${menuOpen ? styles.open : ''}`}>
          {[
            ['home', 'Home'],
            ['about', 'Sobre'],
            ['skills', 'Habilidades'],
            ['experiences', 'Experiências'],
            ['portfolio', 'Portfólio'],
            ['contact', 'Contato'],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={400}
              onClick={() => setMenuOpen(false)}
            >
              <li className={styles.item}>{label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
