import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Creditos from "../components/Creditos.jsx";
import Footer from "../components/Footer.jsx";

import Editor from "../components/Editor.jsx";
import Proposta from "../components/Proposta.jsx";
import Criterios from "../components/Criterios.jsx";
import Login from "../components/Login.jsx";
import Registrar from "../components/Registrar.jsx";
import Profile from "../components/Profile.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userToken");
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/proposta" element={<Proposta />} />
        <Route path="/criterios" element={<Criterios />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/profile" element={<Profile />} />
        {/* Adicionar página para 404 depois*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
