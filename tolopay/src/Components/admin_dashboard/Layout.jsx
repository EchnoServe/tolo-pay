import { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Navbar from "./Navbar";

const Grid = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
 
`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

const GridHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 2000;

`;

const GridMain = styled.main`
  grid-area: main;
  overflow-x: hidden;

`;

function Layout({ title, file, children, ...rest }) {
 
  const [showNav, setShowNav] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));
  return (
    <Grid {...rest}>
    
        <>
          <GridNav>
            <Navbar title={title} visible={showNav} close={toggle} />
          </GridNav>
          <GridHeader>
            <Header title = {title} file={file} toggle={toggle} />
          </GridHeader>
        </>
    
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;