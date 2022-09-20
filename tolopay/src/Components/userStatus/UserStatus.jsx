import React from 'react'
import { Key, KeyAndValue, UserStatusContainer, Value } from './UserStatus.style'

const fontRoboto = "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";

const UserStatus = () => {
  return (
    <UserStatusContainer>
      <div style={{display: 'flex', flexDirection: 'column', margin: 5}}>
        <p style={{fontSize: 30, marginBottom: 10, color: '#3F3E3E', fontFamily: fontRoboto}}>Status</p>
        <div style={{borderTop: '1px solid #90909050', width: 72}}></div>
      </div>
      <KeyAndValue>
        <Key style={{color: '#3F3E3E', fontFamily: fontRoboto}}>Balance</Key>
        <Value style={{color: '#3F3E3E', fontFamily: fontRoboto}}>$200</Value>
      </KeyAndValue> 
      <KeyAndValue>
        <Key style={{color: '#3F3E3E', fontFamily: fontRoboto}}>Total Transaction</Key>
        <Value style={{color: '#3F3E3E', fontFamily: fontRoboto }}>123</Value>
      </KeyAndValue>
    </UserStatusContainer>
  )
}

export default UserStatus