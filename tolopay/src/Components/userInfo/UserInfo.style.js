import styled from 'styled-components'
import { EditProfilePic } from './EditUserInfo.style';

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96%;
    height: 50%;
    // border: 1px solid olive;
    margin: 5px;
    padding: 15px;

    @media (min-width: 700px) {
        width: 81%;
        
    }
    @media (min-width: 500px){
        width: 90%;
    }
`;

export const ProfilePic = styled.div`
    border: 1px solid gray;
    background-color: lightgreen;
    border-radius: 50%;
    width: 99px;
    height: 99px;
    margin: 5;

    &:hover {
        cursor: pointer;
        ${EditProfilePic}{
            background-color: #f4fdf4;
            border: none;
            outline: #3F3E3E80 solid 1px;
        }
        ${EditProfilePic} p {
            font-weight: bold;
        }
    }

    @media (min-width: 762px){
        width: 150px;
        height: 150px;
    }
`;
export const UserInfoItems = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 72%;
    height: 210px;
    padding: 6px;
`;

export const UserInfoContents = styled.div`
border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 360px;
    height: 150px;
    margin-left: 18px;
    

    @media (min-width: 550px){
        margin-right: 42px;
    }
    
    @media (min-width: 762px){
        justify-content: space-around;
        margin-right: 90px;
    }
    @media (min-width: 1000px){
        margin-right: 180px;
    }
`;

export const FullName = styled.p`
    font-size: 30px;
    
    margin-left: 1px;

    @media (min-width: 762px){
        margin-left: 21px;
        margin-bottom: 18px;
        font-size: 50px;
    }
`;

export const KeyAndValue = styled.div`
    
    display: flex;
    align-items: center; 
    width: 150px; 
    height: 30px; 

    
    @media (max-width: 762px){
        ${(props) => (props.email === true ? "display: none;" : "visibility: visible;") }
    }
    @media (min-width: 762px){
        width: 330px; 
    }
`;

export const Key = styled.p`
    /* border: 1px solid brown; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 99px;
    height: 30px;
    font-size: 12px;
    padding-bottom: 2px;

    @media (min-width: 762px){
        font-size: 15px;
        width: 120px;
    }
`;
export const Value = styled.p`
    /* border: 1px solid yellow; */
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    padding-left: 9px;
    width: 150px;
    height: 30px;

    @media (min-width: 762px){
        font-size: 21px;
        width: 300px;
    }
`;

export const EditProfileButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ (props) => (props.borderColor ? props.borderColor  : "transparent" )};
    border-radius: 6px;
    width: 99px;
    height: 30px;
    padding: 6px;
    margin: 3px;
    cursor: pointer;

    &:hover {
        border: none;
        outline: ${(props) => (props.outlineColor ? props.outlineColor : "#3F3E3E80")} solid 1px;
        background-color: ${(props) => (props.outlineColor ? props.outlineColor : "#90909010")};
    }
`;

