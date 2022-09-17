import React, { useState } from 'react'
import EditUserInfo from '../../Components/userInfo/EditUserInfo'
import UserInfo from '../../Components/userInfo/UserInfo'
import UserStatus from '../../Components/userStatus/UserStatus'

const UserProfile = () => {

    const [editState, changeEditState] = useState(false)
    const handleChange = value => {
        changeEditState(value);
    }

  return (<div>
    {
      editState === false ?
      <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
          
          <UserInfo editState={editState} onChange={handleChange} /> 
          
          <div style={{borderTop: '1px solid #90909060' , width: 900}}></div>
          
          <UserStatus />

      </div>   
      :
      <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <EditUserInfo editState={editState} onChange={handleChange}/> 
      </div>
    }
    </div>
  )
}

export default UserProfile