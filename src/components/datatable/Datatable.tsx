import "./datatable.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

interface DataItem {
  hotel_id: string;
  room_id: string;
  [key: string]: any; // Allow other properties
}

interface DatatableProps {
  columns: GridColDef[];
}

const Datatable: React.FC<DatatableProps> = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [list, setList] = useState<DataItem[]>([]);
  const { data, loading, error } = useFetch<DataItem[]>(`http://127.0.0.1:5000/${path}`);

  useEffect(() => {
    setList(data || []); // Ensure default to empty array if data is undefined
  }, [data]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/${path}/${id}`);
      setList(list.filter((item) => item.hotel_id !== id)); // Use hotel_id here
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
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.room_id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.room_id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSizeOptions={[9]} // Updated prop according to the latest MUI DataGrid API
        checkboxSelection
        getRowId={(row) => row.hotel_id || row.room_id || row.id} // Use hotel_id, room_id, or id as the unique identifier
      />
    </div>
  );
};

export default Datatable;
