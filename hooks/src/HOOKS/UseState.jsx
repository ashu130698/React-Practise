import { useState } from "react";

function UseState1() {
    const [count,setCount]=useState(2);
    const increcount=()=>{
        setCount(count+2)
    }
    return ( 
        <div style={{margin:"15px", padding:"10px"}}> 
            <button onClick={()=>{setCount(count-2)}}>Increment</button>
            <span style={{margin:"15px", padding:"10px"}}> {count}   </span>
            <button onClick={increcount}>Decrement</button>

        </div>
     );
}

export default UseState1;