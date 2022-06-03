import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



export default function BasicTable() {
  const [data , setdata] = useState();
  useEffect(() => {
    axios.get('http://localhost:3002/products')
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  return (
    <>
    <Button variant="contained">Save</Button>
    <p> price and Inventory Management </p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Commodity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{`${row.price}$`}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
