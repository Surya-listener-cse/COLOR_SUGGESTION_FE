import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../../App";

function EditClothes() {
  const [existingImage, setExistingImage] = useState("");
  let token = sessionStorage.getItem("token");

  const [dressName, setDressName] = useState("");
  const [dressType, setDressType] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [lastWornDate, setLastWornDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [season, setSeason] = useState("");
  const navigate = useNavigate();

  let { id } = useParams();

  const fetchTopData = async () => {
    try {
      let res = await axios.get(`${API_URL}/tops/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      if (res && res.data && res.data.top) {
        let data = res.data.top;
        setDressName(data.dressName);
        setDressType(data.dressType);
        setColor(data.color);
        setDescription(data.description);
        const formattedDate = data.lastWornDate
          ? new Date(data.lastWornDate).toISOString().split("T")[0]
          : "";
        setLastWornDate(formattedDate);
        setExistingImage(data.imageFile);
        setSeason(data.season);
        return;
      }
  
      res = await axios.get(`${API_URL}/phants/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      if (res && res.data && res.data.phant) {
        let data = res.data.phant;
        setDressName(data.dressName);
        setDressType(data.dressType);
        setColor(data.color);
        setDescription(data.description);
        const formattedDate = data.lastWornDate
          ? new Date(data.lastWornDate).toISOString().split("T")[0]
          : "";
        setLastWornDate(formattedDate);
        setExistingImage(data.imageFile);
        setSeason(data.season);
        return;
      }
  
      res = await axios.get(`${API_URL}/tShirts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      if (res && res.data && res.data.tShirt) {
        let data = res.data.tShirt;
        setDressName(data.dressName);
        setDressType(data.dressType);
        setColor(data.color);
        setDescription(data.description);
        const formattedDate = data.lastWornDate
          ? new Date(data.lastWornDate).toISOString().split("T")[0]
          : "";
        setLastWornDate(formattedDate);
        setExistingImage(data.imageFile);
        setSeason(data.season);
        return;
      }
      console.error("No dress data found for the provided ID");
    } catch (error) {
      console.error("Error fetching dress data:", error);
    }
  };

  useEffect(() => {
    fetchTopData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("dressName", dressName);
    formData.append("dressType", dressType);
    formData.append("color", color);
    formData.append("season", season);
    formData.append("description", description);
    formData.append("lastWornDate", lastWornDate);

    
    if (imageFile !== null && typeof imageFile === "object") {
      formData.append("imageFile", imageFile);
    }

    try {
      let res;
      if(dressType === 'tops'){
         res = await axios.put(`${API_URL}/tops/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        });
      }
      else if(dressType === 'phants'){
         res = await axios.put(`${API_URL}/phants/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        });
      }
      else if(dressType === 'tShirts'){
         res = await axios.put(`${API_URL}/tShirts/${id}`, formData, {
          headers: {  
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          },
        });
      }
      
      toast.success(res.data.message);
      navigate("/dashboard/collection");

    } catch (error) {
      console.error("Error editing dress:", error);
      toast.error("Error editing dress. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="add-clothes-page">
      <div className="add-clothes-left">
        <form className="add-clothes-form edit-clothes-form" onSubmit={handleSubmit}>
          <div className="edit-image-page-form-container">
            <div className="form-group">
              <label htmlFor="name">Dress Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Set unique name"
                value={dressName}
                onChange={(e) => setDressName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <select
                className="form-control"
                value={dressType}
                onChange={(e) => setDressType(e.target.value)}
                required
              >
                <option value="">Choose Your Dress Type</option>
                <option value="tops">Top</option>
                <option value="phants">Phant</option>
                <option value="tShirts">T-Shirt</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <select
                className="form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              >
                <option value="">Choose Your Dress Color</option>
                <option value="red">Red</option>
                <option value="beige">Beige</option>
                <option value="gray">Gray</option>
                <option value="skyblue">Sky Blue</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="remarks">Remarks:</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastWornDate">Last Worn Date:</label>
              <input
                type="date"
                className="form-control"
                value={lastWornDate}
                onChange={(e) => setLastWornDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="season">Season:</label>
              <select
                type="text"
                className="form-control"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                required
              >
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
              </select>
            </div>
          </div>

          <div className="edit-page-image-container">
            <div className="form-group">
              {existingImage && (
                <div className="edit-show-image">
                  <label>Existing Image:</label>
                  <br />
                  <img 
                    src={`/src/images/${existingImage}`}
                    alt="Existing Top"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              )}
              <label htmlFor="imageFile">Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleFileChange}
              />
              <small>Upload a plain background image for better view</small>
            </div>

            <div className="button-container">
              <button type="submit" className="show_button">
                Submit
              </button>
              <button
                className="show_button"
                onClick={() => navigate("/dashboard/collection")}
              >
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClothes;