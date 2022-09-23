import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/components/Dashboard";
// import Setting from "./Pages/Setting";

import Budget from "./Pages/budget_page/Budget";
import QR from "./Pages/qr/Qr";

// import Navbar from "./Components/Navbar/Navbar";

// import PayBill from "./Pages/PayBill";
import Planning from "./Pages/Planning";
// import Navbar from "./Components/Navbar/Navbar";

import WalletToWallet from "./Components/walletToWallet/WalletToWallet";
// import RoutesPath from "./RoutesPath";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Utils/globalStyles";
import { darkTheme, lightTheme } from "./Utils/theme";
import BottomNavbar from "./Components/BottomNav/BottomNavbar";
import UserProfile from "./Pages/UserProfile";
import Budget_form from "./Pages/budget_page/BudgetForm";
import QRgen from './Pages/qr/QRgenerator'
import QRscan from './Pages//qr/QRscanner'
import Home from "./Pages/home_page/Home";
import Login from "./Components/login_components/LoginForm";
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
                    
                   <Router>
                     <Routes>
                          <Route index element = {<Home/>}/>
                          <Route path="/login" element={<Login />} />
                         </Routes>
                   </Router>
                    <Router>
                         
                        <Layout>
                            {/* <Navbar /> */}
                            <BottomNavbar />
                            
                                        <Routes>
                                          
                                          <Route path="/dashboard" element={<Dashboard />} />
                                          <Route path="/transfer" element={<WalletToWallet />} />
                                          <Route path="/budgetform" element={<Budget_form/>} />
                                          <Route path="/planning" element={<Budget />} />
                                          <Route path="/qr" element={<QR />} />
                                          
                                            <Route path="/profile" element={<UserProfile />} />
                                            <Route path="/qr_scanner"element={<QRscan />} />
                                            <Route path="/qr_generator" element={<QRgen />} />
                                          
                                        </Routes>
                        </Layout>  
                        
                        
                            </Router>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
