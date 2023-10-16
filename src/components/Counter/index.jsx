/* eslint-disable react/prop-types */
import styles from './counter.module.css';

export default function Counter ({handler,value}) {

    return(
        <span className={styles.counterContainer}>
        <button className={styles.counterButton} onClick={()=>handler(1)}>+1</button>
        <span className={styles.counterText}>{value}</span>
        <button className={styles.counterButton} onClick={()=>handler(-1)}>-1</button>
        </span>
    )
}