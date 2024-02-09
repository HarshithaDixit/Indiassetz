import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import'./datatable.css'





const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Email", headerName: "Email", width: 150 },
  { field: "Contact", headerName: "Contact", width: 130 },
  { field: "Loan_Type", headerName: "Loan Type", width: 150 },
  {
    field: "Branch",
    headerName: "Branch",
  },
];

const rows = [
  {
    id: 1,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 2,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 3,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 4,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 5,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 6,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 1,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 2,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 3,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 4,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 5,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
  {
    id: 6,
    Name: "Harshitha",
    Email: "Abc@gmail.com",
    Contact: "23456789",
    Loan_Type: "Home Loan",
    Branch: "bangalore",
  },
];

export default function DataTable() {
  return (
    
         
    <div
      style={{
        height: 300,
        width: "60%",
        float: "right",
        justifyItems: "center",
        marginRight: "10%",
        
        
      }}
    >
      <div className="text">
        <input type="text" placeholder="Loan" ></input>
      <div className="grid">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{pagination: {
          paginationModel: { page: 0, pageSize: 7 },
        },}}
        pageSizeOptions={[5, 10]}
      />
    </div>
    </div>
    </div>
  
  );
}
