import { Link } from "react-router-dom";
import styled from "styled-components";

import { v } from "../../Utils/variables";


//sidebar container style
export const SSidebar = styled.div`
    margin-top: 0;
    z-index: 1000;
    //  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    width: 110px;
   
     background: ${({ theme }) => theme.bg};
    
    height: 100vh;
    padding: ${v.lgSpacing};
    overflow: hidden;
    
    position: fixed;
    
    
    
  &:hover{
//   width: ${({ isOpen }) => (!isOpen ? `300px` : `-150px`)};
     width: 250px;
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
//   margin-top: 100px;
    width: 60px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    
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
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : `#41d3fe`)};
    color: ${({ theme, isActive }) => (!isActive ? `#000` : `#fff`)};
    border-radius: ${v.borderRadius};
    margin: 4px 0;
    

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
    padding: calc(${v.smSpacing} - 2px) 0;
    margin-top: ${v.xxlSpacing};
`;
// sidebar link icon styling
export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    // color: #00CE52;
    color: #0049ff;
    
   

    svg {
        font-size: 30px;
        
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
// export const SThemeToggler = styled.button`
//     ${btnReset};
//     margin: 0 auto;
//     cursor: pointer;
//     width: 36px;
//     height: 20px;
//     border-radius: 10px;
//     background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

//     position: relative;
// `;

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
