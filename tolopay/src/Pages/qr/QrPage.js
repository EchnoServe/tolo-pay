
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./qrPage.css";
import { TextareaAutosize} from '@material-ui/core'


import { QrReader } from 'react-qr-reader';
function QrPage() {
const [modal, setModal] = useState(false);
const [data, setData] = useState('No result');
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
            setData(result?.text);
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
                defaultValue={data}
                value={data} 
            />
            
           
           
            

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
  