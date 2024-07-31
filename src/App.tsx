import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { useContext, ReactNode } from "react";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";
import LoginSinhala from "./pages/homeLU/HomeLUsin";

import Home2 from "./pages/homeA/HomeA";
import HomeP from "./pages/homeP/HomeP";
import { appointmentColumns, doctorColumns, hotelColumns, nurseColumns, patientColumns, receptionistColumns, roomColumns, userColumns } from "./datatablesource";
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
import Chatbot from "./pages/cura/chatbot/chatbot";
import ChatbotNext from "./pages/cura/chatbotN/chatbotN";
import ChatbotLast from "./pages/cura/chatbotL/chatbotL";
import ChatbotThird from "./pages/cura/chatbotthird/chatbotthird";

import HistoryCards from "./pages/medical_history/medical_history";
import Details from "./pages/medical_history/details/details";
import ProfileLu from "./pages/profileLu/ProfileLu";


import Settings from "./pages/settings/settings";

import Notifications from "./pages/notifications/notifications";

import HomeDoc from "./pages/Doctor/home/homeDoc";
import DoctorBookings from "./pages/Doctor/bookings/bookings";
import DoctorViewBooking from "./pages/Doctor/bookings/viewBooking/viewBooking";
import DoctorMedicalRecords from "./pages/Doctor/medicalRecords/medicalRecords";
import ViewMedicalRecords from "./pages/Doctor/medicalRecords/viewMedicalRecords";
import RevenueRecords from "./pages/Doctor/revenueRecords/revenueRecords";
import ProfileDoc from "./pages/Doctor/profile/profileDoc";
import PatientList from "./pages/Doctor/patients/patientlist";
import DoctorNLU from "./pages/doctorNLU/DoctorNLU";



import HomeNurse from "./pages/Nurse/home/homeNurse";
import Doctors from "./pages/Nurse/doctors/doctors";
import Patients from "./pages/Nurse/patients/patients";
import ViewPatient from "./pages/Nurse/patients/viewPatient/viewPatient";
import SettingsNurse from "./pages/Nurse/settings/settingsNurse";
import ProfileNurse from "./pages/Nurse/profile/profileNurse";
import ProfileNurseMain from "./pages/Nurse/profileMain/profileNurseMain";
import UploadMedicalRecords from "./pages/Nurse/patients/viewPatient/uploadPatientRecords";
import UpdatePatientNumber from "./pages/Nurse/patient_number/UpdatePatientNumber";
import SelectDoctor from "./pages/Nurse/patient_number/selectDoctor/doctors";

import HomeRec from "./pages/Receptionist/homeRec/HomeRec";
import RBookings from "./pages/Receptionist/RBookings/RBookings";
import PaidList from "./pages/Receptionist/RBookingsPaidList/RBookingsPaidList";
import PaidSummary from "./pages/Receptionist/RBookingsPaidSummary/RBookingsPaidSummary";
import UnpaidList from "./pages/Receptionist/RBookingsUnpaidList/RBookingsUnpaidList";
import UnpaidSummary from "./pages/Receptionist/RBookingsUnpaidSummary/RBookingsUnpaidSummary";
import RBookingsAdd from "./pages/Receptionist/RBookingsAdd/RBookingsAdd";
import RBookingSummaryPay from "./pages/Receptionist/RSummaryPay/RSummaryPay";

import RDoctors from "./pages/Receptionist/RDoctors/RDoctors";
import RDoctorsView from "./pages/Receptionist/RDoctorsView/RDoctorsView";
import RProfile from "./pages/Receptionist/RProfile/RProfile";
import RProfileMain from "./pages/Receptionist/RProfileMain/RProfileMain";
import RBookingsDoctors from "./pages/Receptionist/RBookingsDoctors/RBookingsDoctors";
import RBookingsPatients from "./pages/Receptionist/RBookingsPatients/RBookingsPatients";
import RBookingsSummary from "./pages/Receptionist/RBookingsSummary/RBookingsSummary";
import RBookingDoctorView from "./pages/Receptionist/RBookingDoctorView/RBookingDoctorView";
import Landing from "./pages/LandingPage/LandingPage";

import NotificationsDoc from "./pages/Doctor/notifications/notificationsDoc";
import SettingsDoc from "./pages/Doctor/settings/settingsDoc";

import Notificationsadm from "./pages/notificationsadmin/notificationsadmin";
import SettingsAdm from "./pages/settingsAdmin/settingsAdmin";
import RecSettings from "./pages/Receptionist/RSettings/RSettings";
import RNotifications from "./pages/Receptionist/RNotifications/RNotifications";

