import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Creditos from "../components/Creditos";
import Footer from "../components/Footer";

import Home from "../components/Home";
import Proposta from "../components/Proposta";
import Criterios from "../components/Criterios";
import Login from "../components/Login";
import Registrar from "../components/Registrar";

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
