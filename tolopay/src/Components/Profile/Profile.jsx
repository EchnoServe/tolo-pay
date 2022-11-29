import React, { useState, useContext } from "react";
import styled from "styled-components";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {Tab,Box }from '@mui/material'
import Edit from "./Edit";
import ChangePassword from "./ChangePassword";
import { Context } from "../../context/Context";
import axios from 'axios';
 
 

function Profile({file,handle}) {
  const { user,dispatch ,token} = useContext(Context);
   const [value, setValue] = useState('1')
   const [image, setImage] = useState('')
   
   
   const handleChange = (event, newValue) => {
    setValue(newValue)
   }
  console.log(user)
  

  const handleImageChange = (e) => {
    console.log(e.target.files,"<<<<<<<<")
    setImage(e.target.files[0])
  }

  
  
  const handleFile = (e) => {
     
    //call the api
    const url = 'http://localhost:8000/api/v1/users/profileImage'

    const formData = new FormData()
    formData.append('profileimage', image)
    console.log(image,">>>>>>>")
    axios.post(url, formData,{
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  }).then(result => {
      console.log(result.data)
       
       dispatch({ type: "UPDATE_SUCCESS", payload: result.data });
      
    })
      .catch(error => {
        
        console.log(error)
      })
  }
  
  
  return (
     
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Profilee> 

            <div className='containImg'>
            <div className='pic'>
                <div className='img'> 
               <img 
               src={
                 user.data.user.profileimage
                  ?`http://localhost:8000/${user.data.user.profileimage}`
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                 }
                 
                
                 alt=""
               />
               
            </div>
                <div className="changeImg" ><label htmlFor="file"><CameraAltIcon/></label></div>
                <Button onClick={handleFile}>UPLOAD</Button>
                
                <input type="file" id="file" onChange={handleImageChange} style={{display: "none"}}/>
            </div> 
            
            <Name>{user.data.user.name}</Name>
            <Phone>{user.data.user.phoneNumber ? user.data.user.phoneNumber : ''}</Phone>
            </div>

            <div className='info'>
            <div><p>Current balance</p></div>
            <p>{user.data.user.balance}</p>
            </div>

            <div className='info'>
            <div><p>Points earned</p></div>
            <p>0</p>            
            </div>

            {/* <div className='info'>
            <div><p>Transfers</p></div>
            <p>89</p>

            </div> */}

            <div className='info NoBorder'>
            <div><p>Account ID</p></div>
            <p>{user.data.user.account_number}</p>
            </div>
            

            </Profilee>
          
          </ColumnOne1>

          <ColumnTwo1>
             <Setting>
                {/* <Title>Account Setting</Title> */}
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: "divider"}}>

                    <TabList  
                              
                             aria-label="Tabs example" onChange={handleChange}
                    >

                     <Tab  label = 'Account Setting' value = '1'/>
                     <Tab  color="gray" label = 'Change password' value = '2'/>
  
                    </TabList>
                    </Box>

                    <TabPanel value="1"><Edit/></TabPanel>
                    <TabPanel value="2"><ChangePassword/></TabPanel>
                
                </TabContext>
             </Setting>
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 1rem 4rem 1rem 4rem;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 1rem 0;
  }
`;
const Button = styled.button`
margin-top: 16px;
border-radius: 4px;
border: none;
width: 100px;
height:30px;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 8px 12px;
margin-left: 0;
font-size: 12px;
font-weight: 400;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`
const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
 

`;

const SubContainer = styled.div`
  
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

 
 
 
 

 


const Profilee = styled.div`
  height: 100%;
  width: 14rem;
  background-color: rgba(58, 135, 190, 0.2);
  color: #000;
  transition: 0.4s ease-in-out;
  border: 1px solid   rgba(58, 135, 190, 0.3);
  border-radius: 10px;

  p{
          font-size: 14px;
          text-decoration: none;
          font-weight: 400;
        
        }
 
 


 

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
    .containImg{  

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            padding-bottom: 25px;
            padding-top: 15px;
            margin-top: 5px;
            margin: 0;
            border-bottom: 1px solid  rgba(58, 135, 190, 0.3);
    }

    .img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        /* background-color:  rgb(58, 135, 190); */
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

         
    }

    .changeImg{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        padding-top: 5px;
        padding-left: 1px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        margin-top: -35px;
        margin-left: 70px;
        color:  rgb(58, 135, 190);
    }

    .info{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding: 15px;
        margin: 0;
        
        border-bottom: 1px solid rgba(58, 135, 190, 0.3);  
        
    }

    .NoBorder{
      border: none;
    }

`;

const Name  = styled.h1`
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
`
;

const Phone  = styled.h1`
  font-size: 13px;
  text-decoration: none;
  font-weight: 600;
  color:rgba(0, 0, 0, 0.4);
`
;


const Setting = styled.div`
  height: 100%;
  background-color: rgba(58, 135, 190, 0.2);
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;
  border: 1px solid rgba(58, 135, 190, 0.3);  
  border-radius: 10px;

  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;

// const Title = styled.h1`
// padding: 1rem;
// font-size: 15px;
// font-weight: 300;
// `;

export default Profile;
