
/* eslint-disable react/prop-types */
import {  InputNumber } from 'antd';
export default function ProductItem ({
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
        {imageUrl}
        {price}
        {description}
        {count === 0?(
            <button onClick={countHandler(1)}>Add</button>           
             ):(
            <InputNumber addonBefore={<p onClick={countHandler(1)}>+1</p>} addonAfter={<p onClick={countHandler(-1)}>-1</p>} defaultValue={0}></InputNumber>)
        }  
        {userRole === "admin"?(<button onClick={editHandler}>Edit</button>):(<button onClick={editHandler}>Edit</button>)
        }  
        </>
    )
}