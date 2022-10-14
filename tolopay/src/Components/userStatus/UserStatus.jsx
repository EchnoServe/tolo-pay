import React from 'react'
import { Key, KeyAndValue, UserStatusContainer, Value, Status } from './UserStatus.style'


// displays selected user status - current balance and total transaction (UI only not functional)
const UserStatus = () => {
  return (
    <UserStatusContainer>

        <Status>
          <div style={{display: 'flex', flexDirection: 'column', margin: 5}}>

            <p style={{fontSize: 30, marginBottom: 10}}>Status</p>
            
          <div style={{borderTop: '1px solid #90909050', width: 72}}></div>

          </div>
        </Status>
          

      <KeyAndValue>
        <Key>Balance</Key>
        <Value>$200</Value>
      </KeyAndValue> 

      <KeyAndValue>
        <Key>Total Transaction</Key>
        <Value>123</Value>
      </KeyAndValue>

    </UserStatusContainer>
  )
}

export default UserStatus