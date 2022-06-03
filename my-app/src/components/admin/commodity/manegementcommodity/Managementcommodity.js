import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ImageListItem } from '@mui/material';


export default function CustomizedTables() {
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


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div>
    <Stack direction="row">
      <Button variant="contained">Add Commodity</Button>
      Management commodity
    </Stack>  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>picture</StyledTableCell>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell>author</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => 
            <StyledTableRow key={row.id}>
              <StyledTableCell>
                <ImageListItem sx={{ width: 100, height: 100 }}>
                  <img
                    src={`http://localhost:3002/files/${row.image}`}
                  />
                </ImageListItem>
              </StyledTableCell>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell>{row.author}</StyledTableCell>
              <StyledTableCell>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
