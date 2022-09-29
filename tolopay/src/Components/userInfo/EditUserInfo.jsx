import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {MdOutlineCancel} from "react-icons/md";
import { Context } from "../../context/Context";
import { FormStyle } from "../commonStyles";
import { button1, gray80 } from "../../Utils/colors";
import { Loading } from "../commonStyles";
import { EditInfoContainer, EditProfilePic, KeyandValueInEdit,
     KeyInEdit, Form, Cancel } from './EditUserInfo.style';
import { EditProfileButton, ProfilePic } from './UserInfo.style';
import api from '../../api/api';




// A component that let's an already registered user change his/her credential.
const EditUserInfo = (props) => {

  const [ user, dispatch ] = useContext(Context);
  const navigate = useNavigate();

    // Loading Bar States
    const [loading, setLoading] = useState(false);

    const [pic, changePic] = useState(user.data.user.profilePic);

    const readyPic = event => {
      changePic(event.target.files[0].name);
    }

    const handleSubmit = value => {
        setLoading(value);
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
                
                
    <Formik initialValues={{email: "", file: ""}} 
    onSubmit={async (data, {setSubmitting}) => {
       
          try {
            // const formData = new FormData();
            // formData.append()
            handleSubmit(true);
      
            const res = await api.post("/profileImage", data.file);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
            navigate('/profile');
         
          } catch (error) {
            console.log(error)
            dispatch({ type: "FAILED" });
            handleSubmit(false);
          }
          
          setSubmitting(false);
        } } 
        
        validationSchema = {
        Yup.object().shape({
          email: Yup.string()
        .email("Please provide a valid email.")
        .required("email required"),
        })
        } >
        {
            props => {
      const {
        //vals,
       // touched,
       // errors,
       // isSubmitting,
       // handleChange,
       // handleBlur,
        handleSubmit
      } = props;

      return <Form>
                <ProfilePic pic={pic}  style={{width: 150, height: 150, 
                                    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    
                    <EditProfilePic name="file" type={'file'} accept={"image/png, image/jpeg"} placeholder='Change' onChange={readyPic}/>
                    
                </ProfilePic>
                    <KeyandValueInEdit>
                            <KeyInEdit>FullName:</KeyInEdit>
                            <FormStyle name="text" type={'text'} value={user.data.user.name} />
                    </KeyandValueInEdit>

                    {/* <KeyandValueInEdit>
                            <KeyInEdit>Account Id:</KeyInEdit>
                            <FormStyle type={'text'} value='maroon5' />
                    </KeyandValueInEdit> */}

                    <KeyandValueInEdit>
                            <KeyInEdit>Email:</KeyInEdit>
                            <FormStyle name="email" type={'email'} value={user.data.user.email} placeholder='name@example.com' />
                    </KeyandValueInEdit>

                    <EditProfileButton type="submit" outlineColor={button1} style={{backgroundColor: button1}} onClick={() => handleSubmit(true)}>
                            <p style={{color: 'white'}}>Save</p>
                    </EditProfileButton>
                </Form>
        }
    }
    </Formik>
    </EditInfoContainer>

                

    
  )
}

export default EditUserInfo