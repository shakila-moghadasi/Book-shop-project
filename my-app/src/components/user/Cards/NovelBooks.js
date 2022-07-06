import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const NovelBooks = () => {
  const [data , setdata] = useState();
  const navigate = useNavigate();

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
        <ImageList sx={{ width: 1000, height: 1800, mt:10, ml:22 }} cols={4}>
        {data?.map((item) => {
            if(item.category === 'novel') {
              return (
                <Card onClick={() => {
                  {console.log(item.id)}
                  navigate('/card',{state:{name:item.id}})
                  }}>
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
              )
          }
        })}
      </ImageList>
      </Box>
    </div> 
  );
}

export default NovelBooks;