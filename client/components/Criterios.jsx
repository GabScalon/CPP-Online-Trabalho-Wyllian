import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

function Criterios() {
  return (
    <section>
      <Helmet>
        <title>Critérios | Editor Online C++</title>
      </Helmet>
      <main>
        <h1>Lista de critérios preenchidos.</h1>
        <p>
          <b>AP</b>
          <br />
          [ ] Aplicação acessível apenas com autenticação
          <br />
          [x] Cadastro de novos usuários
          <br />
          [ ] Atualização de cadastro (na autenticação)
          <br />
          [x] Construção de base de dados (MongoDB) no back-end
          <br />
          [ ] Função de compartilhamento de dados entre usuários
          <br />
          [x] Front-end responsivo (desktop e mobile)
          <br />
          [x] User-side: funcionalidades
          <br />
          [x] Front-end
          <br />
          [x] Back-end
          <br />
          [ ] Aspectos de segurança
          <br />
          &emsp; [ ] - Testes de vulnerabilidade
          <br />
          &emsp; [ ] - Soluções de segurança
          <br />
          [x] Apresentação no server HTTP (framework reveal.js)
          <br />
          <br />
          <b>EP</b>
          <br />
          [x] Resumo
          <br />
          [x] Introdução
          <br />
          &emsp; [x] - Motivação
          <br />
          &emsp; [x] - Problema
          <br />
          &emsp; [ ] - Trabalhos relacionados
          <br />
          &emsp; [x] - Contribuição do trabalho
          <br />
          &emsp; [x] - Descrição da organização do trabalho
          <br />
          [ ] Fundamentação teórica
          <br />
          [ ] Materiais e métodos
          <br />
          &emsp; [x] - Metodologia
          <br />
          &emsp; [ ] - Discussão das principais partes de código
          <br />
          &emsp; [ ] - Roteiro detalhado de pacotes
          <br />
          &emsp; [ ] - Roteiro detalhado de instalação
          <br />
          [ ] Resultados
          <br />
          &emsp; [x] - Discussão dos resultados obtidos
          <br />
          &emsp; [ ] - Discussão sobre aspectos de segurança
          <br />
          &emsp; [ ] - Testes de vulnerabilidade/intrusão
          <br />
          &emsp; [ ] - Soluções de segurança
          <br />
          [x] Conclusão(ões)
          <br />
          [x] Referências
        </p>
      </main>
    </section>
  );
}

export default Criterios;
