// src/components/Login.jsx (Versão Corrigida do JSX)

import React, { useState } from "react";
import ConfirmaIcon from "../src/assets/Confirma.png";
import OlhoVisivel from "../src/assets/senhaPararVer.svg";
import OlhoOculto from "../src/assets/senhaVer.svg";
import { Helmet } from "react-helmet-async";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameOK = validaLoginUsuario(username);
    const passwordOK = validaSenhaUsuario(password);

    if (usernameOK && passwordOK) {
      console.log("Tentativa de Login:", { username, password });
      alert(
        "Login efetuado! (Este é apenas um placeholder. No futuro, os dados iriam para o backend.)"
      );
    } else {
      alert("Por favor, preencha corretamente os campos de Usuário e Senha.");
    }
  };

  return (
    <section>
      <Helmet>
        <title>Login | Editor Online C++</title>
      </Helmet>
      <main style={{ minHeight: "0", height: "fit-content" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginUser">Usuário:</label>
          <div className="input-group">
            <input
              type="text"
              id="loginUser"
              value={username}
              onChange={handleUsernameChange}
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
          <button type="submit">Entrar</button>
        </form>
        <p
          style={{
            minHeight: "0",
            maxHeight: "100%",
            height: "fit-content",
            boxSizing: "border-box",
          }}
        >
          O nome de usuário deve ter pelo menos 5 caracteres e a senha deve ter
          pelo menos 5 caracteres, 1 letra e 1 número.
        </p>
      </main>
    </section>
  );
}

export default Login;
