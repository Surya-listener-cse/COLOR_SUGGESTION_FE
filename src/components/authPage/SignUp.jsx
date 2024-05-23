import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_URL } from '../../App';      

function SignUp() {
  const navigate = useNavigate()
  let[type,setType] = useState(true)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const data = {
        name,
        email,
        password
      };
  
      if (!data.name || !data.email || !data.password) {
        // Check if any of the fields are empty
        toast.error("Please Fill All The Fields");
        return; // Exit early if any field is empty
      }
  
      const res = await axios.post(`${API_URL}/user/signup`, data);
      toast.success(res.data.message || "Signup Successful");
      navigate('/signin');
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message||error.message); // Display a generic error message
    }
  };

  return <>
  <div className='signUp_page'>
    <div className='left_bar_auth'></div>
    <div className='right_bar_auth'>
      <h4>Welcome to STYLEBOOK</h4>
      <p> Your Daily Dress Color Companion!</p>
      <form onSubmit={handleSignUp}>
      <label htmlFor="name">Name:</label>
      <input name='name' type="text" onChange={(e)=>setName(e.target.value)} />
      <label htmlFor="email">Email :</label>
      <input name='email' type="email" onChange={(e)=>setEmail(e.target.value)} autoComplete="username" />
      <label htmlFor="password">Password :</label>
      <input name="password" type={type?"password":"text"} autoComplete="current-password" onChange={(e)=>setPassword (e.target.value)}   />
      <div className='password_icon' onClick={()=>{setType(!type)}}>
      {
        type?<span><RemoveRedEyeIcon/>View Password</span>: <span><VisibilityOffIcon/>Hide Password</span>
      }
      </div>
      <button type='submit'>SignUp</button>
      </form>
      <h6>Already have an account? <span onClick={()=>navigate('/signin')} >SignIn Here !</span></h6>
    </div>
  </div>
  
  </>
}

export default SignUp;