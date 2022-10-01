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
  position: relative;
  top: 0;
  
  
  
`;

const GridMain = styled.main`
  grid-area: main;
  // position: relative;
  
  position: fixed;
  
  top: 80px;
  height: calc(100vh - 80px);
  overflow: auto;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  
  
`;

function Layout({ children, ...rest }) {

  
  
  return (
    <Grid {...rest}>
      
       
          <GridNav>
        <Sidebar />
        <Outlet />
          </GridNav>
          <GridHeader>
            <Navbar />
          </GridHeader>
       
    
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;