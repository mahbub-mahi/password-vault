import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser.js";
import HomeComponent from "./pages/HomePage.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateUser />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/vault" element={<HomeComponent />} />
      </Routes>
    </>
  );
}

export default App;
