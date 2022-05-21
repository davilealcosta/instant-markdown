import jsPDF from "jspdf";

export default function BtnExport(props) {
  const generateDivPdf = () => {
    let div = document.createElement("div");
    div.style.width = "210mm";
    div.innerHTML = props.text;
    console.log("HMTL gerado: ", div);
    return div;
  }

  const docExport = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.html(generateDivPdf(), {
      callback: function (doc) {
        doc.save("myDocument.pdf");
      },
    });
  }

  return (
    <button className="btn_export" onClick={() => docExport()}>Salvar documento</button>
  );
}