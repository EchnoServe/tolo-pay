import styled from "styled-components";

import { Outlet } from 'react-router-dom';




import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"

const Grid = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
  

`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 100;

`;

const GridHeader = styled.header`
  grid-area: header;
  // position: absolute;
  top: 0;
  left: 50px;
  overflow = none;
  position = fixed;
  
  
  
`;

const GridMain = styled.main`
  grid-area: main;
  position: absolute;
  
  // position: fixed;
 
  // top: 100px;
  // height: calc(100vh - 100px);
  overflow: auto;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  
  
`;

function Layout({ children, ...rest }) {

  
  
  return (
    <Grid {...rest}>
      
       <Outlet />
          <GridNav>
        <Sidebar />
        
          </GridNav>
          <GridHeader>
            <Navbar />
          </GridHeader>
       
    
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;