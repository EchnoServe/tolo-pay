import React, { useState ,useContext} from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/components/Dashboard";
import Setting from "./Pages/Setting";

import Budget from "./Pages/budget_page/Budget";
import QR from "./Pages/qr/Qr";
import Navbar from "./Components/Navbar/Navbar";

// import PayBill from "./Pages/PayBill";
import Planning from "./Pages/Planning";
// import Navbar from "./Components/Navbar/Navbar";

import WalletToWallet from "./Components/walletToWallet/WalletToWallet";
import Signup from "./Pages/createAccount/CreateAccount"
// import RoutesPath from "./RoutesPath";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Utils/globalStyles";
import { darkTheme, lightTheme } from "./Utils/theme";
import BottomNavbar from "./Components/BottomNav/BottomNavbar";
import UserProfile from "./Pages/UserProfile";
import Budget_form from "./Pages/budget_page/BudgetForm";
import Transfer from "./Components/confirmation_component/Transfer";
import Login from "./Components/login_components/LoginForm";
import { Context } from "./context/Context";

export const ThemeContext = React.createContext(null);

const App = () => {
  const { user, dispatch ,token } = useContext(Context);


  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  console.log(user ,"tt",token)
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
              {/* <Navbar /> */}
              <BottomNavbar />

              <Routes>
                <Route path="/" element={user ? <Dashboard />: <Login/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

                <Route path="/transfer" element={user ? <WalletToWallet />: <Login/>} />
                <Route path="/budgetform" element={user ? <Budget_form/>: <Login/>} />
                
                <Route path="/planning" element={user ? <Budget />: <Login/>} />
                <Route path="/qr" element={user ? <QR />: <Login/>} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </Layout>
          </Router>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
