import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { useNavigate } from "react-router";

import useOnlineStatus from "../utils/useOnlineStatus";






const Header = () => {
    const [logInOut, setlogInOut] = useState("login");
    const navigate = useNavigate();
    const onStatus = useOnlineStatus();

    return (
        <div className="header flex justify-between border-collaps border-2 border-solid border-black m-1">
          <div className="logo">
            <img src={LOGO_URL} className="w-36"
            alt="rest logo"/>
          </div>
         
         <div className="nav-items" >
            <ul className="list-items flex m-8 gap-4 text-center">
               <li>Onile Status {onStatus? "✅" : "🔴"}</li>
               <li><button onClick={ () => navigate("/")

               } >Home</button></li>
               <li><button onClick={ () => navigate("/aboutUs")} >about us</button></li>
               <li><button onClick={ () => navigate("/contactUs")} >contact us</button></li>
               <li><button onClick={ () => navigate("/cart")} >cart 🛒</button></li>
               <button className="login-out" style={{width:"100px", cursor:"pointer"}}
               onClick={ ()=>{
                logInOut === "login" ? setlogInOut("logout") : setlogInOut("login");
                
               }
            }
               
               >{logInOut}</button>
            </ul>

         </div>

        </div>

    )
};

export default Header;