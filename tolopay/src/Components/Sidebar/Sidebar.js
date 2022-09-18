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
import { MdQrCodeScanner } from "react-icons/md";
import { tologoSVG } from "../../Assets";
import { BiTransferAlt } from "react-icons/bi";
// import { SiSamsungpay } from "react-icons/si";
// import { MdShoppingCart } from "react-icons/md"
import { Icon } from '@iconify/react';
import {
    
    
    AiOutlineLeft,
    AiFillHome,
    // AiFillSetting
    
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
                <img src={tologoSVG} alt="logo" />
            </SLogo>
            
            <SDivider />
            {linksArray.map(({ icon, label, to }) => (
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
            <SDivider />
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
        to: "/dashboaard",
        
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
        to: "/setting",
        
    },
];



export default Sidebar;
