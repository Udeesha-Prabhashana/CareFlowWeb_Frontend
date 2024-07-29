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
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 100,
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
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
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
  { field: "appointment_id", headerName: "ID", width: 70 },
  { field: "patient_name", headerName: "Patient Name", width: 200 },
  { field: "doctor_name", headerName: "Doctor Name", width: 200 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "time", headerName: "Time", width: 150 },
  { field: "status", headerName: "Status", width: 100 },
];

export const patientColumns = [
  { field: "patient_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 70 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phone", headerName: "Phone", width: 100 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "city", headerName: "City", width: 100 },
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

