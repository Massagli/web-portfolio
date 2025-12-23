import styles from './Contact.module.css'
import {EmailIcon} from '../icons/EmailIcon'
import {GithubIcon} from '../icons/GithubIcon'
import {LinkedinIcon} from '../icons/LinkedinIcon'
import { PdfIcon } from '../icons/PdfIcon'

function Contact(){
    return(
        <section id="contact" className={styles.contact}>
            <h1>Pronto para o próximo desafio. Vamos conversar?</h1>
            <div className={styles.contact_container}>
                <a href="https://www.linkedin.com/in/adrielmassagli/" target="_blank" rel="noopener noreferrer"><p className={styles.names}><LinkedinIcon className={styles.icon}></LinkedinIcon> Linkedin</p></a>
                <a href="https://github.com/Massagli" target="_blank" rel="noopener noreferrer"><p className={styles.names}><GithubIcon className={styles.icon}></GithubIcon> GitHub</p></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrielmassagli@gmail.com" target="_blank" rel="noopener noreferrer"><p className={styles.names}><EmailIcon className={styles.icon_2}></EmailIcon> Email</p></a>
                <p className={styles.names}><PdfIcon className={styles.icon_2}></PdfIcon> Curriculo</p>
            </div> 
            
        </section>

    )
}

export default Contact;