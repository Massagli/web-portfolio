import styles from './Navbar.module.css';
import logo from '../../img/code.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={`${styles.nav_container}` }>
                <img src={logo} alt="logo" className={styles.logo}/> 
                <ul className={styles.lista}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Sobre</li>
                    <li className={styles.item}>Skills</li>
                    <li className={styles.item}>Portfólio</li>
                    <li className={styles.item}>Contato</li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;