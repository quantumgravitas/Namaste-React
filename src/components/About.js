import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component
{
  constructor(props)
  {
    super(props);
  }
    
  componentDidMount()
  {
    
  }
  
  render()
  { 
    return (
      <div className="about-us">
         <h1>Hii We are QuantumLabs and We develope one of the best frontend Applications</h1>
         <h2>Our team consists of notable developers who have abundant experience of create user friendly   applications</h2>
         <div>
          LoggedIn User 
          <UserContext.Consumer>{({loggedInUser})=> {return <h3 className="font-bold text-lg">{loggedInUser}</h3>}}</UserContext.Consumer>
         </div>
          <UserClass/>
      </div>
    )
  }
}
export default About;
          
        
          
