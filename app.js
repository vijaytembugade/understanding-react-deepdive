const rootNode = document.getElementById("main");
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));

let counter = 1;

function handleClick(){
  console.log(counter)
}

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      React.createElement(Component, { name: "This is a Header" }),
      counter % 2 === 0
        ? React.createElement(Counter, { count: counter })
        : React.createElement(Counter2, { count: counter })
    )
  );
}

function Component(props) {
  return React.createElement("p", {className: 'redText'}, props.name, 
  React.createElement("button", {onClick: handleClick}, "click"));

}

function Counter(props) {
  return React.createElement("p", null, "Count: even ", props.count);
}

function Counter2(props) {
  return React.createElement("p", null, "Count: odd ", props.count);
}

function update() {
  console.log("clicked update..");
  counter += 1;
  root.render(React.createElement(App));
}
