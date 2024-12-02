export const userColumns = [
  { field: "hotel_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },

];

export const hotelColumns = [
  { field: "hotel_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "room_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "facilities",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const doctorColumns = [
  { field: "registrationNumber", headerName: "Registration ID", width: 120 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "specialization",
    headerName: "Specialization",
    width: 150,
  },
  {
    field: "mobileNumber",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "emailId",
    headerName: "Email",
    width: 200,
  },
  // {
  //   field: "address",
  //   headerName: "Address",
  //   width: 150,
  // },
];

// Columns for nurses
export const nurseColumns = [
  { field: "nurse_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "department", headerName: "Department", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "city", headerName: "City", width: 100 },
];


// Columns for appointments
export const appointmentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "patientName", headerName: "Patient Name", width: 150 },
  { field: "doctorName", headerName: "Doctor Name", width: 150 },
  { field: "appointmentDate", headerName: "Date", width: 120 },
  { 
    field: "payment", 
    headerName: "Payment", 
    width: 120,
    renderCell: (params) => (
      <div 
        style={{
          width: "60px", 
          padding: "5px 10px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: params.value === 1 ? "#006400" : "#8B0000",
          textAlign: "center",
        }}
      >
        {params.value === 1 ? "Paid" : "Unpaid"}
      </div>
    ),
  },
  { 
    field: "status", 
    headerName: "Status", 
    width: 150,
    renderCell: (params) => (
      <div 
        style={{
          width: "80px", 
          padding: "5px 10px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: params.value === 1 ? "#9D7CE5" : "gray",
          textAlign: "center",
        }}
      >
        {params.value === 1 ? "Completed" : "Pending"}
      </div>
    ),
  },
];


export const patientColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  // { field: "age", headerName: "Age", width: 70 },
  // { field: "gender", headerName: "Gender", width: 100 },
  { field: "emailId", headerName: "Email", width: 200 },
  { field: "mobileNumber", headerName: "Phone", width: 150 },
  { field: "address", headerName: "Address", width: 130 },
  // { field: "country", headerName: "Country", width: 100 },
];


export const receptionistColumns = [
  { field: "receptionist_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "city", headerName: "City", width: 100 },
  { field: "department", headerName: "Department", width: 200 },
];

