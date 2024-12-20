import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { SearchContext } from "../utils/SearchContext";
const Header=()=>{
  const [btnName,setBtnName]=useState("Login");

  const onlineStatus=useOnlineStatus();

  const{loggedInUser}=useContext(UserContext);

  const {setSearchTerm}=useContext(SearchContext);

  const[inputValue,setInputValue]=useState("");

  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }
  
  const clickHandler=()=>{
    setSearchTerm(inputValue);
    
  }
  const keyHandler=(event)=>{
    
    if(event.key==='Enter')
    {
      setSearchTerm(inputValue);
      
    }
  }
  
  return(
    <div className="flex justify-between bg-green-700 ">
        <div>
           <Link to={"/"}>
           <img src={LOGO_URL} className="w-40"/>
           </Link>
        </div>
        <div className="mx-2 py-10"> 
         <input type="text" className="border-2 mx-1 me-0 px-8 py-2" value={inputValue} onChange={handleInputChange} onKeyDown={keyHandler}/>
         <button className="bg-black text-white m-0 py-3 px-2 text-base font-bold" 
          onClick={clickHandler}>
          Search
        </button>
        </div>
        <div className="items-center">
          <ul className="flex p-4 my-8 mx-3 text-white text-xl font-mono cursor-pointer">
            <li className="px-4">OnlineStatus:{onlineStatus? "🟢" : "🔴" }</li>
            <li className="px-4"><Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/about"}>About Us</Link></li>
            <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="px-4">Cart</li>
            <button onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName('Login')}}>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
    </div>
  )
}

export default Header;