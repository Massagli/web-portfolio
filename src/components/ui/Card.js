import styles from './Card.module.css'

function Card(props){
    return(
        <div className={styles.card}>
            <svg viewBox="0 0 80 80" aria-hidden="true"><path d={props.logo}/></svg>
        </div>
    )
}

export default Card;