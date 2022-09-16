import styled from "styled-components";

export const UserStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 81%;
    margin-top: 42px;
`;

export const KeyAndValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 60px;
    /* border: 1px solid orange; */
    padding: 5px;

    @media (min-width: 762px){
        height: 99px;
    }
`;

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
    justify-content: center;
    align-items: center;
    font-size: 21px;
    padding-left: 9px;
    width: 111px;
    height: 100%;
`;