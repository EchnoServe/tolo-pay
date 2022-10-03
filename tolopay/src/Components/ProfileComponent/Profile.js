/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';

import { logoutSVG } from "../../Assets";
// import { editsSVG } from "../../Assets";
// import { questionSVG } from "../../Assets";

import { userSVG } from "../../Assets";
import { envelopeSVG } from "../../Assets";
import './Profile.css';

import React, {useState, useEffect, useRef,useContext} from 'react';
import { Link } from "react-router-dom";

import { Context } from "./../../context/Context";

function ProfileComponent() {

  const [open, setOpen] = useState(false);
  const { user } = useContext(Context);


  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
 
  return (
    <div className="dropdown-menus">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={userSVG}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{user?.data.user.name}</h3>
          <ul>
            <Link to={"/profile"} >                                                                                             
              <DropdownItem img = {userSVG} text = {"My Profile"}/>
            </Link>
          
            <div onClick = {()=>{window.location.replace("/login")}}>
            <DropdownItem  img = {logoutSVG} text = {"Logout"} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default ProfileComponent;
