const heading = React.createElement(
    "h1",
    {id:"heading",style: {color:'red'}},
    "Hello World from React !!!");

const block = React.createElement(
    "div",{id:"parent"}, 
    [React.createElement("div", {id:"child"}, React.createElement("h1",{},"this is first child.")), React.createElement("div", {id:"child2"}, [React.createElement("h1",{},"this is second child H1."), React.createElement("h2",{},"this is second child H2.")])]
)

const rootElement = document.getElementById("app")
const root = ReactDOM.createRoot(rootElement);

root.render(block)