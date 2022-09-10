import "./App.css";

import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Dashboard from "./Pages/Dashboard";
import Transfer from "./Pages/Transfer";
import PayBill from "./Pages/PayBill";

import Planning from "./Pages/Planning";

import Setting from "./Pages/Setting";
function App() {
  return (

    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/paybill" element={<PayBill />} />
          <Route path="/planning" element={<Planning />} />
          
          <Route path="/settings" element={<Setting />} />
          
          
        </Routes>
      </SideBar>
    </Router>

    <div
    

  );
}

export default App;
