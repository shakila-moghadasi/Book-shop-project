import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Menucategory from '../Menucategory';
import TragedyBooks from '../Cards/TragedyBooks';

function Item(props) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const CategoryTragedy = () => {
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
  
  console.log(data);

  return (
    <div> 
      <Box
        sx={{ display: 'flex', pt: 10, px:"auto", bgcolor: 'background.paper', borderRadius: 1 }}
      >
        <Item sx={{ width: '75%' }}>
          <TragedyBooks/>
        </Item>
        <Item sx={{ flexShrink: 1, width: '25%' }}>
          <Menucategory/>
        </Item>
      </Box>
    </div> 
  );
}

export default CategoryTragedy;