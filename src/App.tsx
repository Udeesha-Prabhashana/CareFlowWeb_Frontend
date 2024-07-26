import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { useContext, ReactNode } from "react";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";

import Home2 from "./pages/homeA/HomeA";
import HomeP from "./pages/homeP/HomeP";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import List2 from "./pages/listA/ListA";
import Listroom from "./pages/listrooms/ListB";
import Single from "./pages/single/Single";

import New from "./pages/new/New";  // Make sure this path is correct
import { hotelInputs, roomInputs, userInputs } from "./formSource";  // Import userInputs correctly

import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import "./style/dark.scss";
import Register from "./pages/Register/Register";
import { Input } from "./formSource"; // Ensure to import the Input interface if separate
import HomeLu from "./pages/homeLU/HomeLU";
import Channeling from "./pages/channeling/Channeling";
import DoctorListLu from "./pages/doctorListLU/DoctorListLu";

import Appointments from "./pages/appointments/appointments";
import BookingSummary from "./pages/appointments/bookingSummary/bookingSummary"; // Import the new Appointments page
import Doctor from "./pages/doctorLU/Doctor";

import HistoryCards from "./pages/medical_history/medical_history";
import Details from "./pages/medical_history/details/details";

import ProfileLu from "./pages/profileLu/ProfileLu";

import Settings from "./pages/settings/settings";

import Notifications from "./pages/notifications/notifications";

import HomeDoc from "./pages/Doctor/home/homeDoc";
import DoctorBookings from "./pages/Doctor/bookings/bookings";
import DoctorViewBooking from "./pages/Doctor/bookings/viewBooking/viewBooking";

import HomeRec from "./pages/Receptionist/homeRec/HomeRec";
import RBookings from "./pages/Receptionist/RBookings/RBookings";
import PaidList from "./pages/Receptionist/RBookingsPaidList/RBookingsPaidList";
import PaidSummary from "./pages/Receptionist/RBookingsPaidSummary/RBookingsPaidSummary";
import UnpaidList from "./pages/Receptionist/RBookingsUnpaidList/RBookingsUnpaidList";
import UnpaidSummary from "./pages/Receptionist/RBookingsUnpaidSummary/RBookingsUnpaidSummary";

import RBookingsAdd from "./pages/Receptionist/RBookingsAdd/RBookingsAdd";

import RDoctors from "./pages/Receptionist/RDoctors/RDoctors";
import RDoctorsView from "./pages/Receptionist/RDoctorsView/RDoctorsView";
import RProfile from "./pages/Receptionist/RProfile/RProfile";
import RBookingsDoctors from "./pages/Receptionist/RBookingsDoctors/RBookingsDoctors";
import RBookingsPatients from "./pages/Receptionist/RBookingsPatients/RBookingsPatients";
import RBookingsSummary from "./pages/Receptionist/RBookingsSummary/RBookingsSummary";

interface ProtectedRouteProps {
    children: ReactNode;
}

