/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
        <>
        <img src={placeholderImage} alt="Placeholder" width={300} height={200} />
        {name}
        <br/>
        ${price}
        <br/>
        {count === 0?(
            <button onClick={()=>countHandler(1)}>Add</button>           
             ):(
            <Counter handler={countHandler} value={count} ></Counter>)
        }  
        <button onClick={removeHandler}>Remove</button>
        
        </>
    )
}