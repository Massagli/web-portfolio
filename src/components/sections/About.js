import styles from './About.module.css'
import me from '../../img/me.png'
import Status from '../ui/Status'

function About(){
    return(
        <section className={styles.about}>
            <div className={styles.image_container}>
                <div className={styles.cicle}><img src={me}/></div>
                
            </div>
            <div className={styles.text_container}>
                <Status title="About"></Status>
            </div>
        </section>
    )
}

export default About;