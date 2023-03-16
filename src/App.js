import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import VaultHomePage from "./components/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser.js";
import HomePage from "./pages/HomePage.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" Component={CreateUser} />
        <Route path="/" exact Component={LoginPage} />
        <Route path="/vault" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
