import { useEffect, useState } from "react";

function Usecase1() {
    const [count,setCount]=useState(0);
  const[name,setName]=useState('');
  useEffect(()=>{
    console.log('Component Loaded');
  },[]) //give empty array dependency to run only once
  useEffect(()=>{
    console.log('Count Updated: ',count);
  },[count]) //triggerd when count state updated
  useEffect(()=>{
    console.log('Name Updated: ',name);
  },[name]) //triggerd when name state updated
    return ( 
        <div>
            <h3>Hello from Usecase1</h3>
        <h4>{count} Welcome {name}</h4>
      <button onClick={()=>setCount(count+1)}>+</button>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>

     );
}

export default Usecase1;