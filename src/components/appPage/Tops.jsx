import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App';
import toast from 'react-hot-toast';

function Tops() {
    const navigate = useNavigate();
    let [tops,setTops] = useState([])
    let token = sessionStorage.getItem("token");
    
    const getData = async () => {
        try {
            let res = await axios.get(`${API_URL}/tops`, {
                headers: {
                  Authorization: `Bearer ${token}` 
                }
              });
            let values = res.data.tops.map((dateObj) => { 
                const date = new Date(dateObj.lastWornDate);
                const formattedDate = date.toLocaleString();
                return { ...dateObj, lastWornDate: formattedDate };
            });
            setTops(values);
        } catch (error) {
            console.error('Error fetching tops data:', error);
        }
    };



    const handleEdit = async(e)=>{
        navigate(`/dashboard/edit-clothes/${e._id}`)
    }

    const handleDelete=async(e)=>{
        let res = await axios.delete(`${API_URL}/tops/${e._id}`, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          })
        toast.success(res.data.message||"Deleted Successfully")
        getData();
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className="list-page">
            <div className='alighn-end'>
                <div className="show_button" onClick={()=>navigate('/dashboard/add-clothes')}> + Add New Clothes</div>&nbsp;&nbsp;&nbsp;
                <div className="show_button" onClick={()=>navigate('/dashboard/collection')}> Back</div>
            </div>
            <div className='list-flex'>
                {tops.length > 0 ? (
                    tops.map((e, i) => (
                        <div key={i} className="list-container col-xl-2 col-md-5 mb-4  container-fluid">
                            <img src={`${API_URL}/images/${e.imageFile}`} alt={e.dressName}/>

                            <div className='dress_data'>
                                <p>Name : <br/><span>{`${e.dressName}`}</span></p>
                                <p>Type : <br/><span>{`${e.dressType}`}</span></p>
                                <p>Last Worn Date :  <br/><span>{`${e.lastWornDate}`}</span></p>
                            </div>
                            <div className='button-container'>
                                <div className='edit-button' onClick={()=>handleEdit(e)}>Edit</div>
                                <div className='delete-button' onClick={()=>handleDelete(e)}>Delete</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='empty_message'>
                        <p>Your Collection is Empty...</p>
                        <p>Please Click <span>"Add New Clothes"</span> Button to Add Your New Clothes</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tops;