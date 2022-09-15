import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout/Layout";
import Dashboaard from "./Pages/Dashboaard";
import Transfer from "./Pages/Transfer";
import Setting from "./Pages/Setting";
import PayBill from "./Pages/PayBill";
import Planning from "./Pages/Planning";
import Navbar from "./Components/Navbar/Navbar";
// import RoutesPath from "./RoutesPath";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Utils/globalStyles";
import { darkTheme, lightTheme } from "./Utils/theme";


export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>tolopay</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    {/* <Layout>
                        <RoutesPath />
                    </Layout> */}
            
                    <Router>
                        
                        <Layout>
                            <Navbar />
                            
                                        <Routes>
                                          <Route path="/" element={<Dashboaard />} />
                                          <Route path="/transfer" element={<Transfer />} />
                                          <Route path="/paybill" element={<PayBill />} />
                                          
                                          <Route path="/planning"element={<Planning />} />
                                          <Route path="/settings" element={<Setting />} />
                                          
                                          
                                        </Routes>
                                      </Layout>  
                            </Router>

                </>
            </ThemeProvider>
        </ThemeContext.Provider>

      
      
      
      
     
    );
};

export default App;
