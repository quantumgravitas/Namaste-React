/*const heading=React.createElement('h1',{id:'heading',xyz:"abc"},"Hello World From React!");

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

console.log(heading);
console.log(typeof heading);
console.log(root);
console.log(typeof root);
*/
/*
<div id='parent'>
  <div id="child1">
    <h1>I'm  h1 tag</h1>
    <h2>I'm  h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm  h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement('div',{id:"parent"},[
 React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"Welcome to Namaste React"),
    React.createElement("h2",{},"I'm h2 tag")
 ]),
  
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
 ])
])
  

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);