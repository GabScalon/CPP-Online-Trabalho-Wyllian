import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/">Editor</Link>
        <Link to="/proposta">Proposta</Link>
        <Link to="/criterios">Critérios</Link>
        <Link to="/creditos">Créditos</Link>
      </nav>
      <div className="dropdown">
        {/* Tirar o dropdown quando clicar fora dele depois */}
        <button onClick={toggleDropdown} className="dropbtn">
          Login/Registrar
        </button>
        <div
          id="dropdownLog"
          className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}
        >
          <Link to="/login">Login</Link>
          <Link to="/registrar">Registrar-se</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
