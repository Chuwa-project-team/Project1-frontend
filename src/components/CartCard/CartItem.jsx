/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './CartCard.module.css';
import   Counter  from '../Counter';
import placeholderImage from '../../assets/place_holder.jpg';
export default function CartItem ({
    name,
    imageUrl,
    price,
    count,
    countHandler,
    removeHandler,
    userRole
}) {

    return(
        <div className={styles.productCard}>
        <img className={styles.productImg} src={placeholderImage} alt="Placeholder" width={300} height={200} />
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>${price}</div>
        
        <div className={styles.productButton}>
        {count === 0?(
            <button  onClick={()=>countHandler(1)}>Add</button>           
             ):(
            <Counter handler={countHandler} value={count} ></Counter>)
        }  
        <button className={styles.removeButton} onClick={removeHandler}>Remove</button> 
        </div>
               
        </div>
    )
}