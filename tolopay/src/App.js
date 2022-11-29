import React, { useState ,useContext} from "react";
import { BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom'
import Layout from './Components/admin_dashboard/Layout';
import Profile from './Components/Profile/Profile';
import Budget from './Pages/budget_page/Budget'
import Transfer from './Pages/transfer/Transfer'
import Dashboard from './Components/Dashboard/component/Dashboard'
import QrCode from "./Pages/qr/QrCode";
import './App.css'
import Budgetform from './Pages/budget_page/BudgetForm';
import History from './Components/history/History';
import { Context } from "./context/Context";
import Login from "./Pages/login_page/LoginPage";
import LoginSuccess from "./Components/login_components/LoginSuccess";
import EmailReset from "./Pages/EmailReset";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Signup from "./Pages/createAccount/CreateAccount";
// import BottomNavbar from "./Components/BottomNav/BottomNavbar";

function App() {
  const { user } = useContext(Context);
  const [file, setFile] = useState("");
  const handle = (e) => {setFile(e.target.files[0]) }
  
  const [title, 
    // setTitle
  ] = useState([
    {name: 'Dashbord', id: '1'},
    {name: 'Transfer', id: '2'},
    {name: 'Budget and Planning', id: '3'},
    {name: 'QR Payment', id: '3'},
    {name: 'Split Bill', id: '4'},
    {name: 'Profile', id: '5'}
  ]);

  // const handletitleChange = () => {
    
    
  // }
  
  

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="logout"  element={<Login/>}  />  
            <Route path="/login/success" element={<LoginSuccess />} />
            <Route path="/password-reset" element={<EmailReset />} />
            <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
            <Route path="/"
                element = { 
                    user ?   
                    <Layout title={title} file={file}>
                      <Outlet/>
                    </Layout> : 
                    <Login />} >

                      <Route index element={ <Dashboard /> } />            
                      <Route path="profile"  element = {<Profile file={file} handle={handle}/>}/>
                      <Route path="budget"  element = {<Budget/>}/>
                      <Route path="transfer"  element = {<Transfer/>}/>
                      <Route path="dashboard"  element = {<Dashboard/>}/>
                      <Route path="addBudget"  element = {<Budgetform/>}/>
                      <Route path="history"  element = {<History/>}/>
                      <Route path="qr" element = {<QrCode/>}/>

            </Route>
      </Routes>
      
     </Router>
  );
}

export default App;