import React from 'react'
// import { FaUserAlt } from "react-icons/fa"
import { BsBellFill } from "react-icons/bs"
import Profile from "../ProfileComponent/Profile"
import"./Alert";

import './Navbar.css';
function Navbar() {
   return (
<>
         <div class="navbar">
            
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