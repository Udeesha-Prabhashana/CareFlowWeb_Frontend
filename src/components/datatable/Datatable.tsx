import "./datatable.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { doctorDummyData, nurseDummyData,patientDummyData, appointmentDummyData , receptionistDummyData} from "../../dummyData"; // Import dummy data
import { toast } from "react-toastify";

interface DataItem {
  doctor_id?: number;
  nurse_id?: number;
  appointment_id?: number;
  patient_id?: number;
  receptionist_id?: number;
  name?: string;
  patient_name?: string;
  doctor_name?: string;
  specialization?: string;
  department?: string;
  email?: string;
  phone?: string;
  city?: string;
  date?: string;
  time?: string;
  status?: string;
  age?: number;
  gender?: string;
  address?: string;
  country?: string;
  [key: string]: any; // Allow other properties
}

interface DatatableProps {
  columns: GridColDef[];
}

const Datatable: React.FC<DatatableProps> = ({ columns }) => {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];

  console.log("Path:", path1, path2); // Debugging: Check the path

  const [list, setList] = useState<DataItem[]>([]);
  const { data, loading, error } = useFetch<DataItem[]>(`${process.env.REACT_APP_API_BASE_URL}/api/${path2}`);

  useEffect(() => {
    console.log("Fetched Data:", data); // Debugging: Check fetched data

    if (data && data.length > 0) {
      setList(data);
    } else {
      switch (path2) {
        case "Doctors":
          setList(doctorDummyData);
          break;
        case "Nurses":
          setList(nurseDummyData);
          break;
        case "Appointments":
          setList(appointmentDummyData);
          break;
        case "Patients":
          setList(patientDummyData);
          break;
        case "Receptionists":
          setList(receptionistDummyData);
          break;
        default:
          setList([]);
      }
    }
  }, [data, path2]);

  useEffect(() => {
    setList(data || []); // Ensure default to empty array if data is undefined
  }, [data]);
  
  const handleDelete = async (id: number) => {
    try {
      // Retrieve token from localStorage
      const user = localStorage.getItem("user");
      let token = null;
      if (user) {
        const parsedUser = JSON.parse(user);
        token = parsedUser.access_token;
      }
  
      // Check if token exists before making the request
      if (!token) {
        toast.error("Unauthorized: No token found!");
        return;
      }
  
      // Make DELETE API call with Authorization header
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/${path2}/${id}`,
        {}, // Pass an empty body for POST requests
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );
  
      // Update the list after successful deletion
      setList(list
        .filter((item) => {
          if (path2 === "Doctors") return item.doctor_id !== id;
          if (path2 === "Nurses") return item.nurse_id !== id;
          if (path2 === "Appointments") return item.appointment_id !== id;
          if (path2 === "Patients") return item.patient_id !== id;
          if (path2 === "Receptionists") return item.receptionist_id !== id;
          // return true;
        })
      );
  
      toast.success(`${path2.slice(0, -1)} deleted successfully!`);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting item:", err);
      toast.error("Failed to delete item. Please try again.");
    }
  };
  

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const id =
          params.row.doctor_id ||
          params.row.nurse_id ||
          params.row.appointment_id ||
          params.row.patient_id ||
          params.row.receptionist_id ||
          params.row.id; // Use doctor_id, nurse_id, or id as the unique identifier
  
          if (path2 === "Appointments" || path2 === "Patients") {
            return (
              <div className="cellActionadm">
                {/* <Link to={`/${path1}/${path2}/${id}`} style={{ textDecoration: "none" }}> */}
                <div className="viewButtonadm">View</div>
                {/* </Link> */}
              </div>
            );
          }
          
  
        return (
          <div className="cellActionadm">
            {/* <Link to={`/${path1}/${path2}/${id}`} style={{ textDecoration: "none" }}> */}
              <div className="viewButtonadm">View</div>
            {/* </Link> */}
            <div
              className="deleteButtonadm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent row selection on delete button click
                handleDelete(id);
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="datatableadm">
      <div className="datatableTitleadm">
        {path2}
              <div className="datatableTitleadm">
              {(path2 !== "Appointments" && path2 !== "Patients") && (
              <>
                {path2 === "Nurses" || path2 === "Receptionists" ? (
                  <div className="link">Add New</div>
                ) : (
                  <Link to={`/${path1}/${path2}/new`} className="link">
                    Add New
                  </Link>
                )}
              </>
            )}
      </div>
      </div>
      <DataGrid
        className="datagridadm"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSizeOptions={[9]} // Updated prop according to the latest MUI DataGrid API
        checkboxSelection
        getRowId={(row) => row.appointment_id || row.doctor_id || row.nurse_id || row.receptionist_id || row.patient_id || row.id}  // Use doctor_id, nurse_id, or id as the unique identifier
      />
    </div>
  );
};

export default Datatable;
