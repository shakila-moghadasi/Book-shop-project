import React from 'react';
import { Outlet } from 'react-router-dom';

const Withoutheader = (props) => {
  return (
    <div>  
      {props.children}
      <Outlet/>    
    </div>
  )
}

export default Withoutheader;