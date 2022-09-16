import React from 'react'
import { EditProfileButton, FullName, Key, KeyAndValue, ProfilePic, UserInfoContainer, UserInfoContents, UserInfoItems, Value } from './UserInfo.style'

const fontRoboto = "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";

const UserInfo = () => {
  return (
    <UserInfoContainer>

        <ProfilePic></ProfilePic>
        <UserInfoItems>
            
            <UserInfoContents>
                <FullName style={{fontFamily: fontRoboto, fontWeight: 'normal'}}>Molla Maru</FullName>
                <div>
                    <KeyAndValue email={false}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter'}}>Account Id:</Key>
                        <Value style={{fontFamily: fontRoboto}}>maroon5</Value>
                    </KeyAndValue>
                    <KeyAndValue email={true}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter'}}>email:</Key>
                        <Value style={{fontFamily: fontRoboto}}>maru.molla@gmail.com</Value>
                    </KeyAndValue>
                    
                </div>
            </UserInfoContents>
            <div style={{display: 'flex', alignItems: 'flex-end', height: 180, 
            // border: '1px solid green', 
            padding: 5}}>
                <EditProfileButton><p style={{fontFamily: fontRoboto}}>Edit Profile</p></EditProfileButton>
            </div>
           
        </UserInfoItems>
        
    </UserInfoContainer>
  )
}

export default UserInfo