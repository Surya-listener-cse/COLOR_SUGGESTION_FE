import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App';
import toast from 'react-hot-toast';

function AllDress() {
    const navigate = useNavigate();
    let [phants,setPhants] = useState([])
    let [tshirt,setTshirt] = useState([])
    let [tops,setTops] = useState([])
    let token = sessionStorage.getItem("token");

    const getPhantData = async () => {
      try {
        let res = await axios.get(`${API_URL}/phants`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        let values = res.data.phants.map((dateObj) => { 
            const date = new Date(dateObj.lastWornDate);
            const formattedDate = date.toLocaleString();
            return { ...dateObj, lastWornDate: formattedDate };
        });
        setPhants(values);
    } catch (error) {
        console.error('Error fetching tops data:', error);
    }
  };


    const getTshirtData = async()=>{
      try {
        let res = await axios.get(`${API_URL}/tShirts`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        console.log(res.data);
        let values = res.data.tShirt.map((dateObj) => { 
            const date = new Date(dateObj.lastWornDate);
            const formattedDate = date.toLocaleString();
            return { ...dateObj, lastWornDate: formattedDate };
        });
        setTshirt(values);
    } catch (error) {
        console.error('Error fetching tops data:', error);
    }
  }

  const getTopsData = async()=>{
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
}
    
const handleDelete = async (e) => {
  if (e.dressType === 'tops') {
    await axios.delete(`${API_URL}/tops/${e._id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    getTopsData();
  } else if (e.dressType === 'phant') {
    await axios.delete(`${API_URL}/phants/${e._id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    getPhantData();
  } else if (e.dressType === 'tshirt') {
    await axios.delete(`${API_URL}/tShirts/${e._id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    getTshirtData();
  } else {
    toast.error("Wrong Path");
  }
  toast.success("Deleted Successfully");
};

const handleEdit = async(e)=>{
   navigate(`/dashboard/edit-clothes/${e._id}`)
}


    useEffect(()=>{
        getPhantData()
        getTshirtData()
        getTopsData()
    },[])
  return <>
  <div className="list-page">
      <div className="alighn-end add-clothes-button">
        <div className="show_button" onClick={() => navigate('/dashboard/add-clothes')}>
          + Add New Clothes
        </div>
        <div className="show_button" onClick={() => navigate('/dashboard/collection')}>
          Back
        </div>
      </div>
      <div className="list-flex">
        {phants.length > 0 ||
        tshirt.length > 0 ||
        tops.length > 0 ? (
          <>
            {phants.map((e, i) => (
              <div key={i} className="list-container col-xl-2 col-md-5 mb-4 container-fluid">
                <img src={`${API_URL}/images/${e.imageFile}`} alt={e.dressName}/>
                <div className="dress_data">
                  <p>
                    Name : <br />
                    <span>{`${e.dressName}`}</span>
                  </p>
                  <p>
                    Type : <br />
                    <span>{`${e.dressType}`}</span>
                  </p>
                  <p>
                    Last Weared Date : <br />
                    <span>{`${e.lastWearedDate}`}</span>
                  </p>
                </div>
                <div className="button-container">
                  <div className="edit-button" onClick={() => handleEdit(e)}>
                    Edit
                  </div>
                  <div className="delete-button" onClick={() => handleDelete(e)}>
                    Delete
                  </div>
                </div>
              </div>
            ))}
            {tshirt.map((e, i) => (
              <div key={i} className="list-container col-xl-2 col-md-5 mb-4 container-fluid">
                <img src={`${API_URL}/images/${e.imageFile}`} alt={e.dressName}/>
                <div className="dress_data">
                  <p>
                    Name : <br />
                    <span>{`${e.dressName}`}</span>
                  </p>
                  <p>
                    Type : <br />
                    <span>{`${e.dressType}`}</span>
                  </p>
                  <p>
                    Last Weared Date : <br />
                    <span>{`${e.lastWearedDate}`}</span>
                  </p>
                </div>
                <div className="button-container">
                  <div className="edit-button" onClick={()=>handleEdit(e)}>Edit</div>
                  <div className="delete-button" onClick={() => handleDelete(e)}>
                    Delete
                  </div>
                </div>
              </div>
            ))}
            {tops.map((e, i) => (
              <div key={i} className="list-container col-xl-2 col-md-5 mb-4 container-fluid">
                <img src={`${API_URL}/images/${e.imageFile}`} alt={e.dressName}/>
                <div className="dress_data">
                  <p>
                    Name : <br />
                    <span>{`${e.dressName}`}</span>
                  </p>
                  <p>
                    Type : <br />
                    <span>{`${e.dressType}`}</span>
                  </p>
                  <p>
                    Last Weared Date : <br />
                    <span>{`${e.lastWearedDate}`}</span>
                  </p>
                </div>
                <div className="button-container">
                  <div className="edit-button" onClick={()=>handleEdit(e)}>Edit</div>
                  <div className="delete-button" onClick={() => handleDelete(e)}>
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="empty_message">
            <p>Your Collection is Empty...</p>
            <p>
              Please Click <span>"Add New Clothes"</span> Button to Add Your New Clothes
            </p>
          </div>
        )}
      </div>
    </div>
  </>
}

export default AllDress;



