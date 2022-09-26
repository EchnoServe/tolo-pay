import styled from 'styled-components';
// import { button1 } from "../../Utils/colors";

const medium = '776px';

export const ProfilePic = styled.div`
    border: 1px solid gray;
    background-color: lightgreen;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: 5;

    @media (min-width: ${medium}){
        width: 150px;
        height: 150px;
    }
`;
export const UserInfoItems = styled.div`
    /* border: 1px solid red;  */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50vw;
    height: 210px;
    padding: 6px;
`;

export const UserInfoContents = styled.div`
 /* border: 1px solid blue;  */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 360px;
    height: 150px;
    margin-left: 18px;
    

    @media (min-width: 400px){
        width: 300px;
        margin-right: 30px;
    }
    
`;

export const FullName = styled.p`
    font-size: 36px;
    
    margin-left: 1px;

    @media (min-width: ${medium}){
        margin-left: 21px;
        margin-bottom: 18px;
        font-size: 50px;
    }
`;

export const KeyAndValue = styled.div`  
    display: flex;
    align-items: center;
    width: 210px;
    height: 30px;

    
    @media (max-width: ${medium}){
        ${(props) => (props.email === true ? "display: none;" : "") }
    }
    @media (min-width: ${medium}){
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

    @media (min-width: ${medium}){
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

    @media (min-width: ${medium}){
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

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 50%;
    // border: 1px solid olive;
    margin: 5px;
    padding: 15px;

    @media screen and (max-width: ${medium}) {
        flex-direction: column;

        ${UserInfoContents},${UserInfoItems} {

            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        ${UserInfoItems} {
            margin-top: 15px;
            height: 100px;
        }
        
    }
`;
