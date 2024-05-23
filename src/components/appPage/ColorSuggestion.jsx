import React,{useState , useEffect} from "react";
import { API_URL } from '../../App';
import axios from 'axios'
import './app.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {useNavigate} from 'react-router-dom'
function ColorSuggestion() {

    const [suggestion, setSuggestion] = useState([]);
    const [color, setColor] = useState('skyblue');
    const navigate = useNavigate()
  const handleColorSelect = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
};
  
let getData = async () => {
  try {
      let res = await axios.get(`${API_URL}/colors`);
      let data = res.data.colors;
      let selectedColorData = data.find((colors) => colors.color === color);
      if (selectedColorData) {
          setSuggestion(selectedColorData.matches);
      } else {
          console.log(`No matches found for color: ${color}`);
          setSuggestion([]);
      }
  } catch (error) {
      console.log(error);
  }
};

useEffect(() => {
  getData();
}, [color]); 


   

  return (
    <>
        
      <div className="color-suggestion">
      
        <div className="suggestion-container">
        
        

          <div className="base-color">
            
            <div className="base-content">
              <h5>Choose Your Base Color and get good matches</h5>
            </div>
            
            <div className="suggestions" style={{ backgroundColor: color }}></div>
            <select name="color" className={`${color=="black"?"white":"black"}`} style={{ backgroundColor: color }} value={color} onChange={handleColorSelect}>
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
           
          <div className="suggestion-color">
            {
              suggestion.map((e,i)=>{
                  return <div key={i} className="suggestions" style={{ backgroundColor: e}}><span>{e}</span></div>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorSuggestion;