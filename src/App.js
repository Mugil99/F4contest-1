import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setName]=useState("");
  const[error,setError]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[success,setSuccess]=useState("")
  function handleClick(){
    if(name==""||email==""||password==""||confirmPassword==""){
      setError("All fields are mandatory")
      setSuccess("")
      return;
    }
    if(!name.trim().includes(" ")){
      setError("Please Enter Full Name")
      setSuccess("")
      return;
    }
    if(password!==confirmPassword){
      setError("Password and ConfirmPassword does not match")
      setSuccess("")
      return;
    }
    setError("");
    setSuccess("Successfully Signed Up!")
  }
  return (
   <div className='container'>
    <h1>
      Signup
    </h1>
    <div className='inputFields'>
    <input type='text' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}></input>
    <input type='email' placeholder='Email'onChange={(e)=>setEmail(e.target.value)}></input>
    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
    <input type='password' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
    </div>
    <button onClick={handleClick}>Signup</button>
    {
      error&&<p className='err'>error: {error}</p>
    }
    {
      success&&<p className='succ'>{success}</p>
    }
   </div>
  );
}

export default App;
