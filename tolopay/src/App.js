import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Pages/home_page/Home";
import Layout from './Components/admin_dashboard/Layout';
import GlobalStyle from './GlobalStyle';
import Profile from './Components/profilePage_component/Profile';
import Try from './Components/Try/Try';
 

function App() {
  return (
    <Router>
       
      <Layout>
      <Routes>
        <Route path="/qr" exact element = {<Home/>}/>
        <Route path="/profile" exact element = {<Try/>}/>

      </Routes>
      </Layout>
     </Router>
  );
}

export default App;

