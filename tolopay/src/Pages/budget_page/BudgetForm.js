import { useState } from "react"
import styled from 'styled-components'

const Budget_form = () => {

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
        <Con>
    <Container>
      <SubContainer>
        <SectionOne>

          <ColumnTwo1>
          <Setting >

          <Section>
    <div className="budgetpage">
        <form className="addbudget">
            <h3 >Add Budget</h3>
            <input
                onChange={handleBudgetName}
                className="form-field" 
                placeholder="Budget Name" 
                name="budgetName" />
            <input 
                onChange={handleAmount}
                className="form-field" 
                placeholder="Amount" 
                name="amount" />
            
            <button
                className="btn"
                type="submit" >Add Budget</button>
              
        </form>
    </div>
    </Section>
                </Setting> 
             
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
    </Section>
  )
}
const Container = styled.div`
  width: 90%;
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  /* border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem; */
  margin: 1rem 4rem 1rem 4rem;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */

`;

const SubContainer = styled.div`
  /* margin: 0.5rem 0; */
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;


const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;


const Setting = styled.div`
display: flex;
justify-content: center;
align-items: center;
  height: 100%;
  background-color: rgba(58, 135, 190,0.1);
  /* margin-bottom: 10px; */
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;

  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;
const Section = styled.section`
.budgetpage{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
     
      }
    .addbudget {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
      @media (max-width: 768px) {
      align-items:center;
      }
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
      @media (max-width: 768px) {
      margin: 10px 0 10px 0;
      padding: 15px;}
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