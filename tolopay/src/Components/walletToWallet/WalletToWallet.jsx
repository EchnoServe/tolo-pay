import { useState } from "react"
import styled from 'styled-components'
import Transfer from '../confirmation_component/Transfer'
 


const WalletToWallet = () => {

    const [values, setValues] = useState({
        customerWalletNumber:"",
        amount:"",
        remark:"",
        password:""
    });

const handleCustomerWalletNumber = (event) =>{
    setValues({...values, customerWalletNumber: event.target.value})
}

const handleAmount = (event) =>{
    setValues({...values, amount: event.target.value})
}

const handlePassword = (event) =>{
    setValues({...values, password: event.target.value})
}

const [components, setComponents] = useState([Transfer]); 
  

  return (
    <Section>
    <div className="walletToWallet">
        <form className="moneyTransfer">
            <h2>wallet to wallet</h2>
            <input
                onChange={handleCustomerWalletNumber}
                value={values.customerWalletNumber} 
                className="form-field" 
                placeholder="Customer wallet number" 
                name="customerWalletNumber" />
            <input 
                onChange={handleAmount}
                value={values.amount}
                className="form-field" 
                placeholder="Amount" 
                name="amount" />
            
            <select className="option" id="remark">
                 <option value="" selected hidden>Remark</option>
                 <option value="option 1">Food</option>
                 <option value="option 2">Tution Fee</option>
                 <option value="option 3">Entertainment</option>
                 <option value="option 3">Gym</option>
                 <option value="option 3">House hold</option>


            </select> 
               
            <input 
                onChange={handlePassword}
                value={values.password}
                className="form-field" 
                placeholder="Password"
                type="password" 
                name="password" 
                required/>
            <button
                className="btn"
                type="submit">Transfer</button>
        </form>
    </div>
    </Section>
  )
}

const Section = styled.section`
.walletToWallet{
    display: flex;
    min-height: 90vh;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  
    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
  
      h2{
          text-align: center;
          text-decoration: 2.5px underline #1f77b4;
          text-underline-offset: 8px;
          
      }
  
      .option {
          color: gray;
      }
      option {
          border: 2px;
          color: #000;
      }
      
    }
    
    .option{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #1f77b4;
    }
  
    .option:hover{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #1f77b4;
    }
    
    .form-field{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #1f77b4;
    }
  
    .form-field:hover{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #1f77b4;
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
      background: #1f77b4;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to bottom right, #1f77b4, #1f77b4);
    }
    
    button:hover{
      background-image: linear-gradient(to bottom right, #003cb3, #1f77b4);
    }
   
    
    button:disabled {
      cursor: default;
    }
  }
  
  
  
`;

export default WalletToWallet