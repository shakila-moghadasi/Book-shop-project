import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@mui/material';
const Loginadmin = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

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
            <TextField label="Username" name="uname" required></TextField>
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
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
};

export default Loginadmin;

const rootElement = document.getElementById("root");
ReactDOM.render(<Loginadmin />, rootElement);
