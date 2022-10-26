
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './Components/admin_dashboard/Layout';
import Profile from './Components/Profile/Profile';
import Budget from './Pages/budget_page/Budget'
import Transfer from './Pages/transfer/Transfer'
import Dashboard from './Components/dashboard/component/Dashboard';
import { useState } from 'react';
import './App.css'
import Budgetform from './Pages/budget_page/BudgetForm';
import History from './Components/history/History';

function App() {

  const [file, setFile] = useState("");
  const handle = (e) => {setFile(e.target.files[0]) }
  
  const [title, setTitle] = useState([
    {name: 'Dashbord', id: '1'},
    {name: 'Transfer', id: '2'},
    {name: 'Budget and Planning', id: '3'},
    {name: 'QR Payment', id: '3'},
    {name: 'Split Bill', id: '4'},
    {name: 'Profile', id: '5'}
  ]);

  const handletitleChange = () => {
    
    
  }
  
  

  return (
    <Router>
       
      <Layout title={title} file={file}>
      <Routes>
        
        <Route path="/profile" exact element = {<Profile file={file} handle={handle}/>}/>
        <Route path="/budget" exact element = {<Budget/>}/>
        <Route path="/transfer" exact element = {<Transfer/>}/>
        <Route path="/dashboard" exact element = {<Dashboard/>}/>
        <Route path="/addBudget" exact element = {<Budgetform/>}/>
        <Route path="/history" exact element = {<History/>}/>




      </Routes>
      </Layout>
     </Router>
  );
}


export default App;

