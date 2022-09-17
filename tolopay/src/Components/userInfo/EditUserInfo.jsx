import React from 'react'
import { EditFullName, EditProfilePic, EditValue } from './EditUserInfo.style'
import { EditProfileButton, Key, KeyAndValue, ProfilePic, UserInfoContainer, UserInfoContents, UserInfoItems, Value } from './UserInfo.style'

const fontRoboto = "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";
const grayFontColor = '#3F3E3E';

const EditUserInfo = (props) => {

    const handleChange = () => {
        props.onChange(false)
    }

  return (
    <UserInfoContainer>
        <ProfilePic style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <EditProfilePic><p>Change</p></EditProfilePic>
        </ProfilePic>

        <UserInfoItems>
            
            <UserInfoContents>
                <EditFullName type={'text'} value='Molla Maru' style={{fontFamily: fontRoboto, fontWeight: 'normal', color: grayFontColor}} />
                
                <KeyAndValue email={false}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>Account Id:</Key>
                        <EditValue type={'text'} value='maroon5' style={{fontFamily: fontRoboto, color: grayFontColor}} />
                    </KeyAndValue>
                    <KeyAndValue email={true}>
                        <Key style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>email:</Key>
                        <EditValue type={'text'} value='maru.molla@gmail.com' placeholder='someone@example.com' style={{fontFamily: fontRoboto, color: grayFontColor}} />
                    </KeyAndValue>
            </UserInfoContents>

            <div style={{display: 'flex', alignItems: 'flex-end', height: 180, 
            // border: '1px solid green', 
            padding: 5}}>
                <EditProfileButton outlineColor={"lightgreen"} style={{backgroundColor: 'lightgreen'}}><p style={{fontFamily: fontRoboto, color: 'white'}}>Save</p></EditProfileButton>
                <EditProfileButton borderColor={"#3F3E3E80"} onClick={handleChange}><p style={{fontFamily: fontRoboto, color: grayFontColor}}>Cancel</p></EditProfileButton>
            </div>
            
           
        </UserInfoItems>
    </UserInfoContainer>
  )
}

export default EditUserInfo