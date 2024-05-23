import React, { useEffect, useState, useMemo } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";

function Users() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/user`);
      setData(res.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/user/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      await getUsers(); 
      toast.success(res.data.message || "Deleted Successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred while deleting the user.");
      console.error("Error deleting user:", error);
    }
  };

  const editUser = async(id)=>{
    try {
      navigate(`/dashboard/edit-user/${id}`)
    } catch (error) {
      toast.error(error.message || "An error occurred while Editing the user.");
      console.error("Error Editing user:", error);
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 200,
      },
      {
        accessorFn: (row) => (
          <div>
            <DeleteIcon onClick={() => deleteUser(row._id)} className="delete-icon"  />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BorderColorIcon onClick={() => editUser(row._id)} className="edit-icon" />
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

  return (
    <div className="container-fluid" >
      <MaterialReactTable table={table} />
    </div>
  );
}

export default Users;