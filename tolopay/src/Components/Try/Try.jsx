import React, { useState } from "react";
import styled from "styled-components";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {Tab,Box }from '@mui/material'
import Edit from "./Edit";
import ChangePassword from "./ChangePassword";
import Budget from "../../Pages/budget_page/Budget";
 

function Try() {
   const [file, setFile] = useState("");
   const [value, setValue] = useState('1')
   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
   }




  return (
    
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Profile> 

            <div className='containImg'>
            <div className='pic'>
                <div className='img'> 
               {/* <img 
               src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                 }
                 alt=""
               /> */}
            </div>
                <div className="changeImg"><CameraAltIcon/></div>
            </div>
            <Name>Sumeya Ibrahim</Name>
            <Phone>0910602110</Phone>
            </div>

            <div className='info'>
            <div><p>Current balance</p></div>
            <p>300</p>
            </div>

            <div className='info'>
            <div><p>Points earned</p></div>
            <p>7</p>            
            </div>

            <div className='info'>
            <div><p>Transfers</p></div>
            <p>89</p>

            </div>

            <div className='info NoBorder'>
            <div><p>Balance</p></div>
            <p>399</p>
            </div>
            

            </Profile>
          
          </ColumnOne1>

          <ColumnTwo1>
             <Setting>
                {/* <Title>Account Setting</Title> */}
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: "divider"}}>

                    <TabList textColor="red" 
                             TabIndicatorProps={{sx: {backgroundColor: 'rgb(70, 131, 60)'}}} 
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
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  /* border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem; */
  margin: 1rem 4rem 1rem 4rem;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */

`;

const SubContainer = styled.div`
  /* margin: 0.5rem 0; */
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

 
 
 
 

 


const Profile = styled.div`
  height: 100%;
  width: 14rem;
  background-color: rgba(70, 131, 60,0.2);
  color: #000;
  transition: 0.4s ease-in-out;
  border: 2px solid  rgba(70, 131, 60,0.5);
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
            border-bottom: 2px solid rgba(70, 131, 60,0.5);
    }

    .img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: red;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

         
    }

    .changeImg{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        margin-top: -35px;
        margin-left: 70px;
        color: rgb(70, 131, 60);
    }

    .info{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding: 15px;
        margin: 0;
        /* background-color: red; */
        border-bottom: 2px solid rgba(70, 131, 60,0.5);  
        
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
  color:   rgba(0, 0, 0, 0.4);
`
;


const Setting = styled.div`
  height: 100%;
  background-color:rgba(70, 131, 60,0.2);
  /* margin-bottom: 10px; */
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;
  border: 2px solid rgba(70, 131, 60,0.5);  
  border-radius: 10px;

  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
padding: 1rem;
font-size: 15px;
font-weight: 300;

`;








export default Try;