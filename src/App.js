import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import VaultHomePage from "./components/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser.js";
import HomeComponent from "./pages/HomePage.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" Component={CreateUser} />
        <Route path="/" Component={LoginPage} />
        <Route path="/vault" Component={HomeComponent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
