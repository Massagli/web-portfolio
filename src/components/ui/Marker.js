import styles from './Marker.module.css'

function Marker(props){
    return(
        <div className={`${styles.marker} ${styles[props.customClass]}`}>
            <p>{props.title}</p>
        </div>
    )
}

export default Marker  