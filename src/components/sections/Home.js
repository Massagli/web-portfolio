import styles from "./Home.module.css"
import arrow_down from "../../img/arrow-down.svg"

import {GithubIcon} from '../icons/GithubIcon'
import {LinkedinIcon} from '../icons/LinkedinIcon'
import {EmailIcon} from '../icons/EmailIcon'

function Home(){
    return(
        <section className={styles.home}>
            <h1>Adriel Massagli </h1>
            <h2>FullStack Developer</h2>
            <div className={styles.icon_container}>
                <hr></hr>
                <a href="https://www.linkedin.com/in/adrielmassagli/" target="_blank" rel="noopener noreferrer"><LinkedinIcon className={styles.icon}></LinkedinIcon></a>
                <a href="https://github.com/Massagli" target="_blank" rel="noopener noreferrer"><GithubIcon className={styles.icon}></GithubIcon></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrielmassagli@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon className={styles.icon_2}></EmailIcon></a>
                <hr></hr>
            </div> 
            <button className={styles.button}>Explorar <img src={arrow_down} alt="arrow down"/></button>
        </section>
    ) 
}

export default Home; 