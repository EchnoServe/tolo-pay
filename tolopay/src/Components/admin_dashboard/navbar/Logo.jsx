import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../../../Assets/l2.png'
 


const StyleLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: #3ABEFF;
  min-height: 48px;
  display: flex;
  gap: 2px;
  align-items: center;
  padding: 0 20px 0 25px;
  text-decoration: none;
  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;

  img{
    width: 28px;
    height: 30px;
  }
  &:hover {
    text-decoration: none;
    color: rgb(58, 135, 190);;
  }
  h4 {
      font-weight: 550;
      color: #D2FDFF;
      opacity: ${p => Number(!p.compact)};
      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }
  @media(max-width: 920px) {
      h4 {
          opacity: 1;
      }
  }
`;

function Logo(props) {
  return (
    <StyleLink {...props} to="/">
      <img src={img} alt=''/><h4>oloPay</h4>
    </StyleLink>
  );
}

export default Logo;