import LUBookingsDoctors from "./pages/LUBookingsDoctors/LUBookingsDoctors";
import LUBookingsDoctorsView from "./pages/LUBookingsDoctorsView/LUBookingsDoctorsView";
import ChatUI from "./pages/cura/chatui";
import BookingSummaryPay from "./pages/channeling/summaryPay/summaryPay";
import LUDoctors from "./pages/LUDoctors/LUDoctors";
import LUDoctorsView from "./pages/LUDoctorsView/LUDoctorsView";
import RevenueRecordsAdmin from "./pages/revenueRecordsAdmin/revenueRecordsAdmin";

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
          <Route path="/doctorlistNlu" element={<List />} />
          <Route path="/doctorlistNlu/:id" element={<DoctorNLU /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/homelusin" element={<LoginSinhala/>} />

          <Route path="adminhome">
            <Route
              path="notification"
              element={
                // <ProtectedRoute>
                <Notificationsadm/>
                // </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                // <ProtectedRoute>
                <SettingsAdm/>
                // </ProtectedRoute>
              }
            />
            <Route
              index
              element={
                // <ProtectedRoute>
                <Home2 />
                // </ProtectedRoute>
              }
            />
            <Route path="Doctors">
              <Route
                index
                element={
                // <ProtectedRoute>
                <List2 columns={doctorColumns} />
                // </ProtectedRoute>
              }
              />
              <Route
                path="new"
                element={
                  // <ProtectedRoute>
                  <New inputs={userInputs as Input[]} title="Add New Doctor" />
                  // </ProtectedRoute>
                }
                />
            </Route>
            <Route
              path="Nurses"
              element={
                // <ProtectedRoute>
                <List2 columns={nurseColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path="Appointments"
              element={
                // <ProtectedRoute>
                <List2 columns={appointmentColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path="Patients"
              element={
                // <ProtectedRoute>
                <List2 columns={patientColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
              path="Receptionists"
              element={
                // <ProtectedRoute>
                <List2 columns={receptionistColumns} />
                // </ProtectedRoute>
              }
            />
            <Route
            path="revenuadmin"
            element={
              // <ProtectedRoute>
                <RevenueRecordsAdmin />
              // </ProtectedRoute>
            }
          />
          </Route>
          

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
                  <LUBookingsDoctors />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":doctorId"
              element={
                // <ProtectedRoute>
                  <LUBookingsDoctorsView />
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
          <Route path="doclist2">
            <Route
              index
              element={
                // <ProtectedRoute>
                  <LUDoctors />
                // </ProtectedRoute>
              }
            />
            <Route
              path=":doctorId"
              element={
                // <ProtectedRoute>
                  <LUDoctorsView />
                // </ProtectedRoute>
              }
            />
          </Route>

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
          <Route path="bookingSummaryPay" element={<BookingSummaryPay />} />



          <Route path="doctor/home" element={<HomeDoc/>}/>
            <Route path="doctor/bookings" element={<DoctorBookings/>}/>
            <Route path="doctor/bookings/view_bookings" element={<DoctorViewBooking/>}/>
            <Route path="doctor/medical_records" element={<DoctorMedicalRecords/>}/>
            <Route path="doctor/view_medicalRecords" element={<ViewMedicalRecords/>}/>
            <Route path="doctor/revenue_records" element={<RevenueRecords/>}/>
            <Route path="doctor/patients" element={<PatientList/>}/>
            <Route path="doctor/profile" element={<ProfileDoc/>}/>
          <Route path="doctor/notifications" element={<NotificationsDoc/>}/>
          <Route path="doctor/settings" element={<SettingsDoc/>}/>



          <Route path="nurse/home" element={<HomeNurse/>}/>
          <Route path="nurse/doctors" element={<Doctors/>}/>
            <Route path="nurse/patients" element={<Patients/>}/>
            <Route path="nurse/patients/view_patients" element={<ViewPatient/>}/>
            <Route path="nurse/settings" element={<SettingsNurse/>}/>
            <Route path="nurse/profile" element={<ProfileNurseMain/>}/>
            <Route path="nurse/profile-edit" element={<ProfileNurse/>}/>
            <Route path="nurse/patient/uploadPatientRecords" element={<UploadMedicalRecords/>}/>
            <Route path="nurse/updatePatientNumber" element={<UpdatePatientNumber/>}/>
            <Route path="nurse/updatePatientNumber/selectDoctor" element={<SelectDoctor/>}/>


            




          <Route path="chatbot" element={<Chatbot/>}/>
          <Route path="chatbotN" element={<ChatbotNext/>}/>
          <Route path="chatbotL" element={<ChatbotLast/>}/>
          <Route path="chatbotThird" element={<ChatbotThird/>}/>
          <Route path="curachat" element={<ChatUI/>}/>


          
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

          <Route path="receptionist/bookings/addnewbooking/patients" element={<RBookingsPatients/>}/>
          <Route path="receptionist/bookings/addnewbooking/summary" element={<RBookingsSummary/>}/>
          <Route path="receptionist/bookings/addnewbooking/bookingSummaryPay" element={<RBookingSummaryPay />} />
          <Route path="receptionist/bookings/addnewbooking/doctors">
            <Route index element={<RBookingsDoctors />} />
            <Route path=":doctorId" element={<RBookingDoctorView />} />
          </Route>
          
          <Route path="receptionist/notifications" element={<RNotifications/>}/>
          <Route path="receptionist/settings" element={<RecSettings/>}/>
          <Route path="receptionist/profile-edit" element={<RProfile/>}/>
          <Route path="receptionist/profile" element={<RProfileMain/>}/>
          <Route path="landingpage" element={<Landing/>}/>
        </Routes>

 


      </BrowserRouter>
    </div>
  );
}


export default App;