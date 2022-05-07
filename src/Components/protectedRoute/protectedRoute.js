import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseinit';
import AddSpinner from '../../Hooks/AddSpinner/AddSpinner';
import loading from '../../images/loading.gif'

const ProtectedRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    let location = useLocation();
    if(loading){
     return <AddSpinner></AddSpinner>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
    
};

export default ProtectedRoute;