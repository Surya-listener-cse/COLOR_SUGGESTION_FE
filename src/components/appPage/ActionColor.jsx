import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../App'
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";


function ActionColor() {

  let [colorData , setColorData] = useState([])
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  const fetchColor = async()=>{
      try {
        let res = await axios.get(`${API_URL}/colors`)
        let data = res.data.colors;
        setColorData(data)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    fetchColor();
  },[])

  const handleEditColor = (e)=>{
    navigate(`/dashboard/edit-suggestion/${e._id}`)
  }

  const handleDeleteColor = async(e)=>{
    try {
      let res = await  axios.delete(`${API_URL}/colors/${e._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      toast.success(res.data.message||'Deleted Successfull')
      fetchColor();
    } catch (error) {
      console.log(error);
    }
  }

  return <>
  
  
  <div className="action-page">
          <div className='add-clothes-button'>
            <button onClick={()=>navigate('/dashboard/add-color')}> + Add New Color </button>
          </div>
    {
      colorData.length?(colorData.map((e,i)=>{
        return <div key={i} className="base-container" style={{backgroundColor:e.color}}>
        <div className="matches-container" >
         {
          e.matches.map((matches,i)=>{
            return  <div key={i} className="matches" style={{backgroundColor:matches}}></div>
          })
         }
        </div>
              <div className='action-buttons'>
                <button className='edit-button' onClick={()=>handleEditColor(e)} >Edit</button>
                <button className='delete-button' onClick={()=>handleDeleteColor(e)}>Delete</button>
              </div>
      </div>
      
      })):( 
        <div className='empty_message'>
            <p>Your Color Collection is Empty...</p>
            <p>Please Click <span>"Add New Colors"</span> Button to Add Your New Colors and its matches</p>
        </div>
       )
    }
    
  </div>
  </>
}

export default ActionColor