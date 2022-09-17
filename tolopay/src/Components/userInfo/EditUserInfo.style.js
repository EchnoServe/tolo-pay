import styled from "styled-components";

export const EditInfoContainer
 = styled.div`
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

export const KeyandValueInEdit = styled.div`
    display: flex;
    align-items: center; 
    width: 350px; 
    height: 30px; 
`;
export const KeyInEdit = styled.p`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 121px;
    height: 30px;
    font-size: 12px;
    padding-bottom: 2px;
`;

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
    cursor: pointer;

    &:hover {
        border: none;
        outline: #3F3E3E80 solid 1px;
        & p {
            font-weight: 600;
        }
        
    }
`;
