import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { Icon } from '@iconify/react';
import "./BotttomNavbar.css"





export default function BottomNavbar() {
  


   return (
     
      <div class="BottomNavbar">
           



         <a href="/"><AiFillHome />
            
            
         </a>
         <a href="/transfer"><BiTransferAlt />
         
         </a>
        <a href="/planning"className='budgetIcon'><Icon icon="arcticons:budgetmylife" /></a>
        <a href="/settings"><MdQrCodeScanner /></a>
        
        
     </div>
  )
}
