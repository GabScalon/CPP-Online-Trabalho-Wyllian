import React, { useState, useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { getCurrentUser } from "../src/services/authService";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // Assumimos que getCurrentUser() retorna um objeto com { email, username }
        const user = await getCurrentUser();

        if (user && user.email && user.username) {
          // Verifica se os dados necessários existem
          setUserEmail(user.email);
          setUserName(user.username);
        } else {
          // Se não há dados do usuário ou ele não está logado, redireciona para o login
          setError("Usuário não logado ou dados de perfil não encontrados.");
          navigate("/login");
        }
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        setError(
          "Erro ao carregar dados do perfil. Por favor, faça login novamente."
        );
        navigate("/login"); // Redireciona para a página de login em caso de erro
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]); // Adicione navigate como dependência do useEffect

  if (loading) {
    return (
      <section>
        <Helmet>
          <title>Carregando Perfil | Editor Online C++</title>
        </Helmet>
        <main style={{ minHeight: "0", height: "fit-content" }}>
          <h1>Carregando Perfil...</h1>
          <p>Aguarde enquanto carregamos suas informações.</p>
        </main>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <Helmet>
          <title>Erro no Perfil | Editor Online C++</title>
        </Helmet>
        <main style={{ minHeight: "0", height: "fit-content" }}>
          <h1>Erro</h1>
          <p className="error-message">{error}</p>
        </main>
      </section>
    );
  }

  return (
    <section>
      <Helmet>
        <title>Perfil | Editor Online C++</title>
      </Helmet>
      <main style={{ minHeight: "0", height: "fit-content" }}>
        <h1>Meu Perfil</h1>
        <div className="profile-details">
          <p>
            <strong>Nome de Login:</strong> {userName}
          </p>
          <p>
            <strong>Email:</strong> {userEmail}
          </p>
        </div>
      </main>
    </section>
  );
}

export default Perfil;
