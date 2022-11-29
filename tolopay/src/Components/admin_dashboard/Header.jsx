import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, {useContext} from 'react';


import { Context } from "./../../context/Context";
const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;

  .mid{
    margin-left: 25px;
  }

  .img{
    height: 40px;
    width: 55px;
    border-radius: 50%;
    /* background-color: red; */
    margin-left: 8px;
  }

  .icon{
    color:rgba(41, 75, 90,0.8);
  }
  

  > div {
    display: flex;
    align-items: center;
    gap: 5px;
    color:rgba(41, 75, 90,0.9);
  }

  .status{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 5px;
    h6{
    color:rgba(58, 135, 190, 0.7);

    }
  }
   
  .nav-toggle {
    pointer-events: none;
    opacity: 0;
    @media (max-width: 920px) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

function Header({  title, file, toggle }) {

  const { user } = useContext(Context);
 
  return (
    <Grid>
      
      <div 
        className="nav-toggle"
        onClick={toggle}
        style={{ marginLeft: "-11px" }}
      >
        <MenuIcon/>
      </div>
      
      <div className="mid"><h1> </h1></div>
 
      {/* <div className="mid">  
      {title.map((t) => (
        <div key = {t.id}>
          <div>{t.name}</div>
        </div>
        ))}
      </div> */}

      <div>
        <DarkModeIcon className="icon"/>
        <LanguageIcon className="icon"/>
        <NotificationsIcon className="icon"/> 
        <img className="img" 
               src={
                 user.data.user.profileimage
                  ?`http://localhost:8000/${user.data.user.profileimage}`
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                 }
                 
                
                 alt=""
               />
                 
        <div className="status">
        <h5>{user?.data.user.name}</h5>
        <h6>online</h6>
        </div>
      </div>
    </Grid>
  );
}

export default Header;