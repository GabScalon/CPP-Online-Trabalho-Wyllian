import React from "react";
import { Helmet } from "react-helmet-async";

function Creditos() {
  return (
    <section>
      <Helmet>
        <title>Créditos | Editor Online C++</title>
      </Helmet>
      <main>
        <h1>Créditos</h1>
        <p style={{ lineHeight: "1.5", height: "90%" }}>
          <b>Grupo:</b> Gabriel Mengato Chiarelli de Souza Scalon <br />
          Thiago Soares Prado Carneiro <br />
          <b>Professor:</b> Wyllian Bezerra da Silva <br />
          <b>Universidade Federal de Santa Catarina</b> <br />
          <b>Editor de código:</b> Visual Studio Code <br />
          <b>Linguagens Utilizadas:</b> <br />
          - HTML5 (Antes)
          <br />
          - JavaScript (Antes)
          <br />
          - CSS
          <br />
          - React
          <br />
          <b>Misc:</b>
          <br />- API de edição de código disponibilizado por{" "}
          <a href="https://www.jdoodle.com">JDoodle</a> <br />- Paleta{" "}
          <a
            href="https://www.colourlovers.com/palette/475875/Gentle_Waves"
            style={{ height: "10%" }}
          >
            "Gentle Waves"
          </a>{" "}
          do site "Colour Lovers" pelo usuário "Skyblue2u".
        </p>
      </main>
    </section>
  );
}

export default Creditos;
