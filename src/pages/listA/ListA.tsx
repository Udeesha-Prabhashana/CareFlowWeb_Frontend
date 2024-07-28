import React from 'react';
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import Datatable from "../../components/datatable/Datatable";
import SidebarAdm from '../../components/sidebarAdm/SidebarAdm';
import SidebarAdmin from '../../components/sidebarAdmin/sidebarAdmin';

interface Column {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: any) => JSX.Element; // Adjust as needed
}

interface ListProps {
  columns: Column[];
}

const List: React.FC<ListProps> = ({ columns }) => {
  return (
    <div className="list2">
      <SidebarAdmin />
      <div className="listContainer2">
        {/* <Navbar /> */}
        <Datatable columns={columns} />
      </div>
    </div>
  );
}

export default List;
