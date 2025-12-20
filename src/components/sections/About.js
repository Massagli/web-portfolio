import styles from './About.module.css'
import me from '../../img/me.png'
import Status from '../ui/Status'
import Marker from '../ui/Marker'

function About(){
    return(
        <section className={styles.about}>
            <div className={styles.image_container}>
                <div className={styles.cicle}><img src={me} alt="my cartoon"/></div>
            </div>
            <div className={styles.text_container}>
                <Status emoji="🧐" title="About"></Status>
                <h1 className={styles.title}>Olá! Meu nome é Adriel Massagli.</h1>
                <p className={styles.text}>Sou desenvolvedor backend, com experiência em documentação e planejamento de produto, atuando na criação de documentações técnicas como PRDs, RFCs e diagramas UML, apoiando o desenvolvimento de soluções bem estruturadas.Além disso, possuo conhecimentos em tecnologias de frontend, o que me permite atuar em diferentes etapas do projeto.</p>
                <div className={styles.container_marker}>
                    <Marker customClass="marker_color_green" title="Técnico Desenvolvimento de Sistemas"></Marker>
                    <Marker customClass="marker_color_orange" title="Graduando Engenharia de Software"></Marker>
                </div>
            </div>
        </section>
    )
}

export default About;