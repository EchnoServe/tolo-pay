import { Link } from "react-router-dom";
import styled from "styled-components";
 


const StyleLink = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: #3ABEFF;
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 25px;
  text-decoration: none;
  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
  &:hover {
    text-decoration: none;
    color: #3ABEFF;
  }
  span {
      font-weight: 500;
      color: rgba(255,255,255, .9);
      opacity: ${p => Number(!p.compact)};
      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  }
  @media(max-width: 920px) {
      span {
          opacity: 1;
      }
  }
`;

function Logo(props) {
  return (
    <StyleLink {...props} to="/">
      T<span>oloPay</span>
    </StyleLink>
  );
}

export default Logo;