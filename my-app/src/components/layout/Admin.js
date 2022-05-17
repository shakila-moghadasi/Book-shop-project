import React from 'react';
import Adminheader from '../admin/Adminheader';

const Admin = (props) => {
  return (
    <div>
          <Adminheader/>
        {props.children}
    </div>
  )
}

export default Admin;
