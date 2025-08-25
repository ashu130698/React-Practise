import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == 'admin@gmail.com' && password == "123456") {
      navigate('/dashboard');  //redirect user to dashboard component
    } else {
      alert('Wrong Credientials');
    }
  }
  return (
    <form className="container mt-3" onSubmit={handleSubmit}>
      <h3 className="container p-3 text-center text-bg-warning">Login form</h3>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </div>
      <div className="mb-3">
        <label for="inputPassword5" className="form-label">
          Password
        </label>
        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder="i.e; abc@123" onChange={(e)=>setPassword(e.target.value)}/>
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>
      </div>
      <button className="mb-3 btn btn-primary w-100">Login</button>
    </form>
  );
}

export default Login;
