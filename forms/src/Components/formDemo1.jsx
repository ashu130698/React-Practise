import { useState } from "react";

function FormDemo1() {
    const [name,setName]=useState();
    const showName=(e)=>{
        e.preventDefault();
        alert(`this is ${name}`)
    }
  return (
    <div>
      <form onSubmit={showName}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="submit" value='click me'/>
      </form>
    </div>
)}

export default FormDemo1;
