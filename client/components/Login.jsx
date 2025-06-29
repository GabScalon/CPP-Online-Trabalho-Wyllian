import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../src/services/authService";
import ConfirmaIcon from "../assets/Confirma.png";
import OlhoVisivel from "../assets/senhaPararVer.svg";
import OlhoOculto from "../assets/senhaVer.svg";
import { Helmet } from "@dr.pogodin/react-helmet";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validaLoginUsuario = (value) => {
    const isValid = value.length >= 5;
    setIsUsernameValid(isValid);
    return isValid;
  };

  const validaSenhaUsuario = (value) => {
    const hasMinLength = value.length >= 5;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const isValid = hasMinLength && hasLetter && hasNumber;
    setIsPasswordValid(isValid);
    return isValid;
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validaLoginUsuario(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validaSenhaUsuario(value);
  };

  const handleMouseDownPassword = () => setShowPassword(true);
  const handleMouseUpPassword = () => setShowPassword(false);
  const handleMouseLeavePassword = () => setShowPassword(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameOK = validaLoginUsuario(username);
    const passwordOK = validaSenhaUsuario(password);

    if (usernameOK && passwordOK) {
      try {
        setLoading(true);
        setError("");
        await login(username, password);
        onLoginSuccess();
        navigate("/editor");
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    } else {
      setError(
        "Por favor, preencha corretamente os campos de Usuário e Senha."
      );
    }
  };

  return (
    <section>
      <Helmet>
        <title>Login | Editor Online C++</title>
      </Helmet>
      <main style={{ minHeight: "0", height: "fit-content" }}>
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginUser">Usuário:</label>
          <div className="input-group">
            <input
              type="text"
              id="loginUser"
              value={username}
              onChange={handleUsernameChange}
              disabled={loading}
            />
            <img
              src={ConfirmaIcon}
              className={`confirma-icon ${isUsernameValid ? "" : "invisivel"}`}
              width="10"
              height="10"
              alt="Usuário válido"
            />
          </div>

          <label htmlFor="loginPass">Senha:</label>
          <div className="password-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="loginPass"
                value={password}
                onChange={handlePasswordChange}
                disabled={loading}
              />
              <img
                id="olhoLogin"
                className="olho"
                src={showPassword ? OlhoVisivel : OlhoOculto}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                onMouseLeave={handleMouseLeavePassword}
                width="20"
                height="20"
                alt="Mostrar/Ocultar Senha"
              />
              <img
                src={ConfirmaIcon}
                className={`confirma-icon ${
                  isPasswordValid ? "" : "invisivel"
                }`}
                width="10"
                height="10"
                alt="Senha válida"
              />
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </main>
    </section>
  );
}

export default Login;
