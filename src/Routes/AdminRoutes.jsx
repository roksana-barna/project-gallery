import React, { Children } from 'react';
import useAdmin from '../Components/Hooks/useAdmin';
import useAuth from '../Components/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default AdminRoutes;