import { useState } from "react"
import styled from 'styled-components'


const Budget_form = () => {

    const [passwordShown, setPasswordShown] = useState(false);


    const [values, setValues] = useState({
        budgetName:"",
        amount:""
    });

const handleBudgetName = (event) =>{
    setValues({...values, budgetName: event.target.value})
}

const handleAmount = (event) =>{
    setValues({...values, amount: event.target.value})
}


  return (
    <Section>
    <div className="walletToWallet">
        <form className="moneyTransfer">
            <h3 >Add Budget</h3>
            <input
                onChange={handleBudgetName}
                value={values.budgetName} 
                className="form-field" 
                placeholder="Budget Name" 
                name="customerWalletNumber" />
            <input 
                onChange={handleAmount}
                value={values.amount}
                className="form-field" 
                placeholder="Amount" 
                name="amount" />
            
            <button
                className="btn"
                type="submit">Add Budget</button>
        </form>
    </div>
    </Section>
  )
}

const Section = styled.section`
.walletToWallet{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  
    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
  
      h3{
          text-align: center;
          text-decoration: 2.5px underline #46833c;
          text-underline-offset: 8px;
          
      }
  
      .option {
          color: gray;
      }
      option {
          border: 2px;
          color: #000000;
      }
      
    }
    
    .option{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #41d3fe;
    }
  
    .option:hover{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #46833c;
    }
    
    .form-field{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #41d3fe;
    }
  
    .form-field:hover{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #6977fe;
    }
  
    .btn{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: none;
    }
    
  
    
    input {
      background: white;
      padding: 15px;
      margin: 10px 0px;
      width: 400px;
    }
    
    .pass-wrapper {
      position: relative;
      display: flex;
      margin-bottom: 14px;
    }
    
    i {
      position: absolute;
      top: 38%;
      right: 16%;
    }
    i:hover {
      color: #00fcb6;
      cursor: pointer;
    }
    
    button {
      background: #46833c;
      color: white;
      cursor: pointer;
      background: linear-gradient(to right bottom, #41d3fe, #6977fe);
    }
    
    button:hover{
      background: #6977fe
    }
   
    
    button:disabled {
      cursor: default;
    }
  }
  
  
  

`;

export default Budget_form