import React from "react";
import myImg from "../Mayur12.jpg";
class UserClass extends React.Component
{  
   constructor(props)
   {
     super(props);
     this.state={
      userInfo:{
        name:"dummy_name",
        location:"default",
      }  
    }
  }
      
   
   async componentDidMount()
   {
      const data=await fetch("https://api.github.com/users/quantumgravitas");

      const json=await data.json();
     
      this.setState({
        userInfo: json
      })
    }
     
    render(){
     
     const {name,location,avatar_url,login}=this.state.userInfo ;
      return (
      <div className="user-card">
          <div className="user-info">
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>UserName:{login}</h3>
          </div>
          <img src={avatar_url} className="github_image"/>
          <img src={myImg} className="github_image"/>
      </div>
    )
  }
}
export default UserClass;
          
         
        
        