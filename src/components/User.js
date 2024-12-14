import {useEffect, useState} from "react";
const User=({name,location,twitter_user_name})=>{
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(1);
  useEffect(()=>{
    //const timeinterval=setInterval(()=>{console.log("use effect called")},1000);
    return(()=>{
      clearInterval(timeinterval);
    })
  },[])
  return (
    <div className="user-card">
     <h1>{name}</h1>
     <h2>{location}</h2>
     <h3>Contact:{twitter_user_name}</h3>
     <h3>Count:{count}</h3>
     <button onClick={()=>{setCount(count<30 ? count+1:count)}}>Increase count</button>
     <button onClick={()=>{setCount(count<=0?count:count-1)}}>Decrease Count</button>
    </div>
  )
}
export default User ;