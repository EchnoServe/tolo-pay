import "./App.css";
import LoginPage from "./Pages/login_page/LoginPage";
import SignupValidation from "./Components/signup_validation/signup";
import Budget from "./Pages/budget_page/Budget"
import Budget_form from "./Pages/budget_page/budget_form_page"
import CreateAccount from "./Pages/createAccount/CreateAccount";
function App() {
  return (<div>
<Budget_form/>
  </div>
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     backgroundColor: "#46833C",
    //     color: "#fff",
    //     gap: "3rem",
    //   }}
    // >
    //   <h1
    //     style={{
    //       fontSize: "10rem",
    //     }}
    //   >
    //     Tolo-pay
    //   </h1>
    //   <p>Pay Anything Anywhere Easily</p>
   
  );
}

export default App;