function App() {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error("DarkModeContext must be used within a DarkModeContextProvider");
    }

  const { darkMode } = context;
  
  // const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  //   const { user } = useContext(AuthContext);

  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   } else {
  //     return <>{children}</>;
  //   }
  // };
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="adminhome"
            index
            element={
              // <ProtectedRoute>
                <Home2 />
              // </ProtectedRoute>
            }
          />
          <Route
            path="userloginhome"
            index
            element={
              // <ProtectedRoute>
                <HomeLu />
              // </ProtectedRoute>
            }
          />
          <Route
            path="channeling"
            index
            element={
              // <ProtectedRoute>
                <Channeling />
              // </ProtectedRoute>
            }
          />
          <Route path="doclist">
            <Route
              index
              element={
                // <ProtectedRoute>
                  <DoctorListLu />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":doctorId"
              element={
                // <ProtectedRoute>
                  <Doctor />
                // </ProtectedRoute>
              }
            />
            {/* <Route
              path="new"
              element={
                // <ProtectedRoute>
                  <NewHotel inputs={ hotelInputs} title="Add New Hotel" />
                // </ProtectedRoute>
              }
            /> */}
          </Route>

          <Route
            path="profileLu"
            index
            element={
              // <ProtectedRoute>
                <ProfileLu />
              // </ProtectedRoute>
            }
          />

          <Route path="users">
            <Route
              index
              element={
                // <ProtectedRoute>
                  <List2 columns={userColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":userId"
              element={
                // <ProtectedRoute>
                  <Single />
                // </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                // <ProtectedRoute>
                  <New inputs={userInputs as Input[]} title="Add New User" />
                // </ProtectedRoute>
              }
            />
          </Route>
          <Route path="hotels">
            <Route
              index
              element={
                // <ProtectedRoute>
                  <List2 columns={hotelColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                // <ProtectedRoute>
                  <Single />
                // </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                // <ProtectedRoute>
                  <NewHotel inputs={ hotelInputs} title="Add New Hotel" />
                // </ProtectedRoute>
              }
            />
          </Route>
          <Route path="rooms">
            <Route
              index
              element={
                // <ProtectedRoute>
                  <Listroom columns={roomColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                // <ProtectedRoute>
                  <Single />
                // </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                // <ProtectedRoute>
                  <NewRoom inputs={roomInputs} title="Add New Room" />
                // </ProtectedRoute>
              }
            />
          </Route>

          <Route path="appointments" element={<Appointments />} />
          <Route path="appointments/bookingSummary" element={<BookingSummary />} />

          <Route path="medical_history" element={<HistoryCards />} />
          <Route path="medical_history/details" element={<Details />} />

          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />



          <Route path="doctor/home" element={<HomeDoc/>}/>
            <Route path="doctor/bookings" element={<DoctorBookings/>}/>
            <Route path="doctor/bookings/view_bookings" element={<DoctorViewBooking/>}/>
            {/*<Route path="doctor/revenue_records" element={<DoctorRevenueRecords/>}/>*/}
            {/*<Route path="doctor/medical_records" element={<MedicalRecords/>}/>*/}
            {/*<Route path="doctor/patients" element={<Patients/>}/>*/}

          <Route path="receptionist/home" element={<HomeRec/>}/>          
          <Route path="receptionist/bookings" element={<RBookings/>}/>
          <Route path="receptionist/bookings/paidlist" element={<PaidList/>}/>
          <Route path="receptionist/bookings/paidsummary" element={<PaidSummary/>}/>
          <Route path="receptionist/bookings/unpaidlist" element={<UnpaidList/>}/>
          <Route path="receptionist/bookings/unpaidsummary" element={<UnpaidSummary/>}/>
          <Route path="receptionist/bookings/addnewbooking" element={<RBookingsAdd/>}/>
          <Route path="receptionist/doctors">
            <Route index element={<RDoctors />} />
            <Route path=":doctorId" element={<RDoctorsView />} />
          </Route>

          <Route path="receptionist/bookings/addnewbooking/doctors" element={<RBookingsDoctors/>}/>
          <Route path="receptionist/bookings/addnewbooking/patients" element={<RBookingsPatients/>}/>
          <Route path="receptionist/bookings/addnewbooking/summary" element={<RBookingsSummary/>}/>


          <Route path="receptionist/profile" element={<RProfile/>}/>

{/* 

 
          <Route path="receptionist/bookings/addnewbooking/paitentdetails" element={<RBookingsPatients/>}/>
          <Route path="receptionist/bookings/addnewbooking/summary" element={<RBookingsSummary/>}/>

          <Route path="receptionist/doctors" element={<RDoctors/>}/>
          <Route path="receptionist/doctors/viewdoctor" element={<RDoctorsView/>}/>

          <Route path="receptionist/profile" element={<RProfile/>}/> */}

        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
