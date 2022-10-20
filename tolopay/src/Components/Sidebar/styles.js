import { Link } from "react-router-dom";
import styled from "styled-components";

import { v,Colors } from "../../Utils/variables";


//sidebar container style
export const SSidebar = styled.div`
    margin-top: -7px;
    
    z-index: 4000;
    
    width: 52px;
   
     background: ${({ theme }) => theme.bg};
    
    height: 100vh;
    padding: ${v.lgSpacing};
    overflow: hidden;
    
    position: fixed;
    border-right: 1px solid #f0f0f0;
    
    
    
  &:hover{
//   width: ${({ isOpen }) => (!isOpen ? `300px` : `-150px`)};
     width: 200px;
     opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: .9s ease;
    z-index: 10000;
  }
    @media(max-width: 776px){
        display: none;
        left: ${({ isOpen }) => (!isOpen ? `-110px` : 'auto')};
        
    }
   

    
`;


//logo style
export const SLogo = styled.div`
    
    margin-top: -30px;
    width: 252px;
    margin-left: -50px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    padding-top: 15px;
    margin-bottom: ${v.lgSpacing};
`;




//sidebar div divider style
export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
// sidebar link container
export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` :Colors.accentColor)};
    color: ${({ theme, isActive }) => (!isActive ? `#000` : `#fff`)};
    border-radius: ${v.borderRadius};
    margin-left: -30px;
    

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
   
`;
//sidebar link style
export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    color: inherit;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    font-family: sans-serif;
    padding: calc(${v.smSpacing} - 2px) 0;
    margin-top: ${v.xxlSpacing};

`;
// sidebar link icon styling
export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    // color: #00CE52;
    color: ${Colors.primaryColor};
    
   

    svg {
        font-size: 40px;
        
    }
    Icon{
        stroke-width: 3px;
    }
    &:hover{
    animation: pulse 1.5s infinite;
   transition: .2s;
    }
`;
//name of link
export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    // margin-left: ${v.smSpacing};
    padding-left: 25px;
    font-size: 1.1em;
    brightness(200%);
`;



export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;
export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SToggleThumb = styled.div`
    height: 20px;
    width: 20px;
    position: absolute;
    top: 1px;
    
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;
