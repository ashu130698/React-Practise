import React, { useState } from 'react'

const UseState2 = () => {
    const [form,setState]=useState({
        username:'',
        password:''
    })
    const printValues=e=>{
        e.preventDefault()
        console.log(form.username,form.password)
    }
    const updatevalues=(e)=>{
        setState({...form,[e.target.name]:e.target.value})

    }
  return (
    <div>
        <form onSubmit={printValues}>
            <h3> using useState hook for loging credentials</h3>
      <label htmlFor="username">Username</label>
      <input type="text" value={form.username} name='username' onChange={updatevalues}/> <br></br>
      <label htmlFor="password">Password</label>
      <input type="text" value={form.password} name='password' onChange={updatevalues} /> <br></br>
      <input type="submit" />
        </form>
      
    </div>
  )
}

export default UseState2;
