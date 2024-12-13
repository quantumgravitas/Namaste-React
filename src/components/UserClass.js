import React from "react";
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
    console.log("child constructor called");
   }

   async componentDidMount()
   {
      const data=await fetch("https://api.github.com/users/quantumgravitas");

      const json=await data.json();
      
      this.setState({
        userInfo: json
      })
      console.log("child componentdidmount called")
   }
     
   componentDidUpdate()
   {
     console.log("child componentDidupdate called");
   }
   render(){
     console.log("child render called");
     const {name,location,avatar_url,login}=this.state.userInfo ;
      return (
      <div className="user-card">
        <div className="user-info">
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>UserName:{login}</h3>
        </div>
        <img src={avatar_url} className="github_image"/>
      </div>
    )
   }
}
            
export default UserClass;