import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { Icon } from '@iconify/react';
import "./BotttomNavbar.css"
import { NavLink } from "react-router-dom"




export default function BottomNavbar() {
  
   const navLinkStyles = ({ isActive }) => {
      return {
         color: isActive ? 'blueviolet' : '#007e32',
      }
   }
      return (
     
         <div class="BottomNavbar">
    
            
            
            <NavLink style={navLinkStyles} exact to="/home" >
               <AiFillHome />
            </NavLink>
         
            <NavLink style={navLinkStyles} exact to="/transfer" >
               <BiTransferAlt />
            </NavLink>
         
            <NavLink style={navLinkStyles} exact to="/planning" className='budgetIcon'>
               <Icon icon="arcticons:budgetmylife" />
            </NavLink>
            <NavLink style={navLinkStyles} exact to="/settings" >
               <MdQrCodeScanner />
            </NavLink>
        
         </div>
      )
   }

