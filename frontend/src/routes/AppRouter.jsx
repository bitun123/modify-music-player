import { createBrowserRouter } from 'react-router-dom'
import Registration from '../features/auth/pages/Registration'
import Login from '../features/auth/pages/Login'

export const router = createBrowserRouter([
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/login',
        element: <Login />
    }
])