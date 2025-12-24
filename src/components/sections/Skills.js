import styles from './Skills.module.css'
import Status from '../ui/Status'
import Card from  '../ui/Card'

import {GoIcon} from '../icons/GoIcon'
import {PythonIcon} from '../icons/PythonIcon'
import {ReactIcon} from '../icons/ReactIcon'
import {PostgreIcon} from '../icons/PostgreIcon'
import {GitIcon} from '../icons/GitIcon'
import {GithubIcon} from '../icons/GithubIcon'
import {JavaIcon} from '../icons/JavaIcon'
import {JsIcon} from '../icons/JsIcon'
import {AwsIcon} from '../icons/AwsIcon'
import {DockerIcon} from '../icons/DockerIcon'
import {MysqlIcon} from '../icons/MysqlIcon'
import {FigmaIcon} from '../icons/FigmaIcon'


function Skills(){
    return(
        <section id="skills" className={styles.skills}>
            <div className={styles.title}>
                <Status title="Habilidades"></Status>
                <h1>Tecnologias e Habilidades</h1> 
            </div>
            <div className={styles.techs_container}> 
                <h2>Techs do dia a dia</h2>
                <div className={styles.techs}>
                    <Card icon={GoIcon}></Card>
                    <Card icon={PythonIcon}></Card>
                    <Card icon={ReactIcon}></Card>
                    <Card icon={PostgreIcon}></Card> 
                    <Card icon={GitIcon}></Card>
                    <Card icon={GithubIcon}></Card>
                     
                </div>
                <h2>Outras Skills</h2>
                <div className={styles.techs}>
                    <Card icon={JavaIcon}></Card>
                    <Card icon={JsIcon}></Card>
                    <Card icon={AwsIcon}></Card>
                    <Card icon={DockerIcon}></Card>
                    <Card icon={MysqlIcon}></Card>
                    <Card icon={FigmaIcon}></Card>
                </div>
            </div>
        </section>
    ) 
}

export default Skills


