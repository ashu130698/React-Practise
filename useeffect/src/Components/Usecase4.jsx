import { useEffect, useState } from "react";

function Usecase4() {
    const [email,setEmail]=useState('');
    const[isValid,setIsValid]=useState(true);
    const handleClick=()=>{
        //Validation Logic
        alert('form Submitted')
    }
    useEffect(()=>{
        const pattern=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/;
        if(!pattern.test(email)){
            setIsValid(false);
        }else{
            setIsValid(true);
        }
    },[email])
    return ( 
        <div>
           <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
           {!isValid && <p>Email Id is Invalid</p>}
           <button onClick={handleClick}>Save Data</button>
        </div>
     );
}

export default Usecase4;