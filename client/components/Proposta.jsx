import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

function Proposta() {
  return (
    <section>
      <Helmet>
        <title>Proposta | Editor Online C++</title>
      </Helmet>
      <main>
        <h1>Sobre o projeto</h1>
        <p>
          O objetivo deste site é criar um editor de código em C++ online e, no
          processo, aprender mais sobre programação para web, realizando também
          o trabalho de projeto web para a matéria de Programação para Web
          (INE5646-03238A), lecionada pelo professor Wyllian Bezerra da Silva na
          Universidade Federal de Santa Catarina, no curso de Sistemas da
          utilizando as Linguagens HTML5, CSS e JavaScript.
          <br />
          <br />
          O projeto tem como objetivo nos tornar desenvolvedores web mais
          capacitados para o mercado de trabalho, obtendo maior conhecimento em
          HTML, JS, CSS e as bibliotecas necessárias. <br />
          <br />
          Escolhemos fazer um editor de C++ online por curiosidade de como um
          editor de código pode ser implementado num site, além de que é uma
          linguagem pela qual desenvolvemos interesse ao cursar a matéria de
          estrutura de dados, onde o professor usa C++ para muitas demonstrações
          e materiais.
        </p>
      </main>
    </section>
  );
}

export default Proposta;
