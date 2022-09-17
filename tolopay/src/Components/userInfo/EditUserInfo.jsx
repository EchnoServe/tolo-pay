import React from 'react'
import { FormStyle } from '../commonStyles';
import { EditInfoContainer, EditProfilePic, KeyandValueInEdit, KeyInEdit } from './EditUserInfo.style'
import { EditProfileButton, ProfilePic } from './UserInfo.style'

const fontRoboto = "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";
const grayFontColor = '#3F3E3E';

const EditUserInfo = (props) => {

    const handleChange = () => {
        props.onChange(false)
    }

  return (
    <EditInfoContainer style={{width: 480, padding: 3, paddingBottom: 27, display: 'flex', flexDirection: 'column', border: '1px solid #90909040', borderRadius: 3}}>   

            <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'space-around', marginRight: -18, height: 400}}>
                
                <ProfilePic style={{width: 150, height: 150, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <EditProfilePic><p>Change</p></EditProfilePic>
                </ProfilePic>

                <div style={{height: 150, width: 400 ,display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <KeyandValueInEdit>
                            <KeyInEdit style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>FullName:</KeyInEdit>
                            <FormStyle type={'text'} value='Molla Maru' style={{fontFamily: fontRoboto, color: grayFontColor}} />
                    </KeyandValueInEdit>

                    <KeyandValueInEdit>
                            <KeyInEdit style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>Account Id:</KeyInEdit>
                            <FormStyle type={'text'} value='maroon5' style={{fontFamily: fontRoboto, color: grayFontColor}} />
                    </KeyandValueInEdit>

                    <KeyandValueInEdit>
                            <KeyInEdit style={{fontFamily: fontRoboto, fontWeight: 'lighter', color: grayFontColor}}>Email:</KeyInEdit>
                            <FormStyle type={'text'} value='maru.molla@gmail.com' placeholder='someone@example.com' style={{fontFamily: fontRoboto, color: grayFontColor}} />
                    </KeyandValueInEdit>
                </div>

            </div>  

        <div style={{display: 'flex', alignItems: 'flex-end', height: 180, padding: 5, marginTop: -100}}>

                <EditProfileButton outlineColor={"lightgreen"} style={{backgroundColor: 'lightgreen'}}>
                    <p style={{fontFamily: fontRoboto, color: 'white'}}>Save</p>
                </EditProfileButton>

                <EditProfileButton borderColor={"#3F3E3E80"} onClick={handleChange}>
                    <p style={{fontFamily: fontRoboto, color: grayFontColor}}>Cancel</p>
                </EditProfileButton>
            
        </div>

    </EditInfoContainer>
  )
}

export default EditUserInfo