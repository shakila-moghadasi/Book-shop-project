import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

const Loginadmin = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  console.log(data);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.email === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div style={{ padding: 30 }}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="email" name="uname" type={'email'} required></TextField>
            {renderErrorMessage("uname")}
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" name="pass" type={'password'} required></TextField>
            {renderErrorMessage("pass")}
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit"> Login </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
  return (
    <div>
      {isSubmitted ? Navigate('http://localhost:3000/managecommodity') : renderForm}
    </div>
  );
};

export default Loginadmin;

const rootElement = document.getElementById("root");
ReactDOM.render(<Loginadmin />, rootElement);
