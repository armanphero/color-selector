import React, { useContext } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if(isLoading){
        return <p className='text-xl text-blue-500'>Loading...</p>
    }
    if (!user) {
        console.log(user);
        return <Navigate to='/login' replace state={location}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;