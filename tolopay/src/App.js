import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './Components/admin_dashboard/Layout';
import Try from './Components/Try/Profile';
import Budget from './Pages/budget_page/Budget'
import Transfer from './Pages/transfer/Transfer'
 

function App() {
  return (
    <Router>
       
      <Layout>
      <Routes>
        
        <Route path="/profile" exact element = {<Try/>}/>
        <Route path="/budget" exact element = {<Budget/>}/>
        <Route path="/transfer" exact element = {<Transfer/>}/>



      </Routes>
      </Layout>
     </Router>
  );
}


export default App;

