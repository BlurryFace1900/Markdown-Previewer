import "./styles.css";

import { useState } from "react";
import Previewer from "./Previewer";
import combined from "./initialState";

export default function Editor() {
  const [input, setInput] = useState(combined);

  return (
    <div className="editor">
      <h1 className="editor toolbar">Editor</h1>
      <textarea
        className="editor textarea"
        name="text"
        id="editor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <Previewer markdown={input} />
    </div>
  );
}
