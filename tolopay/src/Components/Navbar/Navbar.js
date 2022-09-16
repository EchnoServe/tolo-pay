import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { BsBellFill } from "react-icons/bs"
// import Profile from "../ProfileComponent/Profile"
// <BsBellFill />
// <FaUserAlt />

import './Navbar.css';
function Navbar() {
   return (
<>
         <div class="navbar">
            
         <a href="#logo" class="logos">
               here
               
            </a>
   
         <a href="#profile" class="right user">
            
            <icon>
               <FaUserAlt />
               </icon>
               
            
         </a>
         <a href="#notification" class="right ">
             <BsBellFill />
            </a>
            
         
         </div>
         
      </>
      
   );
}




export default Navbar;