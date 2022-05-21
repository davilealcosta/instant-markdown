import { useState } from "react";
import EditField from "./EditField";
import Preview from "./Preview";

export default function Main() {
  const [editar, setEditar] = useState(true);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const changeEdit = (value) => {
    if (value) {
      setEditar(value)
      document.querySelector(".btn_edit").classList.add("btn_active")
      document.querySelector(".btn_view").classList.remove("btn_active")
    } else {
      setEditar(value)
      document.querySelector(".btn_edit").classList.remove("btn_active")
      document.querySelector(".btn_view").classList.add("btn_active")
    }
  }

  return (
    <main className="main">
      <section className="sobre">
        <h2>Sobre o que é esse site?</h2>
        <p>Instant Markdown é uma ferramenta para criar rapidamente documentos formatados utilizando a linguagem de formatação Markdown. Instant Markdown também aceita tags HTML para formatação de conteúdo. Você pode criar a sintaxe, visualizar como seu documento está ficando, e exportá-lo como um documento pronto para uso. </p>
        <p>Caso queira conhecer mais sobre a linguagem Markdown, experimente <a href="https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open" target={"_blank"} rel={"noreferrer"}>este guia rápido</a> 🚀</p>
      </section>

        <div className="buttons">
          <button className="btn_edit btn_active" onClick={() => changeEdit(true)}>Editar</button>
          <button className="btn_view" onClick={() => changeEdit(false)}>Visualizar</button>
        </div>
        {editar ? <EditField handleChange={handleChange} text={input} /> : <Preview text={input} />}
      </main>
  );
}