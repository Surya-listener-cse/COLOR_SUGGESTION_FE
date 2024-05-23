import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../App'
import toast from 'react-hot-toast'

function SeasonChoice() {
    let [weather,setWeather] = useState('summer')

    let [all , setAll] = useState([])
    let [summer , setSummer] = useState([])
    let [winter , setWinter] = useState([])

  
    
    const getData = async () => {
        try {
          const response = await axios.get(`${API_URL}/colors`);
          const data = response.data.colors;
          setAll(data);
          const summerColors = setSummer( data.filter(e=>e.season=="Summer"));
          const winterColors = setWinter( data.filter(e=>e.season=="Winter"));
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(()=>{
        getData()
    },[])

    const handleEditSuggestion = (e)=>{
      console.log(e);
      // navigate('/dashboard/edit-suggestion')
     }





  return <>
  <div className='season-suggestion'>
    <div className='season-suggestion-container'>
        <div className='season-container'>
            {
                weather=="summer"?<img src="https://img.freepik.com/free-photo/view-3d-smiley-happy-sun-with-sky-background_23-2150937858.jpg" height='250px' width='300px' alt="" />:""
            }
            
            { 
                weather=="winter"?<img src="https://cdn3.vectorstock.com/i/1000x1000/57/87/icon-weather-cloud-sun-snow-vector-3045787.jpg" height='250px' width='300px' alt="" />:""
            }
            {
                weather=="all"?<img src="https://static.independent.co.uk/2023/05/03/11/iStock-1286813327.jpg" height='250px' width='300px' alt="" />:""
            }
            <form>
               <label>Current Weather &nbsp;</label>
               <select name="weather" value={weather} onChange={(e)=>setWeather(e.target.value)}>
                <option value="winter">Winter</option>
                <option value="summer">Summer</option>
                <option value="all">All</option>
               </select>
            </form>
        </div>
        <div className='season-suggestions'>
             {
                weather==="summer"?summer.map((e,i)=>{
                    return  <div key={i} className='suggestions' style={{backgroundColor:e.color}}><span>{e.color}</span></div>
                }):""
             }
             {
                weather==="winter"?winter.map((e,i)=>{
                    return  <div key={i} className='suggestions' style={{backgroundColor:e.color}}  ><span>{e.color}</span></div>
                }):""
             }
             {
                weather==="all"?all.map((e,i)=>{
                    return  <div key={i} className='suggestions' style={{backgroundColor:e.color}}><span>{e.color}</span></div>
                }):""
             }
           
            
        </div>
    </div>
  </div>
  </>
}

export default SeasonChoice;