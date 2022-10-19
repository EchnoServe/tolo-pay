import styled from "styled-components";
import Logo from "./navbar/Logo";
import NavLink from "./navbar/NavLinks";
import NavLinksGroup from "./navbar/NavLinksGroup";
import { useState } from "react";
import NavToggle from "./navbar/NavToggle";
import Backdrop from "./navbar/Backdrop";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledNav = styled.nav`

/* nav bar background-color */

  background-color: #000000e1;
  width: ${(p) => (p.compact ? "70px" : "256px")};
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  overflow: hidden;
  &::before {
    content: "";
    /* side bar top color */
    background-color: rgba(58, 135, 190, 0.2);
    /* background-color: #3f7696e1; */

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: 920px) {
    position: fixed;
    width: 256px;
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(256px - 256px*2)"},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav compact={compact} {...props}>
        <Logo compact={compact} />
        <NavLinksGroup title={props.title} compact={compact} />
        <NavLink
          compact={compact}
          to="/profile"
          iconClassName={<AdminPanelSettingsIcon/>}
          label="Profile"
        />
        <NavLink
          compact={compact}
          to="/logout"
          iconClassName={<LogoutIcon/>}
          label="Logout"
        />
        <NavToggle compact={compact} setCompact={setCompact} />
      </StyledNav>
    </>
  );
}

export default Navbar;