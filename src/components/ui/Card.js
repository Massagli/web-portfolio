import styles from './Card.module.css'

function Card({icon: Icon}){
    return(
        <div className={styles.card}>
            <Icon className={styles.icon}/>
        </div>
    )
}

export default Card; 