
import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

import { QrReader } from 'react-qr-reader';
import "./reader.css"
function QRscanner() {

   
    const [data, setData] = useState('No result');
    

    return (
      <div className="reader-containers">
            <Link to="/Qr">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
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
                style={{fontSize:18, width:320, height:100, marginTop:20}}
                rowsMax={4}
                defaultValue={data}
                value={data}
            />
            

      </div>
    );
  }
  



  export default QRscanner;