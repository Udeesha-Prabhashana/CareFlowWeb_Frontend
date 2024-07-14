import React from 'react';
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import Datatable2 from "../../components/datatableroom/Datatable";

interface Column {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: any) => JSX.Element;
}

interface ListProps {
  columns: Column[];
}

const List: React.FC<ListProps> = ({ columns }) => {

    console.log("Columns", columns);
    return (
    <div className="list2">
      <Sidebar />
      <div className="listContainer2">
        <Navbar />
        <Datatable2 columns={columns} />
      </div>
    </div>
  );
}

export default List;
