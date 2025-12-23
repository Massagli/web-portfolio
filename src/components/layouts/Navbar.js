import styles from './Navbar.module.css';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={`${styles.nav_container}` }>
                <h1>Adriel Massagli</h1>
                <ul className={styles.lista}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Sobre</li>
                    <li className={styles.item}>Habilidades</li>
                    <li className={styles.item}>Portfólio</li>
                    <li className={styles.item}>Contato</li>
                </ul>
            </div>
        </nav> 
        
    )
}

export default Navbar;