import React, { useEffect, useState } from "react";
import "./app.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../App";
import toast from "react-hot-toast";

function EditDate() {
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");
  const [dress, setDress] = useState("");
  const [place, setPlace] = useState("");
  let token = sessionStorage.getItem("token");

  const fetchDate = async () => {
    try {
      const response = await axios.get(`${API_URL}/dates/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      const { date, event, dress, place } = response.data.date;
      setDate(new Date(date).toISOString().split('T')[0]);
      setEvent(event);
      setDress(dress);
      setPlace(place);
    } catch (error) {
      console.error("Error fetching date:", error);
      toast.error("Error fetching date. Please try again.");
    }
  };

  useEffect(() => {
    fetchDate();
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date,
      event,
      dress,
      place,
    };
  
    
  
    try {
      const res = await axios.put(`${API_URL}/dates/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      console.log("Date edited successfully:", res.data);
      toast.success("Date Edited Successfully");
      navigate('/dashboard/home');
    } catch (error) {
      console.error("Error editing date:", error);
      toast.error("Error editing date. Please try again.");
    }
  };

  return (
    <>
      <div className="add-date">
        <div className="add-date-side-image"></div>

        <form onSubmit={handleSubmit} className="add-date-form">
          <div className="form-group">
            <label htmlFor="date">Event Date:</label>
            <input
              name="date"
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="place">Place:</label>
            <input
              name="place"
              type="text"
              className="form-control"
              value={place}
              onChange={(e) => setPlace(e.target.value)} // Corrected onChange handler
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="event">Event:</label>
            <input
              name="event"
              type="text"
              className="form-control"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dress">Dress:</label>
            <textarea
              name="dress"
              type="text"
              className="form-control"
              value={dress}
              onChange={(e) => setDress(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="show_button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EditDate;