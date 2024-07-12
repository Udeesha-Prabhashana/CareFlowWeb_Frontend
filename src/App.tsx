import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { useContext, ReactNode } from "react";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";

import Home2 from "./pages/homeA/HomeA";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
