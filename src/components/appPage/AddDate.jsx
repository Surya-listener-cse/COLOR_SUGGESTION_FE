import React, { useState } from "react";
import "./app.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../App";
import toast from "react-hot-toast";
function AddDate() {

  let [date,setDate]=useState("");
  let [event,setEvent]= useState("");
  let [dress,setDress]=useState("")
  let [place,setPlace]=useState("")
  let token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const handleAddDate = async(e)=>{
    e.preventDefault();
    let formData = {
      date , event , dress,place
    }
    if(!date||!event||!dress){
      toast.error("Please Fill All The Fields")
    }else{
      let res = await axios.post(`${API_URL}/dates`,formData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
    toast.success("Date Added Successfull")
    navigate('/dashboard/home')
    }
  }

 
  return (
    <>
      <div className="add-date">
        
        <div className="add-date-side-image"></div>

        <form onSubmit={handleAddDate} className="add-date-form" >
          <div className="form-group">
            <label htmlFor="date">Event Date:</label>
            <input name="date" type="date" className="form-control" onChange={(e)=>setDate(e.target.value)}  required/>
          </div>
          <div className="form-group">
            <label htmlFor="event">Event:</label>
            <input name="event" type="text" className="form-control" onChange={(e)=>setEvent(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="dress">Dress:</label>
            <textarea name="dress" type="text" className="form-control" onChange={(e)=>setDress(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="place">Place:</label>
            <textarea name="place" type="text" className="form-control" onChange={(e)=>setPlace(e.target.value)} required/>
          </div>
          
          <button  type="submit" className="show_button">
            Submit
          </button>
          
        </form>
      </div>
    </>
  );
}

export default AddDate;