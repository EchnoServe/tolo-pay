import React, { useState } from 'react'
import EditUserInfo from '../../Components/userInfo/EditUserInfo'
import UserInfo from '../../Components/userInfo/UserInfo'
import UserStatus from '../../Components/userStatus/UserStatus'

const UserProfile = () => {

    const [editState, changeEditState] = useState(false)
    const handleChange = value => {
        changeEditState(value);
    }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        { editState === false ? 
        <UserInfo  onChange={handleChange} /> 
        : <EditUserInfo  onChange={handleChange}/>}
        <div style={{borderTop: '1px solid #90909060' , width: 900}}></div>
        <UserStatus />
    </div>
  )
}

export default UserProfile