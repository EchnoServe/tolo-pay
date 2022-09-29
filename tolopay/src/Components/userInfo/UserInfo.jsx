import React, {useContext} from 'react';
import { Context } from "../../context/Context";
// import { button1 } from "../../Utils/colors";
import { EditProfileButton, FullName, Key, KeyAndValue, ProfilePic, 
    UserInfoContainer, UserInfoContents, UserInfoItems, Value } from './UserInfo.style';


// displays profile pic and user information
const UserInfo = (props) => {

    const { user } = useContext(Context);

    const handleChange = () => {
        props.onChange(true)
    }

  return (
    <UserInfoContainer>

        <ProfilePic pic={user.data.user.profilePic ? user.data.user.profilePic : user.data.user.name[0]}/>

        <UserInfoItems>
            
            <UserInfoContents>
                <FullName>{user.data.user.name}</FullName>
                <div>
                
                    <KeyAndValue email={false}>
                        <Key>Account Id:</Key>
                        <Value>maroon5</Value>
                    </KeyAndValue>

                    <KeyAndValue email={true}>
                        <Key>email:</Key>
                        <Value>{user.data.user.email}</Value>
                    </KeyAndValue>
                    
                </div>
            </UserInfoContents>

            <div style={{display: 'flex', alignItems: 'flex-end', height: 180, 
            // border: '1px solid green', 
            padding: 5}}>

                <EditProfileButton borderColor={"#3F3E3E80"} onClick={handleChange} >
                    <p>Edit Profile</p>
                </EditProfileButton>

            </div>
           
        </UserInfoItems>
        
    </UserInfoContainer>
  )
}

export default UserInfo