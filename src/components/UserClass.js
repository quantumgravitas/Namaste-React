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
      <div className=" border-2 flex p-4 m-auto text-center justify-between">
          <div>
            <h1 className="text-lg font-semibold px-2 py-0">{name}</h1>
            <h2 className="text-lg font-semibold px-2 py-2">{location}</h2>
            <h3 className="text-lg font-semibold px-2">{login}</h3>
          </div>
          <img src={avatar_url} className="w-28"/>
         </div>
    )
  }
}
export default UserClass;
          
         
        
        