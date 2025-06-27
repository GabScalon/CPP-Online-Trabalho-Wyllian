import React, { useState } from "react";
import ConfirmaIcon from "../src/assets/Confirma.png"; // Verifique o caminho se necessário
import OlhoVisivel from "../src/assets/senhaPararVer.svg"; // Verifique o caminho
import OlhoOculto from "../src/assets/senhaVer.svg"; // Verifique o caminho
import { Helmet } from "react-helmet-async";

function Registrar() {
  // Estado dos campos do form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Estado dos ícones de correto
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [areEmailsMatching, setAreEmailsMatching] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [arePasswordsMatching, setArePasswordsMatching] = useState(false);

  // Visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const validaLoginUsuario = (value) => {
    const isValid = value.length >= 5;
    setIsUsernameValid(isValid);
    return isValid;
  };

  const validaEmailUsuario = (value) => {
    // Regex para validação de e-mail
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValid);
    setAreEmailsMatching(value === email && isValid);
    return isValid;
  };

  const validaSenhaUsuario = (value) => {
    const hasMinLength = value.length >= 5;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const isValid = hasMinLength && hasLetter && hasNumber;
    setIsPasswordValid(isValid);
    setArePasswordsMatching(value === password && isValid);
    return isValid;
  };

  const validaIgualdadeEmails = (value) => {
    const areMatching = value === email && isEmailValid;
    setAreEmailsMatching(areMatching);
    return areMatching;
  };

  const validaIgualdadeSenhas = (value) => {
    const areMatching = value === password && isPasswordValid;
    setArePasswordsMatching(areMatching);
    return areMatching;
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validaLoginUsuario(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validaEmailUsuario(value);
    validaIgualdadeEmails(repeatEmail);
  };

  const handleRepeatEmailChange = (e) => {
    const value = e.target.value;
    setRepeatEmail(value);
    validaIgualdadeEmails(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validaSenhaUsuario(value);
    validaIgualdadeSenhas(repeatPassword);
  };

  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRepeatPassword(value);
    validaIgualdadeSenhas(value);
  };

  const handleMouseDownPassword = () => setShowPassword(true);
  const handleMouseUpPassword = () => setShowPassword(false);
  const handleMouseLeavePassword = () => setShowPassword(false);

  const handleMouseDownRepeatPassword = () => setShowRepeatPassword(true);
  const handleMouseUpRepeatPassword = () => setShowRepeatPassword(false);
  const handleMouseLeaveRepeatPassword = () => setShowRepeatPassword(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    const usernameOK = validaLoginUsuario(username);
    const emailOK = validaEmailUsuario(email);
    const repeatEmailOK = validaIgualdadeEmails(repeatEmail);
    const passwordOK = validaSenhaUsuario(password);
    const repeatPasswordOK = validaIgualdadeSenhas(repeatPassword);

    if (
      usernameOK &&
      emailOK &&
      repeatEmailOK &&
      passwordOK &&
      repeatPasswordOK
    ) {
      console.log("Dados para Registro:", { username, email, password });
      // Aqui envia dados pro backend depois
      alert(
        "Conta criada! (Este é apenas um placeholder. No futuro, os dados iriam para o backend.)"
      );
      // Limpar formulário ou redirecionar
      setUsername("");
      setEmail("");
      setRepeatEmail("");
      setPassword("");
      setRepeatPassword("");
      setIsUsernameValid(false);
      setIsEmailValid(false);
      setAreEmailsMatching(false);
      setIsPasswordValid(false);
      setArePasswordsMatching(false);
    } else {
      alert("Por favor, preencha corretamente todos os campos do formulário.");
    }
  };

  return (
    <section>
      <Helmet>
        <title>Registrar | Editor Online C++</title>
      </Helmet>
      <main className="main-fit-content">
        <h1>Registrar-se</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="logonUser">Usuário:</label>
          <div className="input-group">
            <input
              type="text"
              id="logonUser"
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

          <label htmlFor="emailLogon">Email:</label>
          <div className="input-group">
            <input
              type="text"
              id="emailLogon"
              value={email}
              onChange={handleEmailChange}
            />
            <img
              src={ConfirmaIcon}
              className={`confirma-icon ${isEmailValid ? "" : "invisivel"}`}
              width="10"
              height="10"
              alt="Email válido"
            />
          </div>

          <label htmlFor="emailRepetidoLogon">Repita o seu email:</label>
          <div className="input-group">
            <input
              type="text"
              id="emailRepetidoLogon"
              value={repeatEmail}
              onChange={handleRepeatEmailChange}
            />
            <img
              src={ConfirmaIcon}
              className={`confirma-icon ${
                areEmailsMatching ? "" : "invisivel"
              }`}
              width="10"
              height="10"
              alt="Emails iguais"
            />
          </div>

          <label htmlFor="logonPass">Senha:</label>
          <div className="password-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="logonPass"
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                id="olhoLogon"
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

          <label htmlFor="logonPassIgual">Repita a senha:</label>
          <div className="password-group">
            <div className="password-container">
              <input
                type={showRepeatPassword ? "text" : "password"}
                id="logonPassIgual"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
              <img
                id="olhoLogonIgual"
                className="olho"
                src={showRepeatPassword ? OlhoVisivel : OlhoOculto}
                onMouseDown={handleMouseDownRepeatPassword}
                onMouseUp={handleMouseUpRepeatPassword}
                onMouseLeave={handleMouseLeaveRepeatPassword}
                width="20"
                height="20"
                alt="Mostrar/Ocultar Senha"
              />
              <img
                src={ConfirmaIcon}
                className={`confirma-icon ${
                  arePasswordsMatching ? "" : "invisivel"
                }`}
                width="10"
                height="10"
                alt="Senhas iguais"
              />
            </div>
          </div>

          <button type="submit">Criar conta</button>
        </form>
        <p className="main-content-paragraph">
          O nome de usuário deve ter pelo menos 5 caracteres e a senha deve ter
          pelo menos 5 caracteres, 1 letra e 1 número.
        </p>
      </main>
    </section>
  );
}

export default Registrar;
