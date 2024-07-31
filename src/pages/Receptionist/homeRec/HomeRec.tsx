import React, { useState } from "react";
import NavbarLu from "../../../components/navbarA/NavbarA";
import WidgetRec from "../../../components/widgetRec/WidgetRec";
import "./HomeRec.scss";
import "../../../tailwind.css";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const HomeRec: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

 type WidgetType = "d_1" | "d_2" | "d_3" | "d_4" | "d_5" | "d_6";

  const filteredWidgets = (filter: string): WidgetType[] => {
    switch (filter) {
      case "type1":
        return ["d_1", "d_2", "d_3"];
      case "type2":
        return ["d_4", "d_5", "d_6"];
      default:
        return ["d_1", "d_2", "d_3", "d_4", "d_5", "d_6"];
    }
  };
  

  const widgets = filteredWidgets(filter);

  const buttonStyles = (isActive: boolean) => ({
    backgroundColor: isActive ? '#855CDD' : '#FFFFFF',
    color: isActive ? '#FFFFFF' : '#855CDD',
    border: '1px solid #855CDD',
    borderRadius: '9px',
    textTransform: 'capitalize',
    fontSize: '16px',
    width: '150px',
    height: '40px',
    '&:hover': {
      backgroundColor: isActive ? '#9D7CE5' : '#FFFFFF',
      color: '#855CDD',
    },
  });

  return (
    <div className="homerec">
      <SidebarRec />
      {/*<NavbarLu />*/}

      <div className="homeContainer2rec">
        <div className="bodyContainerrec">
          <div className="mainTopic ml-5">
            Good Morning, <span className="purpleText">Micheal</span>
          </div>
          <div className="subTopic ml-5">Welcome to your Dashboard</div>
          <div className="flex justify-between items-center my-4 mx-5">
            <div className="flex space-x-2">
              <Button
                variant="outlined"
                sx={buttonStyles(filter === "type1")}
                onClick={() => handleFilterChange("type1")}
              >
                Arrived
              </Button>
              <Button
                variant="outlined"
                sx={buttonStyles(filter === "type2")}
                onClick={() => handleFilterChange("type2")}
              >
                Not Arrived
              </Button>
              <Button
                variant="outlined"
                sx={buttonStyles(filter === "default")}
                onClick={() => handleFilterChange("default")}
              >
                All
              </Button>
            </div>
            <div className="ml-4 flex items-center space-x-2 mr-12">
              <span style={{ color: "#000000" }}>Search by Name</span>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Amal Perera"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon style={{ color: '#CCCCCC' }} />
                    </InputAdornment>
                  ),
                  style: {
                    color: '#CCCCCC',
                    padding: '5px 14px',
                  },
                }}
                style={{
                  borderRadius: '11px',
                  borderColor: '#CCCCCC',
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: '#CCCCCC',
                    },
                    "&:hover fieldset": {
                      borderColor: '#CCCCCC',
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: '#CCCCCC',
                    },
                    "& input::placeholder": {
                      color: '#000000',
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mr-14">
            {widgets.map((type) => (
              <WidgetRec key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRec;
