import React,{useState} from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_URL } from '../../App';

function SignIn() {
  const navigate = useNavigate()
  let[type,setType] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      let formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      if (formData.email && formData.password) {
        let res = await axios.post(`${API_URL}/user/signin`, formData);
        if (res.status === 200) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("role", res.data.role);
          sessionStorage.setItem("userId", res.data.id);
          toast.success(res.data.message || "Login Successful");
          navigate("/dashboard/home");
        } else {
          toast.error("You are not allowed");
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Incorrect email or password");
      } else {
        toast.error(error.response?.data?.message || error.message); 
      }
    }
  };
 

  return <>

  <div className='signUp_page'>
    <div className='left_bar_auth'></div>
    <div className='right_bar_auth'>
      <h4>Welcome Back to STYLEBOOK</h4>
      <p> Your Daily Dress Color Companion!</p>
      <form onSubmit={handleLogin}>
      <label htmlFor="email">Email :</label>
      <input name='email' type="email" onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor="password">Password :</label>
      <input type={type?"password":"text"} name="password" onChange={(e)=>setPassword(e.target.value)}  />
      <div className='password_icon' onClick={()=>{setType(!type)}}>
      {
        type?<span><RemoveRedEyeIcon/>View Password</span>: <span><VisibilityOffIcon/>Hide Password</span>
      }
      </div>
      {/* <h6 onClick={()=>navigate('/forgot-password')}>Forgot your Password?</h6> */}
      <button type='submit'>SignIn</button>
      </form>
      <h6>New to here? Don't worry <span onClick={()=>navigate('/signup')}>SignUp Here</span></h6>
    </div>
  </div>
  
  </>
}

export default SignIn;