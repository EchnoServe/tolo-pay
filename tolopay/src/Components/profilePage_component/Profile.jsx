import React from 'react'
import styled from 'styled-components'
import Try from '../Try/Try';
export default function Profile() {
  return (
    <Div>

     <Cover>
        <div className='changeCover'>hi</div>
    
     </Cover>
 

      <ProfileContainer>

        <Try/>
        {/* <div className="profile">
            <div className='containImg'>
            <div className='pic'>
                <div className='img'></div>
                <div className="changeImg"></div>
            </div>
            <h4>sumeya ibrahim</h4>
            <h5>0910602110</h5>
            </div>
            <div className='info'>
            <p>Balance</p>
            </div>
        </div>
        <div className="updateProfile">
            hello
        </div> */}
      </ProfileContainer>

    
    </Div>
  )
}

const Div = styled.div`
/* height: 100vh; */
width: 100%;
background-color: black;
`;

const Cover = styled.div`
height: 230px;
background-color: red;
position: relative;
display: flex;
align-items: flex-end;
justify-content: end;



.changeCover{
    width: 50px;
    height: 20px;
    background-color: green;
    position: absolute;
    top: -1px;
    margin: 20px 40px 20px 20px;
}

`;

const ProfileContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
position: absolute;
/* top: -1px; */
margin-top: -150px;
/* margin-right: 40px;
margin-left: 40px;
margin-bottom: 40px; */

@media screen and (max-width: 920px) {
    display: none;
    
}

/* .profile{
    width: 250px;
    height: 400px;
    background-color: yellow; */
    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; */
   

    /* .containImg{    
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            margin: 20px;
    } */

    /* .img{
       
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: red;
        position: relative;
    } */

    /* .changeImg{
        margin-top: 20px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: white; */
        /* padding: 4px; */
        /* position: absolute;
        top: -1px;
        left: 145px;
        margin-top: 90px;

    } */

    /* .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
        margin: 10px;
        border: 2px;

    } */





/* } */
.updateProfile{
    height: 400px;
    width: 820px;
    background-color: blue;
}
`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 70%;
margin-left: auto;
margin-right: auto;
background-color: green;


`;

