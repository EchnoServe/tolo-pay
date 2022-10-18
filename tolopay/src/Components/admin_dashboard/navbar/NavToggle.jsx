import { CgMenuRight } from "react-icons/cg";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Button = styled.button`
    background-color: transparent;
    border: none;
    min-height: 42px;
    color: rgba(255,255,255, .7);
    padding: 0 24px;
    box-shadow: 0 -1px 0 0 rgba(255 255 255 / 10%);
    text-align: ${p => p.compact ? 'center' : 'right'};
    .i{
        transition: transform 0.2s linear;
        transform: rotate(${p => p.compact ? "180deg" : "0deg"});
    }
    @media(max-width: 920px) {
        display: none;
    }
`;

function NavToggle(props) {
  return (
    <Button
      {...props}
      className="nav-toggle"
      onClick={() => props.setCompact(Number(!props.compact))}
    >
    <KeyboardDoubleArrowLeftIcon fontSize="medium" className="i"/>
    </Button>
  );
}

export default NavToggle;