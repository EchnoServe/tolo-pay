import React, { useState ,useContext} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Pages/home_page/Home";
import Signup from "./Pages/createAccount/CreateAccount";
import EmailReset from "./Pages/EmailReset";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Login from "./Pages/login_page/LoginPage";
import LoginSuccess from "./Components/login_components/LoginSuccess";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/components/Dashboard";
import BottomNavbar from "./Components/BottomNav/BottomNavbar";
import WalletToWallet from "./Components/walletToWallet/WalletToWallet";
import BudgetForm from "./Pages/budget_page/BudgetForm";
import Budget from "./Pages/budget_page/Budget";
import QR from "./Pages/qr/QrPage";
import RecieveModal from "./Pages/qr/RecieveModal";
import Send from "./Pages/qr/Send";
import UserProfile from "./Pages/UserProfile";

import { Context } from "./context/Context";
import { darkTheme, lightTheme } from "./Utils/theme";
import Chatbot from "./Components/chatbot/Chatbot";
import Message from "./Components/chatbot/Message";

export const ThemeContext = React.createContext(null);

const App = () => {

  const { user } = useContext(Context);



  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
      <ThemeContext.Provider value={{ setTheme, theme }}>
          <ThemeProvider theme={themeStyle}>
          
            <Router>
              <Routes>
    
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/success" element={<LoginSuccess />} />
                <Route path="/password-reset" element={<EmailReset />} />
                <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
                <Route path="/" 
                    element = { 
                        user ? 
                        <Layout>
                            <Chatbot />
                            <BottomNavbar />
                        </Layout> : 
                        <Home />} >
                        
                        <Route index element={ <Dashboard /> } />
                        <Route path="dashboard" element={ <Dashboard /> } />
                        <Route path="transfer" element={ <WalletToWallet /> } />
                        <Route path="budgetform" element={ <BudgetForm /> } />
                        <Route path="planning" element={ <Budget /> } />
                        <Route path="qr" element={ <QR /> } />
                        <Route path="recieve" element={ <RecieveModal /> } />
                        <Route path="send" element={ <Send />} />
                        <Route path="profile" element={ <UserProfile /> } />
                        <Route path="chatbot" element={ <Chatbot /> } />
                        <Route path="message" element={<Message />} />

            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;