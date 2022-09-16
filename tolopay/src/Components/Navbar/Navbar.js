import React from 'react'
// import { FaUserAlt } from "react-icons/fa"
import { BsBellFill } from "react-icons/bs"
import { tologoSVG } from "../../Assets";
import Profile from "../ProfileComponent/Profile"
// import Profile from "../ProfileComponent/Profile"
// <BsBellFill />
// <FaUserAlt />

import './Navbar.css';
function Navbar() {
   return (
<>
         <div class="navbar">
            
         <a href="#logo" class="logos">
              <img src={tologoSVG} alt="logo" />
               
            </a>
   
         <a href="#profile" class="right">
            
            <icon>
                  
                  
               </icon>
               
            
         </a>
         <a href="#notification" class="right ">
             <BsBellFill />
            </a>
            
         
         </div>
         <Profile />
         
      </>
      
   );
}




export default Navbar;