import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
  const [btnName,setBtnName]=useState("Login");
  const onlineStatus=useOnlineStatus();
  
  return(
    <div className="flex justify-between bg-green-700 ">
        <div>
           <img src={LOGO_URL} className="w-40"/>
        </div>
        <div className="items-center">
          <ul className="flex p-4 my-8 mx-3 text-white text-xl font-mono cursor-pointer">
            <li className="px-4">OnlineStatus:{onlineStatus? "🟢" : "🔴" }</li>
            <li className="px-4"><Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/about"}>About Us</Link></li>
            <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="px-4">Cart</li>
            <button className="" onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName('Login')}}>{btnName}</button>
          </ul>
        </div>
    </div>
  )
}

export default Header;