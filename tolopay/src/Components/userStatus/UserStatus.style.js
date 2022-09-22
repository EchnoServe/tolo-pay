import styled from "styled-components";

const medium = '776px';

export const Key = styled.p`
    border-bottom: 1px solid #3f3e3e30;
    border-right: 1px solid #3f3e3e30;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    /* width: 300px; */
    height: 100%;
    font-size: 21px;
    padding-left: 10px;
    /* padding-bottom: 2px; */
`;
export const Value = styled.p`
    border-bottom: 1px solid;
    border-color: #3f3e3e30;
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
    /* border: 1px solid orange; */
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
    width: inherit;
    padding-left: 30px;
    padding-right: 15px;
    margin-top: 42px;

    @media screen and  (min-width: ${medium}){
        ${KeyAndValue} {
            height: 99px;
        }
        padding-left: 72px;
    }
`;