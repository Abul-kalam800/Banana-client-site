 import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../provider/AuthContex';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';
 
 const PrivetRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContex)

    if(loading){
        return <Loading></Loading>
    }
    if(!user|| !user.email){
     return   <Navigate state={location.pathname} to="/login"></Navigate>

    }
    return (
        <div>
       
           {children} 
        </div>
    );
 };
 
 export default PrivetRouter;