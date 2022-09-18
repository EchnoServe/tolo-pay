import React from 'react'
import { EditProfileButton, FullName, Key, KeyAndValue, ProfilePic, UserInfoContainer, UserInfoContents, UserInfoItems, Value } from './UserInfo.style'

const fontRoboto = "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";
const grayFontColor = '#3F3E3E';

const UserInfo = (props) => {

    const handleChange = () => {
        props.onChange(true)
    }

  return (
    <UserInfoContainer>

        <ProfilePic />
        <UserInfoItems>
            
            <UserInfoContents>
                <FullName style={{fontFamily: fontRoboto, fontWeight: 'normal', color: grayFontColor}}>Molla Maru</FullName>
                <div>
                    <KeyAndValue email={false}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>Account Id:</Key>
                        <Value style={{fontFamily: fontRoboto, color: grayFontColor}}>maroon5</Value>
                    </KeyAndValue>
                    <KeyAndValue email={true}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>email:</Key>
                        <Value style={{fontFamily: fontRoboto, color: grayFontColor}}>maru.molla@gmail.com</Value>
                    </KeyAndValue>
                    
                </div>
            </UserInfoContents>
            <div style={{display: 'flex', alignItems: 'flex-end', height: 180, 
            // border: '1px solid green', 
            padding: 5}}>
                <EditProfileButton borderColor={"#3F3E3E80"} onClick={handleChange} ><p style={{fontFamily: fontRoboto, color: grayFontColor}}>Edit Profile</p></EditProfileButton>
            </div>
           
        </UserInfoItems>
        
    </UserInfoContainer>
  )
}

export default UserInfo