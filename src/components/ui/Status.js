import styles from './Status.module.css'

function Status(prop){
    return(
        <div className={styles.status_color_green}>
            <span className={styles.emoji}>{prop.emoji}</span>
            <p>{prop.title}</p>
        </div>

    )
}

export default Status;