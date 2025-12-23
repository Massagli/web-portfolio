import styles from './Navbar.module.css';

import {Link} from 'react-scroll'



function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={`${styles.nav_container}` }>
                <h1>Adriel Massagli</h1>
                <ul className={styles.lista}>
                    <Link to="home" smooth={true} duration={400}> <li className={styles.item}>Home</li></Link>
                    <Link to="about" smooth={true} duration={400}> <li className={styles.item}>Sobre</li></Link>
                    <Link to="skills" smooth={true} duration={400}> <li className={styles.item}>Habilidades</li></Link>
                    <Link to="experiences" smooth={true} duration={400}> <li className={styles.item}>Experiências</li></Link>
                    <Link to="portfolio" smooth={true} duration={400}> <li className={styles.item}>Portfólio</li></Link>
                    <Link to="contact" smooth={true} duration={400}> <li className={styles.item}>Contato</li></Link>
                </ul>
            </div>
        </nav> 
        
    ) 
}

export default Navbar; 