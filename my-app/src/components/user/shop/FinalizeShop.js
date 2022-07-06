import React, { useState } from "react";
import { api } from "../../admin/commodity/manegementcommodity/api";
import { useLocation } from 'react-router-dom';
import { 
    Button ,
    TextField ,
    Grid
} from '@mui/material';

const Form = () => {
  const Price = useLocation();
  const [formValues, setFormValues] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    await api.post('http://localhost:3002/orders', {
      data: formValues,
      amount : Price.state.name,
      createdAt: new Date(),
      isDelivered: false,
    });
  };
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="first-input"
            name="name"
            label="First Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="last-input"
            name="Last Name"
            label="Last Name"
            type="text"
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="adress-input"
            name="Adress"
            label="Adress"
            type="text"
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="number-input"
            name="number phone"
            label="number phone"
            type="text"
            value={formValues.number}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="Date-input"
            name="Date Delevery"
            type="date"
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Button variant="contained" color="primary" type="submit">
          payment
        </Button>
      </Grid>
    </form>
    </>
  );
};
export default Form;