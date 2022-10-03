import React from 'react'
import { useState } from "react";
import { BsBellFill } from "react-icons/bs"
import Profile from "../ProfileComponent/Profile"
import Notifications from "react-notifications-menu";

import './Navbar.css';


const DEFAULT_NOTIFICATION = {
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago"
};


function Navbar() {


const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  const [message, setMessage] = useState("");

  const onClick = () => {
    if (message.length > 0) {
      setData([
        ...data,
        {
          ...DEFAULT_NOTIFICATION,
          message
        }
      ]);
      setMessage("");
      alert("notification added");
    }
  };



   return (
<>
         <div class="navbar">
   
         <a href="#profile" class="right">
            
            <icon>
                  
                  
               </icon>
               
            
         </a>
         <a href="#notification" class="right notification ">
             

                <div style={{ marginLeft: "50%" }}>
                    <Notifications
                      data={data}
                      header={{
                        title: "Notifications",
                        option: { text: "View All", onClick: () => console.log("Clicked") }
                      }}
                      markAsRead={(data) => {
                        console.log(data);
                      }}
                    />
                  </div>
            </a>
            
         
         </div>
         <Profile />
         
      </>
      
   );
}




export default Navbar;