import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CardItem from '../CardItem';
import Basket from './Basket';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button, Card } from '@mui/material';
import { useLocation } from 'react-router-dom';

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


function Main() {
  const [cartItems, setCartItems] = useState([]);
  const [data , setdata] = useState();
  const idCommodity = useLocation();

  useEffect(() => {
    axios.get('http://localhost:3002/products')
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Box sx={{ display: 'flex', pt: 10, px:"auto", bgcolor: 'background.paper', borderRadius: 1 }}>
      <Item sx={{ width: '75%' }}>
      {data?.map((product) => {
        if(product.id === idCommodity.state.name){
          return (
          <Card>
            <ImageListItem>
              <img
                src={`http://localhost:3002/files/${product.image}`}
                alt={product.title}
                loading="lazy"
              />
            <ImageListItemBar
                title={product.title}
                subtitle={`${product.price}$`}
                position="below"
            />
            </ImageListItem>
            <br/>
            <Button 
              onClick={() => {
                onAdd(product)
              }
              }>
              Add To list shop
            </Button>
          </Card>
          )
        }
      })}
      <CardItem onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}></CardItem>
      </Item>
      <Item sx={{ flexShrink: 1, width: '25%' }}>
      <div className="row">
        <Basket cartItem = {cartItems}/>
      </div>
      </Item>
      </Box>
    </div>
  );
}

export default Main;