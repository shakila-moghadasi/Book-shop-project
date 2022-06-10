import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import axios from 'axios';
import { List } from '@mui/material';
import Link from '@mui/material/Link';
import Bookdata from './Bookdata';

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
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Category() {
    const [id , setid] = useState()
    const [Tragedy , setTragedy] = useState();
    const [novel , setnovel] = useState();
    const [fantasy , setfantasy] = useState();
    const [poem , setpoem] = useState();
    const [Comedy , setComedy] = useState();
  
    useEffect(() => {
      axios.get('http://localhost:3002/products?category=Tragedy')
      .then((res) => {
          setTragedy(res.data)
      })
      .catch((err) => {
          alert(err.response.statusText);
      });
    },[]);
  
    useEffect(() => {
      axios.get('http://localhost:3002/products?category=fantasy')
      .then((res) => {
          setfantasy(res.data)
      })
      .catch((err) => {
          alert(err.response.statusText);
      });
    },[]);
  
    useEffect(() => {
      axios.get('http://localhost:3002/products?category=novel')
      .then((res) => {
          setnovel(res.data)
      })
      .catch((err) => {
          alert(err.response.statusText);
      });
    },[]);
  
    useEffect(() => {
      axios.get('http://localhost:3002/products?category=poem')
      .then((res) => {
          setpoem(res.data)
      })
      .catch((err) => {
          alert(err.response.statusText);
      });
    },[]);
  
    useEffect(() => {
      axios.get('http://localhost:3002/products?category=Comedy')
      .then((res) => {
          setComedy(res.data)
      })
      .catch((err) => {
          alert(err.response.statusText);
      });
    },[]);
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{ display: 'flex', pt: 10, px:"auto", bgcolor: 'background.paper', borderRadius: 1 }}
      >
        <Item sx={{ width: '75%' }}><Bookdata id={id}/></Item>
        <Item sx={{ flexShrink: 1, width: '25%' }}>
            Tragedy:
            {Tragedy?.map((item) => (
                <List><Link onChange={() => setid(item.id)}>{item.title}</Link></List>
            ))}
            fantasy:
            {fantasy?.map((item) => (
                <List><Link>{item.title}</Link></List>
            ))}
        </Item>
      </Box>
    </div>
  );
}