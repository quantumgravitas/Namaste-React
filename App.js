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

/*
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
*/

/*
import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{id:"heading"},"Namaste React By Mayur");

const root=ReactDOM.createRoot(document.getElementById("root"));

//we can write jsx on multiple lines only when we write it in the paranthesis
const jsxHeading=(
                  <h1 id="jsxheading">
                    Namaste React by JSX
                  </h1>);
//above normal jsx component is to be called the ReactElement

const HeadingElement=()=>(
  
  <div id="container">
          <h1 className="heading">Namaste React using Functional Component</h1>
        </div>
)
const HeadingElement1=()=> <h1>Namaste React using functional component</h1>;

//both headingElement and headingElement1 are same as we are using the arrow functions

console.log(heading);

console.log(jsxHeading);

root.render(jsxHeading);
*/

/*
import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));

const HeadingElement1=()=>{
  return <h1 id="heading" tabIndex={5}>Namaste React using Functional Component1</h1>
}

const HeadingElement2=()=>(
  <h1 id="heading3">Namaste React using Functional Component by Mayur</h1>
)
const title=<h1 id="title">Namaste Javascript using JSX</h1>

const HeadingElement3=()=>(
  <div id="container">
    {title}
    <HeadingElement1/>  
    <h1 id="heading2">Namaste React using Functional Component2</h1>
    <HeadingElement2/>
  </div>
  
)


root.render(<HeadingElement3/>);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom/client';

const headingElement=React.createElement("div",{className:"title"},[
  React.createElement("h1",{},"heading1"),
  React.createElement("h2",{},"heading2"),
  React.createElement("h3",{},"heading3")
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
*/
/*
import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent=()=>(
  <h2>TitleComponent</h2>
)

const headingElement4=<h4>HeadingElement4</h4> ;

const HeadingElement=()=>(
  <div className="title">
     <h1>Heading1</h1>
     <h2>Heading2</h2>
     <TitleComponent></TitleComponent>
     <h3>Heading3</h3>
     {headingElement4}
  </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingElement/>);
*/

import React from "react";
import ReactDOM from "react-dom/client";
import './Header.css';

const Header=()=>(
  <div className="header">
    <div className="logo">
      <img src="/images/QuantumGravitas.png" className="mylogo"/>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search" className="searchInput"/>
    </div>
    <div className="icon">
    </div>    
  </div>

    
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);