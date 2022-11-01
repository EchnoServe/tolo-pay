export const userColumns = [
 
  {field: "id", headerName: "List", width: 60 },
  {
    field: "to",
    headerName: "Transfered To",
    width: 170,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {field: "previousBalance", headerName: "Previous Balance", width: 140},
  {field: "amount", headerName: "Transferred Amount", width: 160},
  {field: "currentBalance", headerName: "Current Balance", width: 130},
  {field: "date", headerName: "Date and Time", width: 120},

  {field: "remark",
   headerName: "Remark", 
   width: 90,
   renderCell: (params) => {
    return (
      <div className={`cellWithRemark ${params.row.remark}`}>
        {params.row.remark}
      </div>
    );
  },
  },

  

]




export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "other",
 
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      previousBalance: "3000 Birr" ,
      amount: "300 Birr",
      currentBalance: "2700 Birr",
      date: "10/30/22",
      remark: "food",
    },
  ];


  export const userColumnsReceived = [
 
    {field: "id", headerName: "List", width: 60 },
    {
      field: "to",
      headerName: "Received From",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
  
    {field: "previousBalance", headerName: "Previous Balance", width: 140},
    {field: "amount", headerName: "Transferred Amount", width: 160},
    {field: "currentBalance", headerName: "Current Balance", width: 130},
    {field: "date", headerName: "Date and Time", width: 120},
  
    {field: "remark",
     headerName: "Remark", 
     width: 90,
     renderCell: (params) => {
      return (
        <div className={`cellWithRemark ${params.row.remark}`}>
          {params.row.remark}
        </div>
      );
    },
    },
  
    
  
  ]
  
  
  
  
  export const userRowsReceived = [
      {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "other",
         
      },
      {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
  
         
      },
      {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
      {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "other",
  
        
      },
      {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
      {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
      {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
      {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
      {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
        age: 65,
      },
      {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        previousBalance: "3000 Birr" ,
        amount: "300 Birr",
        currentBalance: "2700 Birr",
        date: "10/30/22",
        remark: "food",
      },
    ];
  