import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import { Children } from 'react'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App