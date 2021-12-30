import "./styles.css";
import React from "react";
import ReactFCCtest from "react-fcctest";
import Previewer from "./Previewer";
import Editor from "./Editor";

export default function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <Editor />
    </div>
  );
}
