import styles from './Contact.module.css'
import {EmailIcon} from '../icons/EmailIcon'
import {GithubIcon} from '../icons/GithubIcon'
import {LinkedinIcon} from '../icons/LinkedinIcon'
import { PdfIcon } from '../icons/PdfIcon'

function Contact(){
    return(
        <section className={styles.contact}>
            <h1>Pronto para o próximo desafio. Vamos conversar?</h1>
            <div className={styles.contact_container}>
                <p><LinkedinIcon className={styles.icon}></LinkedinIcon> Linkedin</p>
                <p><GithubIcon className={styles.icon}></GithubIcon> GitHub</p>
                <p><EmailIcon className={styles.icon_2}></EmailIcon> Email</p>
                <p><PdfIcon className={styles.icon_2}></PdfIcon> Curriculo</p>
            </div>
            
        </section>

    )
}

export default Contact;