const h1 = "# Welcome to my React Markdown Previewer!";

const h2 = "## This is a sub-heading...";

const h3 = "### And here's some other cool stuff:";

const inline = "Heres some code, `<div></div>`, between 2 backticks.";

const multiline =
  "```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```";

const bold = "You can also make text **bold**... whoa!";
const italic = "Or _italic_.";
const both = "Or... wait for it... **_both!_**";
const strikethrough = "And feel free to go crazy ~~crossing stuff out~~.";

const links = "There's also [links](https://www.freecodecamp.org), and";
const blockquote = "> Block Quotes!";

const tables = `And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
`;

const ul = `- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.`;

const ol = `1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:`;

const images =
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

const combined =
  h1 +
  "\n" +
  h2 +
  "\n" +
  h3 +
  "\n" +
  inline +
  "\n" +
  multiline +
  "\n" +
  bold +
  "\n" +
  italic +
  "\n" +
  both +
  "\n" +
  strikethrough +
  "\n" +
  links +
  "\n" +
  blockquote +
  "\n" +
  tables +
  "\n" +
  ul +
  "\n" +
  ol +
  "\n" +
  images;

export default combined;
