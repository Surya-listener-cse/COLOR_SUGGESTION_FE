import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../App';
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';

function EditSuggestion() {
    const [color, setColor] = useState('');
    const [matches, setMatches] = useState('');
    const [season, setSeason] = useState('');
    let {id} = useParams()
    let navigate = useNavigate();
    let token = sessionStorage.getItem("token");

    const fetchColor = async () => {
      try {
          let res = await axios.get(`${API_URL}/colors/${id}`);
          let data = res.data.color;
          setColor(data.color);
          if (Array.isArray(data.matches)) {
              setMatches(data.matches.join(', '));
          } else {
              setMatches('');
          }
          setSeason(data.season);
      } catch (error) {
          console.log(error);
      }
  }

    useEffect(()=>{
       fetchColor();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const matchList = matches.split(',').map(match => match.trim());
        const formData = {
            color,
            matches: matchList,
            season
        };

        try {
           if(!color||!matches||!season){
                toast.error('Please fill all the fields')
           }else{
            const res = await axios.put(`${API_URL}/colors/${id}`, formData, {
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
                <form onSubmit={handleSubmit}>
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
                    <button className='submit-button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EditSuggestion;