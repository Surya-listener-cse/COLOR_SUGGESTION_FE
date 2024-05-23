import React, { useEffect, useState } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";

function Events() {

  let [data, setData] = useState([]);
  let token = sessionStorage.getItem("token");

  const getDates = async () => {
    try {
      let res = await axios.get(`${API_URL}/dates`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      let values = res.data.dates.map((dateObj) => {
        const date = new Date(dateObj.date);
        const formattedDate = `${date.getDate()}-${date.toLocaleString(
          "default",
          { month: "short" }
        )}-${date.getFullYear()}`;
        return { ...dateObj, date: formattedDate };
      });
      setData(values);
    } catch (error) {
      console.log(error);
    }
  };

  const editDate = async(e)=>{
   navigate(`/dashboard/edit-date/${e._id}`)
  }

  const deleteDate = async(data)=>{
    try {
      let res = await axios.delete(`${API_URL}/dates/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      getDates()
      toast.success(res.data.message||"Deleted Successfull")

    } catch (error) {
      toast.error(error)
      console.log(error);

    }
    
  }



  useEffect(() => {
    getDates();
  }, []);

  let navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        accessorKey: "date", //access nested data with dot notation
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "event",
        header: "Event",
        size: 150,
      },
      {
        accessorKey: "place", //normal accessorKey
        header: "Place",
        size: 200,
      },
      {
        accessorKey: "dress", //normal accessorKey
        header: "Dress",
        size: 200,
      },
      
      {
        accessorFn: (row) => (
          <div>
            <EditCalendarIcon onClick={()=>editDate(row)} style={{ color: "green" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DeleteIcon onClick={()=>deleteDate(row)} style={{ color: "orangered" }} />
          </div>
        ),
        header: "Action",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });


  return <>
        <div className="add-clothes-button">
          <button onClick={()=>navigate('/dashboard/add-event')} >+ Add Event</button>
        </div>
  <div className="container-fluid">
  <MaterialReactTable table={table} />
  </div>
  </>
}

export default Events;