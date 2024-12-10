import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-button" onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName('Login')}}>{btnName}</button>
          </ul>
        </div>
    </div>
  )
}

export default Header;