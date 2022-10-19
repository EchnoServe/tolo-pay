import { TextField,} from '@material-ui/core'
import { Link } from "react-router-dom";
import "./RecieveModal.css";
import QRcode from 'qrcode.react'
import React, {useState, useContext} from 'react'
import { Context } from "./../../context/Context";
function RecieveModal() {
    const { user } = useContext(Context);
const [qr, setQr] = useState('1000');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
   
    return (
        <div className="qrcode screen">
        <div className="overlap-group-container">
            <div className="overlap-group2">
                 <div className="mobile-number normal-black">Mobile Number:</div>
                 <div className="phone normal-blue">{user?.data.user.phoneNumber}</div>
                 <div className="name normal-black">Name:</div>
                 <div className="name-1 normal-blue">{user?.data.user.name}</div>
             </div>
             <div className="overlap-group1">
               <h1 className="title">Please Scan This QR Code</h1>
                <div className="generator-containers">
            
            


            <div className="qr-cont">
                {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={user?.data.user.phoneNumber.toString()} 
                        size={450}
                        includeMargin={true}
                    /> :
                    <p>No QR code preview</p>
                }
            </div>
            <div>
                
            </div>
      </div>

             </div>
        </div>
        </div>
    );
  }
  
  export default RecieveModal;
  