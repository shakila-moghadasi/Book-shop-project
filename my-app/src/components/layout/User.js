import React from 'react';
import Userheader from '../user/Userheader';

const User = (props) => {
  return (
    <div>
        <Userheader/>
        {props.children}
    </div>
  )
}

export default User;