import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loginadmin from './Loginadmin';

export default function AxiosLogin() {
    const [data , setdata] = useState({
        email:"",
        password:"",
    });
    useEffect(() => {
        axios.get('http://localhost:3002/users')
        .then((res) => {
            setdata(res.data)
        })
        .catch((err) => {
            alert(err.response.statusText);
        });
    },[]);

  return (
    <Loginadmin
        data = { data }
        onChange = {(newData) => {
            alert(JSON.stringify(newData));
        }}
    />
  );
}
