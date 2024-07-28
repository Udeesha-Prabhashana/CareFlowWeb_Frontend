import "./datatable.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { doctorDummyData, nurseDummyData,patientDummyData, appointmentDummyData , receptionistDummyData} from "../../dummyData"; // Import dummy data

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

  const [list, setList] = useState<DataItem[]>([]);
  const { data, loading, error } = useFetch<DataItem[]>(`http://localhost:8080/api/${path2}`);

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

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/${path2}/${id}`);
      setList(list.filter((item) => {
        if (path2 === "Doctors") return item.doctor_id !== id;
        if (path2 === "Nurses") return item.nurse_id !== id;
        if (path2 === "Appointments") return item.appointment_id !== id;
        if (path2 === "Patients") return item.patient_id !== id;
        if (path2 === "Receptionists") return item.receptionist_id !== id;
        return true;
      }));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const id = params.row.doctor_id || params.row.nurse_id || params.row.appointment_id || params.row.patient_id || params.row.receptionist_id || params.row.id; // Use doctor_id, nurse_id, or id as the unique identifier
        return (
          <div className="cellActionadm">
            <Link to={`/${path1}/${path2}/${id}`} style={{ textDecoration: "none" }}>
              <div className="viewButtonadm">View</div>
            </Link>
            <div className="deleteButtonadm" onClick={() => handleDelete(id)}>
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
        <Link to={`/${path1}/${path2}/new`} className="link">
          Add New
        </Link>
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
