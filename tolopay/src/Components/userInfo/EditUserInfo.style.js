import styled from "styled-components";


export const EditInfoContainer
 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 450px;
    margin: 5px;
    padding: 1px;
    
    border: 1px solid #90909040; 
    border-radius: 3px;

    @media screen and (min-height: 1000px){
        height: 540px;
        width: 400px;
    }

`;

export const ItemsToEdit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 400px;
`;

export const Form = styled.div`
// flex-grow: 1;
// border: 1px solid gainsboro;
    height: 250px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 3px;
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

export const Cancel = styled.div`
display: flex; 
justify-content: flex-end;
width: 100%;
margin-top: 1px;
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
