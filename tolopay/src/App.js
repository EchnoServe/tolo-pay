import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Pages/home_page/Home";
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
      </Routes>
     </Router>
  );
}

export default App;

