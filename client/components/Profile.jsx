import React, { useState, useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { getCurrentUser } from "../src/services/authService"; // Importe a função para obter o usuário
import { useNavigate } from "react-router-dom"; // Para redirecionar se não estiver logado

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
        // ou que ele lida com a busca/decodificação do token e retorna os dados.
        const user = await getCurrentUser(); // Chama a função do seu authService

        if (user && user.email && user.username) {
          // Verifica se os dados necessários existem
          setUserEmail(user.email);
          setUserName(user.username);
        } else {
          // Se não há dados do usuário ou ele não está logado, redireciona para o login
          setError("Usuário não logado ou dados de perfil não encontrados.");
          navigate("/login"); // Redireciona para a página de login
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
