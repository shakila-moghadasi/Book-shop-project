import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Ordered from './ordermanagement/Ordered';


export default function Waiting() {
  const [data , setdata] = useState();
  useEffect(() => {
    axios.get('http://localhost:3002/orders?orderStatus=2')
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  return (
    <div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>user name</TableCell>
          <TableCell align="right">Total amount</TableCell>
          <TableCell align="right">Order registration time</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.customerDetail.firstName}
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{row.fat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
    );
}
