import styled from "styled-components";






import Sidebar from "../Sidebar/Sidebar"
// import Navbar from "../Navbar/Navbar"

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
  position: fixed;
  top: 0;
  margin-left: 300px;
`;

const GridMain = styled.main`
  grid-area: main;
`;

function Layout({ children, ...rest }) {

  
  
  return (
    <Grid {...rest}>
      
       
          <GridNav>
        <Sidebar />
        
          </GridNav>
          <GridHeader>
            {/* <Navbar /> */}
          </GridHeader>
       
    
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;