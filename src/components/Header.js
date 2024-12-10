import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
const Header=()=>{
  const [btnName,setBtnName]=useState("Login");
 // useEffect(()=>{console.log("useEffect called")},[btnName]);
  console.log("Header render");
  return(
    <div className="header">
        <div className="logo-container">
           <img src={LOGO_URL} className="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-button" onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName('Login')}}>{btnName}</button>
          </ul>
        </div>
    </div>
  )
}

export default Header;