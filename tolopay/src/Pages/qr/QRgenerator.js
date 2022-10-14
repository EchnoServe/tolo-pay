import React, {useState} from 'react'
import {Fab, TextField,} from '@material-ui/core'
import {ArrowBack,} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react'
import "./generator.css"
function QRgenerator() {
    const [qr, setQr] = useState('1000');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
   

    return (
      <div className="generator-container">
            <Link to="/Qr">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Generator</span>
            
            <div style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="Amount in number" size="large" variant="outlined" color="primary" 
                />
            </div>


            <div>
                {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={qr} 
                        size={320}
                        includeMargin={true}
                    /> :
                    <p>No QR code preview</p>
                }
            </div>
            <div>
                
            </div>
      </div>
    );
  }
  
  export default QRgenerator;