import { createBrowserRouter } from 'react-router-dom'
import Registration from '../features/auth/pages/Registration'
import Login from '../features/auth/pages/Login'
import ProtectedRoutes from '../features/auth/components/ProtectedRoutes'
import Home from '../features/home/pages/Home'


export const router = createBrowserRouter([
    {
        path:"/",
        element: <ProtectedRoutes><Home/></ProtectedRoutes>
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