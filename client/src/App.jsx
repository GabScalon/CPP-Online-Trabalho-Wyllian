import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Creditos from "../components/Creditos.jsx";
import Footer from "../components/Footer.jsx";

import Home from "../components/Home.jsx";
import Proposta from "../components/Proposta.jsx";
import Criterios from "../components/Criterios.jsx";
import Login from "../components/Login.jsx";
import Registrar from "../components/Registrar.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposta" element={<Proposta />} />
        <Route path="/criterios" element={<Criterios />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        {/* Adicionar página para 404 depois*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;