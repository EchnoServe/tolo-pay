import { useState } from "react"
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link as RLink} from "react-router-dom"
import { useForm } from "react-hook-form";


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

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  trigger,
} = useForm();

const onSubmit = (data) => {
  console.log(data);
  reset();
};

  return (
   <Con>
    <Container>
      <SubContainer>
      <Button2 to = "/budget" ><ArrowBackIcon/></Button2>
        <SectionOne>
        
          <ColumnTwo1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title >Add Budget</Title>

            <input  placeholder='Budget Name' type='text' 
               className={`form-control ${errors.firstName && "invalid"}`}
                {...register("firstName", { required: "Budget name is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Budget name must only start letters",
                }})}
                onKeyUp={() => {
                  trigger("firstName");
                }}/>
                  {errors.firstName && (
                <small className="text-danger">{errors.firstName.message}</small>
              )}


            {/* <input
                onChange={handleBudgetName}
                className="form-field" 
                placeholder="Budget Name" 
                name="budgetName" /> */}

                <input
                placeholder="Amount"
                className={`form-control ${errors.amount && "invalid"}`}
                {...register("amount", { required: "Amount is Required",
                pattern: {
                  value: /^([1-9][0-9]*)$/,
                  message: "Invalid Amount",
                },
               })}
               onKeyUp={() => {
                trigger("amount");
              }}/>
                    {errors.amount && (
               <small className="text-danger">{errors.amount.message}</small>
             )}

            {/* <input 
                onChange={handleAmount}
                className="form-field" 
                placeholder="Amount" 
                name="amount" /> */}
            
            <Button  >Add Budget</Button>
              
        </Form>
        </ColumnTwo1>
        </SectionOne>
      </SubContainer> 
    </Container>
    </Con>
   
  )
}


const Container = styled.div`
  width: 90%;
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
`;


const SubContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
 flex-direction: column;
  /* gap: 4rem; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const Form = styled.form`
height: 400px;
width: 450px;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
background-color: rgba(58, 135, 190,0.2);
border: 1px solid rgba(58, 135, 190,0.1);
border-radius: 4px;

.invalid {
  border:1px solid red !important;
 }
 input, textarea {
  outline: none !important;
  box-shadow: none !important; 
  
}

.required{
  color: red;
}

input{
border: solid rgba(58, 135, 190,0.3);
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px 0 9px 9px;
border-radius: 3px;
width: 70%;
outline: none;
}

.inputMargin{
  /* margin-bottom: 10px; */
}

input:focus::placeholder{
  color: transparent; 
}

input:focus::placeholder{
  color: #f2f2f2;
  transition: color 0.3s ease;
}

input:focus{
  border: solid rgb(58, 135, 190) ;
  transition: border 0.3s ease;
}

`;

const Title = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color:rgb(41, 75, 90);
  margin-bottom: 5px;
 
`;


const Button = styled.button`
border-radius: 4px;
border: none;
width: 70%;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 10px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`;

const Button2 = styled(RLink)`
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
background: rgb(58, 135, 190);
white-space: nowrap;
padding-top: 12px;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
align-items: center;
justify-content: center;

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`;

export default Budget_form