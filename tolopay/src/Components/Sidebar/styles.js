import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../Utils/variables";

export const SSidebar = styled.div`
    margin-top: -90px;
    z-index: 1000;
     width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
   
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};

    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
    @media(max-width: 776px){
        display: none;
        left: ${({ isOpen }) => (!isOpen ? `-110px` : 'auto')};
        
    }
   

    
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    // top: ${v.xxlSpacing};
    margin-top: 710px;
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-25px`)};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
    @media(max-width: 440px){
        width: 60px;
        height: 60px;
        top: ${v.xlSpacing};
        right: ${({ isOpen }) => (isOpen ? `-16px` : `-65px`)};
        font-size: 40px;
    }
`;

export const SLogo = styled.div`
    width: 60px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    
    margin-bottom: ${v.lgSpacing};
`;





export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 4px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
   
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    margin-top: ${v.xxlSpacing};
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    color: #00CE52;

    svg {
        font-size: 30px;
        
    }
    Icon{
        stroke-width: 3px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
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
export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

    position: relative;
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
