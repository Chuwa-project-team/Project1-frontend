/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import   Counter  from '../Counter';
import placeholderImage from '../../assets/place_holder.jpg';
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
        <>
        <img src={placeholderImage} alt="Placeholder" width={300} height={200} />
        {name}
        <br/>
        ${price}
        <br/>
        {description}
        <br/>
        {userRole === "regular" || userRole === "admin" ? (
            count === 0?(
                <button onClick={()=>countHandler(1)}>Add</button>           
                ):(
                <Counter handler={countHandler} value={count} ></Counter>)
            ) : ( 
                null )} 
        {userRole === "admin"?(<button onClick={editHandler}>Edit</button>):(null)
        }  
        </>
    )
}