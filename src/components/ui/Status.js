import styles from './Status.module.css'

function Status(prop){
    return(
        <div className={styles.status}>
            <div className={styles.point}></div>
            <p>{prop.title}</p>
        </div>

    )
}

export default Status;