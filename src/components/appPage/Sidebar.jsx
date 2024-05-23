import React from 'react'
import StyleIcon from '@mui/icons-material/Style';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CollectionsIcon from '@mui/icons-material/Collections';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PersonIcon from '@mui/icons-material/Person';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
  return <>

   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark " id="accordionSidebar">
      
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <StyleIcon/>
                </div>
                <div className="sidebar-brand-text mx-3">STYLE BOOK</div>
            </a>
      
            <hr className="sidebar-divider my-0"/>

      
            <li onClick={()=>navigate('home')} className="nav-item active">
                <a className="nav-link" href="index.html">
                      <DashboardCustomizeIcon/>
                      &nbsp;   <span > Dashboard</span></a>
            </li>

    
            <hr className="sidebar-divider"/>

         
            <div className="sidebar-heading">
                Color
            </div>

            <li onClick={()=>navigate('color-suggestion')} className="nav-item">
                <a className="nav-link collapsed">
                <ColorLensIcon/>
                &nbsp;   <span>Suggestion</span>
                </a> 
            </li>

            <li className="nav-item" onClick={()=>navigate('seasonal-suggestion')}>
                <a className="nav-link collapsed">
                <ThunderstormIcon/>
                &nbsp;  <span>Seasonal</span>
                </a> 
            </li>

            

        
            <hr className="sidebar-divider"/>

     
            <div className="sidebar-heading">
                DRESS
            </div>

      
            <li className="nav-item" onClick={()=>navigate('collection')}>
                <a className="nav-link collapsed">
                <CollectionsIcon/>
                &nbsp;  <span>Collections</span>
                </a> 
            </li>

          
            <li onClick={()=>navigate('event')} className="nav-item">
                <a className="nav-link collapsed">
                <EditCalendarIcon />
                    &nbsp;<span>Events</span>
                </a> 
            </li>

           
          {
            sessionStorage.getItem("role")==="admin"?<div>
                 <div className="sidebar-heading">
                ADMIN
            </div>
                <li className="nav-item" onClick={()=>navigate('users')}>
                    <a className="nav-link collapsed">
                    <PersonIcon/>
                    &nbsp; <span>Users</span>
                    </a> 
               </li>

               <li className="nav-item" onClick={()=>navigate('action-color')}>
                    <a className="nav-link collapsed">
                    <FormatColorFillIcon/>
                    &nbsp; <span>Manage Colors</span>
                    </a> 
               </li>
            </div>:""
          }
            

        </ul>
  </>
}

export default Sidebar