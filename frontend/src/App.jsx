import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import SongContext from './features/home/contexts/SongContext'

function App() {
  return (
    <SongContext>
      <RouterProvider router={router} />
    </SongContext>
  )
}

export default App