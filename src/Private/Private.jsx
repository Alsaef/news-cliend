/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location = useLocation();
    if (loader) {
      return(
        <div className="spinner-border text-primary" role="status" style={{marginTop:'150px',marginLeft:'150px'}}>
  <span className="visually-hidden ">Loading...</span>
</div>
      )  
    }
    if (user) {
       return children 
    }
    return <Navigate to='/login'  state={{from: location}} replace></Navigate>
};

export default Private;