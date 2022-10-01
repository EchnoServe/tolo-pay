import styled from "styled-components";

const medium = '776px';

export const Status = styled.div`
    display: flex;
     justify-content: flex-start; 
     width: inherit;
     padding-left: 9px;
`;

export const Key = styled.p`
    border-bottom: 1px solid #3f3e3e20;
    border-right: 1px solid #3f3e3e20;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    font-size: 21px;
    padding-left: 10px;
`;
export const Value = styled.p`
    border-bottom: 1px solid;
    border-color: #3f3e3e20;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 21px;
    padding-left: 9px;
    width: 111px;
    height: 100%;
`;

export const KeyAndValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%; 
    height: 72px;
    padding: 5px;

    &:hover ${Key},&:hover ${Value} {
        border-color: #3f3e3e60;
        font-size: 24px;
        font-weight: 493;
    }
    
`;

export const UserStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    margin-top: 42px;
    margin: 12px;

    @media screen and  (min-width: ${medium}){
        ${KeyAndValue} {
            height: 99px;
            width: ${medium};
        }
        ${Status} {
            width: ${medium};
        }
        margin: 21px;
    }
`;