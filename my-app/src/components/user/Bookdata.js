import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';

export default function Bookdata(props) {
const [data , setdata] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3002/products/${props.id}`)
    .then((res) => {
        setdata(res.data)
    })
    .catch((err) => {
        alert(err.response.statusText);
    });
  },[]);

  return (
    <div> 
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>Tragedy</Link>
    <ImageList sx={{ width: 1000, height: 880, mt:25, ml:22 }} cols={4}>
      {data?.map((item) => (
        <Card>
        <ImageListItem key={item.id}>
          <img
            src={`http://localhost:3002/files/${item.image}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`${item.price}$`}
            position="below"
          />
        </ImageListItem>
        </Card>
      ))}
    </ImageList>
    </div> 
  );
}