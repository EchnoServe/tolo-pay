
import { Link, useNavigate } from "react-router-dom";
 import axios from "axios";
import React, { useState ,useContext} from "react";
// import React, { useState } from "react";
import "./qrPage.css";
import { TextareaAutosize} from '@material-ui/core'


import { QrReader } from 'react-qr-reader';
import { Context } from "./../../context/Context";

function QrPage() {







const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const { token ,user ,dispatch} = useContext(Context);

  

  const handleClickToOpen = (event) => {
    event.preventDefault();

    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
 

  const [values, setValues] = useState({
    phoneNumber: "",
    amount: "",
    remark: "",
    
  });

 const handlePhoneNumber = (event) => {
    setValues({ ...values, amount: event.target.value });
  };
  const handleAmount = (event) => {
    setValues({ ...values, amount: event.target.value });
  };

  
  const handleRemark= (event) => {
    setValues({ ...values, remark: event.target.value });
  };
  async function makePostRequest(values) {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/transaction/transfer",
        values,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );
      navigate("/")
      // console.log("////>>>>",data)
    dispatch({ type: "UPDATE_SUCCESS", payload: res.data});

    } catch (err) {
      console.log("[Login.js] makePostRequest", err);

      ///some thing set to be true
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(data);
    makePostRequest(values);
  };










const [modal2, setModal2] = useState(false);
  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  if(modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



    
// const [btnDisabled, setBtnDisabled] = useState(true)
const [modal, setModal] = useState(false);
const [decodedData, setdecodedData] = useState('No result');
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return (
        <div className='qr-container'>
          
        
        <div className="button-container">
            
             <div className="button-wrapper">
               <button onClick={toggleModal} className="btn-modals">
                         Send Money
              </button>

      {modal && (
        <div className="modals">
          <div onClick={toggleModal} className="overlays"></div>
          <div className="modal-contents">
            
              <div className="reader-container1">
            
            
            
            <span>Scan QR Code Of The Reciever</span>
            
            <center>
            <div style={{marginTop:10}}>
                <QrReader
                    
                    
          onResult={(result, error) => {
          if (!!result) {
            setdecodedData(result?.text);

      setValues({ ...values, phoneNumber: result?.text });

          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}


                />


            </div>
            </center>

            <TextareaAutosize
              
                style={{fontSize:18, width:400, height:100, marginTop:20}}
                rowsMax={4}
                defaultValue={decodedData}
                value={decodedData} 
            />  
            <div>
            <div className="proceed-btn">
            <button onClick={toggleModal2} className="btn-modal2">
                        Proceed 
              </button>
              </div>
              {modal2 &&(
                  <div className="modal2">
                  <div onClick={toggleModal} className="overlay2"></div>
                  <div className="modal-content2">
                                  <div className="modal2-input">
                                      <ul>
                                      <li><textarea 
                                      
                                      value={decodedData}
                                      defaultValue={decodedData}
                                            
                                           
                                      ></textarea></li>
                                      <li><input onChange={handleAmount}
                                            value={values.amount}
                                            className="form-field"
                                            placeholder="Amount"
                                            name="amount"/></li>
                                      <li>
                                            <select className="option" id="remark" onChange={handleRemark}>
                                                 
                                                      { user?.data.user?.budget.map(option =>{
                                                       return <option value={option.remark}>{option.remark}</option>
                                                        
                                                      })}
                                              </select>

                                      </li>
                                      <li><button onClick={handleSubmit}>Send</button></li>
                                      </ul>
                                        
                                        
                                        
                                  </div>
                         <h1 className="close-modal2" onClick={toggleModal2}>
                                X
                        </h1>
                  </div>
                  </div>
                 
                )}
              </div>
            
           
           
            

      </div>

            <h1 className="close-modals" onClick={toggleModal}>
              X
            </h1>
          </div>
        </div>
      )}
     
                <Link to="/recieve">                                                                        
                    <button>Recieve Payment</button>
                </Link>
                
             </div>
        </div>
        </div>
    );
  }
  
  export default QrPage;
  