import React from 'react'
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({ children }) {

    const { user, loading } = useAuth()

    if (loading) {
        return <h1>Loading</h1>
    }

    if (!loading && !user) {
        return <Navigate to="/login" />
    }


    return children
}

export default ProtectedRoutes