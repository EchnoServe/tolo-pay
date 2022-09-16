import React from 'react'
import UserInfo from '../../Components/userInfo/UserInfo'
import UserStatus from '../../Components/userStatus/UserStatus'

const UserProfile = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <UserInfo />
        <div style={{borderTop: '1px solid #90909060' , width: 999}}></div>
        <UserStatus />
    </div>
  )
}

export default UserProfile