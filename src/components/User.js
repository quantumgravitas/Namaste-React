import {useState} from "react";
const User=({name,location,twitter_user_name})=>{
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(1);
  return (
    <div className="user-card">
     <h1>{name}</h1>
     <h2>{location}</h2>
     <h3>Contact:{twitter_user_name}</h3>
     <h3>Count:{count}</h3>
     <h3>Count1:{count1}</h3>
    </div>
  )
}
export default User ;