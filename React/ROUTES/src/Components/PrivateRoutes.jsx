import React from "react";
import { AuthValContext } from '../Context/AuthProvider';
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children}) => {
    const { auth } = React.useContext(AuthValContext);
    if (!auth) {
        return <Navigate to="/login" />;
    }
    return children;
}