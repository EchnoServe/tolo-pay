import React, { useState } from 'react'
import styled from 'styled-components'
import EditUserInfo from './../Components/userInfo/EditUserInfo'
import UserInfo from './../Components/userInfo/UserInfo'
import UserStatus from './../Components/userStatus/UserStatus'

const UserStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px dotted green;
  width: 100vw;

  @media screen and (min-width: 776px) {
    margin-left: 110px;
    width: calc(100vw - 110px);
  }
`;

const Profile = styled.div`
  width: inherit;
  // border: 2px solid orange;

  @media screen and (min-width: 776px) {
    width: calc(100vw - 110px);
  }

  // @media screen and (min-width: 400px){
  //   width: 99vw;
  // }
`;

const EditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: calc(100vh - 80px);
  // border: 2px solid blue;

  @media screen and (min-width: 400px){
    width: 99%;
  }
  @media screen and (min-width: 768px){
    width: 75%;
  }
  @media screen and (min-width: 1280px){
    width: 70%;
  }
`;

// responsible for profile section of the app
const UserProfile = () => {

    const [editState, changeEditState] = useState(false)
    const handleChange = value => {
        changeEditState(value);
    }

  return (<UserStyle>
    {
      editState === false ?
      <Profile>
          
          <UserInfo editState={editState} onChange={handleChange} /> 
          
          <div style={{borderTop: '1px solid #90909060' , width: 900}}></div>
          
          <UserStatus />

      </Profile> 
      :
      <EditProfile>
        <EditUserInfo editState={editState} onChange={handleChange}/>
      </EditProfile>
    }
    </UserStyle>
  )
}


export default UserProfile