/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import   Counter  from '../Counter';
import placeholderImage from '../../assets/place_holder.jpg';
import styles from './productItem.module.css';
export default function ProductItem ({
    name,
    imageUrl,
    price,
    description,
    count,
    countHandler,
    editHandler,
    userRole
}) {

    return(
        <div className={styles.productCard}>
        <img src={placeholderImage} alt="Placeholder" />
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>${price.toFixed(2)}</div>
        <div>
        {userRole === "regular" || userRole === "admin" ? (
            count === 0 ? (
                <button className={styles.button} onClick={()=>countHandler(1)}>Add</button>           
            ) : (
                <Counter handler={countHandler} value={count} ></Counter>
            )
        ) : null } 
        {userRole === "admin" ? (
            <button className={`${styles.button} ${styles.buttonEdit}`} onClick={editHandler}>Edit</button>
        ) : null }
        </div>
    </div>
    )
}