/* eslint-disable react/prop-types */


export default function Counter ({handler,value}) {

    return(
        <>
        <button onClick={()=>handler(1)}>+1</button>
        {value}
        <button onClick={()=>handler(-1)}>-1</button>
        </>
    )
}