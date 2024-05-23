import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_URL } from '../../App';

function AddClothes() {
  const [dressName, setDressName] = useState('');
  const [dressType, setDressType] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [lastWornDate, setLastWornDate] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [season , setSeason] = useState('');
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('dressName', dressName);
      formData.append('dressType', dressType);
      formData.append('color', color);
      formData.append('season', season);
      formData.append('description', description);
      formData.append('lastWornDate', lastWornDate);
      formData.append('imageFile', imageFile);
      formData.append('imageName', imageFile ? imageFile.name : '');
 
      let res;
      if (dressType === 'tops') {
        res = await axios.post(`${API_URL}/tops`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          },
        });
       } 
        if (dressType === 'phants') {
        res = await axios.post(`${API_URL}/phants`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          },
        });
      }
       if (dressType === 'tShirts') {
        res = await axios.post(`${API_URL}/tShirts`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          },
        });
      }
  
      if (res && res.data) {
        toast.success(res.data.message || 'New Dress Added Successfully');
        setDressName('');
        setDressType('');
        setColor('');
        setSeason('');
        setDescription('');
        setLastWornDate('');
        setImageFile(null);
        navigate('/dashboard/collection');
      } else {
        toast.error('Failed to add dress. Please try again.');
        console.log(error);
      }
  
    } catch (error) {
      console.error('Error adding dress:', error);
      toast.error('Error adding dress. Please try again.');
    }
  };


  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="add-clothes-page">
      <div className="add-clothes-left">
        <form className="add-clothes-form edit-clothes-form"  onSubmit={handleSubmit}>
         
         <div className="edit-image-page-form-container">
         <div className="form-group">
            <label htmlFor="name">Dress Name:</label>
            <input type="text" className="form-control" placeholder="Set unique name" value={dressName} onChange={(e) => setDressName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select className="form-control" value={dressType}  onChange={(e) => setDressType(e.target.value)} required>
              <option value="">Choose Your Dress Type</option>
              <option value="tops">Top</option>
              <option value="phants">Phant</option>
              <option value="tShirts">T-Shirt</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <select className="form-control" value={color} onChange={(e) => setColor(e.target.value)} required>
            <option value="">Choose Your Dress Color</option>
            <option value="plum">Plum</option>
            <option value="maroon">Maroon</option>
            <option value="skyblue">Sky Blue</option>
            <option value="mintcream">Mint Green</option>
            <option value="navy">Navy Blue</option>
            <option value="PaleGreen">PaleGreen</option>
            <option value="teal">Teal</option>
            <option value="LightGray">LightGray</option>
            <option value="sienna">sienna</option>
            <option value="lavender">Lavender</option>
            <option value="forestgreen">Forest Green</option>
            <option value="white">White</option>
            <option value="lightpink">lightpink</option>
            <option value="dimgray">dimgray</option>
            <option value="coral">Coral</option>
            <option value="lemonchiffon">lemonchiffon</option>
            <option value="black">Black</option>
            <option value="goldenrod">goldenrod</option>
            <option value="peachpuff">Peach</option>
            <option value="turquoise">Turquoise</option>
            <option value="beige">Beige</option>
            <option value="powderblue">Powder Blue</option>
            <option value="olive">Olive Green</option>
            <option value="peru">Peru</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="remarks">Remarks:</label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
         </div>

          <div className="edit-page-image-container" style={{alignItems:"start"}}>
          <div className="form-group">
            <label htmlFor="lastWornDate">Last Worn Date:</label>
            <input type="date" className="form-control" value={lastWornDate} onChange={(e) => setLastWornDate(e.target.value)} required />
          </div>

          <div className="form-group">
              <label htmlFor="season">Season:</label>
              <select
                type="text"
                className="form-control"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                required
              >
                <option value="">Choose Season</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
              </select>
          </div>

          <div className="form-group">
            <label htmlFor="imageFile">Upload Image:</label>
            <input type="file" accept="image/*" className="form-control" onChange={handleFileChange}/>
            <small>Upload a plain background image for better view</small>
          </div>

          <div className='button-container'>
            <button type="submit" className="show_button">Submit</button>
            <button className='show_button' onClick={() => navigate('/dashboard/collection')}>Discard</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClothes;