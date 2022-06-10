import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';

export default function TitlebarBelowImageList() {
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
    <div> 
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>Tragedy</Link>
    <ImageList sx={{ width: 1000, height: 880, mt:25, ml:22 }} cols={4}>
      {Tragedy?.map((item) => (
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
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>novel</Link>
    <ImageList sx={{ width: 1000, height: 1800, mt:25, ml:22 }} cols={4}>
      {novel?.map((item) => (
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
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>fantasy</Link>
    <ImageList sx={{ width: 1000, height: 870, mt:25, ml:22 }} cols={4}>
      {fantasy?.map((item) => (
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
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>poem</Link>
    <ImageList sx={{ width: 1000, height: 430, mt:25, ml:22 }} cols={4}>
      {poem?.map((item) => (
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
    <Link sx={{ ml:22, color: "#000000", fontSize: 50 }}>Comedy</Link>
    <ImageList sx={{ width: 1000, height: 450, mt:25, ml:22 }} cols={4}>
      {Comedy?.map((item) => (
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

