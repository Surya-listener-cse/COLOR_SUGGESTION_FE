import React from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
function Services() {

  let data = [
    {
      icon :"isColor",
      heading : "Personalized Color Suggestions",
      para : "Receive daily color recommendations tailored to your individual style and preferences. Whether you're dressing for work, a casual outing, or a special event, our app will provide you with the perfect hues to complement your look."
    },
    {
      icon:"isWeather",
      heading:"Seasonal Trends",
      para :"Stay ahead of the fashion curve with insights into the latest color trends for each season. From vibrant spring shades to cozy autumn tones, our app will keep you informed and inspired to experiment with new colors year-round."
    },
    {
      icon:"isCelebration",
      heading:"Occasion-Based Recommendations",
      para :" Need guidance on what colors to wear for specific occasions? Our app has you covered. Whether it's a wedding, job interview, or date night, we'll suggest colors that are appropriate and stylish for any event."
    },
    {
      icon:"isPsycology",
      heading:"Color Psychology Insights",
      para :" Explore the psychological impact of different colors on mood and perception. Our app not only helps you look good but also feel confident by providing insights into the emotional effects of various hues."
    },
    {
      icon:"isCoordination",
      heading:"Wardrobe Coordination",
      para :"Seamlessly coordinate your outfits by receiving color suggestions that complement your existing wardrobe. Our app analyzes your clothing collection and recommends colors that will enhance your ensembles, ensuring you always look put-together and stylish."
    },
    {
      icon:"isCustom",
      heading:"Customizable Preferences",
      para :"Tailor the color suggestions to match your unique style preferences, skin tone, and hair color. Whether you prefer bold and vibrant shades or subtle and neutral tones, our app allows you to customize your color recommendations for a truly personalized styling experience."
    } 
  ]

  return <>
  <div className="services">
    <div className="service-heading">
     <h3>Wear your <span>Confidence</span> everyday!</h3>
     <h6>What will change in your life if you have a <span>stylist</span> ?</h6>
    </div>


    <div name='service' className="service-container">
      {
        data.map((e,i)=>{
          return <div key={i} className="service">
          <div className='service-icon'>
           {e.icon=='isColor'?<ColorLensIcon />:""}
           {e.icon=='isWeather'?<ThunderstormIcon/>:""}
           {e.icon=='isCelebration'?<FamilyRestroomIcon/>:""}
           {e.icon=='isPsycology'?<PsychologyIcon/>:""}
           {e.icon=='isCoordination'?<Diversity1Icon/>:""}
           {e.icon=="isCustom"?<SettingsSuggestIcon/>:""}
          </div>
          <h5>{e.heading}</h5>
          <p>{e.para}</p>
           <small>Explore {e.heading}</small>
        </div>
        })
      }
    </div>
  </div>
  </>
}

export default Services;