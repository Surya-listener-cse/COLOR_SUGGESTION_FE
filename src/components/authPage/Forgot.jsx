import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Forgot() {

  let [toggle , setToggle] = useState(true)

  let [name , setName ] = useState("")
  let [email , setEmail] = useState("")

   const navigete = useNavigate() 

   const handleSubmit = async(e)=>{
   e.preventDefault();
   try {
console.log(e.name , e.email);
    if(name && email){
      let formData = {
        name , email
      }
     let res = await axios.post(`${API_URL}/user/forgot-mail`,formData)
     toast.success(res.data.message||"Message Sent Successfull")
     
    }else{
      toast.error("Please fill all the fields")
    }
   
    
   } catch (error) {
    toast.error(error.message||error.res.data.message)
   }
   }

   const handleClick=()=>{

   setToggle(!toggle)
   }



  return <>

  <div className='signUp_page'>
    <div className='left_bar_auth'></div>
    <div className='right_bar_auth'>
    
      <p>Forgot Your Password?</p>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input name='name' type="text" onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="email">Email :</label>
      <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
      
      <button type='submit' onClick={handleClick}>{toggle?"Click Here":"Check Your Mail"}</button>
      </form>
      <h6>Remeber Your Password ?<span onClick={()=>navigete('/signin')}>SignIn Here</span></h6>
    </div>
  </div>
  
  </>
}

export default Forgot;