/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import   Counter  from '../Counter';
import placeholderImage from '../../assets/place_holder.jpg';
import './style.css';
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
        <div className="product-card">
        <img src={placeholderImage} alt="Placeholder" />
        <div className="product-name">{name}</div>
        <div className="product-price">${price.toFixed(2)}</div>
        <div>
        {userRole === "regular" || userRole === "admin" ? (
            count === 0 ? (
                <button className="button" onClick={()=>countHandler(1)}>Add</button>           
            ) : (
                <Counter handler={countHandler} value={count} ></Counter>
            )
        ) : null } 
        {userRole === "admin" ? (
            <button className="button edit" onClick={editHandler}>Edit</button>
        ) : null }
        </div>
    </div>
    )
}