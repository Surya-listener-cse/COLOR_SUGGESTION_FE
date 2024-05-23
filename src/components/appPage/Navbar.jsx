import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();
    let date = new Date();
    let day = date.getDate();
    let dayOfWeek = date.getDay(); 
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = dayNames[dayOfWeek];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[date.getMonth()];
    let year = date.getFullYear();
    
    let dateString = `${dayName}, ${day} ${monthName} ${year}`;
    
    let userName = sessionStorage.getItem("name");

    const handleLogout = ()=>{
      sessionStorage.clear();
      navigate('/landing-page')
    }
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
                <a className="nav-link">
                <span className="mr-2  nav-content ">
                <CalendarMonthIcon/> {dateString}
                </span>
                </a>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item">
            <a className="nav-link">
              <span className="mr-2  nav-content">
                {userName}{" "}
              </span>
              <img
                className="img-profile rounded-circle"
                src="https://best4geeks.com/wp-content/uploads/2018/08/7-lovely-girl-profile-picture-2.jpg"
              />
            </a>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item" onClick={()=>handleLogout()}>
                <a className="nav-link">
                <span className="mr-2  nav-content ">
                Logout <PowerSettingsNewIcon/>
                </span>
                </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;