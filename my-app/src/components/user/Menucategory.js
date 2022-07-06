import React, { useEffect, useState } from 'react';
import { List, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import axios from 'axios';


export default function Menucategory(props) {
    const [id , setid] = useState();
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

    console.log(props.novelcategory);

  return (
    <div style={{ width: '100%' }}>
        <Typography>Tragedy:</Typography>
        {data?.map((item) => {
          if(item.category === "Tragedy") {
            return (
            <div>
               <Link onClick={() => setid(item.id)}>{item.title}</Link>
            </div>
            )
          }
        })}
        <Typography>fantasy:</Typography>
        {data?.map((item) => {
          if(item.category === "fantasy") {
            return (
            <div>
               <Link onClick={() => setid(item.id)}>{item.title}</Link>
            </div>
            )
          }
        })}
        <Typography>novel:</Typography>
        {data?.map((item) => {
          if(item.category === "novel") {
            return (
            <div>
               <Link onClick={() => setid(item.id)}>{item.title}</Link>
            </div>
            )
          }
        })}
        <Typography>poem:</Typography>
        {data?.map((item) => {
          if(item.category === "poem") {
            return (
            <div>
               <Link onClick={() => setid(item.id)}>{item.title}</Link>
            </div>
            )
          }
        })}
        <Typography>Comedy:</Typography>
        {data?.map((item) => {
          if(item.category === "Comedy") {
            return (
            <div>
               <Link onClick={() => setid(item.id)}>{item.title}</Link>
            </div>
            )
          }
        })}
    </div>
  );
}