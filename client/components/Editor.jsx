import React, { useEffect } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

function Editor() {
  useEffect(() => {
    // Cria e anexa o script do JDoodle
    const script = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Remove o script quando o componente é desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez, ao montar o componente

  return (
    <section>
      <Helmet>
        <title>Editor | Editor Online C++</title>
      </Helmet>
      <main>
        <h1>Editor de C++</h1>
        <div className="editor-de-codigo">
          <div data-pym-src="https://www.jdoodle.com/embed/v1/d154489c1030fd26"></div>
        </div>
      </main>
      <aside>
        <h3>Recursos adicionais</h3>
        <a
          href="https://learn.microsoft.com/pt-br/cpp/cpp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação da Microsoft para C++.
        </a>
      </aside>
    </section>
  );
}

export default Editor;
