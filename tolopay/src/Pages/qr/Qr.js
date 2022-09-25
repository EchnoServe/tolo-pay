import { Button} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";
import "./qr.css"
function Home() {

    return (
        <div className='qrHome'>
           <h3>Transfer using Qr Code </h3>
           <ul>
           <li>
            <Link to="/qr_generator">
               <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcode}
                        title="QR Generator"
                        size={7}
                        color="white"
                        />
                    </Button>
            </Link>
            <h4>generate Qrcode</h4>
            </li>
            <li>
            <Link to="/qr_scanner">
                  <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={7}
                        color="white"
                        />
                    </Button>
            </Link>
            <h4>Scan Qrcode</h4>
           </li>
           </ul>
        
        </div>
    );
  }
  
  export default Home;
  