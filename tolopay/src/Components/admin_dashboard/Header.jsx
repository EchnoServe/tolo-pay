import styled from "styled-components";
import { CgMenuRight } from "react-icons/cg";

 

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  
  
  
   

  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  .nav-toggle {
    pointer-events: none;
    opacity: 0;
    @media (max-width: 920px) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

function Header({ toggle }) {
 
  return (
    <Grid>
      
      <div 
        className="nav-toggle"
        onClick={toggle}
        style={{ marginLeft: "-11px" }}
      >
        <CgMenuRight/>
      </div>

 
      <div className="mid"> hiiiii</div>
      <div>
   
      oooooooooooo   
        
       
      </div>
    </Grid>
  );
}

export default Header;
