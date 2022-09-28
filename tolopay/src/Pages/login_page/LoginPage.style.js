import styled from 'styled-components'

export const LoginPageComponent  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, #46833C -30%,#fff );
    border: 2px solid orange;
    height: 100vh;
    width: 100vw;
    // width: 90%;
    /* margin: 5px; */
    
    /* @media (max-width: 1080px) {
        justify-content: center;
        align-items: flex-end;
    } */
`;

export const Logo = styled.div`
    

    @media (min-width: 800px) {
    position: absolute;
    top: 10px;
    left: 20px;
    }
`;