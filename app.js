import React from "react";
import ReactDOM from "react-dom/client";

// JSX in action.
const heading = <h1 id="heading">Namste React using JSX 🚀</h1>;

// React Functional component
const Title = () => <h4>This is title</h4>;
const para = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
    tempora.
  </p>
);
const number = 1000;

const HeadingComponent = () => (
  <div>
    <p>{1100 + 200}</p>
    <Title></Title>
    {para}
    <h1 className="abc" style={{ color: "red" }}>
      This is my functional component
    </h1>
  </div>
);

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

root.render(heading);
root.render(HeadingComponent());
