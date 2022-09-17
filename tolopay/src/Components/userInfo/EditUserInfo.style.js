import styled from "styled-components";
import { UserInfoItems } from "./UserInfo.style";

export const EditProfilePic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3F3E3E80;
    border-radius: 3px;
    background-color: white;
    width: 54px;
    height: 30px;
    margin-bottom: 12px;
    margin-right: 6px;
    padding: 2px;

    @media (max-width: 900px){
        ${UserInfoItems}{
            flex-direction: column;
        }
        
    }
`;

export const EditFullName = styled.input`
    /* display: flex;
    align-items: center; */
    /* justify-content: ; */
    height: 42px;
    width: 300px;
    &::placeholder {
        font-size: 27px;
    }
`;

export const EditValue = styled.input`
    height: 30px;
    width: 150px;
    margin-left: 9px;

    &::placeholder {
        font-size: 15px;
    }
`;