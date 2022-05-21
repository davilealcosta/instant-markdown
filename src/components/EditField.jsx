import { marked } from "marked";
import BtnExport from "./BtnExport";

export default function EditField(props) {
  let formatted_text = marked.parse(props.text)

  return (
    <>
      <BtnExport text={formatted_text}/>
      <textarea
        placeholder="Tudo vazio por enquanto... 💤"
        value={props.text}
        onChange={(e) => props.handleChange(e)}>
      </textarea>
    </>
  )
}