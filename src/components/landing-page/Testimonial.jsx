import React from 'react'

function Testimonial() {
  let data = [
    {
      name :"Balbir Kaur",
      para :"Since joining this app, I've never felt more confident in my color choices. It's like having a personal stylist in my pocket!.",
      city :"Bangalore",
      img :"https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
    },
    {
      name :"Steve Mono",
      para :"This app has completely transformed my morning routine. Choosing what to wear has never been easier or more fun!.",
      city :"Chennai",
      img :"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name :"Kelvin Bat",
      para :"I used to stick to blacks and grays, but this app encouraged me to explore colors I never thought I'd wear. I've received so many compliments!.",
      city :"Coimbatore",
      img :"https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]
  return <>

 <div name='testimonial' className='testimonial-page'>
 <h1>Testimonials</h1>

 <div className='testimonials'>
  <div className="container">
            <div className="row">
               {
                data.map((e,i)=>{
                  return  <div key={i} className="col-md-4">
                  <div className="card d-flex mx-auto">
                      <div className="card-image">
                          <img className="img-fluid d-flex mx-auto testimonial-image"  src={e.img}/>
                      </div>
                      <div className="card-text">
                          {e.para}
                      </div>
                      <div className="footer">
                          <span id="name">{e.name}<br/></span>
                          <span id="position">{e.city}</span>
                      </div>
                  </div>
              </div>
                })
               }
               
            </div>
        </div>
  </div>
 </div>
  </>
}

export default Testimonial;