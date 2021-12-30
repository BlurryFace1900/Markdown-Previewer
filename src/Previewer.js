import { marked } from "marked";
import "./styles.css";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

export default function Previewer(props) {
  return (
    <div className="previewer">
      <h1 className="previewer toolbar">Previewer</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}
        className="previewer output"
        id="preview"
      ></div>
    </div>
  );
}
