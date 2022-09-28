import React, { useState } from 'react';
import {MdOutlineCancel} from "react-icons/md";
import { FormStyle } from '../commonStyles';
import { button1, gray80 } from "../../Utils/colors";
import { Loading } from "../commonStyles";
import { EditInfoContainer, EditProfilePic, KeyandValueInEdit,
     KeyInEdit, Form, Cancel } from './EditUserInfo.style';
import { EditProfileButton, ProfilePic } from './UserInfo.style';



// A component that let's an already registered user change his/her credential.
const EditUserInfo = (props) => {

    // Loading Bar States
    const [loading, setLoading] = useState(false);

    const handleSubmit = value => {
        setLoading(true);
    }

    const handleChange = () => {
        props.onChange(false)
    }

  return (
    <EditInfoContainer>
            {
                loading ? 
                <Loading >
                    <div className='loaderBar'></div>
                </Loading>
                : ''
            }
                
                <Cancel>
                    <div onClick={handleChange} style={{cursor: 'pointer'}}>
                        <MdOutlineCancel style={{fontSize: 33, color: gray80}}/>
                    </div>
                        
                </Cancel>
                
                <ProfilePic style={{width: 150, height: 150, 
                                    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    
                    {/* <EditProfilePic><p>Change</p></EditProfilePic> */}
                    
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

                    <EditProfileButton outlineColor={button1} style={{backgroundColor: button1}} onClick={() => handleSubmit(true)}>
                            <p style={{color: 'white'}}>Save</p>
                    </EditProfileButton>
                </Form>

    </EditInfoContainer>
  )
}

export default EditUserInfo