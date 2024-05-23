import React, { useEffect, useState } from "react";
import "./app.css";
import Chart from "./Chart";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { API_URL } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Home() {
  const [colorData, setColorData] = useState([]);
  const [match, setMatch] = useState("");
  const [dateData, setDateData] = useState([]);
  const [tops, setTops] = useState(0);
  const [phants, setPhants] = useState(0);
  const [tshirt, setTshirt] = useState(0);
  const [color , setColor] = useState('')
  let token = sessionStorage.getItem("token");
  
  const navigate = useNavigate()
  useEffect(() => {
    getColor();
    getPhantData();
    getTshirtData();
    getTopsData();
    fetchDateData();
  }, []);

  useEffect(() => {
    if (colorData.length > 0) {
      generateRandomColors();
    }
  }, [colorData]);

  const getColor = async () => {
    try {
      let res = await axios.get(`${API_URL}/colors`);
      let data = res.data.colors;
      setColorData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomColors = () => {
    const baseColor = colorData[Math.floor(Math.random() * 20)].color;
    const suggestionIndex = Math.floor(Math.random() * 10);
    const suggestion =
      colorData[suggestionIndex].matches[
        Math.floor(Math.random() * colorData[suggestionIndex].matches.length)
      ];
    setColor(baseColor);
    setMatch(suggestion);
  };

  const getPhantData = async () => {
    try {
      let res = await axios.get(`${API_URL}/phants`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let values = res.data.phants.map((dateObj) => ({
        ...dateObj,
        lastWornDate: new Date(dateObj.lastWornDate).toLocaleString(),
      }));
      setPhants(values.length);
    } catch (error) {
      console.error("Error fetching phants data:", error);
    }
  };

  const getTshirtData = async () => {
    try {
      let res = await axios.get(`${API_URL}/tShirts`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let values = res.data.tShirt.map((dateObj) => ({
        ...dateObj,
        lastWornDate: new Date(dateObj.lastWornDate).toLocaleString(),
      }));
      setTshirt(values.length);
    } catch (error) {
      console.error("Error fetching tShirt data:", error);
    }
  };

  const getTopsData = async () => {
    try {
      let res = await axios.get(`${API_URL}/tops`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let values = res.data.tops.map((dateObj) => ({
        ...dateObj,
        lastWornDate: new Date(dateObj.lastWornDate).toLocaleString(),
      }));
      setTops(values.length);
    } catch (error) {
      console.error("Error fetching tops data:", error);
    }
  };

  const fetchDateData = async () => {
    try {
      const res = await axios.get(`${API_URL}/dates`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      const data = res.data.dates.map((date) => ({
        ...date,
        dayOfWeek: new Date(date.date).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        dayOfMonth: new Date(date.date)
          .getDate()
          .toString()
          .padStart(2, "0"),
        month: new Date(date.date).toLocaleDateString("en-US", {
          month: "short",
        }),
      }));
      setDateData(data);
    } catch (error) {
      console.error("Error fetching date data:", error);
    }
  };

  let data = [
    {
      type: "Collections",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/425/160/original/collection-of-cute-women-dresses-colorful-flat-cartoon-style-hand-drawing-illustration-free-vector.jpg",
    },
    {
      type: "Top",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/j/o/h/m-women-s-color-dress-fancy-rudra-collection-original-imagqwwqzn44gjum.jpeg?q=90&crop=false",
    },
    {
      type: "Phant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YajOEn5ZV6P3iku8GrIXfWsFE0cyBR6ejCi6xrsDGoKwVBDo7XJXA6B0InLcqA9uYQk&usqp=CAU",
    },
    {
      type: "T-Shirt",
      image:
        "https://i.etsystatic.com/41134919/r/il/ae75ea/4659503368/il_570xN.4659503368_inc4.jpg",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.map((e, i) => (
            <div key={i} className="col-xl-3 col-md-6 mb-4">
              <div
                className={`card ${
                  e.type == "Collections"
                    ? "border-left-primary"
                    : ""
                } ${
                  e.type == "Top" ? "border-left-success" : ""
                } ${
                  e.type == "Phant" ? "border-left-warning" : ""
                } ${
                  e.type == "T-Shirt" ? "border-left-danger" : ""
                } ${
                  e.type == "Summer-Suits" ? "border-left-info" : ""
                } ${
                  e.type == "Winter-Suits" ? "border-left-dark" : ""
                } shadow h-100 py-2`}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className={`text-xs font-weight-bold ${
                          e.type == "Collections"
                            ? "text-primary"
                            : ""
                        } ${
                          e.type == "Top" ? "text-success" : ""
                        } ${
                          e.type == "Phant" ? "text-warning" : ""
                        } ${
                          e.type == "T-Shirt" ? "text-danger" : ""
                        } ${
                          e.type == "Summer-Suits"
                            ? "text-info"
                            : ""
                        } ${
                          e.type == "Winter-Suits"
                            ? "text-dark"
                            : ""
                        } text-uppercase mb-1`}
                      >
                        {e.type}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {e.type == "Top"
                          ? tops
                          : e.type == "Collections"
                          ? tops + phants + tshirt
                          : e.type == "Phant"
                          ? phants
                          : e.type == "T-Shirt"
                          ? tshirt
                          : ""}
                      </div>
                    </div>
                    <div className="col-auto">
                      <img className="dash-image" src={e.image} alt={e.type} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="flex-row-wrap">
            <div className="suggestion-home">
              <h6>Today's Suggestion</h6>
              <div className="today-suggestion">
                <div
                  className="top-suggestion"
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className="bottom-suggestion"
                  style={{ backgroundColor: match }}
                ></div>
              </div>
            </div>
            <div className="upcoming-events">
              <h6>
                <EditCalendarIcon />
                &nbsp;&nbsp;Up Coming Events
              </h6>
              
              {dateData.length?
                dateData.map((e, i) => (
                  <div key={i} className="upcoming-event-container">
                    <div className="event-date-image">
                      <div>
                        <span>{e.dayOfWeek}</span>
                        <span>
                          {e.dayOfMonth}/{e.month}
                        </span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div>
                        <ul>
                          <li>Event : {e.event}</li>
                          <li>Dress : {e.dress}</li>
                          <li>Place : {e.place}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )):(
                  <div className='empty_message'>
                      <p>Your Event is Empty...</p>
                      <div  className="upcoming-event-container">
                    <div className="event-date-image">
                      <div>
                        <span>No Dates</span>
                        <span>
                          
                        </span>
                      </div>
                    </div>
                    <div className="event-content">
                      <div>
                        <ul>
                          <li>Event : Empty </li>
                          <li>Dress : Empty</li>
                          <li>Place : Empty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  Click Here To Add Event
                  <p onClick={()=>navigate('dashboard/add-event')}></p>
                  </div>
                 
              )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;