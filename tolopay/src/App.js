import React, { useState ,useContext} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Pages/home_page/Home";
import Signup from "./Pages/createAccount/CreateAccount";
import Login from "./Pages/login_page/LoginPage";
import LoginSuccess from "./Components/login_components/LoginSuccess";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/components/Dashboard";
import BottomNavbar from "./Components/BottomNav/BottomNavbar";
import WalletToWallet from "./Components/walletToWallet/WalletToWallet";
import Budget_form from "./Pages/budget_page/BudgetForm";
import Budget from "./Pages/budget_page/Budget";
import QR from "./Pages/qr/Qr";
import UserProfile from "./Pages/UserProfile";
import QRgenerator from "./Pages/qr/QRgenerator";
import QRscanner from "./Pages/qr/QRscanner";
import { Context } from "./context/Context";
import { darkTheme, lightTheme } from "./Utils/theme";
import Chatbot from "./Components/chatbot/Chatbot";
import Message from "./Components/chatbot/Message";
export const ThemeContext = React.createContext(null);

const App = () => {

  const { user,
    //  dispatch ,
     token } = useContext(Context);



  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  console.log(user ,"tt",token)

  return (
 
<ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        {/* <GlobalStyle />
        <Helmet>
          <title>tolopay</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet> */}
        <>
        <Router>

          <Routes>

            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/success" element={<LoginSuccess />} />
            <Route path="/" 
                element = { user ? 
                    <Layout>
                        <Chatbot />
                        <BottomNavbar />
                        
                    </Layout> : 
                    <Home />} >
                    
                    <Route index element={ <Dashboard /> } />
                    <Route path="dashboard" element={ <Dashboard /> } />
                    <Route path="transfer" element={ <WalletToWallet /> } />
                    <Route path="budgetform" element={ <Budget_form /> } />
                    <Route path="planning" element={ <Budget /> } />
                    <Route path="qr" element={ <QR /> } />
                    <Route path="profile" element={ <UserProfile /> } />
                    <Route path="chatbot" element={ <Chatbot /> } />
                    <Route path="message" element={<Message />} />
                    <Route path="generate" element={<QRgenerator />} />
                    <Route path="scan" element={<QRscanner />} />
                    

            </Route>
          </Routes>
        </Router>
      </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
