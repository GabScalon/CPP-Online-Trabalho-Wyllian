import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onActualLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onActualLogout();
    navigate("/");
  };

  return (
    <button onClick={handleLogoutClick} className="logout-button">
      Sair
    </button>
  );
};

export default LogoutButton;
