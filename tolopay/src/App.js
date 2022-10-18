import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './Components/admin_dashboard/Layout';
import Try from './Components/Try/Try';
 

function App() {
  return (
    <Router>
       
      <Layout>
      <Routes>
        
        <Route path="/profile" exact element = {<Try/>}/>

      </Routes>
      </Layout>
     </Router>
  );
}

export default App;

