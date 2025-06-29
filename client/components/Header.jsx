import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";

function Header({ isLoggedIn, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav-list">
          {isLoggedIn && (
            <>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
              <li>
                <Link to="/proposta">Proposta</Link>
              </li>
              <li>
                <Link to="/criterios">Critérios</Link>
              </li>
              <li>
                <Link to="/creditos">Créditos</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="header-right-actions">
        {!isLoggedIn && (
          <div className="nav-item dropdown-container" ref={dropdownRef}>
            {" "}
            <button onClick={toggleDropdown} className="dropbtn">
              Login/Registrar
            </button>
            <div
              id="dropdownLog"
              className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}
            >
              <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                Login
              </Link>
              <Link to="/registrar" onClick={() => setIsDropdownOpen(false)}>
                Registrar-se
              </Link>
            </div>
          </div>
        )}

        {isLoggedIn && (
          <div
            className="nav-item dropdown-container account-menu-container"
            ref={dropdownRef}
          >
            <button onClick={toggleDropdown} className="dropbtn">
              Minha Conta
            </button>
            <div
              id="dropdownAccount"
              className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}
            >
              <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>
                Meu Perfil
              </Link>
              <LogoutButton onActualLogout={onLogout} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
