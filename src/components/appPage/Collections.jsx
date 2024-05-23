import React from 'react'
import { useNavigate } from 'react-router-dom'

function Collections() {
  const navigate = useNavigate()
  let data = [
    {
       img : "https://static.vecteezy.com/system/resources/previews/032/425/160/original/collection-of-cute-women-dresses-colorful-flat-cartoon-style-hand-drawing-illustration-free-vector.jpg",
       type :"All Collection"
    },
    {
       img : "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/j/o/h/m-women-s-color-dress-fancy-rudra-collection-original-imagqwwqzn44gjum.jpeg?q=90&crop=false",
       type :"Tops"
    },
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YajOEn5ZV6P3iku8GrIXfWsFE0cyBR6ejCi6xrsDGoKwVBDo7XJXA6B0InLcqA9uYQk&usqp=CAU",
      type :"Phants"
    },
    {
      img : "https://i.etsystatic.com/41134919/r/il/ae75ea/4659503368/il_570xN.4659503368_inc4.jpg",
      type :"T-Shirts"
    }
  ]

  const handleNavigate = (e)=>{
  if(e.type=="All Collection"){
    navigate('/dashboard/all-dresses')
  }
  else if(e.type=='Tops'){
    navigate('/dashboard/tops')
  }
  else if(e.type=='Phants'){
    navigate('/dashboard/phants')
  }
  else if(e.type=='T-Shirts'){
    navigate('/dashboard/tShirts')
  }
  }
  return <>
     <div className='collections'>
          <div className='add-clothes-button'>
            <button onClick={()=>navigate('/dashboard/add-clothes')}> + Add New Clothes</button>
          </div>
        <div className="collection-container">

          { data.map((e,i)=>{
            return  <div key={i} className="collection-box">
            <img src={e.img} height='200px' width='270px' alt="" />
            <p>{e.type}</p>
            <button onClick={()=>handleNavigate(e)}>View</button>
          </div>
          })}
            
        </div>
        
     </div>
  </>
}

export default Collections