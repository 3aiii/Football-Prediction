import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Favorite from './pages/Favorite.jsx'
import Content from './pages/Content.jsx'
import MatchPred from './pages/MatchPred.jsx'
import TableScore from './pages/TableScore.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/favourites",
    element : <Favorite />
  },
  {
    path : "/favourites/:id",
    element : <Content />
  },
  {
    path : '/TeamDetail',
    element : <TableScore/>
  },
  {
    path : '/Predictions',
    element : <MatchPred/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)