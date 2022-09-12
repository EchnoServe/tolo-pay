import styled from 'styled-components'

export const LoginPageComponent  = styled.div`
    display: flex;
    align-items: center;
    background-color: #fcfff7;
    border: 2px solid orange;
    width: 90%;
    margin: 5px;
    
    @media (max-width: 1080px) {
        justify-content: center;
        align-items: flex-end;
    }
`;