import axios from 'axios';
import React, { useState } from 'react'
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function AddColor() {
    const [color, setColor] = useState('');
    const [matches, setMatches] = useState('');
    const [season, setSeason] = useState('');
    let token = sessionStorage.getItem("token");

    let navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();
        const matchList = matches.split(',').map(match => match.trim());
        const formData = {
            color,
            matches: matchList,
            season
        };
        try {
          if(!color||!matches||!season){
            toast.error("Please Fill All The Fields")
          }else{
            const res = await axios.post(`${API_URL}/colors`, formData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
            navigate('/dashboard/action-color');
          }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='add-color-page'>
          
            <div className='add-color-container'>

                <form onSubmit={handleAdd}>
                  <h6>Add New Color Here...</h6>
                    <label htmlFor="color">Color : </label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    <label htmlFor="matches">Matches : </label>
                    <textarea type="text" value={matches} onChange={(e) => setMatches(e.target.value)} />
                    <label htmlFor="season">Season : </label>
                    <select type="text" value={season} onChange={(e) => setSeason(e.target.value)}>
                        <option value="">Choose Weather</option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                    </select>
                    <div className="button-container">
                      <button className='submit-button' type='submit'>Submit</button>
                      <button className='submit-button' type='submit'>Discard</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default AddColor;