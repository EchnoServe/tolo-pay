import styled from "styled-components";
import NavLink from "./NavLinks";
// import { CgMenuRight } from "react-icons/cg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
// import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import HistoryIcon from '@mui/icons-material/History';

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${p => Number(!p.compact)};
  padding: 24px 0 14px 0;
  margin-right: 2px;
  overflow: hidden;
  overflow-y: auto;
  /* inner nav bar background color */
  background-color:  rgba(58, 135, 190, 0.1);
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  @media(max-width: 920px) {
      flex-grow: 1;
  }
`;

const DenseNavLinks = styled(NavLink)`
  && {
    box-shadow: none;
    min-height: 36px;
  }
`;

const links = [
  {
    to: "/dashboard",
    icon: <DashboardIcon className="i"/>,
    label: "Dashboard",
  },
  {
    to: "/transfer",
    icon: <CurrencyExchangeIcon className="i"/>,
    label: "Transfer",
  },
  {
    to: "/budget",
    icon: <DonutSmallIcon className="i" />,
    label: "Budget and Planning",
  },
  {
    to: "/qr",
    icon: <QrCodeScannerIcon className="i"/>,
    label: "QR Payment",
  },
  {
    to: "/history",
    icon: <HistoryIcon className="i" />,
    label: "History",
  },
];

function NavLinksGroup(props) {
  return (
    <LinksGroup {...props}>
      {links.map((l) => (
        <DenseNavLinks
          compact={props.compact}
          key={l.to}
          to={l.to}
          iconClassName={l.icon}
          label={l.label}
          
        />
      ))}
    </LinksGroup>
  );
}

export default NavLinksGroup;