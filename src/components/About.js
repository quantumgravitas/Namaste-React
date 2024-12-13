import UserClass from "./UserClass";
import React from "react";
class About extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("parent constructor called");
    
  }
  componentDidMount()
  {
    console.log("parent componentdidmount called");
  }
  
  render()
  {
    console.log("parent render has called");
    return (
      <div className="about-us">
         <h1>Hii We are QuantumLabs and We develope one of the best frontend Applications</h1>
         <h2>Our team consists of notable developers who have abundant experience of create user friendly applications</h2>
        
          <UserClass/>
      </div>
    )
  }
}
export default About;
          
        
          
