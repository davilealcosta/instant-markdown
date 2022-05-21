import { marked } from "marked";
import BtnExport from "./BtnExport";

export default function Preview(props) {
  let formatted_text = marked.parse(props.text);

  return (
    <>
      <BtnExport text={formatted_text}/>
      <div dangerouslySetInnerHTML={{ __html: formatted_text }} className="view">

      </div>
    </>
  );
}