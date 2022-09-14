import React, { useContext, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    
    SLogo,
    
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";
import { BiTransferAlt } from "react-icons/bi";
import {SiSamsungpay} from "react-icons/si"
import {
    
    
    AiOutlineLeft,
    AiFillHome,
    AiFillSetting
    
} from "react-icons/ai";



import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <AiFillHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "Transfer",
        icon: <BiTransferAlt />,
        to: "/transfer",
        notification: 0,
    },
    {
        label: "PayBill",
        icon: <SiSamsungpay />,
        to: "/paybill",
        notification: 0,
    },
    {
        label: "Setting",
        icon: <AiFillSetting />,
        to: "/setting",
        notification: 0,
    },
];



export default Sidebar;
