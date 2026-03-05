import { createBrowserRouter } from 'react-router-dom'
import Registration from '../features/auth/pages/Registration'
import Login from '../features/auth/pages/Login'
import ProtectedRoutes from '../features/auth/components/ProtectedRoutes'


export const router = createBrowserRouter([
    {
        path:"/",
        element: <ProtectedRoutes><h1>Home Page</h1></ProtectedRoutes>
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/login',
        element: <Login />
    }
])