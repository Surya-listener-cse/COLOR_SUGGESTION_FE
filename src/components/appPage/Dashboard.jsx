import React from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import './app.css'

function Dashboard() {
  return (
    <>
      <div id="page-top app-page">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;