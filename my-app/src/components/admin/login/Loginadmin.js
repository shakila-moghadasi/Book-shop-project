import React from 'react';
import { Formik , Field, ErrorMessage } from 'formik';
import { Outlet } from 'react-router-dom';

function validator(values) {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
}

  const Loginadmin = ({ data , onchange }) => 
  {
    console.log(data)
    return (
    <Formik
      enableReinitialize = {true}
      initialValues={{ 
        email: data.email , 
        password: data.password , 
      }}
      validate={ validator }
      onSubmit={(values, { setSubmitting }) => {
        onchange(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
      }) => (
        <>
        <form onSubmit={handleSubmit}>
          <Field
            type="email"
            name="email"
          />
          <ErrorMessage name='email' />
          <Field
            type="password"
            name="password"
          />
          <ErrorMessage name='password' />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
        <Outlet/>
        </>
      )}
    </Formik>)}

export default Loginadmin;
