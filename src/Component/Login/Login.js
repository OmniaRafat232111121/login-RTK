import React,{useState} from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
const Login = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login({
      name:name,
      email:email,
      password:password,
      loggedIn:true

    }))
    setEmail("");
    setPassword("");

  }
  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login Form👩‍💻</h1>
   
        <input
        type="text"
        value={name}
        placeholder='name'
        onChange={(e)=>setName(e.target.value)}
        />
        <input 
        type="email"
        value={email}
        placeholder='email'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"
        value={password}
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
        />
      <button type="submit" className='submit__btn'>Login</button>
      </form>
    
    </div>
  )
}

export default Login
