import React from 'react'
import { useForm } from 'react-hook-form'

const UseForm1 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm();
    const handleregistration=(data)=>console.log(data);
    const handleErrors=(errors)=>{};
    const registeroptions={
        name:{required:'Name is required'},
        email:{required:'Email is required'},
        password:{required:'Password is required',
        minLength:{
            value:8,
            message:'Password should atleat 8 characters'
        }
    }}
  return (
    <div>
      <form onSubmit={handleSubmit(handleregistration,handleErrors)}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' {...register('name',registeroptions.name)}/>
        <small >{errors?.name && errors.name.message}</small><br />
        <label htmlFor="email">Email</label>
        <input type="text" name='email' {...register('email',registeroptions.email)}/>
        <small>{errors?.email && errors.email.message}</small><br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' {...register('password',registeroptions.password)}/>
        <small style={{color: "red"}}>{errors?.password && errors.password.message}</small><br />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default UseForm1
