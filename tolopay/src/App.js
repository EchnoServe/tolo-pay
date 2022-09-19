import "./App.css";
import React, { useState } from "react";
import LoginPage from "./Pages/login_page/LoginPage";
import Modal from "./Components/confirmation_component/Transfer"

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return(
  <div>
    <button
  style={{align:"center"}}
    className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open

    </button>
    {modalOpen && <Modal setOpenModal={setModalOpen} />}
  </div>
  // return (<div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       height: "100vh",
  //       backgroundColor: "#46833C",
  //       color: "#fff",
  //       gap: "3rem",
  //     }}
  //   >
  //     <h1
  //       style={{
  //         fontSize: "10rem",
  //       }}
  //     >
  //       Tolo-pay
  //     </h1>
  //     <p>Pay Anything Anywhere Easily</p>
  //   </div>
  );
}

export default App;
