import React, { useState } from "react";

const LoginForm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errors,setErrors]=useState({});
    const handleSubmit=(e)=>{
        const validationErrors ={};
        const emailRegex= /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRgex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        e.preventDefault();
        if(!email){
            validationErrors.email="Email cannot be empty"
        } else if (!emailRegex.test(email)) {
          validationErrors.email="Email is not valid"
        }
        if (!password){
            validationErrors.password="Password cannot be empty"
        } else if (!passwordRgex.test(password)) {
          validationErrors.password="Password is invalid"
        }
        if (Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else {
            setErrors({});
            alert('Form is submitted');
        }

    }
  
  return (
    
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email?'is-invalid':''}`}
            id="email"
            placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password?'is-invalid':''}`}
            onChange={(e)=>setPassword(e.target.value)}
            // aria-describedby="passwordHelpBlock"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          {/* <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div> */}
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="reset" className="btn btn-secondary ms-2">Reset</button>
        </div>
      </form>
    
  );
};

export default LoginForm;
