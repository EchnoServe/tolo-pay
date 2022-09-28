import React, { useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    
    SLogo,
    
    SSidebar,
    
    STheme,
    SThemeLabel,
    
    
} from "./styles";
import { MdQrCodeScanner } from "react-icons/md";
import { logofSVG } from "../../Assets";
import { BiTransferAlt } from "react-icons/bi";

import { Icon } from '@iconify/react';
import {
    
    
    // AiOutlineLeft,
    AiFillHome,
    // AiFillSetting
    
} from "react-icons/ai";




import { useLocation } from "react-router-dom";

const Sidebar = () => {
    
    
    const [sidebarOpen] = useState(false);
    const { pathname } = useLocation();

    

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                {/* <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton> */}
            </>
            <SLogo>
                <img src={logofSVG} alt="logo" />
            </SLogo>
            
            <SDivider />
            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} >
                        <SLinkIcon>{icon}</SLinkIcon>
                    
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                
                            </>
                        
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                {/* <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler> */}
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Dashboard",
        icon: <AiFillHome />,
        to: "/",
        
    },
    {
        label: "Transfer",
        icon: <BiTransferAlt />,
        to: "/transfer",
        
    },
    
    {
        label: "Planning",
        icon: <Icon icon="arcticons:budgetmylife" />,
        to: "/planning",
        
    },
    {
        label: "Qrcode",
        icon: <MdQrCodeScanner />,
        to: "/qr",
        
    },
];



export default Sidebar;
