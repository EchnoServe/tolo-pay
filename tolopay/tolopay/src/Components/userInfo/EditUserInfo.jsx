import React from 'react'
import { FormStyle } from '../commonStyles';
import { EditInfoContainer, EditProfilePic, KeyandValueInEdit,
     KeyInEdit, ItemsToEdit, Form, SaveOrCancel } from './EditUserInfo.style'
import { EditProfileButton, ProfilePic } from './UserInfo.style'


// A component that let's an already registered user change his/her credential.
const EditUserInfo = (props) => {

    const handleChange = () => {
        props.onChange(false)
    }

  return (
    <EditInfoContainer>

            <ItemsToEdit>
                
                <ProfilePic style={{width: 150, height: 150, 
                                    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    
                    <EditProfilePic><p>Change</p></EditProfilePic>
                    
                </ProfilePic>

                <Form>
                    <KeyandValueInEdit>
                            <KeyInEdit>FullName:</KeyInEdit>
                            <FormStyle type={'text'} value='Molla Maru' />
                    </KeyandValueInEdit>

                    <KeyandValueInEdit>
                            <KeyInEdit>Account Id:</KeyInEdit>
                            <FormStyle type={'text'} value='maroon5' />
                    </KeyandValueInEdit>

                    <KeyandValueInEdit>
                            <KeyInEdit>Email:</KeyInEdit>
                            <FormStyle type={'text'} value='maru.molla@gmail.com' placeholder='name@example.com' />
                    </KeyandValueInEdit>
                </Form>

            </ItemsToEdit>

        <SaveOrCancel>

                <EditProfileButton outlineColor={"lightgreen"} style={{backgroundColor: 'lightgreen'}}>
                    <p>Save</p>
                </EditProfileButton>

                <EditProfileButton borderColor={"#3F3E3E80"} onClick={handleChange}>
                    <p>Cancel</p>
                </EditProfileButton>
            
        </SaveOrCancel>

    </EditInfoContainer>
  )
}

export default EditUserInfo