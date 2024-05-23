import React, { useEffect, useState } from 'react'
import { API_URL } from '../../App'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

function EditUser() {
  let {id} = useParams()
  let [name , setName] = useState('')
  let [email , setEmail] = useState('')
  let [role , setRole] = useState('')
  let token = sessionStorage.getItem("token");

  const navigate = useNavigate()

  const fetchUser = async(req,res)=>{
    try {
      let res = await axios.get(`${API_URL}/user/${id}`)
      let data = res.data.user
      setName(data.name);
      setEmail(data.email);
      setRole(data.role);
      
    } catch (error) {
      console.log(error);
    }
  } 

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      let data = {
        name , email , role
      }
      let res = await axios.put(`${API_URL}/user/edit-user/${id}`,data, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      
      toast.success(res.data.message||"User Data Edited Successfully")

      navigate('/dashboard/users')

    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])


  return <>
   <div className="edit-user">
    <div className="edit-image-container">
      
    </div>
    <div className="edit-user-container">
      <form onSubmit={handleSubmit}>
        <h5>Edit User Data Here...</h5>
        <label htmlFor="name">Name : </label>
        <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>

        <label htmlFor="email">Email : </label>
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="role">Role :  </label>
        <input type="text" name='role' value={role} onChange={(e)=>setRole(e.target.value)}/>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
   </div>
  </>
}

export default EditUser;