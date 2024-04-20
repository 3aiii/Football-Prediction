import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Content from './pages/Content.jsx'
import MatchPred from './pages/MatchPred.jsx'
import TableScore from './pages/TableScore.jsx'
import TableTeam from './components/TableTeam.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/favourites/:id",
    element : <Content />
  },
  {
    path : '/TeamDetail/:name',
    element : <TableScore/>
  },
  {
    path : '/TeamDetail',
    element : <TableTeam/>
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