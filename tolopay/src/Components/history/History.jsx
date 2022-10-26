
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { userColumns, userRows, userRowsReceived, userColumnsReceived } from './Data';
 
import { useState } from 'react';
 

export default function DataTable() {
 
  const [active, setActive] = useState("sent")


  return (
    <Maincontaier>
      <HistoryType active={active} >
      <Button  className= "sent"  onClick={() => setActive("sent")}>Sent </Button>
      <Button  className= "received" onClick={() => setActive("received")}>Received </Button>
    </HistoryType>


    {active === "sent" &&    
    
    <Container>
    <DataGrid
      rows={userRows}
      columns={userColumns}
      pageSize={7}
      rowsPerPageOptions={[7]}
      checkboxSelection
    />
    </Container>
    }

   {active === "received" && 

   <Container>
   <DataGrid
     rows={userRowsReceived}
     columns={userColumnsReceived}
     pageSize={7}
     rowsPerPageOptions={[7]}
     checkboxSelection
   />
   </Container>
   
   }
  
    </Maincontaier>
  );
}
const Maincontaier = styled.div`
height: 100%;


`;
const Container = styled.div`
height: 490px;
padding: 10px 0 0 0;
 

.cellWithImg{
  display: flex;
  align-items: center;

  .cellImg{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 13px;
  }
}

.cellWithRemark{
   padding: 5px;
   border-radius: 5px;

   &.other{
    background: #ffadad8f;
    color: red;
   }

}

.cellAction{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  .deleteButton{
     font-size: 15px;
     color: #711616e1;
  }

}
`;

const HistoryType = styled.div`

display: flex;
align-items: flex-start;
justify-content: flex-start;
gap: 10px;
width: 100%;
padding: 0 20px 0 20px;
/* margin-bottom: 10px;
border-bottom: 1px solid rgba(169, 177, 174,0.6); */

.sent{
background: ${({active}) => (active === 'sent' ? 'white' : '')};
color: ${({active}) => (active === 'sent' ? 'rgb(58, 135, 190)' : '')};  
}

.received{
background: ${({active}) => (active === 'received' ? 'white' : '')};
color: ${({active}) => (active === 'received' ? 'rgb(58, 135, 190)' : '')};  
}

`;

const Button = styled.div`
border-radius: 4px;
border: 1px 0 1px 1px solid white;
width: 150px;
background:rgb(58, 135, 190);
white-space: nowrap;
padding: 8px 9px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
border: 2px solid  rgba(58, 135, 190, 0.1); 

&:hover{
background:rgba(58, 135, 190,.5);
}

`;